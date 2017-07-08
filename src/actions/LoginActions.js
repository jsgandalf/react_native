import AppDispatcher from '../dispatchers/AppDispatcher.js';
import LoginConfig from '../constants/LoginConstants.js';
import RouterContainer from '../services/RouterContainer'

export default {
    loginUser: (jwt) => {
        var savedJwt = localStorage.getItem('jwt');
        AppDispatcher.dispatch({
            actionType: LoginConfig.LOGIN_USER,
            jwt: jwt
        });

        if (savedJwt !== jwt) {
            var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

            RouterContainer.get().transitionTo(nextPath);
            localStorage.setItem('jwt', jwt);
        }
    },
    logoutUser: () => {
        RouterContainer.get().transitionTo('/login');
        localStorage.removeItem('jwt');
        AppDispatcher.dispatch({
            actionType: LoginConfig.LOGOUT_USER
        });
    }
}