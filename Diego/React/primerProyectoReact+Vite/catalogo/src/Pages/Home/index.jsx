import Layout from "../../Components/Layout"
import Card from "../../Components/Card/Card"
import Carusel from "../../Components/Carusel"
import SubNavbar from "../../Components/SubNavbar"

function Home(){

    return(
        <Layout>
            <SubNavbar/>
            <div className="cover">
                <Carusel/>
            </div>
        
                
            
            <div className="absolute top-80 flex flex-wrap justify-center items-center max-w-7xl" id="coso">
                
                <Card
                    categoria='Dispositivo'
                    precio={901}
                    objeto='iPhone 1'
                    ruta={'src/img/celular.jpg'}
                ></Card>
                <Card
                    categoria='Nose'
                    precio='901241141'
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
        </Layout>
    )

}

export default Home