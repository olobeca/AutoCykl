
function Chat({props}) {
    return (
        <div className='flex flex-col gap-2'>
            <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex gap-2">
                    <img className="rounded-full w-16 h-16 overflow-hidden p-2 object-cover" src={props.profileImage} alt={props.name} />
                    <div className="flex flex-col gap-1">
                        <span className="text-base font-semibold text-gray-700">{props.name}</span>
                        <span className="text-sm text-gray-500">{props.userType}</span>
                    </div>
                </div>
                <div className="flex gap-6">
                    <span className="text-base text-gray-500">📞</span>
                    <span className="text-base text-gray-500">⚙️</span>
                </div>
            </div>
        </div>
    )
}

export default Chat;
