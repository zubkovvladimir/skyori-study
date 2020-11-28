import Model, { attr } from '@ember-data/model';

export default class SpeakerModel extends Model {
    @attr("string") photo;
    @attr("string") firstName;
    @attr("string") lastName;
    @attr("string") patronymic;
}
