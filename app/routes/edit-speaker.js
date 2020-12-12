import Route from '@ember/routing/route';

export default class EditSpeakerRoute extends Route {
    model({id}) {
        return this.store.findRecord('speaker', id);
    }
}
