import { Link } from "react-router-dom"
import {NavbarStyled} from "./NavbarStyled"
import {auth} from "../../config/firebase"

export const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="container">
                <Link to="/">Home page</Link>
                <Link to="/Login">Login Page</Link>
                <div>
                    <p>{auth.currentUser?.displayName}</p>
                    <img src={auth.currentUser?.photoURL || ""} width={50} height={50} alt="" />
                </div>
                
            </div>           
        </NavbarStyled>
    )
}