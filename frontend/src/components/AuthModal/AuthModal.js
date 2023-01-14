import { useState, Fragment } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import Button from "../Button/Button";
import './AuthModal.css';

const AuthModal = ({option, setShowModal, setSignIn, setSignUp, handleSignUp, handleSignIn}) => {
    const [signin, setSignin] = useState(option);

    return (
        <Fragment>
            <div className="auth-buttons">
            <Button content="SIGN IN" onClickEvent={() => setSignin(true)}/> <Button content="SIGN UP" onClickEvent={() => setSignin(false)}/>
            {
            signin?
            <SignInModal setSignIn={setSignIn}  signin={signin} handleSignIn={handleSignIn} setShowModal={setShowModal} />: 
            <SignUpModal setSignUp={setSignUp} signin={signin} handleSignUp={handleSignUp} setShowModal={setShowModal}/> }
            
            </div>            
        </Fragment>
    )
}

export default AuthModal