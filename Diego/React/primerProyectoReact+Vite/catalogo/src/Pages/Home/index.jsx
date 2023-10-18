import Layout from "../../Components/Layout"
import Card from "../../Components/Card/Card"
import Carusel from "../../Components/Carusel"
import Footer from "../../Components/Footer"

function Home(){

    return(
        
        <Layout>
            
            
            
            <div className="cover">
                <Carusel/>
            </div>
        
                
            
            <div className="relative bottom-80 flex flex-wrap justify-center items-center max-w-7xl" id="coso">
                
                <Card
                    categoria='Dispositivo'
                    precio={901}
                    objeto='iPhone 1'
                    ruta={'src/img/celular.jpg'}
                ></Card>
                <Card
                    categoria='Nose'
                    precio='1'
                    objeto={''}
                    ruta={'src/img/celular.jpg'}
                ></Card>
                <Card
                    categoria='coso'
                    precio={902}
                    objeto={''}
                    ruta={'src/img/celular.jpg'}
                ></Card>
                <Card
                    categoria='coso'
                    precio={902}
                    objeto={''}
                    ruta={'src/img/celular.jpg'}
                ></Card>
                <Card
                    categoria='coso'
                    precio={902}
                    objeto={''}
                    ruta={'src/img/celular.jpg'}
                ></Card>
                <Card
                    categoria='coso'
                    precio={902}
                    objeto={''}
                    ruta={'src/img/celular.jpg'}
                ></Card>
                <Card
                    categoria='coso'
                    precio={902}
                    objeto={''}
                    ruta={'src/img/celular.jpg'}
                ></Card>
                <Card
                    categoria='coso'
                    precio={902}
                    objeto={''}
                    ruta={'src/img/celular.jpg'}
                ></Card>
                
                

                
            </div>
            <div className="relative items-end w-full">
                <Footer/>
            </div>
            
            
        </Layout>
        
    )

}

export default Home