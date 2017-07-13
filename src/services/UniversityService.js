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
    setUniversityState(university) {
        this.setState({ university: university});
    }
    cleanVideo(university){
        university.modules = university.modules.map((module)=> {
            module.sections = module.sections.map((section) => {
                section.lessons = section.lessons.map((lesson) => {
                    if(lesson.video) lesson.video = lesson.video.replace("https://www.youtube.com/watch?v=","");
                    return lesson;
                });
                return section;
            });
            return module;
        });
        return university;
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
      .then(responseData => { 
        this.state.university = this.cleanVideo(responseData);
        return this.state.university;
      })
    }
}

export default new UniversityService()