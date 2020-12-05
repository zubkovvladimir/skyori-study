import Model from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class SpeakerModel extends Model {
  @tracked photo = '';
  @tracked lastName = '';
  @tracked firstName = '';
  @tracked patronymi = '';
}
