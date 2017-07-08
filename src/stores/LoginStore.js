import LoginConfig from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import {
    AsyncStorage
} from 'react-native';

class LoginStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._user = null;
    }

    async removeCache(){
        try {
          const value = await AsyncStorage.removeItem('@user:instance');
        } catch (error) {
            console.log(error);
          // Error retrieving data
        }
    }

    logout(){
        this.removeCache();
    }

    _registerToActions(action) {
        this._user = action.user;
        this.setCache(this._user);
        /*switch (action.actionType) {
            case LoginConfig.LOGIN_USER:
                this._jwt = action.jwt;
                //this._user = jwt_decode(this._jwt);
                this.emitChange();
                break;
            case LoginConfig.LOGOUT_USER:
                this._user = null;
                this.emitChange();
                break;
            default:
                break;
        }
        ;*/
    }
    async getCache(){
        try {
          const value = await AsyncStorage.getItem('@user:instance');
          return value;
        } catch (error) {
            console.log(error);
          // Error retrieving data
        }
    }
    async setCache(user){
        try {
          await AsyncStorage.setItem('@user:instance', JSON.stringify(user));
        } catch (error) {
          // Error saving data
        }
    }

    get user() {
        if(!this._user){
           return this.getCache()
        }
        return this._user;
    }

    isLoggedIn() {
        return !!this._user;
    }
}

export default new LoginStore();