import { Link } from "react-router-dom"
import {NavbarStyled} from "./NavbarStyled"
import {auth} from "../../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import Logo from '../../assets/LOGO-SNAPLY.svg'
import { ButtonSpin } from "../Card/ButtonSpin"


export const Navbar = () => {
    
    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <NavbarStyled>
<nav className="nav">
    <div className="container">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="main_list" id="mainListDiv">
            <ul>
                <li><Link to="/">Home page</Link></li>
                {!user && <li><Link to="/Login">Login Page</Link></li>}         
                {user && (
                        <li className="user">
                            <p>{user?.displayName}</p>
                            <img src={user?.photoURL || ""} alt="" />
                        </li>
                    )}
                
                <li className="signout">{user && <Link to="/"><button onClick={() => {signUserOut()}}>Log Out</button></Link>}</li>
            </ul>
        </div>
        <div className="media_button">
            <button className="main_media_button" id="mediaButton" onClick={ () => {
                const mainListDiv = document.getElementById("#mainListDiv");
                const mediaButton = document.getElementById("#mediaButton");
                if (mainListDiv) {
                  mainListDiv.classList.toggle("show_list");
                }
                if (mediaButton) {
                    mediaButton.classList.toggle("active");
                  }

                document.getElementById("mainListDiv")!.classList.toggle("show_list");
                document.getElementById("mediaButton")!.classList.toggle("active");
                }}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</nav>
        {user && <ButtonSpin />}

        </NavbarStyled>
    )
}