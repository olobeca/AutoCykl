function CarDetailsCard({ props }) {   
    return (
        <div className="flex gap-3 w-full justify-between whitespace-nowrap p-2">
                <div className="bg-orange-100 border border-orange-400 rounded-md overflow-hidden py-6 px-32 flex flex-col items-center">
                  <span className="text-sm  text-gray-600">Rok produkcji</span>
                  <span className="text-lg font-semibold text-gray-800">{props.year}</span>
                </div>
                <div className="bg-green-100 border border-green-400 rounded-md overflow-hidden py-6 px-32 flex flex-col items-center">
                  <span className="text-sm text-gray-600">Przebieg</span>
                  <span className="text-lg font-semibold text-gray-800">{props.mileage}</span>
                </div>
                <div className="bg-blue-100 border border-blue-400 rounded-md overflow-hidden py-6 px-32 flex flex-col items-center">
                  <span className="text-sm text-gray-600">Paliwo</span>
                  <span className="text-lg font-semibold text-gray-800">{props.fuelType}</span>
                </div> 
                <div className="bg-purple-100 border border-purple-400 rounded-md overflow-hidden py-6 px-32 flex flex-col items-center">
                  <span className="text-sm text-gray-600">Skrzynia biegów</span>
                  <span className="text-lg font-semibold text-gray-800">{props.transmission}</span>
                </div>
            </div>
    )
}

export default CarDetailsCard;