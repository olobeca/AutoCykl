import active from '../icons/activeGreen.svg';

function Aktywne() {

    return (
        <div className="flex gap-2 items-center rounded-md bg-green-100 border border-green-200 px-1">
            <img src={active} alt="active icon" className="h-4 w-4"></img>
            <span className="text-green-500 text-xs">Aktywne</span>
        </div>
    )
}

export default Aktywne;