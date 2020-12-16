import Model, { attr, belongsTo } from '@ember-data/model';

export default class ReportModel extends Model {
  @belongsTo("speaker") speaker;
  @belongsTo("meeting") meeting;
  @belongsTo("book") book;
}
