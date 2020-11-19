import Route from '@ember/routing/route';

export default class CreateBookRoute extends Route {
    model() {
        return {
            name: '',
            author: '',
            features: {
                number: '',
                description: ''
            }
        }
    }
}
