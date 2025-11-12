import clock from '../icons/clockYellow.svg';

function Oczekujące() {

    return (
        <div className="flex gap-2 items-center rounded-md bg-yellow-100 border border-yellow-200 px-1">
            <img src={clock} alt="clock icon" className="h-4 w-4"></img>
            <span className="text-yellow-500 text-xs">Oczekujące</span>
        </div>
    )
}

export default Oczekujące;