import trending from '../icons/trending.svg';

function TOP() {

    return (
        <div className="flex gap-2 items-center rounded-md bg-yellow-100 border border-orange-500 px-1">
            <img src={trending} alt="trending icon" className="h-4 w-4"></img>
            <span className="text-orange-500 text-xs">TOP</span>
        </div>
    )
}

export default TOP;