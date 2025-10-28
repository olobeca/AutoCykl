

function CardSplitter() {
    return (
        <div className="flex justify-center mt-8 gap-4 bottom-2">
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-base font-medium">{'< Previous'}</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-base font-medium">1</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-base font-medium">2</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-base font-medium">3</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-base font-medium">...</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-base font-medium">12</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-base">{'Next >'}</a>
            </div>
    )
}
export default CardSplitter;