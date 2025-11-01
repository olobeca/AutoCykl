import "../App.css";
import Header from "../components/Header.jsx";
import React from "react";
import { useState } from "react";
import MessagesCard from "../components/MessagesCard.jsx";
import Chat from "../components/Chat.jsx";


function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(false);
  const [conversationData, setConversationData] = useState(null);


  return (
    <div className='bg-white'>
      <Header />
      <div className='bg-white border-gray-200 flex  gap-2'>
        <div className='w-[30%] mx-auto bg-white border border-gray-100 p-2 px-2'>
            <div className="flex flex-col gap-2 text-center mb-4 p-4">
                <span className="text-lg font-semibold text-black text-left">Wiadomości</span>
                <input placeholder='Szukaj wiadomości...' className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-500"></input>
            </div>
            <div className="w-full mt-2">
                <hr className="border-t-1 border-gray-200" />
            </div>
            <div className="flex flex-col gap-4 mt-4">
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
        <div className='w-[70%] mx-auto bg-white border h-screen'>
            {selectedConversation ? ( <Chat props={{profileImage: "https://randomuser.me/api/portraits/men/45.jpg", name: 'jan', userType: "Użytkownik"}} />
            ) : (
            <div className='flex flex-col gap-2 items-center justify-center h-96 mt-20'>
                <span className="text-lg text-black">Wybierz konwersację</span>
                <span className="text-lg text-gray-700">Wybierz konwersację z listy, aby rozpocząć</span>
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Messages;
