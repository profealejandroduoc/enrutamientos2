/*NAV <BAR></BAR>

/*contenido

/*footer*/
import { Link, Outlet } from 'react-router'


export const ClienteLayout = () => {
    return (
        <>
            <div className='bg-red-500 text-white p-4'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/carrito">Carrito</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/adm">Administración</Link>
                    </li>
                </ul>

            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <footer className='bg-red-200 text-white p-4'>
                    Este es el foooter
                </footer>
            </div>

        </>
    )
}
