import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {publicRequest} from '../Axios';

export const login = async(dispatch, user) =>{
    dispatch(loginStart());
    console.log(user);
    try{
        const res = await publicRequest.post("/auth/login",user)
        console.log(res.data);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}
