import React, { Fragment, useState, useEffect } from 'react';
import AuthModal from '../AuthModal/AuthModal';
import Button from '../Button/Button';
import './Navbar.css';
import { authApi } from '../../Api';
import { setCookie, getCookie } from '../../utils';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [option, setOption] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    const [signInData, setSignInData] = useState({});
    const [signUpData, setSignUpData] = useState({});
    const [userData, serUserData] = useState({});
    const [load, setLoad] = useState(false)


    useEffect(() => {
        let token = getCookie('auth-token');
        if (token) {
            authApi.get('/auth/info', {
                headers: {
                    'auth-token': getCookie('auth-token')
                }
            })
                .then(res => {
                    setSignedIn(true)
                    serUserData({...res.data, error: ''});
                })
                .catch(err => {
                    setSignedIn(false)
                })
        }else{
            setSignedIn(false)
        }

    }, [])

    const setSignIn = (userData) => setSignInData(userData);

    const setSignUp = (userData) => setSignUpData(userData);

    const handleSignIn = () => {
        setLoad(true);
        const value = Object.keys(signInData);
        if (value.includes('')) {
            return
        }
        authApi.post('/auth/signin', signInData)
            .then(res => {
                setLoad(false);
                const data = res.data;
                if (data.jwt !== '') {
                    setShowModal(false)
                    setSignedIn(true)
                    setCookie('auth-token', data.jwt, 1)
                    serUserData({...userData, error: ''});
                }
                else {
                    serUserData({...userData, error: 'Invalid login credentials'});
                }
            })
            .catch(err => {
                setLoad(false);
                serUserData({...userData, error: 'Invalid login credentials'});
            });
    }

    const handleSignUp = () => {
        setLoad(true);
        const value = Object.keys(signUpData);
        if (value.includes('')) {
            return
        }
        authApi.post('/auth/signup', signUpData)
            .then(res => {
                setLoad(false);
                const data = res.data;
                if (data.jwt !== '') {
                    setShowModal(false)
                    setSignedIn(true)
                    setCookie('auth-token', data.jwt, 1)
                    serUserData({...userData, error: ''});
                }
                else {
                    serUserData({...userData, error: 'Email already exists'});
                }
            })
            .catch(err => {
                setLoad(false);
                serUserData({...userData, error: 'Email already exists'});
            })
    }


    const logout = () => {
        setSignedIn(false)
        setCookie('auth-token', '', 1)
    }

    return (
        <Fragment>
            {showModal &&
                <AuthModal
                    userData={userData}
                    option={option}
                    setShowModal={setShowModal}
                    setSignUp={setSignUp}
                    setSignIn={setSignIn}
                    handleSignIn={handleSignIn}
                    handleSignUp={handleSignUp} 
                    load={load}/>}
            <div className='navbar-container'>
                <div className="logo">
                    <span>DVT</span> <span>DEEZERS</span>
                </div>
                <div className="auth">
                    {
                        signedIn ?
                            <Button content="LOGOUT" onClickEvent={logout} />
                            :
                            <Fragment><Button content="SIGN IN" onClickEvent={() => { setShowModal(true); setOption(true); }} />
                                <Button content="SIGN UP" onClickEvent={() => { setShowModal(true); setOption(false); }} />
                            </Fragment>
                    }
                </div>
            </div>
        </Fragment>
    )
}


export default Navbar;
