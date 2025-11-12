import thunder from '../icons/thunderOrange.svg';

function Wyroznione() {

    return (
        <div className="flex gap-2 items-center rounded-md bg-orange-100 border border-orange-200 px-1">
            <img src={thunder} alt="thunder icon" className="h-4 w-4"></img>
            <span className="text-orange-500 text-xs">Wyróżnione</span>
        </div>
    )
}

export default Wyroznione;