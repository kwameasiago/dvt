import { Fragment, useReducer } from 'react';
import Input from './Input';
import './SignUpModal.css'
const initState = {
    email: '',
    password: ''
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
        default:
            return state
    }
}


const SignUpModal = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <Fragment>
            <div className='signup-form'>
                <Input
                    placeholder="FIRST NAME"
                    customStyle={null}
                    onChange={e => {
                        dispatch({
                            type: 'FNAME',
                            payload: e.target.value
                        })
                    }}
                    value={state.firstName} />
                <Input
                    placeholder="LAST NAME."
                    customStyle={null}
                    onChange={e => {
                        dispatch({
                            type: 'LNAME',
                            payload: e.target.value
                        })
                    }}
                    value={state.lastName} />
                <Input
                    placeholder="EMAIL."
                    customStyle={null}
                    onChange={e => {
                        dispatch({
                            type: 'EMAIL',
                            payload: e.target.value
                        })
                    }}
                    value={state.email} />
                <Input
                    placeholder="PASSWORD"
                    customStyle={null}
                    type="password"
                    onChange={e => {
                        dispatch({
                            type: 'PASSWORD',
                            payload: e.target.value
                        })
                    }}
                    value={state.password} />
            </div>
        </Fragment>
    )
}

export default SignUpModal