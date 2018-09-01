import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      ['data1', 30, 20, 50, 40, 60, 50],
      ['data2', 200, 130, 90, 240, 130, 220],
      ['data3', 130, 100, 140, 200, 150, 50],
      ['data4', 300, 200, 160, 400, 250, 250],
      ['data5', 200, 130, 90, 240, 130, 220],
      ['data6', 130, 120, 150, 140, 160, 150],
      ['data7', 90, 70, 20, 50, 60, 120],
    ]
  }
});
