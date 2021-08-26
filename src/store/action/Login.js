import { Types } from "../types";
import axiosApi from "../../axios";

export const userLogin = (user) => {
    console.log(user)
    return async (dispatch) => {
        dispatch({ 
            type: Types.LOGIN_REQUEST 
        });

        const res = await axiosApi.post(`/login`, {
            ...user
        });

        if(res.status === 200) {
            const {token, user} = res.data;
            // Simpan Token ke localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: Types.LOGIN_SUCCESS,
                payload: {
                    token,
                    user
                }
            })
        }
        else {
            if(res.status === 400) {
                dispatch({
                    type: Types.LOGIN_FAILED,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }
    }
}