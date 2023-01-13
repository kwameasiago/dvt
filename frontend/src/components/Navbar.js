import React, {Fragment, useState, useEffect} from 'react';
import AuthModal from './AuthModal';
import Button from './Button';
import './Navbar.css';
import { authApi } from '../Api';
import {setCookie} from '../utils';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [option, setOption] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    const [signInData, setSignInData] = useState({});
    const [signUpData, setSignUpData] = useState({});

    
    useEffect(() => {
        console.log('called')
    }, [])

    const setSignIn = (userData) => setSignInData(userData);
    
    const setSignUp = (userData) => setSignUpData(userData);

    const handleSignIn = () => {
        const keys = Object.keys(signInData);
        const value = Object.keys(signInData);
        if(value.includes('')){
            return
        }
        authApi.post('/auth/signin',signInData)
        .then(res => {
            const data = res.data;
            const {jwt} = data;
            if(data.jwt != ''){
                setShowModal(false)
                setSignedIn(true)
                setCookie({jwt})
            }
            else {
                alert('Invalid login credentials');
            }
        })
        .catch(err => {
            alert('Invalid login credentials');
        });
    } 

    const handleSignUp = () => {
        const keys = Object.keys(signUpData);
        const value = Object.keys(signUpData);
        if(value.includes('')){
            return
        }
        authApi.post('/auth/signup',signUpData)
        .then(res => {
            const data = res.data;
            const {jwt} = data;
            
            if(data.jwt != ''){
                setShowModal(false)
                setSignedIn(true)
                setCookie({jwt})
            }
            else {
                alert('Invalid login credentials');
            }
        })
        .catch(err => {
            alert('Invalid login credentials');
        })
    } 


    const logout = () => {
        setSignedIn(false)
    }
    
    return (
        <Fragment>
            {showModal&&
            <AuthModal 
            option={option} 
            setShowModal={setShowModal} 
            setSignUp={setSignUp} 
            setSignIn={setSignIn}
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}/>}
            <div className='navbar-container'>
                <div className="logo">
                    <span>DVT</span> <span>DEEZERS</span>
                </div>
                <div className="auth">
                 {
                    signedIn?
                    <Button content="LOGOUT" onClickEvent={logout}/>
                    :
                 <Fragment><Button content="SIGN IN" onClickEvent={() => {setShowModal(true); setOption(true);}}/> 
                 <Button content="SIGN UP" onClickEvent={() => {setShowModal(true); setOption(false);}}/>
                 </Fragment>   
                 }
                </div>
            </div>
        </Fragment>
    )
}


export default Navbar;
