import { LoginPageStyled } from '../components/styles/LoginStyled.ts'
import { auth , provider } from '../config/firebase.ts'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/');
    }

    return (
        <LoginPageStyled>
            <p>Sign in with Google to continue.</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </LoginPageStyled>
    )
}