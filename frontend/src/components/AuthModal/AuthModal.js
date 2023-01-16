import { useState, Fragment, useEffect } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import Button from "../Button/Button";
import Notification from '../Notification/Notification';
import './AuthModal.css';

const AuthModal = ({ option, setShowModal, setSignIn, setSignUp, handleSignUp, handleSignIn, userData, load }) => {
    const notifyConfig = {
        showNotification: false,
        type: '',
        title: '',
        message: ''
    }
    const [notification, setNotification] = useState(notifyConfig);
    const handleNotification = ({ showNotification, type, title, message }) => {
        setNotification({ showNotification, type, title, message })
    }
    useEffect(() => {
        if (userData.error) {
            setNotification({
                showNotification: true,
                type: 'error',
                title: 'Error! ',
                message: userData.error
            })
        }
    }, [userData])
    const closeModal = () => {
        setNotification(notifyConfig)
    };
    const [signin, setSignin] = useState(option);
    const { showNotification, title, message, type } = notification;
  
    return (
        <Fragment>
            <div className="auth-buttons">
                <Button content="SIGN IN" onClickEvent={() => setSignin(true)} /> <Button content="SIGN UP" onClickEvent={() => setSignin(false)} />
                {showNotification && <Notification
                    title={title}
                    message={message}
                    type={type}
                    onClose={closeModal}
                />}
                {
                    signin ?
                        <SignInModal
                            setSignIn={setSignIn}
                            signin={signin}
                            handleSignIn={handleSignIn}
                            setShowModal={setShowModal}
                            handleNotification={handleNotification}
                            closeModal={closeModal}
                            load={load}
                        /> :
                        <SignUpModal
                            setSignUp={setSignUp}
                            signin={signin}
                            handleSignUp={handleSignUp}
                            setShowModal={setShowModal}
                            handleNotification={handleNotification}
                            closeModal={closeModal} 
                            load={load}
                        />}

            </div>
        </Fragment>
    )
}

export default AuthModal