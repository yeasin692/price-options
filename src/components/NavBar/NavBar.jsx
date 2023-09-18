import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/Services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' },
      ];
      
    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                    <AiOutlineClose></AiOutlineClose>
                    : <AiOutlineMenu className=""></AiOutlineMenu>
                }
            
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16' : '-top-60'}
             bg-yellow-200 px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default NavBar;