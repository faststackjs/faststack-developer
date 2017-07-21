import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/route-method', 'Integration | Component | forms/route method', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{forms/route-method}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#forms/route-method}}
      template block text
    {{/forms/route-method}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
