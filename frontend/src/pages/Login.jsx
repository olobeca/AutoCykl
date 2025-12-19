import "../App.css";
import car from "../icons/car.svg";
import React from "react";
import { useState } from "react"; 
import email from "../icons/email.svg";
import user from "../icons/userGray.svg";
import password from "../icons/password.svg";
import phone from "../icons/phone.svg";
import UserContext from "../context/UserContext";
import { useContext } from "react";


function Login() {


  const {user,setUser, token, setToken} = useContext(UserContext);
  const [type, setType] = useState("Logowanie");

  const [isRegulAccepted, setIsRegulAccepted] = useState(false);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function handleLoginEmailChange(event) {
    setUserLogin({...userLogin, email: event.target.value});
  }

  function handleLoginPasswordChange(event) {
    setUserLogin({...userLogin, password: event.target.value});
  }

  function handleLoginSubmit() {
    fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // bardzo ważne! pozwala na wysyłanie cookie z refresh tokenem
        body: JSON.stringify({
            email: userLogin.email,
            password: userLogin.password,
        })
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        setUser(data.user);
        alert(`Zalogowano pomyślnie jako ${user.name}`);
        console.log("User data:", user);
        setToken(data.accessToken);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    setUserLogin({
        email: "",
        password: "",
    })

  }

  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  function handleUsernameChange(event) {
    setUserRegister({...userRegister, name: event.target.value});
  }

  function handleEmailChange(event) {
    setUserRegister({...userRegister, email: event.target.value});
  }

  function handlePhoneNumberChange(event) {
    setUserRegister({...userRegister, phoneNumber: event.target.value});
  }

  function handlePasswordChange(event) {
    setUserRegister({...userRegister, password: event.target.value});
  }

  function handleConfirmPasswordChange(event) {
    setUserRegister({...userRegister, confirmPassword: event.target.value});
  }

  function handleRegisterSubmit() {
    if (userRegister.password !== userRegister.confirmPassword) {
        alert("Hasła nie są takie same! Wpisz hasła ponownie");
        return;
    }
    if (!isRegulAccepted) {
        alert("Musisz zaakceptować regulamin i politykę prywatności, aby założyć konto");
        return;
    }
    fetch("http://localhost:5001/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: userRegister.name,
            email: userRegister.email,
            phoneNumber: userRegister.phoneNumber,
            password: userRegister.password,
        })
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        alert(`Konto ${userRegister.name} zostało utworzone pomyślnie!`);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    setUserRegister({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    })

  }
  
  return (
    <div className='bg-orange-50 h-full'> 
        <div className="flex flex-col items-center gap-3 pt-20 pb-20">
            <img src={car} alt="Logo" className="w-16 h-16 p-4 bg-orange-600 rounded-full" />
            <span className="text-base text-black">AutoPortal</span>
            <span className="text-base text-gray-600 mb-3">Portal motoryzacyjny</span>
            <div className="w-[40%] flex flex-col gap-3 bg-white p-6 rounded-lg shadow-md border-2 border-gray-100 items-center">
                <span className="text-base text-black">Witaj!</span>
                <span className="text-base text-gray-600">Zaloguj się lub załóż konto, aby kontynuować</span>
                <div className="rounded-full mt-6 w-full bg-gray-200 p-1 flex gap-0">
                    <button onClick={() => setType("Logowanie")} className={`w-1/2 ${type === "Logowanie" ? "bg-white" : "bg-gray-200"} rounded-full text-sm p-1 text-black`}>Logowanie</button>
                    <button onClick={() => setType("Rejestracja")} className={`w-1/2 ${type === "Rejestracja" ? "bg-white" : "bg-gray-200"} rounded-full text-sm p-1 text-black`}>Rejestracja</button>
                </div> 
                {type === "Logowanie" ?
                <div className="flex flex-col gap-4 w-full mt-4">
                    <div className="gap-0 flex flex-col">
                        <span className="text-sm text-black font-medium">Email</span>
                        <div className="relative">
                            <input type="text" value={userLogin.email} onChange={handleLoginEmailChange} placeholder="twoj@email.com" className=" pl-10 rounded-md text-sm bg-gray-200 p-2 w-full"/> 
                            <img className="absolute h-6 w-6 top-2 left-2" src={email} alt="Email Icon" />
                        </div>
                    </div>
                    <div className="gap-0 flex flex-col">
                        <span className="text-sm text-black font-medium">Hasło</span>
                        <div className="relative">
                            <input type="text" value={userLogin.password} onChange={handleLoginPasswordChange} placeholder="********" className=" pl-10 rounded-md text-sm bg-gray-200 p-2 w-full"/> 
                            <img className="absolute h-6 w-6 top-2 left-2" src={password} alt="Password Icon" />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-1 items-center">
                            <input type="checkbox" id="rememberMe" className="h-4 w-4"/>
                            <label htmlFor="rememberMe" className="text-sm text-black font-medium">Zapamiętaj mnie</label> 
                        </div> 
                        <button className="text-sm text-orange-600 hover:text-orange-700">Zapomniałeś hasła?</button>
                    </div>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm p-2 mt-2 w-full" onClick={handleLoginSubmit}>Zaloguj się</button>
                </div> 
                  :  
                <div className="flex flex-col gap-4 w-full mt-4">
                    <div className="gap-0 flex flex-col">
                        <span className="text-sm text-black font-medium">Imię i nazwisko</span>
                        <div className="relative">
                            <input type="text" placeholder="Jan Kowalski" onChange={handleUsernameChange} value={userRegister.name} className=" pl-10 rounded-md text-sm bg-gray-200 p-2 w-full"/> 
                            <img className="absolute h-5 w-5 top-2 left-2" src={user} alt="User Icon" />
                        </div>
                    </div>
                    <div className="gap-0 flex flex-col">
                        <span className="text-sm text-black font-medium">Email</span>
                        <div className="relative">
                            <input type="text" placeholder="twoj@email.com" onChange={handleEmailChange} value={userRegister.email} className=" pl-10 rounded-md text-sm bg-gray-200 p-2 w-full"/> 
                            <img className="absolute h-6 w-6 top-2 left-2" src={email} alt="Email Icon" />
                        </div>
                    </div>
                    <div className="gap-0 flex flex-col">
                        <span className="text-sm text-black font-medium">Numer telefonu</span>
                        <div className="relative">
                            <input type="text" placeholder="123-456-789" onChange={handlePhoneNumberChange} value={userRegister.phoneNumber} className=" pl-10 rounded-md text-sm bg-gray-200 p-2 w-full"/> 
                            <img className="absolute h-6 w-6 top-2 left-2" src={phone} alt="Phone Icon" />
                        </div>
                    </div>
                    <div className="gap-0 flex flex-col">
                        <span className="text-sm text-black font-medium">Hasło</span>
                        <div className="relative">
                            <input type="text" placeholder="********" onChange={handlePasswordChange} value={userRegister.password} className=" pl-10 rounded-md text-sm bg-gray-200 p-2 w-full"/> 
                            <img className="absolute h-6 w-6 top-2 left-2" src={password} alt="Password Icon" />
                        </div>
                    </div>
                    <div className="gap-0 flex flex-col">
                        <span className="text-sm text-black font-medium">Potwierdź hasło</span>
                        <div className="relative">
                            <input type="text" placeholder="********" onChange={handleConfirmPasswordChange} className=" pl-10 rounded-md text-sm bg-gray-200 p-2 w-full"/> 
                            <img className="absolute h-6 w-6 top-2 left-2" src={password} alt="Password Icon" />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-1 items-center">
                            <input onChange={(e) => setIsRegulAccepted(e.target.checked)} type="checkbox" id="rememberMe" className="h-4 w-4"/>
                            <label htmlFor="rememberMe" className="text-sm text-black font-medium">
                                <div className="flex gap-1 items-center">
                                    <span>Akceptuję</span>
                                    <button className="text-orange-600 hover:text-orange-700">regulamin</button>
                                    <span> i </span>
                                    <button className="text-orange-600 hover:text-orange-700">politykę prywatności</button>
                                </div>
                            </label>
                        </div> 
                    </div>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm p-2 mt-2 w-full" onClick={handleRegisterSubmit}>Załóż konto</button>
                </div> 
                }
                <div className="w-full flex gap-0 justify-between mt-5 items-center">
                    <hr className="border-gray-200 w-1/3" />
                    <span className="text-xs text-gray-500">Lub zarejestruj się przez</span>
                    <hr className="border-gray-200 w-1/3" />
                </div>
                <div className="flex gap-4 w-full mt-3">
                    <button className="bg-red-500 border hover:bg-red-600 text-white rounded-lg text-sm p-2 w-full">Google</button>
                    <button className="bg-blue-500 border hover:bg-blue-600 text-white rounded-lg text-sm p-2 w-full">Facebook</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;







