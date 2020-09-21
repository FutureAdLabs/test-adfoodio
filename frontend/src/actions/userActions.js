import Axios from 'axios';
import Cookie from 'js-cookie';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try{
        //le envío el form del sign in a la api
        const {data} = await Axios.post('/api/users/signin', {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data)); //le almaceno los datos del usuario en la cookie
    }catch(error){
        dispatch({type: USER_SIGNIN_FAIL, payload: error.message});
    }
}

export { signin };