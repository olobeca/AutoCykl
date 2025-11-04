import carIcon from "../icons/car.svg"
import docsIcon from "../icons/docs.svg"
import cameraIcon from "../icons/camera.svg"
import userIcon from "../icons/user.svg"
import acceptIcon from "../icons/accept.svg"



function PuttingOfferInfoBar({number}) {
    return (
        <div className="flex gap-4 items-center">
            {number === 1 ? (<> <div className="flex flex-col gap-1 items-center">
                            <img src={carIcon} alt="Car Icon" className="w-12 h-12 bg-orange-400 rounded-full p-2"/>
                            <span className="text-xs">Podstawowe <br />informacje</span>
                        </div>
                        <div className="w-1/12">
                            <hr className="border-t-2 border-gray-300" />
                        </div> </>) : 
                        
                        (<> <div className="flex flex-col gap-1 items-center">
                            <img src={acceptIcon} alt="Accept Icon" className="w-12 h-12 bg-green-400 rounded-full p-2"/>
                            <span className="text-xs">Podstawowe <br />informacje</span>
                        </div>
                        <div className="w-1/12">
                            <hr className="border-t-2 border-green-400" />
                        </div> </>)}

                        <div className="flex flex-col gap-1 items-center">
                            <img src={docsIcon} alt="Documents Icon" className="w-12 h-12 bg-orange-400 rounded-full p-2"/>
                            <span className="text-xs">Szczegóły <br />techniczne</span>
                        </div>
                        <div className="w-1/12">
                            <hr className="border-t-2 border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <img src={cameraIcon} alt="Camera Icon" className="w-12 h-12 bg-orange-400 rounded-full p-2"/>
                            <span className="text-xs">Zdjęcia</span>
                        </div>
                        <div className="w-1/12">
                            <hr className="border-t-2 border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <img src={docsIcon} alt="Documents Icon" className="w-12 h-12 bg-orange-400 rounded-full p-2"/>
                            <span className="text-xs">Opis</span>
                        </div>
                        <div className="w-1/12">
                            <hr className="border-t-2 border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <img src={userIcon} alt="User Icon" className="w-12 h-12 bg-orange-400 rounded-full p-2"/>
                            <span className="text-xs">Dane kontaktowe</span>
                        </div>
                    </div>
    );
}

export default PuttingOfferInfoBar;