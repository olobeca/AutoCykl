import React, { useState } from 'react';
import io from 'socket.io-client';
import { useEffect } from 'react';

function Chat({props}) {

    const socket = io('http://localhost:5001');


    useEffect(() => {
        const socket = io('http://localhost:5001');
    
        socket.on("message", (msg) => {
          console.log("Received websocket message:", msg);
          console.log("Current chat ID:", props.id);
          if(props.id === msg.data.chatConversationId) {
            setMessagesList((prevMessages) => [...prevMessages, msg.data]);
            // console.log("Updated messages list with new message:", msg.data);
          }
        });
    
        return () => {
          socket.disconnect();
        };
      }, []);

    const [message, setMessage] = useState("");
    
    function handleMessageInputChange(event) {
        setMessage(event.target.value);
    }
    async function handleSendMessage() {
        console.log("probuje wyslac iadomosc do czatu o id:", props.id, "od uzytkownika:", props.senderId, "o tresci:", message);
        if (!props.id || !props.senderId || !message.trim()) {
            console.error("Brakuje chatId, senderId lub tresci - anulowano wysylke");
            return;
        }
        try {
            const response = await fetch(`http://localhost:5001/chats/newMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    chatId: props.id,
                    senderId: props.senderId,
                    content: message,
                }),
                });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Message sent successfully:", data);

            // websocket emit
            socket.emit("message", {
                data
            });
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
        setMessage("");
    }
    const [messagesList, setMessagesList] = useState(props.messages || []);
    const [meetingPropositionsList, setMeetingPropositionsList] = useState(props.meetingPropostions || []);
    const [prizePropositionsList, setPrizePropositionsList] = useState(props.pricePropostions || []);

    // Dummy data - zakomentowane
    // const messages = [
    //     {fromMe: false, text: "Dzień dobry, czy oferta jest nadal aktualna?", time: "12:45", type:"text"},
    //     {fromMe: true, text: "Tak, oferta jest ak tualna. Proszę o kontakt w celu umówienia się na oględziny.", time: "12:47", type:"text"},
    //     {fromMe: false, text: "Dziękuję za szybką odpowiedź! Kiedy moglibyśmy się spotkać?", time: "12:50", type:"text"},
    //     {fromMe: true, text: "Czy jutro o 15:00 pasuje?", time: "12:52", type:"text"},
    //     {fromMe: false, text: "Tak, jutro o 15:00 będzie idealnie. Do zobaczenia!", time: "12:55", type:"text"},
    // ];

    // const meetingPropositions = [
    //     {date: "2024-06-15", Meetingtime: "15:00", place: "ul. Kwiatowa 10, Warszawa", message: "Czy to miejsce Panu odpowiada?", status: "Oczekuje na odpowiedź", fromMe: false, type:"text",time: "12:53"},
    //     {date: "2024-06-16", Meetingtime: "10:00", place: "ul. Leśna 5, Kraków", message: "Proszę potwierdzić termin.", status: "Zaakceptowane", fromMe: true, type:"text",time: "12:54"},
    // ]

    // const prizeProposition = [
    //     {proposedPrice: "140000", message: "Czy mogę zaproponować niższą cenę?", status: "Oczekuje na odpowiedź", fromMe: false, type:"text",time: "12:53"},
    //     {proposedPrice: "135000", message: "A co powiesz na 135000 zł?", status: "Oczekuje na odpowiedź", fromMe: true, type:"text",time: "12:54"},
    // ]

    // Kombinowanie wszystkich wiadomości, propozycji i sortowanie po godzinie
    const allItems = [
        ...messagesList.map(msg => ({
            id: msg.id,
            type: "message",
            fromMe: msg.senderId === props.senderId,
            text: msg.content,
            createdAt: msg.createdAt,
            time: msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }) : '',
        })),
        ...meetingPropositionsList.map(meeting => ({
            id: meeting.id,
            type: "meetingProposal",
            fromMe: meeting.senderId === props.senderId,
            date: meeting.meetingDate,
            Meetingtime: meeting.meetingTime,
            place: meeting.location,
            status: meeting.status,
            createdAt: meeting.createdAt,
            time: meeting.createdAt ? new Date(meeting.createdAt).toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }) : '',
        })),
        ...prizePropositionsList.map(prize => ({
            id: prize.id,
            type: "priceProposal",
            fromMe: prize.senderId === props.senderId,
            proposedPrice: prize.price,
            status: prize.status,
            createdAt: prize.createdAt,
            time: prize.createdAt ? new Date(prize.createdAt).toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }) : '',
        })),
    ].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));


    async function changeMeetingStatus(newStatus,id) {
        try {
            const response = await fetch(`http://localhost:5001/chats/changeMeetingProposalStatus/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    newStatus: newStatus,
                }),
                });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Meeting status changed successfully:", data);  
        } catch (error) {
            console.error("Error changing meeting status:", error);
        }
    }

    async function changePriceStatus(newStatus,id) {
        try {
            const response = await fetch(`http://localhost:5001/chats/changePrizeProposalStatus/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    newStatus: newStatus,
                }),
                });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Price status changed successfully:", data);  
        } catch (error) {
            console.error("Error changing price status:", error);
        }
    }

    return (
        <div className='flex flex-col h-screen'>
            <div className="flex flex-col  border-b border-gray-200">
                <div className="sticky top-0 bg-white p-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img className="rounded-full inline w-16 h-16 overflow-hidden p-2 object-cover" src={props.profileImage} alt={props.name} />
                        <div className="flex flex-col gap-1">
                            <span className="text-base font-medium text-gray-700">{props.name}</span>
                            <span className="text-sm text-gray-500">{props.userType}</span>
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <button className="text-base text-gray-500">📞</button>
                        <button className="text-base text-gray-500">⚙️</button>
                    </div>
                </div>
                <div className="p-4">
                    <div className="bg-gray-50 rounded-md p-4 w-full flex justify-between">
                        <div className="flex gap-1">
                            <img className="rounded-sm inline w-8 h-8 overflow-hidden p-1 object-cover" src={props.carImage} alt={props.carName} />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-700">{props.carName}</span>
                                <div className="flex gap-1">
                                    <span className="text-sm text-gray-500">{props.carYear}</span>
                                    <span className="text-sm text-gray-500">•</span>
                                    <span className="text-sm text-gray-500">{props.carPrize} zł</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="bg-gray-50 hover:bg-gray-200 transition-colors rounded-md text-base font-medium text-orange-600 hover:text-gray-700 py-1 px-2">Zobacz ogłoszenie</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 p-6  h-full overflow-y-auto">
                {allItems.map((item, index) => (
                    <div key={index} className={`flex ${item.fromMe ? 'justify-end' : 'justify-start'}`}>
                        {item.type === "message" && (
                            <div className="flex flex-col">
                            <div className={`max-w-1/2 p-2 rounded-xl ${item.fromMe ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                <p>{item.text}</p>
                            </div>
                            <span className="text-xs text-gray-500  mt-1 text-right">{item.time}</span>
                        </div>
                        )}
                        {item.type === "meetingProposal" && (
                            <div className="flex flex-col">
                            <div className={`max-w-1/2 px-4 p-2 rounded-xl flex flex-col gap-2 ${item.fromMe ? 'bg-orange-50 text-white border border-orange-400'  : 'bg-gray-50 text-gray-700 border border-gray-400'}`}>
                                <span className="text-sm text-gray-500  mt-1 text-left">Propozycja spotkania</span>
                                <div className="flex gap-1">
                                    <span className="font-bold text-base text-black">Data:</span>
                                    <span className="text-base text-black">{item.date}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-base text-black">Godzina:</span>
                                    <span className="text-base text-black">{item.Meetingtime}</span>
                                </div>
                                <div className="flex gap-1 mb-1">
                                    <span className="font-bold text-base text-black">Miejsce:</span>
                                    <span className="text-base text-black">{item.place}</span>
                                </div>
                                <span className="text-sm text-gray-500  mt-1 text-left">Proponuję spotkanie</span>
                                <div className={item.status === "Zaakceptowane" ? "bg-green-300 w-full text-green-600 p-1 text-xs text-center rounded-lg relative" : "bg-red-200 text-red-600 p-1 text-xs text-center rounded-lg relative"}>{item.status}
                                    {item.fromMe ? null :
                                    <div className="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 hover:opacity-100 bg-orange-50 flex items-center justify-center gap-1">
                                        <button className="bg-white text-xs text-green-600 px-2 py-1 w-full rounded-md border " onClick={() => changeMeetingStatus("Zaakceptowane", item.id)}>Zaakceptuj</button>
                                        <button className="bg-white text-xs text-red-600 px-2 py-1 rounded-md w-full border" onClick={() => changeMeetingStatus("Odrzucone", item.id)}>Odrzuć</button>
                                    </div> }
                                </div>
                            </div>
                            <span className="text-xs text-gray-500  mt-1 text-right">{item.time}</span>
                        </div>
                        )}
                        {item.type === "priceProposal" && (
                            <div className="flex flex-col">
                            <div className={`max-w-1/2 px-4 p-2 rounded-xl flex flex-col gap-2 ${item.fromMe ? 'bg-orange-50 text-white border border-orange-400'  : 'bg-gray-50 text-gray-700 border border-gray-400'}`}>
                                <span className="text-sm text-gray-500  mt-1 text-left">Propozycja ceny</span>
                                <span className="text-2xl text-black">{item.proposedPrice} zł</span>
                                <span className="text-sm text-gray-500  mt-1 text-left">Moja propozycja</span>
                                <div className={item.status === "Zaakceptowane" ? "bg-green-300 w-full text-green-600 p-1 text-xs text-center relative rounded-lg" : "bg-red-200 text-red-600 p-1 text-xs text-center relative rounded-lg"}>{item.status}
                                    {item.fromMe ? null :
                                    <div className="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 hover:opacity-100 bg-orange-50 flex items-center justify-center gap-1">
                                        <button className="bg-white text-xs text-green-600 px-2 py-1 w-full rounded-md border " onClick={() => changePriceStatus("Zaakceptowane", item.id)}>Zaakceptuj</button>
                                        <button className="bg-white text-xs text-red-600 px-2 py-1 rounded-md w-full border" onClick={() => changePriceStatus("Odrzucone", item.id)}>Odrzuć</button>
                                    </div>
                                 }
                                </div>
                            </div>
                            <span className="text-xs text-gray-500  mt-1 text-right">{item.time}</span>
                        </div>
                        )}
                    </div>
                ))}
            
            </div>
            <div className="sticky bottom-0 p-4 flex flex-col gap-2 border border-gray-200 bg-white">
                <div className="flex gap-4 text-left">
                    <button onClick={() => props.formFunction(true)} className="border rounded-xl border-gray-200 hover:bg-gray-100 p-1 text-sm text-black font-normal">$ Zaproponuj cenę</button>
                    <button onClick={() => props.meetingFormFunction(true)} className="border rounded-xl border-gray-200 hover:bg-gray-100 p-1 text-sm text-black font-normal">📅 Umów spotkanie</button>
                </div>
                <div className="flex gap-2">
                    <input value={message} onChange={handleMessageInputChange} type="text" placeholder="Napisz wiadomość..." className="w-full bg-gray-100 rounded-md p-2 text-gray-500 pb-6"/>
                    <button onClick={handleSendMessage} className="bg-orange-600 hover:bg-orange-500 text-white rounded-md p-3">💬</button>
                </div>
            </div>
        </div>
    )
}

export default Chat;






