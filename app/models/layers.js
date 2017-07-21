import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

export default MF.Fragment.extend({
  name        : DS.attr('string'),
  packages    : DS.hasMany('packages'),
});
