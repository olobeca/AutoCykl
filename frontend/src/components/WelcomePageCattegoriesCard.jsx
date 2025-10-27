import "../App.css";

function WelcomePageCattegories({props}) {

    return (
        <div className="relative overflow-hidden rounded-md">
            <img src={props.image} alt={props.alt} className='w-full h-48 object-cover rounded-md ease-in-out hover:scale-110 duration-300' />
            <span className='absolute bottom-7 left-2 text-lg text-white py-1 px-2 rounded-md'>{props.title}</span>
            <span className='absolute bottom-2 left-2  text-base text-white py-1 px-2 rounded-md'>{props.count}xw Ogłoszenia</span>
        </div>
    )

}

export default WelcomePageCattegories;
