import Navbar from '../../Components/Navbar'
import Home from '../Home'
import Contact from '../Contact'
import NotFound from '../NotFound'
import './App.css'
import { useRoutes,BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from '../../Context'


const AppRoutes = () => {

    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/contacto', element: <Contact/>},
        {path: '/*', element: <NotFound/>}
    ])
    return routes
}

function App(){

    return(
        <CartContextProvider>
            <BrowserRouter>
                <Navbar/>
                <AppRoutes/>
            </BrowserRouter>
        </CartContextProvider>
    )
}


export default App