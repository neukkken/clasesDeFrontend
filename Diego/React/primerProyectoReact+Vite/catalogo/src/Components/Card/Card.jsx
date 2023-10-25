import { useContext } from "react";
import { CartContext } from "../../Context";

const Card = ( data ) => {
    const context = useContext(CartContext)

    const showProduct = (productDetail) =>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    return (
        <div className="bg-white m-1 cursor-pointer w-80 h-96 p-5"
        onClick={()=>showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-black/80 rounded-lg text-white text-xs m-2 px-3 py-0.5">
                    {data.data.category.name}
                </span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images} alt="" 
                />
                <div className="absolute top-0 right-0 flex justify-center items-center text-white bg-black w-6 h-6 rounded-full m-2 p-1"
                onClick={()=>context.setCount(context.count + 1)}>
                    +
                </div>
            </figure>
            <p className="flex justify-between text-black p-2">
                <span className="text-lg font-light">{data.data.title}</span>
                <span className="text-lg font-medium align-bottom flex justify-end">${data.data.price}</span>
            </p>
        </div>

    );

};


export default Card;