import Aktywne from "../ui/Aktywne";
import TOP from "../ui/TOP";
import eye from '../icons/eyeGray.svg';
import heart from '../icons/heartGray.svg';
import messages from '../icons/messagesGray.svg';


function SellerPannelMyOffers({props}) {
    return (
        <div className="p-4 flex flex-col gap-2 bg-white rounded-lg shadow-md border border-gray-200 mt-8">
            <span className="text-black text-lg font-medium">Wszystkie ogłoszenia</span>
            <span className="text-gray-600 text-lg pb-12">Zarządzaj swoimi ogłoszeniami i monitoruj ich wydajność</span>
            <div className="flex justify-between w-full">
                <span className="text-base text-black pr-24">Ogłoszenie</span>
                <span className="text-base text-black pr-24">Status</span>
                <span className="text-base text-black pr-24">Pakiet</span>
                <span className="text-base text-black">Wyświetlenia</span>
                <span className="text-base text-black">Polubienia</span>
                <span className="text-base text-black">Wiadomości</span>
                <span className="text-base text-black pr-12">Wygasa</span>
                <span className="text-base text-black">Akcje</span>
            </div>
            {props.carsData.map((car, index) => (
                <>
                <div className="w-full mt-2">
                    <hr className="border-t-1 border-gray-300" />
                </div>
                <div className="py-1 flex justify-between w-full items-center" key={index}>
                    <div className="flex gap-4 items-center pr-24">
                        <img src={car.image} alt={`Image of ${car.name}`} className="h-16 w-16 rounded-lg"></img>
                        <div className="flex flex-col gap-2 items-center">
                            <span className="font-medium text-black text-lg">{car.name}</span>
                            <div className="flex gap-1">
                                <span className="text-sm text-gray-600">{car.prize} zł</span>
                                <span className="text-sm text-gray-600">•</span>
                                <span className="text-sm text-gray-600">{car.year}</span>
                            </div>
                        </div>
                    </div>
                    <div className="pr-24">
                        <Aktywne />
                    </div>
                    <div className="pr-24">
                        <TOP />
                    </div>
                     <div className="flex gap-0 items-center">
                        <img src={eye} alt="eye icon" className="h-4 w-4"/>
                        <span className="text-sm text-gray-700 ml-1">{car.views}</span>
                    </div>

                    <div className="flex gap-0 items-center">
                        <img src={heart} alt="heart icon" className="h-4 w-4"/>
                        <span className="text-sm text-gray-700 ml-1">{car.likes}</span>
                    </div>

                    <div className="flex gap-0 items-center">
                        <img src={messages} alt="messages icon" className="h-4 w-4"/>
                        <span className="text-sm text-gray-700 ml-1">{car.messages}</span>
                    </div>

                    <span className="text-sm text-gray-700 pr-12">{car.expiryDate}</span>
                </div>
                </>
            ))}
        </div>
    );
}

export default SellerPannelMyOffers;