const Card = ({categoria, precio, objeto, ruta}) => {
    return (
        <div className="bg-white m-6 cursor-pointer w-64 h-80 rounded-2xl p-5 hover:scale-105 transition ease-in duration-200 border">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-black/80 rounded-lg text-white text-xs m-2 px-3 py-0.5">
                    {categoria}
                </span>
                <img className="w-full h-full object-cover rounded-lg" src={ruta} alt="" 
                />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                    <p className="text-white">+</p>
                </div>
            </figure>
            <p className="flex justify-between text-black p-2">
                <span className="text-lg font-light">{objeto}</span>
                <span className="text-lg font-medium">{precio}</span>
            </p>

        </div>

    );

};

export default Card;