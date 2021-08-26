/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */

import { Types } from "../types";

const initialState = {
    error: null,
    message: '',
    loading: false
}

export default function Register(state = initialState, action){

    console.log(action)

    const { type, payload } = action;
    switch(type){
        case Types.REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case Types.RESGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload.message
            }
            break;
        case Types.RESGISTER_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload.error
            }
            break;
    }
    return state
}