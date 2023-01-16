import { Fragment, useReducer, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {validateEmail} from '../../utils';
import './SignInModal.css';

const initState = {
    email: '',
    password: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'RESET':
            return {
                ...state,
                initState
            }
        default:
            return state
    }
}

const SignInModal = ({ setSignIn, handleSignIn, setShowModal, handleNotification,load }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const onChange = (type) => (e) => {
        dispatch({
            type,
            payload: e.target.value
        })
        setSignIn(state)
    }

    const handleSubmit = async () => {
        const keys = Object.keys(state);
        const value = Object.values(state);
        
        if (value.includes('')) {
            handleNotification({
                showNotification: true,
                type: 'error',
                title: 'Error ',
                message: 'All input field are required'
            })
        }
        else if (!validateEmail(state.email)){
            console.log(state.email, validateEmail(state.email) )
            handleNotification({
                showNotification: true,
                type: 'error',
                title: 'Error ',
                message: 'Provide a valid email'
            })
        } 
        else {
            await handleSignIn();
            dispatch({ type: 'RESET' });
        }
    }

    return (
        <Fragment>
            <div className='signin-form'>
                <Input
                    placeholder="EMAIL"
                    customStyle={null}
                    onChange={onChange('EMAIL')}
                    value={state.email} />
                <Input
                    placeholder="PASSWORD"
                    customStyle={null}
                    type="password"
                    onChange={onChange('PASSWORD')}
                    value={state.password} />
                <Button content={load? "Loading ...":"OK"} onClickEvent={handleSubmit} /> <Button content="CANCEL" onClickEvent={() => setShowModal(false)} />
            </div>

        </Fragment>
    )
}

export default SignInModal