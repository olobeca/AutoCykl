
function CarEquipment({ equipment }) {
    return (
        <div className="border border-gray-100 shadow-md rounded-lg p-6 m-4">
            <div className="flex flex-col mb-4">
                <span className="text-base pb-2 text-black font-bold">Wyposażenie</span>
                <span className="text-base text-gray-700">Pełna lista wyposażenia dodatkowego</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {equipment?.map((item, index) => (
                    <span key={index} className="text-sm text-gray-600">{item}</span>
                ))}
            </div>

        </div>
    )
}
export default CarEquipment;