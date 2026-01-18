import "../App.css";
import Header from "../components/Header.jsx";
import React from "react";
import { useState } from "react";
import MessagesCard from "../components/MessagesCard.jsx";
import Chat from "../components/Chat.jsx";
import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import {useContext} from   "react"
import UserContext from "../context/UserContext.jsx";


function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(false);
  const [conversationData, setConversationData] = useState(null);
  const [userChats, setUserChats] = useState([]);
  const [isLoadingChats, setIsLoadingChats] = useState(true);

  const [isPrizeProposalFormOpen, setIsPrizeProposalFormOpen] = useState(false);

  const [isMeetingProposalFormOpen, setIsMeetingProposalFormOpen] = useState(false);

  const [priceProposal, setPriceProposal] = useState("");

  function handlePriceProposalChange(event) {
    setPriceProposal(event.target.value);
  }
  
  const [prizeProposalMessage, setPriceProposalMessage] = useState("");
  
  function handlePrizeProposalMessageChange(event) {
    setPriceProposalMessage(event.target.value);
  }

  const [meetingDate, setMeetingDate] = useState("");

  function handleMeetingDateChange(event) {
    setMeetingDate(event.target.value);
  }

  const [meetingTime, setMeetingTime] = useState("");   

  function handleMeetingTimeChange(event) {
    setMeetingTime(event.target.value);
  }

  const [meetingPlace, setMeetingPlace] = useState("");   

  function handleMeetingPlaceChange(event) {
    setMeetingPlace(event.target.value);
  }

  const [meetingProposalMessage, setMeetingProposalMessage] = useState("");
  
  function handleMeetingProposalMessageChange(event) {
    setMeetingProposalMessage(event.target.value);
  }

  const location = useLocation();
  const conversationId = location.state?.conversationId;

  useEffect(() => {
    if (conversationId) {
      setSelectedConversation(true);
    }
  }, [conversationId]);

  const {user} = useContext(UserContext);

  useEffect(() => {
    if (!user || !user.id) {
      setUserChats([]);
      setIsLoadingChats(false);
      return;
    }

    async function fetchUserChats() {
      try {
        console.log("Fetching chats for user ID:", user.id);
        const response = await fetch(`http://localhost:5001/chats/getChatsByUserId/${user.id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched user chats:", data);
        setUserChats(data.chats || []);
      } catch (err) {
        console.error("Error fetching user chats:", err);
      } finally {
        setIsLoadingChats(false);
      }
    }

    setIsLoadingChats(true);
    fetchUserChats();
  }, [user?.id]);


  
  return (
    
    <div className="relative">
    <div className={`${isPrizeProposalFormOpen || isMeetingProposalFormOpen ? 'brightness-50' : ''}`}>
      <Header />
      <div className='bg-gray-50 border-gray-200 flex px-16 '>
        <div className='w-[27%] mx-auto bg-white border border-gray-100 '>
            <div className="flex flex-col gap-2 text-center mb-4 p-4">
                <span className="text-lg font-semibold text-black text-left">Wiadomości</span>
                <input placeholder='Szukaj wiadomości...' className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-500"></input>
            </div>
            <div className="w-full mt-2">
                <hr className="border-t-1 border-gray-200" />
            </div>
            <div className="flex flex-col gap-4">
                <div onClick={() => { setSelectedConversation('true'); setConversationData({time: "12:45", profileImage: "https://randomuser.me/api/portraits/men/75.jpg",name: "Jan Kowalski",carImage: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2020-toyota-corolla-hatchback.jpg",carName: "Toyota Corolla",lastMessage: "Dzień dobry, czy oferta jest nadal aktualna?"})}}>
                    <MessagesCard props={{
                        time: "12:45",
                        newMessagesAmmount: 2,
                        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
                        name: "Jan Kowalski",
                        carImage: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2020-toyota-corolla-hatchback.jpg",
                        carName: "Toyota Corolla",
                        lastMessage: "Dzień dobry, czy oferta jest nadal aktualna?"
                    }} />
                </div>
                <MessagesCard props={{
                    time: "09:30",
                    newMessagesAmmount: 0,
                    profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
                    name: "Anna Nowak",
                    carImage: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2020-toyota-corolla-hatchback.jpg",
                    carName: "Toyota Corolla",
                    lastMessage: "Dziękuję za szybką odpowiedź!"
                }} />
                <MessagesCard props={{
                    time: "Wczoraj",
                    newMessagesAmmount: 1,
                    profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
                    name: "Piotr Wiśniewski",
                    carImage: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2020-toyota-corolla-hatchback.jpg",
                    carName: "Toyota Corolla",
                    lastMessage: "Czy mogę umówić się na jazdę próbną?"
                }} />
            </div>

        </div>
        <div className='w-[73%] mx-auto bg-white border h-screen'>
            {selectedConversation ? ( <Chat props={{formFunction: setIsPrizeProposalFormOpen, meetingFormFunction: setIsMeetingProposalFormOpen, profileImage: "https://randomuser.me/api/portraits/men/45.jpg", name: 'jan', userType: "Użytkownik", carImage: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2020-toyota-corolla-hatchback.jpg", carName: "Toyota Corolla", carYear: 2020, carPrize: 10000}} />
            ) : (
            <div className='flex flex-col gap-2 items-center justify-center h-96 mt-20'>
                <span className="text-lg text-black">Wybierz konwersację</span>
                <span className="text-lg text-gray-700">Wybierz konwersację z listy, aby rozpocząć</span>
            </div>
            )}
        </div>
      </div>
      
    </div>
    <div className={`${isPrizeProposalFormOpen ? '' : 'hidden'}  bg-white top-1/4 left-[40%] w-1/4  rounded-md fixed flex flex-col text-left justify-center p-6 gap-4`}>
        <div className="flex flex-col gap-1">
            <span className="text-black text-lg font-semibold">Zaproponuj cene</span>
            <span className="text-gray-700 text-sm">Wyślij propozycję ceny dla tego pojazdu</span>
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-black text-base">Twoja propozycja</span>
            <input className="w-full text-sm bg-gray-200 rounded-md text-gray-500 p-2" placeholder="np. 45000" value={priceProposal} onChange={handlePriceProposalChange}></input>
            <span className="text-gray-700 text-sm">Aktualna cena to 145000</span>
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-black text-base">Wiadmość (opcjonalnie)</span>
            <textarea className="w-full bg-gray-200 rounded-md text-gray-500 p-2 text-sm mb-2" placeholder="Dodaj wiadomość..." value={prizeProposalMessage} onChange={handlePrizeProposalMessageChange}></textarea>
        </div>
        <div className="flex justify-end gap-2">
            <button onClick={() => setIsPrizeProposalFormOpen(false)} className="bg-white border text-base border-gray-300 rounded-md text-gray-700 px-3 py-2">Anuluj</button>
            <button onClick={() => setIsPrizeProposalFormOpen(false)} className="bg-orange-600 text-base hover:bg-orange-500 rounded-md text-white px-3 py-2">Wyślij propozycję</button>
        </div>
    </div>
    <div className={`${isMeetingProposalFormOpen ? '' : 'hidden'}  bg-white top-1/4 left-[40%] w-1/4  rounded-md fixed flex flex-col text-left justify-center p-6 gap-4`}>
        <div className="flex flex-col gap-1">
            <span className="text-black text-lg font-semibold">Zaproponuj spotkanie</span>
            <span className="text-gray-700 text-sm">Umów się na oględziny pojazdu</span>
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-black text-base">Data</span>
            <input type="date" className="w-full text-sm bg-gray-200 rounded-md text-gray-500 p-2" placeholder="np. 45000" value={meetingDate} onChange={handleMeetingDateChange}></input>
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-black text-base">Godzina</span>
            <input type="time" className="w-full text-sm bg-gray-200 rounded-md text-gray-500 p-2" value={meetingTime} onChange={handleMeetingTimeChange}></input>
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-black text-base">Miejsce</span>
            <input className="w-full bg-gray-200 rounded-md text-gray-500 p-2 text-sm mb-2" placeholder="Dodaj miejsce..." value={meetingPlace} onChange={handleMeetingPlaceChange}></input>
        </div>

        <div className="flex flex-col gap-1">
            <span className="text-black text-base">Wiadomość (opcjonalnie)</span>
            <textarea className="w-full bg-gray-200 rounded-md text-gray-500 p-2 text-sm mb-2" placeholder="Dodaj wiadomość..." value={meetingProposalMessage} onChange={handleMeetingProposalMessageChange}></textarea>
        </div>
        <div className="flex justify-end gap-2">
            <button onClick={() => setIsMeetingProposalFormOpen(false)} className="bg-white border text-base border-gray-300 rounded-md text-gray-700 px-3 py-2">Anuluj</button>
            <button onClick={() => setIsMeetingProposalFormOpen(false)} className="bg-orange-600 text-base hover:bg-orange-500 rounded-md text-white px-3 py-2">Wyślij propozycję</button>
        </div>
    </div>
    </div>
  )
}

export default Messages;
