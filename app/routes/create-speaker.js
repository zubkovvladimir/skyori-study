import Route from '@ember/routing/route';
import SpeakerModel from '../models/speaker';
import controller from '../controllers/speaker';

export default class CreateSpeakerRoute extends Route {
    model() {
        return new SpeakerModel();
    }
}
