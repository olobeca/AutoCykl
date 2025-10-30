
function SellerDetails({props}) {
    return (
       <div className="border border-gray-100 shadow-md rounded-lg p-4 m-4">
            <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-start">
                        <div className="rounded-full bg-gray-200 w-16 h-16 overflow-hidden p-4">
                            <img src={props.image} alt={props.imageTitle} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-base font-semibold text-gray-700">{props.sellerName}</span>
                            <div className="flex gap-1 items-center">
                                {props.isVerified && <span className="text-sm text-gray-500 font-medium">Dealer oficjalny</span>}
                                <span className="text-sm text-gray-500 font-medium">•</span>
                                <span className="text-sm text-gray-500 font-medium">Aktywny od {props.activeSince}</span>
                            </div>
                            <div className="flex justify-between w-full">
                                <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Pokaż numer telefonu</button>
                                <button className="bg-white hover:bg-gray-200 transition-colors rounded-md text-sm font-medium text-gray-700 py-2 px-3 border-gray-300">Wyślij e-mail</button>
                                <button className="bg-white hover:bg-gray-200 transition-colors rounded-md text-sm font-medium text-gray-700 py-2 px-3 border-gray-300">Wyślij wiadomość</button>
                            </div>
                    </div>

                </div>
          </div>
        </div>
    );
}
export default SellerDetails;



