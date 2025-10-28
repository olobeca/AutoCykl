

function NavigationBar({props}) {
    return (
        <div className="flex items-center  gap-4">
                <div>
                    <a href="#" className="text-sm text-gray-500">{props.home}</a>
                </div>
                <div>
                    <h1 className="text-sm text-gray-500">{'>'}</h1>
                </div>
                <div>
                    <a href="#" className="text-sm text-gray-500">{props.category}</a>
                </div>
                <div>
                    <h1 className="text-sm text-gray-500">{'>'}</h1>
                </div>
                <div>
                    <a href="#" className="text-sm text-gray-500">{props.searchResults}</a>
                </div>
            </div>
    )
}

export default NavigationBar;