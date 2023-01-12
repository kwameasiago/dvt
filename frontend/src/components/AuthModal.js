import { useState, Fragment } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import Button from "./Button";
import './AuthModal.css';
const AuthModal = ({option, setShowModal}) => {
    const [signin, setSignin] = useState(option);
    const handleSubmit = () => {
        setShowModal(false)
    }
    return (
        <Fragment>
            <div className="auth-buttons">
            <Button content="SIGN IN" onClickEvent={() => setSignin(true)}/> <Button content="SIGN UP" onClickEvent={() => setSignin(false)}/>
            {signin?<SignInModal />: <SignUpModal /> }
            <Button content="OK" onClickEvent={handleSubmit }/> <Button content="CANCEL" onClickEvent={() => setShowModal(false)}/>
            </div>
            
            
        </Fragment>
    )
}

export default AuthModal