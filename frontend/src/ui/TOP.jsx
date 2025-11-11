import trending from '../icons/trending.svg';

function TOP() {

    return (
        <div className="flex gap-2 items-center rounded-md bg-yellow-200 border border-orange-600 px-1">
            <img src={trending} alt="trending icon" className="h-4 w-4"></img>
            <span className="text-orange-600 text-xs">TOP</span>
        </div>
    )
}

export default TOP;