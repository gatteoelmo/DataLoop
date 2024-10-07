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
                    {!user && <Link to="/Login">Login Page</Link>}
                    {user && <Link to="/createpost">Create post</Link>}
                </div>
                
                <div>
                    {user && (
                        <>
                            <p>{user?.displayName}</p>
                            <img src={user?.photoURL || ""} alt="" />
                            <button className="button-50" onClick={signUserOut}>Log Out</button>
                        </>
                    )}                    
                </div>
                
            </div>           
        </NavbarStyled>
    )
}