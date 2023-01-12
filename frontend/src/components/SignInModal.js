import { Fragment, useReducer } from 'react';
import Input from './Input';
import './SignInModal.css'
const initState = {
    email: '',
    password: ''
}
const reducer = (state, action) => { 
    switch (action.type) {
        case 'EMAIL':
            return {
                ...state,
                email:action.payload
            }
        case 'PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}

const SignInModal = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <Fragment>
            <div className='signin-form'>
                <Input
                    placeholder="EMAIL"
                    customStyle={null}
                    onChange={e => {dispatch({
                        type: 'EMAIL',
                        payload: e.target.value
                    })}}
                    value={state.email} />
                <Input
                    placeholder="PASSWORD"
                    customStyle={null}
                    type="password"
                    onChange={e => {dispatch({
                        type: 'PASSWORD',
                        payload: e.target.value
                    })}}
                    value={state.password} />
            </div>
        </Fragment>
    )
}

export default SignInModal