import { Fragment, useReducer } from 'react';
import Button from './Button';
import Input from './Input';
import './SignUpModal.css'
const initState = {
    fname: '',
    lname: '',
    email: '',
    password: '',
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FNAME':
            return {
                ...state,
                firstName: action.payload
            }
        case 'LNAME':
            return {
                ...state,
                lastName: action.payload
            }
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


const SignUpModal = ({ setSignUp, handleSignUp, setShowModal }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const onChange = (type) => (e) => {
        dispatch({
            type,
            payload: e.target.value
        })
        setSignUp(state)
    }



    const handleSubmit = async () => {
        await handleSignUp();
        dispatch({ type: 'RESET'});

    }

    return (
        <Fragment>
            <div className='signup-form'>
                <Input
                    placeholder="FIRST NAME"
                    customStyle={null}
                    onChange={onChange('FNAME')}
                    value={state.firstName} />
                <Input
                    placeholder="LAST NAME."
                    customStyle={null}
                    onChange={onChange('LNAME')}
                    value={state.lastName} />
                <Input
                    placeholder="EMAIL."
                    customStyle={null}
                    onChange={onChange('EMAIL')}
                    value={state.email} />
                <Input
                    placeholder="PASSWORD"
                    customStyle={null}
                    type="password"
                    onChange={onChange('PASSWORD')}
                    value={state.password} />
                    <Button content="OK" onClickEvent={handleSubmit} /> <Button content="CANCEL" onClickEvent={() => setShowModal(false)} />
            </div>
            
        </Fragment>
    )
}

export default SignUpModal