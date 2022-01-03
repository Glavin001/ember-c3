import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { click, render, triggerEvent } from '@ember/test-helpers';
import { bind } from '@ember/runloop';

module('Integration | Component | c3 chart', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a pie chart', async function (assert) {
    assert.expect(4);

    this.data = {
      columns: [
        ['data1', 30],
        ['data2', 120]
      ],
      type: 'pie'
    };

    await render(hbs`<C3Chart @data={{this.data}} />`);

    assert.dom('svg').exists();
    assert.dom('g .c3-legend-item').exists({ count: 2 }, 'Pie chart has a legend');
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 2 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');
  });

  test('it renders a donut chart', async function (assert) {
    assert.expect(4);

    this.data = {
      columns: [
        ['data1', 30],
        ['data2', 120],
        ['data3', 95]
      ],
      type: 'donut'
    };

    this.donut = { title: 'Iris Petal Width' };

    await render(hbs`<C3Chart @data={{this.data}} @donut={{this.donut}} />`);

    assert.dom('svg').exists();
    assert
      .dom('.c3-chart-arcs-title')
      .hasText('Iris Petal Width', 'Text matches title');

    assert.dom('.c3-legend-item').exists({ count: 3 }, 'Has 3 legend items');
    assert.dom('svg g').exists({ count: 79 }, 'svg g elements');
  });

  test('it renders a gauge chart', async function (assert) {
    assert.expect(5);

    this.data = {
      columns: [['data', 91.4]],
      type: 'gauge'
    };

    this.title = { text: 'Percent Complete' };

    await render(
      hbs`<C3Chart @data={{this.data}} @title={{this.title}} @gauge={{this.gauge}} @color={{this.color}} @size={{this.size}} />`
    );

    assert.dom('svg').exists();
    assert.dom('.c3-title').exists('Has title text');
    assert.dom('.c3-title').hasText('Percent Complete', 'Text matches title');
    assert.dom('.c3-legend-item').exists({ count: 1 }, 'Has 1 legend items');
    assert.dom('svg g').exists({ count: 57 }, 'svg g elements');
  });

  test('it renders a timeseries chart', async function (assert) {
    assert.expect(5);

    this.data = {
      x: 'x',
      columns: [
        [
          'x',
          '2013-01-01',
          '2013-01-02',
          '2013-01-03',
          '2013-01-04',
          '2013-01-05',
          '2013-01-06'
        ],
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 340, 200, 500, 250, 350]
      ]
    };

    this.set('axis', {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d'
        }
      }
    }),
      this.set('title', {
        text: 'Internet Speeds'
      });

    await render(
      hbs`<C3Chart 
          @data={{this.data}} 
          @title={{this.title}} 
          @guage={{this.guage}} 
          @color={{this.color}} 
          @size={{this.size}} />`
    );

    assert.dom('svg').exists();
    assert.dom('.c3-title').exists('Has title text');
    assert.dom('.c3-title').hasText('Internet Speeds', 'Text matches title');
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 2 legend items');
    assert.dom('svg g').exists({ count: 64 }, 'svg g elements');
  });

  test('it renders a bar chart', async function (assert) {
    assert.expect(5);

    this.data = {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
    };

    this.bar = {
      width: {
        ratio: 0.5
      }
    };

    this.title = { text: 'Regional Sales' };

    await render(
      hbs`<C3Chart 
             @data={{this.data}} 
             @title={{this.title}} 
             @guage={{this.guage}} 
             @color={{this.color}} 
             @size={{this.size}} />`
    );

    assert.dom('svg').exists();
    assert.dom('.c3-title').exists('Has title text');
    assert.dom('.c3-title').hasText('Regional Sales', 'Text matches title');
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 2 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');
  });

    /********** missing data  *********/

    test('it handles missing data object', async function (assert) {
      assert.expect(4);
  
      this.title = {
        text: 'No data object'
      };
  
      await render(
        hbs`<C3Chart 
              @title={{this.title}} 
            />`
      );
  
      // debugger;
      assert.dom('svg').exists();
      assert.dom('.c3-title').exists('Has title text');
      assert.dom('.c3-title').hasText('No data object', 'Text matches title');
      assert.dom('.c3-text.c3-empty').hasText('No Data');
    });

    test('it handles data oject without data source', async function (assert) {
      assert.expect(4);
  
      this.data = {
        type: 'pie'
      };
  
      this.title = {
        text: 'No data source'
      };

      await render(
        hbs`<C3Chart 
              @data={{this.data}} 
              @title={{this.title}} 
            />`
      );

      assert.dom('svg').exists();
      assert.dom('.c3-title').exists('Has title text');
      assert.dom('.c3-title').hasText('No data source', 'Text matches title');
      assert.dom('.c3-text.c3-empty').hasText('No Data');
    });
  
  /********** c3 chart events *********/

  test('triggers action on chart init', async function (assert) {
    assert.expect(4);

    this.data = {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
    };

    this.chartAction = () => {
      assert.ok(true, 'onintit action is called');
    };

    await render(hbs`<C3Chart 
                        @data={{this.data}} 
                        @title={{this.title}} 
                        @gauge={{this.gauge}} 
                        @color={{this.color}} 
                        @size={{this.size}}
                        @oninit={{this.chartAction}}
                         />`);

    assert.dom('svg').exists();
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 2 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');
  });

  test('triggers action on chart render', async function (assert) {
    assert.expect(3);

    this.data = {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
    };

    this.chartAction = chart => {
      assert.strictEqual(typeof chart, 'object', 'onrender action is called');
    };

    await render(hbs`<C3Chart 
                        @data={{this.data}} 
                        @title={{this.title}} 
                        @gauge={{this.gauge}} 
                        @color={{this.color}} 
                        @size={{this.size}}
                        @onrender={{this.chartAction}}
                         />`);

    assert.dom('svg').exists();
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 2 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');
  });

  test('triggers action on chart mouseover', async function (assert) {
    assert.expect(4);

    this.data = {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
    };

    this.chartAction = chart => {
      assert.strictEqual(
        typeof chart,
        'string',
        'onmouseover action is called'
      );
    };

    await render(hbs`<C3Chart 
                        @data={{this.data}} 
                        @title={{this.title}} 
                        @guage={{this.guage}} 
                        @color={{this.color}} 
                        @size={{this.size}}
                        @onmouseover={{this.chartAction}}
                         />`);

    assert.dom('svg').exists();
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 2 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');

    await triggerEvent('svg', 'mouseenter');
  });

  test('triggers action on chart mouseout', async function (assert) {
    assert.expect(4);

    this.data = {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
    };

    this.chartAction = chart => {
      assert.strictEqual(typeof chart, 'string', 'onmouseout action is called');
    };

    await render(hbs`<C3Chart 
                        @data={{this.data}} 
                        @title={{this.title}} 
                        @gauge={{this.gauge}} 
                        @color={{this.color}} 
                        @size={{this.size}}
                        @onmouseout={{this.chartAction}}
                         />`);

    assert.dom('svg').exists();
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 2 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');

    await triggerEvent('svg', 'mouseleave');
  });

  /*********************************************************/
  /*  Chart onresize and resized events are not tested     */
  /*  Could not figoure out to trigger c3 charts to resize */
  /*********************************************************/

  /********* chart data events *********/

  test('data onClick', async function (assert) {
    assert.expect(4);

    this.chartAction = () => {
      assert.ok(true, 'onclick action is called');
    };

    this.data = {
      columns: [
        ['data1', 30],
        ['data2', 120]
      ],
      type: 'pie',
      onclick: bind(this, this.chartAction)
    };

    await render(hbs`<C3Chart @data={{this.data}} />`);
    // debugger
    assert.dom('svg').exists();
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 2 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');

    await click('.c3-arc-data1');
  });

  test('data onmouseover', async function (assert) {
    assert.expect(4);

    this.chartAction = () => {
      assert.ok(true, 'onmouseover action is called');
    };

    this.data = {
      columns: [
        ['data1', 30],
        ['data2', 120]
      ],
      type: 'pie',
      onmouseover: bind(this, this.chartAction)
    };

    await render(hbs`<C3Chart @data={{this.data}} />`);

    assert.dom('svg').exists();
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 3 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');

    await triggerEvent('g .c3-arc-data1', 'mouseover');
  });

  test('data onmouseout', async function (assert) {
    assert.expect(4);

    this.chartAction = () => {
      assert.ok(true, 'onmouseout action is called');
    };

    this.data = {
      columns: [
        ['data1', 30],
        ['data2', 120]
      ],
      type: 'pie',
      onmouseout: bind(this, this.chartAction)
    };

    await render(hbs`<C3Chart @data={{this.data}} />`);

    assert.dom('svg').exists();
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 3 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');

    await triggerEvent('g .c3-arc-data1', 'mouseout');
  });

  /*** Testing dtitle property ***/

  test('Can dynamically change the title', async function (assert) {
    assert.expect(7);

    this.dtitle = null;

    this.chartAction = () => {
      this.set('dtitle', { text: 'New Title', refresh: false });
      assert.ok(true, 'onclick action is called');
    };

    this.data = {
      columns: [
        ['data1', 30],
        ['data2', 120]
      ],
      type: 'pie',
      onclick: bind(this, this.chartAction)
    };

    this.title = {
      text: 'Percent Complete'
    };

    await render(hbs`<C3Chart @data={{this.data}} @title={{this.title}} @dtitle={{this.dtitle}} />`);

    assert.dom('svg').exists();
    assert
      .dom('.c3-title')
      .containsText('Percent Complete', 'Text matches title');
    assert.dom('g .c3-legend-item').exists({ count: 2 }, 'Pie chart has a legend');
    assert.dom('.c3-legend-item').exists({ count: 2 }, 'Has 2 legend items');
    assert.dom('svg g').exists({ count: 67 }, 'svg g elements');

    await click('.c3-arc-data1');

    assert.dom('.c3-title').hasText('New Title', 'Pie chart title has changed');
  });
});
