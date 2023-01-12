import { useState, Fragment } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import Button from "./Button";
import './AuthModal.css';
const AuthModal = ({option, setShowModal}) => {
    const [signin, setSignin] = useState(option);
    return (
        <Fragment>
            <div className="auth-buttons">
            <Button content="SIGN IN" onClickEvent={() => setSignin(true)}/> <Button content="SIGN UP" onClickEvent={() => setSignin(false)}/>
            {signin?<SignInModal />: <SignUpModal /> }
            <Button content="OK" onClickEvent={() => setShowModal(false)}/> <Button content="CANCEL" onClickEvent={() => setShowModal(false)}/>
            </div>
            
            
        </Fragment>
    )
}

export default AuthModal