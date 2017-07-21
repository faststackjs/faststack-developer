import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

export default MF.Fragment.extend({
  name    : DS.attr('string'),
  all     : MF.array(),
  geet    : MF.array(),
  put     : MF.array(),
  post    : MF.array(),
  delete  : MF.array(),
  parent  : DS.belongsTo('routes')
});
