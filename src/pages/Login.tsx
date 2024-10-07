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
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </LoginPageStyled>
    )
}