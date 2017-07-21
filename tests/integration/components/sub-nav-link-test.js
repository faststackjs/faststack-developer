import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sub-nav-link', 'Integration | Component | sub nav link', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sub-nav-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sub-nav-link}}
      template block text
    {{/sub-nav-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
