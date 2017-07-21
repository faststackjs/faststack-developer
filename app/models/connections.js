import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

export default MF.Fragment.extend({
  url         : DS.attr('string'),
  name        : DS.attr('string'),
  server      : DS.attr('string'),
  adapter     : DS.attr('string'),
  username    : DS.attr('string'),
  password    : DS.attr('string'),
  database    : DS.attr('string'),
});
