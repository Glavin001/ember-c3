import classic from 'ember-classic-decorator';
import Controller from "@ember/controller";
import d3 from "d3";

@classic
export default class D3Controller extends Controller {
  demoD3() {
    d3.select("h4").style("color", "red");
    d3.select("h4").style("font-size", "35px");

    const data = [80, 120, 60, 150, 200];
    const barHeight = 20;

    d3.select("svg")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", function(d) {
        return d;
      })
      .attr("height", barHeight - 1)
      .attr("fill", "gray")
      .attr("transform", function(d, i) {
        return "translate(0," + i * barHeight + ")";
      });
  }
}
