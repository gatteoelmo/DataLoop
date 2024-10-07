import { LoginPageStyled } from '../components/styles/LoginStyled.ts'
import { auth , provider } from '../config/firebase.ts'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Googlelogo from '../assets/googlelogo_color_272x92dp.png'

export default function Login() {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/');
    }

    return (
        <LoginPageStyled>            
            <button className='button-50' onClick={signInWithGoogle}><div>Sign in with <img src={Googlelogo} alt="" /></div></button>
        </LoginPageStyled>
    )
}