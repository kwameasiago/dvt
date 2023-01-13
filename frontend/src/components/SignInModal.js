import { Fragment, useReducer, } from 'react';
import Button from './Button';
import Input from './Input';
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

const SignInModal = ({ setSignIn, handleSignIn, setShowModal }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const onChange = (type) => (e) => {
        dispatch({
            type,
            payload: e.target.value
        })
        setSignIn(state)
    }

    const handleSubmit = async () => {
        await handleSignIn();
        dispatch({ type: 'RESET'});

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
            </div>
            <Button content="OK" onClickEvent={handleSubmit} /> <Button content="CANCEL" onClickEvent={() => setShowModal(false)} />
        </Fragment>
    )
}

export default SignInModal