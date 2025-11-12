import inactive from '../icons/checkboxFalse.svg';

function Nieaktywne() {

    return (
        <div className="flex gap-2 items-center rounded-md bg-gray-100 border border-gray-200 px-1">
            <img src={inactive} alt="inactive icon" className="h-4 w-4"></img>
            <span className="text-gray-500 text-xs">Nieaktywne</span>
        </div>
    )
}

export default Nieaktywne;