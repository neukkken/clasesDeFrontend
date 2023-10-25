import React from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card/Card"
import Carusel from "../../Components/Carusel"
import Footer from "../../Components/Footer"
import { useState, useEffect } from "react"
import ProductDetail from "../../Components/ProductDetail"


const Home = () => {
    

    const [items, setItems] = useState(null)

    useEffect (()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    })

    return(
        
        <Layout>
            

            

            <div className="relative bottom-0 flex flex-wrap justify-center items-center max-w-screen-2xl">
                {
                    items?.map(item => (
                        <Card key={item.id} data = {item} />
                    ))
                }
            </div>

            <div className="flex justify-end items-end w-full mt-5">
                <Footer/>
            </div>
            
            <ProductDetail/>
        </Layout>
        
    )
}


export default Home