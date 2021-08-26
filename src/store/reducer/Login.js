/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */

import { Types } from "../types";

const initialState = {
    token: null,
    user: {
        username: '',
        time_login: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
}

export default function Login(state = initialState, action){

    console.log(action)

    const { type, payload } = action;
    switch(type){
        case Types.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case Types.LOGIN_SUCCESS:
            state = {
                ...state,
                user: payload.user,
                token: payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case Types.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case Types.LOGOUT_SUCCESS:
            state = {
                ...initialState
            }
            break;
        case Types.LOGOUT_FAILED:
            state = {
                ...state,
                error: payload.error,
                loading: false
            }
            break;
    }
    return state
}