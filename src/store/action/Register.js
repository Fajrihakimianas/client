import { Types } from "../types";
import axiosApi from "../../axios";

export const userRegister = (user) => {
    console.log(user)
    return async (dispatch) => {
        dispatch({ 
            type: Types.REGISTER_REQUEST 
        });

        const res = await axiosApi.post(`/register`, {
            ...user
        });

        if(res.status === 201) {
            const { message } = res.data;
            dispatch({
                type: Types.RESGISTER_SUCCESS,
                payload: {
                    message
                }
            })
        }
        else {
            if(res.status === 400) {
                dispatch({
                    type: Types.RESGISTER_FAILED,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }
    }
}