import "../App.css";



function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
        <div className='flex flex-col w-full px-48 pb-8'>
        <div className='flex w-full justify-center items-start pt-8 gap-12 '>
            <div className='flex flex-col  gap-5 pb-8 w-1/6'>
                <span className="text-2xl text-left font-normal text-white">AutoPortal</span>
                <span className="text-sm  text-left font-thin text-gray-100 mb-6">Największy portal motoryzacyjny w Polsce. Znajdź swój wymarzony samochód już dziś!</span>
            {/* tutaj dodac loga social */}
            </div>
            <div className='flex flex-col  gap-5 w-1/6'>
                <span className="text-lg text-left font-normal text-white">Dla użytkowników</span>
                <nav className="flex flex-col  gap-4 text-left">
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Jak kupić auto</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Jak sprzedać auto</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Dodaj Ogłoszenie</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Cennik</a>
                </nav>
            </div>
            <div className='flex flex-col  gap-5  w-1/6'>
                <span className="text-lg text-left font-normal text-white">Dla dealerów</span>
                <nav className="flex flex-col  gap-4 text-left">
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">AutoPortal Dealer</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Pakiety reklamowe</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Kontakt dla firm</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">FAQ dla dealerów</a>
                </nav>
            </div>
            <div className='flex flex-col  gap-5  w-1/6'>
                <span className="text-lg text-left font-normal text-white">O nas</span>
                <nav className="flex flex-col  gap-4 text-left">
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">O AutoPortal</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Kariera</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Blog</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Dla prasy</a>
                </nav>
            </div>
            <div className='flex flex-col   gap-5  w-1/6'>
                <span className="text-lg text-left font-normal text-white">Pomoc</span>
                <nav className="flex flex-col  gap-4 text-left">
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Centrum pomocy</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Kontakt</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Regulamin</a>
                    <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Polityka prywatności</a>
                </nav>
            </div>
            
        </div>
        <div className="w-full my-8">
                <hr className="border-t-1 border-gray-700" />
        </div>
        <div className="flex justify-between w-full">
            <div>
                <span className="text-sm text-gray-500">© 2025 AutoPortal. Wszelkie prawa zastrzeżone.</span>
            </div>
            <nav className="gap-10 flex">
                <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Regulamin</a>
                <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Polityka prywatności</a>
                <a className="text-gray-300 hover:text-orange-600 transition-colors text-sm" href="#">Cookies</a>
            </nav>
            </div>
        </div>
        
    </footer>

  );
}
export default Footer;
