import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {toast} from 'react-toastify';

function SellerDetails({props}) {

    const navigate = useNavigate();
    const [isPhoneNumberVisible, setIsPhoneNumberVisible] = useState(false);

    async function handleContactSeller() {
        if(!props.buyerId) {
            toast.warning("Zaloguj się, aby wysłać wiadomość.");
            return;
        }
        if(props.buyerId === props.sellerId) {
            toast.warning("Nie możesz wysłać wiadomości do samego siebie.");
            return;
        }
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/chats/newChat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    sellerId: props.sellerId,
                    buyerId: props.buyerId,
                    offerId: props.offerId,
                }),
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Chat initiated successfully:", data);
            if(data && data.id) {
                navigate(`/messages`, {
                    state: { conversationId: data.id }
                });
            }
        } catch (error) {
            console.error("Error initiating chat:", error);
        }
    }

    return (
       <div className="border border-gray-100 shadow-md rounded-lg p-8 m-4">
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                        <div className="rounded-full bg-gray-200 w-16 h-16 overflow-hidden p-4">
                            <img src={props.image} alt={props.imageTitle} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-base font-semibold text-gray-700">{props.sellerName}</span>
                            <div className="flex gap-1 items-center pb-4">
                                {props.isVerified && <span className="text-sm text-gray-500 font-medium">Dealer oficjalny</span>}
                                <span className="text-sm text-gray-500 font-medium">•</span>
                                <span className="text-sm text-gray-500 font-medium">Aktywny od {props.activeSince}</span>
                            </div>
                            
                        </div>

                </div>
                <div className="flex justify-between gap-6 ">
                    <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3 w-full" onClick={() => setIsPhoneNumberVisible(!isPhoneNumberVisible)}>{isPhoneNumberVisible ? props?.phoneNumber : "Pokaż numer telefonu"}</button>
                    <button className="bg-white hover:bg-gray-200 transition-colors rounded-md text-sm font-medium text-gray-700 py-2 px-3 border-gray-300 w-full">Wyślij e-mail</button>
                    <button className="bg-white hover:bg-gray-200 transition-colors rounded-md text-sm font-medium text-gray-700 py-2 px-3 border-gray-300 w-full" onClick={handleContactSeller}>Wyślij wiadomość</button>
                </div>
            </div>
        </div>
    );
}
export default SellerDetails;



