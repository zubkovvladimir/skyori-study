import Model, { attr, hasMany } from '@ember-data/model';

export default class MeetingModel extends Model {
  @attr('string') date;

  @hasMany('report') reports;
}
