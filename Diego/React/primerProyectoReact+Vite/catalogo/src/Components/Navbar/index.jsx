import { NavLink } from "react-router-dom"

const Navbar = () =>{
    const activeStyle = ' underline underline-offset-4'

    return (
        <nav className="m-auto flex justify-between items-center z-10 w-full h-14 py-7 px-10 text-sm font-bold border  bg-black/5 text-black">
            <ul className="flex items-center">
                <li className="flex items-center">
                    <img className="w-24"  src="src\img\icons\Amazon_logo.svg.webp" alt="" />
                </li>
            </ul>

            <ul className="flex items-center">
                <li>
                    <select className="w-16 h-10 bg-slate-300/10 border rounded-l-md" name="All" id="All">
                        <option value="" disabled>All</option>
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
                    <input className="w-96 h-10 outline-none" name="All" id="All" type="text" placeholder=" Search Amazon"/>
                </li>
                <li>
                    <button className="w-16 h-10 bg-orange-300 border hover:bg-orange-400">

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
            </ul>
            
        </nav>
    )
}

export default Navbar