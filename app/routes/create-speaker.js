import Route from '@ember/routing/route';

export default class CreateSpeakerRoute extends Route {
    model() {
        return {
            lastName: '',
            firstName: '',
            patronymic: ''
        }
    }
}
