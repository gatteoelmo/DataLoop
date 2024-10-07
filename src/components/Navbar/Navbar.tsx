import { Link } from "react-router-dom"
import {NavbarStyled} from "./NavbarStyled"

export const Navbar = () => {
    return (
        <NavbarStyled>
            <div>
                <Link to="/">Home page</Link>
                <Link to="/Login">Login Page</Link>
            </div>           
        </NavbarStyled>
    )
}