import { Types } from "../types";
import axiosApi from "../../axios";

export const getDataLogin = () => {
    return async dispatch => {
        dispatch({
            type: Types.GET_LOGIN_REQUEST
        });

        const res = await axiosApi.get(`/get-data-login`);
        console.log(res)
        if(res.status === 200){

            const { result } = res.data;

            dispatch({
                type: Types.GET_LOGIN_SUCCESS,
                payload: {
                    loginData: result
                }
            })
        }
        else {
            dispatch({
                type: Types.GET_LOGIN_FAILED,
                error: res.data.error
            })
        }
    }
}