import star from '../icons/star.svg';

function Standardowe() {

    return (
        <div className="flex gap-2 items-center rounded-md bg-white border border-gray-200 px-1">
            <img src={star} alt="star icon" className="h-4 w-4"></img>
            <span className="text-gray-500 text-xs">Standardowe</span>
        </div>
    )
}

export default Standardowe;