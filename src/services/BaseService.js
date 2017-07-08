import LoginStore from '../stores/LoginStore';

export default class BaseService {

	request(config) {

		let r = {  
			method: config.method,
		  headers: config.headers
		};

		if (config.data) {
			r.body = JSON.stringify(config.data)
		}

		console.log(config.url);
		console.log(r.body);

		return fetch(config.url, r)
      .then(response => response.json())
      .catch(e => e)
	}

	requestAuthenticated(config) {
		let r = {  
			method: config.method,
		  headers: config.headers
		}

		r.headers.Authorization = 'Bearer ' + LoginStore.jwt;
		r.crossOrigin = true;

		if (config.data) {
			r.data = config.data;
		}

		return fetch(config.url, r)
      .then(response => response.json())
      .catch(e => e)
	}
}
