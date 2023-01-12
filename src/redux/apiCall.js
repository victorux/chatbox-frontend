import { 
    loginFailure, 
    loginStart, 
    loginSuccess,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    updatePasswordSuccess
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";


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
        const res = await userRequest.post(url, {
            image: image,
        });
        dispatch(updateUserSuccess({
            profilePicture: res.data.profilePicture
        }));
        return true;
    } catch(err) {
        dispatch(updateUserFailure());
        console.log(err);
        return false;
    }
}


export const updateUserInfo = async (dispatch, userId, values) =>{
    const url = "/users/" + userId
    dispatch(updateUserStart());
    try{
        const res = await userRequest.put(url, {
            firstName: values.firstName,
            lastName: values.lastName
        });

        dispatch(updateUserSuccess({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
        }));
    } catch(err) {
        dispatch(updateUserFailure());
        console.log(err);
    }
}


export const updateUserPassword = async (dispatch, userId, values) =>{
    const url = "/users/" + userId
    dispatch(updateUserStart());
    try{
        await userRequest.put(url, {
            oldPassword: values.currentPassword,
            password: values.newPassword
        });
        dispatch(updatePasswordSuccess());
        return true;
    } catch(err) {
        dispatch(updateUserFailure());
        console.log(err);
        return;
    }
}