import React, {Fragment, useState} from 'react';
import AuthModal from './AuthModal';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [option, setOption] = useState(false);
    return (
        <Fragment>
            {showModal&&<AuthModal option={option} setShowModal={setShowModal}/>}
            <div className='navbar-container'>
                <div className="logo">
                    <span>DVT</span> <span>DEEZERS</span>
                </div>
                <div className="auth">
                 <Button content="SIGN IN" onClickEvent={() => {setShowModal(true); setOption(true);}}/> 
                 <Button content="SIGN UP" onClickEvent={() => {setShowModal(true); setOption(false);}}/>
                </div>
            </div>
        </Fragment>
    )
}


export default Navbar;
