import "../App.css";
import toyotacorolla from '../toyotacorolla.jpg';
import samochodyDostawcze from '../samochodyDostawcze.jpg';
import WelcomePageCattegoriesCard from "./WelcomePageCattegoriesCard";
import motocykle from '../motocykle.jpeg';
import MaszynyRolnicze from '../MaszynyRolnicze.jpeg';

function WelcomePageCattegories() {
    return (
        <div className='mt-5 bg-stone-100 flex flex-col items-center justify-center pt-20 gap-4 px-48'>
            <h1 className="text-black font-md text-xl">Przeglądaj kategorie</h1>
            <h1 className="text-gray-500 text-md pb-5">Znajdź pojazd dopasowany do Twoich potrzeb</h1>
            <div className=" grid grid-cols-4 w-full gap-4 mb-24">
                <WelcomePageCattegoriesCard props={{image: toyotacorolla, alt: "Samochody Osobowe", title: "Samochody Osobowe", count: "45 234"}} />
                <WelcomePageCattegoriesCard props={{image: samochodyDostawcze, alt: "Samochody Dostawcze", title: "Samochody Dostawcze", count: "12 345"}} />
                <WelcomePageCattegoriesCard props={{image: motocykle, alt: "Motocykle", title: "Motocykle", count: "8 765"}} />
                <WelcomePageCattegoriesCard props={{image: MaszynyRolnicze, alt: "Maszyny Rolnicze", title: "Maszyny Rolnicze", count: "5 432"}} />
            </div>
        </div>


    )


}

export default WelcomePageCattegories;

