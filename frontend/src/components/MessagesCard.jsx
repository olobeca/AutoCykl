
function MessagesCard({props}) {
    return (
        <div className=" p-4 hover:bg-slate-100">
            <div className="flex gap-2 relative px-12">
                <span className=" absolute right-1 top-1 text-gray-500">{props.time}</span>
                {/* {props.isNewMessage && <span className="text-sm  bg-orange-600 text-white rounded-full w-6 h-6 text-center absolute right-1 bottom-1"></span>} */}
                <img src={props.profileImage} alt={props.name} className="w-12 h-12 object-cover rounded-full"/>
                <div className="flex flex-col gap-2">
                    <span className="text-gray-700">{props.name}</span>
                    <div className="flex">
                        <img src={props.carImage} alt={props.carName} className="w-3 h-3 object-cover rounded-full inline mr-1"/>
                        <span className="text-gray-500 text-sm">{props.carName}</span>
                    </div>
                    {props.isNewMessage ? <span className="text-gray-700 font-semibold text-sm">{props.lastMessage}</span> : <span className="text-gray-500 text-sm">{props.lastMessage}</span>}
                </div>
            </div>
        </div>
    )
}

export default MessagesCard;