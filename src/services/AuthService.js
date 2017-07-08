import Bluebird from 'bluebird';
import Config from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';
import BaseService from './BaseService';
import AppDispatcher from '../dispatchers/AppDispatcher.js';

class AuthService extends BaseService {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            apiKey: ''
        };
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    login(email, password) {
        return fetch('https://app.leadexperiments.com/auth/local', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          })
        })
        .then(this.handleErrors)
        .then(response => { return response.json(); })
        .then(responseData => { 
            this.state.apiKey = responseData.user.apiKey; 

            AppDispatcher.dispatch({
                user:responseData.user
            });

            return this.state.apiKey; 
        })
          
    }

    logout() {
        LoginActions.logoutUser();
    }

    signup(username, password, extra) {
        return this.handleAuth(this.request({
            url: Config.SIGNUP_URL,
            method: 'POST',
            type: 'json',
            data: {
                username, password, extra
            }
        }));


    }

    handleAuth(loginPromise) {
        return loginPromise
            .then(function (response) {
                console.log(response);
                var jwt = response.token;
                //LoginActions.loginUser(jwt);
                return true;
            });
    }
}

export default new AuthService()