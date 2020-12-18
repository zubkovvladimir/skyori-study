import Model, { attr, belongsTo } from '@ember-data/model';

export default class ReportModel extends Model {
  @attr('string') review;
  @attr('string') linkToVideo;
  @attr('string') linkToPresentation;

  @belongsTo("speaker") speaker;
  @belongsTo("meeting") meeting;
  @belongsTo("book") book;
}
