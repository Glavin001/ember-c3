import { module, test } from 'qunit';
import { setupRenderingTest } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import { render, find, triggerEvent } from '@ember/test-helpers';

module("Integration | Component | c3 chart", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders a pie chart", async function(assert) {
    this.set("data", {
      columns: [["data1", 30], ["data2", 120]],
      type: "pie"
    });

    // const done = assert.async();

    await render(hbs`{{c3-chart data=this.data}}`);

    // pauses for 20 seconds
    // setTimeout(() => done(), 60000);

    assert.ok(find("svg"));

    assert.ok(this.$("g").hasClass("c3-legend-item"), "Pie charte has lengend");
    assert.equal(this.$(".c3-legend-item").length, 2, "Has 2 legend items");
    assert.equal(this.$("svg g").length, 70, "svg g elements");
  });

  test("it renders a donut chart", async function(assert) {
    this.set("data", {
      columns: [["data1", 30], ["data2", 120], ["data3", 95]],
      type: "donut"
    });

    this.set("donut", { title: "Iris Petal Width" });

    // const done = assert.async();

    await render(hbs`{{c3-chart data=data donut=donut}}`);

    // // pauses for 60 seconds
    // setTimeout(() => done(), 60000);

    assert.ok(find("svg"));

    assert.ok(this.$("text").hasClass("c3-chart-arcs-title"), "Has title text");
    assert.equal(
      this.$(".c3-chart-arcs-title").text(),
      "Iris Petal Width",
      "Text matches title"
    );
    assert.equal(this.$(".c3-legend-item").length, 3, "Has 3 legend items");
    assert.equal(this.$("svg g").length, 82, "svg g elements");
  });

  test("it renders a gauge chart", async function(assert) {
    this.set("data", {
      columns: [["data", 91.4]],
      type: "gauge",
      title: {
        text: "Percent Complete"
      }
    });

    this.set("title", {
      text: "Percent Complete"
    });

    // const done = assert.async();

    await render(hbs`{{c3-chart data=data title=title gauge=gauge color=color size=size}}`);

    // pauses for 60 seconds
    // setTimeout(() => done(), 60000);

    assert.ok(find("svg"));

    assert.ok(this.$("text").hasClass("c3-title"), "Has title text");
    assert.equal(
      this.$(".c3-title").text(),
      "Percent Complete",
      "Text matches title"
    );
    assert.equal(this.$(".c3-legend-item").length, 1, "Has 1 legend items");
    assert.equal(this.$("svg g").length, 60, "svg g elements");
  });

  test("it renders a timeseries chart", async function(assert) {
    this.set("data", {
      x: "x",
      // xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
      columns: [
        [
          "x",
          "2013-01-01",
          "2013-01-02",
          "2013-01-03",
          "2013-01-04",
          "2013-01-05",
          "2013-01-06"
        ],
        // ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
        ["data1", 30, 200, 100, 400, 150, 250],
        ["data2", 130, 340, 200, 500, 250, 350]
      ]
    });

    this.set("axis", {
      x: {
        type: "timeseries",
        tick: {
          format: "%Y-%m-%d"
        }
      }
    }),
      this.set("title", {
        text: "Internet Speeds"
      });

    // const done = assert.async();

    await render(hbs`{{c3-chart data=data title=title gauge=gauge color=color size=size}}`);

    // pauses for 60 seconds
    // setTimeout(() => done(), 60000);

    assert.ok(find("svg"));

    assert.ok(this.$("text").hasClass("c3-title"), "Has title text");
    assert.equal(
      this.$(".c3-title").text(),
      "Internet Speeds",
      "Text matches title"
    );
    assert.equal(this.$(".c3-legend-item").length, 2, "Has 2 legend items");
    assert.equal(this.$("svg g").length, 67, "svg g elements");
  });

  test("it renders a bar chart", async function(assert) {
    this.set("data", {
      columns: [
        ["data1", 30, 200, 100, 400, 150, 250],
        ["data2", 130, 100, 140, 200, 150, 50]
      ],
      type: "bar"
    });

    this.set("bar", {
      width: {
        ratio: 0.5
      }
    });

    this.set("title", {
      text: "Regional Sales"
    });

    // const done = assert.async();

    await render(hbs`{{c3-chart data=data title=title gauge=gauge color=color size=size}}`);

    // pauses for 60 seconds
    // setTimeout(() => done(), 60000);

    assert.ok(find("svg"));

    assert.ok(this.$("text").hasClass("c3-title"), "Has title text");
    assert.equal(
      this.$(".c3-title").text(),
      "Regional Sales",
      "Text matches title"
    );
    assert.equal(this.$(".c3-legend-item").length, 2, "Has 2 legend items");
    assert.equal(this.$("svg g").length, 75, "svg g elements");
  });

  test("triggers action on chart init", async function(assert) {
    this.set("data", {
      columns: [
        ["data1", 30, 200, 100, 400, 150, 250],
        ["data2", 130, 100, 140, 200, 150, 50]
      ],
      type: "bar"
    });

    this.set("chartAction", () => {
      assert.ok(true, "onintit action is called");
    });

    await render(hbs`{{c3-chart 
                        data=data 
                        title=title 
                        gauge=gauge 
                        color=color 
                        size=size
                        onmouseover=(action chartAction)
                        }}`);

    assert.ok(find("svg"));

    assert.equal(this.$(".c3-legend-item").length, 2, "Has 2 legend items");
    assert.equal(this.$("svg g").length, 75, "svg g elements");
  });

  test("triggers action on chart render", async function(assert) {
    this.set("data", {
      columns: [
        ["data1", 30, 200, 100, 400, 150, 250],
        ["data2", 130, 100, 140, 200, 150, 50]
      ],
      type: "bar"
    });

    this.set("chartAction", (chart) => {
      assert.equal(typeof chart, "object", "onrender action is called");
    });

    await render(hbs`{{c3-chart 
                        data=data 
                        title=title 
                        gauge=gauge 
                        color=color 
                        size=size
                        onrender=(action chartAction)
                        }}`);

    assert.ok(find("svg"));

    assert.equal(this.$(".c3-legend-item").length, 2, "Has 2 legend items");
    assert.equal(this.$("svg g").length, 75, "svg g elements");
  });

  test("triggers action on chart mouseover", async function(assert) {
    this.set("data", {
      columns: [
        ["data1", 30, 200, 100, 400, 150, 250],
        ["data2", 130, 100, 140, 200, 150, 50]
      ],
      type: "bar"
    });

    this.set("chartAction", (chart) => {
      assert.equal(typeof chart, "object", "onmouseover action is called");
    });

    await render(hbs`{{c3-chart 
                        data=data 
                        title=title 
                        gauge=gauge 
                        color=color 
                        size=size
                        onmouseover=(action chartAction)
                        }}`);

    assert.ok(find("svg"));

    await triggerEvent('.c3 svg', 'mouseenter');

    assert.equal(this.$(".c3-legend-item").length, 2, "Has 2 legend items");
    assert.equal(this.$("svg g").length, 75, "svg g elements");
  });


  test("triggers action on chart mouseout", async function(assert) {
    this.set("data", {
      columns: [
        ["data1", 30, 200, 100, 400, 150, 250],
        ["data2", 130, 100, 140, 200, 150, 50]
      ],
      type: "bar"
    });

    this.set("chartAction", (chart) => {
      assert.equal(typeof chart, "object", "onmouseout action is called");
    });

    await render(hbs`{{c3-chart 
                        data=data 
                        title=title 
                        gauge=gauge 
                        color=color 
                        size=size
                        onmouseout=(action chartAction)
                        }}`);

    assert.ok(find("svg"));

    await triggerEvent('.c3 svg', 'mouseout');

    assert.equal(this.$(".c3-legend-item").length, 2, "Has 2 legend items");
    assert.equal(this.$("svg g").length, 75, "svg g elements");
  });

});


