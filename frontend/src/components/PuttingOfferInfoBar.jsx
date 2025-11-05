import carIcon from "../icons/car.svg"
import docsIcon from "../icons/docs.svg"
import cameraIcon from "../icons/camera.svg"
import userIcon from "../icons/user.svg"
import acceptIcon from "../icons/accept.svg"



function PuttingOfferInfoBar({number}) {
    return (
        <div className="flex gap-4 items-center justify-between px-4">
                        <div className="flex flex-col gap-1 items-center">
                            <img src={number > 1 ? acceptIcon : carIcon} alt={number > 1 ? "Accept Icon" : "Car Icon"} className={`w-12 h-12 ${number > 1 ? "bg-green-400" : "bg-orange-400"} rounded-full p-2`}/>
                            <span className="text-xs">Podstawowe <br />informacje</span>
                        </div>
                        <div className="w-1/12">
                            <hr className={`border-t-2 ${number > 1 ? "border-green-400" : "border-gray-300"}`} />
                        </div> 

                        <div className="flex flex-col gap-1 items-center">
                            <img src={number > 2 ? acceptIcon : docsIcon} alt="Documents Icon" className={`w-12 h-12 ${number > 2 ? "bg-green-400" : "bg-orange-400"} rounded-full p-2`}/>
                            <span className="text-xs">Szczegóły <br />techniczne</span>
                        </div>
                        <div className="w-1/12">
                            <hr className={`border-t-2 ${number > 2 ? "border-green-400" : "border-gray-300"}`} />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <img src={number > 3 ? acceptIcon : cameraIcon} alt="Camera Icon" className={`w-12 h-12 ${number > 3 ? "bg-green-400" : "bg-orange-400"} rounded-full p-2`}/>
                            <span className="text-xs">Zdjęcia</span>
                        </div>
                        <div className="w-1/12">
                            <hr className={`border-t-2 ${number > 3 ? "border-green-400" : "border-gray-300"}`} />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <img src={number > 4 ? acceptIcon : docsIcon} alt="Documents Icon" className={`w-12 h-12 ${number > 4 ? "bg-green-400" : "bg-orange-400"} rounded-full p-2`}/>
                            <span className="text-xs">Opis</span>
                        </div>
                        <div className="w-1/12">
                            <hr className={`border-t-2 ${number > 4 ? "border-green-400" : "border-gray-300"}`} />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <img src={number > 5 ? acceptIcon : userIcon} alt="User Icon" className={`w-12 h-12 ${number > 5 ? "bg-green-400" : "bg-orange-400"} rounded-full p-2`}/>
                            <span className="text-xs">Dane kontaktowe</span>
                        </div>
                    </div>
    );
}

export default PuttingOfferInfoBar;