import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context"

const Navbar = () =>{
    const context = useContext(CartContext)

    const activeStyle = ' underline underline-offset-4'

    return (
        <header>
            <nav className="m-auto flex justify-between items-center z-10 w-full h-14 py-7 px-10 text-sm font-bold bg-gray-900 text-white">
                <ul className="flex items-center">
                    <a href="" className="flex items-center">
                        <img className="w-24"  src="src\img\icons\amazon.png" alt="" />
                    </a>
                </ul>

                <ul className="flex items-center">
                    <li>
                        <select className="w-auto h-10 bg-gray-50/75 text-black rounded-l-md text-center" name="All" id="All">
                            <option value="">All</option>
                            <option value="">No se</option>
                            <option value="">Celues</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                            <option value="">ARROZ</option>
                        </select>
                    </li>

                    <li >
                        <input className="w-96 h-10 outline-none text-black p-3" name="All" id="All" type="text" placeholder="Search Amazon"/>
                    </li>
                    <li>
                        <button className="flex w-16 h-10 bg-orange-300 hover:bg-orange-400 items-center rounded-r-md p-3">
                        </button>
                    </li>

                </ul>
                <ul className="flex items-center gap-5">

                    <li className="font-semibold text-lg hover:text-black/20 ease-in duration-300">
                        <NavLink to='/'
                            className={({ isActive }) => isActive ? activeStyle : undefined} >
                                Inicio
                        </NavLink>
                    </li>

                    <li className="font-semibold text-lg gap-3 hover:text-black/20 ease-in duration-300">
                        <NavLink to='/contacto'
                            className={({ isActive }) => isActive ? activeStyle : undefined} >
                                Contacto
                        </NavLink>
                    </li>

                    <li className="font-semibold text-lg gap-3 hover:text-black/20 ease-in duration-300">
                        <NavLink to='/*'
                            className={({ isActive }) => isActive ? activeStyle : undefined} >
                                Not Found
                        </NavLink>
                    </li>
                    <li>
                        {context.count}
                    </li>
                </ul>
            
            </nav>
            <ul className="flex text-sm gap-3 bg-gray-800 text-white h-10">
                <button className='px-2 hover:border'>All</button>
                <button className='px-2 hover:border'>Todays Deals</button>
                <button className='px-2 hover:border'>Customer Service</button>
                <button className='px-2 hover:border'>Registry</button>
                <button className='px-2 hover:border'>Gift Cards</button>
                <button className='px-2 hover:border'>Sell</button>
                
            </ul>

        </header>
    )
}

export default Navbar