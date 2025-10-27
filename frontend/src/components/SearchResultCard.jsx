import "../App.css";
import car from '../car.png'; 

function SearchResultCard() {
    return (
        <div className="bg-gray-50 border-gray-200 flex flex-col gap-6 px-24  py-4">
            <div className="flex items-center  gap-4">
                <div>
                    <a href="#" className="text-sm text-gray-500">Strona główna</a>
                </div>
                <div>
                    <h1 className="text-sm text-gray-500">{'>'}</h1>
                </div>
                <div>
                    <a href="#" className="text-sm text-gray-500">Samochody osobowe</a>
                </div>
                <div>
                    <h1 className="text-sm text-gray-500">{'>'}</h1>
                </div>
                <div>
                    <a href="#" className="text-sm text-gray-500">Wyniki Wyszukiwania</a>
                </div>
    
            </div>
            <div className="bg-white flex flex-col rounded-lg shadow-md w-3/12 p-5 gap-3">
                    <div className="flex gap-4 justify-between p-2"> 
                        <h1 className="text-base font-normal text-black">Filtry</h1>
                        <h1 className="text-sm font-medium text-orange-600">Wyczyść filtry</h1>
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                        <h1 className="text-base font-normal text-black">Marka Pojazdu</h1>
                        <input type="text" placeholder="Wybierz markę" className="border border-gray-200 bg-slate-200 rounded-lg p-2 w-full" />
                    </div>
 
            </div>
            
        </div>
    )
}
export default SearchResultCard;

