import BaseService from './BaseService';
import AuthService from './AuthService.js';

class UniversityService extends BaseService {

    constructor() {
        super();
        this.state = {
           university: {}
        };
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    getUniversity(){
      return fetch ('https://app.leadexperiments.com/api/university/5911fea2f75eda1200ab52bd?access_token='+AuthService.state.apiKey, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(this.handleErrors)
      .then(response => { return response.json(); })
      .then(responseData => {console.log(responseData); return responseData;})
    }
}

export default new UniversityService()