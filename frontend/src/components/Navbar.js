import React, {Fragment} from 'react';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    return (
        <Fragment>
            <div className='navbar-container'>
                <div className="logo">
                    <span>DVT</span> <span>DEEZERS</span>
                </div>
                <div className="auth">
                 <Button content="SIGN IN" onClickEvent={null}/> <Button content="SIGN UP" onClickEvent={null}/>
                </div>
            </div>
        </Fragment>
    )
}


export default Navbar;
