import { Link } from "react-router-dom"
import {NavbarStyled} from "./NavbarStyled"
import {auth} from "../../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export const Navbar = () => {
    
    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <NavbarStyled>
            <div className="container">
                
                <div>
                    <Link to="/">Home page</Link>
                    <Link to="/Login">Login Page</Link>
                </div>
                
                <div>
                    {user && (
                        <>
                            <p>{user?.displayName}</p>
                            <img src={user?.photoURL || ""} alt="" />
                            <button onClick={signUserOut}>Log Out</button>
                        </>
                    )}
                    
                </div>
                
            </div>           
        </NavbarStyled>
    )
}