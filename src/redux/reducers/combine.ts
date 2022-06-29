import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { notiReducer } from "./notiReducer";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
    auth: authReducer,
    posts: postReducer,
    user: userReducer,
    noti: notiReducer,
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;