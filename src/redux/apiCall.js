import { 
    loginFailure, 
    loginStart, 
    loginSuccess,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure
} from "./userRedux";
import { publicRequest } from "../requestMethods";


export const login = async (dispatch, user ) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const updateUserImage = async (dispatch, userId, image) =>{
    const url = "/users/updateimage/" + userId
    dispatch(updateUserStart());
    try{
        const res = await publicRequest.post(url, {
            image: image,
        });
        dispatch(updateUserSuccess(res.data));
    } catch(err) {
        dispatch(updateUserFailure());
        console.log(err);
    }
}