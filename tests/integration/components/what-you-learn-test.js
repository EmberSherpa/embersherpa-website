import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('what-you-learn', 'Integration | Component | what you learn', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{what-you-learn}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#what-you-learn}}
      template block text
    {{/what-you-learn}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
