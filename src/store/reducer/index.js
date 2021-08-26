import Login from "./Login";
import Register from "./Register";
import DataLogin from "./dataLogin";

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    auth: Login,
    regis: Register,
    datalogin: DataLogin
});

export default rootReducers;