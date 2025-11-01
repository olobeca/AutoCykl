import React from "react";

function CarDescription({props}) {
  return (
    <div className="flex gap-2">
        <div className="border border-gray-100 shadow-md rounded-lg p-6 m-4 w-3/4">
            <div className="flex flex-col gap-4">
                <span className="text-base pb-3 text-black">Opis pojazdu </span>
                <span className="text-base pb-2 text-gray-700">{props.description}</span>
                <div className="bg-green-100 border border-green-400 rounded-md overflow-hidden py-6 px-6 flex flex-col gap-2">
                  <span className="text-base text-green-700">Gwarancje i zalety</span>
                  {props.isNoAccident && <span className="text-sm text-green-600">Bezwypadkowy - potwierdzony w raporcie AutoCheck</span>}
                  <span className="text-sm text-green-600">Przebieg zgodny z odczytami, udokumentowany</span>
                  {props.isDealerServicedOnly && <span className="text-sm text-green-600">Serwisowany wyłącznie w ASO</span>}
                  <span className="text-sm text-green-600">Gwarancja fabryczna do {props.warrantyEndDate}</span>
                </div>
                <div className="w-full mt-2">
                    <hr className="border-t-1 border-gray-300" />
                </div>
                <span className="text-base pb-4 text-black">Dodatkowe informacje</span>
                <div className="grid grid-cols-3 gap-2">
                    {props.additionalInfo?.map((info,index) => {
                        return <span key={index} className="text-sm text-gray-600">{info}</span>;
                    })}
                </div>
            </div>
        </div>
        <div className="border border-gray-100 shadow-md rounded-lg p-6 m-4 h-full w-1/4">
            <div className="flex flex-col gap-4">
                <span className="text-base pb-2 text-gray-500">Raport pojazdu</span> 
                {props.isNoAccident && <div className="bg-green-100 border border-green-400 rounded-md overflow-hidden flex flex-col items-center">
                    <span className="text-base text-green-500">Bezwypadkowy</span>
                    <span className="text-sm text-green-400">Potwierdzony w raporcie AutoCheck</span>
                    </div>}
                <div className="bg-green-100 border border-green-400 rounded-md overflow-hidden flex flex-col items-center">
                    <span className="text-base text-green-500">Przebieg potwierdzony</span>
                    <span className="text-sm text-green-400">{props.mileage} zgodnie z odczytami</span>
                </div>
                {props.isDealerServicedOnly && <div className="bg-green-100 border border-green-400 rounded-md overflow-hidden flex flex-col items-center">
                    <span className="text-base text-green-500">Serwis ASO</span>
                    <span className="text-sm text-green-400">Pełna historia w ASO</span>
                    </div>}
                <button className="w-full bg-white hover:bg-gray-200 transition-colors rounded-md text-sm font-medium text-gray-700 py-2 px-3 border-gray-300">Pobierz pełny raport pojazdu</button>
                <div className="w-full mt-2">
                    <hr className="border-t-1 border-gray-300" />
                </div>
                <span className="text-base text-black">Historia serwisowa</span>
                {props.serviceHistory?.map((service,index) => {
                    return (
                    <div className="flex flex-col gap-1" key={index}>
                        <span className="text-base text-gray-700">{service.date}</span>
                        <div className="flex gap-1">
                            <span className="text-sm text-gray-600">{service.mileage}</span>
                            <span className="text-sm text-gray-600">•</span>
                            <span className="text-sm text-gray-600">{service.type}</span>
                        </div>
                    </div>
                    )
                })}

                
            </div>
        </div>

        
    </div>
  )
}
export default CarDescription;