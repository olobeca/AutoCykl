import React, { useState } from 'react';

function Chat({props}) {

    const [message, setMessage] = useState("");
    console.log("Chat props:", props);
    
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
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
        setMessage("");
    }
    const [messagesList, setMessagesList] = useState(props.messages || []);
    const [meetingPropositionsList, setMeetingPropositionsList] = useState(props.meetingPropostions || []);
    const [prizePropositionsList, setPrizePropositionsList] = useState(props.pricePropostions || []);

    

    const messages = [
        {fromMe: false, text: "Dzień dobry, czy oferta jest nadal aktualna?", time: "12:45", type:"text"},
        {fromMe: true, text: "Tak, oferta jest ak tualna. Proszę o kontakt w celu umówienia się na oględziny.", time: "12:47", type:"text"},
        {fromMe: false, text: "Dziękuję za szybką odpowiedź! Kiedy moglibyśmy się spotkać?", time: "12:50", type:"text"},
        {fromMe: true, text: "Czy jutro o 15:00 pasuje?", time: "12:52", type:"text"},
        {fromMe: false, text: "Tak, jutro o 15:00 będzie idealnie. Do zobaczenia!", time: "12:55", type:"text"},
    ];

    const meetingPropositions = [
        {date: "2024-06-15", Meetingtime: "15:00", place: "ul. Kwiatowa 10, Warszawa", message: "Czy to miejsce Panu odpowiada?", status: "Oczekuje na odpowiedź", fromMe: false, type:"text",time: "12:53"},
        {date: "2024-06-16", Meetingtime: "10:00", place: "ul. Leśna 5, Kraków", message: "Proszę potwierdzić termin.", status: "Zaakceptowane", fromMe: true, type:"text",time: "12:54"},
    ]

    const prizeProposition = [
        {proposedPrice: "140000", message: "Czy mogę zaproponować niższą cenę?", status: "Oczekuje na odpowiedź", fromMe: false, type:"text",time: "12:53"},
        {proposedPrice: "135000", message: "A co powiesz na 135000 zł?", status: "Oczekuje na odpowiedź", fromMe: true, type:"text",time: "12:54"},
    ]

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
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.fromMe ? 'justify-end' : 'justify-start'}`}>
                        {message.type === "text" ? (
                            <div className="flex flex-col">
                            <div className={`max-w-1/2 p-2 rounded-xl ${message.fromMe ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                <p>{message.text}</p>
                            </div>
                            <span className="text-xs text-gray-500  mt-1 text-right">{message.time}</span>
                        </div>
                        ) : (null)}
                    </div>
                ))}
                {meetingPropositions.map((proposition, index) => (
                    <div key={index} className={`flex ${proposition.fromMe ? 'justify-end' : 'justify-start'}`}>
                        {proposition.type === "text" ? (
                            <div className="flex flex-col">
                            <div className={`max-w-1/2 px-4 p-2 rounded-xl flex flex-col gap-2 ${proposition.fromMe ? 'bg-orange-50 text-white border border-orange-400'  : 'bg-gray-50 text-gray-700 border border-gray-400'}`}>
                                <span className="text-sm text-gray-500  mt-1 text-left">Propozycja spotkania</span>
                                <div className="flex gap-1">
                                    <span className="font-bold text-base text-black">Data:</span>
                                    <span className="text-base text-black">{proposition.date}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-base text-black">Godzina:</span>
                                    <span className="text-base text-black">{proposition.Meetingtime}</span>
                                </div>
                                <div className="flex gap-1 mb-1">
                                    <span className="font-bold text-base text-black">Miejsce:</span>
                                    <span className="text-base text-black">{proposition.place}</span>
                                </div>
                                <span className="text-sm text-gray-500  mt-1 text-left">Proponuję spotkanie</span>
                                <span className={proposition.status === "Zaakceptowane" ? "bg-green-300 w-full text-green-600 p-1 text-xs text-center rounded-lg" : "bg-red-200 text-red-600 p-1 text-xs text-center rounded-lg"}>{proposition.status}</span>
                            </div>
                            <span className="text-xs text-gray-500  mt-1 text-right">{proposition.time}</span>
                        </div>
                        ) : (null)}
                    </div>
                ))}
                {prizeProposition.map((proposition, index) => (
                    <div key={index} className={`flex ${proposition.fromMe ? 'justify-end' : 'justify-start'}`}>
                        {proposition.type === "text" ? (
                            <div className="flex flex-col">
                            <div className={`max-w-1/2 px-4 p-2 rounded-xl flex flex-col gap-2 ${proposition.fromMe ? 'bg-orange-50 text-white border border-orange-400'  : 'bg-gray-50 text-gray-700 border border-gray-400'}`}>
                                <span className="text-sm text-gray-500  mt-1 text-left">Propozycja ceny</span>
                                <span className="text-2xl text-black">{proposition.proposedPrice} zł</span>
                                <span className="text-sm text-gray-500  mt-1 text-left">Moja propozycja</span>
                                <span className={proposition.status === "Zaakceptowane" ? "bg-green-300 w-full text-green-600 p-1 text-xs text-center rounded-lg" : "bg-red-200 text-red-600 p-1 text-xs text-center rounded-lg"}>{proposition.status}</span>
                            </div>
                            <span className="text-xs text-gray-500  mt-1 text-right">{proposition.time}</span>
                        </div>
                        ) : (null)}
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






