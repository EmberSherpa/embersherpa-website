import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mentoring-process', 'Integration | Component | mentoring process', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mentoring-process}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mentoring-process}}
      template block text
    {{/mentoring-process}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
