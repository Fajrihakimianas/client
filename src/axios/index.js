import axios from "axios";
// import store from "Store";
// import { Types } from "Store/Actions/Types";
import { api } from "../urlConfig";

const token = window.localStorage.getItem('token')

const axiosApi = axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});

export default axiosApi;