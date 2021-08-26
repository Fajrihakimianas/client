/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */

import { Types } from "../types";

const initialState = {
    loginData: [],
    error: null,
    loading: false
}

export default function DataLogin(state = initialState, action){

    console.log(action)

    const { type, payload } = action;
    switch(type){
        case Types.GET_CATEGORY_SUCCESS:
            state = {
                ...state,
                loginData: payload.loginData
            }
            break;
    }
    return state
}