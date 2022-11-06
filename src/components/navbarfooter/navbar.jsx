import Logo from "../asset/img/loge.png"
import Avatar from "../asset/img/avatar.png"
import Cart from "../asset/img/cart.png"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

    const NavStyles = ({isActive}) =>{
        return{
            color: isActive ? '#1f1f1f' : '#505050',
            borderBottom : isActive ? '1px solid orange' :''
        }
    }

    return (
        <>
        <div className="kepala">
            <header className="d-flex justify-content-center align-items-center py-1 px-5 fw-bold">
                <NavLink to="/" className="d-flex align-content-start col-1"><img src={Logo} width="230" height="auto"
                    alt="Logo" /></NavLink>
                <ul className="nav col-9 justify-content-center">
                    <li className="nav-item"><NavLink style={NavStyles} to="/" className="nav-link active" aria-current="page">Home</NavLink></li>
                    <li className="nav-item"><NavLink style={NavStyles} to="/galeri" className="nav-link">Galeri</NavLink></li>
                    <li className="nav-item"><NavLink style={NavStyles} to="/event" className="nav-link">Event dan Pameran</NavLink></li>
                </ul>
                <ul className="nav col-2 justify-content-between align-items-center">
                    <li className="nav-item"><NavLink to="/profile" className="nav-link"><img src={Avatar} width="32"
                        alt="keranjang" /></NavLink></li>
                    <li className="nav-item"><NavLink to="/keranjang" className="nav-link"><img src={Cart} width="43"
                        alt="avatar" /></NavLink></li>
                    <li className="nav-item"><NavLink style={NavStyles} to="#" className="nav-link">Logout</NavLink></li>
                </ul>
            </header>
        </div>
        </>
    )
}

export default Navbar;