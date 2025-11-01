
function TechnicalSpecification({props}) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="text-sm text-gray-600">{props.label}</span> 
                <span className="text-sm text-gray-800">{props.value}</span>
            </div>
            <div className="w-full mt-2">
                <hr className="border-t-1 border-gray-200" />
            </div>
        </div>
    )
}
export default TechnicalSpecification;