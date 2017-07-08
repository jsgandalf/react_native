import QuoteConfig from '../constants/QuoteConstants';
import LoginConfig from '../constants/LoginConstants';
import BaseStore from './BaseStore';

class QuoteStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._quote = '';
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case QuoteConfig.QUOTE_GET:
        this._quote = action.quote;
        this.emitChange();
        break;
      case LoginConfig.LOGOUT_USER:
        this._quote = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get quote() {
    return this._quote;
  }
}

export default new QuoteStore();