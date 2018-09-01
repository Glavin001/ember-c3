import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c3-chart', 'Integration | Component | c3 chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c3-chart}}`);

  assert.equal(this.$().text().trim(), '');

});


test('it renders a SVG barcode', function (assert) {
  assert.expect(1);
 
  this.render(hbs`{{c3-chart data=data axis=axis}}`);

  // will display - text value is set
  this.render(hbs`{{bar-code value=code}}`);
  assert.equal(this.$('svg').attr('style'), 'transform: translate(0,0)');

});