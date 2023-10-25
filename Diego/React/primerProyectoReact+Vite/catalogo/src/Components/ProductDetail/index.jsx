import { useContext } from "react";
import { CartContext } from "../../Context";
import "./style.css"

const productDetail = ()=>{
    const context = useContext(CartContext)
    console.log('Producto a Mostrar: ', context.productToShow)
    return(
        
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-3/12 h-auto z-30 product-detail flex-col right-0 border border-black rounded-lg fixed bg-white p-5`}>
            
            <div className="flex justify-between mb-5 mx-5">
                <h2 className="text-xl">Detalle</h2>
                <div className="close-button" onClick={() => context.closeProductDetail()}>X</div>
            </div>
            <div className="flex flex-col items-center">
                <figure className="w-full h-auto flex justify-center">
                    <img className="w-11/12 h-auto rounded-3xl mx-2" src={context.productToShow.images} alt={context.productToShow.images}  />
                </figure>
                <div className="flex flex-col px-6 my-5 ">
                    <span className="text-xl">${context.productToShow.price}</span>
                    <span className="text-3xl">{context.productToShow.title}</span>
                    <span>{context.productToShow.description}</span>
                </div>
            </div>
        
        </aside>
    )



}


export default productDetail;