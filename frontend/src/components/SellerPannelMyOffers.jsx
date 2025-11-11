

function SellerPannelMyOffers() {
    return (
        <div className="p-4 flex flex-col gap-2 bg-white rounded-lg shadow-md border border-gray-200 mt-8">
            <span className="text-black text-lg font-medium">Wszystkie ogłoszenia</span>
            <span className="text-gray-600 text-lg pb-6">Zarządzaj swoimi ogłoszeniami i monitoruj ich wydajność</span>
            <div className="flex gap-4">
                <span className="text-base text-black pr-4">Ogłoszenie</span>
                <span className="text-base text-black pr-2">Status</span>
                <span className="text-base text-black pr-2">Pakiet</span>
                <span className="text-base text-black">Wyświetlenia</span>
                <span className="text-base text-black">Polubienia</span>
                <span className="text-base text-black">Wiadomości</span>
                <span className="text-base text-black pr-2">Wygasa</span>
                <span className="text-base text-black">Akcje</span>
            </div>
            <div className="w-full mt-2">
                <hr className="border-t-1 border-gray-300" />
            </div>
        </div>
    );
}

export default SellerPannelMyOffers;