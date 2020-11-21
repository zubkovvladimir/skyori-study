import Route from '@ember/routing/route';

export default class CreateSpeakerRoute extends Route {
    model() {
        return {
            photo: '',
            name: {
                lastName: '',
                firstName: '',
                patronymic: ''
            }
        }
    }
}
