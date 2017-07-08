import request from 'reqwest';
import when from 'when';
import Config from '../constants/QuoteConstants';
import QuoteActions from '../actions/QuoteActions';
import LoginStore from '../stores/LoginStore.js';
import BaseService from './BaseService';

class QuoteService extends BaseService {

	constructor() {
		super();
	}

	nextQuote() {
		this.requestAuthenticated({
				url: Config.QUOTE_URL,
				method: 'GET',
			})
			.then(function (response) {
				QuoteActions.gotQuote(response);
			});
	}

}

export default new QuoteService()