

function SortingBar() {
    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-base font-semibold">Wyniki wyszukiwania</h2>
                            <div className="flex items-center gap-1">
                                <span className="text-gray-400 text-sm">Znaleziono</span>
                                <span className="text-orange-600 text-sm">1,247</span>
                                <span className="text-gray-400 text-sm">ogłoszeń</span>
                            </div>
                        </div>
                        <input type="text" placeholder="Przebieg rosnąco" className="border border-gray-200 bg-slate-200 rounded-lg p-2 w-3/12" />
            </div>
    )}
export default SortingBar;