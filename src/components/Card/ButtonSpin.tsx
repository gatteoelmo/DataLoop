import React, { useEffect } from 'react';
import { ButtonSpinContainer,} from './ButtonSpinStyled';
import { Link } from 'react-router-dom';
import CHAT from '../../assets/CHAT.svg'

export const ButtonSpin: React.FC = () => {
  useEffect(() => {
    const text = document.querySelector(".text") as HTMLElement;
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map((char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`)
        .join("");
    }
  }, []);

  return (
    <ButtonSpinContainer>
        <Link to="/createpost">
            <div className="circle">
                <div className="logo"><img src={CHAT} ></img></div>
                
                <div className="text">
                    <p>CREATE - POST - CREATE - POST - </p>
                </div>
            </div>
      </Link>
      
    </ButtonSpinContainer>
  );
}

export default ButtonSpin;

{/* <Link to="/createpost">Create post</Link>   */}