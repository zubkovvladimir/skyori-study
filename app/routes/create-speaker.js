import Route from '@ember/routing/route';
import SpeakerModel from '../models/speaker';

export default class CreateSpeakerRoute extends Route {
    model() {
        return {
          firstName: '',
          lastName: '',
          patronymic: '',
          photo: ''
        };
    }
}
