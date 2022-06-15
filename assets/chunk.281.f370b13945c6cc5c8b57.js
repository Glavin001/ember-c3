/*! For license information please see chunk.281.f370b13945c6cc5c8b57.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[281],{867:function(t,n,e){t.exports=function(){"use strict"
function t(t){var n=this
n.d3=window.d3?window.d3:e(164),n.api=t,n.config=n.getDefaultConfig(),n.data={},n.cache={},n.axes={}}function n(e){this.internal=new t(this),this.internal.loadConfig(e),this.internal.beforeInit(e),this.internal.init(),this.internal.afterInit(e),function t(n,e,r){Object.keys(n).forEach((function(i){e[i]=n[i].bind(r),Object.keys(n[i]).length>0&&t(n[i],e[i],r)}))}(n.prototype,this,this)}var r=function(t){return Math.ceil(t)+.5},i=function(t){return 10*Math.ceil(t/10)},o=function(t){return t[1]-t[0]},a=function(t,n,e){return l(t[n])?t[n]:e},u=function(t){var n=s(t),e=[t.pathSegList.getItem(0),t.pathSegList.getItem(1)]
return{x:e[0].x,y:Math.min(e[0].y,e[1].y),width:n.width,height:n.height}},s=function(t){try{return t.getBBox()}catch(t){return{x:0,y:0,width:0,height:0}}},c=function(t){return Array.isArray(t)},l=function(t){return void 0!==t},f=function(t){return null==t||p(t)&&0===t.length||"object"==typeof t&&0===Object.keys(t).length},h=function(t){return"function"==typeof t},d=function(t){return"number"==typeof t},p=function(t){return"string"==typeof t},g=function(t){return void 0===t},y=function(t){return t||0===t},_=function(t){return!f(t)},v=function(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;"):t},m=function(t){var n=function(t){void 0===t&&(t=window.navigator.userAgent)
var n=t.indexOf("MSIE ")
return n>0?parseInt(t.substring(n+5,t.indexOf(".",n)),10):(n=t.indexOf("Trident/"))>0&&(n=t.indexOf("rv:"),parseInt(t.substring(n+3,t.indexOf(".",n)),10))}()
return void 0===t?!!n:t===n}
function x(t,n){var e=this
e.component=t,e.params=n||{},e.d3=t.d3,e.scale=e.d3.scaleLinear(),e.range,e.orient="bottom",e.innerTickSize=6,e.outerTickSize=this.params.withOuterTick?6:0,e.tickPadding=3,e.tickValues=null,e.tickFormat,e.tickArguments,e.tickOffset=0,e.tickCulling=!0,e.tickCentered,e.tickTextCharSize,e.tickTextRotate=e.params.tickTextRotate,e.tickLength,e.axis=e.generateAxis()}x.prototype.axisX=function(t,n,e){t.attr("transform",(function(t){return"translate("+Math.ceil(n(t)+e)+", 0)"}))},x.prototype.axisY=function(t,n){t.attr("transform",(function(t){return"translate(0,"+Math.ceil(n(t))+")"}))},x.prototype.scaleExtent=function(t){var n=t[0],e=t[t.length-1]
return n<e?[n,e]:[e,n]},x.prototype.generateTicks=function(t){var n,e,r=[]
if(t.ticks)return t.ticks.apply(t,this.tickArguments)
for(e=t.domain(),n=Math.ceil(e[0]);n<e[1];n++)r.push(n)
return r.length>0&&r[0]>0&&r.unshift(r[0]-(r[1]-r[0])),r},x.prototype.copyScale=function(){var t,n=this,e=n.scale.copy()
return n.params.isCategory&&(t=n.scale.domain(),e.domain([t[0],t[1]-1])),e},x.prototype.textFormatted=function(t){var n=this.tickFormat?this.tickFormat(t):t
return void 0!==n?n:""},x.prototype.updateRange=function(){var t=this
return t.range=t.scale.rangeExtent?t.scale.rangeExtent():t.scaleExtent(t.scale.range()),t.range},x.prototype.updateTickTextCharSize=function(t){var n=this
if(n.tickTextCharSize)return n.tickTextCharSize
var e={h:11.5,w:5.5}
return t.select("text").text((function(t){return n.textFormatted(t)})).each((function(t){var r=s(this),i=n.textFormatted(t),o=r.height,a=i?r.width/i.length:void 0
o&&a&&(e.h=o,e.w=a)})).text(""),n.tickTextCharSize=e,e},x.prototype.isVertical=function(){return"left"===this.orient||"right"===this.orient},x.prototype.tspanData=function(t,n,e){var r=this,i=r.params.tickMultiline?r.splitTickText(t,e):[].concat(r.textFormatted(t))
return r.params.tickMultiline&&r.params.tickMultilineMax>0&&(i=r.ellipsify(i,r.params.tickMultilineMax)),i.map((function(t){return{index:n,splitted:t,length:i.length}}))},x.prototype.splitTickText=function(t,n){var e,r,i,o=this,a=o.textFormatted(t),u=o.params.tickWidth
return"[object Array]"===Object.prototype.toString.call(a)?a:((!u||u<=0)&&(u=o.isVertical()?95:o.params.isCategory?Math.ceil(n(1)-n(0))-12:110),function t(n,a){r=void 0
for(var s=1;s<a.length;s++)if(" "===a.charAt(s)&&(r=s),e=a.substr(0,s+1),i=o.tickTextCharSize.w*e.length,u<i)return t(n.concat(a.substr(0,r||s)),a.slice(r?r+1:s))
return n.concat(a)}([],a+""))},x.prototype.ellipsify=function(t,n){if(t.length<=n)return t
for(var e=t.slice(0,n),r=3,i=n-1;i>=0;i--){var o=e[i].length
if(e[i]=e[i].substr(0,o-r).padEnd(o,"."),(r-=o)<=0)break}return e},x.prototype.updateTickLength=function(){var t=this
t.tickLength=Math.max(t.innerTickSize,0)+t.tickPadding},x.prototype.lineY2=function(t){var n=this,e=n.scale(t)+(n.tickCentered?0:n.tickOffset)
return n.range[0]<e&&e<n.range[1]?n.innerTickSize:0},x.prototype.textY=function(){var t=this.tickTextRotate
return t?11.5-t/15*2.5*(t>0?1:-1):this.tickLength},x.prototype.textTransform=function(){var t=this.tickTextRotate
return t?"rotate("+t+")":""},x.prototype.textTextAnchor=function(){var t=this.tickTextRotate
return t?t>0?"start":"end":"middle"},x.prototype.tspanDx=function(){var t=this.tickTextRotate
return t?8*Math.sin(Math.PI*(t/180)):0},x.prototype.tspanDy=function(t,n){var e=this,r=e.tickTextCharSize.h
return 0===n&&(r=e.isVertical()?-((t.length-1)*(e.tickTextCharSize.h/2)-3):".71em"),r},x.prototype.generateAxis=function(){var t=this,n=t.d3,e=t.params
function r(i,o){var a
return i.each((function(){var i,u,s,c=r.g=n.select(this),l=this.__chart__||t.scale,f=this.__chart__=t.copyScale(),h=t.tickValues?t.tickValues:t.generateTicks(f),d=c.selectAll(".tick").data(h,f),p=d.enter().insert("g",".domain").attr("class","tick").style("opacity",1e-6),g=d.exit().remove(),y=d.merge(p)
e.isCategory?(t.tickOffset=Math.ceil((f(1)-f(0))/2),u=t.tickCentered?0:t.tickOffset,s=t.tickCentered?t.tickOffset:0):t.tickOffset=u=0,t.updateRange(),t.updateTickLength(),t.updateTickTextCharSize(c.select(".tick"))
var _=y.select("line").merge(p.append("line")),v=y.select("text").merge(p.append("text")),m=y.selectAll("text").selectAll("tspan").data((function(n,e){return t.tspanData(n,e,f)})),x=m.enter().append("tspan").merge(m).text((function(t){return t.splitted}))
m.exit().remove()
var b=c.selectAll(".domain").data([0]),w=b.enter().append("path").merge(b).attr("class","domain")
switch(t.orient){case"bottom":i=t.axisX,_.attr("x1",u).attr("x2",u).attr("y2",(function(n,e){return t.lineY2(n,e)})),v.attr("x",0).attr("y",(function(n,e){return t.textY(n,e)})).attr("transform",(function(n,e){return t.textTransform(n,e)})).style("text-anchor",(function(n,e){return t.textTextAnchor(n,e)})),x.attr("x",0).attr("dy",(function(n,e){return t.tspanDy(n,e)})).attr("dx",(function(n,e){return t.tspanDx(n,e)})),w.attr("d","M"+t.range[0]+","+t.outerTickSize+"V0H"+t.range[1]+"V"+t.outerTickSize)
break
case"top":i=t.axisX,_.attr("x1",u).attr("x2",u).attr("y2",(function(n,e){return-1*t.lineY2(n,e)})),v.attr("x",0).attr("y",(function(n,r){return-1*t.textY(n,r)-(e.isCategory?2:t.tickLength-2)})).attr("transform",(function(n,e){return t.textTransform(n,e)})).style("text-anchor",(function(n,e){return t.textTextAnchor(n,e)})),x.attr("x",0).attr("dy",(function(n,e){return t.tspanDy(n,e)})).attr("dx",(function(n,e){return t.tspanDx(n,e)})),w.attr("d","M"+t.range[0]+","+-t.outerTickSize+"V0H"+t.range[1]+"V"+-t.outerTickSize)
break
case"left":i=t.axisY,_.attr("x2",-t.innerTickSize).attr("y1",s).attr("y2",s),v.attr("x",-t.tickLength).attr("y",t.tickOffset).style("text-anchor","end"),x.attr("x",-t.tickLength).attr("dy",(function(n,e){return t.tspanDy(n,e)})),w.attr("d","M"+-t.outerTickSize+","+t.range[0]+"H0V"+t.range[1]+"H"+-t.outerTickSize)
break
case"right":i=t.axisY,_.attr("x2",t.innerTickSize).attr("y1",s).attr("y2",s),v.attr("x",t.tickLength).attr("y",t.tickOffset).style("text-anchor","start"),x.attr("x",t.tickLength).attr("dy",(function(n,e){return t.tspanDy(n,e)})),w.attr("d","M"+t.outerTickSize+","+t.range[0]+"H0V"+t.range[1]+"H"+t.outerTickSize)}if(f.rangeBand){var S=f,A=S.rangeBand()/2
l=f=function(t){return S(t)+A}}else l.rangeBand?l=f:g.call(i,f,t.tickOffset)
p.call(i,l,t.tickOffset),a=(o?y.transition(o):y).style("opacity",1).call(i,f,t.tickOffset)})),a}return r.scale=function(n){return arguments.length?(t.scale=n,r):t.scale},r.orient=function(n){return arguments.length?(t.orient=n in{top:1,right:1,bottom:1,left:1}?n+"":"bottom",r):t.orient},r.tickFormat=function(n){return arguments.length?(t.tickFormat=n,r):t.tickFormat},r.tickCentered=function(n){return arguments.length?(t.tickCentered=n,r):t.tickCentered},r.tickOffset=function(){return t.tickOffset},r.tickInterval=function(){var n
return(n=e.isCategory?2*t.tickOffset:(r.g.select("path.domain").node().getTotalLength()-2*t.outerTickSize)/r.g.selectAll("line").size())==1/0?0:n},r.ticks=function(){return arguments.length?(t.tickArguments=arguments,r):t.tickArguments},r.tickCulling=function(n){return arguments.length?(t.tickCulling=n,r):t.tickCulling},r.tickValues=function(n){if("function"==typeof n)t.tickValues=function(){return n(t.scale.domain())}
else{if(!arguments.length)return t.tickValues
t.tickValues=n}return r},r}
var b={target:"c3-target",chart:"c3-chart",chartLine:"c3-chart-line",chartLines:"c3-chart-lines",chartBar:"c3-chart-bar",chartBars:"c3-chart-bars",chartText:"c3-chart-text",chartTexts:"c3-chart-texts",chartArc:"c3-chart-arc",chartArcs:"c3-chart-arcs",chartArcsTitle:"c3-chart-arcs-title",chartArcsBackground:"c3-chart-arcs-background",chartArcsGaugeUnit:"c3-chart-arcs-gauge-unit",chartArcsGaugeMax:"c3-chart-arcs-gauge-max",chartArcsGaugeMin:"c3-chart-arcs-gauge-min",selectedCircle:"c3-selected-circle",selectedCircles:"c3-selected-circles",eventRect:"c3-event-rect",eventRects:"c3-event-rects",eventRectsSingle:"c3-event-rects-single",eventRectsMultiple:"c3-event-rects-multiple",zoomRect:"c3-zoom-rect",brush:"c3-brush",dragZoom:"c3-drag-zoom",focused:"c3-focused",defocused:"c3-defocused",region:"c3-region",regions:"c3-regions",title:"c3-title",tooltipContainer:"c3-tooltip-container",tooltip:"c3-tooltip",tooltipName:"c3-tooltip-name",shape:"c3-shape",shapes:"c3-shapes",line:"c3-line",lines:"c3-lines",bar:"c3-bar",bars:"c3-bars",circle:"c3-circle",circles:"c3-circles",arc:"c3-arc",arcLabelLine:"c3-arc-label-line",arcs:"c3-arcs",area:"c3-area",areas:"c3-areas",empty:"c3-empty",text:"c3-text",texts:"c3-texts",gaugeValue:"c3-gauge-value",grid:"c3-grid",gridLines:"c3-grid-lines",xgrid:"c3-xgrid",xgrids:"c3-xgrids",xgridLine:"c3-xgrid-line",xgridLines:"c3-xgrid-lines",xgridFocus:"c3-xgrid-focus",ygrid:"c3-ygrid",ygrids:"c3-ygrids",ygridLine:"c3-ygrid-line",ygridLines:"c3-ygrid-lines",colorScale:"c3-colorscale",stanfordElements:"c3-stanford-elements",stanfordLine:"c3-stanford-line",stanfordLines:"c3-stanford-lines",stanfordRegion:"c3-stanford-region",stanfordRegions:"c3-stanford-regions",stanfordText:"c3-stanford-text",stanfordTexts:"c3-stanford-texts",axis:"c3-axis",axisX:"c3-axis-x",axisXLabel:"c3-axis-x-label",axisY:"c3-axis-y",axisYLabel:"c3-axis-y-label",axisY2:"c3-axis-y2",axisY2Label:"c3-axis-y2-label",legendBackground:"c3-legend-background",legendItem:"c3-legend-item",legendItemEvent:"c3-legend-item-event",legendItemTile:"c3-legend-item-tile",legendItemHidden:"c3-legend-item-hidden",legendItemFocused:"c3-legend-item-focused",dragarea:"c3-dragarea",EXPANDED:"_expanded_",SELECTED:"_selected_",INCLUDED:"_included_"},w=function(t){this.owner=t,this.d3=t.d3,this.internal=x},S=w
S.prototype.init=function(){var t=this.owner,n=t.config,e=t.main
t.axes.x=e.append("g").attr("class",b.axis+" "+b.axisX).attr("clip-path",n.axis_x_inner?"":t.clipPathForXAxis).attr("transform",t.getTranslate("x")).style("visibility",n.axis_x_show?"visible":"hidden"),t.axes.x.append("text").attr("class",b.axisXLabel).attr("transform",n.axis_rotated?"rotate(-90)":"").style("text-anchor",this.textAnchorForXAxisLabel.bind(this)),t.axes.y=e.append("g").attr("class",b.axis+" "+b.axisY).attr("clip-path",n.axis_y_inner?"":t.clipPathForYAxis).attr("transform",t.getTranslate("y")).style("visibility",n.axis_y_show?"visible":"hidden"),t.axes.y.append("text").attr("class",b.axisYLabel).attr("transform",n.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForYAxisLabel.bind(this)),t.axes.y2=e.append("g").attr("class",b.axis+" "+b.axisY2).attr("transform",t.getTranslate("y2")).style("visibility",n.axis_y2_show?"visible":"hidden"),t.axes.y2.append("text").attr("class",b.axisY2Label).attr("transform",n.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForY2AxisLabel.bind(this))},S.prototype.getXAxis=function(t,n,e,r,i,o,a){var u=this.owner,s=u.config,c={isCategory:u.isCategorized(),withOuterTick:i,tickMultiline:s.axis_x_tick_multiline,tickMultilineMax:s.axis_x_tick_multiline?Number(s.axis_x_tick_multilineMax):0,tickWidth:s.axis_x_tick_width,tickTextRotate:a?0:s.axis_x_tick_rotate,withoutTransition:o},l=new this.internal(this,c).axis.scale(t).orient(n)
return u.isTimeSeries()&&r&&"function"!=typeof r&&(r=r.map((function(t){return u.parseDate(t)}))),l.tickFormat(e).tickValues(r),u.isCategorized()&&(l.tickCentered(s.axis_x_tick_centered),f(s.axis_x_tick_culling)&&(s.axis_x_tick_culling=!1)),l},S.prototype.updateXAxisTickValues=function(t,n){var e,r=this.owner,i=r.config
return(i.axis_x_tick_fit||i.axis_x_tick_count)&&(e=this.generateTickValues(r.mapTargetsToUniqueXs(t),i.axis_x_tick_count,r.isTimeSeries())),n?n.tickValues(e):(r.xAxis.tickValues(e),r.subXAxis.tickValues(e)),e},S.prototype.getYAxis=function(t,n,e,r,i,o,a){var u=this.owner,s=u.config,c=s["axis_"+t+"_tick_format"]
!c&&u.isAxisNormalized(t)&&(c=function(t){return t+"%"})
var l=new this.internal(this,{withOuterTick:i,withoutTransition:o,tickTextRotate:a?0:s.axis_y_tick_rotate}).axis.scale(n).orient(e)
return c&&l.tickFormat(c),u.isTimeSeriesY()?l.ticks(s.axis_y_tick_time_type,s.axis_y_tick_time_interval):l.tickValues(r),l},S.prototype.getId=function(t){var n=this.owner.config
return t in n.data_axes?n.data_axes[t]:"y"},S.prototype.getXAxisTickFormat=function(){var t=this.owner,n=t.config,e=t.isTimeSeries()?t.defaultAxisTimeFormat:t.isCategorized()?t.categoryName:function(t){return t}
return n.axis_x_tick_format&&(h(n.axis_x_tick_format)?e=n.axis_x_tick_format:t.isTimeSeries()&&(e=function(e){return e?t.axisTimeFormat(n.axis_x_tick_format)(e):""})),h(e)?function(n){return e.call(t,n)}:e},S.prototype.getTickValues=function(t,n){return t||(n?n.tickValues():void 0)},S.prototype.getXAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_x_tick_values,this.owner.xAxis)},S.prototype.getYAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y_tick_values,this.owner.yAxis)},S.prototype.getY2AxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y2_tick_values,this.owner.y2Axis)},S.prototype.getLabelOptionByAxisId=function(t){var n,e=this.owner.config
return"y"===t?n=e.axis_y_label:"y2"===t?n=e.axis_y2_label:"x"===t&&(n=e.axis_x_label),n},S.prototype.getLabelText=function(t){var n=this.getLabelOptionByAxisId(t)
return p(n)?n:n?n.text:null},S.prototype.setLabelText=function(t,n){var e=this.owner.config,r=this.getLabelOptionByAxisId(t)
p(r)?"y"===t?e.axis_y_label=n:"y2"===t?e.axis_y2_label=n:"x"===t&&(e.axis_x_label=n):r&&(r.text=n)},S.prototype.getLabelPosition=function(t,n){var e=this.getLabelOptionByAxisId(t),r=e&&"object"==typeof e&&e.position?e.position:n
return{isInner:r.indexOf("inner")>=0,isOuter:r.indexOf("outer")>=0,isLeft:r.indexOf("left")>=0,isCenter:r.indexOf("center")>=0,isRight:r.indexOf("right")>=0,isTop:r.indexOf("top")>=0,isMiddle:r.indexOf("middle")>=0,isBottom:r.indexOf("bottom")>=0}},S.prototype.getXAxisLabelPosition=function(){return this.getLabelPosition("x",this.owner.config.axis_rotated?"inner-top":"inner-right")},S.prototype.getYAxisLabelPosition=function(){return this.getLabelPosition("y",this.owner.config.axis_rotated?"inner-right":"inner-top")},S.prototype.getY2AxisLabelPosition=function(){return this.getLabelPosition("y2",this.owner.config.axis_rotated?"inner-right":"inner-top")},S.prototype.getLabelPositionById=function(t){return"y2"===t?this.getY2AxisLabelPosition():"y"===t?this.getYAxisLabelPosition():this.getXAxisLabelPosition()},S.prototype.textForXAxisLabel=function(){return this.getLabelText("x")},S.prototype.textForYAxisLabel=function(){return this.getLabelText("y")},S.prototype.textForY2AxisLabel=function(){return this.getLabelText("y2")},S.prototype.xForAxisLabel=function(t,n){var e=this.owner
return t?n.isLeft?0:n.isCenter?e.width/2:e.width:n.isBottom?-e.height:n.isMiddle?-e.height/2:0},S.prototype.dxForAxisLabel=function(t,n){return t?n.isLeft?"0.5em":n.isRight?"-0.5em":"0":n.isTop?"-0.5em":n.isBottom?"0.5em":"0"},S.prototype.textAnchorForAxisLabel=function(t,n){return t?n.isLeft?"start":n.isCenter?"middle":"end":n.isBottom?"start":n.isMiddle?"middle":"end"},S.prototype.xForXAxisLabel=function(){return this.xForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},S.prototype.xForYAxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},S.prototype.xForY2AxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},S.prototype.dxForXAxisLabel=function(){return this.dxForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},S.prototype.dxForYAxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},S.prototype.dxForY2AxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},S.prototype.dyForXAxisLabel=function(){var t=this.owner,n=t.config,e=this.getXAxisLabelPosition()
return n.axis_rotated?e.isInner?"1.2em":-25-(t.config.axis_x_inner?0:this.getMaxTickWidth("x")):e.isInner?"-0.5em":t.getHorizontalAxisHeight("x")-10},S.prototype.dyForYAxisLabel=function(){var t=this.owner,n=this.getYAxisLabelPosition()
return t.config.axis_rotated?n.isInner?"-0.5em":"3em":n.isInner?"1.2em":-10-(t.config.axis_y_inner?0:this.getMaxTickWidth("y")+10)},S.prototype.dyForY2AxisLabel=function(){var t=this.owner,n=this.getY2AxisLabelPosition()
return t.config.axis_rotated?n.isInner?"1.2em":"-2.2em":n.isInner?"-0.5em":15+(t.config.axis_y2_inner?0:this.getMaxTickWidth("y2")+15)},S.prototype.textAnchorForXAxisLabel=function(){var t=this.owner
return this.textAnchorForAxisLabel(!t.config.axis_rotated,this.getXAxisLabelPosition())},S.prototype.textAnchorForYAxisLabel=function(){var t=this.owner
return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getYAxisLabelPosition())},S.prototype.textAnchorForY2AxisLabel=function(){var t=this.owner
return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getY2AxisLabelPosition())},S.prototype.getMaxTickWidth=function(t,n){var e,r,i,o,a=this.owner,u=0
return n&&a.currentMaxTickWidths[t]||(a.svg&&(e=a.filterTargetsToShow(a.data.targets),"y"===t?(r=a.y.copy().domain(a.getYDomain(e,"y")),i=this.getYAxis(t,r,a.yOrient,a.yAxisTickValues,!1,!0,!0)):"y2"===t?(r=a.y2.copy().domain(a.getYDomain(e,"y2")),i=this.getYAxis(t,r,a.y2Orient,a.y2AxisTickValues,!1,!0,!0)):(r=a.x.copy().domain(a.getXDomain(e)),i=this.getXAxis(r,a.xOrient,a.xAxisTickFormat,a.xAxisTickValues,!1,!0,!0),this.updateXAxisTickValues(e,i)),(o=a.d3.select("body").append("div").classed("c3",!0)).append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0).append("g").call(i).each((function(){a.d3.select(this).selectAll("text").each((function(){var t=s(this)
u<t.width&&(u=t.width)})),o.remove()}))),a.currentMaxTickWidths[t]=u<=0?a.currentMaxTickWidths[t]:u),a.currentMaxTickWidths[t]},S.prototype.updateLabels=function(t){var n=this.owner,e=n.main.select("."+b.axisX+" ."+b.axisXLabel),r=n.main.select("."+b.axisY+" ."+b.axisYLabel),i=n.main.select("."+b.axisY2+" ."+b.axisY2Label);(t?e.transition():e).attr("x",this.xForXAxisLabel.bind(this)).attr("dx",this.dxForXAxisLabel.bind(this)).attr("dy",this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)),(t?r.transition():r).attr("x",this.xForYAxisLabel.bind(this)).attr("dx",this.dxForYAxisLabel.bind(this)).attr("dy",this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)),(t?i.transition():i).attr("x",this.xForY2AxisLabel.bind(this)).attr("dx",this.dxForY2AxisLabel.bind(this)).attr("dy",this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))},S.prototype.getPadding=function(t,n,e,r){var i="number"==typeof t?t:t[n]
return y(i)?"ratio"===t.unit?t[n]*r:this.convertPixelsToAxisPadding(i,r):e},S.prototype.convertPixelsToAxisPadding=function(t,n){var e=this.owner
return n*(t/(e.config.axis_rotated?e.width:e.height))},S.prototype.generateTickValues=function(t,n,e){var r,i,o,a,u,s,c,l=t
if(n)if(1===(r=h(n)?n():n))l=[t[0]]
else if(2===r)l=[t[0],t[t.length-1]]
else if(r>2){for(a=r-2,i=t[0],u=((o=t[t.length-1])-i)/(a+1),l=[i],s=0;s<a;s++)c=+i+u*(s+1),l.push(e?new Date(c):c)
l.push(o)}return e||(l=l.sort((function(t,n){return t-n}))),l},S.prototype.generateTransitions=function(t){var n=this.owner.axes
return{axisX:t?n.x.transition().duration(t):n.x,axisY:t?n.y.transition().duration(t):n.y,axisY2:t?n.y2.transition().duration(t):n.y2,axisSubX:t?n.subx.transition().duration(t):n.subx}},S.prototype.redraw=function(t,n){var e=this.owner,r=t?e.d3.transition().duration(t):null
e.axes.x.style("opacity",n?0:1).call(e.xAxis,r),e.axes.y.style("opacity",n?0:1).call(e.yAxis,r),e.axes.y2.style("opacity",n?0:1).call(e.y2Axis,r),e.axes.subx.style("opacity",n?0:1).call(e.subXAxis,r)}
var A={version:"0.7.20",chart:{fn:n.prototype,internal:{fn:t.prototype,axis:{fn:w.prototype,internal:{fn:x.prototype}}}},generate:function(t){return new n(t)}}
function M(t,n,e){var r=[.01,10]
function i(t){return e(n(t))}return n||(n=t.scaleLinear()).range(r),e||((e=t.scaleLog()).domain(r),e.nice()),i.domain=function(t){return arguments.length?(n.domain(t),i):n.domain()},i.range=function(t){return arguments.length?(e.range(t),i):e.range()},i.ticks=function(t){return function(t,n,e){var r,i,o,a
if(arguments.length<3)e=10
else if(0===e)return[]
a=(n-t)/(i=e-1),o=t,(r=new Array(e))[0]=Math.pow(10,o)
for(var u=1;u<i;u++)o+=a,r[u]=Math.pow(10,o)
return r[i]=Math.pow(10,n),r}(-2,1,t||10).map((function(t){return n.invert(t)}))},i.copy=function(){return M(t,n.copy(),e.copy())},i}function T(t){return t/Math.pow(10,Math.ceil(Math.log(t)/Math.LN10-1e-12))==1}t.prototype.beforeInit=function(){},t.prototype.afterInit=function(){},t.prototype.init=function(){var t=this,n=t.config
if(t.initParams(),n.data_url)t.convertUrlToData(n.data_url,n.data_mimeType,n.data_headers,n.data_keys,t.initWithData)
else if(n.data_json)t.initWithData(t.convertJsonToData(n.data_json,n.data_keys))
else if(n.data_rows)t.initWithData(t.convertRowsToData(n.data_rows))
else{if(!n.data_columns)throw Error("url or json or rows or columns is required.")
t.initWithData(t.convertColumnsToData(n.data_columns))}},t.prototype.initParams=function(){var t=this,n=t.d3,e=t.config
t.clipId="c3-"+(new Date).valueOf()+"-clip",t.clipIdForXAxis=t.clipId+"-xaxis",t.clipIdForYAxis=t.clipId+"-yaxis",t.clipIdForGrid=t.clipId+"-grid",t.clipIdForSubchart=t.clipId+"-subchart",t.clipPath=t.getClipPath(t.clipId),t.clipPathForXAxis=t.getClipPath(t.clipIdForXAxis),t.clipPathForYAxis=t.getClipPath(t.clipIdForYAxis),t.clipPathForGrid=t.getClipPath(t.clipIdForGrid),t.clipPathForSubchart=t.getClipPath(t.clipIdForSubchart),t.dragStart=null,t.dragging=!1,t.flowing=!1,t.cancelClick=!1,t.mouseover=void 0,t.transiting=!1,t.color=t.generateColor(),t.levelColor=t.generateLevelColor(),t.dataTimeParse=(e.data_xLocaltime?n.timeParse:n.utcParse)(t.config.data_xFormat),t.axisTimeFormat=e.axis_x_localtime?n.timeFormat:n.utcFormat,t.defaultAxisTimeFormat=function(t){return t.getMilliseconds()?n.timeFormat(".%L")(t):t.getSeconds()?n.timeFormat(":%S")(t):t.getMinutes()?n.timeFormat("%I:%M")(t):t.getHours()?n.timeFormat("%I %p")(t):t.getDay()&&1!==t.getDate()||1!==t.getDate()||t.getMonth()?n.timeFormat("%-m/%-d")(t):n.timeFormat("%Y/%-m/%-d")(t)},t.hiddenTargetIds=[],t.hiddenLegendIds=[],t.focusedTargetIds=[],t.defocusedTargetIds=[],t.xOrient=e.axis_rotated?e.axis_x_inner?"right":"left":e.axis_x_inner?"top":"bottom",t.yOrient=e.axis_rotated?e.axis_y_inner?"top":"bottom":e.axis_y_inner?"right":"left",t.y2Orient=e.axis_rotated?e.axis_y2_inner?"bottom":"top":e.axis_y2_inner?"left":"right",t.subXOrient=e.axis_rotated?"left":"bottom",t.isLegendRight="right"===e.legend_position,t.isLegendInset="inset"===e.legend_position,t.isLegendTop="top-left"===e.legend_inset_anchor||"top-right"===e.legend_inset_anchor,t.isLegendLeft="top-left"===e.legend_inset_anchor||"bottom-left"===e.legend_inset_anchor,t.legendStep=0,t.legendItemWidth=0,t.legendItemHeight=0,t.currentMaxTickWidths={x:0,y:0,y2:0},t.rotated_padding_left=30,t.rotated_padding_right=e.axis_rotated&&!e.axis_x_show?0:30,t.rotated_padding_top=5,t.withoutFadeIn={},t.intervalForObserveInserted=void 0,t.axes.subx=n.selectAll([])},t.prototype.initChartElements=function(){this.initBar&&this.initBar(),this.initLine&&this.initLine(),this.initArc&&this.initArc(),this.initGauge&&this.initGauge(),this.initText&&this.initText()},t.prototype.initWithData=function(t){var n,e,r=this,i=r.d3,o=r.config,a=!0
r.axis=new w(r),o.bindto?"function"==typeof o.bindto.node?r.selectChart=o.bindto:r.selectChart=i.select(o.bindto):r.selectChart=i.selectAll([]),r.selectChart.empty()&&(r.selectChart=i.select(document.createElement("div")).style("opacity",0),r.observeInserted(r.selectChart),a=!1),r.selectChart.html("").classed("c3",!0),r.data.xs={},r.data.targets=r.convertDataToTargets(t),o.data_filter&&(r.data.targets=r.data.targets.filter(o.data_filter)),o.data_hide&&r.addHiddenTargetIds(!0===o.data_hide?r.mapToIds(r.data.targets):o.data_hide),o.legend_hide&&r.addHiddenLegendIds(!0===o.legend_hide?r.mapToIds(r.data.targets):o.legend_hide),r.isStanfordGraphType()&&r.initStanfordData(),r.updateSizes(),r.updateScales(),r.x.domain(i.extent(r.getXDomain(r.data.targets))),r.y.domain(r.getYDomain(r.data.targets,"y")),r.y2.domain(r.getYDomain(r.data.targets,"y2")),r.subX.domain(r.x.domain()),r.subY.domain(r.y.domain()),r.subY2.domain(r.y2.domain()),r.orgXDomain=r.x.domain(),r.svg=r.selectChart.append("svg").style("overflow","hidden").on("mouseenter",(function(){return o.onmouseover.call(r)})).on("mouseleave",(function(){return o.onmouseout.call(r)})),r.config.svg_classname&&r.svg.attr("class",r.config.svg_classname),n=r.svg.append("defs"),r.clipChart=r.appendClip(n,r.clipId),r.clipXAxis=r.appendClip(n,r.clipIdForXAxis),r.clipYAxis=r.appendClip(n,r.clipIdForYAxis),r.clipGrid=r.appendClip(n,r.clipIdForGrid),r.clipSubchart=r.appendClip(n,r.clipIdForSubchart),r.updateSvgSize(),e=r.main=r.svg.append("g").attr("transform",r.getTranslate("main")),r.initPie&&r.initPie(),r.initDragZoom&&r.initDragZoom(),o.subchart_show&&r.initSubchart&&r.initSubchart(),r.initTooltip&&r.initTooltip(),r.initLegend&&r.initLegend(),r.initTitle&&r.initTitle(),r.initZoom&&r.initZoom(),r.isStanfordGraphType()&&r.drawColorScale(),o.subchart_show&&r.initSubchartBrush&&r.initSubchartBrush(),e.append("text").attr("class",b.text+" "+b.empty).attr("text-anchor","middle").attr("dominant-baseline","middle"),r.initRegion(),r.initGrid(),e.append("g").attr("clip-path",r.clipPath).attr("class",b.chart),o.grid_lines_front&&r.initGridLines(),r.initStanfordElements(),r.initEventRect(),r.initChartElements(),r.axis.init(),r.updateTargets(r.data.targets),o.axis_x_selection&&r.brush.selectionAsValue(r.getDefaultSelection()),a&&(r.updateDimension(),r.config.oninit.call(r),r.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1})),r.bindResize(),r.bindWindowFocus(),r.api.element=r.selectChart.node()},t.prototype.smoothLines=function(t,n){var e=this
"grid"===n&&t.each((function(){var t=e.d3.select(this),n=t.attr("x1"),r=t.attr("x2"),i=t.attr("y1"),o=t.attr("y2")
t.attr({x1:Math.ceil(n),x2:Math.ceil(r),y1:Math.ceil(i),y2:Math.ceil(o)})}))},t.prototype.updateSizes=function(){var t=this,n=t.config,e=t.legend?t.getLegendHeight():0,r=t.legend?t.getLegendWidth():0,i=t.isLegendRight||t.isLegendInset?0:e,o=t.hasArcType(),a=n.axis_rotated||o?0:t.getHorizontalAxisHeight("x"),u=n.axis_rotated||o?0:t.getHorizontalAxisHeight("x",!0),s=n.subchart_show&&!o?n.subchart_size_height+u:0
t.currentWidth=t.getCurrentWidth(),t.currentHeight=t.getCurrentHeight(),t.margin=n.axis_rotated?{top:t.getHorizontalAxisHeight("y2")+t.getCurrentPaddingTop(),right:o?0:t.getCurrentPaddingRight(),bottom:t.getHorizontalAxisHeight("y")+i+t.getCurrentPaddingBottom(),left:s+(o?0:t.getCurrentPaddingLeft())}:{top:4+t.getCurrentPaddingTop(),right:o?0:t.getCurrentPaddingRight(),bottom:a+s+i+t.getCurrentPaddingBottom(),left:o?0:t.getCurrentPaddingLeft()},t.margin2=n.axis_rotated?{top:t.margin.top,right:NaN,bottom:20+i,left:t.rotated_padding_left}:{top:t.currentHeight-s-i,right:NaN,bottom:u+i,left:t.margin.left},t.margin3={top:0,right:NaN,bottom:0,left:0},t.updateSizeForLegend&&t.updateSizeForLegend(e,r),t.width=t.currentWidth-t.margin.left-t.margin.right,t.height=t.currentHeight-t.margin.top-t.margin.bottom,t.width<0&&(t.width=0),t.height<0&&(t.height=0),t.width2=n.axis_rotated?t.margin.left-t.rotated_padding_left-t.rotated_padding_right:t.width,t.height2=n.axis_rotated?t.height:t.currentHeight-t.margin2.top-t.margin2.bottom,t.width2<0&&(t.width2=0),t.height2<0&&(t.height2=0),t.arcWidth=t.width-(t.isLegendRight?r+10:0),t.arcHeight=t.height-(t.isLegendRight?0:10),t.hasType("gauge")&&!n.gauge_fullCircle&&(t.arcHeight+=t.height-t.getGaugeLabelHeight()),t.updateRadius&&t.updateRadius(),t.isLegendRight&&o&&(t.margin3.left=t.arcWidth/2+1.1*t.radiusExpanded)},t.prototype.updateTargets=function(t){var n=this,e=n.config
n.updateTargetsForText(t),n.updateTargetsForBar(t),n.updateTargetsForLine(t),n.hasArcType()&&n.updateTargetsForArc&&n.updateTargetsForArc(t),e.subchart_show&&n.updateTargetsForSubchart&&n.updateTargetsForSubchart(t),n.showTargets()},t.prototype.showTargets=function(){var t=this
t.svg.selectAll("."+b.target).filter((function(n){return t.isTargetToShow(n.id)})).transition().duration(t.config.transition_duration).style("opacity",1)},t.prototype.redraw=function(t,n){var e,r,i,o,u,s,c,l,f,h,d,p,g,y,_,v,m,x,w,S,A,M,T,C,P,E,k,N,L,R,V,O=this,G=O.main,D=O.d3,I=O.config,z=O.getShapeIndices(O.isAreaType),F=O.getShapeIndices(O.isBarType),Y=O.getShapeIndices(O.isLineType),U=O.hasArcType(),B=O.filterTargetsToShow(O.data.targets),H=O.xv.bind(O)
if(e=a(t=t||{},"withY",!0),r=a(t,"withSubchart",!0),i=a(t,"withTransition",!0),s=a(t,"withTransform",!1),c=a(t,"withUpdateXDomain",!1),l=a(t,"withUpdateOrgXDomain",!1),f=a(t,"withTrimXDomain",!0),g=a(t,"withUpdateXAxis",c),h=a(t,"withLegend",!1),d=a(t,"withEventRect",!0),p=a(t,"withDimension",!0),o=a(t,"withTransitionForExit",i),u=a(t,"withTransitionForAxis",i),w=i?I.transition_duration:0,S=o?w:0,A=u?w:0,n=n||O.axis.generateTransitions(A),h&&I.legend_show?O.updateLegend(O.mapToIds(O.data.targets),t,n):p&&O.updateDimension(!0),O.isCategorized()&&0===B.length&&O.x.domain([0,O.axes.x.selectAll(".tick").size()]),B.length?(O.updateXDomain(B,c,l,f),I.axis_x_tick_values||(E=O.axis.updateXAxisTickValues(B))):(O.xAxis.tickValues([]),O.subXAxis.tickValues([])),I.zoom_rescale&&!t.flow&&(L=O.x.orgDomain()),O.y.domain(O.getYDomain(B,"y",L)),O.y2.domain(O.getYDomain(B,"y2",L)),!I.axis_y_tick_values&&I.axis_y_tick_count&&O.yAxis.tickValues(O.axis.generateTickValues(O.y.domain(),I.axis_y_tick_count)),!I.axis_y2_tick_values&&I.axis_y2_tick_count&&O.y2Axis.tickValues(O.axis.generateTickValues(O.y2.domain(),I.axis_y2_tick_count)),O.axis.redraw(A,U),O.axis.updateLabels(i),(c||g)&&B.length)if(I.axis_x_tick_culling&&E){for(k=1;k<E.length;k++)if(E.length/k<I.axis_x_tick_culling_max){N=k
break}O.svg.selectAll("."+b.axisX+" .tick text").each((function(t){var n=E.indexOf(t)
n>=0&&D.select(this).style("display",n%N?"none":"block")}))}else O.svg.selectAll("."+b.axisX+" .tick text").style("display","block")
y=O.generateDrawArea?O.generateDrawArea(z,!1):void 0,_=O.generateDrawBar?O.generateDrawBar(F):void 0,v=O.generateDrawLine?O.generateDrawLine(Y,!1):void 0,m=O.generateXYForText(z,F,Y,!0),x=O.generateXYForText(z,F,Y,!1),O.updateCircleY(),R=(O.config.axis_rotated?O.circleY:O.circleX).bind(O),V=(O.config.axis_rotated?O.circleX:O.circleY).bind(O),e&&(O.subY.domain(O.getYDomain(B,"y")),O.subY2.domain(O.getYDomain(B,"y2"))),O.updateXgridFocus(),G.select("text."+b.text+"."+b.empty).attr("x",O.width/2).attr("y",O.height/2).text(I.data_empty_label_text).transition().style("opacity",B.length?0:1),d&&O.redrawEventRect(),O.updateGrid(w),O.updateStanfordElements(w),O.updateRegion(w),O.updateBar(S),O.updateLine(S),O.updateArea(S),O.updateCircle(R,V),O.hasDataLabel()&&O.updateText(m,x,S),O.redrawTitle&&O.redrawTitle(),O.redrawArc&&O.redrawArc(w,S,s),I.subchart_show&&O.redrawSubchart&&O.redrawSubchart(r,n,w,S,z,F,Y),O.isStanfordGraphType()&&O.drawColorScale(),G.selectAll("."+b.selectedCircles).filter(O.isBarType.bind(O)).selectAll("circle").remove(),t.flow&&(C=O.generateFlow({targets:B,flow:t.flow,duration:t.flow.duration,drawBar:_,drawLine:v,drawArea:y,cx:R,cy:V,xv:H,xForText:m,yForText:x})),w&&O.isTabVisible()?(P=D.transition().duration(w),M=[],[O.redrawBar(_,!0,P),O.redrawLine(v,!0,P),O.redrawArea(y,!0,P),O.redrawCircle(R,V,!0,P),O.redrawText(m,x,t.flow,!0,P),O.redrawRegion(!0,P),O.redrawGrid(!0,P)].forEach((function(t){t.forEach((function(t){M.push(t)}))})),T=O.generateWait(),M.forEach((function(t){T.add(t)})),T((function(){C&&C(),I.onrendered&&I.onrendered.call(O)}))):(O.redrawBar(_),O.redrawLine(v),O.redrawArea(y),O.redrawCircle(R,V),O.redrawText(m,x,t.flow),O.redrawRegion(),O.redrawGrid(),C&&C(),I.onrendered&&I.onrendered.call(O)),O.mapToIds(O.data.targets).forEach((function(t){O.withoutFadeIn[t]=!0}))},t.prototype.updateAndRedraw=function(t){var n,e=this,r=e.config;(t=t||{}).withTransition=a(t,"withTransition",!0),t.withTransform=a(t,"withTransform",!1),t.withLegend=a(t,"withLegend",!1),t.withUpdateXDomain=a(t,"withUpdateXDomain",!0),t.withUpdateOrgXDomain=a(t,"withUpdateOrgXDomain",!0),t.withTransitionForExit=!1,t.withTransitionForTransform=a(t,"withTransitionForTransform",t.withTransition),e.updateSizes(),t.withLegend&&r.legend_show||(n=e.axis.generateTransitions(t.withTransitionForAxis?r.transition_duration:0),e.updateScales(),e.updateSvgSize(),e.transformAll(t.withTransitionForTransform,n)),e.redraw(t,n)},t.prototype.redrawWithoutRescale=function(){this.redraw({withY:!1,withSubchart:!1,withEventRect:!1,withTransitionForAxis:!1})},t.prototype.isTimeSeries=function(){return"timeseries"===this.config.axis_x_type},t.prototype.isCategorized=function(){return this.config.axis_x_type.indexOf("categor")>=0},t.prototype.isCustomX=function(){var t=this.config
return!this.isTimeSeries()&&(t.data_x||_(t.data_xs))},t.prototype.isTimeSeriesY=function(){return"timeseries"===this.config.axis_y_type},t.prototype.getTranslate=function(t){var n,e,i=this,o=i.config
return"main"===t?(n=r(i.margin.left),e=r(i.margin.top)):"context"===t?(n=r(i.margin2.left),e=r(i.margin2.top)):"legend"===t?(n=i.margin3.left,e=i.margin3.top):"x"===t?(n=0,e=o.axis_rotated?0:i.height):"y"===t?(n=0,e=o.axis_rotated?i.height:0):"y2"===t?(n=o.axis_rotated?0:i.width,e=o.axis_rotated?1:0):"subx"===t?(n=0,e=o.axis_rotated?0:i.height2):"arc"===t&&(n=i.arcWidth/2,e=i.arcHeight/2-(i.hasType("gauge")?6:0)),"translate("+n+","+e+")"},t.prototype.initialOpacity=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?1:0},t.prototype.initialOpacityForCircle=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?this.opacityForCircle(t):0},t.prototype.opacityForCircle=function(t){var n=(h(this.config.point_show)?this.config.point_show(t):this.config.point_show)||this.isStanfordType(t)?1:0
return y(t.value)?this.isScatterType(t)?.5:n:0},t.prototype.opacityForText=function(){return this.hasDataLabel()?1:0},t.prototype.xx=function(t){return t?this.x(t.x):null},t.prototype.xvCustom=function(t,n){var e=this,r=n?t[n]:t.value
return e.isTimeSeries()?r=e.parseDate(t.value):e.isCategorized()&&"string"==typeof t.value&&(r=e.config.axis_x_categories.indexOf(t.value)),Math.ceil(e.x(r))},t.prototype.yvCustom=function(t,n){var e=t.axis&&"y2"===t.axis?this.y2:this.y,r=n?t[n]:t.value
return Math.ceil(e(r))},t.prototype.xv=function(t){var n=this,e=t.value
return n.isTimeSeries()?e=n.parseDate(t.value):n.isCategorized()&&"string"==typeof t.value&&(e=n.config.axis_x_categories.indexOf(t.value)),Math.ceil(n.x(e))},t.prototype.yv=function(t){var n=t.axis&&"y2"===t.axis?this.y2:this.y
return Math.ceil(n(t.value))},t.prototype.subxx=function(t){return t?this.subX(t.x):null},t.prototype.transformMain=function(t,n){var e,r,i,o=this
n&&n.axisX?e=n.axisX:(e=o.main.select("."+b.axisX),t&&(e=e.transition())),n&&n.axisY?r=n.axisY:(r=o.main.select("."+b.axisY),t&&(r=r.transition())),n&&n.axisY2?i=n.axisY2:(i=o.main.select("."+b.axisY2),t&&(i=i.transition())),(t?o.main.transition():o.main).attr("transform",o.getTranslate("main")),e.attr("transform",o.getTranslate("x")),r.attr("transform",o.getTranslate("y")),i.attr("transform",o.getTranslate("y2")),o.main.select("."+b.chartArcs).attr("transform",o.getTranslate("arc"))},t.prototype.transformAll=function(t,n){var e=this
e.transformMain(t,n),e.config.subchart_show&&e.transformContext(t,n),e.legend&&e.transformLegend(t)},t.prototype.updateSvgSize=function(){var t=this,n=t.svg.select("."+b.brush+" .overlay")
t.svg.attr("width",t.currentWidth).attr("height",t.currentHeight),t.svg.selectAll(["#"+t.clipId,"#"+t.clipIdForGrid]).select("rect").attr("width",t.width).attr("height",t.height),t.svg.select("#"+t.clipIdForXAxis).select("rect").attr("x",t.getXAxisClipX.bind(t)).attr("y",t.getXAxisClipY.bind(t)).attr("width",t.getXAxisClipWidth.bind(t)).attr("height",t.getXAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForYAxis).select("rect").attr("x",t.getYAxisClipX.bind(t)).attr("y",t.getYAxisClipY.bind(t)).attr("width",t.getYAxisClipWidth.bind(t)).attr("height",t.getYAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForSubchart).select("rect").attr("width",t.width).attr("height",n.size()&&n.attr("height")||0),t.selectChart.style("max-height",t.currentHeight+"px")},t.prototype.updateDimension=function(t){var n=this
t||(n.config.axis_rotated?(n.axes.x.call(n.xAxis),n.axes.subx.call(n.subXAxis)):(n.axes.y.call(n.yAxis),n.axes.y2.call(n.y2Axis))),n.updateSizes(),n.updateScales(),n.updateSvgSize(),n.transformAll(!1)},t.prototype.observeInserted=function(t){var n,e=this
"undefined"!=typeof MutationObserver?(n=new MutationObserver((function(r){r.forEach((function(r){"childList"===r.type&&r.previousSibling&&(n.disconnect(),e.intervalForObserveInserted=window.setInterval((function(){t.node().parentNode&&(window.clearInterval(e.intervalForObserveInserted),e.updateDimension(),e.brush&&e.brush.update(),e.config.oninit.call(e),e.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),t.transition().style("opacity",1))}),10))}))}))).observe(t.node(),{attributes:!0,childList:!0,characterData:!0}):window.console.error("MutationObserver not defined.")},t.prototype.bindResize=function(){var t=this,n=t.config
t.resizeFunction=t.generateResize(),t.resizeFunction.add((function(){n.onresize.call(t)})),n.resize_auto&&t.resizeFunction.add((function(){void 0!==t.resizeTimeout&&window.clearTimeout(t.resizeTimeout),t.resizeTimeout=window.setTimeout((function(){delete t.resizeTimeout,t.updateAndRedraw({withUpdateXDomain:!1,withUpdateOrgXDomain:!1,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),t.brush&&t.brush.update()}),100)})),t.resizeFunction.add((function(){n.onresized.call(t)})),t.resizeIfElementDisplayed=function(){null!=t.api&&t.api.element.offsetParent&&t.resizeFunction()},window.addEventListener("resize",t.resizeIfElementDisplayed,!1)},t.prototype.bindWindowFocus=function(){var t=this
this.windowFocusHandler||(this.windowFocusHandler=function(){t.redraw()},window.addEventListener("focus",this.windowFocusHandler))},t.prototype.unbindWindowFocus=function(){window.removeEventListener("focus",this.windowFocusHandler),delete this.windowFocusHandler},t.prototype.generateResize=function(){var t=[]
function n(){t.forEach((function(t){t()}))}return n.add=function(n){t.push(n)},n.remove=function(n){for(var e=0;e<t.length;e++)if(t[e]===n){t.splice(e,1)
break}},n},t.prototype.endall=function(t,n){var e=0
t.each((function(){++e})).on("end",(function(){--e||n.apply(this,arguments)}))},t.prototype.generateWait=function(){var t=this,n=[],e=function(e){var r=setInterval((function(){if(t.isTabVisible()){var i=0
n.forEach((function(t){if(t.empty())i+=1
else try{t.transition()}catch(t){i+=1}})),i===n.length&&(clearInterval(r),e&&e())}}),50)}
return e.add=function(t){n.push(t)},e},t.prototype.parseDate=function(t){var n
return t instanceof Date?n=t:"string"==typeof t?n=this.dataTimeParse(t):"object"==typeof t?n=new Date(+t):"number"!=typeof t||isNaN(t)||(n=new Date(+t)),n&&!isNaN(+n)||window.console.error("Failed to parse x '"+t+"' to Date object"),n},t.prototype.isTabVisible=function(){return!document.hidden},t.prototype.getPathBox=u,t.prototype.CLASS=b,"SVGPathSeg"in window||(window.SVGPathSeg=function(t,n,e){this.pathSegType=t,this.pathSegTypeAsLetter=n,this._owningPathSegList=e},window.SVGPathSeg.prototype.classname="SVGPathSeg",window.SVGPathSeg.PATHSEG_UNKNOWN=0,window.SVGPathSeg.PATHSEG_CLOSEPATH=1,window.SVGPathSeg.PATHSEG_MOVETO_ABS=2,window.SVGPathSeg.PATHSEG_MOVETO_REL=3,window.SVGPathSeg.PATHSEG_LINETO_ABS=4,window.SVGPathSeg.PATHSEG_LINETO_REL=5,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9,window.SVGPathSeg.PATHSEG_ARC_ABS=10,window.SVGPathSeg.PATHSEG_ARC_REL=11,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19,window.SVGPathSeg.prototype._segmentChanged=function(){this._owningPathSegList&&this._owningPathSegList.segmentChanged(this)},window.SVGPathSegClosePath=function(t){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CLOSEPATH,"z",t)},window.SVGPathSegClosePath.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"},window.SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter},window.SVGPathSegClosePath.prototype.clone=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathSegMovetoAbs=function(t,n,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_ABS,"M",t),this._x=n,this._y=e},window.SVGPathSegMovetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"},window.SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoAbs.prototype.clone=function(){return new window.SVGPathSegMovetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegMovetoRel=function(t,n,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_REL,"m",t),this._x=n,this._y=e},window.SVGPathSegMovetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"},window.SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoRel.prototype.clone=function(){return new window.SVGPathSegMovetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoAbs=function(t,n,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_ABS,"L",t),this._x=n,this._y=e},window.SVGPathSegLinetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"},window.SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoAbs.prototype.clone=function(){return new window.SVGPathSegLinetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoRel=function(t,n,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_REL,"l",t),this._x=n,this._y=e},window.SVGPathSegLinetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"},window.SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoRel.prototype.clone=function(){return new window.SVGPathSegLinetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicAbs=function(t,n,e,r,i,o,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",t),this._x=n,this._y=e,this._x1=r,this._y1=i,this._x2=o,this._y2=a},window.SVGPathSegCurvetoCubicAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"},window.SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicRel=function(t,n,e,r,i,o,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",t),this._x=n,this._y=e,this._x1=r,this._y1=i,this._x2=o,this._y2=a},window.SVGPathSegCurvetoCubicRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"},window.SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticAbs=function(t,n,e,r,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",t),this._x=n,this._y=e,this._x1=r,this._y1=i},window.SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"},window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticRel=function(t,n,e,r,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",t),this._x=n,this._y=e,this._x1=r,this._y1=i},window.SVGPathSegCurvetoQuadraticRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"},window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcAbs=function(t,n,e,r,i,o,a,u){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_ABS,"A",t),this._x=n,this._y=e,this._r1=r,this._r2=i,this._angle=o,this._largeArcFlag=a,this._sweepFlag=u},window.SVGPathSegArcAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"},window.SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcAbs.prototype.clone=function(){return new window.SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcRel=function(t,n,e,r,i,o,a,u){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_REL,"a",t),this._x=n,this._y=e,this._r1=r,this._r2=i,this._angle=o,this._largeArcFlag=a,this._sweepFlag=u},window.SVGPathSegArcRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"},window.SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcRel.prototype.clone=function(){return new window.SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalAbs=function(t,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",t),this._x=n},window.SVGPathSegLinetoHorizontalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"},window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalAbs(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalRel=function(t,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",t),this._x=n},window.SVGPathSegLinetoHorizontalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"},window.SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalRel(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalAbs=function(t,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",t),this._y=n},window.SVGPathSegLinetoVerticalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"},window.SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalAbs(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalRel=function(t,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",t),this._y=n},window.SVGPathSegLinetoVerticalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"},window.SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalRel(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothAbs=function(t,n,e,r,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",t),this._x=n,this._y=e,this._x2=r,this._y2=i},window.SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"},window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothRel=function(t,n,e,r,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",t),this._x=n,this._y=e,this._x2=r,this._y2=i},window.SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"},window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothAbs=function(t,n,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",t),this._x=n,this._y=e},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothRel=function(t,n,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",t),this._x=n,this._y=e},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(t,n){return new window.SVGPathSegMovetoAbs(void 0,t,n)},window.SVGPathElement.prototype.createSVGPathSegMovetoRel=function(t,n){return new window.SVGPathSegMovetoRel(void 0,t,n)},window.SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(t,n){return new window.SVGPathSegLinetoAbs(void 0,t,n)},window.SVGPathElement.prototype.createSVGPathSegLinetoRel=function(t,n){return new window.SVGPathSegLinetoRel(void 0,t,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(t,n,e,r,i,o){return new window.SVGPathSegCurvetoCubicAbs(void 0,t,n,e,r,i,o)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(t,n,e,r,i,o){return new window.SVGPathSegCurvetoCubicRel(void 0,t,n,e,r,i,o)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(t,n,e,r){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,t,n,e,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(t,n,e,r){return new window.SVGPathSegCurvetoQuadraticRel(void 0,t,n,e,r)},window.SVGPathElement.prototype.createSVGPathSegArcAbs=function(t,n,e,r,i,o,a){return new window.SVGPathSegArcAbs(void 0,t,n,e,r,i,o,a)},window.SVGPathElement.prototype.createSVGPathSegArcRel=function(t,n,e,r,i,o,a){return new window.SVGPathSegArcRel(void 0,t,n,e,r,i,o,a)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(t){return new window.SVGPathSegLinetoHorizontalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(t){return new window.SVGPathSegLinetoHorizontalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(t){return new window.SVGPathSegLinetoVerticalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(t){return new window.SVGPathSegLinetoVerticalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(t,n,e,r){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,t,n,e,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(t,n,e,r){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,t,n,e,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(t,n){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,t,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(t,n){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,t,n)},"getPathSegAtLength"in window.SVGPathElement.prototype||(window.SVGPathElement.prototype.getPathSegAtLength=function(t){if(void 0===t||!isFinite(t))throw"Invalid arguments."
var n=document.createElementNS("http://www.w3.org/2000/svg","path")
n.setAttribute("d",this.getAttribute("d"))
var e=n.pathSegList.numberOfItems-1
if(e<=0)return 0
do{if(n.pathSegList.removeItem(e),t>n.getTotalLength())break
e--}while(e>0)
return e})),"SVGPathSegList"in window||(window.SVGPathSegList=function(t){this._pathElement=t,this._list=this._parsePath(this._pathElement.getAttribute("d")),this._mutationObserverConfig={attributes:!0,attributeFilter:["d"]},this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.classname="SVGPathSegList",Object.defineProperty(window.SVGPathSegList.prototype,"numberOfItems",{get:function(){return this._checkPathSynchronizedToList(),this._list.length},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"pathSegList",{get:function(){return this._pathSegList||(this._pathSegList=new window.SVGPathSegList(this)),this._pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),window.SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())},window.SVGPathSegList.prototype._updateListFromPathMutations=function(t){if(this._pathElement){var n=!1
t.forEach((function(t){"d"==t.attributeName&&(n=!0)})),n&&(this._list=this._parsePath(this._pathElement.getAttribute("d")))}},window.SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect(),this._pathElement.setAttribute("d",window.SVGPathSegList._pathSegArrayAsString(this._list)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.segmentChanged=function(t){this._writeListToPath()},window.SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList(),this._list.forEach((function(t){t._owningPathSegList=null})),this._list=[],this._writeListToPath()},window.SVGPathSegList.prototype.initialize=function(t){return this._checkPathSynchronizedToList(),this._list=[t],t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype._checkValidIndex=function(t){if(isNaN(t)||t<0||t>=this.numberOfItems)throw"INDEX_SIZE_ERR"},window.SVGPathSegList.prototype.getItem=function(t){return this._checkPathSynchronizedToList(),this._checkValidIndex(t),this._list[t]},window.SVGPathSegList.prototype.insertItemBefore=function(t,n){return this._checkPathSynchronizedToList(),n>this.numberOfItems&&(n=this.numberOfItems),t._owningPathSegList&&(t=t.clone()),this._list.splice(n,0,t),t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype.replaceItem=function(t,n){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._checkValidIndex(n),this._list[n]=t,t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype.removeItem=function(t){this._checkPathSynchronizedToList(),this._checkValidIndex(t)
var n=this._list[t]
return this._list.splice(t,1),this._writeListToPath(),n},window.SVGPathSegList.prototype.appendItem=function(t){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._list.push(t),t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList._pathSegArrayAsString=function(t){var n="",e=!0
return t.forEach((function(t){e?(e=!1,n+=t._asPathString()):n+=" "+t._asPathString()})),n},window.SVGPathSegList.prototype._parsePath=function(t){if(!t||0==t.length)return[]
var n=this,e=function(){this.pathSegList=[]}
e.prototype.appendSegment=function(t){this.pathSegList.push(t)}
var r=function(t){this._string=t,this._currentIndex=0,this._endIndex=this._string.length,this._previousCommand=window.SVGPathSeg.PATHSEG_UNKNOWN,this._skipOptionalSpaces()}
r.prototype._isCurrentSpace=function(){var t=this._string[this._currentIndex]
return t<=" "&&(" "==t||"\n"==t||"\t"==t||"\r"==t||"\f"==t)},r.prototype._skipOptionalSpaces=function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex++
return this._currentIndex<this._endIndex},r.prototype._skipOptionalSpacesOrDelimiter=function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!=this._string.charAt(this._currentIndex))&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","==this._string.charAt(this._currentIndex)&&(this._currentIndex++,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},r.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex},r.prototype.peekSegmentType=function(){var t=this._string[this._currentIndex]
return this._pathSegTypeFromChar(t)},r.prototype._pathSegTypeFromChar=function(t){switch(t){case"Z":case"z":return window.SVGPathSeg.PATHSEG_CLOSEPATH
case"M":return window.SVGPathSeg.PATHSEG_MOVETO_ABS
case"m":return window.SVGPathSeg.PATHSEG_MOVETO_REL
case"L":return window.SVGPathSeg.PATHSEG_LINETO_ABS
case"l":return window.SVGPathSeg.PATHSEG_LINETO_REL
case"C":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS
case"c":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL
case"Q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS
case"q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL
case"A":return window.SVGPathSeg.PATHSEG_ARC_ABS
case"a":return window.SVGPathSeg.PATHSEG_ARC_REL
case"H":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS
case"h":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL
case"V":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS
case"v":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL
case"S":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS
case"s":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL
case"T":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS
case"t":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL
default:return window.SVGPathSeg.PATHSEG_UNKNOWN}},r.prototype._nextCommandHelper=function(t,n){return("+"==t||"-"==t||"."==t||t>="0"&&t<="9")&&n!=window.SVGPathSeg.PATHSEG_CLOSEPATH?n==window.SVGPathSeg.PATHSEG_MOVETO_ABS?window.SVGPathSeg.PATHSEG_LINETO_ABS:n==window.SVGPathSeg.PATHSEG_MOVETO_REL?window.SVGPathSeg.PATHSEG_LINETO_REL:n:window.SVGPathSeg.PATHSEG_UNKNOWN},r.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData())return!0
var t=this.peekSegmentType()
return t==window.SVGPathSeg.PATHSEG_MOVETO_ABS||t==window.SVGPathSeg.PATHSEG_MOVETO_REL},r.prototype._parseNumber=function(){var t=0,n=0,e=1,r=0,i=1,o=1,a=this._currentIndex
if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:this._currentIndex<this._endIndex&&"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,i=-1),!(this._currentIndex==this._endIndex||(this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")&&"."!=this._string.charAt(this._currentIndex))){for(var u=this._currentIndex;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)this._currentIndex++
if(this._currentIndex!=u)for(var s=this._currentIndex-1,c=1;s>=u;)n+=c*(this._string.charAt(s--)-"0"),c*=10
if(this._currentIndex<this._endIndex&&"."==this._string.charAt(this._currentIndex)){if(this._currentIndex++,this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return
for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)e*=10,r+=(this._string.charAt(this._currentIndex)-"0")/e,this._currentIndex+=1}if(this._currentIndex!=a&&this._currentIndex+1<this._endIndex&&("e"==this._string.charAt(this._currentIndex)||"E"==this._string.charAt(this._currentIndex))&&"x"!=this._string.charAt(this._currentIndex+1)&&"m"!=this._string.charAt(this._currentIndex+1)){if(this._currentIndex++,"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,o=-1),this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return
for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)t*=10,t+=this._string.charAt(this._currentIndex)-"0",this._currentIndex++}var l=n+r
if(l*=i,t&&(l*=Math.pow(10,o*t)),a!=this._currentIndex)return this._skipOptionalSpacesOrDelimiter(),l}},r.prototype._parseArcFlag=function(){if(!(this._currentIndex>=this._endIndex)){var t=!1,n=this._string.charAt(this._currentIndex++)
if("0"==n)t=!1
else{if("1"!=n)return
t=!0}return this._skipOptionalSpacesOrDelimiter(),t}},r.prototype.parseSegment=function(){var t=this._string[this._currentIndex],e=this._pathSegTypeFromChar(t)
if(e==window.SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==window.SVGPathSeg.PATHSEG_UNKNOWN)return null
if((e=this._nextCommandHelper(t,this._previousCommand))==window.SVGPathSeg.PATHSEG_UNKNOWN)return null}else this._currentIndex++
switch(this._previousCommand=e,e){case window.SVGPathSeg.PATHSEG_MOVETO_REL:return new window.SVGPathSegMovetoRel(n,this._parseNumber(),this._parseNumber())
case window.SVGPathSeg.PATHSEG_MOVETO_ABS:return new window.SVGPathSegMovetoAbs(n,this._parseNumber(),this._parseNumber())
case window.SVGPathSeg.PATHSEG_LINETO_REL:return new window.SVGPathSegLinetoRel(n,this._parseNumber(),this._parseNumber())
case window.SVGPathSeg.PATHSEG_LINETO_ABS:return new window.SVGPathSegLinetoAbs(n,this._parseNumber(),this._parseNumber())
case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new window.SVGPathSegLinetoHorizontalRel(n,this._parseNumber())
case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new window.SVGPathSegLinetoHorizontalAbs(n,this._parseNumber())
case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new window.SVGPathSegLinetoVerticalRel(n,this._parseNumber())
case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new window.SVGPathSegLinetoVerticalAbs(n,this._parseNumber())
case window.SVGPathSeg.PATHSEG_CLOSEPATH:return this._skipOptionalSpaces(),new window.SVGPathSegClosePath(n)
case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:var r={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()}
return new window.SVGPathSegCurvetoCubicRel(n,r.x,r.y,r.x1,r.y1,r.x2,r.y2)
case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:return r={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicAbs(n,r.x,r.y,r.x1,r.y1,r.x2,r.y2)
case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:return r={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicSmoothRel(n,r.x,r.y,r.x2,r.y2)
case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:return r={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicSmoothAbs(n,r.x,r.y,r.x2,r.y2)
case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:return r={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoQuadraticRel(n,r.x,r.y,r.x1,r.y1)
case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:return r={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoQuadraticAbs(n,r.x,r.y,r.x1,r.y1)
case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new window.SVGPathSegCurvetoQuadraticSmoothRel(n,this._parseNumber(),this._parseNumber())
case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new window.SVGPathSegCurvetoQuadraticSmoothAbs(n,this._parseNumber(),this._parseNumber())
case window.SVGPathSeg.PATHSEG_ARC_REL:return r={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegArcRel(n,r.x,r.y,r.x1,r.y1,r.arcAngle,r.arcLarge,r.arcSweep)
case window.SVGPathSeg.PATHSEG_ARC_ABS:return r={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegArcAbs(n,r.x,r.y,r.x1,r.y1,r.arcAngle,r.arcLarge,r.arcSweep)
default:throw"Unknown path seg type."}}
var i=new e,o=new r(t)
if(!o.initialCommandIsMoveTo())return[]
for(;o.hasMoreData();){var a=o.parseSegment()
if(!a)return[]
i.appendSegment(a)}return i.pathSegList}),String.prototype.padEnd||(String.prototype.padEnd=function(t,n){return t>>=0,n=String(void 0!==n?n:" "),this.length>t?String(this):((t-=this.length)>n.length&&(n+=n.repeat(t/n.length)),String(this)+n.slice(0,t))}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,n){if(null==t)throw new TypeError("Cannot convert undefined or null to object")
for(var e=Object(t),r=1;r<arguments.length;r++){var i=arguments[r]
if(null!=i)for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},writable:!0,configurable:!0}),n.prototype.axis=function(){},n.prototype.axis.labels=function(t){var n=this.internal
arguments.length&&(Object.keys(t).forEach((function(e){n.axis.setLabelText(e,t[e])})),n.axis.updateLabels())},n.prototype.axis.max=function(t){var n=this.internal,e=n.config
if(!arguments.length)return{x:e.axis_x_max,y:e.axis_y_max,y2:e.axis_y2_max}
"object"==typeof t?(y(t.x)&&(e.axis_x_max=t.x),y(t.y)&&(e.axis_y_max=t.y),y(t.y2)&&(e.axis_y2_max=t.y2)):e.axis_y_max=e.axis_y2_max=t,n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},n.prototype.axis.min=function(t){var n=this.internal,e=n.config
if(!arguments.length)return{x:e.axis_x_min,y:e.axis_y_min,y2:e.axis_y2_min}
"object"==typeof t?(y(t.x)&&(e.axis_x_min=t.x),y(t.y)&&(e.axis_y_min=t.y),y(t.y2)&&(e.axis_y2_min=t.y2)):e.axis_y_min=e.axis_y2_min=t,n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},n.prototype.axis.range=function(t){if(!arguments.length)return{max:this.axis.max(),min:this.axis.min()}
l(t.max)&&this.axis.max(t.max),l(t.min)&&this.axis.min(t.min)},n.prototype.axis.types=function(t){var n=this.internal
if(void 0===t)return{y:n.config.axis_y_type,y2:n.config.axis_y2_type}
l(t.y)&&(n.config.axis_y_type=t.y),l(t.y2)&&(n.config.axis_y2_type=t.y2),n.updateScales(),n.redraw()},n.prototype.category=function(t,n){var e=this.internal,r=e.config
return arguments.length>1&&(r.axis_x_categories[t]=n,e.redraw()),r.axis_x_categories[t]},n.prototype.categories=function(t){var n=this.internal,e=n.config
return arguments.length?(e.axis_x_categories=t,n.redraw(),e.axis_x_categories):e.axis_x_categories},n.prototype.resize=function(t){var n=this.internal.config
n.size_width=t?t.width:null,n.size_height=t?t.height:null,this.flush()},n.prototype.flush=function(){this.internal.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1})},n.prototype.destroy=function(){var t=this.internal
return window.clearInterval(t.intervalForObserveInserted),void 0!==t.resizeTimeout&&window.clearTimeout(t.resizeTimeout),window.removeEventListener("resize",t.resizeIfElementDisplayed),t.resizeFunction.remove(),t.unbindWindowFocus(),t.selectChart.classed("c3",!1).html(""),Object.keys(t).forEach((function(n){t[n]=null})),null},n.prototype.color=function(t){return this.internal.color(t)},n.prototype.data=function(t){var n=this.internal.data.targets
return void 0===t?n:n.filter((function(n){return[].concat(t).indexOf(n.id)>=0}))},n.prototype.data.shown=function(t){return this.internal.filterTargetsToShow(this.data(t))},n.prototype.data.values=function(t,n){void 0===n&&(n=!0)
var e=null
if(t){var r=this.data(t)
r&&c(r)&&(e=r.reduce((function(t,e){var r=e.values.map((function(t){return t.value}))
return n?t=t.concat(r):t.push(r),t}),[]))}return e},n.prototype.data.names=function(t){return this.internal.clearLegendItemTextBoxCache(),this.internal.updateDataAttributes("names",t)},n.prototype.data.colors=function(t){return this.internal.updateDataAttributes("colors",t)},n.prototype.data.axes=function(t){return this.internal.updateDataAttributes("axes",t)},n.prototype.data.stackNormalized=function(t){if(void 0===t)return this.internal.isStackNormalized()
this.internal.config.data_stack_normalize=!!t,this.internal.redraw()},n.prototype.donut=function(){},n.prototype.donut.padAngle=function(t){if(void 0===t)return this.internal.config.donut_padAngle
this.internal.config.donut_padAngle=t,this.flush()},n.prototype.flow=function(t){var n,e,r,i,o,a,u,s=this.internal,c=[],f=s.getMaxDataCount(),h=0,d=0
if(t.json)e=s.convertJsonToData(t.json,t.keys)
else if(t.rows)e=s.convertRowsToData(t.rows)
else{if(!t.columns)return
e=s.convertColumnsToData(t.columns)}n=s.convertDataToTargets(e,!0),s.data.targets.forEach((function(t){var e,r,i=!1
for(e=0;e<n.length;e++)if(t.id===n[e].id){for(i=!0,t.values[t.values.length-1]&&(d=t.values[t.values.length-1].index+1),h=n[e].values.length,r=0;r<h;r++)n[e].values[r].index=d+r,s.isTimeSeries()||(n[e].values[r].x=d+r)
t.values=t.values.concat(n[e].values),n.splice(e,1)
break}i||c.push(t.id)})),s.data.targets.forEach((function(t){var n,e
for(n=0;n<c.length;n++)if(t.id===c[n])for(d=t.values[t.values.length-1].index+1,e=0;e<h;e++)t.values.push({id:t.id,index:d+e,x:s.isTimeSeries()?s.getOtherTargetX(d+e):d+e,value:null})})),s.data.targets.length&&n.forEach((function(t){var n,e=[]
for(n=s.data.targets[0].values[0].index;n<d;n++)e.push({id:t.id,index:n,x:s.isTimeSeries()?s.getOtherTargetX(n):n,value:null})
t.values.forEach((function(t){t.index+=d,s.isTimeSeries()||(t.x+=d)})),t.values=e.concat(t.values)})),s.data.targets=s.data.targets.concat(n),s.getMaxDataCount(),o=(i=s.data.targets[0]).values[0],l(t.to)?(h=0,u=s.isTimeSeries()?s.parseDate(t.to):t.to,i.values.forEach((function(t){t.x<u&&h++}))):l(t.length)&&(h=t.length),f?1===f&&s.isTimeSeries()&&(a=(i.values[i.values.length-1].x-o.x)/2,r=[new Date(+o.x-a),new Date(+o.x+a)],s.updateXDomain(null,!0,!0,!1,r)):(a=s.isTimeSeries()?i.values.length>1?i.values[i.values.length-1].x-o.x:o.x-s.getXDomain(s.data.targets)[0]:1,r=[o.x-a,o.x],s.updateXDomain(null,!0,!0,!1,r)),s.updateTargets(s.data.targets),s.redraw({flow:{index:o.index,length:h,duration:y(t.duration)?t.duration:s.config.transition_duration,done:t.done,orgDataCount:f},withLegend:!0,withTransition:f>1,withTrimXDomain:!1,withUpdateXAxis:!0})},t.prototype.generateFlow=function(t){var n=this,e=n.config,r=n.d3
return function(){var i,a,u,s,c,l,f,h,d,p,g,y=t.targets,_=t.flow,v=t.drawBar,m=t.drawLine,x=t.drawArea,w=t.cx,S=t.cy,A=t.xv,M=t.xForText,T=t.yForText,C=t.duration,P=_.index,E=_.length,k=n.getValueOnIndex(n.data.targets[0].values,P),N=n.getValueOnIndex(n.data.targets[0].values,P+E),L=n.x.domain(),R=_.duration||C,V=_.done||function(){},O=n.generateWait()
n.flowing=!0,n.data.targets.forEach((function(t){t.values.splice(0,E)})),u=n.updateXDomain(y,!0,!0),n.updateXGrid&&n.updateXGrid(!0),s=n.xgrid||r.selectAll([]),c=n.xgridLines||r.selectAll([]),l=n.mainRegion||r.selectAll([]),f=n.mainText||r.selectAll([]),h=n.mainBar||r.selectAll([]),d=n.mainLine||r.selectAll([]),p=n.mainArea||r.selectAll([]),g=n.mainCircle||r.selectAll([]),_.orgDataCount?i=1===_.orgDataCount||(k&&k.x)===(N&&N.x)||n.isTimeSeries()?n.x(L[0])-n.x(u[0]):n.x(k.x)-n.x(N.x):1!==n.data.targets[0].values.length?i=n.x(L[0])-n.x(u[0]):n.isTimeSeries()?(k=n.getValueOnIndex(n.data.targets[0].values,0),N=n.getValueOnIndex(n.data.targets[0].values,n.data.targets[0].values.length-1),i=n.x(k.x)-n.x(N.x)):i=o(u)/2,a="translate("+i+",0) scale("+o(L)/o(u)+",1)",n.hideXGridFocus()
var G=r.transition().ease(r.easeLinear).duration(R)
O.add(n.xAxis(n.axes.x,G)),O.add(h.transition(G).attr("transform",a)),O.add(d.transition(G).attr("transform",a)),O.add(p.transition(G).attr("transform",a)),O.add(g.transition(G).attr("transform",a)),O.add(f.transition(G).attr("transform",a)),O.add(l.filter(n.isRegionOnX).transition(G).attr("transform",a)),O.add(s.transition(G).attr("transform",a)),O.add(c.transition(G).attr("transform",a)),O((function(){var t,r=[],i=[]
if(E){for(t=0;t<E;t++)r.push("."+b.shape+"-"+(P+t)),i.push("."+b.text+"-"+(P+t))
n.svg.selectAll("."+b.shapes).selectAll(r).remove(),n.svg.selectAll("."+b.texts).selectAll(i).remove(),n.svg.select("."+b.xgrid).remove()}s.attr("transform",null).attr("x1",n.xgridAttr.x1).attr("x2",n.xgridAttr.x2).attr("y1",n.xgridAttr.y1).attr("y2",n.xgridAttr.y2).style("opacity",n.xgridAttr.opacity),c.attr("transform",null),c.select("line").attr("x1",e.axis_rotated?0:A).attr("x2",e.axis_rotated?n.width:A),c.select("text").attr("x",e.axis_rotated?n.width:0).attr("y",A),h.attr("transform",null).attr("d",v),d.attr("transform",null).attr("d",m),p.attr("transform",null).attr("d",x),g.attr("transform",null).attr("cx",w).attr("cy",S),f.attr("transform",null).attr("x",M).attr("y",T).style("fill-opacity",n.opacityForText.bind(n)),l.attr("transform",null),l.filter(n.isRegionOnX).attr("x",n.regionX.bind(n)).attr("width",n.regionWidth.bind(n)),V(),n.flowing=!1}))}},n.prototype.focus=function(t){var n,e=this.internal
t=e.mapToTargetIds(t),n=e.svg.selectAll(e.selectorTargets(t.filter(e.isTargetToShow,e))),this.revert(),this.defocus(),n.classed(b.focused,!0).classed(b.defocused,!1),e.hasArcType()&&e.expandArc(t),e.toggleFocusLegend(t,!0),e.focusedTargetIds=t,e.defocusedTargetIds=e.defocusedTargetIds.filter((function(n){return t.indexOf(n)<0}))},n.prototype.defocus=function(t){var n=this.internal
t=n.mapToTargetIds(t),n.svg.selectAll(n.selectorTargets(t.filter(n.isTargetToShow,n))).classed(b.focused,!1).classed(b.defocused,!0),n.hasArcType()&&n.unexpandArc(t),n.toggleFocusLegend(t,!1),n.focusedTargetIds=n.focusedTargetIds.filter((function(n){return t.indexOf(n)<0})),n.defocusedTargetIds=t},n.prototype.revert=function(t){var n=this.internal
t=n.mapToTargetIds(t),n.svg.selectAll(n.selectorTargets(t)).classed(b.focused,!1).classed(b.defocused,!1),n.hasArcType()&&n.unexpandArc(t),n.config.legend_show&&(n.showLegend(t.filter(n.isLegendToShow.bind(n))),n.legend.selectAll(n.selectorLegends(t)).filter((function(){return n.d3.select(this).classed(b.legendItemFocused)})).classed(b.legendItemFocused,!1)),n.focusedTargetIds=[],n.defocusedTargetIds=[]},n.prototype.xgrids=function(t){var n=this.internal,e=n.config
return t?(e.grid_x_lines=t,n.redrawWithoutRescale(),e.grid_x_lines):e.grid_x_lines},n.prototype.xgrids.add=function(t){var n=this.internal
return this.xgrids(n.config.grid_x_lines.concat(t||[]))},n.prototype.xgrids.remove=function(t){this.internal.removeGridLines(t,!0)},n.prototype.ygrids=function(t){var n=this.internal,e=n.config
return t?(e.grid_y_lines=t,n.redrawWithoutRescale(),e.grid_y_lines):e.grid_y_lines},n.prototype.ygrids.add=function(t){var n=this.internal
return this.ygrids(n.config.grid_y_lines.concat(t||[]))},n.prototype.ygrids.remove=function(t){this.internal.removeGridLines(t,!1)},n.prototype.groups=function(t){var n=this.internal,e=n.config
return g(t)||(e.data_groups=t,n.redraw()),e.data_groups},n.prototype.legend=function(){},n.prototype.legend.show=function(t){var n=this.internal
n.showLegend(n.mapToTargetIds(t)),n.updateAndRedraw({withLegend:!0})},n.prototype.legend.hide=function(t){var n=this.internal
n.hideLegend(n.mapToTargetIds(t)),n.updateAndRedraw({withLegend:!1})},n.prototype.load=function(t){var e=this.internal,r=e.config
t.xs&&e.addXs(t.xs),"names"in t&&n.prototype.data.names.bind(this)(t.names),"classes"in t&&Object.keys(t.classes).forEach((function(n){r.data_classes[n]=t.classes[n]})),"categories"in t&&e.isCategorized()&&(r.axis_x_categories=t.categories),"axes"in t&&Object.keys(t.axes).forEach((function(n){r.data_axes[n]=t.axes[n]})),"colors"in t&&Object.keys(t.colors).forEach((function(n){r.data_colors[n]=t.colors[n]})),"cacheIds"in t&&e.hasCaches(t.cacheIds)?e.load(e.getCaches(t.cacheIds),t.done):t.unload?e.unload(e.mapToTargetIds(!0===t.unload?null:t.unload),(function(){e.loadFromArgs(t)})):e.loadFromArgs(t)},n.prototype.unload=function(t){var n=this.internal;(t=t||{})instanceof Array?t={ids:t}:"string"==typeof t&&(t={ids:[t]}),n.unload(n.mapToTargetIds(t.ids),(function(){n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),t.done&&t.done()}))},n.prototype.pie=function(){},n.prototype.pie.padAngle=function(t){if(void 0===t)return this.internal.config.pie_padAngle
this.internal.config.pie_padAngle=t,this.flush()},n.prototype.regions=function(t){var n=this.internal,e=n.config
return t?(e.regions=t,n.redrawWithoutRescale(),e.regions):e.regions},n.prototype.regions.add=function(t){var n=this.internal,e=n.config
return t?(e.regions=e.regions.concat(t),n.redrawWithoutRescale(),e.regions):e.regions},n.prototype.regions.remove=function(t){var n,e,r,i=this.internal,o=i.config
return n=a(t=t||{},"duration",o.transition_duration),e=a(t,"classes",[b.region]),r=i.main.select("."+b.regions).selectAll(e.map((function(t){return"."+t}))),(n?r.transition().duration(n):r).style("opacity",0).remove(),o.regions=o.regions.filter((function(t){var n=!1
return!t.class||(t.class.split(" ").forEach((function(t){e.indexOf(t)>=0&&(n=!0)})),!n)})),o.regions},n.prototype.selected=function(t){var n=this.internal,e=n.d3
return n.main.selectAll("."+b.shapes+n.getTargetSelectorSuffix(t)).selectAll("."+b.shape).filter((function(){return e.select(this).classed(b.SELECTED)})).nodes().map((function(t){var n=t.__data__
return n.data?n.data:n}))},n.prototype.select=function(t,n,e){var r=this.internal,i=r.d3,o=r.config
o.data_selection_enabled&&r.main.selectAll("."+b.shapes).selectAll("."+b.shape).each((function(a,u){var s=i.select(this),c=a.data?a.data.id:a.id,f=r.getToggle(this,a).bind(r),h=o.data_selection_grouped||!t||t.indexOf(c)>=0,d=!n||n.indexOf(u)>=0,p=s.classed(b.SELECTED)
s.classed(b.line)||s.classed(b.area)||(h&&d?o.data_selection_isselectable(a)&&!p&&f(!0,s.classed(b.SELECTED,!0),a,u):l(e)&&e&&p&&f(!1,s.classed(b.SELECTED,!1),a,u))}))},n.prototype.unselect=function(t,n){var e=this.internal,r=e.d3,i=e.config
i.data_selection_enabled&&e.main.selectAll("."+b.shapes).selectAll("."+b.shape).each((function(o,a){var u=r.select(this),s=o.data?o.data.id:o.id,c=e.getToggle(this,o).bind(e),l=i.data_selection_grouped||!t||t.indexOf(s)>=0,f=!n||n.indexOf(a)>=0,h=u.classed(b.SELECTED)
u.classed(b.line)||u.classed(b.area)||l&&f&&i.data_selection_isselectable(o)&&h&&c(!1,u.classed(b.SELECTED,!1),o,a)}))},n.prototype.show=function(t,n){var e,r=this.internal
t=r.mapToTargetIds(t),n=n||{},r.removeHiddenTargetIds(t),(e=r.svg.selectAll(r.selectorTargets(t))).transition().style("display",m()?"block":"initial","important").style("opacity",1,"important").call(r.endall,(function(){e.style("opacity",null).style("opacity",1)})),n.withLegend&&r.showLegend(t),r.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},n.prototype.hide=function(t,n){var e,r=this.internal
t=r.mapToTargetIds(t),n=n||{},r.addHiddenTargetIds(t),(e=r.svg.selectAll(r.selectorTargets(t))).transition().style("opacity",0,"important").call(r.endall,(function(){e.style("opacity",null).style("opacity",0),e.style("display","none")})),n.withLegend&&r.hideLegend(t),r.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},n.prototype.toggle=function(t,n){var e=this,r=this.internal
r.mapToTargetIds(t).forEach((function(t){r.isTargetToShow(t)?e.hide(t,n):e.show(t,n)}))},n.prototype.subchart=function(){},n.prototype.subchart.isShown=function(){return this.internal.config.subchart_show},n.prototype.subchart.show=function(){var t=this.internal
t.config.subchart_show||(t.config.subchart_show=!0,t.initSubchart(),t.updateDimension(),t.initSubchartBrush(),t.updateTargetsForSubchart(t.getTargets()),t.mapToIds(t.data.targets).forEach((function(n){t.withoutFadeIn[n]=!1})),t.updateAndRedraw(),t.showTargets())},n.prototype.subchart.hide=function(){var t=this.internal
t.config.subchart_show&&(t.config.subchart_show=!1,t.removeSubchart(),t.redraw())},n.prototype.tooltip=function(){},n.prototype.tooltip.show=function(t){var n,e,r=this.internal,i={}
t.mouse?i=t.mouse:(t.data?e=t.data:void 0!==t.x&&(n=t.id?r.data.targets.filter((function(n){return n.id===t.id})):r.data.targets,e=r.filterByX(n,t.x).slice(0,1)[0]),i=e?r.getMousePosition(e):null),r.dispatchEvent("mousemove",i),r.config.tooltip_onshow.call(r,e)},n.prototype.tooltip.hide=function(){this.internal.dispatchEvent("mouseout",0),this.internal.config.tooltip_onhide.call(this)},n.prototype.transform=function(t,n){var e=this.internal,r=["pie","donut"].indexOf(t)>=0?{withTransform:!0}:null
e.transformTo(n,t,r)},t.prototype.transformTo=function(t,n,e){var r=this,i=!r.hasArcType(),o=e||{withTransitionForAxis:i}
o.withTransitionForTransform=!1,r.transiting=!1,r.setTargetType(t,n),r.updateTargets(r.data.targets),r.updateAndRedraw(o)},n.prototype.x=function(t){var n=this.internal
return arguments.length&&(n.updateTargetX(n.data.targets,t),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),n.data.xs},n.prototype.xs=function(t){var n=this.internal
return arguments.length&&(n.updateTargetXs(n.data.targets,t),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),n.data.xs},n.prototype.zoom=function(t){var n=this.internal
return t?(n.isTimeSeries()&&(t=t.map((function(t){return n.parseDate(t)}))),n.config.subchart_show?n.brush.selectionAsValue(t,!0):(n.updateXDomain(null,!0,!1,!1,t),n.redraw({withY:n.config.zoom_rescale,withSubchart:!1})),n.config.zoom_onzoom.call(this,n.x.orgDomain()),t):n.x.domain()},n.prototype.zoom.enable=function(t){var n=this.internal
n.config.zoom_enabled=t,n.updateAndRedraw()},n.prototype.unzoom=function(){var t=this.internal
t.config.subchart_show?t.brush.clear():(t.updateXDomain(null,!0,!1,!1,t.subX.domain()),t.redraw({withY:t.config.zoom_rescale,withSubchart:!1}))},n.prototype.zoom.max=function(t){var n=this.internal,e=n.config,r=n.d3
if(0!==t&&!t)return e.zoom_x_max
e.zoom_x_max=r.max([n.orgXDomain[1],t])},n.prototype.zoom.min=function(t){var n=this.internal,e=n.config,r=n.d3
if(0!==t&&!t)return e.zoom_x_min
e.zoom_x_min=r.min([n.orgXDomain[0],t])},n.prototype.zoom.range=function(t){if(!arguments.length)return{max:this.domain.max(),min:this.domain.min()}
l(t.max)&&this.domain.max(t.max),l(t.min)&&this.domain.min(t.min)},t.prototype.initPie=function(){var t=this,n=t.d3
t.pie=n.pie().padAngle(this.getPadAngle.bind(this)).value((function(t){return t.values.reduce((function(t,n){return t+n.value}),0)}))
var e=t.getOrderFunction()
if(e&&(t.isOrderAsc()||t.isOrderDesc())){var r=e
e=function(t,n){return-1*r(t,n)}}t.pie.sort(e||null)},t.prototype.updateRadius=function(){var t=this,n=t.config,e=n.gauge_width||n.donut_width,r=t.filterTargetsToShow(t.data.targets).length*t.config.gauge_arcs_minWidth
t.radiusExpanded=Math.min(t.arcWidth,t.arcHeight)/2*(t.hasType("gauge")?.85:1),t.radius=.95*t.radiusExpanded,t.innerRadiusRatio=e?(t.radius-e)/t.radius:.6,t.innerRadius=t.hasType("donut")||t.hasType("gauge")?t.radius*t.innerRadiusRatio:0,t.gaugeArcWidth=e||(r<=t.radius-t.innerRadius?t.radius-t.innerRadius:r<=t.radius?r:t.radius)},t.prototype.getPadAngle=function(){return this.hasType("pie")?this.config.pie_padAngle||0:this.hasType("donut")&&this.config.donut_padAngle||0},t.prototype.updateArc=function(){var t=this
t.svgArc=t.getSvgArc(),t.svgArcExpanded=t.getSvgArcExpanded(),t.svgArcExpandedSub=t.getSvgArcExpanded(.98)},t.prototype.updateAngle=function(t){var n,e,r,i,o=this,a=o.config,u=!1,s=0
return a?(o.pie(o.filterTargetsToShow(o.data.targets)).forEach((function(n){u||n.data.id!==t.data.id||(u=!0,(t=n).index=s),s++})),isNaN(t.startAngle)&&(t.startAngle=0),isNaN(t.endAngle)&&(t.endAngle=t.startAngle),o.isGaugeType(t.data)&&(n=a.gauge_min,e=a.gauge_max,r=Math.PI*(a.gauge_fullCircle?2:1)/(e-n),i=t.value<n?0:t.value<e?t.value-n:e-n,t.startAngle=a.gauge_startingAngle,t.endAngle=t.startAngle+r*i),u?t:null):null},t.prototype.getSvgArc=function(){var t=this,n=t.hasType("gauge"),e=t.gaugeArcWidth/t.filterTargetsToShow(t.data.targets).length,r=t.d3.arc().outerRadius((function(r){return n?t.radius-e*r.index:t.radius})).innerRadius((function(r){return n?t.radius-e*(r.index+1):t.innerRadius})),i=function(n,e){var i
return e?r(n):(i=t.updateAngle(n))?r(i):"M 0 0"}
return i.centroid=r.centroid,i},t.prototype.getSvgArcExpanded=function(t){t=t||1
var n=this,e=n.hasType("gauge"),r=n.gaugeArcWidth/n.filterTargetsToShow(n.data.targets).length,i=Math.min(n.radiusExpanded*t-n.radius,.8*r-100*(1-t)),o=n.d3.arc().outerRadius((function(o){return e?n.radius-r*o.index+i:n.radiusExpanded*t})).innerRadius((function(t){return e?n.radius-r*(t.index+1):n.innerRadius}))
return function(t){var e=n.updateAngle(t)
return e?o(e):"M 0 0"}},t.prototype.getArc=function(t,n,e){return e||this.isArcType(t.data)?this.svgArc(t,n):"M 0 0"},t.prototype.transformForArcLabel=function(t){var n,e,r,i,o,a=this,u=a.config,s=a.updateAngle(t),c="",l=a.hasType("gauge")
if(s&&!l)n=this.svgArc.centroid(s),e=isNaN(n[0])?0:n[0],r=isNaN(n[1])?0:n[1],i=Math.sqrt(e*e+r*r),c="translate("+e*(o=a.hasType("donut")&&u.donut_label_ratio?h(u.donut_label_ratio)?u.donut_label_ratio(t,a.radius,i):u.donut_label_ratio:a.hasType("pie")&&u.pie_label_ratio?h(u.pie_label_ratio)?u.pie_label_ratio(t,a.radius,i):u.pie_label_ratio:a.radius&&i?(36/a.radius>.375?1.175-36/a.radius:.8)*a.radius/i:0)+","+r*o+")"
else if(s&&l&&a.filterTargetsToShow(a.data.targets).length>1){var f=Math.sin(s.endAngle-Math.PI/2)
c="translate("+(e=Math.cos(s.endAngle-Math.PI/2)*(a.radiusExpanded+25))+","+(r=f*(a.radiusExpanded+15-Math.abs(10*f))+3)+")"}return c},t.prototype.getArcRatio=function(t){return this.getRatio("arc",t)},t.prototype.convertToArcData=function(t){return this.addName({id:t.data.id,value:t.value,ratio:this.getRatio("arc",t),index:t.index})},t.prototype.textForArcLabel=function(t){var n,e,r,i,o,a=this
return a.shouldShowArcLabel()?(e=(n=a.updateAngle(t))?n.value:null,r=a.getRatio("arc",n),i=t.data.id,a.hasType("gauge")||a.meetsArcLabelThreshold(r)?(o=a.getArcLabelFormat())?o(e,r,i):a.defaultArcValueFormat(e,r):""):""},t.prototype.textForGaugeMinMax=function(t,n){var e=this.getGaugeLabelExtents()
return e?e(t,n):t},t.prototype.expandArc=function(t){var n,e=this
e.transiting?n=window.setInterval((function(){e.transiting||(window.clearInterval(n),e.legend.selectAll(".c3-legend-item-focused").size()>0&&e.expandArc(t))}),10):(t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t,"."+b.chartArc)).each((function(t){e.shouldExpand(t.data.id)&&e.d3.select(this).selectAll("path").transition().duration(e.expandDuration(t.data.id)).attr("d",e.svgArcExpanded).transition().duration(2*e.expandDuration(t.data.id)).attr("d",e.svgArcExpandedSub).each((function(t){e.isDonutType(t.data)}))})))},t.prototype.unexpandArc=function(t){var n=this
n.transiting||(t=n.mapToTargetIds(t),n.svg.selectAll(n.selectorTargets(t,"."+b.chartArc)).selectAll("path").transition().duration((function(t){return n.expandDuration(t.data.id)})).attr("d",n.svgArc),n.svg.selectAll("."+b.arc))},t.prototype.expandDuration=function(t){var n=this,e=n.config
return n.isDonutType(t)?e.donut_expand_duration:n.isGaugeType(t)?e.gauge_expand_duration:n.isPieType(t)?e.pie_expand_duration:50},t.prototype.shouldExpand=function(t){var n=this,e=n.config
return n.isDonutType(t)&&e.donut_expand||n.isGaugeType(t)&&e.gauge_expand||n.isPieType(t)&&e.pie_expand},t.prototype.shouldShowArcLabel=function(){var t=this,n=t.config,e=!0
return t.hasType("donut")?e=n.donut_label_show:t.hasType("pie")&&(e=n.pie_label_show),e},t.prototype.meetsArcLabelThreshold=function(t){var n=this.config
return t>=(this.hasType("donut")?n.donut_label_threshold:n.pie_label_threshold)},t.prototype.getArcLabelFormat=function(){var t=this,n=t.config,e=n.pie_label_format
return t.hasType("gauge")?e=n.gauge_label_format:t.hasType("donut")&&(e=n.donut_label_format),e},t.prototype.getGaugeLabelExtents=function(){return this.config.gauge_label_extents},t.prototype.getArcTitle=function(){return this.hasType("donut")?this.config.donut_title:""},t.prototype.updateTargetsForArc=function(t){var n,e=this,r=e.main,i=e.classChartArc.bind(e),o=e.classArcs.bind(e),a=e.classFocus.bind(e);(n=r.select("."+b.chartArcs).selectAll("."+b.chartArc).data(e.pie(t)).attr("class",(function(t){return i(t)+a(t.data)})).enter().append("g").attr("class",i)).append("g").attr("class",o),n.append("text").attr("dy",e.hasType("gauge")?"-.1em":".35em").style("opacity",0).style("text-anchor","middle").style("pointer-events","none")},t.prototype.initArc=function(){var t=this
t.arcs=t.main.select("."+b.chart).append("g").attr("class",b.chartArcs).attr("transform",t.getTranslate("arc")),t.arcs.append("text").attr("class",b.chartArcsTitle).style("text-anchor","middle").text(t.getArcTitle())},t.prototype.redrawArc=function(t,n,e){var r,i,o,a,u=this,s=u.d3,c=u.config,l=u.main,f=u.hasType("gauge")
if(i=(r=l.selectAll("."+b.arcs).selectAll("."+b.arc).data(u.arcData.bind(u))).enter().append("path").attr("class",u.classArc.bind(u)).style("fill",(function(t){return u.color(t.data)})).style("cursor",(function(t){return c.interaction_enabled&&c.data_selection_isselectable(t)?"pointer":null})).each((function(t){u.isGaugeType(t.data)&&(t.startAngle=t.endAngle=c.gauge_startingAngle),this._current=t})).merge(r),f&&(a=(o=l.selectAll("."+b.arcs).selectAll("."+b.arcLabelLine).data(u.arcData.bind(u))).enter().append("rect").attr("class",(function(t){return b.arcLabelLine+" "+b.target+" "+b.target+"-"+t.data.id})).merge(o),1===u.filterTargetsToShow(u.data.targets).length?a.style("display","none"):a.style("fill",(function(t){return u.levelColor?u.levelColor(t.data.values.reduce((function(t,n){return t+n.value}),0)):u.color(t.data)})).style("display",c.gauge_labelLine_show?"":"none").each((function(t){var n=0,e=0,r=0,i=""
if(u.hiddenTargetIds.indexOf(t.data.id)<0){var o=u.updateAngle(t),a=u.gaugeArcWidth/u.filterTargetsToShow(u.data.targets).length*(o.index+1),c=o.endAngle-Math.PI/2,l=u.radius-a,f=c-(0===l?0:1/l)
n=u.radiusExpanded-u.radius+a,e=Math.cos(f)*l,r=Math.sin(f)*l,i="rotate("+180*c/Math.PI+", "+e+", "+r+")"}s.select(this).attr("x",e).attr("y",r).attr("width",n).attr("height",2).attr("transform",i).style("stroke-dasharray","0, "+(n+2)+", 0")}))),i.attr("transform",(function(t){return!u.isGaugeType(t.data)&&e?"scale(0)":""})).on("mouseover",c.interaction_enabled?function(t){var n,e
u.transiting||(n=u.updateAngle(t))&&(e=u.convertToArcData(n),u.expandArc(n.data.id),u.api.focus(n.data.id),u.toggleFocusLegend(n.data.id,!0),u.config.data_onmouseover(e,this))}:null).on("mousemove",c.interaction_enabled?function(t){var n,e=u.updateAngle(t)
e&&(n=[u.convertToArcData(e)],u.showTooltip(n,this))}:null).on("mouseout",c.interaction_enabled?function(t){var n,e
u.transiting||(n=u.updateAngle(t))&&(e=u.convertToArcData(n),u.unexpandArc(n.data.id),u.api.revert(),u.revertLegend(),u.hideTooltip(),u.config.data_onmouseout(e,this))}:null).on("click",c.interaction_enabled?function(t,n){var e,r=u.updateAngle(t)
r&&(e=u.convertToArcData(r),u.toggleShape&&u.toggleShape(this,e,n),u.config.data_onclick.call(u.api,e,this))}:null).each((function(){u.transiting=!0})).transition().duration(t).attrTween("d",(function(t){var n,e=u.updateAngle(t)
return e?(isNaN(this._current.startAngle)&&(this._current.startAngle=0),isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle),n=s.interpolate(this._current,e),this._current=n(0),function(e){if(null===u.config)return"M 0 0"
var r=n(e)
return r.data=t.data,u.getArc(r,!0)}):function(){return"M 0 0"}})).attr("transform",e?"scale(1)":"").style("fill",(function(t){return u.levelColor?u.levelColor(t.data.values.reduce((function(t,n){return t+n.value}),0)):u.color(t.data.id)})).call(u.endall,(function(){u.transiting=!1})),r.exit().transition().duration(n).style("opacity",0).remove(),l.selectAll("."+b.chartArc).select("text").style("opacity",0).attr("class",(function(t){return u.isGaugeType(t.data)?b.gaugeValue:""})).text(u.textForArcLabel.bind(u)).attr("transform",u.transformForArcLabel.bind(u)).style("font-size",(function(t){return u.isGaugeType(t.data)&&1===u.filterTargetsToShow(u.data.targets).length?Math.round(u.radius/5)+"px":""})).transition().duration(t).style("opacity",(function(t){return u.isTargetToShow(t.data.id)&&u.isArcType(t.data)?1:0})),l.select("."+b.chartArcsTitle).style("opacity",u.hasType("donut")||f?1:0),f){var h=0,d=u.arcs.select("g."+b.chartArcsBackground).selectAll("path."+b.chartArcsBackground).data(u.data.targets)
d.enter().append("path").attr("class",(function(t,n){return b.chartArcsBackground+" "+b.chartArcsBackground+"-"+n})).merge(d).attr("d",(function(t){if(u.hiddenTargetIds.indexOf(t.id)>=0)return"M 0 0"
var n={data:[{value:c.gauge_max}],startAngle:c.gauge_startingAngle,endAngle:-1*c.gauge_startingAngle*(c.gauge_fullCircle?Math.PI:1),index:h++}
return u.getArc(n,!0,!0)})),d.exit().remove(),u.arcs.select("."+b.chartArcsGaugeUnit).attr("dy",".75em").text(c.gauge_label_show?c.gauge_units:""),u.arcs.select("."+b.chartArcsGaugeMin).attr("dx",-1*(u.innerRadius+(u.radius-u.innerRadius)/(c.gauge_fullCircle?1:2))+"px").attr("dy","1.2em").text(c.gauge_label_show?u.textForGaugeMinMax(c.gauge_min,!1):""),u.arcs.select("."+b.chartArcsGaugeMax).attr("dx",u.innerRadius+(u.radius-u.innerRadius)/(c.gauge_fullCircle?1:2)+"px").attr("dy","1.2em").text(c.gauge_label_show?u.textForGaugeMinMax(c.gauge_max,!0):"")}},t.prototype.initGauge=function(){var t=this.arcs
this.hasType("gauge")&&(t.append("g").attr("class",b.chartArcsBackground),t.append("text").attr("class",b.chartArcsGaugeUnit).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",b.chartArcsGaugeMin).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",b.chartArcsGaugeMax).style("text-anchor","middle").style("pointer-events","none"))},t.prototype.getGaugeLabelHeight=function(){return this.config.gauge_label_show?20:0},t.prototype.addToCache=function(t,n){this.cache["$"+t]=n},t.prototype.getFromCache=function(t){return this.cache["$"+t]},t.prototype.resetCache=function(){var t=this
Object.keys(this.cache).filter((function(t){return/^\$/.test(t)})).forEach((function(n){delete t.cache[n]}))},t.prototype.hasCaches=function(t){for(var n=0;n<t.length;n++)if(!(t[n]in this.cache))return!1
return!0},t.prototype.addCache=function(t,n){this.cache[t]=this.cloneTarget(n)},t.prototype.getCaches=function(t){var n,e=[]
for(n=0;n<t.length;n++)t[n]in this.cache&&e.push(this.cloneTarget(this.cache[t[n]]))
return e},t.prototype.categoryName=function(t){var n=this.config
return t<n.axis_x_categories.length?n.axis_x_categories[t]:t},t.prototype.generateTargetClass=function(t){return t||0===t?("-"+t).replace(/\s/g,"-"):""},t.prototype.generateClass=function(t,n){return" "+t+" "+t+this.generateTargetClass(n)},t.prototype.classText=function(t){return this.generateClass(b.text,t.index)},t.prototype.classTexts=function(t){return this.generateClass(b.texts,t.id)},t.prototype.classShape=function(t){return this.generateClass(b.shape,t.index)},t.prototype.classShapes=function(t){return this.generateClass(b.shapes,t.id)},t.prototype.classLine=function(t){return this.classShape(t)+this.generateClass(b.line,t.id)},t.prototype.classLines=function(t){return this.classShapes(t)+this.generateClass(b.lines,t.id)},t.prototype.classCircle=function(t){return this.classShape(t)+this.generateClass(b.circle,t.index)},t.prototype.classCircles=function(t){return this.classShapes(t)+this.generateClass(b.circles,t.id)},t.prototype.classBar=function(t){return this.classShape(t)+this.generateClass(b.bar,t.index)},t.prototype.classBars=function(t){return this.classShapes(t)+this.generateClass(b.bars,t.id)},t.prototype.classArc=function(t){return this.classShape(t.data)+this.generateClass(b.arc,t.data.id)},t.prototype.classArcs=function(t){return this.classShapes(t.data)+this.generateClass(b.arcs,t.data.id)},t.prototype.classArea=function(t){return this.classShape(t)+this.generateClass(b.area,t.id)},t.prototype.classAreas=function(t){return this.classShapes(t)+this.generateClass(b.areas,t.id)},t.prototype.classRegion=function(t,n){return this.generateClass(b.region,n)+" "+("class"in t?t.class:"")},t.prototype.classEvent=function(t){return this.generateClass(b.eventRect,t.index)},t.prototype.classTarget=function(t){var n=this.config.data_classes[t],e=""
return n&&(e=" "+b.target+"-"+n),this.generateClass(b.target,t)+e},t.prototype.classFocus=function(t){return this.classFocused(t)+this.classDefocused(t)},t.prototype.classFocused=function(t){return" "+(this.focusedTargetIds.indexOf(t.id)>=0?b.focused:"")},t.prototype.classDefocused=function(t){return" "+(this.defocusedTargetIds.indexOf(t.id)>=0?b.defocused:"")},t.prototype.classChartText=function(t){return b.chartText+this.classTarget(t.id)},t.prototype.classChartLine=function(t){return b.chartLine+this.classTarget(t.id)},t.prototype.classChartBar=function(t){return b.chartBar+this.classTarget(t.id)},t.prototype.classChartArc=function(t){return b.chartArc+this.classTarget(t.data.id)},t.prototype.getTargetSelectorSuffix=function(t){var n=this.generateTargetClass(t)
return window.CSS&&window.CSS.escape?window.CSS.escape(n):n.replace(/([?!@#$%^&*()=+,.<>'":;\[\]\/|~`{}\\])/g,"\\$1")},t.prototype.selectorTarget=function(t,n){return(n||"")+"."+b.target+this.getTargetSelectorSuffix(t)},t.prototype.selectorTargets=function(t,n){var e=this
return(t=t||[]).length?t.map((function(t){return e.selectorTarget(t,n)})):null},t.prototype.selectorLegend=function(t){return"."+b.legendItem+this.getTargetSelectorSuffix(t)},t.prototype.selectorLegends=function(t){var n=this
return t&&t.length?t.map((function(t){return n.selectorLegend(t)})):null},t.prototype.getClipPath=function(t){return"url("+(m(9)?"":document.URL.split("#")[0])+"#"+t+")"},t.prototype.appendClip=function(t,n){return t.append("clipPath").attr("id",n).append("rect")},t.prototype.getAxisClipX=function(t){var n=Math.max(30,this.margin.left)
return t?-(1+n):-(n-1)},t.prototype.getAxisClipY=function(t){return t?-20:-this.margin.top},t.prototype.getXAxisClipX=function(){return this.getAxisClipX(!this.config.axis_rotated)},t.prototype.getXAxisClipY=function(){return this.getAxisClipY(!this.config.axis_rotated)},t.prototype.getYAxisClipX=function(){var t=this
return t.config.axis_y_inner?-1:t.getAxisClipX(t.config.axis_rotated)},t.prototype.getYAxisClipY=function(){return this.getAxisClipY(this.config.axis_rotated)},t.prototype.getAxisClipWidth=function(t){var n=this,e=Math.max(30,n.margin.left),r=Math.max(30,n.margin.right)
return t?n.width+2+e+r:n.margin.left+20},t.prototype.getAxisClipHeight=function(t){return(t?this.margin.bottom:this.margin.top+this.height)+20},t.prototype.getXAxisClipWidth=function(){return this.getAxisClipWidth(!this.config.axis_rotated)},t.prototype.getXAxisClipHeight=function(){return this.getAxisClipHeight(!this.config.axis_rotated)},t.prototype.getYAxisClipWidth=function(){var t=this
return t.getAxisClipWidth(t.config.axis_rotated)+(t.config.axis_y_inner?20:0)},t.prototype.getYAxisClipHeight=function(){return this.getAxisClipHeight(this.config.axis_rotated)},t.prototype.generateColor=function(){var t=this.config,n=this.d3,e=t.data_colors,r=_(t.color_pattern)?t.color_pattern:n.schemeCategory10,i=t.data_color,o=[]
return function(t){var n,a=t.id||t.data&&t.data.id||t
return e[a]instanceof Function?n=e[a](t):e[a]?n=e[a]:(o.indexOf(a)<0&&o.push(a),n=r[o.indexOf(a)%r.length],e[a]=n),i instanceof Function?i(n,t):n}},t.prototype.generateLevelColor=function(){var t=this.config,n=t.color_pattern,e=t.color_threshold,r="value"===e.unit,i=e.values&&e.values.length?e.values:[],o=e.max||100
return _(e)&&_(n)?function(t){var e,a=n[n.length-1]
for(e=0;e<i.length;e++)if((r?t:100*t/o)<i[e]){a=n[e]
break}return a}:null},t.prototype.getDefaultConfig=function(){var t={bindto:"#chart",svg_classname:void 0,size_width:void 0,size_height:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,resize_auto:!0,zoom_enabled:!1,zoom_initialRange:void 0,zoom_type:"scroll",zoom_disableDefaultBehavior:!1,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:function(){},zoom_onzoomstart:function(){},zoom_onzoomend:function(){},zoom_x_min:void 0,zoom_x_max:void 0,interaction_brighten:!0,interaction_enabled:!0,onmouseover:function(){},onmouseout:function(){},onresize:function(){},onresized:function(){},oninit:function(){},onrendered:function(){},transition_duration:350,data_epochs:"epochs",data_x:void 0,data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_idConverter:function(t){return t},data_names:{},data_classes:{},data_groups:[],data_axes:{},data_type:void 0,data_types:{},data_labels:{},data_order:"desc",data_regions:{},data_color:void 0,data_colors:{},data_hide:!1,data_filter:void 0,data_selection_enabled:!1,data_selection_grouped:!1,data_selection_isselectable:function(){return!0},data_selection_multiple:!0,data_selection_draggable:!1,data_stack_normalize:!1,data_onclick:function(){},data_onmouseover:function(){},data_onmouseout:function(){},data_onselected:function(){},data_onunselected:function(){},data_url:void 0,data_headers:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:void 0,data_keys:void 0,data_empty_label_text:"",subchart_show:!1,subchart_size_height:60,subchart_axis_x_show:!0,subchart_onbrush:function(){},color_pattern:[],color_threshold:{},legend_show:!0,legend_hide:!1,legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_onclick:void 0,legend_item_onmouseover:void 0,legend_item_onmouseout:void 0,legend_equally:!1,legend_padding:0,legend_item_tile_width:10,legend_item_tile_height:10,axis_rotated:!1,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_count:void 0,axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_multilineMax:0,axis_x_tick_width:null,axis_x_max:void 0,axis_x_min:void 0,axis_x_padding:{},axis_x_height:void 0,axis_x_selection:void 0,axis_x_label:{},axis_x_inner:void 0,axis_y_show:!0,axis_y_type:"linear",axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:void 0,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_rotate:0,axis_y_tick_count:void 0,axis_y_tick_time_type:void 0,axis_y_tick_time_interval:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y2_show:!1,axis_y2_type:"linear",axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:void 0,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_count:void 0,axis_y2_padding:{},axis_y2_default:void 0,grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:10,grid_focus_show:!0,grid_lines_front:!0,point_show:!0,point_r:2.5,point_sensitivity:10,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_select_r:void 0,line_connectNull:!1,line_step_type:"step",bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0,bar_space:0,area_zerobased:!0,area_above:!1,pie_label_show:!0,pie_label_format:void 0,pie_label_threshold:.05,pie_label_ratio:void 0,pie_expand:{},pie_expand_duration:50,pie_padAngle:0,gauge_fullCircle:!1,gauge_label_show:!0,gauge_labelLine_show:!0,gauge_label_format:void 0,gauge_min:0,gauge_max:100,gauge_startingAngle:-1*Math.PI/2,gauge_label_extents:void 0,gauge_units:void 0,gauge_width:void 0,gauge_arcs_minWidth:5,gauge_expand:{},gauge_expand_duration:50,donut_label_show:!0,donut_label_format:void 0,donut_label_threshold:.05,donut_label_ratio:void 0,donut_width:void 0,donut_title:"",donut_expand:{},donut_expand_duration:50,donut_padAngle:0,spline_interpolation_type:"cardinal",stanford_lines:[],stanford_regions:[],stanford_texts:[],stanford_scaleMin:void 0,stanford_scaleMax:void 0,stanford_scaleWidth:void 0,stanford_scaleFormat:void 0,stanford_scaleValues:void 0,stanford_colors:void 0,stanford_padding:{top:0,right:0,bottom:0,left:0},regions:[],tooltip_show:!0,tooltip_grouped:!0,tooltip_order:void 0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_horizontal:void 0,tooltip_position:void 0,tooltip_contents:function(t,n,e,r){return this.getTooltipContent?this.getTooltipContent(t,n,e,r):""},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"},tooltip_onshow:function(){},tooltip_onhide:function(){},title_text:void 0,title_padding:{top:0,right:0,bottom:0,left:0},title_position:"top-center"}
return Object.keys(this.additionalConfig).forEach((function(n){t[n]=this.additionalConfig[n]}),this),t},t.prototype.additionalConfig={},t.prototype.loadConfig=function(t){var n,e,r,i=this.config
function o(){var t=e.shift()
return t&&n&&"object"==typeof n&&t in n?(n=n[t],o()):t?void 0:n}Object.keys(i).forEach((function(a){n=t,e=a.split("_"),r=o(),l(r)&&(i[a]=r)}))},t.prototype.convertUrlToData=function(t,n,e,r,i){var o,a,u=this,s=n||"csv"
"json"===s?(o=u.d3.json,a=u.convertJsonToData):"tsv"===s?(o=u.d3.tsv,a=u.convertXsvToData):(o=u.d3.csv,a=u.convertXsvToData),o(t,e).then((function(t){i.call(u,a.call(u,t,r))})).catch((function(t){throw t}))},t.prototype.convertXsvToData=function(t){var n=t.columns
return 0===t.length?{keys:n,rows:[n.reduce((function(t,n){var e
return Object.assign(t,((e={})[n]=null,e))}),{})]}:{keys:n,rows:[].concat(t)}},t.prototype.convertJsonToData=function(t,n){var e,r,i=this,o=[]
return n?(n.x?(e=n.value.concat(n.x),i.config.data_x=n.x):e=n.value,o.push(e),t.forEach((function(t){var n=[]
e.forEach((function(e){var r=i.findValueInJson(t,e)
g(r)&&(r=null),n.push(r)})),o.push(n)})),r=i.convertRowsToData(o)):(Object.keys(t).forEach((function(n){o.push([n].concat(t[n]))})),r=i.convertColumnsToData(o)),r},t.prototype.findValueInJson=function(t,n){if(n in t)return t[n]
for(var e=(n=(n=n.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0;r<e.length;++r){var i=e[r]
if(!(i in t))return
t=t[i]}return t},t.prototype.convertRowsToData=function(t){for(var n=[],e=t[0],r=1;r<t.length;r++){for(var i={},o=0;o<t[r].length;o++){if(g(t[r][o]))throw new Error("Source data is missing a component at ("+r+","+o+")!")
i[e[o]]=t[r][o]}n.push(i)}return{keys:e,rows:n}},t.prototype.convertColumnsToData=function(t){for(var n=[],e=[],r=0;r<t.length;r++){for(var i=t[r][0],o=1;o<t[r].length;o++){if(g(n[o-1])&&(n[o-1]={}),g(t[r][o]))throw new Error("Source data is missing a component at ("+r+","+o+")!")
n[o-1][i]=t[r][o]}e.push(i)}return{keys:e,rows:n}},t.prototype.convertDataToTargets=function(t,n){var e,r,i,o,a,u=this,s=u.config
if(c(t)?o=Object.keys(t[0]):(o=t.keys,t=t.rows),i=o.filter(u.isX,u),u.isStanfordGraphType()){if(a=o.filter(u.isEpochs,u),r=o.filter(u.isNotXAndNotEpochs,u),1!==i.length||1!==a.length||1!==r.length)throw new Error("You must define the 'x' key name and the 'epochs' for Stanford Diagrams")}else r=o.filter(u.isNotX,u)
return r.forEach((function(e){var r=u.getXKey(e)
u.isCustomX()||u.isTimeSeries()?i.indexOf(r)>=0?u.data.xs[e]=(n&&u.data.xs[e]?u.data.xs[e]:[]).concat(t.map((function(t){return t[r]})).filter(y).map((function(t,n){return u.generateTargetX(t,e,n)}))):s.data_x?u.data.xs[e]=u.getOtherTargetXs():_(s.data_xs)&&(u.data.xs[e]=u.getXValuesOfXKey(r,u.data.targets)):u.data.xs[e]=t.map((function(t,n){return n}))})),r.forEach((function(t){if(!u.data.xs[t])throw new Error('x is not defined for id = "'+t+'".')})),(e=r.map((function(n,e){var r=s.data_idConverter(n)
return{id:r,id_org:n,values:t.map((function(t,i){var o,c,l=t[u.getXKey(n)],f=null===t[n]||isNaN(t[n])?null:+t[n]
return u.isCustomX()&&u.isCategorized()&&!g(l)?(0===e&&0===i&&(s.axis_x_categories=[]),-1===(o=s.axis_x_categories.indexOf(l))&&(o=s.axis_x_categories.length,s.axis_x_categories.push(l))):o=u.generateTargetX(l,n,i),(g(t[n])||u.data.xs[n].length<=i)&&(o=void 0),c={x:o,value:f,id:r},u.isStanfordGraphType()&&(c.epochs=t[a]),c})).filter((function(t){return l(t.x)}))}}))).forEach((function(t){var n
s.data_xSort&&(t.values=t.values.sort((function(t,n){return(t.x||0===t.x?t.x:1/0)-(n.x||0===n.x?n.x:1/0)}))),n=0,t.values.forEach((function(t){t.index=n++})),u.data.xs[t.id].sort((function(t,n){return t-n}))})),u.hasNegativeValue=u.hasNegativeValueInTargets(e),u.hasPositiveValue=u.hasPositiveValueInTargets(e),s.data_type&&u.setTargetType(u.mapToIds(e).filter((function(t){return!(t in s.data_types)})),s.data_type),e.forEach((function(t){u.addCache(t.id_org,t)})),e},t.prototype.isEpochs=function(t){var n=this.config
return n.data_epochs&&t===n.data_epochs},t.prototype.isX=function(t){var n,e,r,i=this.config
return i.data_x&&t===i.data_x||_(i.data_xs)&&(n=i.data_xs,e=t,r=!1,Object.keys(n).forEach((function(t){n[t]===e&&(r=!0)})),r)},t.prototype.isNotX=function(t){return!this.isX(t)},t.prototype.isNotXAndNotEpochs=function(t){return!this.isX(t)&&!this.isEpochs(t)},t.prototype.isStackNormalized=function(){return this.config.data_stack_normalize&&this.config.data_groups.length>0},t.prototype.isAxisNormalized=function(t){var n=this
return!!n.isStackNormalized()&&n.data.targets.filter((function(e){return n.axis.getId(e.id)===t})).some((function(t){return n.isTargetNormalized(t.id)}))},t.prototype.isTargetNormalized=function(t){return this.isStackNormalized()&&this.config.data_groups.some((function(n){return n.includes(t)}))},t.prototype.getXKey=function(t){var n=this.config
return n.data_x?n.data_x:_(n.data_xs)?n.data_xs[t]:null},t.prototype.getTotalPerIndex=function(t){var n=this
if(!n.isStackNormalized())return null
var e=n.getFromCache("getTotalPerIndex")
if(void 0!==e)return e[t]
var r={y:[],y2:[]}
return n.data.targets.filter((function(t){return n.isTargetNormalized(t.id)})).filter((function(t){return n.isTargetToShow(t.id)})).forEach((function(t){var e=r[n.axis.getId(t.id)]
t.values.forEach((function(t,n){e[n]||(e[n]=0),e[n]+=d(t.value)?t.value:0}))})),n.addToCache("getTotalPerIndex",r),r[t]},t.prototype.getTotalDataSum=function(){var t=this,n=t.getFromCache("getTotalDataSum")
if(void 0!==n)return n
var e,r=(e=t.data.targets.filter((function(n){return t.isTargetToShow(n.id)})).map((function(t){return t.values})),Array.isArray(e)?[].concat.apply([],e):[]).map((function(t){return t.value})).reduce((function(t,n){return t+n}),0)
return t.addToCache("getTotalDataSum",r),r},t.prototype.getXValuesOfXKey=function(t,n){var e,r=this
return(n&&_(n)?r.mapToIds(n):[]).forEach((function(n){r.getXKey(n)===t&&(e=r.data.xs[n])})),e},t.prototype.getXValue=function(t,n){var e=this
return t in e.data.xs&&e.data.xs[t]&&y(e.data.xs[t][n])?e.data.xs[t][n]:n},t.prototype.getOtherTargetXs=function(){var t=Object.keys(this.data.xs)
return t.length?this.data.xs[t[0]]:null},t.prototype.getOtherTargetX=function(t){var n=this.getOtherTargetXs()
return n&&t<n.length?n[t]:null},t.prototype.addXs=function(t){var n=this
Object.keys(t).forEach((function(e){n.config.data_xs[e]=t[e]}))},t.prototype.addName=function(t){var n
return t&&(n=this.config.data_names[t.id],t.name=void 0!==n?n:t.id),t},t.prototype.getValueOnIndex=function(t,n){var e=t.filter((function(t){return t.index===n}))
return e.length?e[0]:null},t.prototype.updateTargetX=function(t,n){var e=this
t.forEach((function(t){t.values.forEach((function(r,i){r.x=e.generateTargetX(n[i],t.id,i)})),e.data.xs[t.id]=n}))},t.prototype.updateTargetXs=function(t,n){var e=this
t.forEach((function(t){n[t.id]&&e.updateTargetX([t],n[t.id])}))},t.prototype.generateTargetX=function(t,n,e){var r=this
return r.isTimeSeries()?t?r.parseDate(t):r.parseDate(r.getXValue(n,e)):r.isCustomX()&&!r.isCategorized()?y(t)?+t:r.getXValue(n,e):e},t.prototype.cloneTarget=function(t){return{id:t.id,id_org:t.id_org,values:t.values.map((function(t){return{x:t.x,value:t.value,id:t.id}}))}},t.prototype.getMaxDataCount=function(){return this.d3.max(this.data.targets,(function(t){return t.values.length}))},t.prototype.mapToIds=function(t){return t.map((function(t){return t.id}))},t.prototype.mapToTargetIds=function(t){return t?[].concat(t):this.mapToIds(this.data.targets)},t.prototype.hasTarget=function(t,n){var e,r=this.mapToIds(t)
for(e=0;e<r.length;e++)if(r[e]===n)return!0
return!1},t.prototype.isTargetToShow=function(t){return this.hiddenTargetIds.indexOf(t)<0},t.prototype.isLegendToShow=function(t){return this.hiddenLegendIds.indexOf(t)<0},t.prototype.getTargetsToShow=function(){return this.filterTargetsToShow(this.data.targets)},t.prototype.filterTargetsToShow=function(t){var n=this
return t.filter((function(t){return n.isTargetToShow(t.id)}))},t.prototype.getTargets=function(){return this.data.targets},t.prototype.mapTargetsToUniqueXs=function(t){var n=this,e=n.d3.set(n.d3.merge(t.map((function(t){return t.values.map((function(t){return+t.x}))})))).values()
return(e=n.isTimeSeries()?e.map((function(t){return new Date(+t)})):e.map((function(t){return+t}))).sort((function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}))},t.prototype.addHiddenTargetIds=function(t){t=t instanceof Array?t:new Array(t)
for(var n=0;n<t.length;n++)this.hiddenTargetIds.indexOf(t[n])<0&&(this.hiddenTargetIds=this.hiddenTargetIds.concat(t[n]))
this.resetCache()},t.prototype.removeHiddenTargetIds=function(t){this.hiddenTargetIds=this.hiddenTargetIds.filter((function(n){return t.indexOf(n)<0})),this.resetCache()},t.prototype.addHiddenLegendIds=function(t){t=t instanceof Array?t:new Array(t)
for(var n=0;n<t.length;n++)this.hiddenLegendIds.indexOf(t[n])<0&&(this.hiddenLegendIds=this.hiddenLegendIds.concat(t[n]))},t.prototype.removeHiddenLegendIds=function(t){this.hiddenLegendIds=this.hiddenLegendIds.filter((function(n){return t.indexOf(n)<0}))},t.prototype.getValuesAsIdKeyed=function(t){var n={}
return t.forEach((function(t){n[t.id]=[],t.values.forEach((function(e){n[t.id].push(e.value)}))})),n},t.prototype.checkValueInTargets=function(t,n){var e,r,i,o=Object.keys(t)
for(e=0;e<o.length;e++)for(i=t[o[e]].values,r=0;r<i.length;r++)if(n(i[r].value))return!0
return!1},t.prototype.hasNegativeValueInTargets=function(t){return this.checkValueInTargets(t,(function(t){return t<0}))},t.prototype.hasPositiveValueInTargets=function(t){return this.checkValueInTargets(t,(function(t){return t>0}))},t.prototype.isOrderDesc=function(){var t=this.config
return"string"==typeof t.data_order&&"desc"===t.data_order.toLowerCase()},t.prototype.isOrderAsc=function(){var t=this.config
return"string"==typeof t.data_order&&"asc"===t.data_order.toLowerCase()},t.prototype.getOrderFunction=function(){var t=this,n=t.config,e=t.isOrderAsc(),r=t.isOrderDesc()
if(e||r){var i=function(t,n){return t+Math.abs(n.value)}
return function(t,n){var r=t.values.reduce(i,0),o=n.values.reduce(i,0)
return e?o-r:r-o}}if(h(n.data_order))return n.data_order
if(c(n.data_order)){var o=n.data_order
return function(t,n){return o.indexOf(t.id)-o.indexOf(n.id)}}},t.prototype.orderTargets=function(t){var n=this.getOrderFunction()
return n&&t.sort(n),t},t.prototype.filterByIndex=function(t,n){return this.d3.merge(t.map((function(t){return t.values.filter((function(t){return t.index===n}))})))},t.prototype.filterByX=function(t,n){return this.d3.merge(t.map((function(t){return t.values}))).filter((function(t){return t.x-n==0}))},t.prototype.filterRemoveNull=function(t){return t.filter((function(t){return y(t.value)}))},t.prototype.filterByXDomain=function(t,n){return t.map((function(t){return{id:t.id,id_org:t.id_org,values:t.values.filter((function(t){return n[0]<=t.x&&t.x<=n[1]}))}}))},t.prototype.hasDataLabel=function(){var t=this.config
return!("boolean"!=typeof t.data_labels||!t.data_labels)||!("object"!=typeof t.data_labels||!_(t.data_labels))},t.prototype.getDataLabelLength=function(t,n,e){var r=this,i=[0,0]
return r.selectChart.select("svg").selectAll(".dummy").data([t,n]).enter().append("text").text((function(t){return r.dataLabelFormat(t.id)(t)})).each((function(t,n){i[n]=1.3*s(this)[e]})).remove(),i},t.prototype.isNoneArc=function(t){return this.hasTarget(this.data.targets,t.id)},t.prototype.isArc=function(t){return"data"in t&&this.hasTarget(this.data.targets,t.data.id)},t.prototype.findClosestFromTargets=function(t,n){var e=this,r=t.map((function(t){return e.findClosest(t.values,n,e.config.tooltip_horizontal?e.horizontalDistance.bind(e):e.dist.bind(e),e.config.point_sensitivity)})).filter((function(t){return t}))
return 0===r.length?void 0:1===r.length?r[0]:e.findClosest(r,n,e.dist.bind(e))},t.prototype.findClosestFromTargetsByX=function(t,n){var e,r
return t.forEach((function(t){t.values.forEach((function(t){var i=Math.abs(n-t.x);(void 0===r||i<r)&&(e=t,r=i)}))})),e},t.prototype.findClosest=function(t,n,e,r){void 0===r&&(r=1/0)
var i,o=this
return t.filter((function(t){return t&&o.isBarType(t.id)})).forEach((function(t){if(!i){var e=o.main.select("."+b.bars+o.getTargetSelectorSuffix(t.id)+" ."+b.bar+"-"+t.index).node()
o.isWithinBar(n,e)&&(i=t)}})),t.filter((function(t){return t&&!o.isBarType(t.id)})).forEach((function(t){var o=e(t,n)
o<r&&(r=o,i=t)})),i},t.prototype.dist=function(t,n){var e=this,r=e.config,i=r.axis_rotated?1:0,o=r.axis_rotated?0:1,a=e.circleY(t,t.index),u=e.x(t.x)
return Math.sqrt(Math.pow(u-n[i],2)+Math.pow(a-n[o],2))},t.prototype.horizontalDistance=function(t,n){var e=this.config.axis_rotated?1:0,r=this.x(t.x)
return Math.abs(r-n[e])},t.prototype.convertValuesToStep=function(t){var n,e=[].concat(t)
if(!this.isCategorized())return t
for(n=t.length+1;0<n;n--)e[n]=e[n-1]
return e[0]={x:e[0].x-1,value:e[0].value,id:e[0].id},e[t.length+1]={x:e[t.length].x+1,value:e[t.length].value,id:e[t.length].id},e},t.prototype.getRatio=function(t,n,e){void 0===e&&(e=!1)
var r=this,i=r.api,o=0
if(n&&i.data.shown.call(i).length)if(o=n.ratio||n.value,"arc"===t)if(r.hasType("gauge"))o=(n.endAngle-n.startAngle)/(Math.PI*(r.config.gauge_fullCircle?2:1))
else{var a=r.getTotalDataSum()
o=n.value/a}else"index"===t&&(a=r.getTotalPerIndex(r.axis.getId(n.id)),n.ratio=d(n.value)&&a&&a[n.index]>0?n.value/a[n.index]:0,o=n.ratio)
return e&&o?100*o:o},t.prototype.updateDataAttributes=function(t,n){var e=this.config["data_"+t]
return void 0===n||(Object.keys(n).forEach((function(t){e[t]=n[t]})),this.redraw({withLegend:!0})),e},t.prototype.load=function(t,n){var e=this
t&&(n.filter&&(t=t.filter(n.filter)),(n.type||n.types)&&t.forEach((function(t){var r=n.types&&n.types[t.id]?n.types[t.id]:n.type
e.setTargetType(t.id,r)})),e.data.targets.forEach((function(n){for(var e=0;e<t.length;e++)if(n.id===t[e].id){n.values=t[e].values,t.splice(e,1)
break}})),e.data.targets=e.data.targets.concat(t)),e.updateTargets(e.data.targets),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),n.done&&n.done()},t.prototype.loadFromArgs=function(t){var n=this
n.resetCache(),t.data?n.load(n.convertDataToTargets(t.data),t):t.url?n.convertUrlToData(t.url,t.mimeType,t.headers,t.keys,(function(e){n.load(n.convertDataToTargets(e),t)})):t.json?n.load(n.convertDataToTargets(n.convertJsonToData(t.json,t.keys)),t):t.rows?n.load(n.convertDataToTargets(n.convertRowsToData(t.rows)),t):t.columns?n.load(n.convertDataToTargets(n.convertColumnsToData(t.columns)),t):n.load(null,t)},t.prototype.unload=function(t,n){var e=this
e.resetCache(),n||(n=function(){}),(t=t.filter((function(t){return e.hasTarget(e.data.targets,t)})))&&0!==t.length?(e.svg.selectAll(t.map((function(t){return e.selectorTarget(t)}))).transition().style("opacity",0).remove().call(e.endall,n),t.forEach((function(t){e.withoutFadeIn[t]=!1,e.legend&&e.legend.selectAll("."+b.legendItem+e.getTargetSelectorSuffix(t)).remove(),e.data.targets=e.data.targets.filter((function(n){return n.id!==t}))}))):n()},t.prototype.getYDomainMin=function(t){var n,e,r,i,o,a,u=this,s=u.config,c=u.mapToIds(t),l=u.getValuesAsIdKeyed(t)
if(s.data_groups.length>0)for(a=u.hasNegativeValueInTargets(t),n=0;n<s.data_groups.length;n++)if(i=s.data_groups[n].filter((function(t){return c.indexOf(t)>=0})),0!==i.length)for(r=i[0],a&&l[r]&&l[r].forEach((function(t,n){l[r][n]=t<0?t:0})),e=1;e<i.length;e++)o=i[e],l[o]&&l[o].forEach((function(t,n){u.axis.getId(o)!==u.axis.getId(r)||!l[r]||a&&+t>0||(l[r][n]+=+t)}))
return u.d3.min(Object.keys(l).map((function(t){return u.d3.min(l[t])})))},t.prototype.getYDomainMax=function(t){var n,e,r,i,o,a,u=this,s=u.config,c=u.mapToIds(t),l=u.getValuesAsIdKeyed(t)
if(s.data_groups.length>0)for(a=u.hasPositiveValueInTargets(t),n=0;n<s.data_groups.length;n++)if(i=s.data_groups[n].filter((function(t){return c.indexOf(t)>=0})),0!==i.length)for(r=i[0],a&&l[r]&&l[r].forEach((function(t,n){l[r][n]=t>0?t:0})),e=1;e<i.length;e++)o=i[e],l[o]&&l[o].forEach((function(t,n){u.axis.getId(o)!==u.axis.getId(r)||!l[r]||a&&+t<0||(l[r][n]+=+t)}))
return u.d3.max(Object.keys(l).map((function(t){return u.d3.max(l[t])})))},t.prototype.getYDomain=function(t,n,e){var r=this,i=r.config
if(r.isAxisNormalized(n))return[0,100]
var a,u,s,c,l,f,h,d,p,g,v=t.filter((function(t){return r.axis.getId(t.id)===n})),m=e?r.filterByXDomain(v,e):v,x="y2"===n?i.axis_y2_min:i.axis_y_min,b="y2"===n?i.axis_y2_max:i.axis_y_max,w=r.getYDomainMin(m),S=r.getYDomainMax(m),A="y2"===n?i.axis_y2_center:i.axis_y_center,M=r.hasType("bar",m)&&i.bar_zerobased||r.hasType("area",m)&&i.area_zerobased,T="y2"===n?i.axis_y2_inverted:i.axis_y_inverted,C=r.hasDataLabel()&&i.axis_rotated,P=r.hasDataLabel()&&!i.axis_rotated
if(w=y(x)?x:y(b)?w<b?w:b-10:w,S=y(b)?b:y(x)?x<S?S:x+10:S,0===m.length)return"y2"===n?r.y2.domain():r.y.domain()
if(isNaN(w)&&(w=0),isNaN(S)&&(S=w),w===S&&(w<0?S=0:w=0),p=w>=0&&S>=0,g=w<=0&&S<=0,(y(x)&&p||y(b)&&g)&&(M=!1),M&&(p&&(w=0),g&&(S=0)),s=c=.1*(u=Math.abs(S-w)),void 0!==A&&(S=A+(l=Math.max(Math.abs(w),Math.abs(S))),w=A-l),C)f=r.getDataLabelLength(w,S,"width"),h=o(r.y.range()),s+=u*((d=[f[0]/h,f[1]/h])[1]/(1-d[0]-d[1])),c+=u*(d[0]/(1-d[0]-d[1]))
else if(P){f=r.getDataLabelLength(w,S,"height")
var E=r.getY(i["axis_"+n+"_type"],[0,i.axis_rotated?r.width:r.height],[0,u])
s+=E(f[1]),c+=E(f[0])}return"y"===n&&_(i.axis_y_padding)&&(s=r.axis.getPadding(i.axis_y_padding,"top",s,u),c=r.axis.getPadding(i.axis_y_padding,"bottom",c,u)),"y2"===n&&_(i.axis_y2_padding)&&(s=r.axis.getPadding(i.axis_y2_padding,"top",s,u),c=r.axis.getPadding(i.axis_y2_padding,"bottom",c,u)),M&&(p&&(c=w),g&&(s=-S)),a=[w-c,S+s],T?a.reverse():a},t.prototype.getXDomainMin=function(t){var n=this,e=n.config
return l(e.axis_x_min)?n.isTimeSeries()?this.parseDate(e.axis_x_min):e.axis_x_min:n.d3.min(t,(function(t){return n.d3.min(t.values,(function(t){return t.x}))}))},t.prototype.getXDomainMax=function(t){var n=this,e=n.config
return l(e.axis_x_max)?n.isTimeSeries()?this.parseDate(e.axis_x_max):e.axis_x_max:n.d3.max(t,(function(t){return n.d3.max(t.values,(function(t){return t.x}))}))},t.prototype.getXDomainPadding=function(t){var n,e,r,i,o=this,a=o.config,u=t[1]-t[0]
return e=o.isCategorized()?0:o.hasType("bar")?(n=o.getMaxDataCount())>1?u/(n-1)/2:.5:.01*u,"object"==typeof a.axis_x_padding&&_(a.axis_x_padding)?(r=y(a.axis_x_padding.left)?a.axis_x_padding.left:e,i=y(a.axis_x_padding.right)?a.axis_x_padding.right:e):r=i="number"==typeof a.axis_x_padding?a.axis_x_padding:e,{left:r,right:i}},t.prototype.getXDomain=function(t){var n=this,e=[n.getXDomainMin(t),n.getXDomainMax(t)],r=e[0],i=e[1],o=n.getXDomainPadding(e),a=0,u=0
return r-i!=0||n.isCategorized()||(n.isTimeSeries()?(r=new Date(.5*r.getTime()),i=new Date(1.5*i.getTime())):(r=0===r?1:.5*r,i=0===i?-1:1.5*i)),(r||0===r)&&(a=n.isTimeSeries()?new Date(r.getTime()-o.left):r-o.left),(i||0===i)&&(u=n.isTimeSeries()?new Date(i.getTime()+o.right):i+o.right),[a,u]},t.prototype.updateXDomain=function(t,n,e,r,i){var o=this,a=o.config
return e&&(o.x.domain(i||o.d3.extent(o.getXDomain(t))),o.orgXDomain=o.x.domain(),a.zoom_enabled&&o.zoom.update(),o.subX.domain(o.x.domain()),o.brush&&o.brush.updateScale(o.subX)),n&&o.x.domain(i||(!o.brush||o.brush.empty()?o.orgXDomain:o.brush.selectionAsValue())),r&&o.x.domain(o.trimXDomain(o.x.orgDomain())),o.x.domain()},t.prototype.trimXDomain=function(t){var n=this.getZoomDomain(),e=n[0],r=n[1]
return t[0]<=e&&(t[1]=+t[1]+(e-t[0]),t[0]=e),r<=t[1]&&(t[0]=+t[0]-(t[1]-r),t[1]=r),t},t.prototype.drag=function(t){var n,e,r,i,o,a,s,c,l=this,f=l.config,h=l.main,d=l.d3
l.hasArcType()||f.data_selection_enabled&&f.data_selection_multiple&&(n=l.dragStart[0],e=l.dragStart[1],r=t[0],i=t[1],o=Math.min(n,r),a=Math.max(n,r),s=f.data_selection_grouped?l.margin.top:Math.min(e,i),c=f.data_selection_grouped?l.height:Math.max(e,i),h.select("."+b.dragarea).attr("x",o).attr("y",s).attr("width",a-o).attr("height",c-s),h.selectAll("."+b.shapes).selectAll("."+b.shape).each((function(t,n){if(f.data_selection_isselectable(t)){var e,r,i,h,p,g,y=d.select(this),_=y.classed(b.SELECTED),v=y.classed(b.INCLUDED),m=!1
if(y.classed(b.circle))e=1*y.attr("cx"),r=1*y.attr("cy"),p=l.togglePoint,m=o<e&&e<a&&s<r&&r<c
else{if(!y.classed(b.bar))return
e=(g=u(this)).x,r=g.y,i=g.width,h=g.height,p=l.togglePath,m=!(a<e||e+i<o||c<r||r+h<s)}m^v&&(y.classed(b.INCLUDED,!v),y.classed(b.SELECTED,!_),p.call(l,!_,y,t,n))}})))},t.prototype.dragstart=function(t){var n=this,e=n.config
n.hasArcType()||e.data_selection_enabled&&(n.dragStart=t,n.main.select("."+b.chart).append("rect").attr("class",b.dragarea).style("opacity",.1),n.dragging=!0)},t.prototype.dragend=function(){var t=this,n=t.config
t.hasArcType()||n.data_selection_enabled&&(t.main.select("."+b.dragarea).transition().duration(100).style("opacity",0).remove(),t.main.selectAll("."+b.shape).classed(b.INCLUDED,!1),t.dragging=!1)},t.prototype.getYFormat=function(t){var n=this,e=t&&!n.hasType("gauge")?n.defaultArcValueFormat:n.yFormat,r=t&&!n.hasType("gauge")?n.defaultArcValueFormat:n.y2Format
return function(t,i,o){return("y2"===n.axis.getId(o)?r:e).call(n,t,i)}},t.prototype.yFormat=function(t){var n=this.config
return(n.axis_y_tick_format?n.axis_y_tick_format:this.defaultValueFormat)(t)},t.prototype.y2Format=function(t){var n=this.config
return(n.axis_y2_tick_format?n.axis_y2_tick_format:this.defaultValueFormat)(t)},t.prototype.defaultValueFormat=function(t){return y(t)?+t:""},t.prototype.defaultArcValueFormat=function(t,n){return(100*n).toFixed(1)+"%"},t.prototype.dataLabelFormat=function(t){var n=this.config.data_labels,e=function(t){return y(t)?+t:""}
return"function"==typeof n.format?n.format:"object"==typeof n.format?n.format[t]?!0===n.format[t]?e:n.format[t]:function(){return""}:e},t.prototype.initGrid=function(){var t=this,n=t.config,e=t.d3
t.grid=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",b.grid),n.grid_x_show&&t.grid.append("g").attr("class",b.xgrids),n.grid_y_show&&t.grid.append("g").attr("class",b.ygrids),n.grid_focus_show&&t.grid.append("g").attr("class",b.xgridFocus).append("line").attr("class",b.xgridFocus),t.xgrid=e.selectAll([]),n.grid_lines_front||t.initGridLines()},t.prototype.initGridLines=function(){var t=this,n=t.d3
t.gridLines=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",b.grid+" "+b.gridLines),t.gridLines.append("g").attr("class",b.xgridLines),t.gridLines.append("g").attr("class",b.ygridLines),t.xgridLines=n.selectAll([])},t.prototype.updateXGrid=function(t){var n=this,e=n.config,r=n.d3,i=n.generateGridData(e.grid_x_type,n.x),o=n.isCategorized()?n.xAxis.tickOffset():0
n.xgridAttr=e.axis_rotated?{x1:0,x2:n.width,y1:function(t){return n.x(t)-o},y2:function(t){return n.x(t)-o}}:{x1:function(t){return n.x(t)+o},x2:function(t){return n.x(t)+o},y1:0,y2:n.height},n.xgridAttr.opacity=function(){return+r.select(this).attr(e.axis_rotated?"y1":"x1")===(e.axis_rotated?n.height:0)?0:1}
var a=n.main.select("."+b.xgrids).selectAll("."+b.xgrid).data(i),u=a.enter().append("line").attr("class",b.xgrid).attr("x1",n.xgridAttr.x1).attr("x2",n.xgridAttr.x2).attr("y1",n.xgridAttr.y1).attr("y2",n.xgridAttr.y2).style("opacity",0)
n.xgrid=u.merge(a),t||n.xgrid.attr("x1",n.xgridAttr.x1).attr("x2",n.xgridAttr.x2).attr("y1",n.xgridAttr.y1).attr("y2",n.xgridAttr.y2).style("opacity",n.xgridAttr.opacity),a.exit().remove()},t.prototype.updateYGrid=function(){var t=this,n=t.config,e=t.yAxis.tickValues()||t.y.ticks(n.grid_y_ticks),r=t.main.select("."+b.ygrids).selectAll("."+b.ygrid).data(e),i=r.enter().append("line").attr("class",b.ygrid)
t.ygrid=i.merge(r),t.ygrid.attr("x1",n.axis_rotated?t.y:0).attr("x2",n.axis_rotated?t.y:t.width).attr("y1",n.axis_rotated?0:t.y).attr("y2",n.axis_rotated?t.height:t.y),r.exit().remove(),t.smoothLines(t.ygrid,"grid")},t.prototype.gridTextAnchor=function(t){return t.position?t.position:"end"},t.prototype.gridTextDx=function(t){return"start"===t.position?4:"middle"===t.position?0:-4},t.prototype.xGridTextX=function(t){return"start"===t.position?-this.height:"middle"===t.position?-this.height/2:0},t.prototype.yGridTextX=function(t){return"start"===t.position?0:"middle"===t.position?this.width/2:this.width},t.prototype.updateGrid=function(t){var n,e,r,i,o=this,a=o.main,u=o.config,s=o.xv.bind(o),c=o.yv.bind(o),l=o.xGridTextX.bind(o),f=o.yGridTextX.bind(o)
o.grid.style("visibility",o.hasArcType()?"hidden":"visible"),a.select("line."+b.xgridFocus).style("visibility","hidden"),u.grid_x_show&&o.updateXGrid(),(e=(n=a.select("."+b.xgridLines).selectAll("."+b.xgridLine).data(u.grid_x_lines)).enter().append("g").attr("class",(function(t){return b.xgridLine+(t.class?" "+t.class:"")}))).append("line").attr("x1",u.axis_rotated?0:s).attr("x2",u.axis_rotated?o.width:s).attr("y1",u.axis_rotated?s:0).attr("y2",u.axis_rotated?s:o.height).style("opacity",0),e.append("text").attr("text-anchor",o.gridTextAnchor).attr("transform",u.axis_rotated?"":"rotate(-90)").attr("x",u.axis_rotated?f:l).attr("y",s).attr("dx",o.gridTextDx).attr("dy",-5).style("opacity",0),o.xgridLines=e.merge(n),n.exit().transition().duration(t).style("opacity",0).remove(),u.grid_y_show&&o.updateYGrid(),(i=(r=a.select("."+b.ygridLines).selectAll("."+b.ygridLine).data(u.grid_y_lines)).enter().append("g").attr("class",(function(t){return b.ygridLine+(t.class?" "+t.class:"")}))).append("line").attr("x1",u.axis_rotated?c:0).attr("x2",u.axis_rotated?c:o.width).attr("y1",u.axis_rotated?0:c).attr("y2",u.axis_rotated?o.height:c).style("opacity",0),i.append("text").attr("text-anchor",o.gridTextAnchor).attr("transform",u.axis_rotated?"rotate(-90)":"").attr("x",u.axis_rotated?l:f).attr("y",c).attr("dx",o.gridTextDx).attr("dy",-5).style("opacity",0),o.ygridLines=i.merge(r),o.ygridLines.select("line").transition().duration(t).attr("x1",u.axis_rotated?c:0).attr("x2",u.axis_rotated?c:o.width).attr("y1",u.axis_rotated?0:c).attr("y2",u.axis_rotated?o.height:c).style("opacity",1),o.ygridLines.select("text").transition().duration(t).attr("x",u.axis_rotated?o.xGridTextX.bind(o):o.yGridTextX.bind(o)).attr("y",c).text((function(t){return t.text})).style("opacity",1),r.exit().transition().duration(t).style("opacity",0).remove()},t.prototype.redrawGrid=function(t,n){var e=this,r=e.config,i=e.xv.bind(e),o=e.xgridLines.select("line"),a=e.xgridLines.select("text")
return[(t?o.transition(n):o).attr("x1",r.axis_rotated?0:i).attr("x2",r.axis_rotated?e.width:i).attr("y1",r.axis_rotated?i:0).attr("y2",r.axis_rotated?i:e.height).style("opacity",1),(t?a.transition(n):a).attr("x",r.axis_rotated?e.yGridTextX.bind(e):e.xGridTextX.bind(e)).attr("y",i).text((function(t){return t.text})).style("opacity",1)]},t.prototype.showXGridFocus=function(t){var n=this,e=n.config,r=t.filter((function(t){return t&&y(t.value)})),i=n.main.selectAll("line."+b.xgridFocus),o=n.xx.bind(n)
e.tooltip_show&&(n.hasType("stanford")||n.hasArcType()||(i.style("visibility","visible").data([r[0]]).attr(e.axis_rotated?"y1":"x1",o).attr(e.axis_rotated?"y2":"x2",o),n.smoothLines(i,"grid")))},t.prototype.hideXGridFocus=function(){this.main.select("line."+b.xgridFocus).style("visibility","hidden")},t.prototype.updateXgridFocus=function(){var t=this,n=t.config
t.main.select("line."+b.xgridFocus).attr("x1",n.axis_rotated?0:-10).attr("x2",n.axis_rotated?t.width:-10).attr("y1",n.axis_rotated?-10:0).attr("y2",n.axis_rotated?-10:t.height)},t.prototype.generateGridData=function(t,n){var e,r,i,o,a=[],u=this.main.select("."+b.axisX).selectAll(".tick").size()
if("year"===t)for(r=(e=this.getXDomain())[0].getFullYear(),i=e[1].getFullYear(),o=r;o<=i;o++)a.push(new Date(o+"-01-01 00:00:00"))
else(a=n.ticks(10)).length>u&&(a=a.filter((function(t){return(""+t).indexOf(".")<0})))
return a},t.prototype.getGridFilterToRemove=function(t){return t?function(n){var e=!1
return[].concat(t).forEach((function(t){("value"in t&&n.value===t.value||"class"in t&&n.class===t.class)&&(e=!0)})),e}:function(){return!0}},t.prototype.removeGridLines=function(t,n){var e=this,r=e.config,i=e.getGridFilterToRemove(t),o=function(t){return!i(t)},a=n?b.xgridLines:b.ygridLines,u=n?b.xgridLine:b.ygridLine
e.main.select("."+a).selectAll("."+u).filter(i).transition().duration(r.transition_duration).style("opacity",0).remove(),n?r.grid_x_lines=r.grid_x_lines.filter(o):r.grid_y_lines=r.grid_y_lines.filter(o)},t.prototype.initEventRect=function(){var t=this,n=t.config
t.main.select("."+b.chart).append("g").attr("class",b.eventRects).style("fill-opacity",0),t.eventRect=t.main.select("."+b.eventRects).append("rect").attr("class",b.eventRect),n.zoom_enabled&&t.zoom&&(t.eventRect.call(t.zoom).on("dblclick.zoom",null),n.zoom_initialRange&&t.eventRect.transition().duration(0).call(t.zoom.transform,t.zoomTransform(n.zoom_initialRange)))},t.prototype.redrawEventRect=function(){var t=this,n=t.d3,e=t.config
function r(){t.svg.select("."+b.eventRect).style("cursor",null),t.hideXGridFocus(),t.hideTooltip(),t.unexpandCircles(),t.unexpandBars()}var i=function(n,r){return r&&(t.isBarType(r.id)||t.dist(r,n)<e.point_sensitivity)},o=function(n){return n?t.addName(Object.assign({},n)):null}
t.main.select("."+b.eventRects).style("cursor",e.zoom_enabled?e.axis_rotated?"ns-resize":"ew-resize":null),t.eventRect.attr("x",0).attr("y",0).attr("width",t.width).attr("height",t.height).on("mouseout",e.interaction_enabled?function(){e&&(t.hasArcType()||(t.mouseover&&(e.data_onmouseout.call(t.api,t.mouseover),t.mouseover=void 0),r()))}:null).on("mousemove",e.interaction_enabled?function(){if(!t.dragging){var a=t.getTargetsToShow()
if(!t.hasArcType(a)){var u,s=n.mouse(this),c=o(t.findClosestFromTargets(a,s)),l=i(s,c)
if(!t.mouseover||c&&c.id===t.mouseover.id&&c.index===t.mouseover.index||(e.data_onmouseout.call(t.api,t.mouseover),t.mouseover=void 0),c&&!t.mouseover&&(e.data_onmouseover.call(t.api,c),t.mouseover=c),t.svg.select("."+b.eventRect).style("cursor",l?"pointer":null),!e.tooltip_grouped||t.hasType("stanford",a))c&&(u=[c])
else{var f=void 0
if(c)f=c
else{var h=e.axis_rotated?s[1]:s[0]
f=t.findClosestFromTargetsByX(a,t.x.invert(h))}f&&(u=t.filterByX(a,f.x))}if(!u||0===u.length)return r()
u=u.map(o),t.showTooltip(u,this),e.point_focus_expand_enabled&&(t.unexpandCircles(),u.forEach((function(n){t.expandCircles(n.index,n.id,!1)}))),t.unexpandBars(),u.forEach((function(n){t.expandBars(n.index,n.id,!1)})),t.showXGridFocus(u)}}}:null).on("click",e.interaction_enabled?function(){var r=t.getTargetsToShow()
if(!t.hasArcType(r)){var a=n.mouse(this),u=o(t.findClosestFromTargets(r,a))
if(i(a,u)&&((!e.data_selection_grouped||t.isStanfordType(u)?[u]:t.filterByX(r,u.x)).forEach((function(n){t.main.selectAll("."+b.shapes+t.getTargetSelectorSuffix(n.id)).selectAll("."+b.shape+"-"+n.index).each((function(){(e.data_selection_grouped||t.isWithinShape(this,n))&&t.toggleShape(this,n,n.index)}))})),u)){var s=t.main.selectAll("."+b.shapes+t.getTargetSelectorSuffix(u.id)).select("."+b.shape+"-"+u.index)
e.data_onclick.call(t.api,u,s.node())}}}:null).call(e.interaction_enabled&&e.data_selection_draggable&&t.drag?n.drag().on("drag",(function(){t.drag(n.mouse(this))})).on("start",(function(){t.dragstart(n.mouse(this))})).on("end",(function(){t.dragend()})):function(){})},t.prototype.getMousePosition=function(t){return[this.x(t.x),this.getYScale(t.id)(t.value)]},t.prototype.dispatchEvent=function(t,n){var e="."+b.eventRect,r=this.main.select(e).node(),i=r.getBoundingClientRect(),o=i.left+(n?n[0]:0),a=i.top+(n?n[1]:0),u=document.createEvent("MouseEvents")
u.initMouseEvent(t,!0,!0,window,0,o,a,o,a,!1,!1,!1,!1,0,null),r.dispatchEvent(u)},t.prototype.initLegend=function(){var t=this
if(t.legendItemTextBox={},t.legendHasRendered=!1,t.legend=t.svg.append("g").attr("transform",t.getTranslate("legend")),!t.config.legend_show)return t.legend.style("visibility","hidden"),void(t.hiddenLegendIds=t.mapToIds(t.data.targets))
t.updateLegendWithDefaults()},t.prototype.updateLegendWithDefaults=function(){var t=this
t.updateLegend(t.mapToIds(t.data.targets),{withTransform:!1,withTransitionForTransform:!1,withTransition:!1})},t.prototype.updateSizeForLegend=function(t,n){var e=this,r=e.config,i={top:e.isLegendTop?e.getCurrentPaddingTop()+r.legend_inset_y+5.5:e.currentHeight-t-e.getCurrentPaddingBottom()-r.legend_inset_y,left:e.isLegendLeft?e.getCurrentPaddingLeft()+r.legend_inset_x+.5:e.currentWidth-n-e.getCurrentPaddingRight()-r.legend_inset_x+.5}
e.margin3={top:e.isLegendRight?0:e.isLegendInset?i.top:e.currentHeight-t,right:NaN,bottom:0,left:e.isLegendRight?e.currentWidth-n:e.isLegendInset?i.left:0}},t.prototype.transformLegend=function(t){var n=this;(t?n.legend.transition():n.legend).attr("transform",n.getTranslate("legend"))},t.prototype.updateLegendStep=function(t){this.legendStep=t},t.prototype.updateLegendItemWidth=function(t){this.legendItemWidth=t},t.prototype.updateLegendItemHeight=function(t){this.legendItemHeight=t},t.prototype.getLegendWidth=function(){var t=this
return t.config.legend_show?t.isLegendRight||t.isLegendInset?t.legendItemWidth*(t.legendStep+1):t.currentWidth:0},t.prototype.getLegendHeight=function(){var t=this,n=0
return t.config.legend_show&&(n=t.isLegendRight?t.currentHeight:Math.max(20,t.legendItemHeight)*(t.legendStep+1)),n},t.prototype.opacityForLegend=function(t){return t.classed(b.legendItemHidden)?null:1},t.prototype.opacityForUnfocusedLegend=function(t){return t.classed(b.legendItemHidden)?null:.3},t.prototype.toggleFocusLegend=function(t,n){var e=this
t=e.mapToTargetIds(t),e.legend.selectAll("."+b.legendItem).filter((function(n){return t.indexOf(n)>=0})).classed(b.legendItemFocused,n).transition().duration(100).style("opacity",(function(){return(n?e.opacityForLegend:e.opacityForUnfocusedLegend).call(e,e.d3.select(this))}))},t.prototype.revertLegend=function(){var t=this,n=t.d3
t.legend.selectAll("."+b.legendItem).classed(b.legendItemFocused,!1).transition().duration(100).style("opacity",(function(){return t.opacityForLegend(n.select(this))}))},t.prototype.showLegend=function(t){var n=this,e=n.config
e.legend_show||(e.legend_show=!0,n.legend.style("visibility","visible"),n.legendHasRendered||n.updateLegendWithDefaults()),n.removeHiddenLegendIds(t),n.legend.selectAll(n.selectorLegends(t)).style("visibility","visible").transition().style("opacity",(function(){return n.opacityForLegend(n.d3.select(this))}))},t.prototype.hideLegend=function(t){var n=this,e=n.config
e.legend_show&&f(t)&&(e.legend_show=!1,n.legend.style("visibility","hidden")),n.addHiddenLegendIds(t),n.legend.selectAll(n.selectorLegends(t)).style("opacity",0).style("visibility","hidden")},t.prototype.clearLegendItemTextBoxCache=function(){this.legendItemTextBox={}},t.prototype.updateLegend=function(t,n,e){var r,i,o,u,s,c,f,h,d,p,g,y,_,v,m,x,w=this,S=w.config,A=0,M=0,T=S.legend_item_tile_width+5,C=0,P={},E={},k={},N=[0],L={},R=0
function V(n,e,r){var i,o,a=0===r,u=r===t.length-1,s=function(t,n){return w.legendItemTextBox[n]||(w.legendItemTextBox[n]=w.getTextRect(t.textContent,b.legendItem,t)),w.legendItemTextBox[n]}(n,e),c=s.width+T+(!u||w.isLegendRight||w.isLegendInset?10:0)+S.legend_padding,l=s.height+4,f=w.isLegendRight||w.isLegendInset?l:c,h=w.isLegendRight||w.isLegendInset?w.getLegendHeight():w.getLegendWidth()
function d(t,n){n||(i=(h-C-f)/2)<10&&(i=(h-f)/2,C=0,R++),L[t]=R,N[R]=w.isLegendInset?10:i,P[t]=C,C+=f}a&&(C=0,R=0,A=0,M=0),!S.legend_show||w.isLegendToShow(e)?(E[e]=c,k[e]=l,(!A||c>=A)&&(A=c),(!M||l>=M)&&(M=l),o=w.isLegendRight||w.isLegendInset?M:A,S.legend_equally?(Object.keys(E).forEach((function(t){E[t]=A})),Object.keys(k).forEach((function(t){k[t]=M})),(i=(h-o*t.length)/2)<10?(C=0,R=0,t.forEach((function(t){d(t)}))):d(e,!0)):d(e)):E[e]=k[e]=L[e]=P[e]=0}t=t.filter((function(t){return!l(S.data_names[t])||null!==S.data_names[t]})),g=a(n=n||{},"withTransition",!0),y=a(n,"withTransitionForTransform",!0),w.isLegendInset&&(R=S.legend_inset_step?S.legend_inset_step:t.length,w.updateLegendStep(R)),w.isLegendRight?(r=function(t){return A*L[t]},u=function(t){return N[L[t]]+P[t]}):w.isLegendInset?(r=function(t){return A*L[t]+10},u=function(t){return N[L[t]]+P[t]}):(r=function(t){return N[L[t]]+P[t]},u=function(t){return M*L[t]}),i=function(t,n){return r(t,n)+4+S.legend_item_tile_width},s=function(t,n){return u(t,n)+9},o=function(t,n){return r(t,n)},c=function(t,n){return u(t,n)-5},f=function(t,n){return r(t,n)-2},h=function(t,n){return r(t,n)-2+S.legend_item_tile_width},d=function(t,n){return u(t,n)+4},(p=w.legend.selectAll("."+b.legendItem).data(t).enter().append("g").attr("class",(function(t){return w.generateClass(b.legendItem,t)})).style("visibility",(function(t){return w.isLegendToShow(t)?"visible":"hidden"})).style("cursor",(function(){return S.interaction_enabled?"pointer":"auto"})).on("click",S.interaction_enabled?function(t){S.legend_item_onclick?S.legend_item_onclick.call(w,t):w.d3.event.altKey?(w.api.hide(),w.api.show(t)):(w.api.toggle(t),w.isTargetToShow(t)?w.api.focus(t):w.api.revert())}:null).on("mouseover",S.interaction_enabled?function(t){S.legend_item_onmouseover?S.legend_item_onmouseover.call(w,t):(w.d3.select(this).classed(b.legendItemFocused,!0),!w.transiting&&w.isTargetToShow(t)&&w.api.focus(t))}:null).on("mouseout",S.interaction_enabled?function(t){S.legend_item_onmouseout?S.legend_item_onmouseout.call(w,t):(w.d3.select(this).classed(b.legendItemFocused,!1),w.api.revert())}:null)).append("text").text((function(t){return l(S.data_names[t])?S.data_names[t]:t})).each((function(t,n){V(this,t,n)})).style("pointer-events","none").attr("x",w.isLegendRight||w.isLegendInset?i:-200).attr("y",w.isLegendRight||w.isLegendInset?-200:s),p.append("rect").attr("class",b.legendItemEvent).style("fill-opacity",0).attr("x",w.isLegendRight||w.isLegendInset?o:-200).attr("y",w.isLegendRight||w.isLegendInset?-200:c),p.append("line").attr("class",b.legendItemTile).style("stroke",w.color).style("pointer-events","none").attr("x1",w.isLegendRight||w.isLegendInset?f:-200).attr("y1",w.isLegendRight||w.isLegendInset?-200:d).attr("x2",w.isLegendRight||w.isLegendInset?h:-200).attr("y2",w.isLegendRight||w.isLegendInset?-200:d).attr("stroke-width",S.legend_item_tile_height),x=w.legend.select("."+b.legendBackground+" rect"),w.isLegendInset&&A>0&&0===x.size()&&(x=w.legend.insert("g","."+b.legendItem).attr("class",b.legendBackground).append("rect")),_=w.legend.selectAll("text").data(t).text((function(t){return l(S.data_names[t])?S.data_names[t]:t})).each((function(t,n){V(this,t,n)})),(g?_.transition():_).attr("x",i).attr("y",s),v=w.legend.selectAll("rect."+b.legendItemEvent).data(t),(g?v.transition():v).attr("width",(function(t){return E[t]})).attr("height",(function(t){return k[t]})).attr("x",o).attr("y",c),m=w.legend.selectAll("line."+b.legendItemTile).data(t),(g?m.transition():m).style("stroke",w.levelColor?function(t){return w.levelColor(w.cache[t].values.reduce((function(t,n){return t+n.value}),0))}:w.color).attr("x1",f).attr("y1",d).attr("x2",h).attr("y2",d),x&&(g?x.transition():x).attr("height",w.getLegendHeight()-12).attr("width",A*(R+1)+10),w.legend.selectAll("."+b.legendItem).classed(b.legendItemHidden,(function(t){return!w.isTargetToShow(t)})),w.updateLegendItemWidth(A),w.updateLegendItemHeight(M),w.updateLegendStep(R),w.updateSizes(),w.updateScales(),w.updateSvgSize(),w.transformAll(y,e),w.legendHasRendered=!0},t.prototype.initRegion=function(){var t=this
t.region=t.main.append("g").attr("clip-path",t.clipPath).attr("class",b.regions)},t.prototype.updateRegion=function(t){var n=this,e=n.config
n.region.style("visibility",n.hasArcType()?"hidden":"visible")
var r=n.main.select("."+b.regions).selectAll("."+b.region).data(e.regions),i=r.enter().append("g")
i.append("rect").attr("x",n.regionX.bind(n)).attr("y",n.regionY.bind(n)).attr("width",n.regionWidth.bind(n)).attr("height",n.regionHeight.bind(n)).style("fill-opacity",(function(t){return y(t.opacity)?t.opacity:.1})),i.append("text").text(n.labelRegion.bind(n)),n.mainRegion=i.merge(r).attr("class",n.classRegion.bind(n)),r.exit().transition().duration(t).style("opacity",0).remove()},t.prototype.redrawRegion=function(t,n){var e=this,r=e.mainRegion,i=e.mainRegion.selectAll("text")
return[(t?r.transition(n):r).attr("x",e.regionX.bind(e)).attr("y",e.regionY.bind(e)).attr("width",e.regionWidth.bind(e)).attr("height",e.regionHeight.bind(e)).style("fill-opacity",(function(t){return y(t.opacity)?t.opacity:.1})),(t?i.transition(n):i).attr("x",e.labelOffsetX.bind(e)).attr("y",e.labelOffsetY.bind(e)).attr("transform",e.labelTransform.bind(e)).attr("style","text-anchor: left;")]},t.prototype.regionX=function(t){var n=this,e=n.config,r="y"===t.axis?n.y:n.y2
return"y"===t.axis||"y2"===t.axis?e.axis_rotated&&"start"in t?r(t.start):0:e.axis_rotated?0:"start"in t?n.x(n.isTimeSeries()?n.parseDate(t.start):t.start):0},t.prototype.regionY=function(t){var n=this,e=n.config,r="y"===t.axis?n.y:n.y2
return"y"===t.axis||"y2"===t.axis?e.axis_rotated?0:"end"in t?r(t.end):0:e.axis_rotated&&"start"in t?n.x(n.isTimeSeries()?n.parseDate(t.start):t.start):0},t.prototype.regionWidth=function(t){var n,e=this,r=e.config,i=e.regionX(t),o="y"===t.axis?e.y:e.y2
return(n="y"===t.axis||"y2"===t.axis?r.axis_rotated&&"end"in t?o(t.end):e.width:r.axis_rotated?e.width:"end"in t?e.x(e.isTimeSeries()?e.parseDate(t.end):t.end):e.width)<i?0:n-i},t.prototype.regionHeight=function(t){var n,e=this,r=e.config,i=this.regionY(t),o="y"===t.axis?e.y:e.y2
return(n="y"===t.axis||"y2"===t.axis?r.axis_rotated?e.height:"start"in t?o(t.start):e.height:r.axis_rotated&&"end"in t?e.x(e.isTimeSeries()?e.parseDate(t.end):t.end):e.height)<i?0:n-i},t.prototype.isRegionOnX=function(t){return!t.axis||"x"===t.axis},t.prototype.labelRegion=function(t){return"label"in t?t.label:""},t.prototype.labelTransform=function(t){return"vertical"in t&&t.vertical?"rotate(90)":""},t.prototype.labelOffsetX=function(t){var n="paddingX"in t?t.paddingX:3,e="paddingY"in t?t.paddingY:3
return"vertical"in t&&t.vertical?this.regionY(t)+e:this.regionX(t)+n},t.prototype.labelOffsetY=function(t){var n="paddingX"in t?t.paddingX:3,e="paddingY"in t?t.paddingY:3
return"vertical"in t&&t.vertical?-(this.regionX(t)+n):this.regionY(t)+10+e},t.prototype.getScale=function(t,n,e){return(e?this.d3.scaleTime():this.d3.scaleLinear()).range([t,n])},t.prototype.getX=function(t,n,e,r){var i,o=this,a=o.getScale(t,n,o.isTimeSeries()),u=e?a.domain(e):a
for(i in o.isCategorized()?(r=r||function(){return 0},a=function(t,n){var e=u(t)+r(t)
return n?e:Math.ceil(e)}):a=function(t,n){var e=u(t)
return n?e:Math.ceil(e)},u)a[i]=u[i]
return a.orgDomain=function(){return u.domain()},o.isCategorized()&&(a.domain=function(t){return arguments.length?(u.domain(t),a):[(t=this.orgDomain())[0],t[1]+1]}),a},t.prototype.getY=function(t,n,e){var r
if("timeseries"===t||"time"===t)r=this.d3.scaleTime()
else if("log"===t)r=M(this.d3)
else{if("linear"!==t&&void 0!==t)throw new Error('Invalid Y axis type: "'+t+'"')
r=this.d3.scaleLinear()}return n&&r.domain(n),e&&r.range(e),r},t.prototype.getYScale=function(t){return"y2"===this.axis.getId(t)?this.y2:this.y},t.prototype.getSubYScale=function(t){return"y2"===this.axis.getId(t)?this.subY2:this.subY},t.prototype.updateScales=function(){var t=this,n=t.config,e=!t.x
t.xMin=n.axis_rotated?1:0,t.xMax=n.axis_rotated?t.height:t.width,t.yMin=n.axis_rotated?0:t.height,t.yMax=n.axis_rotated?t.width:1,t.subXMin=t.xMin,t.subXMax=t.xMax,t.subYMin=n.axis_rotated?0:t.height2,t.subYMax=n.axis_rotated?t.width2:1,t.x=t.getX(t.xMin,t.xMax,e?void 0:t.x.orgDomain(),(function(){return t.xAxis.tickOffset()})),t.y=t.getY(n.axis_y_type,e?n.axis_y_default:t.y.domain(),[t.yMin,t.yMax]),t.y2=t.getY(n.axis_y2_type,e?n.axis_y2_default:t.y2.domain(),[t.yMin,t.yMax]),t.subX=t.getX(t.xMin,t.xMax,t.orgXDomain,(function(n){return n%1?0:t.subXAxis.tickOffset()})),t.subY=t.getY(n.axis_y_type,e?n.axis_y_default:t.subY.domain(),[t.subYMin,t.subYMax]),t.subY2=t.getY(n.axis_y2_type,e?n.axis_y2_default:t.subY2.domain(),[t.subYMin,t.subYMax]),t.xAxisTickFormat=t.axis.getXAxisTickFormat(),t.xAxisTickValues=t.axis.getXAxisTickValues(),t.yAxisTickValues=t.axis.getYAxisTickValues(),t.y2AxisTickValues=t.axis.getY2AxisTickValues(),t.xAxis=t.axis.getXAxis(t.x,t.xOrient,t.xAxisTickFormat,t.xAxisTickValues,n.axis_x_tick_outer),t.subXAxis=t.axis.getXAxis(t.subX,t.subXOrient,t.xAxisTickFormat,t.xAxisTickValues,n.axis_x_tick_outer),t.yAxis=t.axis.getYAxis("y",t.y,t.yOrient,t.yAxisTickValues,n.axis_y_tick_outer),t.y2Axis=t.axis.getYAxis("y2",t.y2,t.y2Orient,t.y2AxisTickValues,n.axis_y2_tick_outer),e||t.brush&&t.brush.updateScale(t.subX),t.updateArc&&t.updateArc()},t.prototype.selectPoint=function(t,n,e){var r=this,i=r.config,o=(i.axis_rotated?r.circleY:r.circleX).bind(r),a=(i.axis_rotated?r.circleX:r.circleY).bind(r),u=r.pointSelectR.bind(r)
i.data_onselected.call(r.api,n,t.node()),r.main.select("."+b.selectedCircles+r.getTargetSelectorSuffix(n.id)).selectAll("."+b.selectedCircle+"-"+e).data([n]).enter().append("circle").attr("class",(function(){return r.generateClass(b.selectedCircle,e)})).attr("cx",o).attr("cy",a).attr("stroke",(function(){return r.color(n)})).attr("r",(function(t){return 1.4*r.pointSelectR(t)})).transition().duration(100).attr("r",u)},t.prototype.unselectPoint=function(t,n,e){var r=this
r.config.data_onunselected.call(r.api,n,t.node()),r.main.select("."+b.selectedCircles+r.getTargetSelectorSuffix(n.id)).selectAll("."+b.selectedCircle+"-"+e).transition().duration(100).attr("r",0).remove()},t.prototype.togglePoint=function(t,n,e,r){t?this.selectPoint(n,e,r):this.unselectPoint(n,e,r)},t.prototype.selectPath=function(t,n){var e=this
e.config.data_onselected.call(e,n,t.node()),e.config.interaction_brighten&&t.transition().duration(100).style("fill",(function(){return e.d3.rgb(e.color(n)).brighter(.75)}))},t.prototype.unselectPath=function(t,n){var e=this
e.config.data_onunselected.call(e,n,t.node()),e.config.interaction_brighten&&t.transition().duration(100).style("fill",(function(){return e.color(n)}))},t.prototype.togglePath=function(t,n,e,r){t?this.selectPath(n,e,r):this.unselectPath(n,e,r)},t.prototype.getToggle=function(t,n){var e,r=this
return"circle"===t.nodeName?e=r.isStepType(n)?function(){}:r.togglePoint:"path"===t.nodeName&&(e=r.togglePath),e},t.prototype.toggleShape=function(t,n,e){var r=this,i=r.d3,o=r.config,a=i.select(t),u=a.classed(b.SELECTED),s=r.getToggle(t,n).bind(r)
o.data_selection_enabled&&o.data_selection_isselectable(n)&&(o.data_selection_multiple||r.main.selectAll("."+b.shapes+(o.data_selection_grouped?r.getTargetSelectorSuffix(n.id):"")).selectAll("."+b.shape).each((function(t,n){var e=i.select(this)
e.classed(b.SELECTED)&&s(!1,e.classed(b.SELECTED,!1),t,n)})),a.classed(b.SELECTED,!u),s(!u,a,n,e))},t.prototype.initBar=function(){this.main.select("."+b.chart).append("g").attr("class",b.chartBars)},t.prototype.updateTargetsForBar=function(t){var n=this,e=n.config,r=n.classChartBar.bind(n),i=n.classBars.bind(n),o=n.classFocus.bind(n)
n.main.select("."+b.chartBars).selectAll("."+b.chartBar).data(t).attr("class",(function(t){return r(t)+o(t)})).enter().append("g").attr("class",r).style("pointer-events","none").append("g").attr("class",i).style("cursor",(function(t){return e.data_selection_isselectable(t)?"pointer":null}))},t.prototype.updateBar=function(t){var n=this,e=n.barData.bind(n),r=n.classBar.bind(n),i=n.initialOpacity.bind(n),o=function(t){return n.color(t.id)},a=n.main.selectAll("."+b.bars).selectAll("."+b.bar).data(e),u=a.enter().append("path").attr("class",r).style("stroke",o).style("fill",o)
n.mainBar=u.merge(a).style("opacity",i),a.exit().transition().duration(t).style("opacity",0)},t.prototype.redrawBar=function(t,n,e){var r=this
return[(n?this.mainBar.transition(e):this.mainBar).attr("d",t).style("stroke",this.color).style("fill",this.color).style("opacity",(function(t){return r.isTargetToShow(t.id)?1:0}))]},t.prototype.getBarW=function(t,n){var e=this.config,r="number"==typeof e.bar_width?e.bar_width:n?t.tickInterval()*e.bar_width_ratio/n:0
return e.bar_width_max&&r>e.bar_width_max?e.bar_width_max:r},t.prototype.getBars=function(t,n){var e=this
return(n?e.main.selectAll("."+b.bars+e.getTargetSelectorSuffix(n)):e.main).selectAll("."+b.bar+(y(t)?"-"+t:""))},t.prototype.expandBars=function(t,n,e){e&&this.unexpandBars(),this.getBars(t,n).classed(b.EXPANDED,!0)},t.prototype.unexpandBars=function(t){this.getBars(t).classed(b.EXPANDED,!1)},t.prototype.generateDrawBar=function(t,n){var e=this.config,r=this.generateGetBarPoints(t,n)
return function(t,n){var i=r(t,n),o=e.axis_rotated?1:0,a=e.axis_rotated?0:1
return"M "+i[0][o]+","+i[0][a]+" L"+i[1][o]+","+i[1][a]+" L"+i[2][o]+","+i[2][a]+" L"+i[3][o]+","+i[3][a]+" z"}},t.prototype.generateGetBarPoints=function(t,n){var e=this,r=n?e.subXAxis:e.xAxis,i=t.__max__+1,o=e.getBarW(r,i),a=e.getShapeX(o,i,t,!!n),u=e.getShapeY(!!n),s=e.getShapeOffset(e.isBarType,t,!!n),c=o*(e.config.bar_space/2),l=n?e.getSubYScale:e.getYScale
return function(t,n){var r=l.call(e,t.id)(0),i=s(t,n)||r,f=a(t),h=u(t)
return e.config.axis_rotated&&(0<t.value&&h<r||t.value<0&&r<h)&&(h=r),[[f+c,i],[f+c,h-=r-i],[f+o-c,h],[f+o-c,i]]}},t.prototype.isWithinBar=function(t,n){return function(t,n,e){void 0===e&&(e=0)
var r=n.x-e,i=n.x+n.width+e,o=n.y+n.height+e,a=n.y-e
return r<t[0]&&t[0]<i&&a<t[1]&&t[1]<o}(t,s(n),2)},t.prototype.getShapeIndices=function(t){var n,e,r=this,i=r.config,o={},a=0
return r.filterTargetsToShow(r.data.targets.filter(t,r)).forEach((function(t){for(n=0;n<i.data_groups.length;n++)if(!(i.data_groups[n].indexOf(t.id)<0))for(e=0;e<i.data_groups[n].length;e++)if(i.data_groups[n][e]in o){o[t.id]=o[i.data_groups[n][e]]
break}g(o[t.id])&&(o[t.id]=a++)})),o.__max__=a-1,o},t.prototype.getShapeX=function(t,n,e,r){var i=r?this.subX:this.x
return function(r){var o=r.id in e?e[r.id]:0
return r.x||0===r.x?i(r.x)-t*(n/2-o):0}},t.prototype.getShapeY=function(t){var n=this
return function(e){return(t?n.getSubYScale(e.id):n.getYScale(e.id))(n.isTargetNormalized(e.id)?n.getRatio("index",e,!0):e.value)}},t.prototype.getShapeOffset=function(t,n,e){var r=this,i=r.orderTargets(r.filterTargetsToShow(r.data.targets.filter(t,r))),o=i.map((function(t){return t.id}))
return function(t,a){var u=e?r.getSubYScale(t.id):r.getYScale(t.id),s=u(0),c=s
return i.forEach((function(e){var i=r.isStepType(t)?r.convertValuesToStep(e.values):e.values,l=r.isTargetNormalized(t.id),f=i.map((function(t){return l?r.getRatio("index",t,!0):t.value}))
e.id!==t.id&&n[e.id]===n[t.id]&&o.indexOf(e.id)<o.indexOf(t.id)&&((g(i[a])||+i[a].x!=+t.x)&&(a=-1,i.forEach((function(n,e){(n.x.constructor===Date?+n.x:n.x)===(t.x.constructor===Date?+t.x:t.x)&&(a=e)}))),a in i&&i[a].value*t.value>=0&&(c+=u(f[a])-s))})),c}},t.prototype.isWithinShape=function(t,n){var e,r=this,i=r.d3.select(t)
return r.isTargetToShow(n.id)?"circle"===t.nodeName?e=r.isStepType(n)?r.isWithinStep(t,r.getYScale(n.id)(n.value)):r.isWithinCircle(t,1.5*r.pointSelectR(n)):"path"===t.nodeName&&(e=!i.classed(b.bar)||r.isWithinBar(r.d3.mouse(t),t)):e=!1,e},t.prototype.getInterpolate=function(t){var n=this,e=n.d3,r={linear:e.curveLinear,"linear-closed":e.curveLinearClosed,basis:e.curveBasis,"basis-open":e.curveBasisOpen,"basis-closed":e.curveBasisClosed,bundle:e.curveBundle,cardinal:e.curveCardinal,"cardinal-open":e.curveCardinalOpen,"cardinal-closed":e.curveCardinalClosed,monotone:e.curveMonotoneX,step:e.curveStep,"step-before":e.curveStepBefore,"step-after":e.curveStepAfter}
return n.isSplineType(t)?r[n.config.spline_interpolation_type]||r.cardinal:n.isStepType(t)?r[n.config.line_step_type]:r.linear},t.prototype.initLine=function(){this.main.select("."+b.chart).append("g").attr("class",b.chartLines)},t.prototype.updateTargetsForLine=function(t){var n,e=this,r=e.config,i=e.classChartLine.bind(e),o=e.classLines.bind(e),a=e.classAreas.bind(e),u=e.classCircles.bind(e),s=e.classFocus.bind(e);(n=e.main.select("."+b.chartLines).selectAll("."+b.chartLine).data(t).attr("class",(function(t){return i(t)+s(t)})).enter().append("g").attr("class",i).style("opacity",0).style("pointer-events","none")).append("g").attr("class",o),n.append("g").attr("class",a),n.append("g").attr("class",(function(t){return e.generateClass(b.selectedCircles,t.id)})),n.append("g").attr("class",u).style("cursor",(function(t){return r.data_selection_isselectable(t)?"pointer":null})),t.forEach((function(t){e.main.selectAll("."+b.selectedCircles+e.getTargetSelectorSuffix(t.id)).selectAll("."+b.selectedCircle).each((function(n){n.value=t.values[n.index].value}))}))},t.prototype.updateLine=function(t){var n=this,e=n.main.selectAll("."+b.lines).selectAll("."+b.line).data(n.lineData.bind(n)),r=e.enter().append("path").attr("class",n.classLine.bind(n)).style("stroke",n.color)
n.mainLine=r.merge(e).style("opacity",n.initialOpacity.bind(n)).style("shape-rendering",(function(t){return n.isStepType(t)?"crispEdges":""})).attr("transform",null),e.exit().transition().duration(t).style("opacity",0)},t.prototype.redrawLine=function(t,n,e){return[(n?this.mainLine.transition(e):this.mainLine).attr("d",t).style("stroke",this.color).style("opacity",1)]},t.prototype.generateDrawLine=function(t,n){var e=this,r=e.config,i=e.d3.line(),o=e.generateGetLinePoints(t,n),a=n?e.getSubYScale:e.getYScale,u=function(t){return(n?e.subxx:e.xx).call(e,t)},s=function(t,n){return r.data_groups.length>0?o(t,n)[0][1]:a.call(e,t.id)(t.value)}
return i=r.axis_rotated?i.x(s).y(u):i.x(u).y(s),r.line_connectNull||(i=i.defined((function(t){return null!=t.value}))),function(t){var o,u=r.line_connectNull?e.filterRemoveNull(t.values):t.values,s=n?e.subX:e.x,c=a.call(e,t.id),l=0,f=0
return e.isLineType(t)?r.data_regions[t.id]?o=e.lineWithRegions(u,s,c,r.data_regions[t.id]):(e.isStepType(t)&&(u=e.convertValuesToStep(u)),o=i.curve(e.getInterpolate(t))(u)):(u[0]&&(l=s(u[0].x),f=c(u[0].value)),o=r.axis_rotated?"M "+f+" "+l:"M "+l+" "+f),o||"M 0 0"}},t.prototype.generateGetLinePoints=function(t,n){var e=this,r=e.config,i=t.__max__+1,o=e.getShapeX(0,i,t,!!n),a=e.getShapeY(!!n),u=e.getShapeOffset(e.isLineType,t,!!n),s=n?e.getSubYScale:e.getYScale
return function(t,n){var i=s.call(e,t.id)(0),c=u(t,n)||i,l=o(t),f=a(t)
return r.axis_rotated&&(0<t.value&&f<i||t.value<0&&i<f)&&(f=i),[[l,f-(i-c)],[l,f-(i-c)],[l,f-(i-c)],[l,f-(i-c)]]}},t.prototype.lineWithRegions=function(t,n,e,r){var i,o,a,u,s,c,f,h,d,p,y,_=this,v=_.config,m="M",x=_.isCategorized()?.5:0,b=[]
function w(t,n){var e
for(e=0;e<n.length;e++)if(n[e].start<t&&t<=n[e].end)return!0
return!1}if(l(r))for(i=0;i<r.length;i++)b[i]={},g(r[i].start)?b[i].start=t[0].x:b[i].start=_.isTimeSeries()?_.parseDate(r[i].start):r[i].start,g(r[i].end)?b[i].end=t[t.length-1].x:b[i].end=_.isTimeSeries()?_.parseDate(r[i].end):r[i].end
function S(t){return"M"+t[0][0]+" "+t[0][1]+" "+t[1][0]+" "+t[1][1]}for(p=v.axis_rotated?function(t){return e(t.value)}:function(t){return n(t.x)},y=v.axis_rotated?function(t){return n(t.x)}:function(t){return e(t.value)},a=_.isTimeSeries()?function(t,r,i,o){var a=t.x.getTime(),u=r.x-t.x,c=new Date(a+u*i),l=new Date(a+u*(i+o))
return S(v.axis_rotated?[[e(s(i)),n(c)],[e(s(i+o)),n(l)]]:[[n(c),e(s(i))],[n(l),e(s(i+o))]])}:function(t,r,i,o){return S(v.axis_rotated?[[e(s(i),!0),n(u(i))],[e(s(i+o),!0),n(u(i+o))]]:[[n(u(i),!0),e(s(i))],[n(u(i+o),!0),e(s(i+o))]])},i=0;i<t.length;i++){if(g(b)||!w(t[i].x,b))m+=" "+p(t[i])+" "+y(t[i])
else for(u=_.getScale(t[i-1].x+x,t[i].x+x,_.isTimeSeries()),s=_.getScale(t[i-1].value,t[i].value),c=n(t[i].x)-n(t[i-1].x),f=e(t[i].value)-e(t[i-1].value),d=2*(h=2/Math.sqrt(Math.pow(c,2)+Math.pow(f,2))),o=h;o<=1;o+=d)m+=a(t[i-1],t[i],o,h)
t[i].x}return m},t.prototype.updateArea=function(t){var n=this,e=n.d3,r=n.main.selectAll("."+b.areas).selectAll("."+b.area).data(n.lineData.bind(n)),i=r.enter().append("path").attr("class",n.classArea.bind(n)).style("fill",n.color).style("opacity",(function(){return n.orgAreaOpacity=+e.select(this).style("opacity"),0}))
n.mainArea=i.merge(r).style("opacity",n.orgAreaOpacity),r.exit().transition().duration(t).style("opacity",0)},t.prototype.redrawArea=function(t,n,e){return[(n?this.mainArea.transition(e):this.mainArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)]},t.prototype.generateDrawArea=function(t,n){var e=this,r=e.config,i=e.d3.area(),o=e.generateGetAreaPoints(t,n),a=n?e.getSubYScale:e.getYScale,u=function(t){return(n?e.subxx:e.xx).call(e,t)},s=function(t,n){return r.data_groups.length>0?o(t,n)[0][1]:a.call(e,t.id)(e.getAreaBaseValue(t.id))},c=function(t,n){return r.data_groups.length>0?o(t,n)[1][1]:a.call(e,t.id)(t.value)}
return i=r.axis_rotated?i.x0(s).x1(c).y(u):i.x(u).y0(r.area_above?0:s).y1(c),r.line_connectNull||(i=i.defined((function(t){return null!==t.value}))),function(t){var n,o=r.line_connectNull?e.filterRemoveNull(t.values):t.values,a=0,u=0
return e.isAreaType(t)?(e.isStepType(t)&&(o=e.convertValuesToStep(o)),n=i.curve(e.getInterpolate(t))(o)):(o[0]&&(a=e.x(o[0].x),u=e.getYScale(t.id)(o[0].value)),n=r.axis_rotated?"M "+u+" "+a:"M "+a+" "+u),n||"M 0 0"}},t.prototype.getAreaBaseValue=function(){return 0},t.prototype.generateGetAreaPoints=function(t,n){var e=this,r=e.config,i=t.__max__+1,o=e.getShapeX(0,i,t,!!n),a=e.getShapeY(!!n),u=e.getShapeOffset(e.isAreaType,t,!!n),s=n?e.getSubYScale:e.getYScale
return function(t,n){var i=s.call(e,t.id)(0),c=u(t,n)||i,l=o(t),f=a(t)
return r.axis_rotated&&(0<t.value&&f<i||t.value<0&&i<f)&&(f=i),[[l,c],[l,f-(i-c)],[l,f-(i-c)],[l,c]]}},t.prototype.updateCircle=function(t,n){var e=this,r=e.main.selectAll("."+b.circles).selectAll("."+b.circle).data(e.lineOrScatterOrStanfordData.bind(e)),i=r.enter().append("circle").attr("shape-rendering",e.isStanfordGraphType()?"crispEdges":"").attr("class",e.classCircle.bind(e)).attr("cx",t).attr("cy",n).attr("r",e.pointR.bind(e)).style("color",e.isStanfordGraphType()?e.getStanfordPointColor.bind(e):e.color)
e.mainCircle=i.merge(r).style("opacity",e.isStanfordGraphType()?1:e.initialOpacityForCircle.bind(e)),r.exit().style("opacity",0)},t.prototype.redrawCircle=function(t,n,e,r){var i=this,o=i.main.selectAll("."+b.selectedCircle)
return[(e?i.mainCircle.transition(r):i.mainCircle).style("opacity",this.opacityForCircle.bind(i)).style("color",i.isStanfordGraphType()?i.getStanfordPointColor.bind(i):i.color).attr("cx",t).attr("cy",n),(e?o.transition(r):o).attr("cx",t).attr("cy",n)]},t.prototype.circleX=function(t){return t.x||0===t.x?this.x(t.x):null},t.prototype.updateCircleY=function(){var t,n,e=this
e.config.data_groups.length>0?(t=e.getShapeIndices(e.isLineType),n=e.generateGetLinePoints(t),e.circleY=function(t,e){return n(t,e)[0][1]}):e.circleY=function(t){return e.getYScale(t.id)(t.value)}},t.prototype.getCircles=function(t,n){var e=this
return(n?e.main.selectAll("."+b.circles+e.getTargetSelectorSuffix(n)):e.main).selectAll("."+b.circle+(y(t)?"-"+t:""))},t.prototype.expandCircles=function(t,n,e){var r=this,i=r.pointExpandedR.bind(r)
e&&r.unexpandCircles(),r.getCircles(t,n).classed(b.EXPANDED,!0).attr("r",i)},t.prototype.unexpandCircles=function(t){var n=this,e=n.pointR.bind(n)
n.getCircles(t).filter((function(){return n.d3.select(this).classed(b.EXPANDED)})).classed(b.EXPANDED,!1).attr("r",e)},t.prototype.pointR=function(t){var n=this.config
return this.isStepType(t)?0:h(n.point_r)?n.point_r(t):n.point_r},t.prototype.pointExpandedR=function(t){var n=this,e=n.config
return e.point_focus_expand_enabled?h(e.point_focus_expand_r)?e.point_focus_expand_r(t):e.point_focus_expand_r?e.point_focus_expand_r:1.75*n.pointR(t):n.pointR(t)},t.prototype.pointSelectR=function(t){var n=this.config
return h(n.point_select_r)?n.point_select_r(t):n.point_select_r?n.point_select_r:4*this.pointR(t)},t.prototype.isWithinCircle=function(t,n){var e=this.d3,r=e.mouse(t),i=e.select(t),o=+i.attr("cx"),a=+i.attr("cy")
return Math.sqrt(Math.pow(o-r[0],2)+Math.pow(a-r[1],2))<n},t.prototype.isWithinStep=function(t,n){return Math.abs(n-this.d3.mouse(t)[1])<30},t.prototype.getCurrentWidth=function(){var t=this.config
return t.size_width?t.size_width:this.getParentWidth()},t.prototype.getCurrentHeight=function(){var t=this,n=t.config,e=n.size_height?n.size_height:t.getParentHeight()
return e>0?e:320/(t.hasType("gauge")&&!n.gauge_fullCircle?2:1)},t.prototype.getCurrentPaddingTop=function(){var t=this,n=t.config,e=y(n.padding_top)?n.padding_top:0
return t.title&&t.title.node()&&(e+=t.getTitlePadding()),e},t.prototype.getCurrentPaddingBottom=function(){var t=this.config
return y(t.padding_bottom)?t.padding_bottom:0},t.prototype.getCurrentPaddingLeft=function(t){var n=this,e=n.config
return y(e.padding_left)?e.padding_left:e.axis_rotated?!e.axis_x_show||e.axis_x_inner?1:Math.max(i(n.getAxisWidthByAxisId("x",t)),40):!e.axis_y_show||e.axis_y_inner?n.axis.getYAxisLabelPosition().isOuter?30:1:i(n.getAxisWidthByAxisId("y",t))},t.prototype.getCurrentPaddingRight=function(){var t=this,n=t.config,e=0,r=t.isLegendRight?t.getLegendWidth()+20:0
return e=y(n.padding_right)?n.padding_right+1:n.axis_rotated?10+r:!n.axis_y2_show||n.axis_y2_inner?2+r+(t.axis.getY2AxisLabelPosition().isOuter?20:0):i(t.getAxisWidthByAxisId("y2"))+r,t.colorScale&&t.colorScale.node()&&(e+=t.getColorScalePadding()),e},t.prototype.getParentRectValue=function(t){for(var n,e=this.selectChart.node();e&&"BODY"!==e.tagName;){try{n=e.getBoundingClientRect()[t]}catch(r){"width"===t&&(n=e.offsetWidth)}if(n)break
e=e.parentNode}return n},t.prototype.getParentWidth=function(){return this.getParentRectValue("width")},t.prototype.getParentHeight=function(){var t=this.selectChart.style("height")
return t.indexOf("px")>0?+t.replace("px",""):0},t.prototype.getSvgLeft=function(t){var n=this,e=n.config,r=e.axis_rotated||!e.axis_rotated&&!e.axis_y_inner,i=e.axis_rotated?b.axisX:b.axisY,o=n.main.select("."+i).node(),a=o&&r?o.getBoundingClientRect():{right:0},u=n.selectChart.node().getBoundingClientRect(),s=n.hasArcType(),c=a.right-u.left-(s?0:n.getCurrentPaddingLeft(t))
return c>0?c:0},t.prototype.getAxisWidthByAxisId=function(t,n){var e=this.axis.getLabelPositionById(t)
return this.axis.getMaxTickWidth(t,n)+(e.isInner?20:40)},t.prototype.getHorizontalAxisHeight=function(t,n){var e=this,r=e.config,i=30
return"x"!==t||(l(n)&&n?r.subchart_axis_x_show:r.axis_x_show)?"x"===t&&r.axis_x_height?r.axis_x_height:"y"!==t||r.axis_y_show?"y2"!==t||r.axis_y2_show?("x"===t&&!r.axis_rotated&&r.axis_x_tick_rotate&&(i=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-Math.abs(r.axis_x_tick_rotate))/180)),"y"===t&&r.axis_rotated&&r.axis_y_tick_rotate&&(i=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-Math.abs(r.axis_y_tick_rotate))/180)),i+(e.axis.getLabelPositionById(t).isInner?0:10)+("y2"===t?-10:0)):e.rotated_padding_top:!r.legend_show||e.isLegendRight||e.isLegendInset?1:10:8},t.prototype.initBrush=function(t){var n=this,e=n.d3
return n.brush=(n.config.axis_rotated?e.brushY():e.brushX()).on("brush",(function(){var t=e.event.sourceEvent
t&&"zoom"===t.type||n.redrawForBrush()})).on("end",(function(){var t=e.event.sourceEvent
t&&"zoom"===t.type||n.brush.empty()&&t&&"end"!==t.type&&n.brush.clear()})),n.brush.updateExtent=function(){var t,e=this.scale.range()
return t=n.config.axis_rotated?[[0,e[0]],[n.width2,e[1]]]:[[e[0],0],[e[1],n.height2]],this.extent(t),this},n.brush.updateScale=function(t){return this.scale=t,this},n.brush.update=function(t){this.updateScale(t||n.subX).updateExtent(),n.context.select("."+b.brush).call(this)},n.brush.clear=function(){n.context.select("."+b.brush).call(n.brush.move,null)},n.brush.selection=function(){return e.brushSelection(n.context.select("."+b.brush).node())},n.brush.selectionAsValue=function(t,e){var r,i
return t?(n.context&&(r=[this.scale(t[0]),this.scale(t[1])],i=n.context.select("."+b.brush),e&&(i=i.transition()),n.brush.move(i,r)),[]):(r=n.brush.selection()||[0,0],[this.scale.invert(r[0]),this.scale.invert(r[1])])},n.brush.empty=function(){var t=n.brush.selection()
return!t||t[0]===t[1]},n.brush.updateScale(t)},t.prototype.initSubchart=function(){var t=this,n=t.config,e=t.context=t.svg.append("g").attr("transform",t.getTranslate("context"))
e.style("visibility","visible"),e.append("g").attr("clip-path",t.clipPathForSubchart).attr("class",b.chart),e.select("."+b.chart).append("g").attr("class",b.chartBars),e.select("."+b.chart).append("g").attr("class",b.chartLines),e.append("g").attr("clip-path",t.clipPath).attr("class",b.brush),t.axes.subx=e.append("g").attr("class",b.axisX).attr("transform",t.getTranslate("subx")).attr("clip-path",n.axis_rotated?"":t.clipPathForXAxis).style("visibility",n.subchart_axis_x_show?"visible":"hidden")},t.prototype.initSubchartBrush=function(){var t=this
t.initBrush(t.subX).updateExtent(),t.context.select("."+b.brush).call(t.brush)},t.prototype.updateTargetsForSubchart=function(t){var n,e,r,i,o=this,a=o.context,u=o.config,s=o.classChartBar.bind(o),c=o.classBars.bind(o),l=o.classChartLine.bind(o),f=o.classLines.bind(o),h=o.classAreas.bind(o);(r=(i=a.select("."+b.chartBars).selectAll("."+b.chartBar).data(t)).enter().append("g").style("opacity",0)).merge(i).attr("class",s),r.append("g").attr("class",c),(n=(e=a.select("."+b.chartLines).selectAll("."+b.chartLine).data(t)).enter().append("g").style("opacity",0)).merge(e).attr("class",l),n.append("g").attr("class",f),n.append("g").attr("class",h),a.selectAll("."+b.brush+" rect").attr(u.axis_rotated?"width":"height",u.axis_rotated?o.width2:o.height2)},t.prototype.updateBarForSubchart=function(t){var n=this,e=n.context.selectAll("."+b.bars).selectAll("."+b.bar).data(n.barData.bind(n)),r=e.enter().append("path").attr("class",n.classBar.bind(n)).style("stroke","none").style("fill",n.color)
e.exit().transition().duration(t).style("opacity",0).remove(),n.contextBar=r.merge(e).style("opacity",n.initialOpacity.bind(n))},t.prototype.redrawBarForSubchart=function(t,n,e){(n?this.contextBar.transition(Math.random().toString()).duration(e):this.contextBar).attr("d",t).style("opacity",1)},t.prototype.updateLineForSubchart=function(t){var n=this,e=n.context.selectAll("."+b.lines).selectAll("."+b.line).data(n.lineData.bind(n)),r=e.enter().append("path").attr("class",n.classLine.bind(n)).style("stroke",n.color)
e.exit().transition().duration(t).style("opacity",0).remove(),n.contextLine=r.merge(e).style("opacity",n.initialOpacity.bind(n))},t.prototype.redrawLineForSubchart=function(t,n,e){(n?this.contextLine.transition(Math.random().toString()).duration(e):this.contextLine).attr("d",t).style("opacity",1)},t.prototype.updateAreaForSubchart=function(t){var n=this,e=n.d3,r=n.context.selectAll("."+b.areas).selectAll("."+b.area).data(n.lineData.bind(n)),i=r.enter().append("path").attr("class",n.classArea.bind(n)).style("fill",n.color).style("opacity",(function(){return n.orgAreaOpacity=+e.select(this).style("opacity"),0}))
r.exit().transition().duration(t).style("opacity",0).remove(),n.contextArea=i.merge(r).style("opacity",0)},t.prototype.redrawAreaForSubchart=function(t,n,e){(n?this.contextArea.transition(Math.random().toString()).duration(e):this.contextArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)},t.prototype.redrawSubchart=function(t,n,e,r,i,o,a){var u,s,c,l=this,f=l.d3
f.event&&"zoom"===f.event.type&&l.brush.selectionAsValue(l.x.orgDomain()),t&&(l.brush.empty()||l.brush.selectionAsValue(l.x.orgDomain()),u=l.generateDrawArea(i,!0),s=l.generateDrawBar(o,!0),c=l.generateDrawLine(a,!0),l.updateBarForSubchart(e),l.updateLineForSubchart(e),l.updateAreaForSubchart(e),l.redrawBarForSubchart(s,e,e),l.redrawLineForSubchart(c,e,e),l.redrawAreaForSubchart(u,e,e))},t.prototype.redrawForBrush=function(){var t,n=this,e=n.x,r=n.d3
n.redraw({withTransition:!1,withY:n.config.zoom_rescale,withSubchart:!1,withUpdateXDomain:!0,withEventRect:!1,withDimension:!1}),t=r.event.selection||n.brush.scale.range(),n.main.select("."+b.eventRect).call(n.zoom.transform,r.zoomIdentity.scale(n.width/(t[1]-t[0])).translate(-t[0],0)),n.config.subchart_onbrush.call(n.api,e.orgDomain())},t.prototype.transformContext=function(t,n){var e,r=this
n&&n.axisSubX?e=n.axisSubX:(e=r.context.select("."+b.axisX),t&&(e=e.transition())),r.context.attr("transform",r.getTranslate("context")),e.attr("transform",r.getTranslate("subx"))},t.prototype.getDefaultSelection=function(){var t=this,n=t.config,e=h(n.axis_x_selection)?n.axis_x_selection(t.getXDomain(t.data.targets)):n.axis_x_selection
return t.isTimeSeries()&&(e=[t.parseDate(e[0]),t.parseDate(e[1])]),e},t.prototype.removeSubchart=function(){var t=this
t.brush=null,t.context.remove(),t.context=null},t.prototype.initText=function(){var t=this
t.main.select("."+b.chart).append("g").attr("class",b.chartTexts),t.mainText=t.d3.selectAll([])},t.prototype.updateTargetsForText=function(t){var n=this,e=n.classChartText.bind(n),r=n.classTexts.bind(n),i=n.classFocus.bind(n),o=n.main.select("."+b.chartTexts).selectAll("."+b.chartText).data(t),a=o.enter().append("g").attr("class",e).style("opacity",0).style("pointer-events","none")
a.append("g").attr("class",r),a.merge(o).attr("class",(function(t){return e(t)+i(t)}))},t.prototype.updateText=function(t,n,e){var r=this,i=r.config,o=r.barOrLineData.bind(r),a=r.classText.bind(r),u=r.main.selectAll("."+b.texts).selectAll("."+b.text).data(o),s=u.enter().append("text").attr("class",a).attr("text-anchor",(function(t){return i.axis_rotated?t.value<0?"end":"start":"middle"})).style("stroke","none").attr("x",t).attr("y",n).style("fill",(function(t){return r.color(t)})).style("fill-opacity",0)
r.mainText=s.merge(u).text((function(t,n,e){return r.dataLabelFormat(t.id)(t.value,t.id,n,e)})),u.exit().transition().duration(e).style("fill-opacity",0).remove()},t.prototype.redrawText=function(t,n,e,r,i){return[(r?this.mainText.transition(i):this.mainText).attr("x",t).attr("y",n).style("fill",this.color).style("fill-opacity",e?0:this.opacityForText.bind(this))]},t.prototype.getTextRect=function(t,n,e){var r,i=this.d3.select("body").append("div").classed("c3",!0),o=i.append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0),a=this.d3.select(e).style("font")
return o.selectAll(".dummy").data([t]).enter().append("text").classed(n||"",!0).style("font",a).text(t).each((function(){r=s(this)})),i.remove(),r},t.prototype.generateXYForText=function(t,n,e,r){var i=this,o=i.generateGetAreaPoints(t,!1),a=i.generateGetBarPoints(n,!1),u=i.generateGetLinePoints(e,!1),s=r?i.getXForText:i.getYForText
return function(t,n){var e=i.isAreaType(t)?o:i.isBarType(t)?a:u
return s.call(i,e(t,n),t,this)}},t.prototype.getXForText=function(t,n,e){var r,i,o=this,a=s(e)
return o.config.axis_rotated?(i=o.isBarType(n)?4:6,r=t[2][1]+i*(n.value<0?-1:1)):r=o.hasType("bar")?(t[2][0]+t[0][0])/2:t[0][0],null===n.value&&(r>o.width?r=o.width-a.width:r<0&&(r=4)),r},t.prototype.getYForText=function(t,n,e){var r,i=this,o=s(e)
return i.config.axis_rotated?r=(t[0][0]+t[2][0]+.6*o.height)/2:(r=t[2][1],n.value<0||0===n.value&&!i.hasPositiveValue?(r+=o.height,i.isBarType(n)&&i.isSafari()?r-=3:!i.isBarType(n)&&i.isChrome()&&(r+=3)):r+=i.isBarType(n)?-3:-6),null!==n.value||i.config.axis_rotated||(r<o.height?r=o.height:r>this.height&&(r=this.height-4)),r},t.prototype.initTitle=function(){var t=this
t.title=t.svg.append("text").text(t.config.title_text).attr("class",t.CLASS.title)},t.prototype.redrawTitle=function(){var t=this
t.title.attr("x",t.xForTitle.bind(t)).attr("y",t.yForTitle.bind(t))},t.prototype.xForTitle=function(){var t=this,n=t.config,e=n.title_position||"left"
return e.indexOf("right")>=0?t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width-n.title_padding.right:e.indexOf("center")>=0?Math.max((t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width)/2,0):n.title_padding.left},t.prototype.yForTitle=function(){var t=this
return t.config.title_padding.top+t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).height},t.prototype.getTitlePadding=function(){return this.yForTitle()+this.config.title_padding.bottom},t.prototype.drawColorScale=function(){var t,n,e,r,i,o,a,u=this,s=u.d3,c=u.config,l=u.data.targets[0]
if((t=isNaN(c.stanford_scaleWidth)?20:c.stanford_scaleWidth)<0)throw Error("Colorscale's barheight and barwidth must be greater than 0.")
a=u.height-c.stanford_padding.bottom-c.stanford_padding.top,e=s.range(c.stanford_padding.bottom,a,5),o=s.scaleSequential(l.colors).domain([e[e.length-1],e[0]]),u.colorScale&&u.colorScale.remove(),u.colorScale=u.svg.append("g").attr("width",50).attr("height",a).attr("class",b.colorScale),u.colorScale.append("g").attr("transform","translate(0, "+c.stanford_padding.top+")").selectAll("bars").data(e).enter().append("rect").attr("y",(function(t,n){return 5*n})).attr("x",0).attr("width",t).attr("height",5).attr("fill",(function(t){return o(t)})),i=s.scaleLog().domain([l.minEpochs,l.maxEpochs]).range([e[0]+c.stanford_padding.top+e[e.length-1]+5-1,e[0]+c.stanford_padding.top]),r=s.axisRight(i),"pow10"===c.stanford_scaleFormat?r.tickValues([1,10,100,1e3,1e4,1e5,1e6,1e7]):h(c.stanford_scaleFormat)?r.tickFormat(c.stanford_scaleFormat):r.tickFormat(s.format("d")),h(c.stanford_scaleValues)&&r.tickValues(c.stanford_scaleValues(l.minEpochs,l.maxEpochs)),n=u.colorScale.append("g").attr("class","legend axis").attr("transform","translate("+t+",0)").call(r),"pow10"===c.stanford_scaleFormat&&n.selectAll(".tick text").text(null).filter(T).text(10).append("tspan").attr("dy","-.7em").text((function(t){return Math.round(Math.log(t)/Math.LN10)})),u.colorScale.attr("transform","translate("+(u.currentWidth-u.xForColorScale())+", 0)")},t.prototype.xForColorScale=function(){return this.config.stanford_padding.right+s(this.colorScale.node()).width},t.prototype.getColorScalePadding=function(){return this.xForColorScale()+this.config.stanford_padding.left+20},t.prototype.isStanfordGraphType=function(){return"stanford"===this.config.data_type},t.prototype.initStanfordData=function(){var t,n,e,r=this,i=r.d3,o=r.config,a=r.data.targets[0]
if(a.values.sort(E),t=a.values.map((function(t){return t.epochs})),(e=isNaN(o.stanford_scaleMin)?i.min(t):o.stanford_scaleMin)>(n=isNaN(o.stanford_scaleMax)?i.max(t):o.stanford_scaleMax))throw Error("Number of minEpochs has to be smaller than maxEpochs")
a.colors=h(o.stanford_colors)?o.stanford_colors:i.interpolateHslLong(i.hsl(250,1,.5),i.hsl(0,1,.5)),a.colorscale=i.scaleSequentialLog(a.colors).domain([e,n]),a.minEpochs=e,a.maxEpochs=n},t.prototype.getStanfordPointColor=function(t){return this.data.targets[0].colorscale(t.epochs)},t.prototype.getCentroid=function(t){var n,e,r,i,o,a=C(t),u=0,s=0
for(n=0,e=t.length-1;n<t.length;e=n,n+=1)i=t[n],o=t[e],r=i.x*o.y-o.x*i.y,u+=(i.x+o.x)*r,s+=(i.y+o.y)*r
return{x:u/(r=6*a),y:s/r}},t.prototype.getStanfordTooltipTitle=function(t){var n=this.axis.getLabelText("x"),e=this.axis.getLabelText("y")
return"\n      <tr><th>"+(n?v(n):"x")+"</th><th class='value'>"+t.x+"</th></tr>\n      <tr><th>"+(e?v(e):"y")+"</th><th class='value'>"+t.value+"</th></tr>\n    "},t.prototype.countEpochsInRegion=function(t){var n,e,r=this.data.targets[0]
return n=r.values.reduce((function(t,n){return t+Number(n.epochs)}),0),{value:e=r.values.reduce((function(n,e){return P(e,t)?n+Number(e.epochs):n}),0),percentage:0!==e?(e/n*100).toFixed(1):0}}
var C=function(t){var n,e,r,i,o=0
for(n=0,e=t.length-1;n<t.length;e=n,n+=1)r=t[n],i=t[e],o+=r.x*i.y,o-=r.y*i.x
return o/2},P=function(t,n){for(var e,r,i,o,a=t.x,u=t.value,s=!1,c=0,l=n.length-1;c<n.length;l=c++)e=n[c].x,r=n[c].y,o=n[l].x,r>u!=(i=n[l].y)>u&&a<(o-e)*(u-r)/(i-r)+e&&(s=!s)
return s},E=function(t,n){return t.epochs<n.epochs?-1:t.epochs>n.epochs?1:0}
return t.prototype.initStanfordElements=function(){var t=this
t.stanfordElements=t.main.select("."+b.chart).append("g").attr("class",b.stanfordElements),t.stanfordElements.append("g").attr("class",b.stanfordLines),t.stanfordElements.append("g").attr("class",b.stanfordTexts),t.stanfordElements.append("g").attr("class",b.stanfordRegions)},t.prototype.updateStanfordElements=function(t){var n,e,r,i,o,a,u=this,s=u.main,c=u.config,l=u.xvCustom.bind(u),f=u.yvCustom.bind(u),h=u.countEpochsInRegion.bind(u);(e=(n=s.select("."+b.stanfordLines).style("shape-rendering","geometricprecision").selectAll("."+b.stanfordLine).data(c.stanford_lines)).enter().append("g").attr("class",(function(t){return b.stanfordLine+(t.class?" "+t.class:"")}))).append("line").attr("x1",(function(t){return c.axis_rotated?f(t,"value_y1"):l(t,"value_x1")})).attr("x2",(function(t){return c.axis_rotated?f(t,"value_y2"):l(t,"value_x2")})).attr("y1",(function(t){return c.axis_rotated?l(t,"value_x1"):f(t,"value_y1")})).attr("y2",(function(t){return c.axis_rotated?l(t,"value_x2"):f(t,"value_y2")})).style("opacity",0),u.stanfordLines=e.merge(n),u.stanfordLines.select("line").transition().duration(t).attr("x1",(function(t){return c.axis_rotated?f(t,"value_y1"):l(t,"value_x1")})).attr("x2",(function(t){return c.axis_rotated?f(t,"value_y2"):l(t,"value_x2")})).attr("y1",(function(t){return c.axis_rotated?l(t,"value_x1"):f(t,"value_y1")})).attr("y2",(function(t){return c.axis_rotated?l(t,"value_x2"):f(t,"value_y2")})).style("opacity",1),n.exit().transition().duration(t).style("opacity",0).remove(),(a=(o=s.select("."+b.stanfordTexts).selectAll("."+b.stanfordText).data(c.stanford_texts)).enter().append("g").attr("class",(function(t){return b.stanfordText+(t.class?" "+t.class:"")}))).append("text").attr("x",(function(t){return c.axis_rotated?f(t,"y"):l(t,"x")})).attr("y",(function(t){return c.axis_rotated?l(t,"x"):f(t,"y")})).style("opacity",0),u.stanfordTexts=a.merge(o),u.stanfordTexts.select("text").transition().duration(t).attr("x",(function(t){return c.axis_rotated?f(t,"y"):l(t,"x")})).attr("y",(function(t){return c.axis_rotated?l(t,"x"):f(t,"y")})).text((function(t){return t.content})).style("opacity",1),o.exit().transition().duration(t).style("opacity",0).remove(),(i=(r=s.select("."+b.stanfordRegions).selectAll("."+b.stanfordRegion).data(c.stanford_regions)).enter().append("g").attr("class",(function(t){return b.stanfordRegion+(t.class?" "+t.class:"")}))).append("polygon").attr("points",(function(t){return t.points.map((function(t){return[c.axis_rotated?f(t,"y"):l(t,"x"),c.axis_rotated?l(t,"x"):f(t,"y")].join(",")})).join(" ")})).style("opacity",0),i.append("text").attr("x",(function(t){return u.getCentroid(t.points).x})).attr("y",(function(t){return u.getCentroid(t.points).y})).style("opacity",0),u.stanfordRegions=i.merge(r),u.stanfordRegions.select("polygon").transition().duration(t).attr("points",(function(t){return t.points.map((function(t){return[c.axis_rotated?f(t,"y"):l(t,"x"),c.axis_rotated?l(t,"x"):f(t,"y")].join(",")})).join(" ")})).style("opacity",(function(t){return t.opacity?t.opacity:.2})),u.stanfordRegions.select("text").transition().duration(t).attr("x",(function(t){return c.axis_rotated?f(u.getCentroid(t.points),"y"):l(u.getCentroid(t.points),"x")})).attr("y",(function(t){return c.axis_rotated?l(u.getCentroid(t.points),"x"):f(u.getCentroid(t.points),"y")})).text((function(t){var n,e,r
return t.text?(u.isStanfordGraphType()&&(n=(r=h(t.points)).value,e=r.percentage),t.text(n,e)):""})).attr("text-anchor","middle").attr("dominant-baseline","middle").style("opacity",1),r.exit().transition().duration(t).style("opacity",0).remove()},t.prototype.initTooltip=function(){var t,n=this,e=n.config
if(n.tooltip=n.selectChart.style("position","relative").append("div").attr("class",b.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none"),e.tooltip_init_show){if(n.isTimeSeries()&&p(e.tooltip_init_x)){for(e.tooltip_init_x=n.parseDate(e.tooltip_init_x),t=0;t<n.data.targets[0].values.length&&n.data.targets[0].values[t].x-e.tooltip_init_x!=0;t++);e.tooltip_init_x=t}n.tooltip.html(e.tooltip_contents.call(n,n.data.targets.map((function(t){return n.addName(t.values[e.tooltip_init_x])})),n.axis.getXAxisTickFormat(),n.getYFormat(n.hasArcType()),n.color)),n.tooltip.style("top",e.tooltip_init_position.top).style("left",e.tooltip_init_position.left).style("display","block")}},t.prototype.getTooltipSortFunction=function(){var t=this,n=t.config
if(0!==n.data_groups.length&&void 0===n.tooltip_order){var e=t.orderTargets(t.data.targets).map((function(t){return t.id}))
return(t.isOrderAsc()||t.isOrderDesc())&&(e=e.reverse()),function(t,n){return e.indexOf(t.id)-e.indexOf(n.id)}}var r=n.tooltip_order
void 0===r&&(r=n.data_order)
var i=function(t){return t?t.value:null}
if(p(r)&&"asc"===r.toLowerCase())return function(t,n){return i(t)-i(n)}
if(p(r)&&"desc"===r.toLowerCase())return function(t,n){return i(n)-i(t)}
if(h(r)){var o=r
return void 0===n.tooltip_order&&(o=function(t,n){return r(t?{id:t.id,values:[t]}:null,n?{id:n.id,values:[n]}:null)}),o}return c(r)?function(t,n){return r.indexOf(t.id)-r.indexOf(n.id)}:void 0},t.prototype.getTooltipContent=function(t,n,e,r){var i,o,a,u,s,c,l=this,f=l.config,h=f.tooltip_format_title||n,d=f.tooltip_format_name||function(t){return t},p=f.tooltip_format_value
p||(p=l.isTargetNormalized(t.id)?function(t,n){return(100*n).toFixed(2)+"%"}:e)
var g=this.getTooltipSortFunction()
for(g&&t.sort(g),o=0;o<t.length;o++)if(t[o]&&(t[o].value||0===t[o].value)){if(l.isStanfordGraphType())i||(a=l.getStanfordTooltipTitle(t[o]),i="<table class='"+l.CLASS.tooltip+"'>"+a),c=l.getStanfordPointColor(t[o]),s=v(f.data_epochs),u=t[o].epochs
else if(i||(a=v(h?h(t[o].x,t[o].index):t[o].x),i="<table class='"+l.CLASS.tooltip+"'>"+(a||0===a?"<tr><th colspan='2'>"+a+"</th></tr>":"")),void 0!==(u=v(p(t[o].value,t[o].ratio,t[o].id,t[o].index,t)))){if(null===t[o].name)continue
s=v(d(t[o].name,t[o].ratio,t[o].id,t[o].index)),c=l.levelColor?l.levelColor(t[o].value):r(t[o].id)}void 0!==u&&(i+="<tr class='"+l.CLASS.tooltipName+"-"+l.getTargetSelectorSuffix(t[o].id)+"'>",i+="<td class='name'><span style='background-color:"+c+"'></span>"+s+"</td>",i+="<td class='value'>"+u+"</td>",i+="</tr>")}return i+"</table>"},t.prototype.tooltipPosition=function(t,n,e,r){var i,o,a,u,s,c=this,l=c.config,f=c.d3,h=c.hasArcType(),d=f.mouse(r)
return h?(o=(c.width-(c.isLegendRight?c.getLegendWidth():0))/2+d[0],u=(c.hasType("gauge")?c.height:c.height/2)+d[1]+20):(i=c.getSvgLeft(!0),l.axis_rotated?(a=(o=i+d[0]+100)+n,s=c.currentWidth-c.getCurrentPaddingRight(),u=c.x(t[0].x)+20):(a=(o=i+c.getCurrentPaddingLeft(!0)+c.x(t[0].x)+20)+n,s=i+c.currentWidth-c.getCurrentPaddingRight(),u=d[1]+15),a>s&&(o-=a-s+20),u+e>c.currentHeight&&(u-=e+30)),u<0&&(u=0),{top:u,left:o}},t.prototype.showTooltip=function(n,e){var r,i,o,a=this,u=a.config,s=a.hasArcType(),c=n.filter((function(t){return t&&y(t.value)})),l=u.tooltip_position||t.prototype.tooltipPosition
0!==c.length&&u.tooltip_show?(a.tooltip.html(u.tooltip_contents.call(a,n,a.axis.getXAxisTickFormat(),a.getYFormat(s),a.color)).style("display","block"),r=a.tooltip.property("offsetWidth"),i=a.tooltip.property("offsetHeight"),o=l.call(this,c,r,i,e),a.tooltip.style("top",o.top+"px").style("left",o.left+"px")):a.hideTooltip()},t.prototype.hideTooltip=function(){this.tooltip.style("display","none")},t.prototype.setTargetType=function(t,n){var e=this,r=e.config
e.mapToTargetIds(t).forEach((function(t){e.withoutFadeIn[t]=n===r.data_types[t],r.data_types[t]=n})),t||(r.data_type=n)},t.prototype.hasType=function(t,n){var e=this,r=e.config.data_types,i=!1
return(n=n||e.data.targets)&&n.length?n.forEach((function(n){var e=r[n.id];(e&&e.indexOf(t)>=0||!e&&"line"===t)&&(i=!0)})):Object.keys(r).length?Object.keys(r).forEach((function(n){r[n]===t&&(i=!0)})):i=e.config.data_type===t,i},t.prototype.hasArcType=function(t){return this.hasType("pie",t)||this.hasType("donut",t)||this.hasType("gauge",t)},t.prototype.isLineType=function(t){var n=this.config,e=p(t)?t:t.id
return!n.data_types[e]||["line","spline","area","area-spline","step","area-step"].indexOf(n.data_types[e])>=0},t.prototype.isStepType=function(t){var n=p(t)?t:t.id
return["step","area-step"].indexOf(this.config.data_types[n])>=0},t.prototype.isSplineType=function(t){var n=p(t)?t:t.id
return["spline","area-spline"].indexOf(this.config.data_types[n])>=0},t.prototype.isAreaType=function(t){var n=p(t)?t:t.id
return["area","area-spline","area-step"].indexOf(this.config.data_types[n])>=0},t.prototype.isBarType=function(t){var n=p(t)?t:t.id
return"bar"===this.config.data_types[n]},t.prototype.isScatterType=function(t){var n=p(t)?t:t.id
return"scatter"===this.config.data_types[n]},t.prototype.isStanfordType=function(t){var n=p(t)?t:t.id
return"stanford"===this.config.data_types[n]},t.prototype.isPieType=function(t){var n=p(t)?t:t.id
return"pie"===this.config.data_types[n]},t.prototype.isGaugeType=function(t){var n=p(t)?t:t.id
return"gauge"===this.config.data_types[n]},t.prototype.isDonutType=function(t){var n=p(t)?t:t.id
return"donut"===this.config.data_types[n]},t.prototype.isArcType=function(t){return this.isPieType(t)||this.isDonutType(t)||this.isGaugeType(t)},t.prototype.lineData=function(t){return this.isLineType(t)?[t]:[]},t.prototype.arcData=function(t){return this.isArcType(t.data)?[t]:[]},t.prototype.barData=function(t){return this.isBarType(t)?t.values:[]},t.prototype.lineOrScatterOrStanfordData=function(t){return this.isLineType(t)||this.isScatterType(t)||this.isStanfordType(t)?t.values:[]},t.prototype.barOrLineData=function(t){return this.isBarType(t)||this.isLineType(t)?t.values:[]},t.prototype.isSafari=function(){var t=window.navigator.userAgent
return t.indexOf("Safari")>=0&&t.indexOf("Chrome")<0},t.prototype.isChrome=function(){return window.navigator.userAgent.indexOf("Chrome")>=0},t.prototype.initZoom=function(){var t,n=this,e=n.d3,r=n.config
return n.zoom=e.zoom().on("start",(function(){if("scroll"===r.zoom_type){var i=e.event.sourceEvent
i&&"brush"===i.type||(t=i,r.zoom_onzoomstart.call(n.api,i))}})).on("zoom",(function(){if("scroll"===r.zoom_type){var t=e.event.sourceEvent
t&&"brush"===t.type||(n.redrawForZoom(),r.zoom_onzoom.call(n.api,n.x.orgDomain()))}})).on("end",(function(){if("scroll"===r.zoom_type){var i=e.event.sourceEvent
i&&"brush"===i.type||i&&t.clientX===i.clientX&&t.clientY===i.clientY||r.zoom_onzoomend.call(n.api,n.x.orgDomain())}})),n.zoom.updateDomain=function(){return e.event&&e.event.transform&&(r.axis_rotated&&"scroll"===r.zoom_type&&"mousemove"===e.event.sourceEvent.type?n.x.domain(e.event.transform.rescaleY(n.subX).domain()):n.x.domain(e.event.transform.rescaleX(n.subX).domain())),this},n.zoom.updateExtent=function(){return this.scaleExtent([1,1/0]).translateExtent([[0,0],[n.width,n.height]]).extent([[0,0],[n.width,n.height]]),this},n.zoom.update=function(){return this.updateExtent().updateDomain()},n.zoom.updateExtent()},t.prototype.zoomTransform=function(t){var n=this,e=[n.x(t[0]),n.x(t[1])]
return n.d3.zoomIdentity.scale(n.width/(e[1]-e[0])).translate(-e[0],0)},t.prototype.initDragZoom=function(){var t=this,n=t.d3,e=t.config,r=t.context=t.svg,i=t.margin.left+20.5,o=t.margin.top+.5
if("drag"===e.zoom_type&&e.zoom_enabled){var a=function(n){return n&&n.map((function(n){return t.x.invert(n)}))},u=t.dragZoomBrush=n.brushX().on("start",(function(){t.api.unzoom(),t.svg.select("."+b.dragZoom).classed("disabled",!1),e.zoom_onzoomstart.call(t.api,n.event.sourceEvent)})).on("brush",(function(){e.zoom_onzoom.call(t.api,a(n.event.selection))})).on("end",(function(){if(null!=n.event.selection){var r=a(n.event.selection)
e.zoom_disableDefaultBehavior||t.api.zoom(r),t.svg.select("."+b.dragZoom).classed("disabled",!0),e.zoom_onzoomend.call(t.api,r)}}))
r.append("g").classed(b.dragZoom,!0).attr("clip-path",t.clipPath).attr("transform","translate("+i+","+o+")").call(u)}},t.prototype.getZoomDomain=function(){var t=this,n=t.config,e=t.d3
return[e.min([t.orgXDomain[0],n.zoom_x_min]),e.max([t.orgXDomain[1],n.zoom_x_max])]},t.prototype.redrawForZoom=function(){var t=this,n=t.d3,e=t.config,r=t.zoom,i=t.x
e.zoom_enabled&&0!==t.filterTargetsToShow(t.data.targets).length&&(r.update(),e.zoom_disableDefaultBehavior||(t.isCategorized()&&i.orgDomain()[0]===t.orgXDomain[0]&&i.domain([t.orgXDomain[0]-1e-10,i.orgDomain()[1]]),t.redraw({withTransition:!1,withY:e.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),n.event.sourceEvent&&"mousemove"===n.event.sourceEvent.type&&(t.cancelClick=!0)))},A}()},164:(t,n,e)=>{"use strict"
e.r(n),e.d(n,{FormatSpecifier:()=>cs,active:()=>Jr,arc:()=>hb,area:()=>vb,areaRadial:()=>Cb,ascending:()=>i,autoType:()=>Da,axisBottom:()=>it,axisLeft:()=>ot,axisRight:()=>rt,axisTop:()=>et,bisect:()=>c,bisectLeft:()=>s,bisectRight:()=>u,bisector:()=>o,blob:()=>_u,brush:()=>Pi,brushSelection:()=>Mi,brushX:()=>Ti,brushY:()=>Ci,buffer:()=>mu,chord:()=>Di,clientPoint:()=>Ne,cluster:()=>Cd,color:()=>Wn,contourDensity:()=>ua,contours:()=>na,create:()=>zx,creator:()=>on,cross:()=>h,csv:()=>Au,csvFormat:()=>Aa,csvFormatBody:()=>Ma,csvFormatRow:()=>Ca,csvFormatRows:()=>Ta,csvFormatValue:()=>Pa,csvParse:()=>wa,csvParseRows:()=>Sa,cubehelix:()=>Xo,curveBasis:()=>uw,curveBasisClosed:()=>cw,curveBasisOpen:()=>fw,curveBundle:()=>dw,curveCardinal:()=>yw,curveCardinalClosed:()=>vw,curveCardinalOpen:()=>xw,curveCatmullRom:()=>Sw,curveCatmullRomClosed:()=>Mw,curveCatmullRomOpen:()=>Cw,curveLinear:()=>pb,curveLinearClosed:()=>Ew,curveMonotoneX:()=>Dw,curveMonotoneY:()=>Iw,curveNatural:()=>Yw,curveStep:()=>Bw,curveStepAfter:()=>Xw,curveStepBefore:()=>Hw,customEvent:()=>_n,descending:()=>d,deviation:()=>y,dispatch:()=>ht,drag:()=>pa,dragDisable:()=>Pn,dragEnable:()=>En,dsv:()=>Su,dsvFormat:()=>xa,easeBack:()=>fu,easeBackIn:()=>cu,easeBackInOut:()=>fu,easeBackOut:()=>lu,easeBounce:()=>au,easeBounceIn:()=>ou,easeBounceInOut:()=>uu,easeBounceOut:()=>au,easeCircle:()=>ru,easeCircleIn:()=>nu,easeCircleInOut:()=>ru,easeCircleOut:()=>eu,easeCubic:()=>Qr,easeCubicIn:()=>qr,easeCubicInOut:()=>Qr,easeCubicOut:()=>Wr,easeElastic:()=>pu,easeElasticIn:()=>du,easeElasticInOut:()=>gu,easeElasticOut:()=>pu,easeExp:()=>tu,easeExpIn:()=>Ka,easeExpInOut:()=>tu,easeExpOut:()=>Ja,easeLinear:()=>za,easePoly:()=>Xa,easePolyIn:()=>Ba,easePolyInOut:()=>Xa,easePolyOut:()=>Ha,easeQuad:()=>Ua,easeQuadIn:()=>Fa,easeQuadInOut:()=>Ua,easeQuadOut:()=>Ya,easeSin:()=>$a,easeSinIn:()=>Wa,easeSinInOut:()=>$a,easeSinOut:()=>Qa,entries:()=>go,event:()=>fn,extent:()=>_,forceCenter:()=>Ru,forceCollide:()=>ju,forceLink:()=>Qu,forceManyBody:()=>ts,forceRadial:()=>ns,forceSimulation:()=>Ju,forceX:()=>es,forceY:()=>rs,format:()=>ps,formatDefaultLocale:()=>ms,formatLocale:()=>vs,formatPrefix:()=>gs,formatSpecifier:()=>ss,geoAlbers:()=>Uh,geoAlbersUsa:()=>Bh,geoArea:()=>gc,geoAzimuthalEqualArea:()=>qh,geoAzimuthalEqualAreaRaw:()=>jh,geoAzimuthalEquidistant:()=>Qh,geoAzimuthalEquidistantRaw:()=>Wh,geoBounds:()=>ul,geoCentroid:()=>ml,geoCircle:()=>kl,geoClipAntimeridian:()=>Ul,geoClipCircle:()=>Bl,geoClipExtent:()=>ql,geoClipRectangle:()=>jl,geoConicConformal:()=>nd,geoConicConformalRaw:()=>td,geoConicEqualArea:()=>Yh,geoConicEqualAreaRaw:()=>Fh,geoConicEquidistant:()=>od,geoConicEquidistantRaw:()=>id,geoContains:()=>gf,geoDistance:()=>af,geoEqualEarth:()=>hd,geoEqualEarthRaw:()=>fd,geoEquirectangular:()=>rd,geoEquirectangularRaw:()=>ed,geoGnomonic:()=>pd,geoGnomonicRaw:()=>dd,geoGraticule:()=>vf,geoGraticule10:()=>mf,geoIdentity:()=>gd,geoInterpolate:()=>xf,geoLength:()=>ef,geoMercator:()=>Zh,geoMercatorRaw:()=>$h,geoNaturalEarth1:()=>_d,geoNaturalEarth1Raw:()=>yd,geoOrthographic:()=>md,geoOrthographicRaw:()=>vd,geoPath:()=>Sh,geoProjection:()=>Dh,geoProjectionMutator:()=>Ih,geoRotation:()=>Cl,geoStereographic:()=>bd,geoStereographicRaw:()=>xd,geoStream:()=>ec,geoTransform:()=>Ah,geoTransverseMercator:()=>Sd,geoTransverseMercatorRaw:()=>wd,gray:()=>Ao,hcl:()=>Ro,hierarchy:()=>Ed,histogram:()=>N,hsl:()=>oe,html:()=>Nu,image:()=>Tu,interpolate:()=>Ee,interpolateArray:()=>be,interpolateBasis:()=>ce,interpolateBasisClosed:()=>le,interpolateBlues:()=>hx,interpolateBrBG:()=>Am,interpolateBuGn:()=>Um,interpolateBuPu:()=>Hm,interpolateCividis:()=>Sx,interpolateCool:()=>Tx,interpolateCubehelix:()=>Yp,interpolateCubehelixDefault:()=>Ax,interpolateCubehelixLong:()=>Up,interpolateDate:()=>Se,interpolateDiscrete:()=>Cp,interpolateGnBu:()=>jm,interpolateGreens:()=>px,interpolateGreys:()=>yx,interpolateHcl:()=>Ip,interpolateHclLong:()=>zp,interpolateHsl:()=>Vp,interpolateHslLong:()=>Op,interpolateHue:()=>Pp,interpolateInferno:()=>Dx,interpolateLab:()=>Gp,interpolateMagma:()=>Gx,interpolateNumber:()=>Ae,interpolateNumberArray:()=>me,interpolateObject:()=>Me,interpolateOrRd:()=>Wm,interpolateOranges:()=>wx,interpolatePRGn:()=>Tm,interpolatePiYG:()=>Pm,interpolatePlasma:()=>Ix,interpolatePuBu:()=>Km,interpolatePuBuGn:()=>$m,interpolatePuOr:()=>km,interpolatePuRd:()=>tx,interpolatePurples:()=>vx,interpolateRainbow:()=>Px,interpolateRdBu:()=>Lm,interpolateRdGy:()=>Vm,interpolateRdPu:()=>ex,interpolateRdYlBu:()=>Gm,interpolateRdYlGn:()=>Im,interpolateReds:()=>xx,interpolateRgb:()=>ge,interpolateRgbBasis:()=>_e,interpolateRgbBasisClosed:()=>ve,interpolateRound:()=>Ep,interpolateSinebow:()=>Lx,interpolateSpectral:()=>Fm,interpolateString:()=>Pe,interpolateTransformCss:()=>pr,interpolateTransformSvg:()=>gr,interpolateTurbo:()=>Rx,interpolateViridis:()=>Ox,interpolateWarm:()=>Mx,interpolateYlGn:()=>ax,interpolateYlGnBu:()=>ix,interpolateYlOrBr:()=>sx,interpolateYlOrRd:()=>lx,interpolateZoom:()=>Lp,interrupt:()=>or,interval:()=>hS,isoFormat:()=>cS,isoParse:()=>fS,json:()=>Pu,keys:()=>ho,lab:()=>Mo,lch:()=>Lo,line:()=>_b,lineRadial:()=>Tb,linkHorizontal:()=>Gb,linkRadial:()=>Ib,linkVertical:()=>Db,local:()=>Yx,map:()=>eo,matcher:()=>_t,max:()=>O,mean:()=>G,median:()=>D,merge:()=>I,min:()=>z,mouse:()=>Re,namespace:()=>Mt,namespaces:()=>At,nest:()=>ro,now:()=>He,pack:()=>tp,packEnclose:()=>Od,packSiblings:()=>Wd,pairs:()=>l,partition:()=>ap,path:()=>ji,permute:()=>F,pie:()=>bb,piecewise:()=>Bp,pointRadial:()=>Pb,polygonArea:()=>Xp,polygonCentroid:()=>jp,polygonContains:()=>Zp,polygonHull:()=>$p,polygonLength:()=>Kp,precisionFixed:()=>xs,precisionPrefix:()=>bs,precisionRound:()=>ws,quadtree:()=>Fu,quantile:()=>L,quantize:()=>Hp,radialArea:()=>Cb,radialLine:()=>Tb,randomBates:()=>ig,randomExponential:()=>og,randomIrwinHall:()=>rg,randomLogNormal:()=>eg,randomNormal:()=>ng,randomUniform:()=>tg,range:()=>S,rgb:()=>Kn,ribbon:()=>Ki,scaleBand:()=>dg,scaleDiverging:()=>am,scaleDivergingLog:()=>um,scaleDivergingPow:()=>cm,scaleDivergingSqrt:()=>lm,scaleDivergingSymlog:()=>sm,scaleIdentity:()=>Eg,scaleImplicit:()=>fg,scaleLinear:()=>Pg,scaleLog:()=>Ig,scaleOrdinal:()=>hg,scalePoint:()=>gg,scalePow:()=>qg,scaleQuantile:()=>Qg,scaleQuantize:()=>$g,scaleSequential:()=>Jv,scaleSequentialLog:()=>tm,scaleSequentialPow:()=>em,scaleSequentialQuantile:()=>im,scaleSequentialSqrt:()=>rm,scaleSequentialSymlog:()=>nm,scaleSqrt:()=>Wg,scaleSymlog:()=>Ug,scaleThreshold:()=>Zg,scaleTime:()=>Fv,scaleUtc:()=>$v,scan:()=>Y,schemeAccent:()=>dm,schemeBlues:()=>fx,schemeBrBG:()=>Sm,schemeBuGn:()=>Ym,schemeBuPu:()=>Bm,schemeCategory10:()=>hm,schemeDark2:()=>pm,schemeGnBu:()=>Xm,schemeGreens:()=>dx,schemeGreys:()=>gx,schemeOrRd:()=>qm,schemeOranges:()=>bx,schemePRGn:()=>Mm,schemePaired:()=>gm,schemePastel1:()=>ym,schemePastel2:()=>_m,schemePiYG:()=>Cm,schemePuBu:()=>Zm,schemePuBuGn:()=>Qm,schemePuOr:()=>Em,schemePuRd:()=>Jm,schemePurples:()=>_x,schemeRdBu:()=>Nm,schemeRdGy:()=>Rm,schemeRdPu:()=>nx,schemeRdYlBu:()=>Om,schemeRdYlGn:()=>Dm,schemeReds:()=>mx,schemeSet1:()=>vm,schemeSet2:()=>mm,schemeSet3:()=>xm,schemeSpectral:()=>zm,schemeTableau10:()=>bm,schemeYlGn:()=>ox,schemeYlGnBu:()=>rx,schemeYlOrBr:()=>ux,schemeYlOrRd:()=>cx,select:()=>Mn,selectAll:()=>Bx,selection:()=>An,selector:()=>pt,selectorAll:()=>yt,set:()=>fo,shuffle:()=>U,stack:()=>Qw,stackOffsetDiverging:()=>Zw,stackOffsetExpand:()=>$w,stackOffsetNone:()=>jw,stackOffsetSilhouette:()=>Kw,stackOffsetWiggle:()=>Jw,stackOrderAppearance:()=>tS,stackOrderAscending:()=>eS,stackOrderDescending:()=>iS,stackOrderInsideOut:()=>oS,stackOrderNone:()=>qw,stackOrderReverse:()=>aS,stratify:()=>fp,style:()=>Gt,sum:()=>B,svg:()=>Lu,symbol:()=>rw,symbolCircle:()=>zb,symbolCross:()=>Fb,symbolDiamond:()=>Bb,symbolSquare:()=>Wb,symbolStar:()=>qb,symbolTriangle:()=>$b,symbolWye:()=>nw,symbols:()=>ew,text:()=>bu,thresholdFreedmanDiaconis:()=>R,thresholdScott:()=>V,thresholdSturges:()=>k,tickFormat:()=>Tg,tickIncrement:()=>P,tickStep:()=>E,ticks:()=>C,timeDay:()=>Py,timeDays:()=>Ey,timeFormat:()=>p_,timeFormatDefaultLocale:()=>Ov,timeFormatLocale:()=>h_,timeFriday:()=>vy,timeFridays:()=>My,timeHour:()=>Ny,timeHours:()=>Ly,timeInterval:()=>ty,timeMillisecond:()=>Fy,timeMilliseconds:()=>Yy,timeMinute:()=>Vy,timeMinutes:()=>Oy,timeMonday:()=>py,timeMondays:()=>by,timeMonth:()=>oy,timeMonths:()=>ay,timeParse:()=>g_,timeSaturday:()=>my,timeSaturdays:()=>Ty,timeSecond:()=>Dy,timeSeconds:()=>Iy,timeSunday:()=>dy,timeSundays:()=>xy,timeThursday:()=>_y,timeThursdays:()=>Ay,timeTuesday:()=>gy,timeTuesdays:()=>wy,timeWednesday:()=>yy,timeWednesdays:()=>Sy,timeWeek:()=>dy,timeWeeks:()=>xy,timeYear:()=>ey,timeYears:()=>ry,timeout:()=>Ke,timer:()=>qe,timerFlush:()=>We,touch:()=>Le,touches:()=>Hx,transition:()=>Hr,transpose:()=>H,tree:()=>vp,treemap:()=>Sp,treemapBinary:()=>Ap,treemapDice:()=>op,treemapResquarify:()=>Tp,treemapSlice:()=>mp,treemapSliceDice:()=>Mp,treemapSquarify:()=>wp,tsv:()=>Mu,tsvFormat:()=>La,tsvFormatBody:()=>Ra,tsvFormatRow:()=>Oa,tsvFormatRows:()=>Va,tsvFormatValue:()=>Ga,tsvParse:()=>ka,tsvParseRows:()=>Na,utcDay:()=>i_,utcDays:()=>o_,utcFormat:()=>y_,utcFriday:()=>Wy,utcFridays:()=>n_,utcHour:()=>Xv,utcHours:()=>jv,utcMillisecond:()=>Fy,utcMilliseconds:()=>Yy,utcMinute:()=>Wv,utcMinutes:()=>Qv,utcMonday:()=>Hy,utcMondays:()=>Zy,utcMonth:()=>Uv,utcMonths:()=>Bv,utcParse:()=>__,utcSaturday:()=>Qy,utcSaturdays:()=>e_,utcSecond:()=>Dy,utcSeconds:()=>Iy,utcSunday:()=>By,utcSundays:()=>$y,utcThursday:()=>qy,utcThursdays:()=>t_,utcTuesday:()=>Xy,utcTuesdays:()=>Ky,utcWednesday:()=>jy,utcWednesdays:()=>Jy,utcWeek:()=>By,utcWeeks:()=>$y,utcYear:()=>u_,utcYears:()=>s_,values:()=>po,variance:()=>g,version:()=>r,voronoi:()=>KS,window:()=>Lt,xml:()=>ku,zip:()=>j,zoom:()=>hA,zoomIdentity:()=>eA,zoomTransform:()=>rA})
var r="5.16.0"
function i(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function o(t){var n
return 1===t.length&&(n=t,t=function(t,e){return i(n(t),e)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1
t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1
t(n[o],e)>0?i=o:r=o+1}return r}}}var a=o(i),u=a.right,s=a.left
const c=u
function l(t,n){null==n&&(n=f)
for(var e=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);e<r;)o[e]=n(i,i=t[++e])
return o}function f(t,n){return[t,n]}function h(t,n,e){var r,i,o,a,u=t.length,s=n.length,c=new Array(u*s)
for(null==e&&(e=f),r=o=0;r<u;++r)for(a=t[r],i=0;i<s;++i,++o)c[o]=e(a,n[i])
return c}function d(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function p(t){return null===t?NaN:+t}function g(t,n){var e,r,i=t.length,o=0,a=-1,u=0,s=0
if(null==n)for(;++a<i;)isNaN(e=p(t[a]))||(s+=(r=e-u)*(e-(u+=r/++o)))
else for(;++a<i;)isNaN(e=p(n(t[a],a,t)))||(s+=(r=e-u)*(e-(u+=r/++o)))
if(o>1)return s/(o-1)}function y(t,n){var e=g(t,n)
return e?Math.sqrt(e):e}function _(t,n){var e,r,i,o=t.length,a=-1
if(null==n){for(;++a<o;)if(null!=(e=t[a])&&e>=e)for(r=i=e;++a<o;)null!=(e=t[a])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++a<o;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=i=e;++a<o;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),i<e&&(i=e))
return[r,i]}var v=Array.prototype,m=v.slice,x=v.map
function b(t){return function(){return t}}function w(t){return t}function S(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e
for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e
return o}var A=Math.sqrt(50),M=Math.sqrt(10),T=Math.sqrt(2)
function C(t,n,e){var r,i,o,a,u=-1
if(e=+e,(t=+t)==(n=+n)&&e>0)return[t]
if((r=n<t)&&(i=t,t=n,n=i),0===(a=P(t,n,e))||!isFinite(a))return[]
if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a
else for(t=Math.floor(t*a),n=Math.ceil(n*a),o=new Array(i=Math.ceil(t-n+1));++u<i;)o[u]=(t-u)/a
return r&&o.reverse(),o}function P(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i)
return i>=0?(o>=A?10:o>=M?5:o>=T?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=A?10:o>=M?5:o>=T?2:1)}function E(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i
return o>=A?i*=10:o>=M?i*=5:o>=T&&(i*=2),n<t?-i:i}function k(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function N(){var t=w,n=_,e=k
function r(r){var i,o,a=r.length,u=new Array(a)
for(i=0;i<a;++i)u[i]=t(r[i],i,r)
var s=n(u),l=s[0],f=s[1],h=e(u,l,f)
Array.isArray(h)||(h=E(l,f,h),h=S(Math.ceil(l/h)*h,f,h))
for(var d=h.length;h[0]<=l;)h.shift(),--d
for(;h[d-1]>f;)h.pop(),--d
var p,g=new Array(d+1)
for(i=0;i<=d;++i)(p=g[i]=[]).x0=i>0?h[i-1]:l,p.x1=i<d?h[i]:f
for(i=0;i<a;++i)l<=(o=u[i])&&o<=f&&g[c(h,o,0,d)].push(r[i])
return g}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:b(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:b([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?b(m.call(t)):b(t),r):e},r}function L(t,n,e){if(null==e&&(e=p),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t)
if(n>=1)return+e(t[r-1],r-1,t)
var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t)
return a+(+e(t[o+1],o+1,t)-a)*(i-o)}}function R(t,n,e){return t=x.call(t,p).sort(i),Math.ceil((e-n)/(2*(L(t,.75)-L(t,.25))*Math.pow(t.length,-1/3)))}function V(t,n,e){return Math.ceil((e-n)/(3.5*y(t)*Math.pow(t.length,-1/3)))}function O(t,n){var e,r,i=t.length,o=-1
if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e)
return r}function G(t,n){var e,r=t.length,i=r,o=-1,a=0
if(null==n)for(;++o<r;)isNaN(e=p(t[o]))?--i:a+=e
else for(;++o<r;)isNaN(e=p(n(t[o],o,t)))?--i:a+=e
if(i)return a/i}function D(t,n){var e,r=t.length,o=-1,a=[]
if(null==n)for(;++o<r;)isNaN(e=p(t[o]))||a.push(e)
else for(;++o<r;)isNaN(e=p(n(t[o],o,t)))||a.push(e)
return L(a.sort(i),.5)}function I(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length
for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n]
return e}function z(t,n){var e,r,i=t.length,o=-1
if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e)
return r}function F(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]]
return r}function Y(t,n){if(e=t.length){var e,r,o=0,a=0,u=t[a]
for(null==n&&(n=i);++o<e;)(n(r=t[o],u)<0||0!==n(u,u))&&(u=r,a=o)
return 0===n(u,u)?a:void 0}}function U(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r
return t}function B(t,n){var e,r=t.length,i=-1,o=0
if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e)
else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e)
return o}function H(t){if(!(i=t.length))return[]
for(var n=-1,e=z(t,X),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n]
return r}function X(t){return t.length}function j(){return H(arguments)}var q=Array.prototype.slice
function W(t){return t}var Q=1e-6
function $(t){return"translate("+(t+.5)+",0)"}function Z(t){return"translate(0,"+(t+.5)+")"}function K(t){return function(n){return+t(n)}}function J(t){var n=Math.max(0,t.bandwidth()-1)/2
return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function tt(){return!this.__axis}function nt(t,n){var e=[],r=null,i=null,o=6,a=6,u=3,s=1===t||4===t?-1:1,c=4===t||2===t?"x":"y",l=1===t||3===t?$:Z
function f(f){var h=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,d=null==i?n.tickFormat?n.tickFormat.apply(n,e):W:i,p=Math.max(o,0)+u,g=n.range(),y=+g[0]+.5,_=+g[g.length-1]+.5,v=(n.bandwidth?J:K)(n.copy()),m=f.selection?f.selection():f,x=m.selectAll(".domain").data([null]),b=m.selectAll(".tick").data(h,n).order(),w=b.exit(),S=b.enter().append("g").attr("class","tick"),A=b.select("line"),M=b.select("text")
x=x.merge(x.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),b=b.merge(S),A=A.merge(S.append("line").attr("stroke","currentColor").attr(c+"2",s*o)),M=M.merge(S.append("text").attr("fill","currentColor").attr(c,s*p).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),f!==m&&(x=x.transition(f),b=b.transition(f),A=A.transition(f),M=M.transition(f),w=w.transition(f).attr("opacity",Q).attr("transform",(function(t){return isFinite(t=v(t))?l(t):this.getAttribute("transform")})),S.attr("opacity",Q).attr("transform",(function(t){var n=this.parentNode.__axis
return l(n&&isFinite(n=n(t))?n:v(t))}))),w.remove(),x.attr("d",4===t||2==t?a?"M"+s*a+","+y+"H0.5V"+_+"H"+s*a:"M0.5,"+y+"V"+_:a?"M"+y+","+s*a+"V0.5H"+_+"V"+s*a:"M"+y+",0.5H"+_),b.attr("opacity",1).attr("transform",(function(t){return l(v(t))})),A.attr(c+"2",s*o),M.attr(c,s*p).text(d),m.filter(tt).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),m.each((function(){this.__axis=v}))}return f.scale=function(t){return arguments.length?(n=t,f):n},f.ticks=function(){return e=q.call(arguments),f},f.tickArguments=function(t){return arguments.length?(e=null==t?[]:q.call(t),f):e.slice()},f.tickValues=function(t){return arguments.length?(r=null==t?null:q.call(t),f):r&&r.slice()},f.tickFormat=function(t){return arguments.length?(i=t,f):i},f.tickSize=function(t){return arguments.length?(o=a=+t,f):o},f.tickSizeInner=function(t){return arguments.length?(o=+t,f):o},f.tickSizeOuter=function(t){return arguments.length?(a=+t,f):a},f.tickPadding=function(t){return arguments.length?(u=+t,f):u},f}function et(t){return nt(1,t)}function rt(t){return nt(2,t)}function it(t){return nt(3,t)}function ot(t){return nt(4,t)}var at={value:function(){}}
function ut(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t)
r[t]=[]}return new st(r)}function st(t){this._=t}function ct(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".")
if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t)
return{type:t,name:e}}))}function lt(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function ft(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=at,t=t.slice(0,r).concat(t.slice(r+1))
break}return null!=e&&t.push({name:n,value:e}),t}st.prototype=ut.prototype={constructor:st,on:function(t,n){var e,r=this._,i=ct(t+"",r),o=-1,a=i.length
if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n)
for(;++o<a;)if(e=(t=i[o]).type)r[e]=ft(r[e],t.name,n)
else if(null==n)for(e in r)r[e]=ft(r[e],t.name,null)
return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=lt(r[e],t.name)))return e},copy:function(){var t={},n=this._
for(var e in n)t[e]=n[e].slice()
return new st(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2]
if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}}
const ht=ut
function dt(){}function pt(t){return null==t?dt:function(){return this.querySelector(t)}}function gt(){return[]}function yt(t){return null==t?gt:function(){return this.querySelectorAll(t)}}function _t(t){return function(){return this.matches(t)}}function vt(t){return new Array(t.length)}function mt(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function xt(t,n,e,r,i,o){for(var a,u=0,s=n.length,c=o.length;u<c;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new mt(t,o[u])
for(;u<s;++u)(a=n[u])&&(i[u]=a)}function bt(t,n,e,r,i,o,a){var u,s,c,l={},f=n.length,h=o.length,d=new Array(f)
for(u=0;u<f;++u)(s=n[u])&&(d[u]=c="$"+a.call(s,s.__data__,u,n),c in l?i[u]=s:l[c]=s)
for(u=0;u<h;++u)(s=l[c="$"+a.call(t,o[u],u,o)])?(r[u]=s,s.__data__=o[u],l[c]=null):e[u]=new mt(t,o[u])
for(u=0;u<f;++u)(s=n[u])&&l[d[u]]===s&&(i[u]=s)}function wt(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}mt.prototype={constructor:mt,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}
var St="http://www.w3.org/1999/xhtml"
const At={svg:"http://www.w3.org/2000/svg",xhtml:St,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}
function Mt(t){var n=t+="",e=n.indexOf(":")
return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),At.hasOwnProperty(n)?{space:At[n],local:t}:t}function Tt(t){return function(){this.removeAttribute(t)}}function Ct(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Pt(t,n){return function(){this.setAttribute(t,n)}}function Et(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function kt(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function Nt(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Lt(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Rt(t){return function(){this.style.removeProperty(t)}}function Vt(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Ot(t,n,e){return function(){var r=n.apply(this,arguments)
null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Gt(t,n){return t.style.getPropertyValue(n)||Lt(t).getComputedStyle(t,null).getPropertyValue(n)}function Dt(t){return function(){delete this[t]}}function It(t,n){return function(){this[t]=n}}function zt(t,n){return function(){var e=n.apply(this,arguments)
null==e?delete this[t]:this[t]=e}}function Ft(t){return t.trim().split(/^|\s+/)}function Yt(t){return t.classList||new Ut(t)}function Ut(t){this._node=t,this._names=Ft(t.getAttribute("class")||"")}function Bt(t,n){for(var e=Yt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Ht(t,n){for(var e=Yt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function Xt(t){return function(){Bt(this,t)}}function jt(t){return function(){Ht(this,t)}}function qt(t,n){return function(){(n.apply(this,arguments)?Bt:Ht)(this,t)}}function Wt(){this.textContent=""}function Qt(t){return function(){this.textContent=t}}function $t(t){return function(){var n=t.apply(this,arguments)
this.textContent=null==n?"":n}}function Zt(){this.innerHTML=""}function Kt(t){return function(){this.innerHTML=t}}function Jt(t){return function(){var n=t.apply(this,arguments)
this.innerHTML=null==n?"":n}}function tn(){this.nextSibling&&this.parentNode.appendChild(this)}function nn(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function en(t){return function(){var n=this.ownerDocument,e=this.namespaceURI
return e===St&&n.documentElement.namespaceURI===St?n.createElement(t):n.createElementNS(e,t)}}function rn(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function on(t){var n=Mt(t)
return(n.local?rn:en)(n)}function an(){return null}function un(){var t=this.parentNode
t&&t.removeChild(this)}function sn(){var t=this.cloneNode(!1),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function cn(){var t=this.cloneNode(!0),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}Ut.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t)
n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}}
var ln={},fn=null
function hn(t,n,e){return t=dn(t,n,e),function(n){var e=n.relatedTarget
e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function dn(t,n,e){return function(r){var i=fn
fn=r
try{t.call(this,this.__data__,n,e)}finally{fn=i}}}function pn(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".")
return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function gn(t){return function(){var n=this.__on
if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function yn(t,n,e){var r=ln.hasOwnProperty(t.type)?hn:dn
return function(i,o,a){var u,s=this.__on,c=r(n,o,a)
if(s)for(var l=0,f=s.length;l<f;++l)if((u=s[l]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=c,u.capture=e),void(u.value=n)
this.addEventListener(t.type,c,e),u={type:t.type,name:t.name,value:n,listener:c,capture:e},s?s.push(u):this.__on=[u]}}function _n(t,n,e,r){var i=fn
t.sourceEvent=fn,fn=t
try{return n.apply(e,r)}finally{fn=i}}function vn(t,n,e){var r=Lt(t),i=r.CustomEvent
"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function mn(t,n){return function(){return vn(this,t,n)}}function xn(t,n){return function(){return vn(this,t,n.apply(this,arguments))}}"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(ln={mouseenter:"mouseover",mouseleave:"mouseout"}))
var bn=[null]
function wn(t,n){this._groups=t,this._parents=n}function Sn(){return new wn([[document.documentElement]],bn)}wn.prototype=Sn.prototype={constructor:wn,select:function(t){"function"!=typeof t&&(t=pt(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],s=u.length,c=r[i]=new Array(s),l=0;l<s;++l)(o=u[l])&&(a=t.call(o,o.__data__,l,u))&&("__data__"in o&&(a.__data__=o.__data__),c[l]=a)
return new wn(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=yt(t))
for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],s=u.length,c=0;c<s;++c)(a=u[c])&&(r.push(t.call(a,a.__data__,c,u)),i.push(a))
return new wn(r,i)},filter:function(t){"function"!=typeof t&&(t=_t(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o)
return new wn(r,this._parents)},data:function(t,n){if(!t)return p=new Array(this.size()),l=-1,this.each((function(t){p[++l]=t})),p
var e,r=n?bt:xt,i=this._parents,o=this._groups
"function"!=typeof t&&(e=t,t=function(){return e})
for(var a=o.length,u=new Array(a),s=new Array(a),c=new Array(a),l=0;l<a;++l){var f=i[l],h=o[l],d=h.length,p=t.call(f,f&&f.__data__,l,i),g=p.length,y=s[l]=new Array(g),_=u[l]=new Array(g)
r(f,h,y,_,c[l]=new Array(d),p,n)
for(var v,m,x=0,b=0;x<g;++x)if(v=y[x]){for(x>=b&&(b=x+1);!(m=_[b])&&++b<g;);v._next=m||null}}return(u=new wn(u,i))._enter=s,u._exit=c,u},enter:function(){return new wn(this._enter||this._groups.map(vt),this._parents)},exit:function(){return new wn(this._exit||this._groups.map(vt),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit()
return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],l=e[u],f=c.length,h=a[u]=new Array(f),d=0;d<f;++d)(s=c[d]||l[d])&&(h[d]=s)
for(;u<r;++u)a[u]=n[u]
return new wn(a,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r)
return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=wt)
for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],s=u.length,c=i[o]=new Array(s),l=0;l<s;++l)(a=u[l])&&(c[l]=a)
c.sort(n)}return new wn(i,this._parents).order()},call:function(){var t=arguments[0]
return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1
return this.each((function(){t[++n]=this})),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i]
if(a)return a}return null},size:function(){var t=0
return this.each((function(){++t})),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o)
return this},attr:function(t,n){var e=Mt(t)
if(arguments.length<2){var r=this.node()
return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?Ct:Tt:"function"==typeof n?e.local?Nt:kt:e.local?Et:Pt)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?Rt:"function"==typeof n?Ot:Vt)(t,n,null==e?"":e)):Gt(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?Dt:"function"==typeof n?zt:It)(t,n)):this.node()[t]},classed:function(t,n){var e=Ft(t+"")
if(arguments.length<2){for(var r=Yt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1
return!0}return this.each(("function"==typeof n?qt:n?Xt:jt)(e,n))},text:function(t){return arguments.length?this.each(null==t?Wt:("function"==typeof t?$t:Qt)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Zt:("function"==typeof t?Jt:Kt)(t)):this.node().innerHTML},raise:function(){return this.each(tn)},lower:function(){return this.each(nn)},append:function(t){var n="function"==typeof t?t:on(t)
return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:on(t),r=null==n?an:"function"==typeof n?n:pt(n)
return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(un)},clone:function(t){return this.select(t?cn:sn)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=pn(t+""),a=o.length
if(!(arguments.length<2)){for(u=n?yn:gn,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e))
return this}var u=this.node().__on
if(u)for(var s,c=0,l=u.length;c<l;++c)for(r=0,s=u[c];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?xn:mn)(t,n))}}
const An=Sn
function Mn(t){return"string"==typeof t?new wn([[document.querySelector(t)]],[document.documentElement]):new wn([[t]],bn)}function Tn(){fn.stopImmediatePropagation()}function Cn(){fn.preventDefault(),fn.stopImmediatePropagation()}function Pn(t){var n=t.document.documentElement,e=Mn(t).on("dragstart.drag",Cn,!0)
"onselectstart"in n?e.on("selectstart.drag",Cn,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function En(t,n){var e=t.document.documentElement,r=Mn(t).on("dragstart.drag",null)
n&&(r.on("click.drag",Cn,!0),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function kn(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Nn(t,n){var e=Object.create(t.prototype)
for(var r in n)e[r]=n[r]
return e}function Ln(){}var Rn=.7,Vn=1/Rn,On="\\s*([+-]?\\d+)\\s*",Gn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Dn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",In=/^#([0-9a-f]{3,8})$/,zn=new RegExp("^rgb\\("+[On,On,On]+"\\)$"),Fn=new RegExp("^rgb\\("+[Dn,Dn,Dn]+"\\)$"),Yn=new RegExp("^rgba\\("+[On,On,On,Gn]+"\\)$"),Un=new RegExp("^rgba\\("+[Dn,Dn,Dn,Gn]+"\\)$"),Bn=new RegExp("^hsl\\("+[Gn,Dn,Dn]+"\\)$"),Hn=new RegExp("^hsla\\("+[Gn,Dn,Dn,Gn]+"\\)$"),Xn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function jn(){return this.rgb().formatHex()}function qn(){return this.rgb().formatRgb()}function Wn(t){var n,e
return t=(t+"").trim().toLowerCase(),(n=In.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?Qn(n):3===e?new Jn(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?$n(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?$n(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=zn.exec(t))?new Jn(n[1],n[2],n[3],1):(n=Fn.exec(t))?new Jn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Yn.exec(t))?$n(n[1],n[2],n[3],n[4]):(n=Un.exec(t))?$n(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Bn.exec(t))?re(n[1],n[2]/100,n[3]/100,1):(n=Hn.exec(t))?re(n[1],n[2]/100,n[3]/100,n[4]):Xn.hasOwnProperty(t)?Qn(Xn[t]):"transparent"===t?new Jn(NaN,NaN,NaN,0):null}function Qn(t){return new Jn(t>>16&255,t>>8&255,255&t,1)}function $n(t,n,e,r){return r<=0&&(t=n=e=NaN),new Jn(t,n,e,r)}function Zn(t){return t instanceof Ln||(t=Wn(t)),t?new Jn((t=t.rgb()).r,t.g,t.b,t.opacity):new Jn}function Kn(t,n,e,r){return 1===arguments.length?Zn(t):new Jn(t,n,e,null==r?1:r)}function Jn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function te(){return"#"+ee(this.r)+ee(this.g)+ee(this.b)}function ne(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function ee(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function re(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new ae(t,n,e,r)}function ie(t){if(t instanceof ae)return new ae(t.h,t.s,t.l,t.opacity)
if(t instanceof Ln||(t=Wn(t)),!t)return new ae
if(t instanceof ae)return t
var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2
return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new ae(a,u,s,t.opacity)}function oe(t,n,e,r){return 1===arguments.length?ie(t):new ae(t,n,e,null==r?1:r)}function ae(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function ue(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function se(t,n,e,r,i){var o=t*t,a=o*t
return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function ce(t){var n=t.length-1
return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i
return se((e-r/n)*n,a,i,o,u)}}function le(t){var n=t.length
return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n]
return se((e-r/n)*n,i,o,a,u)}}function fe(t){return function(){return t}}function he(t,n){return function(e){return t+e*n}}function de(t,n){var e=n-t
return e?he(t,e>180||e<-180?e-360*Math.round(e/360):e):fe(isNaN(t)?n:t)}function pe(t,n){var e=n-t
return e?he(t,e):fe(isNaN(t)?n:t)}kn(Ln,Wn,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:jn,formatHex:jn,formatHsl:function(){return ie(this).formatHsl()},formatRgb:qn,toString:qn}),kn(Jn,Kn,Nn(Ln,{brighter:function(t){return t=null==t?Vn:Math.pow(Vn,t),new Jn(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?Rn:Math.pow(Rn,t),new Jn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:te,formatHex:te,formatRgb:ne,toString:ne})),kn(ae,oe,Nn(Ln,{brighter:function(t){return t=null==t?Vn:Math.pow(Vn,t),new ae(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?Rn:Math.pow(Rn,t),new ae(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r
return new Jn(ue(t>=240?t-240:t+120,i,r),ue(t,i,r),ue(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))
const ge=function t(n){var e=function(t){return 1==(t=+t)?pe:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):fe(isNaN(n)?e:n)}}(n)
function r(t,n){var r=e((t=Kn(t)).r,(n=Kn(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=pe(t.opacity,n.opacity)
return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1)
function ye(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i)
for(e=0;e<i;++e)r=Kn(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0
return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}var _e=ye(ce),ve=ye(le)
function me(t,n){n||(n=[])
var e,r=t?Math.min(n.length,t.length):0,i=n.slice()
return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o
return i}}function xe(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function be(t,n){return(xe(n)?me:we)(t,n)}function we(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r)
for(e=0;e<i;++e)o[e]=Ee(t[e],n[e])
for(;e<r;++e)a[e]=n[e]
return function(t){for(e=0;e<i;++e)a[e]=o[e](t)
return a}}function Se(t,n){var e=new Date
return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function Ae(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function Me(t,n){var e,r={},i={}
for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=Ee(t[e],n[e]):i[e]=n[e]
return function(t){for(e in r)i[e]=r[e](t)
return i}}var Te=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ce=new RegExp(Te.source,"g")
function Pe(t,n){var e,r,i,o=Te.lastIndex=Ce.lastIndex=0,a=-1,u=[],s=[]
for(t+="",n+="";(e=Te.exec(t))&&(r=Ce.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:Ae(e,r)})),o=Ce.lastIndex
return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t)
return u.join("")})}function Ee(t,n){var e,r=typeof n
return null==n||"boolean"===r?fe(n):("number"===r?Ae:"string"===r?(e=Wn(n))?(n=e,ge):Pe:n instanceof Wn?ge:n instanceof Date?Se:xe(n)?me:Array.isArray(n)?we:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?Me:Ae)(t,n)}function ke(){for(var t,n=fn;t=n.sourceEvent;)n=t
return n}function Ne(t,n){var e=t.ownerSVGElement||t
if(e.createSVGPoint){var r=e.createSVGPoint()
return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect()
return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function Le(t,n,e){arguments.length<3&&(e=n,n=ke().changedTouches)
for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Ne(t,r)
return null}function Re(t){var n=ke()
return n.changedTouches&&(n=n.changedTouches[0]),Ne(t,n)}var Ve,Oe,Ge=0,De=0,Ie=0,ze=0,Fe=0,Ye=0,Ue="object"==typeof performance&&performance.now?performance:Date,Be="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)}
function He(){return Fe||(Be(Xe),Fe=Ue.now()+Ye)}function Xe(){Fe=0}function je(){this._call=this._time=this._next=null}function qe(t,n,e){var r=new je
return r.restart(t,n,e),r}function We(){He(),++Ge
for(var t,n=Ve;n;)(t=Fe-n._time)>=0&&n._call.call(null,t),n=n._next;--Ge}function Qe(){Fe=(ze=Ue.now())+Ye,Ge=De=0
try{We()}finally{Ge=0,function(){for(var t,n,e=Ve,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Ve=n)
Oe=t,Ze(r)}(),Fe=0}}function $e(){var t=Ue.now(),n=t-ze
n>1e3&&(Ye-=n,ze=t)}function Ze(t){Ge||(De&&(De=clearTimeout(De)),t-Fe>24?(t<1/0&&(De=setTimeout(Qe,t-Ue.now()-Ye)),Ie&&(Ie=clearInterval(Ie))):(Ie||(ze=Ue.now(),Ie=setInterval($e,1e3)),Ge=1,Be(Qe)))}function Ke(t,n,e){var r=new je
return n=null==n?0:+n,r.restart((function(e){r.stop(),t(e+n)}),n,e),r}je.prototype=qe.prototype={constructor:je,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function")
e=(null==e?He():+e)+(null==n?0:+n),this._next||Oe===this||(Oe?Oe._next=this:Ve=this,Oe=this),this._call=t,this._time=e,Ze()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ze())}}
var Je=ht("start","end","cancel","interrupt"),tr=[]
function nr(t,n,e,r,i,o){var a=t.__transition
if(a){if(e in a)return}else t.__transition={}
!function(t,n,e){var r,i=t.__transition
function o(s){var c,l,f,h
if(1!==e.state)return u()
for(c in i)if((h=i[c]).name===e.name){if(3===h.state)return Ke(o)
4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<n&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(Ke((function(){3===e.state&&(e.state=4,e.timer.restart(a,e.delay,e.time),a(s))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=3,r=new Array(f=e.tween.length),c=0,l=-1;c<f;++c)(h=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(r[++l]=h)
r.length=l+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=5,1),o=-1,a=r.length;++o<a;)r[o].call(t,i)
5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return
delete t.__transition}i[n]=e,e.timer=qe((function(t){e.state=1,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)}),0,e.time)}(t,e,{name:n,index:r,group:i,on:Je,tween:tr,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function er(t,n){var e=ir(t,n)
if(e.state>0)throw new Error("too late; already scheduled")
return e}function rr(t,n){var e=ir(t,n)
if(e.state>3)throw new Error("too late; already running")
return e}function ir(t,n){var e=t.__transition
if(!e||!(e=e[n]))throw new Error("transition not found")
return e}function or(t,n){var e,r,i,o=t.__transition,a=!0
if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1
a&&delete t.__transition}}var ar,ur,sr,cr,lr=180/Math.PI,fr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1}
function hr(t,n,e,r,i,o){var a,u,s
return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*lr,skewX:Math.atan(s)*lr,scaleX:a,scaleY:u}}function dr(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],s=[]
return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var s=a.push("translate(",null,n,null,e)
u.push({i:s-4,x:Ae(t,i)},{i:s-2,x:Ae(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,s),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:Ae(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,s),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:Ae(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,s),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")")
a.push({i:u-4,x:Ae(t,e)},{i:u-2,x:Ae(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,s),o=a=null,function(t){for(var n,e=-1,r=s.length;++e<r;)u[(n=s[e]).i]=n.x(t)
return u.join("")}}}var pr=dr((function(t){return"none"===t?fr:(ar||(ar=document.createElement("DIV"),ur=document.documentElement,sr=document.defaultView),ar.style.transform=t,t=sr.getComputedStyle(ur.appendChild(ar),null).getPropertyValue("transform"),ur.removeChild(ar),hr(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}),"px, ","px)","deg)"),gr=dr((function(t){return null==t?fr:(cr||(cr=document.createElementNS("http://www.w3.org/2000/svg","g")),cr.setAttribute("transform",t),(t=cr.transform.baseVal.consolidate())?hr((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):fr)}),", ",")",")")
function yr(t,n){var e,r
return function(){var i=rr(this,t),o=i.tween
if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1)
break}i.tween=r}}function _r(t,n,e){var r,i
if("function"!=typeof e)throw new Error
return function(){var o=rr(this,t),a=o.tween
if(a!==r){i=(r=a).slice()
for(var u={name:n,value:e},s=0,c=i.length;s<c;++s)if(i[s].name===n){i[s]=u
break}s===c&&i.push(u)}o.tween=i}}function vr(t,n,e){var r=t._id
return t.each((function(){var t=rr(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return ir(t,r).value[n]}}function mr(t,n){var e
return("number"==typeof n?Ae:n instanceof Wn?ge:(e=Wn(n))?(n=e,ge):Pe)(t,n)}function xr(t){return function(){this.removeAttribute(t)}}function br(t){return function(){this.removeAttributeNS(t.space,t.local)}}function wr(t,n,e){var r,i,o=e+""
return function(){var a=this.getAttribute(t)
return a===o?null:a===r?i:i=n(r=a,e)}}function Sr(t,n,e){var r,i,o=e+""
return function(){var a=this.getAttributeNS(t.space,t.local)
return a===o?null:a===r?i:i=n(r=a,e)}}function Ar(t,n,e){var r,i,o
return function(){var a,u,s=e(this)
if(null!=s)return(a=this.getAttribute(t))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))
this.removeAttribute(t)}}function Mr(t,n,e){var r,i,o
return function(){var a,u,s=e(this)
if(null!=s)return(a=this.getAttributeNS(t.space,t.local))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))
this.removeAttributeNS(t.space,t.local)}}function Tr(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function Cr(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function Pr(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&Cr(t,i)),e}return i._value=n,i}function Er(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&Tr(t,i)),e}return i._value=n,i}function kr(t,n){return function(){er(this,t).delay=+n.apply(this,arguments)}}function Nr(t,n){return n=+n,function(){er(this,t).delay=n}}function Lr(t,n){return function(){rr(this,t).duration=+n.apply(this,arguments)}}function Rr(t,n){return n=+n,function(){rr(this,t).duration=n}}function Vr(t,n){if("function"!=typeof n)throw new Error
return function(){rr(this,t).ease=n}}function Or(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".")
return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?er:rr
return function(){var a=o(this,t),u=a.on
u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}var Gr=An.prototype.constructor
function Dr(t){return function(){this.style.removeProperty(t)}}function Ir(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function zr(t,n,e){var r,i
function o(){var o=n.apply(this,arguments)
return o!==i&&(r=(i=o)&&Ir(t,o,e)),r}return o._value=n,o}function Fr(t){return function(n){this.textContent=t.call(this,n)}}function Yr(t){var n,e
function r(){var r=t.apply(this,arguments)
return r!==e&&(n=(e=r)&&Fr(r)),n}return r._value=t,r}var Ur=0
function Br(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Hr(t){return An().transition(t)}function Xr(){return++Ur}var jr=An.prototype
function qr(t){return t*t*t}function Wr(t){return--t*t*t+1}function Qr(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}Br.prototype=Hr.prototype={constructor:Br,select:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=pt(t))
for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,s,c=r[a],l=c.length,f=o[a]=new Array(l),h=0;h<l;++h)(u=c[h])&&(s=t.call(u,u.__data__,h,c))&&("__data__"in u&&(s.__data__=u.__data__),f[h]=s,nr(f[h],n,e,h,f,ir(u,e)))
return new Br(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=yt(t))
for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var s,c=r[u],l=c.length,f=0;f<l;++f)if(s=c[f]){for(var h,d=t.call(s,s.__data__,f,c),p=ir(s,e),g=0,y=d.length;g<y;++g)(h=d[g])&&nr(h,n,e,g,d,p)
o.push(d),a.push(s)}return new Br(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=_t(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o)
return new Br(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error
for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],l=e[u],f=c.length,h=a[u]=new Array(f),d=0;d<f;++d)(s=c[d]||l[d])&&(h[d]=s)
for(;u<r;++u)a[u]=n[u]
return new Br(a,this._parents,this._name,this._id)},selection:function(){return new Gr(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Xr(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)if(a=u[c]){var l=ir(a,n)
nr(a,t,e,c,u,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new Br(r,this._parents,t,e)},call:jr.call,nodes:jr.nodes,node:jr.node,size:jr.size,empty:jr.empty,each:jr.each,on:function(t,n){var e=this._id
return arguments.length<2?ir(this.node(),e).on.on(t):this.each(Or(e,t,n))},attr:function(t,n){var e=Mt(t),r="transform"===e?gr:mr
return this.attrTween(t,"function"==typeof n?(e.local?Mr:Ar)(e,r,vr(this,"attr."+t,n)):null==n?(e.local?br:xr)(e):(e.local?Sr:wr)(e,r,n))},attrTween:function(t,n){var e="attr."+t
if(arguments.length<2)return(e=this.tween(e))&&e._value
if(null==n)return this.tween(e,null)
if("function"!=typeof n)throw new Error
var r=Mt(t)
return this.tween(e,(r.local?Pr:Er)(r,n))},style:function(t,n,e){var r="transform"==(t+="")?pr:mr
return null==n?this.styleTween(t,function(t,n){var e,r,i
return function(){var o=Gt(this,t),a=(this.style.removeProperty(t),Gt(this,t))
return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,Dr(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o
return function(){var a=Gt(this,t),u=e(this),s=u+""
return null==u&&(this.style.removeProperty(t),s=u=Gt(this,t)),a===s?null:a===r&&s===i?o:(i=s,o=n(r=a,u))}}(t,r,vr(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a
return function(){var s=rr(this,t),c=s.on,l=null==s.value[a]?o||(o=Dr(n)):void 0
c===e&&i===l||(r=(e=c).copy()).on(u,i=l),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+""
return function(){var a=Gt(this,t)
return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="")
if(arguments.length<2)return(r=this.tween(r))&&r._value
if(null==n)return this.tween(r,null)
if("function"!=typeof n)throw new Error
return this.tween(r,zr(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this)
this.textContent=null==n?"":n}}(vr(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text"
if(arguments.length<1)return(n=this.tween(n))&&n._value
if(null==t)return this.tween(n,null)
if("function"!=typeof t)throw new Error
return this.tween(n,Yr(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode
for(var e in this.__transition)if(+e!==t)return
n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id
if(t+="",arguments.length<2){for(var r,i=ir(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value
return null}return this.each((null==n?yr:_r)(e,t,n))},delay:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?kr:Nr)(n,t)):ir(this.node(),n).delay},duration:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?Lr:Rr)(n,t)):ir(this.node(),n).duration},ease:function(t){var n=this._id
return arguments.length?this.each(Vr(n,t)):ir(this.node(),n).ease},end:function(){var t,n,e=this,r=e._id,i=e.size()
return new Promise((function(o,a){var u={value:a},s={value:function(){0==--i&&o()}}
e.each((function(){var e=rr(this,r),i=e.on
i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(s)),e.on=n}))}))}}
var $r={time:null,delay:0,duration:250,ease:Qr}
function Zr(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return $r.time=He(),$r
return e}An.prototype.interrupt=function(t){return this.each((function(){or(this,t)}))},An.prototype.transition=function(t){var n,e
t instanceof Br?(n=t._id,t=t._name):(n=Xr(),(e=$r).time=He(),t=null==t?null:t+"")
for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)(a=u[c])&&nr(a,t,n,c,u,e||Zr(a,n))
return new Br(r,this._parents,t,n)}
var Kr=[null]
function Jr(t,n){var e,r,i=t.__transition
if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>1&&e.name===n)return new Br([[t]],Kr,n,+r)
return null}function ti(t){return function(){return t}}function ni(t,n,e){this.target=t,this.type=n,this.selection=e}function ei(){fn.stopImmediatePropagation()}function ri(){fn.preventDefault(),fn.stopImmediatePropagation()}var ii={name:"drag"},oi={name:"space"},ai={name:"handle"},ui={name:"center"}
function si(t){return[+t[0],+t[1]]}function ci(t){return[si(t[0]),si(t[1])]}function li(t){return function(n){return Le(n,fn.touches,t)}}var fi={name:"x",handles:["w","e"].map(mi),input:function(t,n){return null==t?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},hi={name:"y",handles:["n","s"].map(mi),input:function(t,n){return null==t?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},di={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(mi),input:function(t){return null==t?null:ci(t)},output:function(t){return t}},pi={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},gi={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},yi={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},_i={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},vi={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1}
function mi(t){return{type:t}}function xi(){return!fn.ctrlKey&&!fn.button}function bi(){var t=this.ownerSVGElement||this
return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function wi(){return navigator.maxTouchPoints||"ontouchstart"in this}function Si(t){for(;!t.__brush;)if(!(t=t.parentNode))return
return t.__brush}function Ai(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Mi(t){var n=t.__brush
return n?n.dim.output(n.selection):null}function Ti(){return Ei(fi)}function Ci(){return Ei(hi)}function Pi(){return Ei(di)}function Ei(t){var n,e=bi,r=xi,i=wi,o=!0,a=ht("start","brush","end"),u=6
function s(n){var e=n.property("__brush",g).selectAll(".overlay").data([mi("overlay")])
e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",pi.overlay).merge(e).each((function(){var t=Si(this).extent
Mn(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])})),n.selectAll(".selection").data([mi("selection")]).enter().append("rect").attr("class","selection").attr("cursor",pi.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges")
var r=n.selectAll(".handle").data(t.handles,(function(t){return t.type}))
r.exit().remove(),r.enter().append("rect").attr("class",(function(t){return"handle handle--"+t.type})).attr("cursor",(function(t){return pi[t.type]})),n.each(c).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",h).filter(i).on("touchstart.brush",h).on("touchmove.brush",d).on("touchend.brush touchcancel.brush",p).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function c(){var t=Mn(this),n=Si(this).selection
n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",(function(t){return"e"===t.type[t.type.length-1]?n[1][0]-u/2:n[0][0]-u/2})).attr("y",(function(t){return"s"===t.type[0]?n[1][1]-u/2:n[0][1]-u/2})).attr("width",(function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+u:u})).attr("height",(function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+u:u}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function l(t,n,e){var r=t.__brush.emitter
return!r||e&&r.clean?new f(t,n,e):r}function f(t,n,e){this.that=t,this.args=n,this.state=t.__brush,this.active=0,this.clean=e}function h(){if((!n||fn.touches)&&r.apply(this,arguments)){var e,i,a,u,s,f,h,d,p,g,y,_=this,v=fn.target.__data__.type,m="selection"===(o&&fn.metaKey?v="overlay":v)?ii:o&&fn.altKey?ui:ai,x=t===hi?null:_i[v],b=t===fi?null:vi[v],w=Si(_),S=w.extent,A=w.selection,M=S[0][0],T=S[0][1],C=S[1][0],P=S[1][1],E=0,k=0,N=x&&b&&o&&fn.shiftKey,L=fn.touches?li(fn.changedTouches[0].identifier):Re,R=L(_),V=R,O=l(_,arguments,!0).beforestart()
"overlay"===v?(A&&(p=!0),w.selection=A=[[e=t===hi?M:R[0],a=t===fi?T:R[1]],[s=t===hi?C:e,h=t===fi?P:a]]):(e=A[0][0],a=A[0][1],s=A[1][0],h=A[1][1]),i=e,u=a,f=s,d=h
var G=Mn(_).attr("pointer-events","none"),D=G.selectAll(".overlay").attr("cursor",pi[v])
if(fn.touches)O.moved=z,O.ended=Y
else{var I=Mn(fn.view).on("mousemove.brush",z,!0).on("mouseup.brush",Y,!0)
o&&I.on("keydown.brush",U,!0).on("keyup.brush",B,!0),Pn(fn.view)}ei(),or(_),c.call(_),O.start()}function z(){var t=L(_)
!N||g||y||(Math.abs(t[0]-V[0])>Math.abs(t[1]-V[1])?y=!0:g=!0),V=t,p=!0,ri(),F()}function F(){var t
switch(E=V[0]-R[0],k=V[1]-R[1],m){case oi:case ii:x&&(E=Math.max(M-e,Math.min(C-s,E)),i=e+E,f=s+E),b&&(k=Math.max(T-a,Math.min(P-h,k)),u=a+k,d=h+k)
break
case ai:x<0?(E=Math.max(M-e,Math.min(C-e,E)),i=e+E,f=s):x>0&&(E=Math.max(M-s,Math.min(C-s,E)),i=e,f=s+E),b<0?(k=Math.max(T-a,Math.min(P-a,k)),u=a+k,d=h):b>0&&(k=Math.max(T-h,Math.min(P-h,k)),u=a,d=h+k)
break
case ui:x&&(i=Math.max(M,Math.min(C,e-E*x)),f=Math.max(M,Math.min(C,s+E*x))),b&&(u=Math.max(T,Math.min(P,a-k*b)),d=Math.max(T,Math.min(P,h+k*b)))}f<i&&(x*=-1,t=e,e=s,s=t,t=i,i=f,f=t,v in gi&&D.attr("cursor",pi[v=gi[v]])),d<u&&(b*=-1,t=a,a=h,h=t,t=u,u=d,d=t,v in yi&&D.attr("cursor",pi[v=yi[v]])),w.selection&&(A=w.selection),g&&(i=A[0][0],f=A[1][0]),y&&(u=A[0][1],d=A[1][1]),A[0][0]===i&&A[0][1]===u&&A[1][0]===f&&A[1][1]===d||(w.selection=[[i,u],[f,d]],c.call(_),O.brush())}function Y(){if(ei(),fn.touches){if(fn.touches.length)return
n&&clearTimeout(n),n=setTimeout((function(){n=null}),500)}else En(fn.view,p),I.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null)
G.attr("pointer-events","all"),D.attr("cursor",pi.overlay),w.selection&&(A=w.selection),Ai(A)&&(w.selection=null,c.call(_)),O.end()}function U(){switch(fn.keyCode){case 16:N=x&&b
break
case 18:m===ai&&(x&&(s=f-E*x,e=i+E*x),b&&(h=d-k*b,a=u+k*b),m=ui,F())
break
case 32:m!==ai&&m!==ui||(x<0?s=f-E:x>0&&(e=i-E),b<0?h=d-k:b>0&&(a=u-k),m=oi,D.attr("cursor",pi.selection),F())
break
default:return}ri()}function B(){switch(fn.keyCode){case 16:N&&(g=y=N=!1,F())
break
case 18:m===ui&&(x<0?s=f:x>0&&(e=i),b<0?h=d:b>0&&(a=u),m=ai,F())
break
case 32:m===oi&&(fn.altKey?(x&&(s=f-E*x,e=i+E*x),b&&(h=d-k*b,a=u+k*b),m=ui):(x<0?s=f:x>0&&(e=i),b<0?h=d:b>0&&(a=u),m=ai),D.attr("cursor",pi[v]),F())
break
default:return}ri()}}function d(){l(this,arguments).moved()}function p(){l(this,arguments).ended()}function g(){var n=this.__brush||{selection:null}
return n.extent=ci(e.apply(this,arguments)),n.dim=t,n}return s.move=function(n,e){n.selection?n.on("start.brush",(function(){l(this,arguments).beforestart().start()})).on("interrupt.brush end.brush",(function(){l(this,arguments).end()})).tween("brush",(function(){var n=this,r=n.__brush,i=l(n,arguments),o=r.selection,a=t.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=Ee(o,a)
function s(t){r.selection=1===t&&null===a?null:u(t),c.call(n),i.brush()}return null!==o&&null!==a?s:s(1)})):n.each((function(){var n=this,r=arguments,i=n.__brush,o=t.input("function"==typeof e?e.apply(n,r):e,i.extent),a=l(n,r).beforestart()
or(n),i.selection=null===o?null:o,c.call(n),a.start().brush().end()}))},s.clear=function(t){s.move(t,null)},f.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting?(this.starting=!1,this.emit("start")):this.emit("brush"),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(n){_n(new ni(s,n,t.output(this.state.selection)),a.apply,a,[n,this.that,this.args])}},s.extent=function(t){return arguments.length?(e="function"==typeof t?t:ti(ci(t)),s):e},s.filter=function(t){return arguments.length?(r="function"==typeof t?t:ti(!!t),s):r},s.touchable=function(t){return arguments.length?(i="function"==typeof t?t:ti(!!t),s):i},s.handleSize=function(t){return arguments.length?(u=+t,s):u},s.keyModifiers=function(t){return arguments.length?(o=!!t,s):o},s.on=function(){var t=a.on.apply(a,arguments)
return t===a?s:t},s}var ki=Math.cos,Ni=Math.sin,Li=Math.PI,Ri=Li/2,Vi=2*Li,Oi=Math.max
function Gi(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}function Di(){var t=0,n=null,e=null,r=null
function i(i){var o,a,u,s,c,l,f=i.length,h=[],d=S(f),p=[],g=[],y=g.groups=new Array(f),_=new Array(f*f)
for(o=0,c=-1;++c<f;){for(a=0,l=-1;++l<f;)a+=i[c][l]
h.push(a),p.push(S(f)),o+=a}for(n&&d.sort((function(t,e){return n(h[t],h[e])})),e&&p.forEach((function(t,n){t.sort((function(t,r){return e(i[n][t],i[n][r])}))})),s=(o=Oi(0,Vi-t*f)/o)?t:Vi/f,a=0,c=-1;++c<f;){for(u=a,l=-1;++l<f;){var v=d[c],m=p[v][l],x=i[v][m],b=a,w=a+=x*o
_[m*f+v]={index:v,subindex:m,startAngle:b,endAngle:w,value:x}}y[v]={index:v,startAngle:u,endAngle:a,value:h[v]},a+=s}for(c=-1;++c<f;)for(l=c-1;++l<f;){var A=_[l*f+c],M=_[c*f+l];(A.value||M.value)&&g.push(A.value<M.value?{source:M,target:A}:{source:A,target:M})}return r?g.sort(r):g}return i.padAngle=function(n){return arguments.length?(t=Oi(0,n),i):t},i.sortGroups=function(t){return arguments.length?(n=t,i):n},i.sortSubgroups=function(t){return arguments.length?(e=t,i):e},i.sortChords=function(t){return arguments.length?(null==t?r=null:(r=Gi(t))._=t,i):r&&r._},i}var Ii=Array.prototype.slice
function zi(t){return function(){return t}}var Fi=Math.PI,Yi=2*Fi,Ui=1e-6,Bi=Yi-Ui
function Hi(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Xi(){return new Hi}Hi.prototype=Xi.prototype={constructor:Hi,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i
var o=this._x1,a=this._y1,u=e-t,s=r-n,c=o-t,l=a-n,f=c*c+l*l
if(i<0)throw new Error("negative radius: "+i)
if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n)
else if(f>Ui)if(Math.abs(l*u-s*c)>Ui&&i){var h=e-o,d=r-a,p=u*u+s*s,g=h*h+d*d,y=Math.sqrt(p),_=Math.sqrt(f),v=i*Math.tan((Fi-Math.acos((p+f-g)/(2*y*_)))/2),m=v/_,x=v/y
Math.abs(m-1)>Ui&&(this._+="L"+(t+m*c)+","+(n+m*l)),this._+="A"+i+","+i+",0,0,"+ +(l*h>c*d)+","+(this._x1=t+x*u)+","+(this._y1=n+x*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,e,r,i,o){t=+t,n=+n,o=!!o
var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),s=t+a,c=n+u,l=1^o,f=o?r-i:i-r
if(e<0)throw new Error("negative radius: "+e)
null===this._x1?this._+="M"+s+","+c:(Math.abs(this._x1-s)>Ui||Math.abs(this._y1-c)>Ui)&&(this._+="L"+s+","+c),e&&(f<0&&(f=f%Yi+Yi),f>Bi?this._+="A"+e+","+e+",0,1,"+l+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+l+","+(this._x1=s)+","+(this._y1=c):f>Ui&&(this._+="A"+e+","+e+",0,"+ +(f>=Fi)+","+l+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}}
const ji=Xi
function qi(t){return t.source}function Wi(t){return t.target}function Qi(t){return t.radius}function $i(t){return t.startAngle}function Zi(t){return t.endAngle}function Ki(){var t=qi,n=Wi,e=Qi,r=$i,i=Zi,o=null
function a(){var a,u=Ii.call(arguments),s=t.apply(this,u),c=n.apply(this,u),l=+e.apply(this,(u[0]=s,u)),f=r.apply(this,u)-Ri,h=i.apply(this,u)-Ri,d=l*ki(f),p=l*Ni(f),g=+e.apply(this,(u[0]=c,u)),y=r.apply(this,u)-Ri,_=i.apply(this,u)-Ri
if(o||(o=a=ji()),o.moveTo(d,p),o.arc(0,0,l,f,h),f===y&&h===_||(o.quadraticCurveTo(0,0,g*ki(y),g*Ni(y)),o.arc(0,0,g,y,_)),o.quadraticCurveTo(0,0,d,p),o.closePath(),a)return o=null,a+""||null}return a.radius=function(t){return arguments.length?(e="function"==typeof t?t:zi(+t),a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:zi(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:zi(+t),a):i},a.source=function(n){return arguments.length?(t=n,a):t},a.target=function(t){return arguments.length?(n=t,a):n},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}var Ji="$"
function to(){}function no(t,n){var e=new to
if(t instanceof to)t.each((function(t,n){e.set(n,t)}))
else if(Array.isArray(t)){var r,i=-1,o=t.length
if(null==n)for(;++i<o;)e.set(i,t[i])
else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a])
return e}to.prototype=no.prototype={constructor:to,has:function(t){return Ji+t in this},get:function(t){return this[Ji+t]},set:function(t,n){return this[Ji+t]=n,this},remove:function(t){var n=Ji+t
return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===Ji&&delete this[t]},keys:function(){var t=[]
for(var n in this)n[0]===Ji&&t.push(n.slice(1))
return t},values:function(){var t=[]
for(var n in this)n[0]===Ji&&t.push(this[n])
return t},entries:function(){var t=[]
for(var n in this)n[0]===Ji&&t.push({key:n.slice(1),value:this[n]})
return t},size:function(){var t=0
for(var n in this)n[0]===Ji&&++t
return t},empty:function(){for(var t in this)if(t[0]===Ji)return!1
return!0},each:function(t){for(var n in this)n[0]===Ji&&t(this[n],n.slice(1),this)}}
const eo=no
function ro(){var t,n,e,r=[],i=[]
function o(e,i,a,u){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e
for(var s,c,l,f=-1,h=e.length,d=r[i++],p=eo(),g=a();++f<h;)(l=p.get(s=d(c=e[f])+""))?l.push(c):p.set(s,[c])
return p.each((function(t,n){u(g,n,o(t,i,a,u))})),g}function a(t,e){if(++e>r.length)return t
var o,u=i[e-1]
return null!=n&&e>=r.length?o=t.entries():(o=[],t.each((function(t,n){o.push({key:n,values:a(t,e)})}))),null!=u?o.sort((function(t,n){return u(t.key,n.key)})):o}return e={object:function(t){return o(t,0,io,oo)},map:function(t){return o(t,0,ao,uo)},entries:function(t){return a(o(t,0,ao,uo),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}}function io(){return{}}function oo(t,n,e){t[n]=e}function ao(){return eo()}function uo(t,n,e){t.set(n,e)}function so(){}var co=eo.prototype
function lo(t,n){var e=new so
if(t instanceof so)t.each((function(t){e.add(t)}))
else if(t){var r=-1,i=t.length
if(null==n)for(;++r<i;)e.add(t[r])
else for(;++r<i;)e.add(n(t[r],r,t))}return e}so.prototype=lo.prototype={constructor:so,has:co.has,add:function(t){return this[Ji+(t+="")]=t,this},remove:co.remove,clear:co.clear,values:co.keys,size:co.size,empty:co.empty,each:co.each}
const fo=lo
function ho(t){var n=[]
for(var e in t)n.push(e)
return n}function po(t){var n=[]
for(var e in t)n.push(t[e])
return n}function go(t){var n=[]
for(var e in t)n.push({key:e,value:t[e]})
return n}var yo=Math.PI/180,_o=180/Math.PI,vo=.96422,mo=.82521,xo=4/29,bo=6/29,wo=3*bo*bo
function So(t){if(t instanceof To)return new To(t.l,t.a,t.b,t.opacity)
if(t instanceof Vo)return Oo(t)
t instanceof Jn||(t=Zn(t))
var n,e,r=ko(t.r),i=ko(t.g),o=ko(t.b),a=Co((.2225045*r+.7168786*i+.0606169*o)/1)
return r===i&&i===o?n=e=a:(n=Co((.4360747*r+.3850649*i+.1430804*o)/vo),e=Co((.0139322*r+.0971045*i+.7141733*o)/mo)),new To(116*a-16,500*(n-a),200*(a-e),t.opacity)}function Ao(t,n){return new To(t,0,0,null==n?1:n)}function Mo(t,n,e,r){return 1===arguments.length?So(t):new To(t,n,e,null==r?1:r)}function To(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Co(t){return t>.008856451679035631?Math.pow(t,1/3):t/wo+xo}function Po(t){return t>bo?t*t*t:wo*(t-xo)}function Eo(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function ko(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function No(t){if(t instanceof Vo)return new Vo(t.h,t.c,t.l,t.opacity)
if(t instanceof To||(t=So(t)),0===t.a&&0===t.b)return new Vo(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity)
var n=Math.atan2(t.b,t.a)*_o
return new Vo(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Lo(t,n,e,r){return 1===arguments.length?No(t):new Vo(e,n,t,null==r?1:r)}function Ro(t,n,e,r){return 1===arguments.length?No(t):new Vo(t,n,e,null==r?1:r)}function Vo(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Oo(t){if(isNaN(t.h))return new To(t.l,0,0,t.opacity)
var n=t.h*yo
return new To(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}kn(To,Mo,Nn(Ln,{brighter:function(t){return new To(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new To(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200
return new Jn(Eo(3.1338561*(n=vo*Po(n))-1.6168667*(t=1*Po(t))-.4906146*(e=mo*Po(e))),Eo(-.9787684*n+1.9161415*t+.033454*e),Eo(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),kn(Vo,Ro,Nn(Ln,{brighter:function(t){return new Vo(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Vo(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Oo(this).rgb()}}))
var Go=-.14861,Do=1.78277,Io=-.29227,zo=-.90649,Fo=1.97294,Yo=Fo*zo,Uo=Fo*Do,Bo=Do*Io-zo*Go
function Ho(t){if(t instanceof jo)return new jo(t.h,t.s,t.l,t.opacity)
t instanceof Jn||(t=Zn(t))
var n=t.r/255,e=t.g/255,r=t.b/255,i=(Bo*r+Yo*n-Uo*e)/(Bo+Yo-Uo),o=r-i,a=(Fo*(e-i)-Io*o)/zo,u=Math.sqrt(a*a+o*o)/(Fo*i*(1-i)),s=u?Math.atan2(a,o)*_o-120:NaN
return new jo(s<0?s+360:s,u,i,t.opacity)}function Xo(t,n,e,r){return 1===arguments.length?Ho(t):new jo(t,n,e,null==r?1:r)}function jo(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}kn(jo,Xo,Nn(Ln,{brighter:function(t){return t=null==t?Vn:Math.pow(Vn,t),new jo(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?Rn:Math.pow(Rn,t),new jo(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*yo,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t)
return new Jn(255*(n+e*(Go*r+Do*i)),255*(n+e*(Io*r+zo*i)),255*(n+e*(Fo*r)),this.opacity)}}))
var qo=Array.prototype.slice
function Wo(t,n){return t-n}function Qo(t){return function(){return t}}function $o(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=Zo(t,n[r]))return e
return 0}function Zo(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var s=t[o],c=s[0],l=s[1],f=t[u],h=f[0],d=f[1]
if(Ko(s,f,n))return 0
l>r!=d>r&&e<(h-c)*(r-l)/(d-l)+c&&(i=-i)}return i}function Ko(t,n,e){var r,i,o,a
return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&(i=t[r=+(t[0]===n[0])],o=e[r],a=n[r],i<=o&&o<=a||a<=o&&o<=i)}function Jo(){}var ta=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]]
function na(){var t=1,n=1,e=k,r=u
function i(t){var n=e(t)
if(Array.isArray(n))n=n.slice().sort(Wo)
else{var r=_(t),i=r[0],a=r[1]
n=E(i,a,n),n=S(Math.floor(i/n)*n,Math.floor(a/n)*n,n)}return n.map((function(n){return o(t,n)}))}function o(e,i){var o=[],u=[]
return function(e,r,i){var o,u,s,c,l,f,h=new Array,d=new Array
for(o=u=-1,c=e[0]>=r,ta[c<<1].forEach(p);++o<t-1;)s=c,c=e[o+1]>=r,ta[s|c<<1].forEach(p)
for(ta[c<<0].forEach(p);++u<n-1;){for(o=-1,c=e[u*t+t]>=r,l=e[u*t]>=r,ta[c<<1|l<<2].forEach(p);++o<t-1;)s=c,c=e[u*t+t+o+1]>=r,f=l,l=e[u*t+o+1]>=r,ta[s|c<<1|l<<2|f<<3].forEach(p)
ta[c|l<<3].forEach(p)}for(o=-1,l=e[u*t]>=r,ta[l<<2].forEach(p);++o<t-1;)f=l,l=e[u*t+o+1]>=r,ta[l<<2|f<<3].forEach(p)
function p(t){var n,e,r=[t[0][0]+o,t[0][1]+u],s=[t[1][0]+o,t[1][1]+u],c=a(r),l=a(s);(n=d[c])?(e=h[l])?(delete d[n.end],delete h[e.start],n===e?(n.ring.push(s),i(n.ring)):h[n.start]=d[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete d[n.end],n.ring.push(s),d[n.end=l]=n):(n=h[l])?(e=d[c])?(delete h[n.start],delete d[e.end],n===e?(n.ring.push(s),i(n.ring)):h[e.start]=d[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[n.start],n.ring.unshift(r),h[n.start=c]=n):h[c]=d[l]={start:c,end:l,ring:[r,s]}}ta[l<<3].forEach(p)}(e,i,(function(t){r(t,e,i),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1]
return r}(t)>0?o.push([t]):u.push(t)})),u.forEach((function(t){for(var n,e=0,r=o.length;e<r;++e)if(-1!==$o((n=o[e])[0],t))return void n.push(t)})),{type:"MultiPolygon",value:i,coordinates:o}}function a(n){return 2*n[0]+n[1]*(t+1)*4}function u(e,r,i){e.forEach((function(e){var o,a=e[0],u=e[1],s=0|a,c=0|u,l=r[c*t+s]
a>0&&a<t&&s===a&&(o=r[c*t+s-1],e[0]=a+(i-o)/(l-o)-.5),u>0&&u<n&&c===u&&(o=r[(c-1)*t+s],e[1]=u+(i-o)/(l-o)-.5)}))}return i.contour=o,i.size=function(e){if(!arguments.length)return[t,n]
var r=Math.ceil(e[0]),o=Math.ceil(e[1])
if(!(r>0&&o>0))throw new Error("invalid size")
return t=r,n=o,i},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?Qo(qo.call(t)):Qo(t),i):e},i.smooth=function(t){return arguments.length?(r=t?u:Jo,i):r===u},i}function ea(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,s=0;u<r+e;++u)u<r&&(s+=t.data[u+a*r]),u>=e&&(u>=o&&(s-=t.data[u-o+a*r]),n.data[u-e+a*r]=s/Math.min(u+1,r-1+o-u,o))}function ra(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,s=0;u<i+e;++u)u<i&&(s+=t.data[a+u*r]),u>=e&&(u>=o&&(s-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=s/Math.min(u+1,i-1+o-u,o))}function ia(t){return t[0]}function oa(t){return t[1]}function aa(){return 1}function ua(){var t=ia,n=oa,e=aa,r=960,i=500,o=20,a=2,u=3*o,s=r+2*u>>a,c=i+2*u>>a,l=Qo(20)
function f(r){var i=new Float32Array(s*c),f=new Float32Array(s*c)
r.forEach((function(r,o,l){var f=+t(r,o,l)+u>>a,h=+n(r,o,l)+u>>a,d=+e(r,o,l)
f>=0&&f<s&&h>=0&&h<c&&(i[f+h*s]+=d)})),ea({width:s,height:c,data:i},{width:s,height:c,data:f},o>>a),ra({width:s,height:c,data:f},{width:s,height:c,data:i},o>>a),ea({width:s,height:c,data:i},{width:s,height:c,data:f},o>>a),ra({width:s,height:c,data:f},{width:s,height:c,data:i},o>>a),ea({width:s,height:c,data:i},{width:s,height:c,data:f},o>>a),ra({width:s,height:c,data:f},{width:s,height:c,data:i},o>>a)
var d=l(i)
if(!Array.isArray(d)){var p=O(i)
d=E(0,p,d),(d=S(0,Math.floor(p/d)*d,d)).shift()}return na().thresholds(d).size([s,c])(i).map(h)}function h(t){return t.value*=Math.pow(2,-2*a),t.coordinates.forEach(d),t}function d(t){t.forEach(p)}function p(t){t.forEach(g)}function g(t){t[0]=t[0]*Math.pow(2,a)-u,t[1]=t[1]*Math.pow(2,a)-u}function y(){return s=r+2*(u=3*o)>>a,c=i+2*u>>a,f}return f.x=function(n){return arguments.length?(t="function"==typeof n?n:Qo(+n),f):t},f.y=function(t){return arguments.length?(n="function"==typeof t?t:Qo(+t),f):n},f.weight=function(t){return arguments.length?(e="function"==typeof t?t:Qo(+t),f):e},f.size=function(t){if(!arguments.length)return[r,i]
var n=Math.ceil(t[0]),e=Math.ceil(t[1])
if(!(n>=0||n>=0))throw new Error("invalid size")
return r=n,i=e,y()},f.cellSize=function(t){if(!arguments.length)return 1<<a
if(!((t=+t)>=1))throw new Error("invalid cell size")
return a=Math.floor(Math.log(t)/Math.LN2),y()},f.thresholds=function(t){return arguments.length?(l="function"==typeof t?t:Array.isArray(t)?Qo(qo.call(t)):Qo(t),f):l},f.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1))
if(!((t=+t)>=0))throw new Error("invalid bandwidth")
return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),y()},f}function sa(t){return function(){return t}}function ca(t,n,e,r,i,o,a,u,s,c){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=s,this._=c}function la(){return!fn.ctrlKey&&!fn.button}function fa(){return this.parentNode}function ha(t){return null==t?{x:fn.x,y:fn.y}:t}function da(){return navigator.maxTouchPoints||"ontouchstart"in this}function pa(){var t,n,e,r,i=la,o=fa,a=ha,u=da,s={},c=ht("start","drag","end"),l=0,f=0
function h(t){t.on("mousedown.drag",d).filter(u).on("touchstart.drag",y).on("touchmove.drag",_).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function d(){if(!r&&i.apply(this,arguments)){var a=m("mouse",o.apply(this,arguments),Re,this,arguments)
a&&(Mn(fn.view).on("mousemove.drag",p,!0).on("mouseup.drag",g,!0),Pn(fn.view),Tn(),e=!1,t=fn.clientX,n=fn.clientY,a("start"))}}function p(){if(Cn(),!e){var r=fn.clientX-t,i=fn.clientY-n
e=r*r+i*i>f}s.mouse("drag")}function g(){Mn(fn.view).on("mousemove.drag mouseup.drag",null),En(fn.view,e),Cn(),s.mouse("end")}function y(){if(i.apply(this,arguments)){var t,n,e=fn.changedTouches,r=o.apply(this,arguments),a=e.length
for(t=0;t<a;++t)(n=m(e[t].identifier,r,Le,this,arguments))&&(Tn(),n("start"))}}function _(){var t,n,e=fn.changedTouches,r=e.length
for(t=0;t<r;++t)(n=s[e[t].identifier])&&(Cn(),n("drag"))}function v(){var t,n,e=fn.changedTouches,i=e.length
for(r&&clearTimeout(r),r=setTimeout((function(){r=null}),500),t=0;t<i;++t)(n=s[e[t].identifier])&&(Tn(),n("end"))}function m(t,n,e,r,i){var o,u,f,d=e(n,t),p=c.copy()
if(_n(new ca(h,"beforestart",o,t,l,d[0],d[1],0,0,p),(function(){return null!=(fn.subject=o=a.apply(r,i))&&(u=o.x-d[0]||0,f=o.y-d[1]||0,!0)})))return function a(c){var g,y=d
switch(c){case"start":s[t]=a,g=l++
break
case"end":delete s[t],--l
case"drag":d=e(n,t),g=l}_n(new ca(h,c,o,t,g,d[0]+u,d[1]+f,d[0]-y[0],d[1]-y[1],p),p.apply,p,[c,r,i])}}return h.filter=function(t){return arguments.length?(i="function"==typeof t?t:sa(!!t),h):i},h.container=function(t){return arguments.length?(o="function"==typeof t?t:sa(t),h):o},h.subject=function(t){return arguments.length?(a="function"==typeof t?t:sa(t),h):a},h.touchable=function(t){return arguments.length?(u="function"==typeof t?t:sa(!!t),h):u},h.on=function(){var t=c.on.apply(c,arguments)
return t===c?h:t},h.clickDistance=function(t){return arguments.length?(f=(t=+t)*t,h):Math.sqrt(f)},h}ca.prototype.on=function(){var t=this._.on.apply(this._,arguments)
return t===this._?this:t}
var ga={},ya={}
function _a(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'})).join(",")+"}")}function va(t){var n=Object.create(null),e=[]
return t.forEach((function(t){for(var r in t)r in n||e.push(n[r]=r)})),e}function ma(t,n){var e=t+"",r=e.length
return r<n?new Array(n-r+1).join(0)+e:e}function xa(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0)
function r(t,n){var r,i=[],o=t.length,a=0,u=0,s=o<=0,c=!1
function l(){if(s)return ya
if(c)return c=!1,ga
var n,r,i=a
if(34===t.charCodeAt(i)){for(;a++<o&&34!==t.charCodeAt(a)||34===t.charCodeAt(++a););return(n=a)>=o?s=!0:10===(r=t.charCodeAt(a++))?c=!0:13===r&&(c=!0,10===t.charCodeAt(a)&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if(10===(r=t.charCodeAt(n=a++)))c=!0
else if(13===r)c=!0,10===t.charCodeAt(a)&&++a
else if(r!==e)continue
return t.slice(i,n)}return s=!0,t.slice(i,o)}for(10===t.charCodeAt(o-1)&&--o,13===t.charCodeAt(o-1)&&--o;(r=l())!==ya;){for(var f=[];r!==ga&&r!==ya;)f.push(r),r=l()
n&&null==(f=n(f,u++))||i.push(f)}return i}function i(n,e){return n.map((function(n){return e.map((function(t){return a(n[t])})).join(t)}))}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?function(t){var n=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds()
return isNaN(t)?"Invalid Date":function(t){return t<0?"-"+ma(-t,6):t>9999?"+"+ma(t,6):ma(t,4)}(t.getUTCFullYear())+"-"+ma(t.getUTCMonth()+1,2)+"-"+ma(t.getUTCDate(),2)+(i?"T"+ma(n,2)+":"+ma(e,2)+":"+ma(r,2)+"."+ma(i,3)+"Z":r?"T"+ma(n,2)+":"+ma(e,2)+":"+ma(r,2)+"Z":e||n?"T"+ma(n,2)+":"+ma(e,2)+"Z":"")}(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,(function(t,r){if(e)return e(t,r-1)
i=t,e=n?function(t,n){var e=_a(t)
return function(r,i){return n(e(r),i,t)}}(t,n):_a(t)}))
return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=va(n)),[e.map(a).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=va(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")},formatRow:o,formatValue:a}}var ba=xa(","),wa=ba.parse,Sa=ba.parseRows,Aa=ba.format,Ma=ba.formatBody,Ta=ba.formatRows,Ca=ba.formatRow,Pa=ba.formatValue,Ea=xa("\t"),ka=Ea.parse,Na=Ea.parseRows,La=Ea.format,Ra=Ea.formatBody,Va=Ea.formatRows,Oa=Ea.formatRow,Ga=Ea.formatValue
function Da(t){for(var n in t){var e,r,i=t[n].trim()
if(i)if("true"===i)i=!0
else if("false"===i)i=!1
else if("NaN"===i)i=NaN
else if(isNaN(e=+i)){if(!(r=i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue
Ia&&r[4]&&!r[7]&&(i=i.replace(/-/g,"/").replace(/T/," ")),i=new Date(i)}else i=e
else i=null
t[n]=i}return t}var Ia=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours()
function za(t){return+t}function Fa(t){return t*t}function Ya(t){return t*(2-t)}function Ua(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}var Ba=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),Ha=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Xa=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),ja=Math.PI,qa=ja/2
function Wa(t){return 1==+t?1:1-Math.cos(t*qa)}function Qa(t){return Math.sin(t*qa)}function $a(t){return(1-Math.cos(ja*t))/2}function Za(t){return 1.0009775171065494*(Math.pow(2,-10*t)-.0009765625)}function Ka(t){return Za(1-+t)}function Ja(t){return 1-Za(t)}function tu(t){return((t*=2)<=1?Za(1-t):2-Za(t-1))/2}function nu(t){return 1-Math.sqrt(1-t*t)}function eu(t){return Math.sqrt(1- --t*t)}function ru(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var iu=7.5625
function ou(t){return 1-au(1-t)}function au(t){return(t=+t)<.36363636363636365?iu*t*t:t<.7272727272727273?iu*(t-=.5454545454545454)*t+.75:t<.9090909090909091?iu*(t-=.8181818181818182)*t+.9375:iu*(t-=.9545454545454546)*t+.984375}function uu(t){return((t*=2)<=1?1-au(1-t):au(t-1)+1)/2}var su=1.70158,cu=function t(n){function e(t){return(t=+t)*t*(n*(t-1)+t)}return n=+n,e.overshoot=t,e}(su),lu=function t(n){function e(t){return--t*t*((t+1)*n+t)+1}return n=+n,e.overshoot=t,e}(su),fu=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(su),hu=2*Math.PI,du=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=hu)
function i(t){return n*Za(- --t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*hu)},i.period=function(e){return t(n,e)},i}(1,.3),pu=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=hu)
function i(t){return 1-n*Za(t=+t)*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*hu)},i.period=function(e){return t(n,e)},i}(1,.3),gu=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=hu)
function i(t){return((t=2*t-1)<0?n*Za(-t)*Math.sin((r-t)/e):2-n*Za(t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*hu)},i.period=function(e){return t(n,e)},i}(1,.3)
function yu(t){if(!t.ok)throw new Error(t.status+" "+t.statusText)
return t.blob()}function _u(t,n){return fetch(t,n).then(yu)}function vu(t){if(!t.ok)throw new Error(t.status+" "+t.statusText)
return t.arrayBuffer()}function mu(t,n){return fetch(t,n).then(vu)}function xu(t){if(!t.ok)throw new Error(t.status+" "+t.statusText)
return t.text()}function bu(t,n){return fetch(t,n).then(xu)}function wu(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),bu(n,e).then((function(n){return t(n,r)}))}}function Su(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0)
var i=xa(t)
return bu(n,e).then((function(t){return i.parse(t,r)}))}var Au=wu(wa),Mu=wu(ka)
function Tu(t,n){return new Promise((function(e,r){var i=new Image
for(var o in n)i[o]=n[o]
i.onerror=r,i.onload=function(){e(i)},i.src=t}))}function Cu(t){if(!t.ok)throw new Error(t.status+" "+t.statusText)
if(204!==t.status&&205!==t.status)return t.json()}function Pu(t,n){return fetch(t,n).then(Cu)}function Eu(t){return function(n,e){return bu(n,e).then((function(n){return(new DOMParser).parseFromString(n,t)}))}}const ku=Eu("application/xml")
var Nu=Eu("text/html"),Lu=Eu("image/svg+xml")
function Ru(t,n){var e
function r(){var r,i,o=e.length,a=0,u=0
for(r=0;r<o;++r)a+=(i=e[r]).x,u+=i.y
for(a=a/o-t,u=u/o-n,r=0;r<o;++r)(i=e[r]).x-=a,i.y-=u}return null==t&&(t=0),null==n&&(n=0),r.initialize=function(t){e=t},r.x=function(n){return arguments.length?(t=+n,r):t},r.y=function(t){return arguments.length?(n=+t,r):n},r}function Vu(t){return function(){return t}}function Ou(){return 1e-6*(Math.random()-.5)}function Gu(t,n,e,r){if(isNaN(n)||isNaN(e))return t
var i,o,a,u,s,c,l,f,h,d=t._root,p={data:r},g=t._x0,y=t._y0,_=t._x1,v=t._y1
if(!d)return t._root=p,t
for(;d.length;)if((c=n>=(o=(g+_)/2))?g=o:_=o,(l=e>=(a=(y+v)/2))?y=a:v=a,i=d,!(d=d[f=l<<1|c]))return i[f]=p,t
if(u=+t._x.call(null,d.data),s=+t._y.call(null,d.data),n===u&&e===s)return p.next=d,i?i[f]=p:t._root=p,t
do{i=i?i[f]=new Array(4):t._root=new Array(4),(c=n>=(o=(g+_)/2))?g=o:_=o,(l=e>=(a=(y+v)/2))?y=a:v=a}while((f=l<<1|c)==(h=(s>=a)<<1|u>=o))
return i[h]=d,i[f]=p,t}function Du(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function Iu(t){return t[0]}function zu(t){return t[1]}function Fu(t,n,e){var r=new Yu(null==n?Iu:n,null==e?zu:e,NaN,NaN,NaN,NaN)
return null==t?r:r.addAll(t)}function Yu(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Uu(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data}
return n}var Bu=Fu.prototype=Yu.prototype
function Hu(t){return t.x+t.vx}function Xu(t){return t.y+t.vy}function ju(t){var n,e,r=1,i=1
function o(){for(var t,o,u,s,c,l,f,h=n.length,d=0;d<i;++d)for(o=Fu(n,Hu,Xu).visitAfter(a),t=0;t<h;++t)u=n[t],l=e[u.index],f=l*l,s=u.x+u.vx,c=u.y+u.vy,o.visit(p)
function p(t,n,e,i,o){var a=t.data,h=t.r,d=l+h
if(!a)return n>s+d||i<s-d||e>c+d||o<c-d
if(a.index>u.index){var p=s-a.x-a.vx,g=c-a.y-a.vy,y=p*p+g*g
y<d*d&&(0===p&&(y+=(p=Ou())*p),0===g&&(y+=(g=Ou())*g),y=(d-(y=Math.sqrt(y)))/y*r,u.vx+=(p*=y)*(d=(h*=h)/(f+h)),u.vy+=(g*=y)*d,a.vx-=p*(d=1-d),a.vy-=g*d)}}}function a(t){if(t.data)return t.r=e[t.data.index]
for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function u(){if(n){var r,i,o=n.length
for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=Vu(null==t?1:+t)),o.initialize=function(t){n=t,u()},o.iterations=function(t){return arguments.length?(i=+t,o):i},o.strength=function(t){return arguments.length?(r=+t,o):r},o.radius=function(n){return arguments.length?(t="function"==typeof n?n:Vu(+n),u(),o):t},o}function qu(t){return t.index}function Wu(t,n){var e=t.get(n)
if(!e)throw new Error("missing: "+n)
return e}function Qu(t){var n,e,r,i,o,a=qu,u=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},s=Vu(30),c=1
function l(r){for(var i=0,a=t.length;i<c;++i)for(var u,s,l,f,h,d,p,g=0;g<a;++g)s=(u=t[g]).source,f=(l=u.target).x+l.vx-s.x-s.vx||Ou(),h=l.y+l.vy-s.y-s.vy||Ou(),f*=d=((d=Math.sqrt(f*f+h*h))-e[g])/d*r*n[g],h*=d,l.vx-=f*(p=o[g]),l.vy-=h*p,s.vx+=f*(p=1-p),s.vy+=h*p}function f(){if(r){var u,s,c=r.length,l=t.length,f=eo(r,a)
for(u=0,i=new Array(c);u<l;++u)(s=t[u]).index=u,"object"!=typeof s.source&&(s.source=Wu(f,s.source)),"object"!=typeof s.target&&(s.target=Wu(f,s.target)),i[s.source.index]=(i[s.source.index]||0)+1,i[s.target.index]=(i[s.target.index]||0)+1
for(u=0,o=new Array(l);u<l;++u)s=t[u],o[u]=i[s.source.index]/(i[s.source.index]+i[s.target.index])
n=new Array(l),h(),e=new Array(l),d()}}function h(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+u(t[e],e,t)}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+s(t[n],n,t)}return null==t&&(t=[]),l.initialize=function(t){r=t,f()},l.links=function(n){return arguments.length?(t=n,f(),l):t},l.id=function(t){return arguments.length?(a=t,l):a},l.iterations=function(t){return arguments.length?(c=+t,l):c},l.strength=function(t){return arguments.length?(u="function"==typeof t?t:Vu(+t),h(),l):u},l.distance=function(t){return arguments.length?(s="function"==typeof t?t:Vu(+t),d(),l):s},l}function $u(t){return t.x}function Zu(t){return t.y}Bu.copy=function(){var t,n,e=new Yu(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root
if(!r)return e
if(!r.length)return e._root=Uu(r),e
for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Uu(n))
return e},Bu.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t)
return Gu(this.cover(n,e),n,e,t)},Bu.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),s=1/0,c=1/0,l=-1/0,f=-1/0
for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<s&&(s=r),r>l&&(l=r),i<c&&(c=i),i>f&&(f=i))
if(s>l||c>f)return this
for(this.cover(s,c).cover(l,f),e=0;e<o;++e)Gu(this,a[e],u[e],t[e])
return this},Bu.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this
var e=this._x0,r=this._y0,i=this._x1,o=this._y1
if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1
else{for(var a,u,s=i-e,c=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=c,c=a,s*=2,u){case 0:i=e+s,o=r+s
break
case 1:e=i-s,o=r+s
break
case 2:i=e+s,r=o-s
break
case 3:e=i-s,r=o-s}this._root&&this._root.length&&(this._root=c)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},Bu.data=function(){var t=[]
return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},Bu.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},Bu.find=function(t,n,e){var r,i,o,a,u,s,c,l=this._x0,f=this._y0,h=this._x1,d=this._y1,p=[],g=this._root
for(g&&p.push(new Du(g,l,f,h,d)),null==e?e=1/0:(l=t-e,f=n-e,h=t+e,d=n+e,e*=e);s=p.pop();)if(!(!(g=s.node)||(i=s.x0)>h||(o=s.y0)>d||(a=s.x1)<l||(u=s.y1)<f))if(g.length){var y=(i+a)/2,_=(o+u)/2
p.push(new Du(g[3],y,_,a,u),new Du(g[2],i,_,y,u),new Du(g[1],y,o,a,_),new Du(g[0],i,o,y,_)),(c=(n>=_)<<1|t>=y)&&(s=p[p.length-1],p[p.length-1]=p[p.length-1-c],p[p.length-1-c]=s)}else{var v=t-+this._x.call(null,g.data),m=n-+this._y.call(null,g.data),x=v*v+m*m
if(x<e){var b=Math.sqrt(e=x)
l=t-b,f=n-b,h=t+b,d=n+b,r=g.data}}return r},Bu.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this
var n,e,r,i,o,a,u,s,c,l,f,h,d=this._root,p=this._x0,g=this._y0,y=this._x1,_=this._y1
if(!d)return this
if(d.length)for(;;){if((c=o>=(u=(p+y)/2))?p=u:y=u,(l=a>=(s=(g+_)/2))?g=s:_=s,n=d,!(d=d[f=l<<1|c]))return this
if(!d.length)break;(n[f+1&3]||n[f+2&3]||n[f+3&3])&&(e=n,h=f)}for(;d.data!==t;)if(r=d,!(d=d.next))return this
return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[f]=i:delete n[f],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},Bu.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n])
return this},Bu.root=function(){return this._root},Bu.size=function(){var t=0
return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},Bu.visit=function(t){var n,e,r,i,o,a,u=[],s=this._root
for(s&&u.push(new Du(s,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(s=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&s.length){var c=(r+o)/2,l=(i+a)/2;(e=s[3])&&u.push(new Du(e,c,l,o,a)),(e=s[2])&&u.push(new Du(e,r,l,c,a)),(e=s[1])&&u.push(new Du(e,c,i,o,l)),(e=s[0])&&u.push(new Du(e,r,i,c,l))}return this},Bu.visitAfter=function(t){var n,e=[],r=[]
for(this._root&&e.push(new Du(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node
if(i.length){var o,a=n.x0,u=n.y0,s=n.x1,c=n.y1,l=(a+s)/2,f=(u+c)/2;(o=i[0])&&e.push(new Du(o,a,u,l,f)),(o=i[1])&&e.push(new Du(o,l,u,s,f)),(o=i[2])&&e.push(new Du(o,a,f,l,c)),(o=i[3])&&e.push(new Du(o,l,f,s,c))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1)
return this},Bu.x=function(t){return arguments.length?(this._x=t,this):this._x},Bu.y=function(t){return arguments.length?(this._y=t,this):this._y}
var Ku=Math.PI*(3-Math.sqrt(5))
function Ju(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=eo(),s=qe(l),c=ht("tick","end")
function l(){f(),c.call("tick",n),e<r&&(s.stop(),c.call("end",n))}function f(r){var s,c,l=t.length
void 0===r&&(r=1)
for(var f=0;f<r;++f)for(e+=(o-e)*i,u.each((function(t){t(e)})),s=0;s<l;++s)null==(c=t[s]).fx?c.x+=c.vx*=a:(c.x=c.fx,c.vx=0),null==c.fy?c.y+=c.vy*=a:(c.y=c.fy,c.vy=0)
return n}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=10*Math.sqrt(e),o=e*Ku
n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function d(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:f,restart:function(){return s.restart(l),n},stop:function(){return s.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),u.each(d),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},force:function(t,e){return arguments.length>1?(null==e?u.remove(t):u.set(t,d(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,s,c=0,l=t.length
for(null==r?r=1/0:r*=r,c=0;c<l;++c)(a=(i=n-(u=t[c]).x)*i+(o=e-u.y)*o)<r&&(s=u,r=a)
return s},on:function(t,e){return arguments.length>1?(c.on(t,e),n):c.on(t)}}}function ts(){var t,n,e,r,i=Vu(-30),o=1,a=1/0,u=.81
function s(r){var i,o=t.length,a=Fu(t,$u,Zu).visitAfter(l)
for(e=r,i=0;i<o;++i)n=t[i],a.visit(f)}function c(){if(t){var n,e,o=t.length
for(r=new Array(o),n=0;n<o;++n)e=t[n],r[e.index]=+i(e,n,t)}}function l(t){var n,e,i,o,a,u=0,s=0
if(t.length){for(i=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,s+=e,i+=e*n.x,o+=e*n.y)
t.x=i/s,t.y=o/s}else{(n=t).x=n.data.x,n.y=n.data.y
do{u+=r[n.data.index]}while(n=n.next)}t.value=u}function f(t,i,s,c){if(!t.value)return!0
var l=t.x-n.x,f=t.y-n.y,h=c-i,d=l*l+f*f
if(h*h/u<d)return d<a&&(0===l&&(d+=(l=Ou())*l),0===f&&(d+=(f=Ou())*f),d<o&&(d=Math.sqrt(o*d)),n.vx+=l*t.value*e/d,n.vy+=f*t.value*e/d),!0
if(!(t.length||d>=a)){(t.data!==n||t.next)&&(0===l&&(d+=(l=Ou())*l),0===f&&(d+=(f=Ou())*f),d<o&&(d=Math.sqrt(o*d)))
do{t.data!==n&&(h=r[t.data.index]*e/d,n.vx+=l*h,n.vy+=f*h)}while(t=t.next)}}return s.initialize=function(n){t=n,c()},s.strength=function(t){return arguments.length?(i="function"==typeof t?t:Vu(+t),c(),s):i},s.distanceMin=function(t){return arguments.length?(o=t*t,s):Math.sqrt(o)},s.distanceMax=function(t){return arguments.length?(a=t*t,s):Math.sqrt(a)},s.theta=function(t){return arguments.length?(u=t*t,s):Math.sqrt(u)},s}function ns(t,n,e){var r,i,o,a=Vu(.1)
function u(t){for(var a=0,u=r.length;a<u;++a){var s=r[a],c=s.x-n||1e-6,l=s.y-e||1e-6,f=Math.sqrt(c*c+l*l),h=(o[a]-f)*i[a]*t/f
s.vx+=c*h,s.vy+=l*h}}function s(){if(r){var n,e=r.length
for(i=new Array(e),o=new Array(e),n=0;n<e;++n)o[n]=+t(r[n],n,r),i[n]=isNaN(o[n])?0:+a(r[n],n,r)}}return"function"!=typeof t&&(t=Vu(+t)),null==n&&(n=0),null==e&&(e=0),u.initialize=function(t){r=t,s()},u.strength=function(t){return arguments.length?(a="function"==typeof t?t:Vu(+t),s(),u):a},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:Vu(+n),s(),u):t},u.x=function(t){return arguments.length?(n=+t,u):n},u.y=function(t){return arguments.length?(e=+t,u):e},u}function es(t){var n,e,r,i=Vu(.1)
function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length
for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=Vu(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:Vu(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:Vu(+n),a(),o):t},o}function rs(t){var n,e,r,i=Vu(.1)
function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length
for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=Vu(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:Vu(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:Vu(+n),a(),o):t},o}function is(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null
var e,r=t.slice(0,e)
return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function os(t){return(t=is(Math.abs(t)))?t[1]:NaN}var as,us=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function ss(t){if(!(n=us.exec(t)))throw new Error("invalid format: "+t)
var n
return new cs({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function cs(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function ls(t,n){var e=is(t,n)
if(!e)return t+""
var r=e[0],i=e[1]
return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}ss.prototype=cs.prototype,cs.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}
const fs={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return ls(100*t,n)},r:ls,s:function(t,n){var e=is(t,n)
if(!e)return t+""
var r=e[0],i=e[1],o=i-(as=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length
return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+is(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}}
function hs(t){return t}var ds,ps,gs,ys=Array.prototype.map,_s=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"]
function vs(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?hs:(n=ys.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,u=n[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),o.push(t.substring(i-=u,i+u)),!((s+=u+1)>r));)u=n[a=(a+1)%n.length]
return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?hs:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(ys.call(t.numerals,String)),s=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"-":t.minus+"",l=void 0===t.nan?"NaN":t.nan+""
function f(t){var n=(t=ss(t)).fill,e=t.align,f=t.sign,h=t.symbol,d=t.zero,p=t.width,g=t.comma,y=t.precision,_=t.trim,v=t.type
"n"===v?(g=!0,v="g"):fs[v]||(void 0===y&&(y=12),_=!0,v="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=")
var m="$"===h?i:"#"===h&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",x="$"===h?o:/[%p]/.test(v)?s:"",b=fs[v],w=/[defgprs%]/.test(v)
function S(t){var i,o,s,h=m,S=x
if("c"===v)S=b(t)+S,t=""
else{var A=(t=+t)<0||1/t<0
if(t=isNaN(t)?l:b(Math.abs(t),y),_&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r
break
case"0":0===i&&(i=r),n=r
break
default:if(!+t[r])break t
i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),A&&0==+t&&"+"!==f&&(A=!1),h=(A?"("===f?f:c:"-"===f||"("===f?"":f)+h,S=("s"===v?_s[8+as/3]:"")+S+(A&&"("===f?")":""),w)for(i=-1,o=t.length;++i<o;)if(48>(s=t.charCodeAt(i))||s>57){S=(46===s?a+t.slice(i+1):t.slice(i))+S,t=t.slice(0,i)
break}}g&&!d&&(t=r(t,1/0))
var M=h.length+t.length+S.length,T=M<p?new Array(p-M+1).join(n):""
switch(g&&d&&(t=r(T+t,T.length?p-S.length:1/0),T=""),e){case"<":t=h+t+S+T
break
case"=":t=h+T+t+S
break
case"^":t=T.slice(0,M=T.length>>1)+h+t+S+T.slice(M)
break
default:t=T+h+t+S}return u(t)}return y=void 0===y?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y)),S.toString=function(){return t+""},S}return{format:f,formatPrefix:function(t,n){var e=f(((t=ss(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(os(n)/3))),i=Math.pow(10,-r),o=_s[8+r/3]
return function(t){return e(i*t)+o}}}}function ms(t){return ds=vs(t),ps=ds.format,gs=ds.formatPrefix,ds}function xs(t){return Math.max(0,-os(Math.abs(t)))}function bs(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(os(n)/3)))-os(Math.abs(t)))}function ws(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,os(n)-os(t))+1}function Ss(){return new As}function As(){this.reset()}ms({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),As.prototype={constructor:As,reset:function(){this.s=this.t=0},add:function(t){Ts(Ms,t,this.t),Ts(this,Ms.s,this.s),this.s?this.t+=Ms.t:this.s=Ms.t},valueOf:function(){return this.s}}
var Ms=new As
function Ts(t,n,e){var r=t.s=n+e,i=r-n,o=r-i
t.t=n-o+(e-i)}var Cs=1e-6,Ps=1e-12,Es=Math.PI,ks=Es/2,Ns=Es/4,Ls=2*Es,Rs=180/Es,Vs=Es/180,Os=Math.abs,Gs=Math.atan,Ds=Math.atan2,Is=Math.cos,zs=Math.ceil,Fs=Math.exp,Ys=(Math.floor,Math.log),Us=Math.pow,Bs=Math.sin,Hs=Math.sign||function(t){return t>0?1:t<0?-1:0},Xs=Math.sqrt,js=Math.tan
function qs(t){return t>1?0:t<-1?Es:Math.acos(t)}function Ws(t){return t>1?ks:t<-1?-ks:Math.asin(t)}function Qs(t){return(t=Bs(t/2))*t}function $s(){}function Zs(t,n){t&&Js.hasOwnProperty(t.type)&&Js[t.type](t,n)}var Ks={Feature:function(t,n){Zs(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)Zs(e[r].geometry,n)}},Js={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){tc(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)tc(e[r],n,0)},Polygon:function(t,n){nc(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)nc(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)Zs(e[r],n)}}
function tc(t,n,e){var r,i=-1,o=t.length-e
for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2])
n.lineEnd()}function nc(t,n){var e=-1,r=t.length
for(n.polygonStart();++e<r;)tc(t[e],n,1)
n.polygonEnd()}function ec(t,n){t&&Ks.hasOwnProperty(t.type)?Ks[t.type](t,n):Zs(t,n)}var rc,ic,oc,ac,uc,sc=Ss(),cc=Ss(),lc={point:$s,lineStart:$s,lineEnd:$s,polygonStart:function(){sc.reset(),lc.lineStart=fc,lc.lineEnd=hc},polygonEnd:function(){var t=+sc
cc.add(t<0?Ls+t:t),this.lineStart=this.lineEnd=this.point=$s},sphere:function(){cc.add(Ls)}}
function fc(){lc.point=dc}function hc(){pc(rc,ic)}function dc(t,n){lc.point=pc,rc=t,ic=n,oc=t*=Vs,ac=Is(n=(n*=Vs)/2+Ns),uc=Bs(n)}function pc(t,n){var e=(t*=Vs)-oc,r=e>=0?1:-1,i=r*e,o=Is(n=(n*=Vs)/2+Ns),a=Bs(n),u=uc*a,s=ac*o+u*Is(i),c=u*r*Bs(i)
sc.add(Ds(c,s)),oc=t,ac=o,uc=a}function gc(t){return cc.reset(),ec(t,lc),2*cc}function yc(t){return[Ds(t[1],t[0]),Ws(t[2])]}function _c(t){var n=t[0],e=t[1],r=Is(e)
return[r*Is(n),r*Bs(n),Bs(e)]}function vc(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function mc(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function xc(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function bc(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function wc(t){var n=Xs(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])
t[0]/=n,t[1]/=n,t[2]/=n}var Sc,Ac,Mc,Tc,Cc,Pc,Ec,kc,Nc,Lc,Rc,Vc,Oc,Gc,Dc,Ic,zc,Fc,Yc,Uc,Bc,Hc,Xc,jc,qc,Wc,Qc=Ss(),$c={point:Zc,lineStart:Jc,lineEnd:tl,polygonStart:function(){$c.point=nl,$c.lineStart=el,$c.lineEnd=rl,Qc.reset(),lc.polygonStart()},polygonEnd:function(){lc.polygonEnd(),$c.point=Zc,$c.lineStart=Jc,$c.lineEnd=tl,sc<0?(Sc=-(Mc=180),Ac=-(Tc=90)):Qc>Cs?Tc=90:Qc<-1e-6&&(Ac=-90),Lc[0]=Sc,Lc[1]=Mc},sphere:function(){Sc=-(Mc=180),Ac=-(Tc=90)}}
function Zc(t,n){Nc.push(Lc=[Sc=t,Mc=t]),n<Ac&&(Ac=n),n>Tc&&(Tc=n)}function Kc(t,n){var e=_c([t*Vs,n*Vs])
if(kc){var r=mc(kc,e),i=mc([r[1],-r[0],0],r)
wc(i),i=yc(i)
var o,a=t-Cc,u=a>0?1:-1,s=i[0]*Rs*u,c=Os(a)>180
c^(u*Cc<s&&s<u*t)?(o=i[1]*Rs)>Tc&&(Tc=o):c^(u*Cc<(s=(s+360)%360-180)&&s<u*t)?(o=-i[1]*Rs)<Ac&&(Ac=o):(n<Ac&&(Ac=n),n>Tc&&(Tc=n)),c?t<Cc?il(Sc,t)>il(Sc,Mc)&&(Mc=t):il(t,Mc)>il(Sc,Mc)&&(Sc=t):Mc>=Sc?(t<Sc&&(Sc=t),t>Mc&&(Mc=t)):t>Cc?il(Sc,t)>il(Sc,Mc)&&(Mc=t):il(t,Mc)>il(Sc,Mc)&&(Sc=t)}else Nc.push(Lc=[Sc=t,Mc=t])
n<Ac&&(Ac=n),n>Tc&&(Tc=n),kc=e,Cc=t}function Jc(){$c.point=Kc}function tl(){Lc[0]=Sc,Lc[1]=Mc,$c.point=Zc,kc=null}function nl(t,n){if(kc){var e=t-Cc
Qc.add(Os(e)>180?e+(e>0?360:-360):e)}else Pc=t,Ec=n
lc.point(t,n),Kc(t,n)}function el(){lc.lineStart()}function rl(){nl(Pc,Ec),lc.lineEnd(),Os(Qc)>Cs&&(Sc=-(Mc=180)),Lc[0]=Sc,Lc[1]=Mc,kc=null}function il(t,n){return(n-=t)<0?n+360:n}function ol(t,n){return t[0]-n[0]}function al(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function ul(t){var n,e,r,i,o,a,u
if(Tc=Mc=-(Sc=Ac=1/0),Nc=[],ec(t,$c),e=Nc.length){for(Nc.sort(ol),n=1,o=[r=Nc[0]];n<e;++n)al(r,(i=Nc[n])[0])||al(r,i[1])?(il(r[0],i[1])>il(r[0],r[1])&&(r[1]=i[1]),il(i[0],r[1])>il(r[0],r[1])&&(r[0]=i[0])):o.push(r=i)
for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=il(r[1],i[0]))>a&&(a=u,Sc=i[0],Mc=r[1])}return Nc=Lc=null,Sc===1/0||Ac===1/0?[[NaN,NaN],[NaN,NaN]]:[[Sc,Ac],[Mc,Tc]]}var sl={sphere:$s,point:cl,lineStart:fl,lineEnd:pl,polygonStart:function(){sl.lineStart=gl,sl.lineEnd=yl},polygonEnd:function(){sl.lineStart=fl,sl.lineEnd=pl}}
function cl(t,n){t*=Vs
var e=Is(n*=Vs)
ll(e*Is(t),e*Bs(t),Bs(n))}function ll(t,n,e){++Rc,Oc+=(t-Oc)/Rc,Gc+=(n-Gc)/Rc,Dc+=(e-Dc)/Rc}function fl(){sl.point=hl}function hl(t,n){t*=Vs
var e=Is(n*=Vs)
jc=e*Is(t),qc=e*Bs(t),Wc=Bs(n),sl.point=dl,ll(jc,qc,Wc)}function dl(t,n){t*=Vs
var e=Is(n*=Vs),r=e*Is(t),i=e*Bs(t),o=Bs(n),a=Ds(Xs((a=qc*o-Wc*i)*a+(a=Wc*r-jc*o)*a+(a=jc*i-qc*r)*a),jc*r+qc*i+Wc*o)
Vc+=a,Ic+=a*(jc+(jc=r)),zc+=a*(qc+(qc=i)),Fc+=a*(Wc+(Wc=o)),ll(jc,qc,Wc)}function pl(){sl.point=cl}function gl(){sl.point=_l}function yl(){vl(Hc,Xc),sl.point=cl}function _l(t,n){Hc=t,Xc=n,t*=Vs,n*=Vs,sl.point=vl
var e=Is(n)
jc=e*Is(t),qc=e*Bs(t),Wc=Bs(n),ll(jc,qc,Wc)}function vl(t,n){t*=Vs
var e=Is(n*=Vs),r=e*Is(t),i=e*Bs(t),o=Bs(n),a=qc*o-Wc*i,u=Wc*r-jc*o,s=jc*i-qc*r,c=Xs(a*a+u*u+s*s),l=Ws(c),f=c&&-l/c
Yc+=f*a,Uc+=f*u,Bc+=f*s,Vc+=l,Ic+=l*(jc+(jc=r)),zc+=l*(qc+(qc=i)),Fc+=l*(Wc+(Wc=o)),ll(jc,qc,Wc)}function ml(t){Rc=Vc=Oc=Gc=Dc=Ic=zc=Fc=Yc=Uc=Bc=0,ec(t,sl)
var n=Yc,e=Uc,r=Bc,i=n*n+e*e+r*r
return i<Ps&&(n=Ic,e=zc,r=Fc,Vc<Cs&&(n=Oc,e=Gc,r=Dc),(i=n*n+e*e+r*r)<Ps)?[NaN,NaN]:[Ds(e,n)*Rs,Ws(r/Xs(i))*Rs]}function xl(t){return function(){return t}}function bl(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function wl(t,n){return[Os(t)>Es?t+Math.round(-t/Ls)*Ls:t,n]}function Sl(t,n,e){return(t%=Ls)?n||e?bl(Ml(t),Tl(n,e)):Ml(t):n||e?Tl(n,e):wl}function Al(t){return function(n,e){return[(n+=t)>Es?n-Ls:n<-Es?n+Ls:n,e]}}function Ml(t){var n=Al(t)
return n.invert=Al(-t),n}function Tl(t,n){var e=Is(t),r=Bs(t),i=Is(n),o=Bs(n)
function a(t,n){var a=Is(n),u=Is(t)*a,s=Bs(t)*a,c=Bs(n),l=c*e+u*r
return[Ds(s*i-l*o,u*e-c*r),Ws(l*i+s*o)]}return a.invert=function(t,n){var a=Is(n),u=Is(t)*a,s=Bs(t)*a,c=Bs(n),l=c*i-s*o
return[Ds(s*i+c*o,u*e+l*r),Ws(l*e-u*r)]},a}function Cl(t){function n(n){return(n=t(n[0]*Vs,n[1]*Vs))[0]*=Rs,n[1]*=Rs,n}return t=Sl(t[0]*Vs,t[1]*Vs,t.length>2?t[2]*Vs:0),n.invert=function(n){return(n=t.invert(n[0]*Vs,n[1]*Vs))[0]*=Rs,n[1]*=Rs,n},n}function Pl(t,n,e,r,i,o){if(e){var a=Is(n),u=Bs(n),s=r*e
null==i?(i=n+r*Ls,o=n-s/2):(i=El(a,i),o=El(a,o),(r>0?i<o:i>o)&&(i+=r*Ls))
for(var c,l=i;r>0?l>o:l<o;l-=s)c=yc([a,-u*Is(l),-u*Bs(l)]),t.point(c[0],c[1])}}function El(t,n){(n=_c(n))[0]-=t,wc(n)
var e=qs(-n[1])
return((-n[2]<0?-e:e)+Ls-Cs)%Ls}function kl(){var t,n,e=xl([0,0]),r=xl(90),i=xl(6),o={point:function(e,r){t.push(e=n(e,r)),e[0]*=Rs,e[1]*=Rs}}
function a(){var a=e.apply(this,arguments),u=r.apply(this,arguments)*Vs,s=i.apply(this,arguments)*Vs
return t=[],n=Sl(-a[0]*Vs,-a[1]*Vs,0).invert,Pl(o,u,s,1),a={type:"Polygon",coordinates:[t]},t=n=null,a}return a.center=function(t){return arguments.length?(e="function"==typeof t?t:xl([+t[0],+t[1]]),a):e},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:xl(+t),a):r},a.precision=function(t){return arguments.length?(i="function"==typeof t?t:xl(+t),a):i},a}function Nl(){var t,n=[]
return{point:function(n,e,r){t.push([n,e,r])},lineStart:function(){n.push(t=[])},lineEnd:$s,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n
return n=[],t=null,e}}}function Ll(t,n){return Os(t[0]-n[0])<Cs&&Os(t[1]-n[1])<Cs}function Rl(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Vl(t,n,e,r,i){var o,a,u=[],s=[]
if(t.forEach((function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n]
if(Ll(r,a)){if(!r[2]&&!a[2]){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1])
return void i.lineEnd()}a[0]+=2e-6}u.push(e=new Rl(r,t,null,!0)),s.push(e.o=new Rl(r,null,e,!1)),u.push(e=new Rl(a,t,null,!1)),s.push(e.o=new Rl(a,null,e,!0))}})),u.length){for(s.sort(n),Ol(u),Ol(s),o=0,a=s.length;o<a;++o)s[o].e=e=!e
for(var c,l,f=u[0];;){for(var h=f,d=!0;h.v;)if((h=h.n)===f)return
c=h.z,i.lineStart()
do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=c.length;o<a;++o)i.point((l=c[o])[0],l[1])
else r(h.x,h.n.x,1,i)
h=h.n}else{if(d)for(c=h.p.z,o=c.length-1;o>=0;--o)i.point((l=c[o])[0],l[1])
else r(h.x,h.p.x,-1,i)
h=h.p}c=(h=h.o).z,d=!d}while(!h.v)
i.lineEnd()}}}function Ol(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e
i.n=e=t[0],e.p=i}}wl.invert=wl
var Gl=Ss()
function Dl(t){return Os(t[0])<=Es?t[0]:Hs(t[0])*((Os(t[0])+Es)%Ls-Es)}function Il(t,n){var e=Dl(n),r=n[1],i=Bs(r),o=[Bs(e),-Is(e),0],a=0,u=0
Gl.reset(),1===i?r=ks+Cs:-1===i&&(r=-ks-Cs)
for(var s=0,c=t.length;s<c;++s)if(f=(l=t[s]).length)for(var l,f,h=l[f-1],d=Dl(h),p=h[1]/2+Ns,g=Bs(p),y=Is(p),_=0;_<f;++_,d=m,g=b,y=w,h=v){var v=l[_],m=Dl(v),x=v[1]/2+Ns,b=Bs(x),w=Is(x),S=m-d,A=S>=0?1:-1,M=A*S,T=M>Es,C=g*b
if(Gl.add(Ds(C*A*Bs(M),y*w+C*Is(M))),a+=T?S+A*Ls:S,T^d>=e^m>=e){var P=mc(_c(h),_c(v))
wc(P)
var E=mc(o,P)
wc(E)
var k=(T^S>=0?-1:1)*Ws(E[2]);(r>k||r===k&&(P[0]||P[1]))&&(u+=T^S>=0?1:-1)}}return(a<-1e-6||a<Cs&&Gl<-1e-6)^1&u}function zl(t,n,e,r){return function(i){var o,a,u,s=n(i),c=Nl(),l=n(c),f=!1,h={point:d,lineStart:g,lineEnd:y,polygonStart:function(){h.point=_,h.lineStart=v,h.lineEnd=m,a=[],o=[]},polygonEnd:function(){h.point=d,h.lineStart=g,h.lineEnd=y,a=I(a)
var t=Il(o,r)
a.length?(f||(i.polygonStart(),f=!0),Vl(a,Yl,t,e,i)):t&&(f||(i.polygonStart(),f=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),f&&(i.polygonEnd(),f=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}}
function d(n,e){t(n,e)&&i.point(n,e)}function p(t,n){s.point(t,n)}function g(){h.point=p,s.lineStart()}function y(){h.point=d,s.lineEnd()}function _(t,n){u.push([t,n]),l.point(t,n)}function v(){l.lineStart(),u=[]}function m(){_(u[0][0],u[0][1]),l.lineEnd()
var t,n,e,r,s=l.clean(),h=c.result(),d=h.length
if(u.pop(),o.push(u),u=null,d)if(1&s){if((n=(e=h[0]).length-1)>0){for(f||(i.polygonStart(),f=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1])
i.lineEnd()}}else d>1&&2&s&&h.push(h.pop().concat(h.shift())),a.push(h.filter(Fl))}return h}}function Fl(t){return t.length>1}function Yl(t,n){return((t=t.x)[0]<0?t[1]-ks-Cs:ks-t[1])-((n=n.x)[0]<0?n[1]-ks-Cs:ks-n[1])}const Ul=zl((function(){return!0}),(function(t){var n,e=NaN,r=NaN,i=NaN
return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?Es:-Es,s=Os(o-e)
Os(s-Es)<Cs?(t.point(e,r=(r+a)/2>0?ks:-ks),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&s>=Es&&(Os(e-i)<Cs&&(e-=i*Cs),Os(o-u)<Cs&&(o-=u*Cs),r=function(t,n,e,r){var i,o,a=Bs(t-e)
return Os(a)>Cs?Gs((Bs(n)*(o=Is(r))*Bs(e)-Bs(r)*(i=Is(n))*Bs(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}),(function(t,n,e,r){var i
if(null==t)i=e*ks,r.point(-Es,i),r.point(0,i),r.point(Es,i),r.point(Es,0),r.point(Es,-i),r.point(0,-i),r.point(-Es,-i),r.point(-Es,0),r.point(-Es,i)
else if(Os(t[0]-n[0])>Cs){var o=t[0]<n[0]?Es:-Es
i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])}),[-Es,-ks])
function Bl(t){var n=Is(t),e=6*Vs,r=n>0,i=Os(n)>Cs
function o(t,e){return Is(t)*Is(e)>n}function a(t,e,r){var i=[1,0,0],o=mc(_c(t),_c(e)),a=vc(o,o),u=o[0],s=a-u*u
if(!s)return!r&&t
var c=n*a/s,l=-n*u/s,f=mc(i,o),h=bc(i,c)
xc(h,bc(o,l))
var d=f,p=vc(h,d),g=vc(d,d),y=p*p-g*(vc(h,h)-1)
if(!(y<0)){var _=Xs(y),v=bc(d,(-p-_)/g)
if(xc(v,h),v=yc(v),!r)return v
var m,x=t[0],b=e[0],w=t[1],S=e[1]
b<x&&(m=x,x=b,b=m)
var A=b-x,M=Os(A-Es)<Cs
if(!M&&S<w&&(m=w,w=S,S=m),M||A<Cs?M?w+S>0^v[1]<(Os(v[0]-x)<Cs?w:S):w<=v[1]&&v[1]<=S:A>Es^(x<=v[0]&&v[0]<=b)){var T=bc(d,(-p+_)/g)
return xc(T,h),[v,yc(T)]}}}function u(n,e){var i=r?t:Es-t,o=0
return n<-i?o|=1:n>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return zl(o,(function(t){var n,e,s,c,l
return{lineStart:function(){c=s=!1,l=1},point:function(f,h){var d,p=[f,h],g=o(f,h),y=r?g?0:u(f,h):g?u(f+(f<0?Es:-Es),h):0
if(!n&&(c=s=g)&&t.lineStart(),g!==s&&(!(d=a(n,p))||Ll(n,d)||Ll(p,d))&&(p[2]=1),g!==s)l=0,g?(t.lineStart(),d=a(p,n),t.point(d[0],d[1])):(d=a(n,p),t.point(d[0],d[1],2),t.lineEnd()),n=d
else if(i&&n&&r^g){var _
y&e||!(_=a(p,n,!0))||(l=0,r?(t.lineStart(),t.point(_[0][0],_[0][1]),t.point(_[1][0],_[1][1]),t.lineEnd()):(t.point(_[1][0],_[1][1]),t.lineEnd(),t.lineStart(),t.point(_[0][0],_[0][1],3)))}!g||n&&Ll(n,p)||t.point(p[0],p[1]),n=p,s=g,e=y},lineEnd:function(){s&&t.lineEnd(),n=null},clean:function(){return l|(c&&s)<<1}}}),(function(n,r,i,o){Pl(o,t,e,i,n,r)}),r?[0,-t]:[-Es,t-Es])}var Hl=1e9,Xl=-Hl
function jl(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,c){var l=0,f=0
if(null==i||(l=a(i,u))!==(f=a(o,u))||s(i,o)<0^u>0)do{c.point(0===l||3===l?t:e,l>1?r:n)}while((l=(l+u+4)%4)!==f)
else c.point(o[0],o[1])}function a(r,i){return Os(r[0]-t)<Cs?i>0?0:3:Os(r[0]-e)<Cs?i>0?2:1:Os(r[1]-n)<Cs?i>0?1:0:i>0?3:2}function u(t,n){return s(t.x,n.x)}function s(t,n){var e=a(t,1),r=a(n,1)
return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){var s,c,l,f,h,d,p,g,y,_,v,m=a,x=Nl(),b={point:w,lineStart:function(){b.point=S,c&&c.push(l=[]),_=!0,y=!1,p=g=NaN},lineEnd:function(){s&&(S(f,h),d&&y&&x.rejoin(),s.push(x.result())),b.point=w,y&&m.lineEnd()},polygonStart:function(){m=x,s=[],c=[],v=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=c.length;e<i;++e)for(var o,a,u=c[e],s=1,l=u.length,f=u[0],h=f[0],d=f[1];s<l;++s)o=h,a=d,h=(f=u[s])[0],d=f[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n
return n}(),e=v&&n,i=(s=I(s)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&Vl(s,u,n,o,a),a.polygonEnd()),m=a,s=c=l=null}}
function w(t,n){i(t,n)&&m.point(t,n)}function S(o,a){var u=i(o,a)
if(c&&l.push([o,a]),_)f=o,h=a,d=u,_=!1,u&&(m.lineStart(),m.point(o,a))
else if(u&&y)m.point(o,a)
else{var s=[p=Math.max(Xl,Math.min(Hl,p)),g=Math.max(Xl,Math.min(Hl,g))],x=[o=Math.max(Xl,Math.min(Hl,o)),a=Math.max(Xl,Math.min(Hl,a))]
!function(t,n,e,r,i,o){var a,u=t[0],s=t[1],c=0,l=1,f=n[0]-u,h=n[1]-s
if(a=e-u,f||!(a>0)){if(a/=f,f<0){if(a<c)return
a<l&&(l=a)}else if(f>0){if(a>l)return
a>c&&(c=a)}if(a=i-u,f||!(a<0)){if(a/=f,f<0){if(a>l)return
a>c&&(c=a)}else if(f>0){if(a<c)return
a<l&&(l=a)}if(a=r-s,h||!(a>0)){if(a/=h,h<0){if(a<c)return
a<l&&(l=a)}else if(h>0){if(a>l)return
a>c&&(c=a)}if(a=o-s,h||!(a<0)){if(a/=h,h<0){if(a>l)return
a>c&&(c=a)}else if(h>0){if(a<c)return
a<l&&(l=a)}return c>0&&(t[0]=u+c*f,t[1]=s+c*h),l<1&&(n[0]=u+l*f,n[1]=s+l*h),!0}}}}}(s,x,t,n,e,r)?u&&(m.lineStart(),m.point(o,a),v=!1):(y||(m.lineStart(),m.point(s[0],s[1])),m.point(x[0],x[1]),u||m.lineEnd(),v=!1)}p=o,g=a,y=u}return b}}function ql(){var t,n,e,r=0,i=0,o=960,a=500
return e={stream:function(e){return t&&n===e?t:t=jl(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}}var Wl,Ql,$l,Zl=Ss(),Kl={sphere:$s,point:$s,lineStart:function(){Kl.point=tf,Kl.lineEnd=Jl},lineEnd:$s,polygonStart:$s,polygonEnd:$s}
function Jl(){Kl.point=Kl.lineEnd=$s}function tf(t,n){Wl=t*=Vs,Ql=Bs(n*=Vs),$l=Is(n),Kl.point=nf}function nf(t,n){t*=Vs
var e=Bs(n*=Vs),r=Is(n),i=Os(t-Wl),o=Is(i),a=r*Bs(i),u=$l*e-Ql*r*o,s=Ql*e+$l*r*o
Zl.add(Ds(Xs(a*a+u*u),s)),Wl=t,Ql=e,$l=r}function ef(t){return Zl.reset(),ec(t,Kl),+Zl}var rf=[null,null],of={type:"LineString",coordinates:rf}
function af(t,n){return rf[0]=t,rf[1]=n,ef(of)}var uf={Feature:function(t,n){return cf(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(cf(e[r].geometry,n))return!0
return!1}},sf={Sphere:function(){return!0},Point:function(t,n){return lf(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(lf(e[r],n))return!0
return!1},LineString:function(t,n){return ff(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(ff(e[r],n))return!0
return!1},Polygon:function(t,n){return hf(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(hf(e[r],n))return!0
return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(cf(e[r],n))return!0
return!1}}
function cf(t,n){return!(!t||!sf.hasOwnProperty(t.type))&&sf[t.type](t,n)}function lf(t,n){return 0===af(t,n)}function ff(t,n){for(var e,r,i,o=0,a=t.length;o<a;o++){if(0===(r=af(t[o],n)))return!0
if(o>0&&(i=af(t[o],t[o-1]))>0&&e<=i&&r<=i&&(e+r-i)*(1-Math.pow((e-r)/i,2))<Ps*i)return!0
e=r}return!1}function hf(t,n){return!!Il(t.map(df),pf(n))}function df(t){return(t=t.map(pf)).pop(),t}function pf(t){return[t[0]*Vs,t[1]*Vs]}function gf(t,n){return(t&&uf.hasOwnProperty(t.type)?uf[t.type]:cf)(t,n)}function yf(t,n,e){var r=S(t,n-Cs,e).concat(n)
return function(t){return r.map((function(n){return[t,n]}))}}function _f(t,n,e){var r=S(t,n-Cs,e).concat(n)
return function(t){return r.map((function(n){return[n,t]}))}}function vf(){var t,n,e,r,i,o,a,u,s,c,l,f,h=10,d=h,p=90,g=360,y=2.5
function _(){return{type:"MultiLineString",coordinates:v()}}function v(){return S(zs(r/p)*p,e,p).map(l).concat(S(zs(u/g)*g,a,g).map(f)).concat(S(zs(n/h)*h,t,h).filter((function(t){return Os(t%p)>Cs})).map(s)).concat(S(zs(o/d)*d,i,d).filter((function(t){return Os(t%g)>Cs})).map(c))}return _.lines=function(){return v().map((function(t){return{type:"LineString",coordinates:t}}))},_.outline=function(){return{type:"Polygon",coordinates:[l(r).concat(f(a).slice(1),l(e).reverse().slice(1),f(u).reverse().slice(1))]}},_.extent=function(t){return arguments.length?_.extentMajor(t).extentMinor(t):_.extentMinor()},_.extentMajor=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),u>a&&(t=u,u=a,a=t),_.precision(y)):[[r,u],[e,a]]},_.extentMinor=function(e){return arguments.length?(n=+e[0][0],t=+e[1][0],o=+e[0][1],i=+e[1][1],n>t&&(e=n,n=t,t=e),o>i&&(e=o,o=i,i=e),_.precision(y)):[[n,o],[t,i]]},_.step=function(t){return arguments.length?_.stepMajor(t).stepMinor(t):_.stepMinor()},_.stepMajor=function(t){return arguments.length?(p=+t[0],g=+t[1],_):[p,g]},_.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],_):[h,d]},_.precision=function(h){return arguments.length?(y=+h,s=yf(o,i,90),c=_f(n,t,y),l=yf(u,a,90),f=_f(r,e,y),_):y},_.extentMajor([[-180,-89.999999],[180,89.999999]]).extentMinor([[-180,-80.000001],[180,80.000001]])}function mf(){return vf()()}function xf(t,n){var e=t[0]*Vs,r=t[1]*Vs,i=n[0]*Vs,o=n[1]*Vs,a=Is(r),u=Bs(r),s=Is(o),c=Bs(o),l=a*Is(e),f=a*Bs(e),h=s*Is(i),d=s*Bs(i),p=2*Ws(Xs(Qs(o-r)+a*s*Qs(i-e))),g=Bs(p),y=p?function(t){var n=Bs(t*=p)/g,e=Bs(p-t)/g,r=e*l+n*h,i=e*f+n*d,o=e*u+n*c
return[Ds(i,r)*Rs,Ds(o,Xs(r*r+i*i))*Rs]}:function(){return[e*Rs,r*Rs]}
return y.distance=p,y}function bf(t){return t}var wf,Sf,Af,Mf,Tf=Ss(),Cf=Ss(),Pf={point:$s,lineStart:$s,lineEnd:$s,polygonStart:function(){Pf.lineStart=Ef,Pf.lineEnd=Lf},polygonEnd:function(){Pf.lineStart=Pf.lineEnd=Pf.point=$s,Tf.add(Os(Cf)),Cf.reset()},result:function(){var t=Tf/2
return Tf.reset(),t}}
function Ef(){Pf.point=kf}function kf(t,n){Pf.point=Nf,wf=Af=t,Sf=Mf=n}function Nf(t,n){Cf.add(Mf*t-Af*n),Af=t,Mf=n}function Lf(){Nf(wf,Sf)}const Rf=Pf
var Vf=1/0,Of=Vf,Gf=-Vf,Df=Gf,If={point:function(t,n){t<Vf&&(Vf=t),t>Gf&&(Gf=t),n<Of&&(Of=n),n>Df&&(Df=n)},lineStart:$s,lineEnd:$s,polygonStart:$s,polygonEnd:$s,result:function(){var t=[[Vf,Of],[Gf,Df]]
return Gf=Df=-(Of=Vf=1/0),t}}
const zf=If
var Ff,Yf,Uf,Bf,Hf=0,Xf=0,jf=0,qf=0,Wf=0,Qf=0,$f=0,Zf=0,Kf=0,Jf={point:th,lineStart:nh,lineEnd:ih,polygonStart:function(){Jf.lineStart=oh,Jf.lineEnd=ah},polygonEnd:function(){Jf.point=th,Jf.lineStart=nh,Jf.lineEnd=ih},result:function(){var t=Kf?[$f/Kf,Zf/Kf]:Qf?[qf/Qf,Wf/Qf]:jf?[Hf/jf,Xf/jf]:[NaN,NaN]
return Hf=Xf=jf=qf=Wf=Qf=$f=Zf=Kf=0,t}}
function th(t,n){Hf+=t,Xf+=n,++jf}function nh(){Jf.point=eh}function eh(t,n){Jf.point=rh,th(Uf=t,Bf=n)}function rh(t,n){var e=t-Uf,r=n-Bf,i=Xs(e*e+r*r)
qf+=i*(Uf+t)/2,Wf+=i*(Bf+n)/2,Qf+=i,th(Uf=t,Bf=n)}function ih(){Jf.point=th}function oh(){Jf.point=uh}function ah(){sh(Ff,Yf)}function uh(t,n){Jf.point=sh,th(Ff=Uf=t,Yf=Bf=n)}function sh(t,n){var e=t-Uf,r=n-Bf,i=Xs(e*e+r*r)
qf+=i*(Uf+t)/2,Wf+=i*(Bf+n)/2,Qf+=i,$f+=(i=Bf*t-Uf*n)*(Uf+t),Zf+=i*(Bf+n),Kf+=3*i,th(Uf=t,Bf=n)}const ch=Jf
function lh(t){this._context=t}lh.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1
break
case 1:this._context.lineTo(t,n)
break
default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,Ls)}},result:$s}
var fh,hh,dh,ph,gh,yh=Ss(),_h={point:$s,lineStart:function(){_h.point=vh},lineEnd:function(){fh&&mh(hh,dh),_h.point=$s},polygonStart:function(){fh=!0},polygonEnd:function(){fh=null},result:function(){var t=+yh
return yh.reset(),t}}
function vh(t,n){_h.point=mh,hh=ph=t,dh=gh=n}function mh(t,n){ph-=t,gh-=n,yh.add(Xs(ph*ph+gh*gh)),ph=t,gh=n}const xh=_h
function bh(){this._string=[]}function wh(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Sh(t,n){var e,r,i=4.5
function o(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),ec(t,e(r))),r.result()}return o.area=function(t){return ec(t,e(Rf)),Rf.result()},o.measure=function(t){return ec(t,e(xh)),xh.result()},o.bounds=function(t){return ec(t,e(zf)),zf.result()},o.centroid=function(t){return ec(t,e(ch)),ch.result()},o.projection=function(n){return arguments.length?(e=null==n?(t=null,bf):(t=n).stream,o):t},o.context=function(t){return arguments.length?(r=null==t?(n=null,new bh):new lh(n=t),"function"!=typeof i&&r.pointRadius(i),o):n},o.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i},o.projection(t).context(n)}function Ah(t){return{stream:Mh(t)}}function Mh(t){return function(n){var e=new Th
for(var r in t)e[r]=t[r]
return e.stream=n,e}}function Th(){}function Ch(t,n,e){var r=t.clipExtent&&t.clipExtent()
return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),ec(e,t.stream(zf)),n(zf.result()),null!=r&&t.clipExtent(r),t}function Ph(t,n,e){return Ch(t,(function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2
t.scale(150*o).translate([a,u])}),e)}function Eh(t,n,e){return Ph(t,[[0,0],n],e)}function kh(t,n,e){return Ch(t,(function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1]
t.scale(150*i).translate([o,a])}),e)}function Nh(t,n,e){return Ch(t,(function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2
t.scale(150*i).translate([o,a])}),e)}bh.prototype={_radius:4.5,_circle:wh(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1
break
case 1:this._string.push("L",t,",",n)
break
default:null==this._circle&&(this._circle=wh(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("")
return this._string=[],t}return null}},Th.prototype={constructor:Th,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}}
var Lh=Is(30*Vs)
function Rh(t,n){return+n?function(t,n){function e(r,i,o,a,u,s,c,l,f,h,d,p,g,y){var _=c-r,v=l-i,m=_*_+v*v
if(m>4*n&&g--){var x=a+h,b=u+d,w=s+p,S=Xs(x*x+b*b+w*w),A=Ws(w/=S),M=Os(Os(w)-1)<Cs||Os(o-f)<Cs?(o+f)/2:Ds(b,x),T=t(M,A),C=T[0],P=T[1],E=C-r,k=P-i,N=v*E-_*k;(N*N/m>n||Os((_*E+v*k)/m-.5)>.3||a*h+u*d+s*p<Lh)&&(e(r,i,o,a,u,s,C,P,M,x/=S,b/=S,w,g,y),y.point(C,P),e(C,P,M,x,b,w,c,l,f,h,d,p,g,y))}}return function(n){var r,i,o,a,u,s,c,l,f,h,d,p,g={point:y,lineStart:_,lineEnd:m,polygonStart:function(){n.polygonStart(),g.lineStart=x},polygonEnd:function(){n.polygonEnd(),g.lineStart=_}}
function y(e,r){e=t(e,r),n.point(e[0],e[1])}function _(){l=NaN,g.point=v,n.lineStart()}function v(r,i){var o=_c([r,i]),a=t(r,i)
e(l,f,c,h,d,p,l=a[0],f=a[1],c=r,h=o[0],d=o[1],p=o[2],16,n),n.point(l,f)}function m(){g.point=y,n.lineEnd()}function x(){_(),g.point=b,g.lineEnd=w}function b(t,n){v(r=t,n),i=l,o=f,a=h,u=d,s=p,g.point=v}function w(){e(l,f,c,h,d,p,i,o,r,a,u,s,16,n),g.lineEnd=m,m()}return g}}(t,n):function(t){return Mh({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var Vh=Mh({point:function(t,n){this.stream.point(t*Vs,n*Vs)}})
function Oh(t,n,e,r,i){function o(o,a){return[n+t*(o*=r),e-t*(a*=i)]}return o.invert=function(o,a){return[(o-n)/t*r,(e-a)/t*i]},o}function Gh(t,n,e,r,i,o){var a=Is(o),u=Bs(o),s=a*t,c=u*t,l=a/t,f=u/t,h=(u*e-a*n)/t,d=(u*n+a*e)/t
function p(t,o){return[s*(t*=r)-c*(o*=i)+n,e-c*t-s*o]}return p.invert=function(t,n){return[r*(l*t-f*n+h),i*(d-f*t-l*n)]},p}function Dh(t){return Ih((function(){return t}))()}function Ih(t){var n,e,r,i,o,a,u,s,c,l,f=150,h=480,d=250,p=0,g=0,y=0,_=0,v=0,m=0,x=1,b=1,w=null,S=Ul,A=null,M=bf,T=.5
function C(t){return s(t[0]*Vs,t[1]*Vs)}function P(t){return(t=s.invert(t[0],t[1]))&&[t[0]*Rs,t[1]*Rs]}function E(){var t=Gh(f,0,0,x,b,m).apply(null,n(p,g)),r=(m?Gh:Oh)(f,h-t[0],d-t[1],x,b,m)
return e=Sl(y,_,v),u=bl(n,r),s=bl(e,u),a=Rh(u,T),k()}function k(){return c=l=null,C}return C.stream=function(t){return c&&l===t?c:c=Vh(function(t){return Mh({point:function(n,e){var r=t(n,e)
return this.stream.point(r[0],r[1])}})}(e)(S(a(M(l=t)))))},C.preclip=function(t){return arguments.length?(S=t,w=void 0,k()):S},C.postclip=function(t){return arguments.length?(M=t,A=r=i=o=null,k()):M},C.clipAngle=function(t){return arguments.length?(S=+t?Bl(w=t*Vs):(w=null,Ul),k()):w*Rs},C.clipExtent=function(t){return arguments.length?(M=null==t?(A=r=i=o=null,bf):jl(A=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),k()):null==A?null:[[A,r],[i,o]]},C.scale=function(t){return arguments.length?(f=+t,E()):f},C.translate=function(t){return arguments.length?(h=+t[0],d=+t[1],E()):[h,d]},C.center=function(t){return arguments.length?(p=t[0]%360*Vs,g=t[1]%360*Vs,E()):[p*Rs,g*Rs]},C.rotate=function(t){return arguments.length?(y=t[0]%360*Vs,_=t[1]%360*Vs,v=t.length>2?t[2]%360*Vs:0,E()):[y*Rs,_*Rs,v*Rs]},C.angle=function(t){return arguments.length?(m=t%360*Vs,E()):m*Rs},C.reflectX=function(t){return arguments.length?(x=t?-1:1,E()):x<0},C.reflectY=function(t){return arguments.length?(b=t?-1:1,E()):b<0},C.precision=function(t){return arguments.length?(a=Rh(u,T=t*t),k()):Xs(T)},C.fitExtent=function(t,n){return Ph(C,t,n)},C.fitSize=function(t,n){return Eh(C,t,n)},C.fitWidth=function(t,n){return kh(C,t,n)},C.fitHeight=function(t,n){return Nh(C,t,n)},function(){return n=t.apply(this,arguments),C.invert=n.invert&&P,E()}}function zh(t){var n=0,e=Es/3,r=Ih(t),i=r(n,e)
return i.parallels=function(t){return arguments.length?r(n=t[0]*Vs,e=t[1]*Vs):[n*Rs,e*Rs]},i}function Fh(t,n){var e=Bs(t),r=(e+Bs(n))/2
if(Os(r)<Cs)return function(t){var n=Is(t)
function e(t,e){return[t*n,Bs(e)/n]}return e.invert=function(t,e){return[t/n,Ws(e*n)]},e}(t)
var i=1+e*(2*r-e),o=Xs(i)/r
function a(t,n){var e=Xs(i-2*r*Bs(n))/r
return[e*Bs(t*=r),o-e*Is(t)]}return a.invert=function(t,n){var e=o-n,a=Ds(t,Os(e))*Hs(e)
return e*r<0&&(a-=Es*Hs(t)*Hs(e)),[a/r,Ws((i-(t*t+e*e)*r*r)/(2*r))]},a}function Yh(){return zh(Fh).scale(155.424).center([0,33.6442])}function Uh(){return Yh().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Bh(){var t,n,e,r,i,o,a=Uh(),u=Yh().rotate([154,0]).center([-2,58.5]).parallels([55,65]),s=Yh().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(t,n){o=[t,n]}}
function l(t){var n=t[0],a=t[1]
return o=null,e.point(n,a),o||(r.point(n,a),o)||(i.point(n,a),o)}function f(){return t=n=null,l}return l.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n
return(i>=.12&&i<.234&&r>=-.425&&r<-.214?u:i>=.166&&i<.234&&r>=-.214&&r<-.115?s:a).invert(t)},l.stream=function(e){return t&&n===e?t:(r=[a.stream(n=e),u.stream(e),s.stream(e)],i=r.length,t={point:function(t,n){for(var e=-1;++e<i;)r[e].point(t,n)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}})
var r,i},l.precision=function(t){return arguments.length?(a.precision(t),u.precision(t),s.precision(t),f()):a.precision()},l.scale=function(t){return arguments.length?(a.scale(t),u.scale(.35*t),s.scale(t),l.translate(a.translate())):a.scale()},l.translate=function(t){if(!arguments.length)return a.translate()
var n=a.scale(),o=+t[0],l=+t[1]
return e=a.translate(t).clipExtent([[o-.455*n,l-.238*n],[o+.455*n,l+.238*n]]).stream(c),r=u.translate([o-.307*n,l+.201*n]).clipExtent([[o-.425*n+Cs,l+.12*n+Cs],[o-.214*n-Cs,l+.234*n-Cs]]).stream(c),i=s.translate([o-.205*n,l+.212*n]).clipExtent([[o-.214*n+Cs,l+.166*n+Cs],[o-.115*n-Cs,l+.234*n-Cs]]).stream(c),f()},l.fitExtent=function(t,n){return Ph(l,t,n)},l.fitSize=function(t,n){return Eh(l,t,n)},l.fitWidth=function(t,n){return kh(l,t,n)},l.fitHeight=function(t,n){return Nh(l,t,n)},l.scale(1070)}function Hh(t){return function(n,e){var r=Is(n),i=Is(e),o=t(r*i)
return[o*i*Bs(n),o*Bs(e)]}}function Xh(t){return function(n,e){var r=Xs(n*n+e*e),i=t(r),o=Bs(i),a=Is(i)
return[Ds(n*o,r*a),Ws(r&&e*o/r)]}}var jh=Hh((function(t){return Xs(2/(1+t))}))
function qh(){return Dh(jh).scale(124.75).clipAngle(179.999)}jh.invert=Xh((function(t){return 2*Ws(t/2)}))
var Wh=Hh((function(t){return(t=qs(t))&&t/Bs(t)}))
function Qh(){return Dh(Wh).scale(79.4188).clipAngle(179.999)}function $h(t,n){return[t,Ys(js((ks+n)/2))]}function Zh(){return Kh($h).scale(961/Ls)}function Kh(t){var n,e,r,i=Dh(t),o=i.center,a=i.scale,u=i.translate,s=i.clipExtent,c=null
function l(){var o=Es*a(),u=i(Cl(i.rotate()).invert([0,0]))
return s(null==c?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===$h?[[Math.max(u[0]-o,c),n],[Math.min(u[0]+o,e),r]]:[[c,Math.max(u[1]-o,n)],[e,Math.min(u[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),l()):a()},i.translate=function(t){return arguments.length?(u(t),l()):u()},i.center=function(t){return arguments.length?(o(t),l()):o()},i.clipExtent=function(t){return arguments.length?(null==t?c=n=e=r=null:(c=+t[0][0],n=+t[0][1],e=+t[1][0],r=+t[1][1]),l()):null==c?null:[[c,n],[e,r]]},l()}function Jh(t){return js((ks+t)/2)}function td(t,n){var e=Is(t),r=t===n?Bs(t):Ys(e/Is(n))/Ys(Jh(n)/Jh(t)),i=e*Us(Jh(t),r)/r
if(!r)return $h
function o(t,n){i>0?n<-ks+Cs&&(n=-ks+Cs):n>ks-Cs&&(n=ks-Cs)
var e=i/Us(Jh(n),r)
return[e*Bs(r*t),i-e*Is(r*t)]}return o.invert=function(t,n){var e=i-n,o=Hs(r)*Xs(t*t+e*e),a=Ds(t,Os(e))*Hs(e)
return e*r<0&&(a-=Es*Hs(t)*Hs(e)),[a/r,2*Gs(Us(i/o,1/r))-ks]},o}function nd(){return zh(td).scale(109.5).parallels([30,30])}function ed(t,n){return[t,n]}function rd(){return Dh(ed).scale(152.63)}function id(t,n){var e=Is(t),r=t===n?Bs(t):(e-Is(n))/(n-t),i=e/r+t
if(Os(r)<Cs)return ed
function o(t,n){var e=i-n,o=r*t
return[e*Bs(o),i-e*Is(o)]}return o.invert=function(t,n){var e=i-n,o=Ds(t,Os(e))*Hs(e)
return e*r<0&&(o-=Es*Hs(t)*Hs(e)),[o/r,i-Hs(r)*Xs(t*t+e*e)]},o}function od(){return zh(id).scale(131.154).center([0,13.9389])}Wh.invert=Xh((function(t){return t})),$h.invert=function(t,n){return[t,2*Gs(Fs(n))-ks]},ed.invert=ed
var ad=1.340264,ud=-.081106,sd=893e-6,cd=.003796,ld=Xs(3)/2
function fd(t,n){var e=Ws(ld*Bs(n)),r=e*e,i=r*r*r
return[t*Is(e)/(ld*(ad+3*ud*r+i*(7*sd+9*cd*r))),e*(ad+ud*r+i*(sd+cd*r))]}function hd(){return Dh(fd).scale(177.158)}function dd(t,n){var e=Is(n),r=Is(t)*e
return[e*Bs(t)/r,Bs(n)/r]}function pd(){return Dh(dd).scale(144.049).clipAngle(60)}function gd(){var t,n,e,r,i,o,a,u=1,s=0,c=0,l=1,f=1,h=0,d=null,p=1,g=1,y=Mh({point:function(t,n){var e=m([t,n])
this.stream.point(e[0],e[1])}}),_=bf
function v(){return p=u*l,g=u*f,o=a=null,m}function m(e){var r=e[0]*p,i=e[1]*g
if(h){var o=i*t-r*n
r=r*t+i*n,i=o}return[r+s,i+c]}return m.invert=function(e){var r=e[0]-s,i=e[1]-c
if(h){var o=i*t+r*n
r=r*t-i*n,i=o}return[r/p,i/g]},m.stream=function(t){return o&&a===t?o:o=y(_(a=t))},m.postclip=function(t){return arguments.length?(_=t,d=e=r=i=null,v()):_},m.clipExtent=function(t){return arguments.length?(_=null==t?(d=e=r=i=null,bf):jl(d=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),v()):null==d?null:[[d,e],[r,i]]},m.scale=function(t){return arguments.length?(u=+t,v()):u},m.translate=function(t){return arguments.length?(s=+t[0],c=+t[1],v()):[s,c]},m.angle=function(e){return arguments.length?(n=Bs(h=e%360*Vs),t=Is(h),v()):h*Rs},m.reflectX=function(t){return arguments.length?(l=t?-1:1,v()):l<0},m.reflectY=function(t){return arguments.length?(f=t?-1:1,v()):f<0},m.fitExtent=function(t,n){return Ph(m,t,n)},m.fitSize=function(t,n){return Eh(m,t,n)},m.fitWidth=function(t,n){return kh(m,t,n)},m.fitHeight=function(t,n){return Nh(m,t,n)},m}function yd(t,n){var e=n*n,r=e*e
return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function _d(){return Dh(yd).scale(175.295)}function vd(t,n){return[Is(n)*Bs(t),Bs(n)]}function md(){return Dh(vd).scale(249.5).clipAngle(90.000001)}function xd(t,n){var e=Is(n),r=1+Is(t)*e
return[e*Bs(t)/r,Bs(n)/r]}function bd(){return Dh(xd).scale(250).clipAngle(142)}function wd(t,n){return[Ys(js((ks+n)/2)),-t]}function Sd(){var t=Kh(wd),n=t.center,e=t.rotate
return t.center=function(t){return arguments.length?n([-t[1],t[0]]):[(t=n())[1],-t[0]]},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):[(t=e())[0],t[1],t[2]-90]},e([0,0,90]).scale(159.155)}function Ad(t,n){return t.parent===n.parent?1:2}function Md(t,n){return t+n.x}function Td(t,n){return Math.max(t,n.y)}function Cd(){var t=Ad,n=1,e=1,r=!1
function i(i){var o,a=0
i.eachAfter((function(n){var e=n.children
e?(n.x=function(t){return t.reduce(Md,0)/t.length}(e),n.y=function(t){return 1+t.reduce(Td,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)}))
var u=function(t){for(var n;n=t.children;)t=n[0]
return t}(i),s=function(t){for(var n;n=t.children;)t=n[n.length-1]
return t}(i),c=u.x-t(u,s)/2,l=s.x+t(s,u)/2
return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-c)/(l-c)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i}function Pd(t){var n=0,e=t.children,r=e&&e.length
if(r)for(;--r>=0;)n+=e[r].value
else n=1
t.value=n}function Ed(t,n){var e,r,i,o,a,u=new Rd(t),s=+t.value&&(u.value=t.value),c=[u]
for(null==n&&(n=kd);e=c.pop();)if(s&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)c.push(r=e.children[o]=new Rd(i[o])),r.parent=e,r.depth=e.depth+1
return u.eachBefore(Ld)}function kd(t){return t.children}function Nd(t){t.data=t.data.data}function Ld(t){var n=0
do{t.height=n}while((t=t.parent)&&t.height<++n)}function Rd(t){this.data=t,this.depth=this.height=0,this.parent=null}fd.invert=function(t,n){for(var e,r=n,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=e=(r*(ad+ud*i+o*(sd+cd*i))-n)/(ad+3*ud*i+o*(7*sd+9*cd*i)))*r)*i*i,!(Os(e)<Ps));++a);return[ld*t*(ad+3*ud*i+o*(7*sd+9*cd*i))/Is(r),Ws(Bs(r)/ld)]},dd.invert=Xh(Gs),yd.invert=function(t,n){var e,r=n,i=25
do{var o=r*r,a=o*o
r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(Os(e)>Cs&&--i>0)
return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},vd.invert=Xh(Ws),xd.invert=Xh((function(t){return 2*Gs(t)})),wd.invert=function(t,n){return[-n,2*Gs(Fs(t))-ks]},Rd.prototype=Ed.prototype={constructor:Rd,count:function(){return this.eachAfter(Pd)},each:function(t){var n,e,r,i,o=this,a=[o]
do{for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length)
return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e])
for(;i=a.pop();)t(i)
return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e])
return this},sum:function(t){return this.eachAfter((function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value
n.value=e}))},sort:function(t){return this.eachBefore((function(n){n.children&&n.children.sort(t)}))},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t
var e=t.ancestors(),r=n.ancestors(),i=null
for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop()
return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n)
for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent
return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t)
return n},descendants:function(){var t=[]
return this.each((function(n){t.push(n)})),t},leaves:function(){var t=[]
return this.eachBefore((function(n){n.children||t.push(n)})),t},links:function(){var t=this,n=[]
return t.each((function(e){e!==t&&n.push({source:e.parent,target:e})})),n},copy:function(){return Ed(this).eachBefore(Nd)}}
var Vd=Array.prototype.slice
function Od(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n
return t}(Vd.call(t))).length,o=[];r<i;)n=t[r],e&&Id(e,n)?++r:(e=Fd(o=Gd(o,n)),r=0)
return e}function Gd(t,n){var e,r
if(zd(n,t))return[n]
for(e=0;e<t.length;++e)if(Dd(n,t[e])&&zd(Yd(t[e],n),t))return[t[e],n]
for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(Dd(Yd(t[e],t[r]),n)&&Dd(Yd(t[e],n),t[r])&&Dd(Yd(t[r],n),t[e])&&zd(Ud(t[e],t[r],n),t))return[t[e],t[r],n]
throw new Error}function Dd(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y
return e<0||e*e<r*r+i*i}function Id(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y
return e>0&&e*e>r*r+i*i}function zd(t,n){for(var e=0;e<n.length;++e)if(!Id(t,n[e]))return!1
return!0}function Fd(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0])
case 2:return Yd(t[0],t[1])
case 3:return Ud(t[0],t[1],t[2])}}function Yd(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,s=o-e,c=a-r,l=u-i,f=Math.sqrt(s*s+c*c)
return{x:(e+o+s/f*l)/2,y:(r+a+c/f*l)/2,r:(f+i+u)/2}}function Ud(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,s=n.r,c=e.x,l=e.y,f=e.r,h=r-a,d=r-c,p=i-u,g=i-l,y=s-o,_=f-o,v=r*r+i*i-o*o,m=v-a*a-u*u+s*s,x=v-c*c-l*l+f*f,b=d*p-h*g,w=(p*x-g*m)/(2*b)-r,S=(g*y-p*_)/b,A=(d*m-h*x)/(2*b)-i,M=(h*_-d*y)/b,T=S*S+M*M-1,C=2*(o+w*S+A*M),P=w*w+A*A-o*o,E=-(T?(C+Math.sqrt(C*C-4*T*P))/(2*T):P/C)
return{x:r+w+S*E,y:i+A+M*E,r:E}}function Bd(t,n,e){var r,i,o,a,u=t.x-n.x,s=t.y-n.y,c=u*u+s*s
c?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(c+a-i)/(2*c),o=Math.sqrt(Math.max(0,a/c-r*r)),e.x=t.x-r*u-o*s,e.y=t.y-r*s+o*u):(r=(c+i-a)/(2*c),o=Math.sqrt(Math.max(0,i/c-r*r)),e.x=n.x+r*u-o*s,e.y=n.y+r*s+o*u)):(e.x=n.x+e.r,e.y=n.y)}function Hd(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y
return e>0&&e*e>r*r+i*i}function Xd(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r
return i*i+o*o}function jd(t){this._=t,this.next=null,this.previous=null}function qd(t){if(!(i=t.length))return 0
var n,e,r,i,o,a,u,s,c,l,f
if((n=t[0]).x=0,n.y=0,!(i>1))return n.r
if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r
Bd(e,n,r=t[2]),n=new jd(n),e=new jd(e),r=new jd(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n
t:for(u=3;u<i;++u){Bd(n._,e._,r=t[u]),r=new jd(r),s=e.next,c=n.previous,l=e._.r,f=n._.r
do{if(l<=f){if(Hd(s._,r._)){e=s,n.next=e,e.previous=n,--u
continue t}l+=s._.r,s=s.next}else{if(Hd(c._,r._)){(n=c).next=e,e.previous=n,--u
continue t}f+=c._.r,c=c.previous}}while(s!==c.next)
for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=Xd(n);(r=r.next)!==e;)(a=Xd(r))<o&&(n=r,o=a)
e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._)
for(r=Od(n),u=0;u<i;++u)(n=t[u]).x-=r.x,n.y-=r.y
return r.r}function Wd(t){return qd(t),t}function Qd(t){return null==t?null:$d(t)}function $d(t){if("function"!=typeof t)throw new Error
return t}function Zd(){return 0}function Kd(t){return function(){return t}}function Jd(t){return Math.sqrt(t.value)}function tp(){var t=null,n=1,e=1,r=Zd
function i(i){return i.x=n/2,i.y=e/2,t?i.eachBefore(np(t)).eachAfter(ep(r,.5)).eachBefore(rp(1)):i.eachBefore(np(Jd)).eachAfter(ep(Zd,1)).eachAfter(ep(r,i.r/Math.min(n,e))).eachBefore(rp(Math.min(n,e)/(2*i.r))),i}return i.radius=function(n){return arguments.length?(t=Qd(n),i):t},i.size=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:Kd(+t),i):r},i}function np(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function ep(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0
if(u)for(i=0;i<a;++i)r[i].r+=u
if(o=qd(r),u)for(i=0;i<a;++i)r[i].r-=u
e.r=o+u}}}function rp(t){return function(n){var e=n.parent
n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function ip(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function op(t,n,e,r,i){for(var o,a=t.children,u=-1,s=a.length,c=t.value&&(r-n)/t.value;++u<s;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*c}function ap(){var t=1,n=1,e=0,r=!1
function i(i){var o=i.height+1
return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&op(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n)
var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e
a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(ip),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i}var up={depth:-1},sp={}
function cp(t){return t.id}function lp(t){return t.parentId}function fp(){var t=cp,n=lp
function e(e){var r,i,o,a,u,s,c,l=e.length,f=new Array(l),h={}
for(i=0;i<l;++i)r=e[i],u=f[i]=new Rd(r),null!=(s=t(r,i,e))&&(s+="")&&(h[c="$"+(u.id=s)]=c in h?sp:u)
for(i=0;i<l;++i)if(u=f[i],null!=(s=n(e[i],i,e))&&(s+="")){if(!(a=h["$"+s]))throw new Error("missing: "+s)
if(a===sp)throw new Error("ambiguous: "+s)
a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots")
o=u}if(!o)throw new Error("no root")
if(o.parent=up,o.eachBefore((function(t){t.depth=t.parent.depth+1,--l})).eachBefore(Ld),o.parent=null,l>0)throw new Error("cycle")
return o}return e.id=function(n){return arguments.length?(t=$d(n),e):t},e.parentId=function(t){return arguments.length?(n=$d(t),e):n},e}function hp(t,n){return t.parent===n.parent?1:2}function dp(t){var n=t.children
return n?n[0]:t.t}function pp(t){var n=t.children
return n?n[n.length-1]:t.t}function gp(t,n,e){var r=e/(n.i-t.i)
n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function yp(t,n,e){return t.a.parent===n.parent?t.a:e}function _p(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function vp(){var t=hp,n=1,e=1,r=null
function i(i){var s=function(t){for(var n,e,r,i,o,a=new _p(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new _p(r[i],i)),e.parent=n
return(a.parent=new _p(null,0)).children=[a],a}(i)
if(s.eachAfter(o),s.parent.m=-s.z,s.eachBefore(a),r)i.eachBefore(u)
else{var c=i,l=i,f=i
i.eachBefore((function(t){t.x<c.x&&(c=t),t.x>l.x&&(l=t),t.depth>f.depth&&(f=t)}))
var h=c===l?1:t(c,l)/2,d=h-c.x,p=n/(l.x+h+d),g=e/(f.depth||1)
i.eachBefore((function(t){t.x=(t.x+d)*p,t.y=t.depth*g}))}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null
if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n)
var o=(e[0].z+e[e.length-1].z)/2
i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._))
n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,s=o.parent.children[0],c=o.m,l=a.m,f=u.m,h=s.m;u=pp(u),o=dp(o),u&&o;)s=dp(s),(a=pp(a)).a=n,(i=u.z+f-o.z-c+t(u._,o._))>0&&(gp(yp(u,n,r),n,i),c+=i,l+=i),f+=u.m,c+=o.m,h+=s.m,l+=a.m
u&&!pp(a)&&(a.t=u,a.m+=f-l),o&&!dp(s)&&(s.t=o,s.m+=c-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i}function mp(t,n,e,r,i){for(var o,a=t.children,u=-1,s=a.length,c=t.value&&(i-e)/t.value;++u<s;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*c}_p.prototype=Object.create(Rd.prototype)
var xp=(1+Math.sqrt(5))/2
function bp(t,n,e,r,i,o){for(var a,u,s,c,l,f,h,d,p,g,y,_=[],v=n.children,m=0,x=0,b=v.length,w=n.value;m<b;){s=i-e,c=o-r
do{l=v[x++].value}while(!l&&x<b)
for(f=h=l,y=l*l*(g=Math.max(c/s,s/c)/(w*t)),p=Math.max(h/y,y/f);x<b;++x){if(l+=u=v[x].value,u<f&&(f=u),u>h&&(h=u),y=l*l*g,(d=Math.max(h/y,y/f))>p){l-=u
break}p=d}_.push(a={value:l,dice:s<c,children:v.slice(m,x)}),a.dice?op(a,e,r,i,w?r+=c*l/w:o):mp(a,e,r,w?e+=s*l/w:i,o),w-=l,m=x}return _}const wp=function t(n){function e(t,e,r,i,o){bp(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(xp)
function Sp(){var t=wp,n=!1,e=1,r=1,i=[0],o=Zd,a=Zd,u=Zd,s=Zd,c=Zd
function l(t){return t.x0=t.y0=0,t.x1=e,t.y1=r,t.eachBefore(f),i=[0],n&&t.eachBefore(ip),t}function f(n){var e=i[n.depth],r=n.x0+e,l=n.y0+e,f=n.x1-e,h=n.y1-e
f<r&&(r=f=(r+f)/2),h<l&&(l=h=(l+h)/2),n.x0=r,n.y0=l,n.x1=f,n.y1=h,n.children&&(e=i[n.depth+1]=o(n)/2,r+=c(n)-e,l+=a(n)-e,(f-=u(n)-e)<r&&(r=f=(r+f)/2),(h-=s(n)-e)<l&&(l=h=(l+h)/2),t(n,r,l,f,h))}return l.round=function(t){return arguments.length?(n=!!t,l):n},l.size=function(t){return arguments.length?(e=+t[0],r=+t[1],l):[e,r]},l.tile=function(n){return arguments.length?(t=$d(n),l):t},l.padding=function(t){return arguments.length?l.paddingInner(t).paddingOuter(t):l.paddingInner()},l.paddingInner=function(t){return arguments.length?(o="function"==typeof t?t:Kd(+t),l):o},l.paddingOuter=function(t){return arguments.length?l.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):l.paddingTop()},l.paddingTop=function(t){return arguments.length?(a="function"==typeof t?t:Kd(+t),l):a},l.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:Kd(+t),l):u},l.paddingBottom=function(t){return arguments.length?(s="function"==typeof t?t:Kd(+t),l):s},l.paddingLeft=function(t){return arguments.length?(c="function"==typeof t?t:Kd(+t),l):c},l}function Ap(t,n,e,r,i){var o,a,u=t.children,s=u.length,c=new Array(s+1)
for(c[0]=a=o=0;o<s;++o)c[o+1]=a+=u[o].value
!function t(n,e,r,i,o,a,s){if(n>=e-1){var l=u[n]
return l.x0=i,l.y0=o,l.x1=a,void(l.y1=s)}for(var f=c[n],h=r/2+f,d=n+1,p=e-1;d<p;){var g=d+p>>>1
c[g]<h?d=g+1:p=g}h-c[d-1]<c[d]-h&&n+1<d&&--d
var y=c[d]-f,_=r-y
if(a-i>s-o){var v=(i*_+a*y)/r
t(n,d,y,i,o,v,s),t(d,e,_,v,o,a,s)}else{var m=(o*_+s*y)/r
t(n,d,y,i,o,a,m),t(d,e,_,i,m,a,s)}}(0,s,t.value,n,e,r,i)}function Mp(t,n,e,r,i){(1&t.depth?mp:op)(t,n,e,r,i)}const Tp=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,s,c,l,f=-1,h=a.length,d=t.value;++f<h;){for(s=(u=a[f]).children,c=u.value=0,l=s.length;c<l;++c)u.value+=s[c].value
u.dice?op(u,e,r,i,r+=(o-r)*u.value/d):mp(u,e,r,e+=(i-e)*u.value/d,o),d-=u.value}else t._squarify=a=bp(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(xp)
function Cp(t){var n=t.length
return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function Pp(t,n){var e=de(+t,+n)
return function(t){var n=e(t)
return n-360*Math.floor(n/360)}}function Ep(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var kp=Math.SQRT2
function Np(t){return((t=Math.exp(t))+1/t)/2}function Lp(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],s=n[1],c=n[2],l=u-i,f=s-o,h=l*l+f*f
if(h<1e-12)r=Math.log(c/a)/kp,e=function(t){return[i+t*l,o+t*f,a*Math.exp(kp*t*r)]}
else{var d=Math.sqrt(h),p=(c*c-a*a+4*h)/(2*a*2*d),g=(c*c-a*a-4*h)/(2*c*2*d),y=Math.log(Math.sqrt(p*p+1)-p),_=Math.log(Math.sqrt(g*g+1)-g)
r=(_-y)/kp,e=function(t){var n,e=t*r,u=Np(y),s=a/(2*d)*(u*(n=kp*e+y,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(y))
return[i+s*l,o+s*f,a*u/Np(kp*e+y)]}}return e.duration=1e3*r,e}function Rp(t){return function(n,e){var r=t((n=oe(n)).h,(e=oe(e)).h),i=pe(n.s,e.s),o=pe(n.l,e.l),a=pe(n.opacity,e.opacity)
return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}const Vp=Rp(de)
var Op=Rp(pe)
function Gp(t,n){var e=pe((t=Mo(t)).l,(n=Mo(n)).l),r=pe(t.a,n.a),i=pe(t.b,n.b),o=pe(t.opacity,n.opacity)
return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}}function Dp(t){return function(n,e){var r=t((n=Ro(n)).h,(e=Ro(e)).h),i=pe(n.c,e.c),o=pe(n.l,e.l),a=pe(n.opacity,e.opacity)
return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}const Ip=Dp(de)
var zp=Dp(pe)
function Fp(t){return function n(e){function r(n,r){var i=t((n=Xo(n)).h,(r=Xo(r)).h),o=pe(n.s,r.s),a=pe(n.l,r.l),u=pe(n.opacity,r.opacity)
return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}const Yp=Fp(de)
var Up=Fp(pe)
function Bp(t,n){for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e])
return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)))
return o[n](t-n)}}function Hp(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1))
return e}function Xp(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1]
return o/2}function jp(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],s=0;++r<i;)n=u,u=t[r],s+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e
return[o/(s*=3),a/s]}function qp(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function Wp(t,n){return t[0]-n[0]||t[1]-n[1]}function Qp(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&qp(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r
e[r++]=i}return e.slice(0,r)}function $p(t){if((e=t.length)<3)return null
var n,e,r=new Array(e),i=new Array(e)
for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n]
for(r.sort(Wp),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]]
var o=Qp(r),a=Qp(i),u=a[0]===o[0],s=a[a.length-1]===o[o.length-1],c=[]
for(n=o.length-1;n>=0;--n)c.push(t[r[o[n]][2]])
for(n=+u;n<a.length-s;++n)c.push(t[r[a[n]][2]])
return c}function Zp(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],s=o[0],c=o[1],l=!1,f=0;f<i;++f)e=(o=t[f])[0],(r=o[1])>u!=c>u&&a<(s-e)*(u-r)/(c-r)+e&&(l=!l),s=e,c=r
return l}function Kp(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],s=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],s+=Math.sqrt(n*n+e*e)
return s}function Jp(){return Math.random()}const tg=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(Jp),ng=function t(n){function e(t,e){var r,i
return t=null==t?0:+t,e=null==e?1:+e,function(){var o
if(null!=r)o=r,r=null
else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1)
return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(Jp),eg=function t(n){function e(){var t=ng.source(n).apply(this,arguments)
return function(){return Math.exp(t())}}return e.source=t,e}(Jp),rg=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n()
return e}}return e.source=t,e}(Jp),ig=function t(n){function e(t){var e=rg.source(n)(t)
return function(){return e()/t}}return e.source=t,e}(Jp),og=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(Jp)
function ag(t,n){switch(arguments.length){case 0:break
case 1:this.range(t)
break
default:this.range(n).domain(t)}return this}function ug(t,n){switch(arguments.length){case 0:break
case 1:this.interpolator(t)
break
default:this.interpolator(n).domain(t)}return this}var sg=Array.prototype,cg=sg.map,lg=sg.slice,fg={name:"implicit"}
function hg(){var t=eo(),n=[],e=[],r=fg
function i(i){var o=i+"",a=t.get(o)
if(!a){if(r!==fg)return r
t.set(o,a=n.push(i))}return e[(a-1)%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice()
n=[],t=eo()
for(var r,o,a=-1,u=e.length;++a<u;)t.has(o=(r=e[a])+"")||t.set(o,n.push(r))
return i},i.range=function(t){return arguments.length?(e=lg.call(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return hg(n,e).unknown(r)},ag.apply(i,arguments),i}function dg(){var t,n,e=hg().unknown(void 0),r=e.domain,i=e.range,o=[0,1],a=!1,u=0,s=0,c=.5
function l(){var e=r().length,l=o[1]<o[0],f=o[l-0],h=o[1-l]
t=(h-f)/Math.max(1,e-u+2*s),a&&(t=Math.floor(t)),f+=(h-f-t*(e-u))*c,n=t*(1-u),a&&(f=Math.round(f),n=Math.round(n))
var d=S(e).map((function(n){return f+t*n}))
return i(l?d.reverse():d)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),l()):r()},e.range=function(t){return arguments.length?(o=[+t[0],+t[1]],l()):o.slice()},e.rangeRound=function(t){return o=[+t[0],+t[1]],a=!0,l()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(a=!!t,l()):a},e.padding=function(t){return arguments.length?(u=Math.min(1,s=+t),l()):u},e.paddingInner=function(t){return arguments.length?(u=Math.min(1,t),l()):u},e.paddingOuter=function(t){return arguments.length?(s=+t,l()):s},e.align=function(t){return arguments.length?(c=Math.max(0,Math.min(1,t)),l()):c},e.copy=function(){return dg(r(),o).round(a).paddingInner(u).paddingOuter(s).align(c)},ag.apply(l(),arguments)}function pg(t){var n=t.copy
return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return pg(n())},t}function gg(){return pg(dg.apply(null,arguments).paddingInner(1))}function yg(t){return+t}var _g=[0,1]
function vg(t){return t}function mg(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:(e=isNaN(n)?NaN:.5,function(){return e})
var e}function xg(t){var n,e=t[0],r=t[t.length-1]
return e>r&&(n=e,e=r,r=n),function(t){return Math.max(e,Math.min(r,t))}}function bg(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1]
return i<r?(r=mg(i,r),o=e(a,o)):(r=mg(r,i),o=e(o,a)),function(t){return o(r(t))}}function wg(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),o=new Array(r),a=-1
for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<r;)i[a]=mg(t[a],t[a+1]),o[a]=e(n[a],n[a+1])
return function(n){var e=c(t,n,1,r)-1
return o[e](i[e](n))}}function Sg(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function Ag(){var t,n,e,r,i,o,a=_g,u=_g,s=Ee,c=vg
function l(){return r=Math.min(a.length,u.length)>2?wg:bg,i=o=null,f}function f(n){return isNaN(n=+n)?e:(i||(i=r(a.map(t),u,s)))(t(c(n)))}return f.invert=function(e){return c(n((o||(o=r(u,a.map(t),Ae)))(e)))},f.domain=function(t){return arguments.length?(a=cg.call(t,yg),c===vg||(c=xg(a)),l()):a.slice()},f.range=function(t){return arguments.length?(u=lg.call(t),l()):u.slice()},f.rangeRound=function(t){return u=lg.call(t),s=Ep,l()},f.clamp=function(t){return arguments.length?(c=t?xg(a):vg,f):c!==vg},f.interpolate=function(t){return arguments.length?(s=t,l()):s},f.unknown=function(t){return arguments.length?(e=t,f):e},function(e,r){return t=e,n=r,l()}}function Mg(t,n){return Ag()(t,n)}function Tg(t,n,e,r){var i,o=E(t,n,e)
switch((r=ss(null==r?",f":r)).type){case"s":var a=Math.max(Math.abs(t),Math.abs(n))
return null!=r.precision||isNaN(i=bs(o,a))||(r.precision=i),gs(r,a)
case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=ws(o,Math.max(Math.abs(t),Math.abs(n))))||(r.precision=i-("e"===r.type))
break
case"f":case"%":null!=r.precision||isNaN(i=xs(o))||(r.precision=i-2*("%"===r.type))}return ps(r)}function Cg(t){var n=t.domain
return t.ticks=function(t){var e=n()
return C(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n()
return Tg(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10)
var r,i=n(),o=0,a=i.length-1,u=i[o],s=i[a]
return s<u&&(r=u,u=s,s=r,r=o,o=a,a=r),(r=P(u,s,e))>0?r=P(u=Math.floor(u/r)*r,s=Math.ceil(s/r)*r,e):r<0&&(r=P(u=Math.ceil(u*r)/r,s=Math.floor(s*r)/r,e)),r>0?(i[o]=Math.floor(u/r)*r,i[a]=Math.ceil(s/r)*r,n(i)):r<0&&(i[o]=Math.ceil(u*r)/r,i[a]=Math.floor(s*r)/r,n(i)),t},t}function Pg(){var t=Mg(vg,vg)
return t.copy=function(){return Sg(t,Pg())},ag.apply(t,arguments),Cg(t)}function Eg(t){var n
function e(t){return isNaN(t=+t)?n:t}return e.invert=e,e.domain=e.range=function(n){return arguments.length?(t=cg.call(n,yg),e):t.slice()},e.unknown=function(t){return arguments.length?(n=t,e):n},e.copy=function(){return Eg(t).unknown(n)},t=arguments.length?cg.call(t,yg):[0,1],Cg(e)}function kg(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i]
return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Ng(t){return Math.log(t)}function Lg(t){return Math.exp(t)}function Rg(t){return-Math.log(-t)}function Vg(t){return-Math.exp(-t)}function Og(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Gg(t){return function(n){return-t(-n)}}function Dg(t){var n,e,r=t(Ng,Lg),i=r.domain,o=10
function a(){return n=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(o),e=function(t){return 10===t?Og:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(o),i()[0]<0?(n=Gg(n),e=Gg(e),t(Rg,Vg)):t(Ng,Lg),r}return r.base=function(t){return arguments.length?(o=+t,a()):o},r.domain=function(t){return arguments.length?(i(t),a()):i()},r.ticks=function(t){var r,a=i(),u=a[0],s=a[a.length-1];(r=s<u)&&(h=u,u=s,s=h)
var c,l,f,h=n(u),d=n(s),p=null==t?10:+t,g=[]
if(!(o%1)&&d-h<p){if(h=Math.round(h)-1,d=Math.round(d)+1,u>0){for(;h<d;++h)for(l=1,c=e(h);l<o;++l)if(!((f=c*l)<u)){if(f>s)break
g.push(f)}}else for(;h<d;++h)for(l=o-1,c=e(h);l>=1;--l)if(!((f=c*l)<u)){if(f>s)break
g.push(f)}}else g=C(h,d,Math.min(d-h,p)).map(e)
return r?g.reverse():g},r.tickFormat=function(t,i){if(null==i&&(i=10===o?".0e":","),"function"!=typeof i&&(i=ps(i)),t===1/0)return i
null==t&&(t=10)
var a=Math.max(1,o*t/r.ticks().length)
return function(t){var r=t/e(Math.round(n(t)))
return r*o<o-.5&&(r*=o),r<=a?i(t):""}},r.nice=function(){return i(kg(i(),{floor:function(t){return e(Math.floor(n(t)))},ceil:function(t){return e(Math.ceil(n(t)))}}))},r}function Ig(){var t=Dg(Ag()).domain([1,10])
return t.copy=function(){return Sg(t,Ig()).base(t.base())},ag.apply(t,arguments),t}function zg(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function Fg(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function Yg(t){var n=1,e=t(zg(n),Fg(n))
return e.constant=function(e){return arguments.length?t(zg(n=+e),Fg(n)):n},Cg(e)}function Ug(){var t=Yg(Ag())
return t.copy=function(){return Sg(t,Ug()).constant(t.constant())},ag.apply(t,arguments)}function Bg(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function Hg(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function Xg(t){return t<0?-t*t:t*t}function jg(t){var n=t(vg,vg),e=1
function r(){return 1===e?t(vg,vg):.5===e?t(Hg,Xg):t(Bg(e),Bg(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,r()):e},Cg(n)}function qg(){var t=jg(Ag())
return t.copy=function(){return Sg(t,qg()).exponent(t.exponent())},ag.apply(t,arguments),t}function Wg(){return qg.apply(null,arguments).exponent(.5)}function Qg(){var t,n=[],e=[],r=[]
function o(){var t=0,i=Math.max(1,e.length)
for(r=new Array(i-1);++t<i;)r[t-1]=L(n,t/i)
return a}function a(n){return isNaN(n=+n)?t:e[c(r,n)]}return a.invertExtent=function(t){var i=e.indexOf(t)
return i<0?[NaN,NaN]:[i>0?r[i-1]:n[0],i<r.length?r[i]:n[n.length-1]]},a.domain=function(t){if(!arguments.length)return n.slice()
n=[]
for(var e,r=0,a=t.length;r<a;++r)null==(e=t[r])||isNaN(e=+e)||n.push(e)
return n.sort(i),o()},a.range=function(t){return arguments.length?(e=lg.call(t),o()):e.slice()},a.unknown=function(n){return arguments.length?(t=n,a):t},a.quantiles=function(){return r.slice()},a.copy=function(){return Qg().domain(n).range(e).unknown(t)},ag.apply(a,arguments)}function $g(){var t,n=0,e=1,r=1,i=[.5],o=[0,1]
function a(n){return n<=n?o[c(i,n,0,r)]:t}function u(){var t=-1
for(i=new Array(r);++t<r;)i[t]=((t+1)*e-(t-r)*n)/(r+1)
return a}return a.domain=function(t){return arguments.length?(n=+t[0],e=+t[1],u()):[n,e]},a.range=function(t){return arguments.length?(r=(o=lg.call(t)).length-1,u()):o.slice()},a.invertExtent=function(t){var a=o.indexOf(t)
return a<0?[NaN,NaN]:a<1?[n,i[0]]:a>=r?[i[r-1],e]:[i[a-1],i[a]]},a.unknown=function(n){return arguments.length?(t=n,a):a},a.thresholds=function(){return i.slice()},a.copy=function(){return $g().domain([n,e]).range(o).unknown(t)},ag.apply(Cg(a),arguments)}function Zg(){var t,n=[.5],e=[0,1],r=1
function i(i){return i<=i?e[c(n,i,0,r)]:t}return i.domain=function(t){return arguments.length?(n=lg.call(t),r=Math.min(n.length,e.length-1),i):n.slice()},i.range=function(t){return arguments.length?(e=lg.call(t),r=Math.min(n.length,e.length-1),i):e.slice()},i.invertExtent=function(t){var r=e.indexOf(t)
return[n[r-1],n[r]]},i.unknown=function(n){return arguments.length?(t=n,i):t},i.copy=function(){return Zg().domain(n).range(e).unknown(t)},ag.apply(i,arguments)}var Kg=new Date,Jg=new Date
function ty(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t)
return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[]
if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u
do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r)
return u},i.filter=function(e){return ty((function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););}))},e&&(i.count=function(n,r){return Kg.setTime(+n),Jg.setTime(+r),t(Kg),t(Jg),Math.floor(e(Kg,Jg))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var ny=ty((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}))
ny.every=function(t){return isFinite(t=Math.floor(t))&&t>0?ty((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null}
const ey=ny
var ry=ny.range,iy=ty((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()}))
const oy=iy
var ay=iy.range,uy=1e3,sy=6e4,cy=36e5,ly=864e5,fy=6048e5
function hy(t){return ty((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*sy)/fy}))}var dy=hy(0),py=hy(1),gy=hy(2),yy=hy(3),_y=hy(4),vy=hy(5),my=hy(6),xy=dy.range,by=py.range,wy=gy.range,Sy=yy.range,Ay=_y.range,My=vy.range,Ty=my.range,Cy=ty((function(t){t.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*sy)/ly}),(function(t){return t.getDate()-1}))
const Py=Cy
var Ey=Cy.range,ky=ty((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*uy-t.getMinutes()*sy)}),(function(t,n){t.setTime(+t+n*cy)}),(function(t,n){return(n-t)/cy}),(function(t){return t.getHours()}))
const Ny=ky
var Ly=ky.range,Ry=ty((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*uy)}),(function(t,n){t.setTime(+t+n*sy)}),(function(t,n){return(n-t)/sy}),(function(t){return t.getMinutes()}))
const Vy=Ry
var Oy=Ry.range,Gy=ty((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*uy)}),(function(t,n){return(n-t)/uy}),(function(t){return t.getUTCSeconds()}))
const Dy=Gy
var Iy=Gy.range,zy=ty((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}))
zy.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?ty((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):zy:null}
const Fy=zy
var Yy=zy.range
function Uy(t){return ty((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/fy}))}var By=Uy(0),Hy=Uy(1),Xy=Uy(2),jy=Uy(3),qy=Uy(4),Wy=Uy(5),Qy=Uy(6),$y=By.range,Zy=Hy.range,Ky=Xy.range,Jy=jy.range,t_=qy.range,n_=Wy.range,e_=Qy.range,r_=ty((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/ly}),(function(t){return t.getUTCDate()-1}))
const i_=r_
var o_=r_.range,a_=ty((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()}))
a_.every=function(t){return isFinite(t=Math.floor(t))&&t>0?ty((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null}
const u_=a_
var s_=a_.range
function c_(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L)
return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function l_(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L))
return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function f_(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}function h_(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,s=t.shortMonths,c=A_(i),l=M_(i),f=A_(o),h=M_(o),d=A_(a),p=M_(a),g=A_(u),y=M_(u),_=A_(s),v=M_(s),m={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return s[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:j_,e:j_,f:Z_,g:sv,G:lv,H:q_,I:W_,j:Q_,L:$_,m:K_,M:J_,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:Rv,s:Vv,S:tv,u:nv,U:ev,V:iv,w:ov,W:av,x:null,X:null,y:uv,Y:cv,Z:fv,"%":Lv},x={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return s[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:hv,e:hv,f:_v,g:Pv,G:kv,H:dv,I:pv,j:gv,L:yv,m:vv,M:mv,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:Rv,s:Vv,S:xv,u:bv,U:wv,V:Av,w:Mv,W:Tv,x:null,X:null,y:Cv,Y:Ev,Z:Nv,"%":Lv},b={a:function(t,n,e){var r=d.exec(n.slice(e))
return r?(t.w=p[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=f.exec(n.slice(e))
return r?(t.w=h[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=_.exec(n.slice(e))
return r?(t.m=v[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=g.exec(n.slice(e))
return r?(t.m=y[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,e,r){return A(t,n,e,r)},d:G_,e:G_,f:U_,g:L_,G:N_,H:I_,I:I_,j:D_,L:Y_,m:O_,M:z_,p:function(t,n,e){var r=c.exec(n.slice(e))
return r?(t.p=l[r[0].toLowerCase()],e+r[0].length):-1},q:V_,Q:H_,s:X_,S:F_,u:C_,U:P_,V:E_,w:T_,W:k_,x:function(t,n,r){return A(t,e,n,r)},X:function(t,n,e){return A(t,r,n,e)},y:L_,Y:N_,Z:R_,"%":B_}
function w(t,n){return function(e){var r,i,o,a=[],u=-1,s=0,c=t.length
for(e instanceof Date||(e=new Date(+e));++u<c;)37===t.charCodeAt(u)&&(a.push(t.slice(s,u)),null!=(i=v_[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),s=u+1)
return a.push(t.slice(s,u)),a.join("")}}function S(t,n){return function(e){var r,i,o=f_(1900,void 0,1)
if(A(o,t,e+="",0)!=e.length)return null
if("Q"in o)return new Date(o.Q)
if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0))
if(n&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null
"w"in o||(o.w=1),"Z"in o?(i=(r=l_(f_(o.y,0,1))).getUTCDay(),r=i>4||0===i?Hy.ceil(r):Hy(r),r=i_.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=c_(f_(o.y,0,1))).getDay(),r=i>4||0===i?py.ceil(r):py(r),r=Py.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?l_(f_(o.y,0,1)).getUTCDay():c_(f_(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7)
return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,l_(o)):c_(o)}}function A(t,n,e,r){for(var i,o,a=0,u=n.length,s=e.length;a<u;){if(r>=s)return-1
if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=b[i in v_?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),x.x=w(e,x),x.X=w(r,x),x.c=w(n,x),{format:function(t){var n=w(t+="",m)
return n.toString=function(){return t},n},parse:function(t){var n=S(t+="",!1)
return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",x)
return n.toString=function(){return t},n},utcParse:function(t){var n=S(t+="",!0)
return n.toString=function(){return t},n}}}var d_,p_,g_,y_,__,v_={"-":"",_:" ",0:"0"},m_=/^\s*\d+/,x_=/^%/,b_=/[\\^$*+?|[\]().{}]/g
function w_(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length
return r+(o<e?new Array(e-o+1).join(n)+i:i)}function S_(t){return t.replace(b_,"\\$&")}function A_(t){return new RegExp("^(?:"+t.map(S_).join("|")+")","i")}function M_(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e
return n}function T_(t,n,e){var r=m_.exec(n.slice(e,e+1))
return r?(t.w=+r[0],e+r[0].length):-1}function C_(t,n,e){var r=m_.exec(n.slice(e,e+1))
return r?(t.u=+r[0],e+r[0].length):-1}function P_(t,n,e){var r=m_.exec(n.slice(e,e+2))
return r?(t.U=+r[0],e+r[0].length):-1}function E_(t,n,e){var r=m_.exec(n.slice(e,e+2))
return r?(t.V=+r[0],e+r[0].length):-1}function k_(t,n,e){var r=m_.exec(n.slice(e,e+2))
return r?(t.W=+r[0],e+r[0].length):-1}function N_(t,n,e){var r=m_.exec(n.slice(e,e+4))
return r?(t.y=+r[0],e+r[0].length):-1}function L_(t,n,e){var r=m_.exec(n.slice(e,e+2))
return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function R_(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6))
return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function V_(t,n,e){var r=m_.exec(n.slice(e,e+1))
return r?(t.q=3*r[0]-3,e+r[0].length):-1}function O_(t,n,e){var r=m_.exec(n.slice(e,e+2))
return r?(t.m=r[0]-1,e+r[0].length):-1}function G_(t,n,e){var r=m_.exec(n.slice(e,e+2))
return r?(t.d=+r[0],e+r[0].length):-1}function D_(t,n,e){var r=m_.exec(n.slice(e,e+3))
return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function I_(t,n,e){var r=m_.exec(n.slice(e,e+2))
return r?(t.H=+r[0],e+r[0].length):-1}function z_(t,n,e){var r=m_.exec(n.slice(e,e+2))
return r?(t.M=+r[0],e+r[0].length):-1}function F_(t,n,e){var r=m_.exec(n.slice(e,e+2))
return r?(t.S=+r[0],e+r[0].length):-1}function Y_(t,n,e){var r=m_.exec(n.slice(e,e+3))
return r?(t.L=+r[0],e+r[0].length):-1}function U_(t,n,e){var r=m_.exec(n.slice(e,e+6))
return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function B_(t,n,e){var r=x_.exec(n.slice(e,e+1))
return r?e+r[0].length:-1}function H_(t,n,e){var r=m_.exec(n.slice(e))
return r?(t.Q=+r[0],e+r[0].length):-1}function X_(t,n,e){var r=m_.exec(n.slice(e))
return r?(t.s=+r[0],e+r[0].length):-1}function j_(t,n){return w_(t.getDate(),n,2)}function q_(t,n){return w_(t.getHours(),n,2)}function W_(t,n){return w_(t.getHours()%12||12,n,2)}function Q_(t,n){return w_(1+Py.count(ey(t),t),n,3)}function $_(t,n){return w_(t.getMilliseconds(),n,3)}function Z_(t,n){return $_(t,n)+"000"}function K_(t,n){return w_(t.getMonth()+1,n,2)}function J_(t,n){return w_(t.getMinutes(),n,2)}function tv(t,n){return w_(t.getSeconds(),n,2)}function nv(t){var n=t.getDay()
return 0===n?7:n}function ev(t,n){return w_(dy.count(ey(t)-1,t),n,2)}function rv(t){var n=t.getDay()
return n>=4||0===n?_y(t):_y.ceil(t)}function iv(t,n){return t=rv(t),w_(_y.count(ey(t),t)+(4===ey(t).getDay()),n,2)}function ov(t){return t.getDay()}function av(t,n){return w_(py.count(ey(t)-1,t),n,2)}function uv(t,n){return w_(t.getFullYear()%100,n,2)}function sv(t,n){return w_((t=rv(t)).getFullYear()%100,n,2)}function cv(t,n){return w_(t.getFullYear()%1e4,n,4)}function lv(t,n){var e=t.getDay()
return w_((t=e>=4||0===e?_y(t):_y.ceil(t)).getFullYear()%1e4,n,4)}function fv(t){var n=t.getTimezoneOffset()
return(n>0?"-":(n*=-1,"+"))+w_(n/60|0,"0",2)+w_(n%60,"0",2)}function hv(t,n){return w_(t.getUTCDate(),n,2)}function dv(t,n){return w_(t.getUTCHours(),n,2)}function pv(t,n){return w_(t.getUTCHours()%12||12,n,2)}function gv(t,n){return w_(1+i_.count(u_(t),t),n,3)}function yv(t,n){return w_(t.getUTCMilliseconds(),n,3)}function _v(t,n){return yv(t,n)+"000"}function vv(t,n){return w_(t.getUTCMonth()+1,n,2)}function mv(t,n){return w_(t.getUTCMinutes(),n,2)}function xv(t,n){return w_(t.getUTCSeconds(),n,2)}function bv(t){var n=t.getUTCDay()
return 0===n?7:n}function wv(t,n){return w_(By.count(u_(t)-1,t),n,2)}function Sv(t){var n=t.getUTCDay()
return n>=4||0===n?qy(t):qy.ceil(t)}function Av(t,n){return t=Sv(t),w_(qy.count(u_(t),t)+(4===u_(t).getUTCDay()),n,2)}function Mv(t){return t.getUTCDay()}function Tv(t,n){return w_(Hy.count(u_(t)-1,t),n,2)}function Cv(t,n){return w_(t.getUTCFullYear()%100,n,2)}function Pv(t,n){return w_((t=Sv(t)).getUTCFullYear()%100,n,2)}function Ev(t,n){return w_(t.getUTCFullYear()%1e4,n,4)}function kv(t,n){var e=t.getUTCDay()
return w_((t=e>=4||0===e?qy(t):qy.ceil(t)).getUTCFullYear()%1e4,n,4)}function Nv(){return"+0000"}function Lv(){return"%"}function Rv(t){return+t}function Vv(t){return Math.floor(+t/1e3)}function Ov(t){return d_=h_(t),p_=d_.format,g_=d_.parse,y_=d_.utcFormat,__=d_.utcParse,d_}Ov({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})
var Gv=31536e6
function Dv(t){return new Date(t)}function Iv(t){return t instanceof Date?+t:+new Date(+t)}function zv(t,n,e,r,i,a,u,s,c){var l=Mg(vg,vg),f=l.invert,h=l.domain,d=c(".%L"),p=c(":%S"),g=c("%I:%M"),y=c("%I %p"),_=c("%a %d"),v=c("%b %d"),m=c("%B"),x=c("%Y"),b=[[u,1,1e3],[u,5,5e3],[u,15,15e3],[u,30,3e4],[a,1,6e4],[a,5,3e5],[a,15,9e5],[a,30,18e5],[i,1,36e5],[i,3,108e5],[i,6,216e5],[i,12,432e5],[r,1,864e5],[r,2,1728e5],[e,1,6048e5],[n,1,2592e6],[n,3,7776e6],[t,1,Gv]]
function w(o){return(u(o)<o?d:a(o)<o?p:i(o)<o?g:r(o)<o?y:n(o)<o?e(o)<o?_:v:t(o)<o?m:x)(o)}function S(n,e,r,i){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(r-e)/n,u=o((function(t){return t[2]})).right(b,a)
u===b.length?(i=E(e/Gv,r/Gv,n),n=t):u?(i=(u=b[a/b[u-1][2]<b[u][2]/a?u-1:u])[1],n=u[0]):(i=Math.max(E(e,r,n),1),n=s)}return null==i?n:n.every(i)}return l.invert=function(t){return new Date(f(t))},l.domain=function(t){return arguments.length?h(cg.call(t,Iv)):h().map(Dv)},l.ticks=function(t,n){var e,r=h(),i=r[0],o=r[r.length-1],a=o<i
return a&&(e=i,i=o,o=e),e=(e=S(t,i,o,n))?e.range(i,o+1):[],a?e.reverse():e},l.tickFormat=function(t,n){return null==n?w:c(n)},l.nice=function(t,n){var e=h()
return(t=S(t,e[0],e[e.length-1],n))?h(kg(e,t)):l},l.copy=function(){return Sg(l,zv(t,n,e,r,i,a,u,s,c))},l}function Fv(){return ag.apply(zv(ey,oy,dy,Py,Ny,Vy,Dy,Fy,p_).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}var Yv=ty((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()}))
const Uv=Yv
var Bv=Yv.range,Hv=ty((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*cy)}),(function(t,n){return(n-t)/cy}),(function(t){return t.getUTCHours()}))
const Xv=Hv
var jv=Hv.range,qv=ty((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*sy)}),(function(t,n){return(n-t)/sy}),(function(t){return t.getUTCMinutes()}))
const Wv=qv
var Qv=qv.range
function $v(){return ag.apply(zv(u_,Uv,By,i_,Xv,Wv,Dy,Fy,y_).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Zv(){var t,n,e,r,i,o=0,a=1,u=vg,s=!1
function c(n){return isNaN(n=+n)?i:u(0===e?.5:(n=(r(n)-t)*e,s?Math.max(0,Math.min(1,n)):n))}return c.domain=function(i){return arguments.length?(t=r(o=+i[0]),n=r(a=+i[1]),e=t===n?0:1/(n-t),c):[o,a]},c.clamp=function(t){return arguments.length?(s=!!t,c):s},c.interpolator=function(t){return arguments.length?(u=t,c):u},c.unknown=function(t){return arguments.length?(i=t,c):i},function(i){return r=i,t=i(o),n=i(a),e=t===n?0:1/(n-t),c}}function Kv(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Jv(){var t=Cg(Zv()(vg))
return t.copy=function(){return Kv(t,Jv())},ug.apply(t,arguments)}function tm(){var t=Dg(Zv()).domain([1,10])
return t.copy=function(){return Kv(t,tm()).base(t.base())},ug.apply(t,arguments)}function nm(){var t=Yg(Zv())
return t.copy=function(){return Kv(t,nm()).constant(t.constant())},ug.apply(t,arguments)}function em(){var t=jg(Zv())
return t.copy=function(){return Kv(t,em()).exponent(t.exponent())},ug.apply(t,arguments)}function rm(){return em.apply(null,arguments).exponent(.5)}function im(){var t=[],n=vg
function e(e){if(!isNaN(e=+e))return n((c(t,e)-1)/(t.length-1))}return e.domain=function(n){if(!arguments.length)return t.slice()
t=[]
for(var r,o=0,a=n.length;o<a;++o)null==(r=n[o])||isNaN(r=+r)||t.push(r)
return t.sort(i),e},e.interpolator=function(t){return arguments.length?(n=t,e):n},e.copy=function(){return im(n).domain(t)},ug.apply(e,arguments)}function om(){var t,n,e,r,i,o,a,u=0,s=.5,c=1,l=vg,f=!1
function h(t){return isNaN(t=+t)?a:(t=.5+((t=+o(t))-n)*(t<n?r:i),l(f?Math.max(0,Math.min(1,t)):t))}return h.domain=function(a){return arguments.length?(t=o(u=+a[0]),n=o(s=+a[1]),e=o(c=+a[2]),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h):[u,s,c]},h.clamp=function(t){return arguments.length?(f=!!t,h):f},h.interpolator=function(t){return arguments.length?(l=t,h):l},h.unknown=function(t){return arguments.length?(a=t,h):a},function(a){return o=a,t=a(u),n=a(s),e=a(c),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h}}function am(){var t=Cg(om()(vg))
return t.copy=function(){return Kv(t,am())},ug.apply(t,arguments)}function um(){var t=Dg(om()).domain([.1,1,10])
return t.copy=function(){return Kv(t,um()).base(t.base())},ug.apply(t,arguments)}function sm(){var t=Yg(om())
return t.copy=function(){return Kv(t,sm()).constant(t.constant())},ug.apply(t,arguments)}function cm(){var t=jg(om())
return t.copy=function(){return Kv(t,cm()).exponent(t.exponent())},ug.apply(t,arguments)}function lm(){return cm.apply(null,arguments).exponent(.5)}function fm(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r)
return e}const hm=fm("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),dm=fm("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),pm=fm("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),gm=fm("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),ym=fm("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),_m=fm("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),vm=fm("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),mm=fm("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),xm=fm("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),bm=fm("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab")
function wm(t){return _e(t[t.length-1])}var Sm=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(fm)
const Am=wm(Sm)
var Mm=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(fm)
const Tm=wm(Mm)
var Cm=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(fm)
const Pm=wm(Cm)
var Em=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(fm)
const km=wm(Em)
var Nm=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(fm)
const Lm=wm(Nm)
var Rm=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(fm)
const Vm=wm(Rm)
var Om=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(fm)
const Gm=wm(Om)
var Dm=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(fm)
const Im=wm(Dm)
var zm=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(fm)
const Fm=wm(zm)
var Ym=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(fm)
const Um=wm(Ym)
var Bm=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(fm)
const Hm=wm(Bm)
var Xm=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(fm)
const jm=wm(Xm)
var qm=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(fm)
const Wm=wm(qm)
var Qm=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(fm)
const $m=wm(Qm)
var Zm=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(fm)
const Km=wm(Zm)
var Jm=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(fm)
const tx=wm(Jm)
var nx=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(fm)
const ex=wm(nx)
var rx=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(fm)
const ix=wm(rx)
var ox=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(fm)
const ax=wm(ox)
var ux=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(fm)
const sx=wm(ux)
var cx=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(fm)
const lx=wm(cx)
var fx=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(fm)
const hx=wm(fx)
var dx=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(fm)
const px=wm(dx)
var gx=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(fm)
const yx=wm(gx)
var _x=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(fm)
const vx=wm(_x)
var mx=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(fm)
const xx=wm(mx)
var bx=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(fm)
const wx=wm(bx)
function Sx(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-t*(35.34-t*(2381.73-t*(6402.7-t*(7024.72-2710.57*t)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+t*(170.73+t*(52.82-t*(131.46-t*(176.58-67.37*t)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+t*(442.36-t*(2482.43-t*(6167.24-t*(6614.94-2475.67*t)))))))+")"}const Ax=Up(Xo(300,.5,0),Xo(-240,.5,1))
var Mx=Up(Xo(-100,.75,.35),Xo(80,1.5,.8)),Tx=Up(Xo(260,.75,.35),Xo(80,1.5,.8)),Cx=Xo()
function Px(t){(t<0||t>1)&&(t-=Math.floor(t))
var n=Math.abs(t-.5)
return Cx.h=360*t-100,Cx.s=1.5-1.5*n,Cx.l=.8-.9*n,Cx+""}var Ex=Kn(),kx=Math.PI/3,Nx=2*Math.PI/3
function Lx(t){var n
return t=(.5-t)*Math.PI,Ex.r=255*(n=Math.sin(t))*n,Ex.g=255*(n=Math.sin(t+kx))*n,Ex.b=255*(n=Math.sin(t+Nx))*n,Ex+""}function Rx(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+t*(1172.33-t*(10793.56-t*(33300.12-t*(38394.49-14825.05*t)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+t*(557.33+t*(1225.33-t*(3574.96-t*(1073.77+707.56*t)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+t*(3211.1-t*(15327.97-t*(27814-t*(22569.18-6838.66*t)))))))+")"}function Vx(t){var n=t.length
return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}const Ox=Vx(fm("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"))
var Gx=Vx(fm("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),Dx=Vx(fm("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),Ix=Vx(fm("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
function zx(t){return Mn(on(t).call(document.documentElement))}var Fx=0
function Yx(){return new Ux}function Ux(){this._="@"+(++Fx).toString(36)}function Bx(t){return"string"==typeof t?new wn([document.querySelectorAll(t)],[document.documentElement]):new wn([null==t?[]:t],bn)}function Hx(t,n){null==n&&(n=ke().touches)
for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Ne(t,n[e])
return i}function Xx(t){return function(){return t}}Ux.prototype=Yx.prototype={constructor:Ux,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return
return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}}
var jx=Math.abs,qx=Math.atan2,Wx=Math.cos,Qx=Math.max,$x=Math.min,Zx=Math.sin,Kx=Math.sqrt,Jx=1e-12,tb=Math.PI,nb=tb/2,eb=2*tb
function rb(t){return t>1?0:t<-1?tb:Math.acos(t)}function ib(t){return t>=1?nb:t<=-1?-nb:Math.asin(t)}function ob(t){return t.innerRadius}function ab(t){return t.outerRadius}function ub(t){return t.startAngle}function sb(t){return t.endAngle}function cb(t){return t&&t.padAngle}function lb(t,n,e,r,i,o,a,u){var s=e-t,c=r-n,l=a-i,f=u-o,h=f*s-l*c
if(!(h*h<Jx))return[t+(h=(l*(n-o)-f*(t-i))/h)*s,n+h*c]}function fb(t,n,e,r,i,o,a){var u=t-e,s=n-r,c=(a?o:-o)/Kx(u*u+s*s),l=c*s,f=-c*u,h=t+l,d=n+f,p=e+l,g=r+f,y=(h+p)/2,_=(d+g)/2,v=p-h,m=g-d,x=v*v+m*m,b=i-o,w=h*g-p*d,S=(m<0?-1:1)*Kx(Qx(0,b*b*x-w*w)),A=(w*m-v*S)/x,M=(-w*v-m*S)/x,T=(w*m+v*S)/x,C=(-w*v+m*S)/x,P=A-y,E=M-_,k=T-y,N=C-_
return P*P+E*E>k*k+N*N&&(A=T,M=C),{cx:A,cy:M,x01:-l,y01:-f,x11:A*(i/b-1),y11:M*(i/b-1)}}function hb(){var t=ob,n=ab,e=Xx(0),r=null,i=ub,o=sb,a=cb,u=null
function s(){var s,c,l=+t.apply(this,arguments),f=+n.apply(this,arguments),h=i.apply(this,arguments)-nb,d=o.apply(this,arguments)-nb,p=jx(d-h),g=d>h
if(u||(u=s=ji()),f<l&&(c=f,f=l,l=c),f>Jx)if(p>eb-Jx)u.moveTo(f*Wx(h),f*Zx(h)),u.arc(0,0,f,h,d,!g),l>Jx&&(u.moveTo(l*Wx(d),l*Zx(d)),u.arc(0,0,l,d,h,g))
else{var y,_,v=h,m=d,x=h,b=d,w=p,S=p,A=a.apply(this,arguments)/2,M=A>Jx&&(r?+r.apply(this,arguments):Kx(l*l+f*f)),T=$x(jx(f-l)/2,+e.apply(this,arguments)),C=T,P=T
if(M>Jx){var E=ib(M/l*Zx(A)),k=ib(M/f*Zx(A));(w-=2*E)>Jx?(x+=E*=g?1:-1,b-=E):(w=0,x=b=(h+d)/2),(S-=2*k)>Jx?(v+=k*=g?1:-1,m-=k):(S=0,v=m=(h+d)/2)}var N=f*Wx(v),L=f*Zx(v),R=l*Wx(b),V=l*Zx(b)
if(T>Jx){var O,G=f*Wx(m),D=f*Zx(m),I=l*Wx(x),z=l*Zx(x)
if(p<tb&&(O=lb(N,L,I,z,G,D,R,V))){var F=N-O[0],Y=L-O[1],U=G-O[0],B=D-O[1],H=1/Zx(rb((F*U+Y*B)/(Kx(F*F+Y*Y)*Kx(U*U+B*B)))/2),X=Kx(O[0]*O[0]+O[1]*O[1])
C=$x(T,(l-X)/(H-1)),P=$x(T,(f-X)/(H+1))}}S>Jx?P>Jx?(y=fb(I,z,N,L,f,P,g),_=fb(G,D,R,V,f,P,g),u.moveTo(y.cx+y.x01,y.cy+y.y01),P<T?u.arc(y.cx,y.cy,P,qx(y.y01,y.x01),qx(_.y01,_.x01),!g):(u.arc(y.cx,y.cy,P,qx(y.y01,y.x01),qx(y.y11,y.x11),!g),u.arc(0,0,f,qx(y.cy+y.y11,y.cx+y.x11),qx(_.cy+_.y11,_.cx+_.x11),!g),u.arc(_.cx,_.cy,P,qx(_.y11,_.x11),qx(_.y01,_.x01),!g))):(u.moveTo(N,L),u.arc(0,0,f,v,m,!g)):u.moveTo(N,L),l>Jx&&w>Jx?C>Jx?(y=fb(R,V,G,D,l,-C,g),_=fb(N,L,I,z,l,-C,g),u.lineTo(y.cx+y.x01,y.cy+y.y01),C<T?u.arc(y.cx,y.cy,C,qx(y.y01,y.x01),qx(_.y01,_.x01),!g):(u.arc(y.cx,y.cy,C,qx(y.y01,y.x01),qx(y.y11,y.x11),!g),u.arc(0,0,l,qx(y.cy+y.y11,y.cx+y.x11),qx(_.cy+_.y11,_.cx+_.x11),g),u.arc(_.cx,_.cy,C,qx(_.y11,_.x11),qx(_.y01,_.x01),!g))):u.arc(0,0,l,b,x,g):u.lineTo(R,V)}else u.moveTo(0,0)
if(u.closePath(),s)return u=null,s+""||null}return s.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-tb/2
return[Wx(r)*e,Zx(r)*e]},s.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:Xx(+n),s):t},s.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:Xx(+t),s):n},s.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:Xx(+t),s):e},s.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:Xx(+t),s):r},s.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:Xx(+t),s):i},s.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:Xx(+t),s):o},s.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:Xx(+t),s):a},s.context=function(t){return arguments.length?(u=null==t?null:t,s):u},s}function db(t){this._context=t}function pb(t){return new db(t)}function gb(t){return t[0]}function yb(t){return t[1]}function _b(){var t=gb,n=yb,e=Xx(!0),r=null,i=pb,o=null
function a(a){var u,s,c,l=a.length,f=!1
for(null==r&&(o=i(c=ji())),u=0;u<=l;++u)!(u<l&&e(s=a[u],u,a))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+t(s,u,a),+n(s,u,a))
if(c)return o=null,c+""||null}return a.x=function(n){return arguments.length?(t="function"==typeof n?n:Xx(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:Xx(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:Xx(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}function vb(){var t=gb,n=null,e=Xx(0),r=yb,i=Xx(!0),o=null,a=pb,u=null
function s(s){var c,l,f,h,d,p=s.length,g=!1,y=new Array(p),_=new Array(p)
for(null==o&&(u=a(d=ji())),c=0;c<=p;++c){if(!(c<p&&i(h=s[c],c,s))===g)if(g=!g)l=c,u.areaStart(),u.lineStart()
else{for(u.lineEnd(),u.lineStart(),f=c-1;f>=l;--f)u.point(y[f],_[f])
u.lineEnd(),u.areaEnd()}g&&(y[c]=+t(h,c,s),_[c]=+e(h,c,s),u.point(n?+n(h,c,s):y[c],r?+r(h,c,s):_[c]))}if(d)return u=null,d+""||null}function c(){return _b().defined(i).curve(a).context(o)}return s.x=function(e){return arguments.length?(t="function"==typeof e?e:Xx(+e),n=null,s):t},s.x0=function(n){return arguments.length?(t="function"==typeof n?n:Xx(+n),s):t},s.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:Xx(+t),s):n},s.y=function(t){return arguments.length?(e="function"==typeof t?t:Xx(+t),r=null,s):e},s.y0=function(t){return arguments.length?(e="function"==typeof t?t:Xx(+t),s):e},s.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:Xx(+t),s):r},s.lineX0=s.lineY0=function(){return c().x(t).y(e)},s.lineY1=function(){return c().x(t).y(r)},s.lineX1=function(){return c().x(n).y(e)},s.defined=function(t){return arguments.length?(i="function"==typeof t?t:Xx(!!t),s):i},s.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),s):a},s.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),s):o},s}function mb(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function xb(t){return t}function bb(){var t=xb,n=mb,e=null,r=Xx(0),i=Xx(eb),o=Xx(0)
function a(a){var u,s,c,l,f,h=a.length,d=0,p=new Array(h),g=new Array(h),y=+r.apply(this,arguments),_=Math.min(eb,Math.max(-eb,i.apply(this,arguments)-y)),v=Math.min(Math.abs(_)/h,o.apply(this,arguments)),m=v*(_<0?-1:1)
for(u=0;u<h;++u)(f=g[p[u]=u]=+t(a[u],u,a))>0&&(d+=f)
for(null!=n?p.sort((function(t,e){return n(g[t],g[e])})):null!=e&&p.sort((function(t,n){return e(a[t],a[n])})),u=0,c=d?(_-h*m)/d:0;u<h;++u,y=l)s=p[u],l=y+((f=g[s])>0?f*c:0)+m,g[s]={data:a[s],index:u,value:f,startAngle:y,endAngle:l,padAngle:v}
return g}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:Xx(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,e=null,a):n},a.sort=function(t){return arguments.length?(e=t,n=null,a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:Xx(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:Xx(+t),a):i},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:Xx(+t),a):o},a}db.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:this._context.lineTo(t,n)}}}
var wb=Ab(pb)
function Sb(t){this._curve=t}function Ab(t){function n(n){return new Sb(t(n))}return n._curve=t,n}function Mb(t){var n=t.curve
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Ab(t)):n()._curve},t}function Tb(){return Mb(_b().curve(wb))}function Cb(){var t=vb().curve(wb),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1
return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Mb(e())},delete t.lineX0,t.lineEndAngle=function(){return Mb(r())},delete t.lineX1,t.lineInnerRadius=function(){return Mb(i())},delete t.lineY0,t.lineOuterRadius=function(){return Mb(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Ab(t)):n()._curve},t}function Pb(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}Sb.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}
var Eb=Array.prototype.slice
function kb(t){return t.source}function Nb(t){return t.target}function Lb(t){var n=kb,e=Nb,r=gb,i=yb,o=null
function a(){var a,u=Eb.call(arguments),s=n.apply(this,u),c=e.apply(this,u)
if(o||(o=a=ji()),t(o,+r.apply(this,(u[0]=s,u)),+i.apply(this,u),+r.apply(this,(u[0]=c,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:Xx(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:Xx(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function Rb(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function Vb(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function Ob(t,n,e,r,i){var o=Pb(n,e),a=Pb(n,e=(e+i)/2),u=Pb(r,e),s=Pb(r,i)
t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],s[0],s[1])}function Gb(){return Lb(Rb)}function Db(){return Lb(Vb)}function Ib(){var t=Lb(Ob)
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}const zb={draw:function(t,n){var e=Math.sqrt(n/tb)
t.moveTo(e,0),t.arc(0,0,e,0,eb)}},Fb={draw:function(t,n){var e=Math.sqrt(n/5)/2
t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}}
var Yb=Math.sqrt(1/3),Ub=2*Yb
const Bb={draw:function(t,n){var e=Math.sqrt(n/Ub),r=e*Yb
t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}}
var Hb=Math.sin(tb/10)/Math.sin(7*tb/10),Xb=Math.sin(eb/10)*Hb,jb=-Math.cos(eb/10)*Hb
const qb={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=Xb*e,i=jb*e
t.moveTo(0,-e),t.lineTo(r,i)
for(var o=1;o<5;++o){var a=eb*o/5,u=Math.cos(a),s=Math.sin(a)
t.lineTo(s*e,-u*e),t.lineTo(u*r-s*i,s*r+u*i)}t.closePath()}},Wb={draw:function(t,n){var e=Math.sqrt(n),r=-e/2
t.rect(r,r,e,e)}}
var Qb=Math.sqrt(3)
const $b={draw:function(t,n){var e=-Math.sqrt(n/(3*Qb))
t.moveTo(0,2*e),t.lineTo(-Qb*e,-e),t.lineTo(Qb*e,-e),t.closePath()}}
var Zb=-.5,Kb=Math.sqrt(3)/2,Jb=1/Math.sqrt(12),tw=3*(Jb/2+1)
const nw={draw:function(t,n){var e=Math.sqrt(n/tw),r=e/2,i=e*Jb,o=r,a=e*Jb+e,u=-o,s=a
t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,s),t.lineTo(Zb*r-Kb*i,Kb*r+Zb*i),t.lineTo(Zb*o-Kb*a,Kb*o+Zb*a),t.lineTo(Zb*u-Kb*s,Kb*u+Zb*s),t.lineTo(Zb*r+Kb*i,Zb*i-Kb*r),t.lineTo(Zb*o+Kb*a,Zb*a-Kb*o),t.lineTo(Zb*u+Kb*s,Zb*s-Kb*u),t.closePath()}}
var ew=[zb,Fb,Bb,Wb,qb,$b,nw]
function rw(){var t=Xx(zb),n=Xx(64),e=null
function r(){var r
if(e||(e=r=ji()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return r.type=function(n){return arguments.length?(t="function"==typeof n?n:Xx(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:Xx(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r}function iw(){}function ow(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function aw(t){this._context=t}function uw(t){return new aw(t)}function sw(t){this._context=t}function cw(t){return new sw(t)}function lw(t){this._context=t}function fw(t){return new lw(t)}function hw(t,n){this._basis=new aw(t),this._beta=n}aw.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:ow(this,this._x1,this._y1)
case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6)
default:ow(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},sw.prototype={areaStart:iw,areaEnd:iw,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath()
break
case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath()
break
case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n
break
case 1:this._point=2,this._x3=t,this._y3=n
break
case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6)
break
default:ow(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},lw.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3
var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6
this._line?this._context.lineTo(e,r):this._context.moveTo(e,r)
break
case 3:this._point=4
default:ow(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},hw.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1
if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,s=-1;++s<=e;)r=s/e,this._basis.point(this._beta*t[s]+(1-this._beta)*(i+r*a),this._beta*n[s]+(1-this._beta)*(o+r*u))
this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}}
const dw=function t(n){function e(t){return 1===n?new aw(t):new hw(t,n)}return e.beta=function(n){return t(+n)},e}(.85)
function pw(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function gw(t,n){this._context=t,this._k=(1-n)/6}gw.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:pw(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2,this._x1=t,this._y1=n
break
case 2:this._point=3
default:pw(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const yw=function t(n){function e(t){return new gw(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function _w(t,n){this._context=t,this._k=(1-n)/6}_w.prototype={areaStart:iw,areaEnd:iw,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:pw(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const vw=function t(n){function e(t){return new _w(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function mw(t,n){this._context=t,this._k=(1-n)/6}mw.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:pw(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const xw=function t(n){function e(t){return new mw(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function bw(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2
if(t._l01_a>Jx){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,s=3*t._l01_a*(t._l01_a+t._l12_a)
r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/s,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/s}if(t._l23_a>Jx){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,l=3*t._l23_a*(t._l23_a+t._l12_a)
o=(o*c+t._x1*t._l23_2a-n*t._l12_2a)/l,a=(a*c+t._y1*t._l23_2a-e*t._l12_2a)/l}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function ww(t,n){this._context=t,this._alpha=n}ww.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3
default:bw(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const Sw=function t(n){function e(t){return n?new ww(t,n):new gw(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function Aw(t,n){this._context=t,this._alpha=n}Aw.prototype={areaStart:iw,areaEnd:iw,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:bw(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const Mw=function t(n){function e(t){return n?new Aw(t,n):new _w(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function Tw(t,n){this._context=t,this._alpha=n}Tw.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:bw(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const Cw=function t(n){function e(t){return n?new Tw(t,n):new mw(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function Pw(t){this._context=t}function Ew(t){return new Pw(t)}function kw(t){return t<0?-1:1}function Nw(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i)
return(kw(o)+kw(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function Lw(t,n){var e=t._x1-t._x0
return e?(3*(t._y1-t._y0)/e-n)/2:n}function Rw(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3
t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function Vw(t){this._context=t}function Ow(t){this._context=new Gw(t)}function Gw(t){this._context=t}function Dw(t){return new Vw(t)}function Iw(t){return new Ow(t)}function zw(t){this._context=t}function Fw(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r)
for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1]
for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1]
for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n]
for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1]
return[i,o]}function Yw(t){return new zw(t)}function Uw(t,n){this._context=t,this._t=n}function Bw(t){return new Uw(t,.5)}function Hw(t){return new Uw(t,0)}function Xw(t){return new Uw(t,1)}function jw(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function qw(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n
return e}function Ww(t,n){return t[n]}function Qw(){var t=Xx([]),n=qw,e=jw,r=Ww
function i(i){var o,a,u=t.apply(this,arguments),s=i.length,c=u.length,l=new Array(c)
for(o=0;o<c;++o){for(var f,h=u[o],d=l[o]=new Array(s),p=0;p<s;++p)d[p]=f=[0,+r(i[p],h,p,i)],f.data=i[p]
d.key=h}for(o=0,a=n(l);o<c;++o)l[a[o]].index=o
return e(l,a),l}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:Xx(Eb.call(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:Xx(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?qw:"function"==typeof t?t:Xx(Eb.call(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?jw:t,i):e},i}function $w(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0
if(i)for(e=0;e<r;++e)t[e][o][1]/=i}jw(t,n)}}function Zw(t,n){if((u=t.length)>0)for(var e,r,i,o,a,u,s=0,c=t[n[0]].length;s<c;++s)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][s])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):(r[0]=0,r[1]=i)}function Kw(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0
i[r][1]+=i[r][0]=-u/2}jw(t,n)}}function Jw(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,s=0,c=0;u<i;++u){for(var l=t[n[u]],f=l[a][1]||0,h=(f-(l[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]]
h+=(p[a][1]||0)-(p[a-1][1]||0)}s+=f,c+=h*f}e[a-1][1]+=e[a-1][0]=o,s&&(o-=c/s)}e[a-1][1]+=e[a-1][0]=o,jw(t,n)}}function tS(t){var n=t.map(nS)
return qw(t).sort((function(t,e){return n[t]-n[e]}))}function nS(t){for(var n,e=-1,r=0,i=t.length,o=-1/0;++e<i;)(n=+t[e][1])>o&&(o=n,r=e)
return r}function eS(t){var n=t.map(rS)
return qw(t).sort((function(t,e){return n[t]-n[e]}))}function rS(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n)
return e}function iS(t){return eS(t).reverse()}function oS(t){var n,e,r=t.length,i=t.map(rS),o=tS(t),a=0,u=0,s=[],c=[]
for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],s.push(e)):(u+=i[e],c.push(e))
return c.reverse().concat(s)}function aS(t){return qw(t).reverse()}Pw.prototype={areaStart:iw,areaEnd:iw,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},Vw.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1)
break
case 3:Rw(this,this._t0,Lw(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN
if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,Rw(this,Lw(this,e=Nw(this,t,n)),e)
break
default:Rw(this,this._t0,e=Nw(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Ow.prototype=Object.create(Vw.prototype)).point=function(t,n){Vw.prototype.point.call(this,n,t)},Gw.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},zw.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length
if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1])
else for(var r=Fw(t),i=Fw(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},Uw.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n)
else{var e=this._x*(1-this._t)+t*this._t
this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}}
var uS="%Y-%m-%dT%H:%M:%S.%LZ",sS=Date.prototype.toISOString?function(t){return t.toISOString()}:y_(uS)
const cS=sS
var lS=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t)
return isNaN(n)?null:n}:__(uS)
const fS=lS
function hS(t,n,e){var r=new je,i=n
return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?He():+e,r.restart((function o(a){a+=i,r.restart(o,i+=n,e),t(a)}),n,e),r)}function dS(t){return function(){return t}}function pS(t){return t[0]}function gS(t){return t[1]}function yS(){this._=null}function _S(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function vS(t,n){var e=n,r=n.R,i=e.U
i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function mS(t,n){var e=n,r=n.L,i=e.U
i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function xS(t){for(;t.L;)t=t.L
return t}yS.prototype={constructor:yS,insert:function(t,n){var e,r,i
if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L
t.L=n}else t.R=n
e=t}else this._?(t=xS(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null)
for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(vS(this,e),e=(t=e).U),e.C=!1,r.C=!0,mS(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(mS(this,e),e=(t=e).U),e.C=!1,r.C=!0,vS(this,r)),e=t.U
this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null
var n,e,r,i=t.U,o=t.L,a=t.R
if(e=o?a?xS(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1
else{do{if(t===this._)break
if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,vS(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,mS(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,vS(this,i),t=this._
break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,mS(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,vS(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,mS(this,i),t=this._
break}n.C=!0,t=i,i=i.U}while(!t.C)
t&&(t.C=!1)}}}
const bS=yS
function wS(t,n,e,r){var i=[null,null],o=jS.push(i)-1
return i.left=t,i.right=n,e&&AS(i,t,n,e),r&&AS(i,n,t,r),HS[t.index].halfedges.push(o),HS[n.index].halfedges.push(o),i}function SS(t,n,e){var r=[n,e]
return r.left=t,r}function AS(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function MS(t,n,e,r,i){var o,a=t[0],u=t[1],s=a[0],c=a[1],l=0,f=1,h=u[0]-s,d=u[1]-c
if(o=n-s,h||!(o>0)){if(o/=h,h<0){if(o<l)return
o<f&&(f=o)}else if(h>0){if(o>f)return
o>l&&(l=o)}if(o=r-s,h||!(o<0)){if(o/=h,h<0){if(o>f)return
o>l&&(l=o)}else if(h>0){if(o<l)return
o<f&&(f=o)}if(o=e-c,d||!(o>0)){if(o/=d,d<0){if(o<l)return
o<f&&(f=o)}else if(d>0){if(o>f)return
o>l&&(l=o)}if(o=i-c,d||!(o<0)){if(o/=d,d<0){if(o>f)return
o>l&&(l=o)}else if(d>0){if(o<l)return
o<f&&(f=o)}return!(l>0||f<1)||(l>0&&(t[0]=[s+l*h,c+l*d]),f<1&&(t[1]=[s+f*h,c+f*d]),!0)}}}}}function TS(t,n,e,r,i){var o=t[1]
if(o)return!0
var a,u,s=t[0],c=t.left,l=t.right,f=c[0],h=c[1],d=l[0],p=l[1],g=(f+d)/2,y=(h+p)/2
if(p===h){if(g<n||g>=r)return
if(f>d){if(s){if(s[1]>=i)return}else s=[g,e]
o=[g,i]}else{if(s){if(s[1]<e)return}else s=[g,i]
o=[g,e]}}else if(u=y-(a=(f-d)/(p-h))*g,a<-1||a>1)if(f>d){if(s){if(s[1]>=i)return}else s=[(e-u)/a,e]
o=[(i-u)/a,i]}else{if(s){if(s[1]<e)return}else s=[(i-u)/a,i]
o=[(e-u)/a,e]}else if(h<p){if(s){if(s[0]>=r)return}else s=[n,a*n+u]
o=[r,a*r+u]}else{if(s){if(s[0]<n)return}else s=[r,a*r+u]
o=[n,a*n+u]}return t[0]=s,t[1]=o,!0}function CS(t,n){var e=t.site,r=n.left,i=n.right
return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function PS(t,n){return n[+(n.left!==t.site)]}function ES(t,n){return n[+(n.left===t.site)]}var kS,NS=[]
function LS(){_S(this),this.x=this.y=this.arc=this.site=this.cy=null}function RS(t){var n=t.P,e=t.N
if(n&&e){var r=n.site,i=t.site,o=e.site
if(r!==o){var a=i[0],u=i[1],s=r[0]-a,c=r[1]-u,l=o[0]-a,f=o[1]-u,h=2*(s*f-c*l)
if(!(h>=-WS)){var d=s*s+c*c,p=l*l+f*f,g=(f*d-c*p)/h,y=(s*p-l*d)/h,_=NS.pop()||new LS
_.arc=t,_.site=i,_.x=g+a,_.y=(_.cy=y+u)+Math.sqrt(g*g+y*y),t.circle=_
for(var v=null,m=XS._;m;)if(_.y<m.y||_.y===m.y&&_.x<=m.x){if(!m.L){v=m.P
break}m=m.L}else{if(!m.R){v=m
break}m=m.R}XS.insert(v,_),v||(kS=_)}}}}function VS(t){var n=t.circle
n&&(n.P||(kS=n.N),XS.remove(n),NS.push(n),_S(n),t.circle=null)}var OS=[]
function GS(){_S(this),this.edge=this.site=this.circle=null}function DS(t){var n=OS.pop()||new GS
return n.site=t,n}function IS(t){VS(t),BS.remove(t),OS.push(t),_S(t)}function zS(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t]
IS(t)
for(var s=o;s.circle&&Math.abs(e-s.circle.x)<qS&&Math.abs(r-s.circle.cy)<qS;)o=s.P,u.unshift(s),IS(s),s=o
u.unshift(s),VS(s)
for(var c=a;c.circle&&Math.abs(e-c.circle.x)<qS&&Math.abs(r-c.circle.cy)<qS;)a=c.N,u.push(c),IS(c),c=a
u.push(c),VS(c)
var l,f=u.length
for(l=1;l<f;++l)c=u[l],s=u[l-1],AS(c.edge,s.site,c.site,i)
s=u[0],(c=u[f-1]).edge=wS(s.site,c.site,null,i),RS(s),RS(c)}function FS(t){for(var n,e,r,i,o=t[0],a=t[1],u=BS._;u;)if((r=YS(u,a)-o)>qS)u=u.L
else{if(!((i=o-US(u,a))>qS)){r>-qS?(n=u.P,e=u):i>-qS?(n=u,e=u.N):n=e=u
break}if(!u.R){n=u
break}u=u.R}!function(t){HS[t.index]={site:t,halfedges:[]}}(t)
var s=DS(t)
if(BS.insert(n,s),n||e){if(n===e)return VS(n),e=DS(n.site),BS.insert(s,e),s.edge=e.edge=wS(n.site,s.site),RS(n),void RS(e)
if(e){VS(n),VS(e)
var c=n.site,l=c[0],f=c[1],h=t[0]-l,d=t[1]-f,p=e.site,g=p[0]-l,y=p[1]-f,_=2*(h*y-d*g),v=h*h+d*d,m=g*g+y*y,x=[(y*v-d*m)/_+l,(h*m-g*v)/_+f]
AS(e.edge,c,p,x),s.edge=wS(c,t,null,x),e.edge=wS(t,p,null,x),RS(n),RS(e)}else s.edge=wS(n.site,s.site)}}function YS(t,n){var e=t.site,r=e[0],i=e[1],o=i-n
if(!o)return r
var a=t.P
if(!a)return-1/0
var u=(e=a.site)[0],s=e[1],c=s-n
if(!c)return u
var l=u-r,f=1/o-1/c,h=l/c
return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*c)-s+c/2+i-o/2)))/f+r:(r+u)/2}function US(t,n){var e=t.N
if(e)return YS(e,n)
var r=t.site
return r[1]===n?r[0]:1/0}var BS,HS,XS,jS,qS=1e-6,WS=1e-12
function QS(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function $S(t,n){return n[1]-t[1]||n[0]-t[0]}function ZS(t,n){var e,r,i,o=t.sort($S).pop()
for(jS=[],HS=new Array(t.length),BS=new bS,XS=new bS;;)if(i=kS,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(FS(o),e=o[0],r=o[1]),o=t.pop()
else{if(!i)break
zS(i.arc)}if(function(){for(var t,n,e,r,i=0,o=HS.length;i<o;++i)if((t=HS[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r)
for(e=0;e<r;++e)a[e]=e,u[e]=CS(t,jS[n[e]])
for(a.sort((function(t,n){return u[n]-u[t]})),e=0;e<r;++e)u[e]=n[a[e]]
for(e=0;e<r;++e)n[e]=u[e]}}(),n){var a=+n[0][0],u=+n[0][1],s=+n[1][0],c=+n[1][1]
!function(t,n,e,r){for(var i,o=jS.length;o--;)TS(i=jS[o],t,n,e,r)&&MS(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>qS||Math.abs(i[0][1]-i[1][1])>qS)||delete jS[o]}(a,u,s,c),function(t,n,e,r){var i,o,a,u,s,c,l,f,h,d,p,g,y=HS.length,_=!0
for(i=0;i<y;++i)if(o=HS[i]){for(a=o.site,u=(s=o.halfedges).length;u--;)jS[s[u]]||s.splice(u,1)
for(u=0,c=s.length;u<c;)p=(d=ES(o,jS[s[u]]))[0],g=d[1],f=(l=PS(o,jS[s[++u%c]]))[0],h=l[1],(Math.abs(p-f)>qS||Math.abs(g-h)>qS)&&(s.splice(u,0,jS.push(SS(a,d,Math.abs(p-t)<qS&&r-g>qS?[t,Math.abs(f-t)<qS?h:r]:Math.abs(g-r)<qS&&e-p>qS?[Math.abs(h-r)<qS?f:e,r]:Math.abs(p-e)<qS&&g-n>qS?[e,Math.abs(f-e)<qS?h:n]:Math.abs(g-n)<qS&&p-t>qS?[Math.abs(h-n)<qS?f:t,n]:null))-1),++c)
c&&(_=!1)}if(_){var v,m,x,b=1/0
for(i=0,_=null;i<y;++i)(o=HS[i])&&(x=(v=(a=o.site)[0]-t)*v+(m=a[1]-n)*m)<b&&(b=x,_=o)
if(_){var w=[t,n],S=[t,r],A=[e,r],M=[e,n]
_.halfedges.push(jS.push(SS(a=_.site,w,S))-1,jS.push(SS(a,S,A))-1,jS.push(SS(a,A,M))-1,jS.push(SS(a,M,w))-1)}}for(i=0;i<y;++i)(o=HS[i])&&(o.halfedges.length||delete HS[i])}(a,u,s,c)}this.edges=jS,this.cells=HS,BS=XS=jS=HS=null}function KS(){var t=pS,n=gS,e=null
function r(r){return new ZS(r.map((function(e,i){var o=[Math.round(t(e,i,r)/qS)*qS,Math.round(n(e,i,r)/qS)*qS]
return o.index=i,o.data=e,o})),e)}return r.polygons=function(t){return r(t).polygons()},r.links=function(t){return r(t).links()},r.triangles=function(t){return r(t).triangles()},r.x=function(n){return arguments.length?(t="function"==typeof n?n:dS(+n),r):t},r.y=function(t){return arguments.length?(n="function"==typeof t?t:dS(+t),r):n},r.extent=function(t){return arguments.length?(e=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],r):e&&[[e[0][0],e[0][1]],[e[1][0],e[1][1]]]},r.size=function(t){return arguments.length?(e=null==t?null:[[0,0],[+t[0],+t[1]]],r):e&&[e[1][0]-e[0][0],e[1][1]-e[0][1]]},r}function JS(t){return function(){return t}}function tA(t,n,e){this.target=t,this.type=n,this.transform=e}function nA(t,n,e){this.k=t,this.x=n,this.y=e}ZS.prototype={constructor:ZS,polygons:function(){var t=this.edges
return this.cells.map((function(n){var e=n.halfedges.map((function(e){return PS(n,t[e])}))
return e.data=n.site.data,e}))},triangles:function(){var t=[],n=this.edges
return this.cells.forEach((function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u=e.site,s=-1,c=n[i[o-1]],l=c.left===u?c.right:c.left;++s<o;)a=l,l=(c=n[i[s]]).left===u?c.right:c.left,a&&l&&r<a.index&&r<l.index&&QS(u,a,l)<0&&t.push([u.data,a.data,l.data])})),t},links:function(){return this.edges.filter((function(t){return t.right})).map((function(t){return{source:t.left.data,target:t.right.data}}))},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null
var s=t-i.site[0],c=n-i.site[1],l=s*s+c*c
do{i=o.cells[r=a],a=null,i.halfedges.forEach((function(e){var r=o.edges[e],u=r.left
if(u!==i.site&&u||(u=r.right)){var s=t-u[0],c=n-u[1],f=s*s+c*c
f<l&&(l=f,a=u.index)}}))}while(null!==a)
return o._found=r,null==e||l<=e*e?i.site:null}},nA.prototype={constructor:nA,scale:function(t){return 1===t?this:new nA(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new nA(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}}
var eA=new nA(1,0,0)
function rA(t){for(;!t.__zoom;)if(!(t=t.parentNode))return eA
return t.__zoom}function iA(){fn.stopImmediatePropagation()}function oA(){fn.preventDefault(),fn.stopImmediatePropagation()}function aA(){return!fn.ctrlKey&&!fn.button}function uA(){var t=this
return t instanceof SVGElement?(t=t.ownerSVGElement||t).hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]:[[0,0],[t.clientWidth,t.clientHeight]]}function sA(){return this.__zoom||eA}function cA(){return-fn.deltaY*(1===fn.deltaMode?.05:fn.deltaMode?1:.002)}function lA(){return navigator.maxTouchPoints||"ontouchstart"in this}function fA(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1]
return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}function hA(){var t,n,e=aA,r=uA,i=fA,o=cA,a=lA,u=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],c=250,l=Lp,f=ht("start","zoom","end"),h=500,d=0
function p(t){t.property("__zoom",sA).on("wheel.zoom",b).on("mousedown.zoom",w).on("dblclick.zoom",S).filter(a).on("touchstart.zoom",A).on("touchmove.zoom",M).on("touchend.zoom touchcancel.zoom",T).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function g(t,n){return(n=Math.max(u[0],Math.min(u[1],n)))===t.k?t:new nA(n,t.x,t.y)}function y(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k
return r===t.x&&i===t.y?t:new nA(t.k,r,i)}function _(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function v(t,n,e){t.on("start.zoom",(function(){m(this,arguments).start()})).on("interrupt.zoom end.zoom",(function(){m(this,arguments).end()})).tween("zoom",(function(){var t=this,i=arguments,o=m(t,i),a=r.apply(t,i),u=null==e?_(a):"function"==typeof e?e.apply(t,i):e,s=Math.max(a[1][0]-a[0][0],a[1][1]-a[0][1]),c=t.__zoom,f="function"==typeof n?n.apply(t,i):n,h=l(c.invert(u).concat(s/c.k),f.invert(u).concat(s/f.k))
return function(t){if(1===t)t=f
else{var n=h(t),e=s/n[2]
t=new nA(e,u[0]-n[0]*e,u[1]-n[1]*e)}o.zoom(null,t)}}))}function m(t,n,e){return!e&&t.__zooming||new x(t,n)}function x(t,n){this.that=t,this.args=n,this.active=0,this.extent=r.apply(t,n),this.taps=0}function b(){if(e.apply(this,arguments)){var t=m(this,arguments),n=this.__zoom,r=Math.max(u[0],Math.min(u[1],n.k*Math.pow(2,o.apply(this,arguments)))),a=Re(this)
if(t.wheel)t.mouse[0][0]===a[0]&&t.mouse[0][1]===a[1]||(t.mouse[1]=n.invert(t.mouse[0]=a)),clearTimeout(t.wheel)
else{if(n.k===r)return
t.mouse=[a,n.invert(a)],or(this),t.start()}oA(),t.wheel=setTimeout(c,150),t.zoom("mouse",i(y(g(n,r),t.mouse[0],t.mouse[1]),t.extent,s))}function c(){t.wheel=null,t.end()}}function w(){if(!n&&e.apply(this,arguments)){var t=m(this,arguments,!0),r=Mn(fn.view).on("mousemove.zoom",c,!0).on("mouseup.zoom",l,!0),o=Re(this),a=fn.clientX,u=fn.clientY
Pn(fn.view),iA(),t.mouse=[o,this.__zoom.invert(o)],or(this),t.start()}function c(){if(oA(),!t.moved){var n=fn.clientX-a,e=fn.clientY-u
t.moved=n*n+e*e>d}t.zoom("mouse",i(y(t.that.__zoom,t.mouse[0]=Re(t.that),t.mouse[1]),t.extent,s))}function l(){r.on("mousemove.zoom mouseup.zoom",null),En(fn.view,t.moved),oA(),t.end()}}function S(){if(e.apply(this,arguments)){var t=this.__zoom,n=Re(this),o=t.invert(n),a=t.k*(fn.shiftKey?.5:2),u=i(y(g(t,a),n,o),r.apply(this,arguments),s)
oA(),c>0?Mn(this).transition().duration(c).call(v,u,n):Mn(this).call(p.transform,u)}}function A(){if(e.apply(this,arguments)){var n,r,i,o,a=fn.touches,u=a.length,s=m(this,arguments,fn.changedTouches.length===u)
for(iA(),r=0;r<u;++r)o=[o=Le(this,a,(i=a[r]).identifier),this.__zoom.invert(o),i.identifier],s.touch0?s.touch1||s.touch0[2]===o[2]||(s.touch1=o,s.taps=0):(s.touch0=o,n=!0,s.taps=1+!!t)
t&&(t=clearTimeout(t)),n&&(s.taps<2&&(t=setTimeout((function(){t=null}),h)),or(this),s.start())}}function M(){if(this.__zooming){var n,e,r,o,a=m(this,arguments),u=fn.changedTouches,c=u.length
for(oA(),t&&(t=clearTimeout(t)),a.taps=0,n=0;n<c;++n)r=Le(this,u,(e=u[n]).identifier),a.touch0&&a.touch0[2]===e.identifier?a.touch0[0]=r:a.touch1&&a.touch1[2]===e.identifier&&(a.touch1[0]=r)
if(e=a.that.__zoom,a.touch1){var l=a.touch0[0],f=a.touch0[1],h=a.touch1[0],d=a.touch1[1],p=(p=h[0]-l[0])*p+(p=h[1]-l[1])*p,_=(_=d[0]-f[0])*_+(_=d[1]-f[1])*_
e=g(e,Math.sqrt(p/_)),r=[(l[0]+h[0])/2,(l[1]+h[1])/2],o=[(f[0]+d[0])/2,(f[1]+d[1])/2]}else{if(!a.touch0)return
r=a.touch0[0],o=a.touch0[1]}a.zoom("touch",i(y(e,r,o),a.extent,s))}}function T(){if(this.__zooming){var t,e,r=m(this,arguments),i=fn.changedTouches,o=i.length
for(iA(),n&&clearTimeout(n),n=setTimeout((function(){n=null}),h),t=0;t<o;++t)e=i[t],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1
if(r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0)r.touch0[1]=this.__zoom.invert(r.touch0[0])
else if(r.end(),2===r.taps){var a=Mn(this).on("dblclick.zoom")
a&&a.apply(this,arguments)}}}return p.transform=function(t,n,e){var r=t.selection?t.selection():t
r.property("__zoom",sA),t!==r?v(t,n,e):r.interrupt().each((function(){m(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()}))},p.scaleBy=function(t,n,e){p.scaleTo(t,(function(){var t=this.__zoom.k,e="function"==typeof n?n.apply(this,arguments):n
return t*e}),e)},p.scaleTo=function(t,n,e){p.transform(t,(function(){var t=r.apply(this,arguments),o=this.__zoom,a=null==e?_(t):"function"==typeof e?e.apply(this,arguments):e,u=o.invert(a),c="function"==typeof n?n.apply(this,arguments):n
return i(y(g(o,c),a,u),t,s)}),e)},p.translateBy=function(t,n,e){p.transform(t,(function(){return i(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),r.apply(this,arguments),s)}))},p.translateTo=function(t,n,e,o){p.transform(t,(function(){var t=r.apply(this,arguments),a=this.__zoom,u=null==o?_(t):"function"==typeof o?o.apply(this,arguments):o
return i(eA.translate(u[0],u[1]).scale(a.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,s)}),o)},x.prototype={start:function(){return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){_n(new tA(p,t,this.that.__zoom),f.apply,f,[t,this.that,this.args])}},p.wheelDelta=function(t){return arguments.length?(o="function"==typeof t?t:JS(+t),p):o},p.filter=function(t){return arguments.length?(e="function"==typeof t?t:JS(!!t),p):e},p.touchable=function(t){return arguments.length?(a="function"==typeof t?t:JS(!!t),p):a},p.extent=function(t){return arguments.length?(r="function"==typeof t?t:JS([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),p):r},p.scaleExtent=function(t){return arguments.length?(u[0]=+t[0],u[1]=+t[1],p):[u[0],u[1]]},p.translateExtent=function(t){return arguments.length?(s[0][0]=+t[0][0],s[1][0]=+t[1][0],s[0][1]=+t[0][1],s[1][1]=+t[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(t){return arguments.length?(i=t,p):i},p.duration=function(t){return arguments.length?(c=+t,p):c},p.interpolate=function(t){return arguments.length?(l=t,p):l},p.on=function(){var t=f.on.apply(f,arguments)
return t===f?p:t},p.clickDistance=function(t){return arguments.length?(d=(t=+t)*t,p):Math.sqrt(d)},p}rA.prototype=nA.prototype},635:(t,n,e)=>{"use strict"
e.r(n),e.d(n,{Adder:()=>S,Delaunay:()=>Iu,FormatSpecifier:()=>Jf,InternMap:()=>T,InternSet:()=>C,Voronoi:()=>Lu,active:()=>dV,arc:()=>eP,area:()=>lP,areaRadial:()=>mP,ascending:()=>i,autoType:()=>Uc,axisBottom:()=>Jt,axisLeft:()=>tn,axisRight:()=>Kt,axisTop:()=>Zt,bin:()=>nt,bisect:()=>f,bisectCenter:()=>l,bisectLeft:()=>c,bisectRight:()=>s,bisector:()=>o,blob:()=>Ml,brush:()=>oo,brushSelection:()=>eo,brushX:()=>ro,brushY:()=>io,buffer:()=>Cl,chord:()=>vo,chordDirected:()=>xo,chordTranspose:()=>mo,cluster:()=>p_,color:()=>oa,contourDensity:()=>yu,contours:()=>lu,count:()=>h,create:()=>wC,creator:()=>Xs,cross:()=>_,csv:()=>Ul,csvFormat:()=>Ec,csvFormatBody:()=>kc,csvFormatRow:()=>Lc,csvFormatRows:()=>Nc,csvFormatValue:()=>Rc,csvParse:()=>Cc,csvParseRows:()=>Pc,cubehelix:()=>Wa,cumsum:()=>v,curveBasis:()=>KP,curveBasisClosed:()=>tE,curveBasisOpen:()=>eE,curveBumpX:()=>iE,curveBumpY:()=>oE,curveBundle:()=>uE,curveCardinal:()=>lE,curveCardinalClosed:()=>hE,curveCardinalOpen:()=>pE,curveCatmullRom:()=>_E,curveCatmullRomClosed:()=>mE,curveCatmullRomOpen:()=>bE,curveLinear:()=>aP,curveLinearClosed:()=>SE,curveMonotoneX:()=>NE,curveMonotoneY:()=>LE,curveNatural:()=>OE,curveStep:()=>DE,curveStepAfter:()=>zE,curveStepBefore:()=>IE,descending:()=>m,deviation:()=>b,difference:()=>Ot,disjoint:()=>Gt,dispatch:()=>Xu,drag:()=>mc,dragDisable:()=>fc,dragEnable:()=>hc,dsv:()=>Yl,dsvFormat:()=>Mc,easeBack:()=>ml,easeBackIn:()=>_l,easeBackInOut:()=>ml,easeBackOut:()=>vl,easeBounce:()=>pl,easeBounceIn:()=>dl,easeBounceInOut:()=>gl,easeBounceOut:()=>pl,easeCircle:()=>fl,easeCircleIn:()=>cl,easeCircleInOut:()=>fl,easeCircleOut:()=>ll,easeCubic:()=>$c,easeCubicIn:()=>Wc,easeCubicInOut:()=>$c,easeCubicOut:()=>Qc,easeElastic:()=>wl,easeElasticIn:()=>bl,easeElasticInOut:()=>Sl,easeElasticOut:()=>wl,easeExp:()=>sl,easeExpIn:()=>al,easeExpInOut:()=>sl,easeExpOut:()=>ul,easeLinear:()=>Hc,easePoly:()=>Jc,easePolyIn:()=>Zc,easePolyInOut:()=>Jc,easePolyOut:()=>Kc,easeQuad:()=>qc,easeQuadIn:()=>Xc,easeQuadInOut:()=>qc,easeQuadOut:()=>jc,easeSin:()=>il,easeSinIn:()=>el,easeSinInOut:()=>il,easeSinOut:()=>rl,every:()=>Et,extent:()=>w,fcumsum:()=>M,filter:()=>Nt,forceCenter:()=>Zl,forceCollide:()=>ff,forceLink:()=>pf,forceManyBody:()=>Hf,forceRadial:()=>Xf,forceSimulation:()=>Bf,forceX:()=>jf,forceY:()=>qf,format:()=>ih,formatDefaultLocale:()=>ch,formatLocale:()=>sh,formatPrefix:()=>oh,formatSpecifier:()=>Kf,fsum:()=>A,geoAlbers:()=>Ey,geoAlbersUsa:()=>ky,geoArea:()=>pd,geoAzimuthalEqualArea:()=>Vy,geoAzimuthalEqualAreaRaw:()=>Ry,geoAzimuthalEquidistant:()=>Gy,geoAzimuthalEquidistantRaw:()=>Oy,geoBounds:()=>Qd,geoCentroid:()=>up,geoCircle:()=>vp,geoClipAntimeridian:()=>kp,geoClipCircle:()=>Np,geoClipExtent:()=>zp,geoClipRectangle:()=>Ip,geoConicConformal:()=>Uy,geoConicConformalRaw:()=>Yy,geoConicEqualArea:()=>Py,geoConicEqualAreaRaw:()=>Cy,geoConicEquidistant:()=>jy,geoConicEquidistantRaw:()=>Xy,geoContains:()=>eg,geoDistance:()=>qp,geoEqualEarth:()=>Jy,geoEqualEarthRaw:()=>Ky,geoEquirectangular:()=>Hy,geoEquirectangularRaw:()=>By,geoGnomonic:()=>n_,geoGnomonicRaw:()=>t_,geoGraticule:()=>ag,geoGraticule10:()=>ug,geoIdentity:()=>e_,geoInterpolate:()=>sg,geoLength:()=>Hp,geoMercator:()=>Iy,geoMercatorRaw:()=>Dy,geoNaturalEarth1:()=>i_,geoNaturalEarth1Raw:()=>r_,geoOrthographic:()=>a_,geoOrthographicRaw:()=>o_,geoPath:()=>fy,geoProjection:()=>Ay,geoProjectionMutator:()=>My,geoRotation:()=>gp,geoStereographic:()=>s_,geoStereographicRaw:()=>u_,geoStream:()=>Hh,geoTransform:()=>hy,geoTransverseMercator:()=>l_,geoTransverseMercatorRaw:()=>c_,gray:()=>Ca,greatest:()=>xt,greatestIndex:()=>bt,group:()=>R,groupSort:()=>B,groups:()=>V,hcl:()=>Ga,hierarchy:()=>y_,histogram:()=>nt,hsl:()=>ya,html:()=>Ql,image:()=>Hl,index:()=>D,indexes:()=>I,interpolate:()=>Ov,interpolateArray:()=>Cv,interpolateBasis:()=>gv,interpolateBasisClosed:()=>yv,interpolateBlues:()=>zT,interpolateBrBG:()=>ZM,interpolateBuGn:()=>gT,interpolateBuPu:()=>_T,interpolateCividis:()=>$T,interpolateCool:()=>cC,interpolateCubehelix:()=>em,interpolateCubehelixDefault:()=>uC,interpolateCubehelixLong:()=>rm,interpolateDate:()=>Ev,interpolateDiscrete:()=>Gv,interpolateGnBu:()=>mT,interpolateGreens:()=>YT,interpolateGreys:()=>BT,interpolateHcl:()=>Jv,interpolateHclLong:()=>tm,interpolateHsl:()=>Qv,interpolateHslLong:()=>$v,interpolateHue:()=>Dv,interpolateInferno:()=>xC,interpolateLab:()=>Zv,interpolateMagma:()=>mC,interpolateNumber:()=>kv,interpolateNumberArray:()=>Mv,interpolateObject:()=>Nv,interpolateOrRd:()=>bT,interpolateOranges:()=>QT,interpolatePRGn:()=>JM,interpolatePiYG:()=>nT,interpolatePlasma:()=>bC,interpolatePuBu:()=>MT,interpolatePuBuGn:()=>ST,interpolatePuOr:()=>rT,interpolatePuRd:()=>CT,interpolatePurples:()=>XT,interpolateRainbow:()=>fC,interpolateRdBu:()=>oT,interpolateRdGy:()=>uT,interpolateRdPu:()=>ET,interpolateRdYlBu:()=>cT,interpolateRdYlGn:()=>fT,interpolateReds:()=>qT,interpolateRgb:()=>bv,interpolateRgbBasis:()=>Sv,interpolateRgbBasisClosed:()=>Av,interpolateRound:()=>Iv,interpolateSinebow:()=>gC,interpolateSpectral:()=>dT,interpolateString:()=>Vv,interpolateTransformCss:()=>Hv,interpolateTransformSvg:()=>Xv,interpolateTurbo:()=>yC,interpolateViridis:()=>vC,interpolateWarm:()=>sC,interpolateYlGn:()=>RT,interpolateYlGnBu:()=>NT,interpolateYlOrBr:()=>OT,interpolateYlOrRd:()=>DT,interpolateZoom:()=>qv,interrupt:()=>LR,intersection:()=>It,interval:()=>MR,isoFormat:()=>rR,isoParse:()=>oR,json:()=>jl,lab:()=>Pa,lch:()=>Oa,least:()=>vt,leastIndex:()=>mt,line:()=>cP,lineRadial:()=>vP,linkHorizontal:()=>CP,linkRadial:()=>EP,linkVertical:()=>PP,local:()=>AC,map:()=>Lt,matcher:()=>Zu,max:()=>et,maxIndex:()=>lt,mean:()=>ft,median:()=>ht,merge:()=>dt,min:()=>rt,minIndex:()=>pt,namespace:()=>hs,namespaces:()=>fs,nice:()=>J,now:()=>yR,pack:()=>Y_,packEnclose:()=>w_,packSiblings:()=>O_,pairs:()=>gt,partition:()=>q_,path:()=>hm,permute:()=>Y,pie:()=>dP,piecewise:()=>im,pointRadial:()=>xP,pointer:()=>sc,pointers:()=>TC,polygonArea:()=>dm,polygonCentroid:()=>pm,polygonContains:()=>vm,polygonHull:()=>_m,polygonLength:()=>mm,precisionFixed:()=>lh,precisionPrefix:()=>fh,precisionRound:()=>hh,quadtree:()=>Am,quantile:()=>at,quantileSorted:()=>ut,quantize:()=>om,quickselect:()=>it,radialArea:()=>mP,radialLine:()=>vP,randomBates:()=>Vm,randomBernoulli:()=>Dm,randomBeta:()=>Fm,randomBinomial:()=>Ym,randomCauchy:()=>Bm,randomExponential:()=>Om,randomGamma:()=>zm,randomGeometric:()=>Im,randomInt:()=>km,randomIrwinHall:()=>Rm,randomLcg:()=>Qm,randomLogNormal:()=>Lm,randomLogistic:()=>Hm,randomNormal:()=>Nm,randomPareto:()=>Gm,randomPoisson:()=>Xm,randomUniform:()=>Em,randomWeibull:()=>Um,range:()=>_t,reduce:()=>Rt,reverse:()=>Vt,rgb:()=>ca,ribbon:()=>zo,ribbonArrow:()=>Fo,rollup:()=>O,rollups:()=>G,scaleBand:()=>nx,scaleDiverging:()=>$A,scaleDivergingLog:()=>ZA,scaleDivergingPow:()=>JA,scaleDivergingSqrt:()=>tM,scaleDivergingSymlog:()=>KA,scaleIdentity:()=>Vb,scaleImplicit:()=>Jm,scaleLinear:()=>Rb,scaleLog:()=>Bb,scaleOrdinal:()=>tx,scalePoint:()=>rx,scalePow:()=>Kb,scaleQuantile:()=>cw,scaleQuantize:()=>lw,scaleRadial:()=>ew,scaleSequential:()=>UA,scaleSequentialLog:()=>BA,scaleSequentialPow:()=>XA,scaleSequentialQuantile:()=>qA,scaleSequentialSqrt:()=>jA,scaleSequentialSymlog:()=>HA,scaleSqrt:()=>Jb,scaleSymlog:()=>qb,scaleThreshold:()=>fw,scaleTime:()=>IA,scaleUtc:()=>zA,scan:()=>wt,schemeAccent:()=>rM,schemeBlues:()=>IT,schemeBrBG:()=>$M,schemeBuGn:()=>pT,schemeBuPu:()=>yT,schemeCategory10:()=>eM,schemeDark2:()=>iM,schemeGnBu:()=>vT,schemeGreens:()=>FT,schemeGreys:()=>UT,schemeOrRd:()=>xT,schemeOranges:()=>WT,schemePRGn:()=>KM,schemePaired:()=>oM,schemePastel1:()=>aM,schemePastel2:()=>uM,schemePiYG:()=>tT,schemePuBu:()=>AT,schemePuBuGn:()=>wT,schemePuOr:()=>eT,schemePuRd:()=>TT,schemePurples:()=>HT,schemeRdBu:()=>iT,schemeRdGy:()=>aT,schemeRdPu:()=>PT,schemeRdYlBu:()=>sT,schemeRdYlGn:()=>lT,schemeReds:()=>jT,schemeSet1:()=>sM,schemeSet2:()=>cM,schemeSet3:()=>lM,schemeSpectral:()=>hT,schemeTableau10:()=>fM,schemeYlGn:()=>LT,schemeYlGnBu:()=>kT,schemeYlOrBr:()=>VT,schemeYlOrRd:()=>GT,select:()=>ac,selectAll:()=>CC,selection:()=>oc,selector:()=>qu,selectorAll:()=>$u,shuffle:()=>St,shuffler:()=>At,some:()=>kt,sort:()=>U,stack:()=>HE,stackOffsetDiverging:()=>jE,stackOffsetExpand:()=>XE,stackOffsetNone:()=>FE,stackOffsetSilhouette:()=>qE,stackOffsetWiggle:()=>WE,stackOrderAppearance:()=>QE,stackOrderAscending:()=>ZE,stackOrderDescending:()=>JE,stackOrderInsideOut:()=>tk,stackOrderNone:()=>YE,stackOrderReverse:()=>nk,stratify:()=>K_,style:()=>Ss,subset:()=>Ft,sum:()=>Mt,superset:()=>zt,svg:()=>$l,symbol:()=>WP,symbolCircle:()=>kP,symbolCross:()=>NP,symbolDiamond:()=>VP,symbolSquare:()=>zP,symbolStar:()=>IP,symbolTriangle:()=>YP,symbolWye:()=>jP,symbols:()=>qP,text:()=>zl,thresholdFreedmanDiaconis:()=>st,thresholdScott:()=>ct,thresholdSturges:()=>tt,tickFormat:()=>Nb,tickIncrement:()=>Z,tickStep:()=>K,ticks:()=>$,timeDay:()=>Ak,timeDays:()=>Mk,timeFormat:()=>RN,timeFormatDefaultLocale:()=>tR,timeFormatLocale:()=>NN,timeFriday:()=>Lk,timeFridays:()=>zk,timeHour:()=>bk,timeHours:()=>wk,timeInterval:()=>ik,timeMillisecond:()=>ak,timeMilliseconds:()=>uk,timeMinute:()=>vk,timeMinutes:()=>mk,timeMonday:()=>Pk,timeMondays:()=>Ok,timeMonth:()=>Uk,timeMonths:()=>Bk,timeParse:()=>VN,timeSaturday:()=>Rk,timeSaturdays:()=>Fk,timeSecond:()=>gk,timeSeconds:()=>yk,timeSunday:()=>Ck,timeSundays:()=>Vk,timeThursday:()=>Nk,timeThursdays:()=>Ik,timeTickInterval:()=>CN,timeTicks:()=>TN,timeTuesday:()=>Ek,timeTuesdays:()=>Gk,timeWednesday:()=>kk,timeWednesdays:()=>Dk,timeWeek:()=>Ck,timeWeeks:()=>Vk,timeYear:()=>Xk,timeYears:()=>jk,timeout:()=>AR,timer:()=>mR,timerFlush:()=>xR,transition:()=>uV,transpose:()=>Tt,tree:()=>ov,treemap:()=>lv,treemapBinary:()=>fv,treemapDice:()=>j_,treemapResquarify:()=>dv,treemapSlice:()=>av,treemapSliceDice:()=>hv,treemapSquarify:()=>cv,tsv:()=>Bl,tsvFormat:()=>Dc,tsvFormatBody:()=>Ic,tsvFormatRow:()=>Fc,tsvFormatRows:()=>zc,tsvFormatValue:()=>Yc,tsvParse:()=>Oc,tsvParseRows:()=>Gc,union:()=>Yt,utcDay:()=>tN,utcDays:()=>nN,utcFormat:()=>ON,utcFriday:()=>sN,utcFridays:()=>gN,utcHour:()=>Zk,utcHours:()=>Kk,utcMillisecond:()=>ak,utcMilliseconds:()=>uk,utcMinute:()=>Wk,utcMinutes:()=>Qk,utcMonday:()=>iN,utcMondays:()=>fN,utcMonth:()=>vN,utcMonths:()=>mN,utcParse:()=>GN,utcSaturday:()=>cN,utcSaturdays:()=>yN,utcSecond:()=>gk,utcSeconds:()=>yk,utcSunday:()=>rN,utcSundays:()=>lN,utcThursday:()=>uN,utcThursdays:()=>pN,utcTickInterval:()=>MN,utcTicks:()=>AN,utcTuesday:()=>oN,utcTuesdays:()=>hN,utcWednesday:()=>aN,utcWednesdays:()=>dN,utcWeek:()=>rN,utcWeeks:()=>lN,utcYear:()=>bN,utcYears:()=>wN,variance:()=>x,version:()=>r,window:()=>ms,xml:()=>Wl,zip:()=>Pt,zoom:()=>ZD,zoomIdentity:()=>YD,zoomTransform:()=>UD})
var r="6.6.0"
function i(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function o(t){let n=t,e=t
function r(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){const o=r+i>>>1
e(t[o],n)<0?r=o+1:i=o}return r}return 1===t.length&&(n=(n,e)=>t(n)-e,e=function(t){return(n,e)=>i(t(n),e)}(t)),{left:r,center:function(t,e,i,o){null==i&&(i=0),null==o&&(o=t.length)
const a=r(t,e,i,o-1)
return a>i&&n(t[a-1],e)>-n(t[a],e)?a-1:a},right:function(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){const o=r+i>>>1
e(t[o],n)>0?i=o:r=o+1}return r}}}function a(t){return null===t?NaN:+t}const u=o(i),s=u.right,c=u.left,l=o(a).center,f=s
function h(t,n){let e=0
if(void 0===n)for(let r of t)null!=r&&(r=+r)>=r&&++e
else{let r=-1
for(let i of t)null!=(i=n(i,++r,t))&&(i=+i)>=i&&++e}return e}function d(t){return 0|t.length}function p(t){return!(t>0)}function g(t){return"object"!=typeof t||"length"in t?t:Array.from(t)}function y(t){return n=>t(...n)}function _(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e]
const r="function"==typeof n[n.length-1]&&y(n.pop()),i=(n=n.map(g)).map(d),o=n.length-1,a=new Array(o+1).fill(0),u=[]
if(o<0||i.some(p))return u
for(;;){u.push(a.map(((t,e)=>n[e][t])))
let t=o
for(;++a[t]===i[t];){if(0===t)return r?u.map(r):u
a[t--]=0}}}function v(t,n){var e=0,r=0
return Float64Array.from(t,void 0===n?t=>e+=+t||0:i=>e+=+n(i,r++,t)||0)}function m(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function x(t,n){let e,r=0,i=0,o=0
if(void 0===n)for(let a of t)null!=a&&(a=+a)>=a&&(e=a-i,i+=e/++r,o+=e*(a-i))
else{let a=-1
for(let u of t)null!=(u=n(u,++a,t))&&(u=+u)>=u&&(e=u-i,i+=e/++r,o+=e*(u-i))}if(r>1)return o/(r-1)}function b(t,n){const e=x(t,n)
return e?Math.sqrt(e):e}function w(t,n){let e,r
if(void 0===n)for(const i of t)null!=i&&(void 0===e?i>=i&&(e=r=i):(e>i&&(e=i),r<i&&(r=i)))
else{let i=-1
for(let o of t)null!=(o=n(o,++i,t))&&(void 0===e?o>=o&&(e=r=o):(e>o&&(e=o),r<o&&(r=o)))}return[e,r]}class S{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials
let e=0
for(let r=0;r<this._n&&r<32;r++){const i=n[r],o=t+i,a=Math.abs(t)<Math.abs(i)?t-(o-i):i-(o-t)
a&&(n[e++]=a),t=o}return n[e]=t,this._n=e+1,this}valueOf(){const t=this._partials
let n,e,r,i=this._n,o=0
if(i>0){for(o=t[--i];i>0&&(n=o,e=t[--i],o=n+e,r=e-(o-n),!r););i>0&&(r<0&&t[i-1]<0||r>0&&t[i-1]>0)&&(e=2*r,n=o+e,e==n-o&&(o=n))}return o}}function A(t,n){const e=new S
if(void 0===n)for(let r of t)(r=+r)&&e.add(r)
else{let r=-1
for(let i of t)(i=+n(i,++r,t))&&e.add(i)}return+e}function M(t,n){const e=new S
let r=-1
return Float64Array.from(t,void 0===n?t=>e.add(+t||0):i=>e.add(+n(i,++r,t)||0))}class T extends Map{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N
if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const[e,r]of t)this.set(e,r)}get(t){return super.get(P(this,t))}has(t){return super.has(P(this,t))}set(t,n){return super.set(E(this,t),n)}delete(t){return super.delete(k(this,t))}}class C extends Set{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N
if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const e of t)this.add(e)}has(t){return super.has(P(this,t))}add(t){return super.add(E(this,t))}delete(t){return super.delete(k(this,t))}}function P(t,n){let{_intern:e,_key:r}=t
const i=r(n)
return e.has(i)?e.get(i):n}function E(t,n){let{_intern:e,_key:r}=t
const i=r(n)
return e.has(i)?e.get(i):(e.set(i,n),n)}function k(t,n){let{_intern:e,_key:r}=t
const i=r(n)
return e.has(i)&&(n=e.get(n),e.delete(i)),n}function N(t){return null!==t&&"object"==typeof t?t.valueOf():t}function L(t){return t}function R(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
return F(t,L,L,e)}function V(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
return F(t,Array.from,L,e)}function O(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i]
return F(t,L,n,r)}function G(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i]
return F(t,Array.from,n,r)}function D(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
return F(t,L,z,e)}function I(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
return F(t,Array.from,z,e)}function z(t){if(1!==t.length)throw new Error("duplicate key")
return t[0]}function F(t,n,e,r){return function t(i,o){if(o>=r.length)return e(i)
const a=new T,u=r[o++]
let s=-1
for(const n of i){const t=u(n,++s,i),e=a.get(t)
e?e.push(n):a.set(t,[n])}for(const[n,e]of a)a.set(n,t(e,o))
return n(a)}(t,0)}function Y(t,n){return Array.from(n,(n=>t[n]))}function U(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable")
t=Array.from(t)
let[o=i]=e
if(1===o.length||e.length>1){const n=Uint32Array.from(t,((t,n)=>n))
return e.length>1?(e=e.map((n=>t.map(n))),n.sort(((t,n)=>{for(const r of e){const e=i(r[t],r[n])
if(e)return e}}))):(o=t.map(o),n.sort(((t,n)=>i(o[t],o[n])))),Y(t,n)}return t.sort(o)}function B(t,n,e){return(1===n.length?U(O(t,n,e),((t,n)=>{let[e,r]=t,[o,a]=n
return i(r,a)||i(e,o)})):U(R(t,e),((t,e)=>{let[r,o]=t,[a,u]=e
return n(o,u)||i(r,a)}))).map((t=>{let[n]=t
return n}))}var H=Array.prototype,X=H.slice
function j(t){return function(){return t}}H.map
var q=Math.sqrt(50),W=Math.sqrt(10),Q=Math.sqrt(2)
function $(t,n,e){var r,i,o,a,u=-1
if(e=+e,(t=+t)==(n=+n)&&e>0)return[t]
if((r=n<t)&&(i=t,t=n,n=i),0===(a=Z(t,n,e))||!isFinite(a))return[]
if(a>0){let e=Math.round(t/a),r=Math.round(n/a)
for(e*a<t&&++e,r*a>n&&--r,o=new Array(i=r-e+1);++u<i;)o[u]=(e+u)*a}else{a=-a
let e=Math.round(t*a),r=Math.round(n*a)
for(e/a<t&&++e,r/a>n&&--r,o=new Array(i=r-e+1);++u<i;)o[u]=(e+u)/a}return r&&o.reverse(),o}function Z(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i)
return i>=0?(o>=q?10:o>=W?5:o>=Q?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=q?10:o>=W?5:o>=Q?2:1)}function K(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i
return o>=q?i*=10:o>=W?i*=5:o>=Q&&(i*=2),n<t?-i:i}function J(t,n,e){let r
for(;;){const i=Z(t,n,e)
if(i===r||0===i||!isFinite(i))return[t,n]
i>0?(t=Math.floor(t/i)*i,n=Math.ceil(n/i)*i):i<0&&(t=Math.ceil(t*i)/i,n=Math.floor(n*i)/i),r=i}}function tt(t){return Math.ceil(Math.log(h(t))/Math.LN2)+1}function nt(){var t=L,n=w,e=tt
function r(r){Array.isArray(r)||(r=Array.from(r))
var i,o,a=r.length,u=new Array(a)
for(i=0;i<a;++i)u[i]=t(r[i],i,r)
var s=n(u),c=s[0],l=s[1],h=e(u,c,l)
if(!Array.isArray(h)){const t=l,e=+h
if(n===w&&([c,l]=J(c,l,e)),(h=$(c,l,e))[h.length-1]>=l)if(t>=l&&n===w){const t=Z(c,l,e)
isFinite(t)&&(t>0?l=(Math.floor(l/t)+1)*t:t<0&&(l=(Math.ceil(l*-t)+1)/-t))}else h.pop()}for(var d=h.length;h[0]<=c;)h.shift(),--d
for(;h[d-1]>l;)h.pop(),--d
var p,g=new Array(d+1)
for(i=0;i<=d;++i)(p=g[i]=[]).x0=i>0?h[i-1]:c,p.x1=i<d?h[i]:l
for(i=0;i<a;++i)c<=(o=u[i])&&o<=l&&g[f(h,o,0,d)].push(r[i])
return g}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:j(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:j([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?j(X.call(t)):j(t),r):e},r}function et(t,n){let e
if(void 0===n)for(const r of t)null!=r&&(e<r||void 0===e&&r>=r)&&(e=r)
else{let r=-1
for(let i of t)null!=(i=n(i,++r,t))&&(e<i||void 0===e&&i>=i)&&(e=i)}return e}function rt(t,n){let e
if(void 0===n)for(const r of t)null!=r&&(e>r||void 0===e&&r>=r)&&(e=r)
else{let r=-1
for(let i of t)null!=(i=n(i,++r,t))&&(e>i||void 0===e&&i>=i)&&(e=i)}return e}function it(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length-1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i
for(;r>e;){if(r-e>600){const i=r-e+1,a=n-e+1,u=Math.log(i),s=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*s*(i-s)/i)*(a-i/2<0?-1:1)
it(t,n,Math.max(e,Math.floor(n-a*s/i+c)),Math.min(r,Math.floor(n+(i-a)*s/i+c)),o)}const i=t[n]
let a=e,u=r
for(ot(t,e,n),o(t[r],i)>0&&ot(t,e,r);a<u;){for(ot(t,a,u),++a,--u;o(t[a],i)<0;)++a
for(;o(t[u],i)>0;)--u}0===o(t[e],i)?ot(t,e,u):(++u,ot(t,u,r)),u<=n&&(e=u+1),n<=u&&(r=u-1)}return t}function ot(t,n,e){const r=t[n]
t[n]=t[e],t[e]=r}function at(t,n,e){if(t=Float64Array.from(function*(t,n){if(void 0===n)for(let e of t)null!=e&&(e=+e)>=e&&(yield e)
else{let e=-1
for(let r of t)null!=(r=n(r,++e,t))&&(r=+r)>=r&&(yield r)}}(t,e)),r=t.length){if((n=+n)<=0||r<2)return rt(t)
if(n>=1)return et(t)
var r,i=(r-1)*n,o=Math.floor(i),a=et(it(t,o).subarray(0,o+1))
return a+(rt(t.subarray(o+1))-a)*(i-o)}}function ut(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a
if(r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t)
if(n>=1)return+e(t[r-1],r-1,t)
var r,i=(r-1)*n,o=Math.floor(i),u=+e(t[o],o,t),s=+e(t[o+1],o+1,t)
return u+(s-u)*(i-o)}}function st(t,n,e){return Math.ceil((e-n)/(2*(at(t,.75)-at(t,.25))*Math.pow(h(t),-1/3)))}function ct(t,n,e){return Math.ceil((e-n)/(3.5*b(t)*Math.pow(h(t),-1/3)))}function lt(t,n){let e,r=-1,i=-1
if(void 0===n)for(const o of t)++i,null!=o&&(e<o||void 0===e&&o>=o)&&(e=o,r=i)
else for(let o of t)null!=(o=n(o,++i,t))&&(e<o||void 0===e&&o>=o)&&(e=o,r=i)
return r}function ft(t,n){let e=0,r=0
if(void 0===n)for(let i of t)null!=i&&(i=+i)>=i&&(++e,r+=i)
else{let i=-1
for(let o of t)null!=(o=n(o,++i,t))&&(o=+o)>=o&&(++e,r+=o)}if(e)return r/e}function ht(t,n){return at(t,.5,n)}function dt(t){return Array.from(function*(t){for(const n of t)yield*n}(t))}function pt(t,n){let e,r=-1,i=-1
if(void 0===n)for(const o of t)++i,null!=o&&(e>o||void 0===e&&o>=o)&&(e=o,r=i)
else for(let o of t)null!=(o=n(o,++i,t))&&(e>o||void 0===e&&o>=o)&&(e=o,r=i)
return r}function gt(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:yt
const e=[]
let r,i=!1
for(const o of t)i&&e.push(n(r,o)),r=o,i=!0
return e}function yt(t,n){return[t,n]}function _t(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e
for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e
return o}function vt(t){let n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r=!1
if(1===e.length){let o
for(const a of t){const t=e(a);(r?i(t,o)<0:0===i(t,t))&&(n=a,o=t,r=!0)}}else for(const i of t)(r?e(i,n)<0:0===e(i,i))&&(n=i,r=!0)
return n}function mt(t){let n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i
if(1===e.length)return pt(t,e)
let r=-1,o=-1
for(const i of t)++o,(r<0?0===e(i,i):e(i,n)<0)&&(n=i,r=o)
return r}function xt(t){let n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r=!1
if(1===e.length){let o
for(const a of t){const t=e(a);(r?i(t,o)>0:0===i(t,t))&&(n=a,o=t,r=!0)}}else for(const i of t)(r?e(i,n)>0:0===e(i,i))&&(n=i,r=!0)
return n}function bt(t){let n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i
if(1===e.length)return lt(t,e)
let r=-1,o=-1
for(const i of t)++o,(r<0?0===e(i,i):e(i,n)>0)&&(n=i,r=o)
return r}function wt(t,n){const e=mt(t,n)
return e<0?void 0:e}const St=At(Math.random)
function At(t){return function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length,i=r-(e=+e)
for(;i;){const r=t()*i--|0,o=n[i+e]
n[i+e]=n[r+e],n[r+e]=o}return n}}function Mt(t,n){let e=0
if(void 0===n)for(let r of t)(r=+r)&&(e+=r)
else{let r=-1
for(let i of t)(i=+n(i,++r,t))&&(e+=i)}return e}function Tt(t){if(!(i=t.length))return[]
for(var n=-1,e=rt(t,Ct),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n]
return r}function Ct(t){return t.length}function Pt(){return Tt(arguments)}function Et(t,n){if("function"!=typeof n)throw new TypeError("test is not a function")
let e=-1
for(const r of t)if(!n(r,++e,t))return!1
return!0}function kt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function")
let e=-1
for(const r of t)if(n(r,++e,t))return!0
return!1}function Nt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function")
const e=[]
let r=-1
for(const i of t)n(i,++r,t)&&e.push(i)
return e}function Lt(t,n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable")
if("function"!=typeof n)throw new TypeError("mapper is not a function")
return Array.from(t,((e,r)=>n(e,r,t)))}function Rt(t,n,e){if("function"!=typeof n)throw new TypeError("reducer is not a function")
const r=t[Symbol.iterator]()
let i,o,a=-1
if(arguments.length<3){if(({done:i,value:e}=r.next()),i)return;++a}for(;({done:i,value:o}=r.next()),!i;)e=n(e,o,++a,t)
return e}function Vt(t){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable")
return Array.from(t).reverse()}function Ot(t){t=new Set(t)
for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
for(const i of e)for(const n of i)t.delete(n)
return t}function Gt(t,n){const e=n[Symbol.iterator](),r=new Set
for(const i of t){if(r.has(i))return!1
let t,n
for(;({value:t,done:n}=e.next())&&!n;){if(Object.is(i,t))return!1
r.add(t)}}return!0}function Dt(t){return t instanceof Set?t:new Set(t)}function It(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
t=new Set(t),e=e.map(Dt)
t:for(const i of t)for(const n of e)if(!n.has(i)){t.delete(i)
continue t}return t}function zt(t,n){const e=t[Symbol.iterator](),r=new Set
for(const i of n){if(r.has(i))continue
let t,n
for(;({value:t,done:n}=e.next());){if(n)return!1
if(r.add(t),Object.is(i,t))break}}return!0}function Ft(t,n){return zt(n,t)}function Yt(){const t=new Set
for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r]
for(const i of e)for(const n of i)t.add(n)
return t}var Ut=Array.prototype.slice
function Bt(t){return t}var Ht=1e-6
function Xt(t){return"translate("+t+",0)"}function jt(t){return"translate(0,"+t+")"}function qt(t){return n=>+t(n)}function Wt(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),e=>+t(e)+n}function Qt(){return!this.__axis}function $t(t,n){var e=[],r=null,i=null,o=6,a=6,u=3,s="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c=1===t||4===t?-1:1,l=4===t||2===t?"x":"y",f=1===t||3===t?Xt:jt
function h(h){var d=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,p=null==i?n.tickFormat?n.tickFormat.apply(n,e):Bt:i,g=Math.max(o,0)+u,y=n.range(),_=+y[0]+s,v=+y[y.length-1]+s,m=(n.bandwidth?Wt:qt)(n.copy(),s),x=h.selection?h.selection():h,b=x.selectAll(".domain").data([null]),w=x.selectAll(".tick").data(d,n).order(),S=w.exit(),A=w.enter().append("g").attr("class","tick"),M=w.select("line"),T=w.select("text")
b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(A),M=M.merge(A.append("line").attr("stroke","currentColor").attr(l+"2",c*o)),T=T.merge(A.append("text").attr("fill","currentColor").attr(l,c*g).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),h!==x&&(b=b.transition(h),w=w.transition(h),M=M.transition(h),T=T.transition(h),S=S.transition(h).attr("opacity",Ht).attr("transform",(function(t){return isFinite(t=m(t))?f(t+s):this.getAttribute("transform")})),A.attr("opacity",Ht).attr("transform",(function(t){var n=this.parentNode.__axis
return f((n&&isFinite(n=n(t))?n:m(t))+s)}))),S.remove(),b.attr("d",4===t||2===t?a?"M"+c*a+","+_+"H"+s+"V"+v+"H"+c*a:"M"+s+","+_+"V"+v:a?"M"+_+","+c*a+"V"+s+"H"+v+"V"+c*a:"M"+_+","+s+"H"+v),w.attr("opacity",1).attr("transform",(function(t){return f(m(t)+s)})),M.attr(l+"2",c*o),T.attr(l,c*g).text(p),x.filter(Qt).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),x.each((function(){this.__axis=m}))}return h.scale=function(t){return arguments.length?(n=t,h):n},h.ticks=function(){return e=Ut.call(arguments),h},h.tickArguments=function(t){return arguments.length?(e=null==t?[]:Ut.call(t),h):e.slice()},h.tickValues=function(t){return arguments.length?(r=null==t?null:Ut.call(t),h):r&&r.slice()},h.tickFormat=function(t){return arguments.length?(i=t,h):i},h.tickSize=function(t){return arguments.length?(o=a=+t,h):o},h.tickSizeInner=function(t){return arguments.length?(o=+t,h):o},h.tickSizeOuter=function(t){return arguments.length?(a=+t,h):a},h.tickPadding=function(t){return arguments.length?(u=+t,h):u},h.offset=function(t){return arguments.length?(s=+t,h):s},h}function Zt(t){return $t(1,t)}function Kt(t){return $t(2,t)}function Jt(t){return $t(3,t)}function tn(t){return $t(4,t)}var nn={value:()=>{}}
function en(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t)
r[t]=[]}return new rn(r)}function rn(t){this._=t}function on(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".")
if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t)
return{type:t,name:e}}))}function an(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function un(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=nn,t=t.slice(0,r).concat(t.slice(r+1))
break}return null!=e&&t.push({name:n,value:e}),t}rn.prototype=en.prototype={constructor:rn,on:function(t,n){var e,r=this._,i=on(t+"",r),o=-1,a=i.length
if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n)
for(;++o<a;)if(e=(t=i[o]).type)r[e]=un(r[e],t.name,n)
else if(null==n)for(e in r)r[e]=un(r[e],t.name,null)
return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=an(r[e],t.name)))return e},copy:function(){var t={},n=this._
for(var e in n)t[e]=n[e].slice()
return new rn(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2]
if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}}
const sn=en
function cn(){}function ln(t){return null==t?cn:function(){return this.querySelector(t)}}function fn(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function hn(){return[]}function dn(t){return null==t?hn:function(){return this.querySelectorAll(t)}}function pn(t){return function(){return this.matches(t)}}function gn(t){return function(n){return n.matches(t)}}var yn=Array.prototype.find
function _n(){return this.firstElementChild}var vn=Array.prototype.filter
function mn(){return this.children}function xn(t){return new Array(t.length)}function bn(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function wn(t){return function(){return t}}function Sn(t,n,e,r,i,o){for(var a,u=0,s=n.length,c=o.length;u<c;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new bn(t,o[u])
for(;u<s;++u)(a=n[u])&&(i[u]=a)}function An(t,n,e,r,i,o,a){var u,s,c,l=new Map,f=n.length,h=o.length,d=new Array(f)
for(u=0;u<f;++u)(s=n[u])&&(d[u]=c=a.call(s,s.__data__,u,n)+"",l.has(c)?i[u]=s:l.set(c,s))
for(u=0;u<h;++u)c=a.call(t,o[u],u,o)+"",(s=l.get(c))?(r[u]=s,s.__data__=o[u],l.delete(c)):e[u]=new bn(t,o[u])
for(u=0;u<f;++u)(s=n[u])&&l.get(d[u])===s&&(i[u]=s)}function Mn(t){return t.__data__}function Tn(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}bn.prototype={constructor:bn,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}
var Cn="http://www.w3.org/1999/xhtml"
const Pn={svg:"http://www.w3.org/2000/svg",xhtml:Cn,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}
function En(t){var n=t+="",e=n.indexOf(":")
return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),Pn.hasOwnProperty(n)?{space:Pn[n],local:t}:t}function kn(t){return function(){this.removeAttribute(t)}}function Nn(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ln(t,n){return function(){this.setAttribute(t,n)}}function Rn(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function Vn(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function On(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Gn(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Dn(t){return function(){this.style.removeProperty(t)}}function In(t,n,e){return function(){this.style.setProperty(t,n,e)}}function zn(t,n,e){return function(){var r=n.apply(this,arguments)
null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Fn(t,n){return t.style.getPropertyValue(n)||Gn(t).getComputedStyle(t,null).getPropertyValue(n)}function Yn(t){return function(){delete this[t]}}function Un(t,n){return function(){this[t]=n}}function Bn(t,n){return function(){var e=n.apply(this,arguments)
null==e?delete this[t]:this[t]=e}}function Hn(t){return t.trim().split(/^|\s+/)}function Xn(t){return t.classList||new jn(t)}function jn(t){this._node=t,this._names=Hn(t.getAttribute("class")||"")}function qn(t,n){for(var e=Xn(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Wn(t,n){for(var e=Xn(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function Qn(t){return function(){qn(this,t)}}function $n(t){return function(){Wn(this,t)}}function Zn(t,n){return function(){(n.apply(this,arguments)?qn:Wn)(this,t)}}function Kn(){this.textContent=""}function Jn(t){return function(){this.textContent=t}}function te(t){return function(){var n=t.apply(this,arguments)
this.textContent=null==n?"":n}}function ne(){this.innerHTML=""}function ee(t){return function(){this.innerHTML=t}}function re(t){return function(){var n=t.apply(this,arguments)
this.innerHTML=null==n?"":n}}function ie(){this.nextSibling&&this.parentNode.appendChild(this)}function oe(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ae(t){return function(){var n=this.ownerDocument,e=this.namespaceURI
return e===Cn&&n.documentElement.namespaceURI===Cn?n.createElement(t):n.createElementNS(e,t)}}function ue(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function se(t){var n=En(t)
return(n.local?ue:ae)(n)}function ce(){return null}function le(){var t=this.parentNode
t&&t.removeChild(this)}function fe(){var t=this.cloneNode(!1),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function he(){var t=this.cloneNode(!0),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function de(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".")
return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function pe(t){return function(){var n=this.__on
if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function ge(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n)
if(i)for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n)
this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function ye(t,n,e){var r=Gn(t),i=r.CustomEvent
"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function _e(t,n){return function(){return ye(this,t,n)}}function ve(t,n){return function(){return ye(this,t,n.apply(this,arguments))}}jn.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t)
n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}}
var me=[null]
function xe(t,n){this._groups=t,this._parents=n}function be(){return new xe([[document.documentElement]],me)}xe.prototype=be.prototype={constructor:xe,select:function(t){"function"!=typeof t&&(t=ln(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],s=u.length,c=r[i]=new Array(s),l=0;l<s;++l)(o=u[l])&&(a=t.call(o,o.__data__,l,u))&&("__data__"in o&&(a.__data__=o.__data__),c[l]=a)
return new xe(r,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){var n=t.apply(this,arguments)
return null==n?[]:fn(n)}}(t):dn(t)
for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],s=u.length,c=0;c<s;++c)(a=u[c])&&(r.push(t.call(a,a.__data__,c,u)),i.push(a))
return new xe(r,i)},selectChild:function(t){return this.select(null==t?_n:function(t){return function(){return yn.call(this.children,t)}}("function"==typeof t?t:gn(t)))},selectChildren:function(t){return this.selectAll(null==t?mn:function(t){return function(){return vn.call(this.children,t)}}("function"==typeof t?t:gn(t)))},filter:function(t){"function"!=typeof t&&(t=pn(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o)
return new xe(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,Mn)
var e=n?An:Sn,r=this._parents,i=this._groups
"function"!=typeof t&&(t=wn(t))
for(var o=i.length,a=new Array(o),u=new Array(o),s=new Array(o),c=0;c<o;++c){var l=r[c],f=i[c],h=f.length,d=fn(t.call(l,l&&l.__data__,c,r)),p=d.length,g=u[c]=new Array(p),y=a[c]=new Array(p),_=s[c]=new Array(h)
e(l,f,g,y,_,d,n)
for(var v,m,x=0,b=0;x<p;++x)if(v=g[x]){for(x>=b&&(b=x+1);!(m=y[b])&&++b<p;);v._next=m||null}}return(a=new xe(a,r))._enter=u,a._exit=s,a},enter:function(){return new xe(this._enter||this._groups.map(xn),this._parents)},exit:function(){return new xe(this._exit||this._groups.map(xn),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit()
return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){if(!(t instanceof xe))throw new Error("invalid merge")
for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],l=e[u],f=c.length,h=a[u]=new Array(f),d=0;d<f;++d)(s=c[d]||l[d])&&(h[d]=s)
for(;u<r;++u)a[u]=n[u]
return new xe(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r)
return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=Tn)
for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],s=u.length,c=i[o]=new Array(s),l=0;l<s;++l)(a=u[l])&&(c[l]=a)
c.sort(n)}return new xe(i,this._parents).order()},call:function(){var t=arguments[0]
return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i]
if(a)return a}return null},size:function(){let t=0
for(const n of this)++t
return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o)
return this},attr:function(t,n){var e=En(t)
if(arguments.length<2){var r=this.node()
return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?Nn:kn:"function"==typeof n?e.local?On:Vn:e.local?Rn:Ln)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?Dn:"function"==typeof n?zn:In)(t,n,null==e?"":e)):Fn(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?Yn:"function"==typeof n?Bn:Un)(t,n)):this.node()[t]},classed:function(t,n){var e=Hn(t+"")
if(arguments.length<2){for(var r=Xn(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1
return!0}return this.each(("function"==typeof n?Zn:n?Qn:$n)(e,n))},text:function(t){return arguments.length?this.each(null==t?Kn:("function"==typeof t?te:Jn)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?ne:("function"==typeof t?re:ee)(t)):this.node().innerHTML},raise:function(){return this.each(ie)},lower:function(){return this.each(oe)},append:function(t){var n="function"==typeof t?t:se(t)
return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:se(t),r=null==n?ce:"function"==typeof n?n:ln(n)
return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(le)},clone:function(t){return this.select(t?he:fe)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=de(t+""),a=o.length
if(!(arguments.length<2)){for(u=n?ge:pe,r=0;r<a;++r)this.each(u(o[r],n,e))
return this}var u=this.node().__on
if(u)for(var s,c=0,l=u.length;c<l;++c)for(r=0,s=u[c];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?ve:_e)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}}
const we=be
function Se(t){return"string"==typeof t?new xe([[document.querySelector(t)]],[document.documentElement]):new xe([[t]],me)}function Ae(t){t.preventDefault(),t.stopImmediatePropagation()}function Me(t){var n=t.document.documentElement,e=Se(t).on("dragstart.drag",Ae,!0)
"onselectstart"in n?e.on("selectstart.drag",Ae,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function Te(t,n){var e=t.document.documentElement,r=Se(t).on("dragstart.drag",null)
n&&(r.on("click.drag",Ae,!0),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function Ce(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Pe(t,n){var e=Object.create(t.prototype)
for(var r in n)e[r]=n[r]
return e}function Ee(){}var ke=.7,Ne=1/ke,Le="\\s*([+-]?\\d+)\\s*",Re="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ve="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Oe=/^#([0-9a-f]{3,8})$/,Ge=new RegExp("^rgb\\("+[Le,Le,Le]+"\\)$"),De=new RegExp("^rgb\\("+[Ve,Ve,Ve]+"\\)$"),Ie=new RegExp("^rgba\\("+[Le,Le,Le,Re]+"\\)$"),ze=new RegExp("^rgba\\("+[Ve,Ve,Ve,Re]+"\\)$"),Fe=new RegExp("^hsl\\("+[Re,Ve,Ve]+"\\)$"),Ye=new RegExp("^hsla\\("+[Re,Ve,Ve,Re]+"\\)$"),Ue={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function Be(){return this.rgb().formatHex()}function He(){return this.rgb().formatRgb()}function Xe(t){var n,e
return t=(t+"").trim().toLowerCase(),(n=Oe.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?je(n):3===e?new $e(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?qe(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?qe(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=Ge.exec(t))?new $e(n[1],n[2],n[3],1):(n=De.exec(t))?new $e(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Ie.exec(t))?qe(n[1],n[2],n[3],n[4]):(n=ze.exec(t))?qe(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Fe.exec(t))?tr(n[1],n[2]/100,n[3]/100,1):(n=Ye.exec(t))?tr(n[1],n[2]/100,n[3]/100,n[4]):Ue.hasOwnProperty(t)?je(Ue[t]):"transparent"===t?new $e(NaN,NaN,NaN,0):null}function je(t){return new $e(t>>16&255,t>>8&255,255&t,1)}function qe(t,n,e,r){return r<=0&&(t=n=e=NaN),new $e(t,n,e,r)}function We(t){return t instanceof Ee||(t=Xe(t)),t?new $e((t=t.rgb()).r,t.g,t.b,t.opacity):new $e}function Qe(t,n,e,r){return 1===arguments.length?We(t):new $e(t,n,e,null==r?1:r)}function $e(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Ze(){return"#"+Je(this.r)+Je(this.g)+Je(this.b)}function Ke(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Je(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function tr(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new er(t,n,e,r)}function nr(t){if(t instanceof er)return new er(t.h,t.s,t.l,t.opacity)
if(t instanceof Ee||(t=Xe(t)),!t)return new er
if(t instanceof er)return t
var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2
return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new er(a,u,s,t.opacity)}function er(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function rr(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function ir(t,n,e,r,i){var o=t*t,a=o*t
return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}Ce(Ee,Xe,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:Be,formatHex:Be,formatHsl:function(){return nr(this).formatHsl()},formatRgb:He,toString:He}),Ce($e,Qe,Pe(Ee,{brighter:function(t){return t=null==t?Ne:Math.pow(Ne,t),new $e(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?ke:Math.pow(ke,t),new $e(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ze,formatHex:Ze,formatRgb:Ke,toString:Ke})),Ce(er,(function(t,n,e,r){return 1===arguments.length?nr(t):new er(t,n,e,null==r?1:r)}),Pe(Ee,{brighter:function(t){return t=null==t?Ne:Math.pow(Ne,t),new er(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?ke:Math.pow(ke,t),new er(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r
return new $e(rr(t>=240?t-240:t+120,i,r),rr(t,i,r),rr(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))
const or=t=>()=>t
function ar(t,n){var e=n-t
return e?function(t,n){return function(e){return t+e*n}}(t,e):or(isNaN(t)?n:t)}const ur=function t(n){var e=function(t){return 1==(t=+t)?ar:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):or(isNaN(n)?e:n)}}(n)
function r(t,n){var r=e((t=Qe(t)).r,(n=Qe(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=ar(t.opacity,n.opacity)
return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1)
function sr(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i)
for(e=0;e<i;++e)r=Qe(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0
return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}function cr(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r)
for(e=0;e<i;++e)o[e]=_r(t[e],n[e])
for(;e<r;++e)a[e]=n[e]
return function(t){for(e=0;e<i;++e)a[e]=o[e](t)
return a}}function lr(t,n){var e=new Date
return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function fr(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function hr(t,n){var e,r={},i={}
for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=_r(t[e],n[e]):i[e]=n[e]
return function(t){for(e in r)i[e]=r[e](t)
return i}}sr((function(t){var n=t.length-1
return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i
return ir((e-r/n)*n,a,i,o,u)}})),sr((function(t){var n=t.length
return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n]
return ir((e-r/n)*n,i,o,a,u)}}))
var dr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pr=new RegExp(dr.source,"g")
function gr(t,n){var e,r,i,o=dr.lastIndex=pr.lastIndex=0,a=-1,u=[],s=[]
for(t+="",n+="";(e=dr.exec(t))&&(r=pr.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:fr(e,r)})),o=pr.lastIndex
return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t)
return u.join("")})}function yr(t,n){n||(n=[])
var e,r=t?Math.min(n.length,t.length):0,i=n.slice()
return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o
return i}}function _r(t,n){var e,r,i=typeof n
return null==n||"boolean"===i?or(n):("number"===i?fr:"string"===i?(e=Xe(n))?(n=e,ur):gr:n instanceof Xe?ur:n instanceof Date?lr:(r=n,!ArrayBuffer.isView(r)||r instanceof DataView?Array.isArray(n)?cr:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?hr:fr:yr))(t,n)}function vr(t,n){if(t=function(t){let n
for(;n=t.sourceEvent;)t=n
return t}(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n
if(e.createSVGPoint){var r=e.createSVGPoint()
return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(n.getScreenCTM().inverse())).x,r.y]}if(n.getBoundingClientRect){var i=n.getBoundingClientRect()
return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}}return[t.pageX,t.pageY]}var mr,xr,br=0,wr=0,Sr=0,Ar=0,Mr=0,Tr=0,Cr="object"==typeof performance&&performance.now?performance:Date,Pr="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)}
function Er(){return Mr||(Pr(kr),Mr=Cr.now()+Tr)}function kr(){Mr=0}function Nr(){this._call=this._time=this._next=null}function Lr(t,n,e){var r=new Nr
return r.restart(t,n,e),r}function Rr(){Mr=(Ar=Cr.now())+Tr,br=wr=0
try{!function(){Er(),++br
for(var t,n=mr;n;)(t=Mr-n._time)>=0&&n._call.call(null,t),n=n._next;--br}()}finally{br=0,function(){for(var t,n,e=mr,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:mr=n)
xr=t,Or(r)}(),Mr=0}}function Vr(){var t=Cr.now(),n=t-Ar
n>1e3&&(Tr-=n,Ar=t)}function Or(t){br||(wr&&(wr=clearTimeout(wr)),t-Mr>24?(t<1/0&&(wr=setTimeout(Rr,t-Cr.now()-Tr)),Sr&&(Sr=clearInterval(Sr))):(Sr||(Ar=Cr.now(),Sr=setInterval(Vr,1e3)),br=1,Pr(Rr)))}function Gr(t,n,e){var r=new Nr
return n=null==n?0:+n,r.restart((e=>{r.stop(),t(e+n)}),n,e),r}Nr.prototype=Lr.prototype={constructor:Nr,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function")
e=(null==e?Er():+e)+(null==n?0:+n),this._next||xr===this||(xr?xr._next=this:mr=this,xr=this),this._call=t,this._time=e,Or()},stop:function(){this._call&&(this._call=null,this._time=1/0,Or())}}
var Dr=sn("start","end","cancel","interrupt"),Ir=[]
function zr(t,n,e,r,i,o){var a=t.__transition
if(a){if(e in a)return}else t.__transition={}
!function(t,n,e){var r,i=t.__transition
function o(s){var c,l,f,h
if(1!==e.state)return u()
for(c in i)if((h=i[c]).name===e.name){if(3===h.state)return Gr(o)
4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<n&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(Gr((function(){3===e.state&&(e.state=4,e.timer.restart(a,e.delay,e.time),a(s))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=3,r=new Array(f=e.tween.length),c=0,l=-1;c<f;++c)(h=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(r[++l]=h)
r.length=l+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=5,1),o=-1,a=r.length;++o<a;)r[o].call(t,i)
5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return
delete t.__transition}i[n]=e,e.timer=Lr((function(t){e.state=1,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)}),0,e.time)}(t,e,{name:n,index:r,group:i,on:Dr,tween:Ir,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function Fr(t,n){var e=Ur(t,n)
if(e.state>0)throw new Error("too late; already scheduled")
return e}function Yr(t,n){var e=Ur(t,n)
if(e.state>3)throw new Error("too late; already running")
return e}function Ur(t,n){var e=t.__transition
if(!e||!(e=e[n]))throw new Error("transition not found")
return e}function Br(t,n){var e,r,i,o=t.__transition,a=!0
if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1
a&&delete t.__transition}}var Hr,Xr=180/Math.PI,jr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1}
function qr(t,n,e,r,i,o){var a,u,s
return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Xr,skewX:Math.atan(s)*Xr,scaleX:a,scaleY:u}}function Wr(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],s=[]
return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var s=a.push("translate(",null,n,null,e)
u.push({i:s-4,x:fr(t,i)},{i:s-2,x:fr(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,s),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:fr(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,s),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:fr(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,s),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")")
a.push({i:u-4,x:fr(t,e)},{i:u-2,x:fr(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,s),o=a=null,function(t){for(var n,e=-1,r=s.length;++e<r;)u[(n=s[e]).i]=n.x(t)
return u.join("")}}}var Qr=Wr((function(t){const n=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"")
return n.isIdentity?jr:qr(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),$r=Wr((function(t){return null==t?jr:(Hr||(Hr=document.createElementNS("http://www.w3.org/2000/svg","g")),Hr.setAttribute("transform",t),(t=Hr.transform.baseVal.consolidate())?qr((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):jr)}),", ",")",")")
function Zr(t,n){var e,r
return function(){var i=Yr(this,t),o=i.tween
if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1)
break}i.tween=r}}function Kr(t,n,e){var r,i
if("function"!=typeof e)throw new Error
return function(){var o=Yr(this,t),a=o.tween
if(a!==r){i=(r=a).slice()
for(var u={name:n,value:e},s=0,c=i.length;s<c;++s)if(i[s].name===n){i[s]=u
break}s===c&&i.push(u)}o.tween=i}}function Jr(t,n,e){var r=t._id
return t.each((function(){var t=Yr(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return Ur(t,r).value[n]}}function ti(t,n){var e
return("number"==typeof n?fr:n instanceof Xe?ur:(e=Xe(n))?(n=e,ur):gr)(t,n)}function ni(t){return function(){this.removeAttribute(t)}}function ei(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ri(t,n,e){var r,i,o=e+""
return function(){var a=this.getAttribute(t)
return a===o?null:a===r?i:i=n(r=a,e)}}function ii(t,n,e){var r,i,o=e+""
return function(){var a=this.getAttributeNS(t.space,t.local)
return a===o?null:a===r?i:i=n(r=a,e)}}function oi(t,n,e){var r,i,o
return function(){var a,u,s=e(this)
if(null!=s)return(a=this.getAttribute(t))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))
this.removeAttribute(t)}}function ai(t,n,e){var r,i,o
return function(){var a,u,s=e(this)
if(null!=s)return(a=this.getAttributeNS(t.space,t.local))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))
this.removeAttributeNS(t.space,t.local)}}function ui(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function si(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function ci(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&si(t,i)),e}return i._value=n,i}function li(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&ui(t,i)),e}return i._value=n,i}function fi(t,n){return function(){Fr(this,t).delay=+n.apply(this,arguments)}}function hi(t,n){return n=+n,function(){Fr(this,t).delay=n}}function di(t,n){return function(){Yr(this,t).duration=+n.apply(this,arguments)}}function pi(t,n){return n=+n,function(){Yr(this,t).duration=n}}function gi(t,n){if("function"!=typeof n)throw new Error
return function(){Yr(this,t).ease=n}}function yi(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".")
return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?Fr:Yr
return function(){var a=o(this,t),u=a.on
u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}var _i=we.prototype.constructor
function vi(t){return function(){this.style.removeProperty(t)}}function mi(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function xi(t,n,e){var r,i
function o(){var o=n.apply(this,arguments)
return o!==i&&(r=(i=o)&&mi(t,o,e)),r}return o._value=n,o}function bi(t){return function(n){this.textContent=t.call(this,n)}}function wi(t){var n,e
function r(){var r=t.apply(this,arguments)
return r!==e&&(n=(e=r)&&bi(r)),n}return r._value=t,r}var Si=0
function Ai(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Mi(){return++Si}var Ti=we.prototype
Ai.prototype=function(t){return we().transition(t)}.prototype={constructor:Ai,select:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=ln(t))
for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,s,c=r[a],l=c.length,f=o[a]=new Array(l),h=0;h<l;++h)(u=c[h])&&(s=t.call(u,u.__data__,h,c))&&("__data__"in u&&(s.__data__=u.__data__),f[h]=s,zr(f[h],n,e,h,f,Ur(u,e)))
return new Ai(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=dn(t))
for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var s,c=r[u],l=c.length,f=0;f<l;++f)if(s=c[f]){for(var h,d=t.call(s,s.__data__,f,c),p=Ur(s,e),g=0,y=d.length;g<y;++g)(h=d[g])&&zr(h,n,e,g,d,p)
o.push(d),a.push(s)}return new Ai(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=pn(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o)
return new Ai(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error
for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],l=e[u],f=c.length,h=a[u]=new Array(f),d=0;d<f;++d)(s=c[d]||l[d])&&(h[d]=s)
for(;u<r;++u)a[u]=n[u]
return new Ai(a,this._parents,this._name,this._id)},selection:function(){return new _i(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Mi(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)if(a=u[c]){var l=Ur(a,n)
zr(a,t,e,c,u,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new Ai(r,this._parents,t,e)},call:Ti.call,nodes:Ti.nodes,node:Ti.node,size:Ti.size,empty:Ti.empty,each:Ti.each,on:function(t,n){var e=this._id
return arguments.length<2?Ur(this.node(),e).on.on(t):this.each(yi(e,t,n))},attr:function(t,n){var e=En(t),r="transform"===e?$r:ti
return this.attrTween(t,"function"==typeof n?(e.local?ai:oi)(e,r,Jr(this,"attr."+t,n)):null==n?(e.local?ei:ni)(e):(e.local?ii:ri)(e,r,n))},attrTween:function(t,n){var e="attr."+t
if(arguments.length<2)return(e=this.tween(e))&&e._value
if(null==n)return this.tween(e,null)
if("function"!=typeof n)throw new Error
var r=En(t)
return this.tween(e,(r.local?ci:li)(r,n))},style:function(t,n,e){var r="transform"==(t+="")?Qr:ti
return null==n?this.styleTween(t,function(t,n){var e,r,i
return function(){var o=Fn(this,t),a=(this.style.removeProperty(t),Fn(this,t))
return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,vi(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o
return function(){var a=Fn(this,t),u=e(this),s=u+""
return null==u&&(this.style.removeProperty(t),s=u=Fn(this,t)),a===s?null:a===r&&s===i?o:(i=s,o=n(r=a,u))}}(t,r,Jr(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a
return function(){var s=Yr(this,t),c=s.on,l=null==s.value[a]?o||(o=vi(n)):void 0
c===e&&i===l||(r=(e=c).copy()).on(u,i=l),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+""
return function(){var a=Fn(this,t)
return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="")
if(arguments.length<2)return(r=this.tween(r))&&r._value
if(null==n)return this.tween(r,null)
if("function"!=typeof n)throw new Error
return this.tween(r,xi(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this)
this.textContent=null==n?"":n}}(Jr(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text"
if(arguments.length<1)return(n=this.tween(n))&&n._value
if(null==t)return this.tween(n,null)
if("function"!=typeof t)throw new Error
return this.tween(n,wi(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode
for(var e in this.__transition)if(+e!==t)return
n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id
if(t+="",arguments.length<2){for(var r,i=Ur(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value
return null}return this.each((null==n?Zr:Kr)(e,t,n))},delay:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?fi:hi)(n,t)):Ur(this.node(),n).delay},duration:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?di:pi)(n,t)):Ur(this.node(),n).duration},ease:function(t){var n=this._id
return arguments.length?this.each(gi(n,t)):Ur(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error
return this.each(function(t,n){return function(){var e=n.apply(this,arguments)
if("function"!=typeof e)throw new Error
Yr(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size()
return new Promise((function(o,a){var u={value:a},s={value:function(){0==--i&&o()}}
e.each((function(){var e=Yr(this,r),i=e.on
i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(s)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:Ti[Symbol.iterator]}
var Ci={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}}
function Pi(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`)
return e}we.prototype.interrupt=function(t){return this.each((function(){Br(this,t)}))},we.prototype.transition=function(t){var n,e
t instanceof Ai?(n=t._id,t=t._name):(n=Mi(),(e=Ci).time=Er(),t=null==t?null:t+"")
for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)(a=u[c])&&zr(a,t,n,c,u,e||Pi(a,n))
return new Ai(r,this._parents,t,n)}
const Ei=t=>()=>t
function ki(t,n){let{sourceEvent:e,target:r,selection:i,mode:o,dispatch:a}=n
Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},selection:{value:i,enumerable:!0,configurable:!0},mode:{value:o,enumerable:!0,configurable:!0},_:{value:a}})}function Ni(t){t.stopImmediatePropagation()}function Li(t){t.preventDefault(),t.stopImmediatePropagation()}var Ri={name:"drag"},Vi={name:"space"},Oi={name:"handle"},Gi={name:"center"}
const{abs:Di,max:Ii,min:zi}=Math
function Fi(t){return[+t[0],+t[1]]}function Yi(t){return[Fi(t[0]),Fi(t[1])]}var Ui={name:"x",handles:["w","e"].map($i),input:function(t,n){return null==t?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},Bi={name:"y",handles:["n","s"].map($i),input:function(t,n){return null==t?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},Hi={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map($i),input:function(t){return null==t?null:Yi(t)},output:function(t){return t}},Xi={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},ji={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},qi={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Wi={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Qi={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1}
function $i(t){return{type:t}}function Zi(t){return!t.ctrlKey&&!t.button}function Ki(){var t=this.ownerSVGElement||this
return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Ji(){return navigator.maxTouchPoints||"ontouchstart"in this}function to(t){for(;!t.__brush;)if(!(t=t.parentNode))return
return t.__brush}function no(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function eo(t){var n=t.__brush
return n?n.dim.output(n.selection):null}function ro(){return ao(Ui)}function io(){return ao(Bi)}function oo(){return ao(Hi)}function ao(t){var n,e=Ki,r=Zi,i=Ji,o=!0,a=sn("start","brush","end"),u=6
function s(n){var e=n.property("__brush",g).selectAll(".overlay").data([$i("overlay")])
e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Xi.overlay).merge(e).each((function(){var t=to(this).extent
Se(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])})),n.selectAll(".selection").data([$i("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Xi.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges")
var r=n.selectAll(".handle").data(t.handles,(function(t){return t.type}))
r.exit().remove(),r.enter().append("rect").attr("class",(function(t){return"handle handle--"+t.type})).attr("cursor",(function(t){return Xi[t.type]})),n.each(c).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",h).filter(i).on("touchstart.brush",h).on("touchmove.brush",d).on("touchend.brush touchcancel.brush",p).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function c(){var t=Se(this),n=to(this).selection
n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",(function(t){return"e"===t.type[t.type.length-1]?n[1][0]-u/2:n[0][0]-u/2})).attr("y",(function(t){return"s"===t.type[0]?n[1][1]-u/2:n[0][1]-u/2})).attr("width",(function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+u:u})).attr("height",(function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+u:u}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function l(t,n,e){var r=t.__brush.emitter
return!r||e&&r.clean?new f(t,n,e):r}function f(t,n,e){this.that=t,this.args=n,this.state=t.__brush,this.active=0,this.clean=e}function h(e){if((!n||e.touches)&&r.apply(this,arguments)){var i,a,u,s,f,h,d,p,g,y,_,v=this,m=e.target.__data__.type,x="selection"===(o&&e.metaKey?m="overlay":m)?Ri:o&&e.altKey?Gi:Oi,b=t===Bi?null:Wi[m],w=t===Ui?null:Qi[m],S=to(v),A=S.extent,M=S.selection,T=A[0][0],C=A[0][1],P=A[1][0],E=A[1][1],k=0,N=0,L=b&&w&&o&&e.shiftKey,R=Array.from(e.touches||[e],(t=>{const n=t.identifier
return(t=vr(t,v)).point0=t.slice(),t.identifier=n,t}))
if("overlay"===m){M&&(g=!0)
const n=[R[0],R[1]||R[0]]
S.selection=M=[[i=t===Bi?T:zi(n[0][0],n[1][0]),u=t===Ui?C:zi(n[0][1],n[1][1])],[f=t===Bi?P:Ii(n[0][0],n[1][0]),d=t===Ui?E:Ii(n[0][1],n[1][1])]],R.length>1&&z()}else i=M[0][0],u=M[0][1],f=M[1][0],d=M[1][1]
a=i,s=u,h=f,p=d
var V=Se(v).attr("pointer-events","none"),O=V.selectAll(".overlay").attr("cursor",Xi[m])
Br(v)
var G=l(v,arguments,!0).beforestart()
if(e.touches)G.moved=I,G.ended=F
else{var D=Se(e.view).on("mousemove.brush",I,!0).on("mouseup.brush",F,!0)
o&&D.on("keydown.brush",Y,!0).on("keyup.brush",U,!0),Me(e.view)}c.call(v),G.start(e,x.name)}function I(t){for(const n of t.changedTouches||[t])for(const t of R)t.identifier===n.identifier&&(t.cur=vr(n,v))
if(L&&!y&&!_&&1===R.length){const t=R[0]
Di(t.cur[0]-t[0])>Di(t.cur[1]-t[1])?_=!0:y=!0}for(const n of R)n.cur&&(n[0]=n.cur[0],n[1]=n.cur[1])
g=!0,Li(t),z(t)}function z(t){const n=R[0],e=n.point0
var r
switch(k=n[0]-e[0],N=n[1]-e[1],x){case Vi:case Ri:b&&(k=Ii(T-i,zi(P-f,k)),a=i+k,h=f+k),w&&(N=Ii(C-u,zi(E-d,N)),s=u+N,p=d+N)
break
case Oi:R[1]?(b&&(a=Ii(T,zi(P,R[0][0])),h=Ii(T,zi(P,R[1][0])),b=1),w&&(s=Ii(C,zi(E,R[0][1])),p=Ii(C,zi(E,R[1][1])),w=1)):(b<0?(k=Ii(T-i,zi(P-i,k)),a=i+k,h=f):b>0&&(k=Ii(T-f,zi(P-f,k)),a=i,h=f+k),w<0?(N=Ii(C-u,zi(E-u,N)),s=u+N,p=d):w>0&&(N=Ii(C-d,zi(E-d,N)),s=u,p=d+N))
break
case Gi:b&&(a=Ii(T,zi(P,i-k*b)),h=Ii(T,zi(P,f+k*b))),w&&(s=Ii(C,zi(E,u-N*w)),p=Ii(C,zi(E,d+N*w)))}h<a&&(b*=-1,r=i,i=f,f=r,r=a,a=h,h=r,m in ji&&O.attr("cursor",Xi[m=ji[m]])),p<s&&(w*=-1,r=u,u=d,d=r,r=s,s=p,p=r,m in qi&&O.attr("cursor",Xi[m=qi[m]])),S.selection&&(M=S.selection),y&&(a=M[0][0],h=M[1][0]),_&&(s=M[0][1],p=M[1][1]),M[0][0]===a&&M[0][1]===s&&M[1][0]===h&&M[1][1]===p||(S.selection=[[a,s],[h,p]],c.call(v),G.brush(t,x.name))}function F(t){if(Ni(t),t.touches){if(t.touches.length)return
n&&clearTimeout(n),n=setTimeout((function(){n=null}),500)}else Te(t.view,g),D.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null)
V.attr("pointer-events","all"),O.attr("cursor",Xi.overlay),S.selection&&(M=S.selection),no(M)&&(S.selection=null,c.call(v)),G.end(t,x.name)}function Y(t){switch(t.keyCode){case 16:L=b&&w
break
case 18:x===Oi&&(b&&(f=h-k*b,i=a+k*b),w&&(d=p-N*w,u=s+N*w),x=Gi,z())
break
case 32:x!==Oi&&x!==Gi||(b<0?f=h-k:b>0&&(i=a-k),w<0?d=p-N:w>0&&(u=s-N),x=Vi,O.attr("cursor",Xi.selection),z())
break
default:return}Li(t)}function U(t){switch(t.keyCode){case 16:L&&(y=_=L=!1,z())
break
case 18:x===Gi&&(b<0?f=h:b>0&&(i=a),w<0?d=p:w>0&&(u=s),x=Oi,z())
break
case 32:x===Vi&&(t.altKey?(b&&(f=h-k*b,i=a+k*b),w&&(d=p-N*w,u=s+N*w),x=Gi):(b<0?f=h:b>0&&(i=a),w<0?d=p:w>0&&(u=s),x=Oi),O.attr("cursor",Xi[m]),z())
break
default:return}Li(t)}}function d(t){l(this,arguments).moved(t)}function p(t){l(this,arguments).ended(t)}function g(){var n=this.__brush||{selection:null}
return n.extent=Yi(e.apply(this,arguments)),n.dim=t,n}return s.move=function(n,e){n.tween?n.on("start.brush",(function(t){l(this,arguments).beforestart().start(t)})).on("interrupt.brush end.brush",(function(t){l(this,arguments).end(t)})).tween("brush",(function(){var n=this,r=n.__brush,i=l(n,arguments),o=r.selection,a=t.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=_r(o,a)
function s(t){r.selection=1===t&&null===a?null:u(t),c.call(n),i.brush()}return null!==o&&null!==a?s:s(1)})):n.each((function(){var n=this,r=arguments,i=n.__brush,o=t.input("function"==typeof e?e.apply(n,r):e,i.extent),a=l(n,r).beforestart()
Br(n),i.selection=null===o?null:o,c.call(n),a.start().brush().end()}))},s.clear=function(t){s.move(t,null)},f.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(t,n){return this.starting?(this.starting=!1,this.emit("start",t,n)):this.emit("brush",t),this},brush:function(t,n){return this.emit("brush",t,n),this},end:function(t,n){return 0==--this.active&&(delete this.state.emitter,this.emit("end",t,n)),this},emit:function(n,e,r){var i=Se(this.that).datum()
a.call(n,this.that,new ki(n,{sourceEvent:e,target:s,selection:t.output(this.state.selection),mode:r,dispatch:a}),i)}},s.extent=function(t){return arguments.length?(e="function"==typeof t?t:Ei(Yi(t)),s):e},s.filter=function(t){return arguments.length?(r="function"==typeof t?t:Ei(!!t),s):r},s.touchable=function(t){return arguments.length?(i="function"==typeof t?t:Ei(!!t),s):i},s.handleSize=function(t){return arguments.length?(u=+t,s):u},s.keyModifiers=function(t){return arguments.length?(o=!!t,s):o},s.on=function(){var t=a.on.apply(a,arguments)
return t===a?s:t},s}var uo=Math.abs,so=Math.cos,co=Math.sin,lo=Math.PI,fo=lo/2,ho=2*lo,po=Math.max,go=1e-12
function yo(t,n){return Array.from({length:n-t},((n,e)=>t+e))}function _o(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}function vo(){return bo(!1,!1)}function mo(){return bo(!1,!0)}function xo(){return bo(!0,!1)}function bo(t,n){var e=0,r=null,i=null,o=null
function a(a){var u,s=a.length,c=new Array(s),l=yo(0,s),f=new Array(s*s),h=new Array(s),d=0
a=Float64Array.from({length:s*s},n?(t,n)=>a[n%s][n/s|0]:(t,n)=>a[n/s|0][n%s])
for(let n=0;n<s;++n){let e=0
for(let r=0;r<s;++r)e+=a[n*s+r]+t*a[r*s+n]
d+=c[n]=e}u=(d=po(0,ho-e*s)/d)?e:ho/s
{let n=0
r&&l.sort(((t,n)=>r(c[t],c[n])))
for(const e of l){const r=n
if(t){const t=yo(1+~s,s).filter((t=>t<0?a[~t*s+e]:a[e*s+t]))
i&&t.sort(((t,n)=>i(t<0?-a[~t*s+e]:a[e*s+t],n<0?-a[~n*s+e]:a[e*s+n])))
for(const r of t)r<0?(f[~r*s+e]||(f[~r*s+e]={source:null,target:null})).target={index:e,startAngle:n,endAngle:n+=a[~r*s+e]*d,value:a[~r*s+e]}:(f[e*s+r]||(f[e*s+r]={source:null,target:null})).source={index:e,startAngle:n,endAngle:n+=a[e*s+r]*d,value:a[e*s+r]}
h[e]={index:e,startAngle:r,endAngle:n,value:c[e]}}else{const t=yo(0,s).filter((t=>a[e*s+t]||a[t*s+e]))
i&&t.sort(((t,n)=>i(a[e*s+t],a[e*s+n])))
for(const r of t){let t
if(e<r?(t=f[e*s+r]||(f[e*s+r]={source:null,target:null}),t.source={index:e,startAngle:n,endAngle:n+=a[e*s+r]*d,value:a[e*s+r]}):(t=f[r*s+e]||(f[r*s+e]={source:null,target:null}),t.target={index:e,startAngle:n,endAngle:n+=a[e*s+r]*d,value:a[e*s+r]},e===r&&(t.source=t.target)),t.source&&t.target&&t.source.value<t.target.value){const n=t.source
t.source=t.target,t.target=n}}h[e]={index:e,startAngle:r,endAngle:n,value:c[e]}}n+=u}}return(f=Object.values(f)).groups=h,o?f.sort(o):f}return a.padAngle=function(t){return arguments.length?(e=po(0,t),a):e},a.sortGroups=function(t){return arguments.length?(r=t,a):r},a.sortSubgroups=function(t){return arguments.length?(i=t,a):i},a.sortChords=function(t){return arguments.length?(null==t?o=null:(o=_o(t))._=t,a):o&&o._},a}const wo=Math.PI,So=2*wo,Ao=1e-6,Mo=So-Ao
function To(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Co(){return new To}To.prototype=Co.prototype={constructor:To,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i
var o=this._x1,a=this._y1,u=e-t,s=r-n,c=o-t,l=a-n,f=c*c+l*l
if(i<0)throw new Error("negative radius: "+i)
if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n)
else if(f>Ao)if(Math.abs(l*u-s*c)>Ao&&i){var h=e-o,d=r-a,p=u*u+s*s,g=h*h+d*d,y=Math.sqrt(p),_=Math.sqrt(f),v=i*Math.tan((wo-Math.acos((p+f-g)/(2*y*_)))/2),m=v/_,x=v/y
Math.abs(m-1)>Ao&&(this._+="L"+(t+m*c)+","+(n+m*l)),this._+="A"+i+","+i+",0,0,"+ +(l*h>c*d)+","+(this._x1=t+x*u)+","+(this._y1=n+x*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,e,r,i,o){t=+t,n=+n,o=!!o
var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),s=t+a,c=n+u,l=1^o,f=o?r-i:i-r
if(e<0)throw new Error("negative radius: "+e)
null===this._x1?this._+="M"+s+","+c:(Math.abs(this._x1-s)>Ao||Math.abs(this._y1-c)>Ao)&&(this._+="L"+s+","+c),e&&(f<0&&(f=f%So+So),f>Mo?this._+="A"+e+","+e+",0,1,"+l+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+l+","+(this._x1=s)+","+(this._y1=c):f>Ao&&(this._+="A"+e+","+e+",0,"+ +(f>=wo)+","+l+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}}
const Po=Co
var Eo=Array.prototype.slice
function ko(t){return function(){return t}}function No(t){return t.source}function Lo(t){return t.target}function Ro(t){return t.radius}function Vo(t){return t.startAngle}function Oo(t){return t.endAngle}function Go(){return 0}function Do(){return 10}function Io(t){var n=No,e=Lo,r=Ro,i=Ro,o=Vo,a=Oo,u=Go,s=null
function c(){var c,l=n.apply(this,arguments),f=e.apply(this,arguments),h=u.apply(this,arguments)/2,d=Eo.call(arguments),p=+r.apply(this,(d[0]=l,d)),g=o.apply(this,d)-fo,y=a.apply(this,d)-fo,_=+i.apply(this,(d[0]=f,d)),v=o.apply(this,d)-fo,m=a.apply(this,d)-fo
if(s||(s=c=Po()),h>go&&(uo(y-g)>2*h+go?y>g?(g+=h,y-=h):(g-=h,y+=h):g=y=(g+y)/2,uo(m-v)>2*h+go?m>v?(v+=h,m-=h):(v-=h,m+=h):v=m=(v+m)/2),s.moveTo(p*so(g),p*co(g)),s.arc(0,0,p,g,y),g!==v||y!==m)if(t){var x=+t.apply(this,arguments),b=_-x,w=(v+m)/2
s.quadraticCurveTo(0,0,b*so(v),b*co(v)),s.lineTo(_*so(w),_*co(w)),s.lineTo(b*so(m),b*co(m))}else s.quadraticCurveTo(0,0,_*so(v),_*co(v)),s.arc(0,0,_,v,m)
if(s.quadraticCurveTo(0,0,p*so(g),p*co(g)),s.closePath(),c)return s=null,c+""||null}return t&&(c.headRadius=function(n){return arguments.length?(t="function"==typeof n?n:ko(+n),c):t}),c.radius=function(t){return arguments.length?(r=i="function"==typeof t?t:ko(+t),c):r},c.sourceRadius=function(t){return arguments.length?(r="function"==typeof t?t:ko(+t),c):r},c.targetRadius=function(t){return arguments.length?(i="function"==typeof t?t:ko(+t),c):i},c.startAngle=function(t){return arguments.length?(o="function"==typeof t?t:ko(+t),c):o},c.endAngle=function(t){return arguments.length?(a="function"==typeof t?t:ko(+t),c):a},c.padAngle=function(t){return arguments.length?(u="function"==typeof t?t:ko(+t),c):u},c.source=function(t){return arguments.length?(n=t,c):n},c.target=function(t){return arguments.length?(e=t,c):e},c.context=function(t){return arguments.length?(s=null==t?null:t,c):s},c}function zo(){return Io()}function Fo(){return Io(Do)}function Yo(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Uo(t,n){var e=Object.create(t.prototype)
for(var r in n)e[r]=n[r]
return e}function Bo(){}var Ho=.7,Xo=1/Ho,jo="\\s*([+-]?\\d+)\\s*",qo="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Wo="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Qo=/^#([0-9a-f]{3,8})$/,$o=new RegExp("^rgb\\("+[jo,jo,jo]+"\\)$"),Zo=new RegExp("^rgb\\("+[Wo,Wo,Wo]+"\\)$"),Ko=new RegExp("^rgba\\("+[jo,jo,jo,qo]+"\\)$"),Jo=new RegExp("^rgba\\("+[Wo,Wo,Wo,qo]+"\\)$"),ta=new RegExp("^hsl\\("+[qo,Wo,Wo]+"\\)$"),na=new RegExp("^hsla\\("+[qo,Wo,Wo,qo]+"\\)$"),ea={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function ra(){return this.rgb().formatHex()}function ia(){return this.rgb().formatRgb()}function oa(t){var n,e
return t=(t+"").trim().toLowerCase(),(n=Qo.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?aa(n):3===e?new la(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?ua(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?ua(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=$o.exec(t))?new la(n[1],n[2],n[3],1):(n=Zo.exec(t))?new la(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Ko.exec(t))?ua(n[1],n[2],n[3],n[4]):(n=Jo.exec(t))?ua(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=ta.exec(t))?pa(n[1],n[2]/100,n[3]/100,1):(n=na.exec(t))?pa(n[1],n[2]/100,n[3]/100,n[4]):ea.hasOwnProperty(t)?aa(ea[t]):"transparent"===t?new la(NaN,NaN,NaN,0):null}function aa(t){return new la(t>>16&255,t>>8&255,255&t,1)}function ua(t,n,e,r){return r<=0&&(t=n=e=NaN),new la(t,n,e,r)}function sa(t){return t instanceof Bo||(t=oa(t)),t?new la((t=t.rgb()).r,t.g,t.b,t.opacity):new la}function ca(t,n,e,r){return 1===arguments.length?sa(t):new la(t,n,e,null==r?1:r)}function la(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function fa(){return"#"+da(this.r)+da(this.g)+da(this.b)}function ha(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function da(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function pa(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new _a(t,n,e,r)}function ga(t){if(t instanceof _a)return new _a(t.h,t.s,t.l,t.opacity)
if(t instanceof Bo||(t=oa(t)),!t)return new _a
if(t instanceof _a)return t
var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2
return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new _a(a,u,s,t.opacity)}function ya(t,n,e,r){return 1===arguments.length?ga(t):new _a(t,n,e,null==r?1:r)}function _a(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function va(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}Yo(Bo,oa,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:ra,formatHex:ra,formatHsl:function(){return ga(this).formatHsl()},formatRgb:ia,toString:ia}),Yo(la,ca,Uo(Bo,{brighter:function(t){return t=null==t?Xo:Math.pow(Xo,t),new la(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?Ho:Math.pow(Ho,t),new la(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:fa,formatHex:fa,formatRgb:ha,toString:ha})),Yo(_a,ya,Uo(Bo,{brighter:function(t){return t=null==t?Xo:Math.pow(Xo,t),new _a(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?Ho:Math.pow(Ho,t),new _a(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r
return new la(va(t>=240?t-240:t+120,i,r),va(t,i,r),va(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))
const ma=Math.PI/180,xa=180/Math.PI,ba=.96422,wa=.82521,Sa=4/29,Aa=6/29,Ma=3*Aa*Aa
function Ta(t){if(t instanceof Ea)return new Ea(t.l,t.a,t.b,t.opacity)
if(t instanceof Da)return Ia(t)
t instanceof la||(t=sa(t))
var n,e,r=Ra(t.r),i=Ra(t.g),o=Ra(t.b),a=ka((.2225045*r+.7168786*i+.0606169*o)/1)
return r===i&&i===o?n=e=a:(n=ka((.4360747*r+.3850649*i+.1430804*o)/ba),e=ka((.0139322*r+.0971045*i+.7141733*o)/wa)),new Ea(116*a-16,500*(n-a),200*(a-e),t.opacity)}function Ca(t,n){return new Ea(t,0,0,null==n?1:n)}function Pa(t,n,e,r){return 1===arguments.length?Ta(t):new Ea(t,n,e,null==r?1:r)}function Ea(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function ka(t){return t>.008856451679035631?Math.pow(t,1/3):t/Ma+Sa}function Na(t){return t>Aa?t*t*t:Ma*(t-Sa)}function La(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Ra(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Va(t){if(t instanceof Da)return new Da(t.h,t.c,t.l,t.opacity)
if(t instanceof Ea||(t=Ta(t)),0===t.a&&0===t.b)return new Da(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity)
var n=Math.atan2(t.b,t.a)*xa
return new Da(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Oa(t,n,e,r){return 1===arguments.length?Va(t):new Da(e,n,t,null==r?1:r)}function Ga(t,n,e,r){return 1===arguments.length?Va(t):new Da(t,n,e,null==r?1:r)}function Da(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Ia(t){if(isNaN(t.h))return new Ea(t.l,0,0,t.opacity)
var n=t.h*ma
return new Ea(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}Yo(Ea,Pa,Uo(Bo,{brighter:function(t){return new Ea(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Ea(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200
return new la(La(3.1338561*(n=ba*Na(n))-1.6168667*(t=1*Na(t))-.4906146*(e=wa*Na(e))),La(-.9787684*n+1.9161415*t+.033454*e),La(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Yo(Da,Ga,Uo(Bo,{brighter:function(t){return new Da(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Da(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Ia(this).rgb()}}))
var za=-.14861,Fa=1.78277,Ya=-.29227,Ua=-.90649,Ba=1.97294,Ha=Ba*Ua,Xa=Ba*Fa,ja=Fa*Ya-Ua*za
function qa(t){if(t instanceof Qa)return new Qa(t.h,t.s,t.l,t.opacity)
t instanceof la||(t=sa(t))
var n=t.r/255,e=t.g/255,r=t.b/255,i=(ja*r+Ha*n-Xa*e)/(ja+Ha-Xa),o=r-i,a=(Ba*(e-i)-Ya*o)/Ua,u=Math.sqrt(a*a+o*o)/(Ba*i*(1-i)),s=u?Math.atan2(a,o)*xa-120:NaN
return new Qa(s<0?s+360:s,u,i,t.opacity)}function Wa(t,n,e,r){return 1===arguments.length?qa(t):new Qa(t,n,e,null==r?1:r)}function Qa(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function $a(t){return Math.ceil(Math.log(function(t,n){let e=0
for(let r of t)null!=r&&(r=+r)>=r&&++e
return e}(t))/Math.LN2)+1}Yo(Qa,Wa,Uo(Bo,{brighter:function(t){return t=null==t?Xo:Math.pow(Xo,t),new Qa(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?Ho:Math.pow(Ho,t),new Qa(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*ma,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t)
return new la(255*(n+e*(za*r+Fa*i)),255*(n+e*(Ya*r+Ua*i)),255*(n+e*(Ba*r)),this.opacity)}}))
var Za=Math.sqrt(50),Ka=Math.sqrt(10),Ja=Math.sqrt(2)
function tu(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i
return o>=Za?i*=10:o>=Ka?i*=5:o>=Ja&&(i*=2),n<t?-i:i}function nu(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e
for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e
return o}var eu=Array.prototype.slice
function ru(t,n){return t-n}const iu=t=>()=>t
function ou(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=au(t,n[r]))return e
return 0}function au(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var s=t[o],c=s[0],l=s[1],f=t[u],h=f[0],d=f[1]
if(uu(s,f,n))return 0
l>r!=d>r&&e<(h-c)*(r-l)/(d-l)+c&&(i=-i)}return i}function uu(t,n,e){var r,i,o,a
return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&(i=t[r=+(t[0]===n[0])],o=e[r],a=n[r],i<=o&&o<=a||a<=o&&o<=i)}function su(){}var cu=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]]
function lu(){var t=1,n=1,e=$a,r=u
function i(t){var n=e(t)
if(Array.isArray(n))n=n.slice().sort(ru)
else{var r=function(t,n){let e,r
for(const i of t)null!=i&&(void 0===e?i>=i&&(e=r=i):(e>i&&(e=i),r<i&&(r=i)))
return[e,r]}(t),i=r[0],a=r[1]
n=tu(i,a,n),n=nu(Math.floor(i/n)*n,Math.floor(a/n)*n,n)}return n.map((function(n){return o(t,n)}))}function o(e,i){var o=[],u=[]
return function(e,r,i){var o,u,s,c,l,f,h=new Array,d=new Array
for(o=u=-1,c=e[0]>=r,cu[c<<1].forEach(p);++o<t-1;)s=c,c=e[o+1]>=r,cu[s|c<<1].forEach(p)
for(cu[c<<0].forEach(p);++u<n-1;){for(o=-1,c=e[u*t+t]>=r,l=e[u*t]>=r,cu[c<<1|l<<2].forEach(p);++o<t-1;)s=c,c=e[u*t+t+o+1]>=r,f=l,l=e[u*t+o+1]>=r,cu[s|c<<1|l<<2|f<<3].forEach(p)
cu[c|l<<3].forEach(p)}for(o=-1,l=e[u*t]>=r,cu[l<<2].forEach(p);++o<t-1;)f=l,l=e[u*t+o+1]>=r,cu[l<<2|f<<3].forEach(p)
function p(t){var n,e,r=[t[0][0]+o,t[0][1]+u],s=[t[1][0]+o,t[1][1]+u],c=a(r),l=a(s);(n=d[c])?(e=h[l])?(delete d[n.end],delete h[e.start],n===e?(n.ring.push(s),i(n.ring)):h[n.start]=d[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete d[n.end],n.ring.push(s),d[n.end=l]=n):(n=h[l])?(e=d[c])?(delete h[n.start],delete d[e.end],n===e?(n.ring.push(s),i(n.ring)):h[e.start]=d[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[n.start],n.ring.unshift(r),h[n.start=c]=n):h[c]=d[l]={start:c,end:l,ring:[r,s]}}cu[l<<3].forEach(p)}(e,i,(function(t){r(t,e,i),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1]
return r}(t)>0?o.push([t]):u.push(t)})),u.forEach((function(t){for(var n,e=0,r=o.length;e<r;++e)if(-1!==ou((n=o[e])[0],t))return void n.push(t)})),{type:"MultiPolygon",value:i,coordinates:o}}function a(n){return 2*n[0]+n[1]*(t+1)*4}function u(e,r,i){e.forEach((function(e){var o,a=e[0],u=e[1],s=0|a,c=0|u,l=r[c*t+s]
a>0&&a<t&&s===a&&(o=r[c*t+s-1],e[0]=a+(i-o)/(l-o)-.5),u>0&&u<n&&c===u&&(o=r[(c-1)*t+s],e[1]=u+(i-o)/(l-o)-.5)}))}return i.contour=o,i.size=function(e){if(!arguments.length)return[t,n]
var r=Math.floor(e[0]),o=Math.floor(e[1])
if(!(r>=0&&o>=0))throw new Error("invalid size")
return t=r,n=o,i},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?iu(eu.call(t)):iu(t),i):e},i.smooth=function(t){return arguments.length?(r=t?u:su,i):r===u},i}function fu(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,s=0;u<r+e;++u)u<r&&(s+=t.data[u+a*r]),u>=e&&(u>=o&&(s-=t.data[u-o+a*r]),n.data[u-e+a*r]=s/Math.min(u+1,r-1+o-u,o))}function hu(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,s=0;u<i+e;++u)u<i&&(s+=t.data[a+u*r]),u>=e&&(u>=o&&(s-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=s/Math.min(u+1,i-1+o-u,o))}function du(t){return t[0]}function pu(t){return t[1]}function gu(){return 1}function yu(){var t=du,n=pu,e=gu,r=960,i=500,o=20,a=2,u=3*o,s=r+2*u>>a,c=i+2*u>>a,l=iu(20)
function f(r){var i=new Float32Array(s*c),f=new Float32Array(s*c)
r.forEach((function(r,o,l){var f=+t(r,o,l)+u>>a,h=+n(r,o,l)+u>>a,d=+e(r,o,l)
f>=0&&f<s&&h>=0&&h<c&&(i[f+h*s]+=d)})),fu({width:s,height:c,data:i},{width:s,height:c,data:f},o>>a),hu({width:s,height:c,data:f},{width:s,height:c,data:i},o>>a),fu({width:s,height:c,data:i},{width:s,height:c,data:f},o>>a),hu({width:s,height:c,data:f},{width:s,height:c,data:i},o>>a),fu({width:s,height:c,data:i},{width:s,height:c,data:f},o>>a),hu({width:s,height:c,data:f},{width:s,height:c,data:i},o>>a)
var d=l(i)
if(!Array.isArray(d)){var p=function(t,n){let e
for(const r of t)null!=r&&(e<r||void 0===e&&r>=r)&&(e=r)
return e}(i)
d=tu(0,p,d),(d=nu(0,Math.floor(p/d)*d,d)).shift()}return lu().thresholds(d).size([s,c])(i).map(h)}function h(t){return t.value*=Math.pow(2,-2*a),t.coordinates.forEach(d),t}function d(t){t.forEach(p)}function p(t){t.forEach(g)}function g(t){t[0]=t[0]*Math.pow(2,a)-u,t[1]=t[1]*Math.pow(2,a)-u}function y(){return s=r+2*(u=3*o)>>a,c=i+2*u>>a,f}return f.x=function(n){return arguments.length?(t="function"==typeof n?n:iu(+n),f):t},f.y=function(t){return arguments.length?(n="function"==typeof t?t:iu(+t),f):n},f.weight=function(t){return arguments.length?(e="function"==typeof t?t:iu(+t),f):e},f.size=function(t){if(!arguments.length)return[r,i]
var n=+t[0],e=+t[1]
if(!(n>=0&&e>=0))throw new Error("invalid size")
return r=n,i=e,y()},f.cellSize=function(t){if(!arguments.length)return 1<<a
if(!((t=+t)>=1))throw new Error("invalid cell size")
return a=Math.floor(Math.log(t)/Math.LN2),y()},f.thresholds=function(t){return arguments.length?(l="function"==typeof t?t:Array.isArray(t)?iu(eu.call(t)):iu(t),f):l},f.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1))
if(!((t=+t)>=0))throw new Error("invalid bandwidth")
return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),y()},f}const _u=Math.pow(2,-52),vu=new Uint32Array(512)
class mu{static from(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Cu,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Pu
const r=t.length,i=new Float64Array(2*r)
for(let o=0;o<r;o++){const r=t[o]
i[2*o]=n(r),i[2*o+1]=e(r)}return new mu(i)}constructor(t){const n=t.length>>1
if(n>0&&"number"!=typeof t[0])throw new Error("Expected coords to contain numbers.")
this.coords=t
const e=Math.max(2*n-5,0)
this._triangles=new Uint32Array(3*e),this._halfedges=new Int32Array(3*e),this._hashSize=Math.ceil(Math.sqrt(n)),this._hullPrev=new Uint32Array(n),this._hullNext=new Uint32Array(n),this._hullTri=new Uint32Array(n),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(n),this._dists=new Float64Array(n),this.update()}update(){const{coords:t,_hullPrev:n,_hullNext:e,_hullTri:r,_hullHash:i}=this,o=t.length>>1
let a=1/0,u=1/0,s=-1/0,c=-1/0
for(let M=0;M<o;M++){const n=t[2*M],e=t[2*M+1]
n<a&&(a=n),e<u&&(u=e),n>s&&(s=n),e>c&&(c=e),this._ids[M]=M}const l=(a+s)/2,f=(u+c)/2
let h,d,p,g=1/0
for(let M=0;M<o;M++){const n=xu(l,f,t[2*M],t[2*M+1])
n<g&&(h=M,g=n)}const y=t[2*h],_=t[2*h+1]
g=1/0
for(let M=0;M<o;M++){if(M===h)continue
const n=xu(y,_,t[2*M],t[2*M+1])
n<g&&n>0&&(d=M,g=n)}let v=t[2*d],m=t[2*d+1],x=1/0
for(let M=0;M<o;M++){if(M===h||M===d)continue
const n=Au(y,_,v,m,t[2*M],t[2*M+1])
n<x&&(p=M,x=n)}let b=t[2*p],w=t[2*p+1]
if(x===1/0){for(let r=0;r<o;r++)this._dists[r]=t[2*r]-t[0]||t[2*r+1]-t[1]
Mu(this._ids,this._dists,0,o-1)
const n=new Uint32Array(o)
let e=0
for(let t=0,r=-1/0;t<o;t++){const i=this._ids[t]
this._dists[i]>r&&(n[e++]=i,r=this._dists[i])}return this.hull=n.subarray(0,e),this.triangles=new Uint32Array(0),void(this.halfedges=new Uint32Array(0))}if(wu(y,_,v,m,b,w)){const t=d,n=v,e=m
d=p,v=b,m=w,p=t,b=n,w=e}const S=function(t,n,e,r,i,o){const a=e-t,u=r-n,s=i-t,c=o-n,l=a*a+u*u,f=s*s+c*c,h=.5/(a*c-u*s)
return{x:t+(c*l-u*f)*h,y:n+(a*f-s*l)*h}}(y,_,v,m,b,w)
this._cx=S.x,this._cy=S.y
for(let M=0;M<o;M++)this._dists[M]=xu(t[2*M],t[2*M+1],S.x,S.y)
Mu(this._ids,this._dists,0,o-1),this._hullStart=h
let A=3
e[h]=n[p]=d,e[d]=n[h]=p,e[p]=n[d]=h,r[h]=0,r[d]=1,r[p]=2,i.fill(-1),i[this._hashKey(y,_)]=h,i[this._hashKey(v,m)]=d,i[this._hashKey(b,w)]=p,this.trianglesLen=0,this._addTriangle(h,d,p,-1,-1,-1)
for(let M,T,C=0;C<this._ids.length;C++){const o=this._ids[C],a=t[2*o],u=t[2*o+1]
if(C>0&&Math.abs(a-M)<=_u&&Math.abs(u-T)<=_u)continue
if(M=a,T=u,o===h||o===d||o===p)continue
let s=0
for(let t=0,n=this._hashKey(a,u);t<this._hashSize&&(s=i[(n+t)%this._hashSize],-1===s||s===e[s]);t++);s=n[s]
let c,l=s
for(;c=e[l],!wu(a,u,t[2*l],t[2*l+1],t[2*c],t[2*c+1]);)if(l=c,l===s){l=-1
break}if(-1===l)continue
let f=this._addTriangle(l,o,e[l],-1,-1,r[l])
r[o]=this._legalize(f+2),r[l]=f,A++
let g=e[l]
for(;c=e[g],wu(a,u,t[2*g],t[2*g+1],t[2*c],t[2*c+1]);)f=this._addTriangle(g,o,c,r[o],-1,r[g]),r[o]=this._legalize(f+2),e[g]=g,A--,g=c
if(l===s)for(;c=n[l],wu(a,u,t[2*c],t[2*c+1],t[2*l],t[2*l+1]);)f=this._addTriangle(c,o,l,-1,r[l],r[c]),this._legalize(f+2),r[c]=f,e[l]=l,A--,l=c
this._hullStart=n[o]=l,e[l]=n[g]=o,e[o]=g,i[this._hashKey(a,u)]=o,i[this._hashKey(t[2*l],t[2*l+1])]=l}this.hull=new Uint32Array(A)
for(let M=0,T=this._hullStart;M<A;M++)this.hull[M]=T,T=e[T]
this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,n){return Math.floor(function(t,n){const e=t/(Math.abs(t)+Math.abs(n))
return(n>0?3-e:1+e)/4}(t-this._cx,n-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:n,_halfedges:e,coords:r}=this
let i=0,o=0
for(;;){const a=e[t],u=t-t%3
if(o=u+(t+2)%3,-1===a){if(0===i)break
t=vu[--i]
continue}const s=a-a%3,c=u+(t+1)%3,l=s+(a+2)%3,f=n[o],h=n[t],d=n[c],p=n[l]
if(Su(r[2*f],r[2*f+1],r[2*h],r[2*h+1],r[2*d],r[2*d+1],r[2*p],r[2*p+1])){n[t]=p,n[a]=f
const r=e[l]
if(-1===r){let n=this._hullStart
do{if(this._hullTri[n]===l){this._hullTri[n]=t
break}n=this._hullPrev[n]}while(n!==this._hullStart)}this._link(t,r),this._link(a,e[o]),this._link(o,l)
const u=s+(a+1)%3
i<vu.length&&(vu[i++]=u)}else{if(0===i)break
t=vu[--i]}}return o}_link(t,n){this._halfedges[t]=n,-1!==n&&(this._halfedges[n]=t)}_addTriangle(t,n,e,r,i,o){const a=this.trianglesLen
return this._triangles[a]=t,this._triangles[a+1]=n,this._triangles[a+2]=e,this._link(a,r),this._link(a+1,i),this._link(a+2,o),this.trianglesLen+=3,a}}function xu(t,n,e,r){const i=t-e,o=n-r
return i*i+o*o}function bu(t,n,e,r,i,o){const a=(r-n)*(i-t),u=(e-t)*(o-n)
return Math.abs(a-u)>=33306690738754716e-32*Math.abs(a+u)?a-u:0}function wu(t,n,e,r,i,o){return(bu(i,o,t,n,e,r)||bu(t,n,e,r,i,o)||bu(e,r,i,o,t,n))<0}function Su(t,n,e,r,i,o,a,u){const s=t-a,c=n-u,l=e-a,f=r-u,h=i-a,d=o-u,p=l*l+f*f,g=h*h+d*d
return s*(f*g-p*d)-c*(l*g-p*h)+(s*s+c*c)*(l*d-f*h)<0}function Au(t,n,e,r,i,o){const a=e-t,u=r-n,s=i-t,c=o-n,l=a*a+u*u,f=s*s+c*c,h=.5/(a*c-u*s),d=(c*l-u*f)*h,p=(a*f-s*l)*h
return d*d+p*p}function Mu(t,n,e,r){if(r-e<=20)for(let i=e+1;i<=r;i++){const r=t[i],o=n[r]
let a=i-1
for(;a>=e&&n[t[a]]>o;)t[a+1]=t[a--]
t[a+1]=r}else{let i=e+1,o=r
Tu(t,e+r>>1,i),n[t[e]]>n[t[r]]&&Tu(t,e,r),n[t[i]]>n[t[r]]&&Tu(t,i,r),n[t[e]]>n[t[i]]&&Tu(t,e,i)
const a=t[i],u=n[a]
for(;;){do{i++}while(n[t[i]]<u)
do{o--}while(n[t[o]]>u)
if(o<i)break
Tu(t,i,o)}t[e+1]=t[o],t[o]=a,r-i+1>=o-e?(Mu(t,n,i,r),Mu(t,n,e,o-1)):(Mu(t,n,e,o-1),Mu(t,n,i,r))}}function Tu(t,n,e){const r=t[n]
t[n]=t[e],t[e]=r}function Cu(t){return t[0]}function Pu(t){return t[1]}const Eu=1e-6
class ku{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(t,n){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(t,n){this._+=`L${this._x1=+t},${this._y1=+n}`}arc(t,n,e){const r=(t=+t)+(e=+e),i=n=+n
if(e<0)throw new Error("negative radius")
null===this._x1?this._+=`M${r},${i}`:(Math.abs(this._x1-r)>Eu||Math.abs(this._y1-i)>Eu)&&(this._+="L"+r+","+i),e&&(this._+=`A${e},${e},0,1,1,${t-e},${n}A${e},${e},0,1,1,${this._x1=r},${this._y1=i}`)}rect(t,n,e,r){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${+e}v${+r}h${-e}Z`}value(){return this._||null}}class Nu{constructor(){this._=[]}moveTo(t,n){this._.push([t,n])}closePath(){this._.push(this._[0].slice())}lineTo(t,n){this._.push([t,n])}value(){return this._.length?this._:null}}class Lu{constructor(t){let[n,e,r,i]=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,960,500]
if(!((r=+r)>=(n=+n)&&(i=+i)>=(e=+e)))throw new Error("invalid bounds")
this.delaunay=t,this._circumcenters=new Float64Array(2*t.points.length),this.vectors=new Float64Array(2*t.points.length),this.xmax=r,this.xmin=n,this.ymax=i,this.ymin=e,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:t,hull:n,triangles:e},vectors:r}=this,i=this.circumcenters=this._circumcenters.subarray(0,e.length/3*2)
for(let h,d,p=0,g=0,y=e.length;p<y;p+=3,g+=2){const n=2*e[p],r=2*e[p+1],o=2*e[p+2],a=t[n],u=t[n+1],s=t[r],c=t[r+1],l=t[o],f=t[o+1],y=s-a,_=c-u,v=l-a,m=f-u,x=y*y+_*_,b=v*v+m*m,w=2*(y*m-_*v)
if(w)if(Math.abs(w)<1e-8)h=(a+l)/2,d=(u+f)/2
else{const t=1/w
h=a+(m*x-_*b)*t,d=u+(y*b-v*x)*t}else h=(a+l)/2-1e8*m,d=(u+f)/2+1e8*v
i[g]=h,i[g+1]=d}let o,a,u,s=n[n.length-1],c=4*s,l=t[2*s],f=t[2*s+1]
r.fill(0)
for(let h=0;h<n.length;++h)s=n[h],o=c,a=l,u=f,c=4*s,l=t[2*s],f=t[2*s+1],r[o+2]=r[c]=u-f,r[o+3]=r[c+1]=l-a}render(t){const n=null==t?t=new ku:void 0,{delaunay:{halfedges:e,inedges:r,hull:i},circumcenters:o,vectors:a}=this
if(i.length<=1)return null
for(let c=0,l=e.length;c<l;++c){const n=e[c]
if(n<c)continue
const r=2*Math.floor(c/3),i=2*Math.floor(n/3),a=o[r],u=o[r+1],s=o[i],l=o[i+1]
this._renderSegment(a,u,s,l,t)}let u,s=i[i.length-1]
for(let c=0;c<i.length;++c){u=s,s=i[c]
const n=2*Math.floor(r[s]/3),e=o[n],l=o[n+1],f=4*u,h=this._project(e,l,a[f+2],a[f+3])
h&&this._renderSegment(e,l,h[0],h[1],t)}return n&&n.value()}renderBounds(t){const n=null==t?t=new ku:void 0
return t.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),n&&n.value()}renderCell(t,n){const e=null==n?n=new ku:void 0,r=this._clip(t)
if(null===r||!r.length)return
n.moveTo(r[0],r[1])
let i=r.length
for(;r[0]===r[i-2]&&r[1]===r[i-1]&&i>1;)i-=2
for(let o=2;o<i;o+=2)r[o]===r[o-2]&&r[o+1]===r[o-1]||n.lineTo(r[o],r[o+1])
return n.closePath(),e&&e.value()}*cellPolygons(){const{delaunay:{points:t}}=this
for(let n=0,e=t.length/2;n<e;++n){const t=this.cellPolygon(n)
t&&(t.index=n,yield t)}}cellPolygon(t){const n=new Nu
return this.renderCell(t,n),n.value()}_renderSegment(t,n,e,r,i){let o
const a=this._regioncode(t,n),u=this._regioncode(e,r)
0===a&&0===u?(i.moveTo(t,n),i.lineTo(e,r)):(o=this._clipSegment(t,n,e,r,a,u))&&(i.moveTo(o[0],o[1]),i.lineTo(o[2],o[3]))}contains(t,n,e){return(n=+n)==n&&(e=+e)==e&&this.delaunay._step(t,n,e)===t}*neighbors(t){const n=this._clip(t)
if(n)for(const e of this.delaunay.neighbors(t)){const t=this._clip(e)
if(t)t:for(let r=0,i=n.length;r<i;r+=2)for(let o=0,a=t.length;o<a;o+=2)if(n[r]==t[o]&&n[r+1]==t[o+1]&&n[(r+2)%i]==t[(o+a-2)%a]&&n[(r+3)%i]==t[(o+a-1)%a]){yield e
break t}}}_cell(t){const{circumcenters:n,delaunay:{inedges:e,halfedges:r,triangles:i}}=this,o=e[t]
if(-1===o)return null
const a=[]
let u=o
do{const e=Math.floor(u/3)
if(a.push(n[2*e],n[2*e+1]),u=u%3==2?u-2:u+1,i[u]!==t)break
u=r[u]}while(u!==o&&-1!==u)
return a}_clip(t){if(0===t&&1===this.delaunay.hull.length)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin]
const n=this._cell(t)
if(null===n)return null
const{vectors:e}=this,r=4*t
return e[r]||e[r+1]?this._clipInfinite(t,n,e[r],e[r+1],e[r+2],e[r+3]):this._clipFinite(t,n)}_clipFinite(t,n){const e=n.length
let r,i,o,a,u,s=null,c=n[e-2],l=n[e-1],f=this._regioncode(c,l)
for(let h=0;h<e;h+=2)if(r=c,i=l,c=n[h],l=n[h+1],o=f,f=this._regioncode(c,l),0===o&&0===f)a=u,u=0,s?s.push(c,l):s=[c,l]
else{let n,e,h,d,p
if(0===o){if(null===(n=this._clipSegment(r,i,c,l,o,f)))continue;[e,h,d,p]=n}else{if(null===(n=this._clipSegment(c,l,r,i,f,o)))continue;[d,p,e,h]=n,a=u,u=this._edgecode(e,h),a&&u&&this._edge(t,a,u,s,s.length),s?s.push(e,h):s=[e,h]}a=u,u=this._edgecode(d,p),a&&u&&this._edge(t,a,u,s,s.length),s?s.push(d,p):s=[d,p]}if(s)a=u,u=this._edgecode(s[0],s[1]),a&&u&&this._edge(t,a,u,s,s.length)
else if(this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin]
return s}_clipSegment(t,n,e,r,i,o){for(;;){if(0===i&&0===o)return[t,n,e,r]
if(i&o)return null
let a,u,s=i||o
8&s?(a=t+(e-t)*(this.ymax-n)/(r-n),u=this.ymax):4&s?(a=t+(e-t)*(this.ymin-n)/(r-n),u=this.ymin):2&s?(u=n+(r-n)*(this.xmax-t)/(e-t),a=this.xmax):(u=n+(r-n)*(this.xmin-t)/(e-t),a=this.xmin),i?(t=a,n=u,i=this._regioncode(t,n)):(e=a,r=u,o=this._regioncode(e,r))}}_clipInfinite(t,n,e,r,i,o){let a,u=Array.from(n)
if((a=this._project(u[0],u[1],e,r))&&u.unshift(a[0],a[1]),(a=this._project(u[u.length-2],u[u.length-1],i,o))&&u.push(a[0],a[1]),u=this._clipFinite(t,u))for(let s,c=0,l=u.length,f=this._edgecode(u[l-2],u[l-1]);c<l;c+=2)s=f,f=this._edgecode(u[c],u[c+1]),s&&f&&(c=this._edge(t,s,f,u,c),l=u.length)
else this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(u=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax])
return u}_edge(t,n,e,r,i){for(;n!==e;){let e,o
switch(n){case 5:n=4
continue
case 4:n=6,e=this.xmax,o=this.ymin
break
case 6:n=2
continue
case 2:n=10,e=this.xmax,o=this.ymax
break
case 10:n=8
continue
case 8:n=9,e=this.xmin,o=this.ymax
break
case 9:n=1
continue
case 1:n=5,e=this.xmin,o=this.ymin}r[i]===e&&r[i+1]===o||!this.contains(t,e,o)||(r.splice(i,0,e,o),i+=2)}if(r.length>4)for(let o=0;o<r.length;o+=2){const t=(o+2)%r.length,n=(o+4)%r.length;(r[o]===r[t]&&r[t]===r[n]||r[o+1]===r[t+1]&&r[t+1]===r[n+1])&&(r.splice(t,2),o-=2)}return i}_project(t,n,e,r){let i,o,a,u=1/0
if(r<0){if(n<=this.ymin)return null;(i=(this.ymin-n)/r)<u&&(a=this.ymin,o=t+(u=i)*e)}else if(r>0){if(n>=this.ymax)return null;(i=(this.ymax-n)/r)<u&&(a=this.ymax,o=t+(u=i)*e)}if(e>0){if(t>=this.xmax)return null;(i=(this.xmax-t)/e)<u&&(o=this.xmax,a=n+(u=i)*r)}else if(e<0){if(t<=this.xmin)return null;(i=(this.xmin-t)/e)<u&&(o=this.xmin,a=n+(u=i)*r)}return[o,a]}_edgecode(t,n){return(t===this.xmin?1:t===this.xmax?2:0)|(n===this.ymin?4:n===this.ymax?8:0)}_regioncode(t,n){return(t<this.xmin?1:t>this.xmax?2:0)|(n<this.ymin?4:n>this.ymax?8:0)}}const Ru=2*Math.PI,Vu=Math.pow
function Ou(t){return t[0]}function Gu(t){return t[1]}function Du(t,n,e){return[t+Math.sin(t+n)*e,n+Math.cos(t-n)*e]}class Iu{static from(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ou,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Gu,r=arguments.length>3?arguments[3]:void 0
return new Iu("length"in t?function(t,n,e,r){const i=t.length,o=new Float64Array(2*i)
for(let a=0;a<i;++a){const i=t[a]
o[2*a]=n.call(r,i,a,t),o[2*a+1]=e.call(r,i,a,t)}return o}(t,n,e,r):Float64Array.from(function*(t,n,e,r){let i=0
for(const o of t)yield n.call(r,o,i,t),yield e.call(r,o,i,t),++i}(t,n,e,r)))}constructor(t){this._delaunator=new mu(t),this.inedges=new Int32Array(t.length/2),this._hullIndex=new Int32Array(t.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const t=this._delaunator,n=this.points
if(t.hull&&t.hull.length>2&&function(t){const{triangles:n,coords:e}=t
for(let r=0;r<n.length;r+=3){const t=2*n[r],i=2*n[r+1],o=2*n[r+2]
if((e[o]-e[t])*(e[i+1]-e[t+1])-(e[i]-e[t])*(e[o+1]-e[t+1])>1e-10)return!1}return!0}(t)){this.collinear=Int32Array.from({length:n.length/2},((t,n)=>n)).sort(((t,e)=>n[2*t]-n[2*e]||n[2*t+1]-n[2*e+1]))
const t=this.collinear[0],e=this.collinear[this.collinear.length-1],r=[n[2*t],n[2*t+1],n[2*e],n[2*e+1]],i=1e-8*Math.hypot(r[3]-r[1],r[2]-r[0])
for(let o=0,a=n.length/2;o<a;++o){const t=Du(n[2*o],n[2*o+1],i)
n[2*o]=t[0],n[2*o+1]=t[1]}this._delaunator=new mu(n)}else delete this.collinear
const e=this.halfedges=this._delaunator.halfedges,r=this.hull=this._delaunator.hull,i=this.triangles=this._delaunator.triangles,o=this.inedges.fill(-1),a=this._hullIndex.fill(-1)
for(let u=0,s=e.length;u<s;++u){const t=i[u%3==2?u-2:u+1];-1!==e[u]&&-1!==o[t]||(o[t]=u)}for(let u=0,s=r.length;u<s;++u)a[r[u]]=u
r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],this.triangles[1]=r[1],this.triangles[2]=r[1],o[r[0]]=1,2===r.length&&(o[r[1]]=0))}voronoi(t){return new Lu(this,t)}*neighbors(t){const{inedges:n,hull:e,_hullIndex:r,halfedges:i,triangles:o,collinear:a}=this
if(a){const n=a.indexOf(t)
return n>0&&(yield a[n-1]),void(n<a.length-1&&(yield a[n+1]))}const u=n[t]
if(-1===u)return
let s=u,c=-1
do{if(yield c=o[s],s=s%3==2?s-2:s+1,o[s]!==t)return
if(s=i[s],-1===s){const n=e[(r[t]+1)%e.length]
return void(n!==c&&(yield n))}}while(s!==u)}find(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if((t=+t)!=t||(n=+n)!=n)return-1
const r=e
let i
for(;(i=this._step(e,t,n))>=0&&i!==e&&i!==r;)e=i
return i}_step(t,n,e){const{inedges:r,hull:i,_hullIndex:o,halfedges:a,triangles:u,points:s}=this
if(-1===r[t]||!s.length)return(t+1)%(s.length>>1)
let c=t,l=Vu(n-s[2*t],2)+Vu(e-s[2*t+1],2)
const f=r[t]
let h=f
do{let r=u[h]
const f=Vu(n-s[2*r],2)+Vu(e-s[2*r+1],2)
if(f<l&&(l=f,c=r),h=h%3==2?h-2:h+1,u[h]!==t)break
if(h=a[h],-1===h){if(h=i[(o[t]+1)%i.length],h!==r&&Vu(n-s[2*h],2)+Vu(e-s[2*h+1],2)<l)return h
break}}while(h!==f)
return c}render(t){const n=null==t?t=new ku:void 0,{points:e,halfedges:r,triangles:i}=this
for(let o=0,a=r.length;o<a;++o){const n=r[o]
if(n<o)continue
const a=2*i[o],u=2*i[n]
t.moveTo(e[a],e[a+1]),t.lineTo(e[u],e[u+1])}return this.renderHull(t),n&&n.value()}renderPoints(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2
const e=null==t?t=new ku:void 0,{points:r}=this
for(let i=0,o=r.length;i<o;i+=2){const e=r[i],o=r[i+1]
t.moveTo(e+n,o),t.arc(e,o,n,0,Ru)}return e&&e.value()}renderHull(t){const n=null==t?t=new ku:void 0,{hull:e,points:r}=this,i=2*e[0],o=e.length
t.moveTo(r[i],r[i+1])
for(let a=1;a<o;++a){const n=2*e[a]
t.lineTo(r[n],r[n+1])}return t.closePath(),n&&n.value()}hullPolygon(){const t=new Nu
return this.renderHull(t),t.value()}renderTriangle(t,n){const e=null==n?n=new ku:void 0,{points:r,triangles:i}=this,o=2*i[t*=3],a=2*i[t+1],u=2*i[t+2]
return n.moveTo(r[o],r[o+1]),n.lineTo(r[a],r[a+1]),n.lineTo(r[u],r[u+1]),n.closePath(),e&&e.value()}*trianglePolygons(){const{triangles:t}=this
for(let n=0,e=t.length/3;n<e;++n)yield this.trianglePolygon(n)}trianglePolygon(t){const n=new Nu
return this.renderTriangle(t,n),n.value()}}var zu={value:()=>{}}
function Fu(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t)
r[t]=[]}return new Yu(r)}function Yu(t){this._=t}function Uu(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".")
if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t)
return{type:t,name:e}}))}function Bu(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function Hu(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=zu,t=t.slice(0,r).concat(t.slice(r+1))
break}return null!=e&&t.push({name:n,value:e}),t}Yu.prototype=Fu.prototype={constructor:Yu,on:function(t,n){var e,r=this._,i=Uu(t+"",r),o=-1,a=i.length
if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n)
for(;++o<a;)if(e=(t=i[o]).type)r[e]=Hu(r[e],t.name,n)
else if(null==n)for(e in r)r[e]=Hu(r[e],t.name,null)
return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=Bu(r[e],t.name)))return e},copy:function(){var t={},n=this._
for(var e in n)t[e]=n[e].slice()
return new Yu(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2]
if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}}
const Xu=Fu
function ju(){}function qu(t){return null==t?ju:function(){return this.querySelector(t)}}function Wu(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Qu(){return[]}function $u(t){return null==t?Qu:function(){return this.querySelectorAll(t)}}function Zu(t){return function(){return this.matches(t)}}function Ku(t){return function(n){return n.matches(t)}}var Ju=Array.prototype.find
function ts(){return this.firstElementChild}var ns=Array.prototype.filter
function es(){return this.children}function rs(t){return new Array(t.length)}function is(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function os(t){return function(){return t}}function as(t,n,e,r,i,o){for(var a,u=0,s=n.length,c=o.length;u<c;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new is(t,o[u])
for(;u<s;++u)(a=n[u])&&(i[u]=a)}function us(t,n,e,r,i,o,a){var u,s,c,l=new Map,f=n.length,h=o.length,d=new Array(f)
for(u=0;u<f;++u)(s=n[u])&&(d[u]=c=a.call(s,s.__data__,u,n)+"",l.has(c)?i[u]=s:l.set(c,s))
for(u=0;u<h;++u)c=a.call(t,o[u],u,o)+"",(s=l.get(c))?(r[u]=s,s.__data__=o[u],l.delete(c)):e[u]=new is(t,o[u])
for(u=0;u<f;++u)(s=n[u])&&l.get(d[u])===s&&(i[u]=s)}function ss(t){return t.__data__}function cs(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}is.prototype={constructor:is,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}
var ls="http://www.w3.org/1999/xhtml"
const fs={svg:"http://www.w3.org/2000/svg",xhtml:ls,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}
function hs(t){var n=t+="",e=n.indexOf(":")
return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),fs.hasOwnProperty(n)?{space:fs[n],local:t}:t}function ds(t){return function(){this.removeAttribute(t)}}function ps(t){return function(){this.removeAttributeNS(t.space,t.local)}}function gs(t,n){return function(){this.setAttribute(t,n)}}function ys(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function _s(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function vs(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function ms(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function xs(t){return function(){this.style.removeProperty(t)}}function bs(t,n,e){return function(){this.style.setProperty(t,n,e)}}function ws(t,n,e){return function(){var r=n.apply(this,arguments)
null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Ss(t,n){return t.style.getPropertyValue(n)||ms(t).getComputedStyle(t,null).getPropertyValue(n)}function As(t){return function(){delete this[t]}}function Ms(t,n){return function(){this[t]=n}}function Ts(t,n){return function(){var e=n.apply(this,arguments)
null==e?delete this[t]:this[t]=e}}function Cs(t){return t.trim().split(/^|\s+/)}function Ps(t){return t.classList||new Es(t)}function Es(t){this._node=t,this._names=Cs(t.getAttribute("class")||"")}function ks(t,n){for(var e=Ps(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Ns(t,n){for(var e=Ps(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function Ls(t){return function(){ks(this,t)}}function Rs(t){return function(){Ns(this,t)}}function Vs(t,n){return function(){(n.apply(this,arguments)?ks:Ns)(this,t)}}function Os(){this.textContent=""}function Gs(t){return function(){this.textContent=t}}function Ds(t){return function(){var n=t.apply(this,arguments)
this.textContent=null==n?"":n}}function Is(){this.innerHTML=""}function zs(t){return function(){this.innerHTML=t}}function Fs(t){return function(){var n=t.apply(this,arguments)
this.innerHTML=null==n?"":n}}function Ys(){this.nextSibling&&this.parentNode.appendChild(this)}function Us(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Bs(t){return function(){var n=this.ownerDocument,e=this.namespaceURI
return e===ls&&n.documentElement.namespaceURI===ls?n.createElement(t):n.createElementNS(e,t)}}function Hs(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Xs(t){var n=hs(t)
return(n.local?Hs:Bs)(n)}function js(){return null}function qs(){var t=this.parentNode
t&&t.removeChild(this)}function Ws(){var t=this.cloneNode(!1),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function Qs(){var t=this.cloneNode(!0),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function $s(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".")
return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function Zs(t){return function(){var n=this.__on
if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function Ks(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n)
if(i)for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n)
this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function Js(t,n,e){var r=ms(t),i=r.CustomEvent
"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function tc(t,n){return function(){return Js(this,t,n)}}function nc(t,n){return function(){return Js(this,t,n.apply(this,arguments))}}Es.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t)
n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}}
var ec=[null]
function rc(t,n){this._groups=t,this._parents=n}function ic(){return new rc([[document.documentElement]],ec)}rc.prototype=ic.prototype={constructor:rc,select:function(t){"function"!=typeof t&&(t=qu(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],s=u.length,c=r[i]=new Array(s),l=0;l<s;++l)(o=u[l])&&(a=t.call(o,o.__data__,l,u))&&("__data__"in o&&(a.__data__=o.__data__),c[l]=a)
return new rc(r,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){var n=t.apply(this,arguments)
return null==n?[]:Wu(n)}}(t):$u(t)
for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],s=u.length,c=0;c<s;++c)(a=u[c])&&(r.push(t.call(a,a.__data__,c,u)),i.push(a))
return new rc(r,i)},selectChild:function(t){return this.select(null==t?ts:function(t){return function(){return Ju.call(this.children,t)}}("function"==typeof t?t:Ku(t)))},selectChildren:function(t){return this.selectAll(null==t?es:function(t){return function(){return ns.call(this.children,t)}}("function"==typeof t?t:Ku(t)))},filter:function(t){"function"!=typeof t&&(t=Zu(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o)
return new rc(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,ss)
var e=n?us:as,r=this._parents,i=this._groups
"function"!=typeof t&&(t=os(t))
for(var o=i.length,a=new Array(o),u=new Array(o),s=new Array(o),c=0;c<o;++c){var l=r[c],f=i[c],h=f.length,d=Wu(t.call(l,l&&l.__data__,c,r)),p=d.length,g=u[c]=new Array(p),y=a[c]=new Array(p),_=s[c]=new Array(h)
e(l,f,g,y,_,d,n)
for(var v,m,x=0,b=0;x<p;++x)if(v=g[x]){for(x>=b&&(b=x+1);!(m=y[b])&&++b<p;);v._next=m||null}}return(a=new rc(a,r))._enter=u,a._exit=s,a},enter:function(){return new rc(this._enter||this._groups.map(rs),this._parents)},exit:function(){return new rc(this._exit||this._groups.map(rs),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit()
return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){if(!(t instanceof rc))throw new Error("invalid merge")
for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],l=e[u],f=c.length,h=a[u]=new Array(f),d=0;d<f;++d)(s=c[d]||l[d])&&(h[d]=s)
for(;u<r;++u)a[u]=n[u]
return new rc(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r)
return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=cs)
for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],s=u.length,c=i[o]=new Array(s),l=0;l<s;++l)(a=u[l])&&(c[l]=a)
c.sort(n)}return new rc(i,this._parents).order()},call:function(){var t=arguments[0]
return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i]
if(a)return a}return null},size:function(){let t=0
for(const n of this)++t
return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o)
return this},attr:function(t,n){var e=hs(t)
if(arguments.length<2){var r=this.node()
return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?ps:ds:"function"==typeof n?e.local?vs:_s:e.local?ys:gs)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?xs:"function"==typeof n?ws:bs)(t,n,null==e?"":e)):Ss(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?As:"function"==typeof n?Ts:Ms)(t,n)):this.node()[t]},classed:function(t,n){var e=Cs(t+"")
if(arguments.length<2){for(var r=Ps(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1
return!0}return this.each(("function"==typeof n?Vs:n?Ls:Rs)(e,n))},text:function(t){return arguments.length?this.each(null==t?Os:("function"==typeof t?Ds:Gs)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Is:("function"==typeof t?Fs:zs)(t)):this.node().innerHTML},raise:function(){return this.each(Ys)},lower:function(){return this.each(Us)},append:function(t){var n="function"==typeof t?t:Xs(t)
return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:Xs(t),r=null==n?js:"function"==typeof n?n:qu(n)
return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(qs)},clone:function(t){return this.select(t?Qs:Ws)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=$s(t+""),a=o.length
if(!(arguments.length<2)){for(u=n?Ks:Zs,r=0;r<a;++r)this.each(u(o[r],n,e))
return this}var u=this.node().__on
if(u)for(var s,c=0,l=u.length;c<l;++c)for(r=0,s=u[c];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?nc:tc)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}}
const oc=ic
function ac(t){return"string"==typeof t?new rc([[document.querySelector(t)]],[document.documentElement]):new rc([[t]],ec)}function uc(t){let n
for(;n=t.sourceEvent;)t=n
return t}function sc(t,n){if(t=uc(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n
if(e.createSVGPoint){var r=e.createSVGPoint()
return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(n.getScreenCTM().inverse())).x,r.y]}if(n.getBoundingClientRect){var i=n.getBoundingClientRect()
return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}}return[t.pageX,t.pageY]}function cc(t){t.stopImmediatePropagation()}function lc(t){t.preventDefault(),t.stopImmediatePropagation()}function fc(t){var n=t.document.documentElement,e=ac(t).on("dragstart.drag",lc,!0)
"onselectstart"in n?e.on("selectstart.drag",lc,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function hc(t,n){var e=t.document.documentElement,r=ac(t).on("dragstart.drag",null)
n&&(r.on("click.drag",lc,!0),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}const dc=t=>()=>t
function pc(t,n){let{sourceEvent:e,subject:r,target:i,identifier:o,active:a,x:u,y:s,dx:c,dy:l,dispatch:f}=n
Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:o,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:u,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:f}})}function gc(t){return!t.ctrlKey&&!t.button}function yc(){return this.parentNode}function _c(t,n){return null==n?{x:t.x,y:t.y}:n}function vc(){return navigator.maxTouchPoints||"ontouchstart"in this}function mc(){var t,n,e,r,i=gc,o=yc,a=_c,u=vc,s={},c=Xu("start","drag","end"),l=0,f=0
function h(t){t.on("mousedown.drag",d).filter(u).on("touchstart.drag",y).on("touchmove.drag",_).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function d(a,u){if(!r&&i.call(this,a,u)){var s=m(this,o.call(this,a,u),a,u,"mouse")
s&&(ac(a.view).on("mousemove.drag",p,!0).on("mouseup.drag",g,!0),fc(a.view),cc(a),e=!1,t=a.clientX,n=a.clientY,s("start",a))}}function p(r){if(lc(r),!e){var i=r.clientX-t,o=r.clientY-n
e=i*i+o*o>f}s.mouse("drag",r)}function g(t){ac(t.view).on("mousemove.drag mouseup.drag",null),hc(t.view,e),lc(t),s.mouse("end",t)}function y(t,n){if(i.call(this,t,n)){var e,r,a=t.changedTouches,u=o.call(this,t,n),s=a.length
for(e=0;e<s;++e)(r=m(this,u,t,n,a[e].identifier,a[e]))&&(cc(t),r("start",t,a[e]))}}function _(t){var n,e,r=t.changedTouches,i=r.length
for(n=0;n<i;++n)(e=s[r[n].identifier])&&(lc(t),e("drag",t,r[n]))}function v(t){var n,e,i=t.changedTouches,o=i.length
for(r&&clearTimeout(r),r=setTimeout((function(){r=null}),500),n=0;n<o;++n)(e=s[i[n].identifier])&&(cc(t),e("end",t,i[n]))}function m(t,n,e,r,i,o){var u,f,d,p=c.copy(),g=sc(o||e,n)
if(null!=(d=a.call(t,new pc("beforestart",{sourceEvent:e,target:h,identifier:i,active:l,x:g[0],y:g[1],dx:0,dy:0,dispatch:p}),r)))return u=d.x-g[0]||0,f=d.y-g[1]||0,function e(o,a,c){var y,_=g
switch(o){case"start":s[i]=e,y=l++
break
case"end":delete s[i],--l
case"drag":g=sc(c||a,n),y=l}p.call(o,t,new pc(o,{sourceEvent:a,subject:d,target:h,identifier:i,active:y,x:g[0]+u,y:g[1]+f,dx:g[0]-_[0],dy:g[1]-_[1],dispatch:p}),r)}}return h.filter=function(t){return arguments.length?(i="function"==typeof t?t:dc(!!t),h):i},h.container=function(t){return arguments.length?(o="function"==typeof t?t:dc(t),h):o},h.subject=function(t){return arguments.length?(a="function"==typeof t?t:dc(t),h):a},h.touchable=function(t){return arguments.length?(u="function"==typeof t?t:dc(!!t),h):u},h.on=function(){var t=c.on.apply(c,arguments)
return t===c?h:t},h.clickDistance=function(t){return arguments.length?(f=(t=+t)*t,h):Math.sqrt(f)},h}pc.prototype.on=function(){var t=this._.on.apply(this._,arguments)
return t===this._?this:t}
var xc={},bc={}
function wc(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'})).join(",")+"}")}function Sc(t){var n=Object.create(null),e=[]
return t.forEach((function(t){for(var r in t)r in n||e.push(n[r]=r)})),e}function Ac(t,n){var e=t+"",r=e.length
return r<n?new Array(n-r+1).join(0)+e:e}function Mc(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0)
function r(t,n){var r,i=[],o=t.length,a=0,u=0,s=o<=0,c=!1
function l(){if(s)return bc
if(c)return c=!1,xc
var n,r,i=a
if(34===t.charCodeAt(i)){for(;a++<o&&34!==t.charCodeAt(a)||34===t.charCodeAt(++a););return(n=a)>=o?s=!0:10===(r=t.charCodeAt(a++))?c=!0:13===r&&(c=!0,10===t.charCodeAt(a)&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if(10===(r=t.charCodeAt(n=a++)))c=!0
else if(13===r)c=!0,10===t.charCodeAt(a)&&++a
else if(r!==e)continue
return t.slice(i,n)}return s=!0,t.slice(i,o)}for(10===t.charCodeAt(o-1)&&--o,13===t.charCodeAt(o-1)&&--o;(r=l())!==bc;){for(var f=[];r!==xc&&r!==bc;)f.push(r),r=l()
n&&null==(f=n(f,u++))||i.push(f)}return i}function i(n,e){return n.map((function(n){return e.map((function(t){return a(n[t])})).join(t)}))}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?function(t){var n=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds()
return isNaN(t)?"Invalid Date":function(t){return t<0?"-"+Ac(-t,6):t>9999?"+"+Ac(t,6):Ac(t,4)}(t.getUTCFullYear())+"-"+Ac(t.getUTCMonth()+1,2)+"-"+Ac(t.getUTCDate(),2)+(i?"T"+Ac(n,2)+":"+Ac(e,2)+":"+Ac(r,2)+"."+Ac(i,3)+"Z":r?"T"+Ac(n,2)+":"+Ac(e,2)+":"+Ac(r,2)+"Z":e||n?"T"+Ac(n,2)+":"+Ac(e,2)+"Z":"")}(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,(function(t,r){if(e)return e(t,r-1)
i=t,e=n?function(t,n){var e=wc(t)
return function(r,i){return n(e(r),i,t)}}(t,n):wc(t)}))
return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=Sc(n)),[e.map(a).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=Sc(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")},formatRow:o,formatValue:a}}var Tc=Mc(","),Cc=Tc.parse,Pc=Tc.parseRows,Ec=Tc.format,kc=Tc.formatBody,Nc=Tc.formatRows,Lc=Tc.formatRow,Rc=Tc.formatValue,Vc=Mc("\t"),Oc=Vc.parse,Gc=Vc.parseRows,Dc=Vc.format,Ic=Vc.formatBody,zc=Vc.formatRows,Fc=Vc.formatRow,Yc=Vc.formatValue
function Uc(t){for(var n in t){var e,r,i=t[n].trim()
if(i)if("true"===i)i=!0
else if("false"===i)i=!1
else if("NaN"===i)i=NaN
else if(isNaN(e=+i)){if(!(r=i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue
Bc&&r[4]&&!r[7]&&(i=i.replace(/-/g,"/").replace(/T/," ")),i=new Date(i)}else i=e
else i=null
t[n]=i}return t}const Bc=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours(),Hc=t=>+t
function Xc(t){return t*t}function jc(t){return t*(2-t)}function qc(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function Wc(t){return t*t*t}function Qc(t){return--t*t*t+1}function $c(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Zc=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),Kc=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Jc=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),tl=Math.PI,nl=tl/2
function el(t){return 1==+t?1:1-Math.cos(t*nl)}function rl(t){return Math.sin(t*nl)}function il(t){return(1-Math.cos(tl*t))/2}function ol(t){return 1.0009775171065494*(Math.pow(2,-10*t)-.0009765625)}function al(t){return ol(1-+t)}function ul(t){return 1-ol(t)}function sl(t){return((t*=2)<=1?ol(1-t):2-ol(t-1))/2}function cl(t){return 1-Math.sqrt(1-t*t)}function ll(t){return Math.sqrt(1- --t*t)}function fl(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var hl=7.5625
function dl(t){return 1-pl(1-t)}function pl(t){return(t=+t)<.36363636363636365?hl*t*t:t<.7272727272727273?hl*(t-=.5454545454545454)*t+.75:t<.9090909090909091?hl*(t-=.8181818181818182)*t+.9375:hl*(t-=.9545454545454546)*t+.984375}function gl(t){return((t*=2)<=1?1-pl(1-t):pl(t-1)+1)/2}var yl=1.70158,_l=function t(n){function e(t){return(t=+t)*t*(n*(t-1)+t)}return n=+n,e.overshoot=t,e}(yl),vl=function t(n){function e(t){return--t*t*((t+1)*n+t)+1}return n=+n,e.overshoot=t,e}(yl),ml=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(yl),xl=2*Math.PI,bl=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=xl)
function i(t){return n*ol(- --t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*xl)},i.period=function(e){return t(n,e)},i}(1,.3),wl=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=xl)
function i(t){return 1-n*ol(t=+t)*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*xl)},i.period=function(e){return t(n,e)},i}(1,.3),Sl=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=xl)
function i(t){return((t=2*t-1)<0?n*ol(-t)*Math.sin((r-t)/e):2-n*ol(t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*xl)},i.period=function(e){return t(n,e)},i}(1,.3)
function Al(t){if(!t.ok)throw new Error(t.status+" "+t.statusText)
return t.blob()}function Ml(t,n){return fetch(t,n).then(Al)}function Tl(t){if(!t.ok)throw new Error(t.status+" "+t.statusText)
return t.arrayBuffer()}function Cl(t,n){return fetch(t,n).then(Tl)}var Pl={},El={}
function kl(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'})).join(",")+"}")}function Nl(t){var n=Object.create(null),e=[]
return t.forEach((function(t){for(var r in t)r in n||e.push(n[r]=r)})),e}function Ll(t,n){var e=t+"",r=e.length
return r<n?new Array(n-r+1).join(0)+e:e}function Rl(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0)
function r(t,n){var r,i=[],o=t.length,a=0,u=0,s=o<=0,c=!1
function l(){if(s)return El
if(c)return c=!1,Pl
var n,r,i=a
if(34===t.charCodeAt(i)){for(;a++<o&&34!==t.charCodeAt(a)||34===t.charCodeAt(++a););return(n=a)>=o?s=!0:10===(r=t.charCodeAt(a++))?c=!0:13===r&&(c=!0,10===t.charCodeAt(a)&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if(10===(r=t.charCodeAt(n=a++)))c=!0
else if(13===r)c=!0,10===t.charCodeAt(a)&&++a
else if(r!==e)continue
return t.slice(i,n)}return s=!0,t.slice(i,o)}for(10===t.charCodeAt(o-1)&&--o,13===t.charCodeAt(o-1)&&--o;(r=l())!==El;){for(var f=[];r!==Pl&&r!==El;)f.push(r),r=l()
n&&null==(f=n(f,u++))||i.push(f)}return i}function i(n,e){return n.map((function(n){return e.map((function(t){return a(n[t])})).join(t)}))}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?function(t){var n=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds()
return isNaN(t)?"Invalid Date":function(t){return t<0?"-"+Ll(-t,6):t>9999?"+"+Ll(t,6):Ll(t,4)}(t.getUTCFullYear())+"-"+Ll(t.getUTCMonth()+1,2)+"-"+Ll(t.getUTCDate(),2)+(i?"T"+Ll(n,2)+":"+Ll(e,2)+":"+Ll(r,2)+"."+Ll(i,3)+"Z":r?"T"+Ll(n,2)+":"+Ll(e,2)+":"+Ll(r,2)+"Z":e||n?"T"+Ll(n,2)+":"+Ll(e,2)+"Z":"")}(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,(function(t,r){if(e)return e(t,r-1)
i=t,e=n?function(t,n){var e=kl(t)
return function(r,i){return n(e(r),i,t)}}(t,n):kl(t)}))
return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=Nl(n)),[e.map(a).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=Nl(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")},formatRow:o,formatValue:a}}var Vl=Rl(","),Ol=Vl.parse,Gl=(Vl.parseRows,Vl.format,Vl.formatBody,Vl.formatRows,Vl.formatRow,Vl.formatValue,Rl("\t")),Dl=Gl.parse
function Il(t){if(!t.ok)throw new Error(t.status+" "+t.statusText)
return t.text()}function zl(t,n){return fetch(t,n).then(Il)}function Fl(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),zl(n,e).then((function(n){return t(n,r)}))}}function Yl(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0)
var i=Rl(t)
return zl(n,e).then((function(t){return i.parse(t,r)}))}Gl.parseRows,Gl.format,Gl.formatBody,Gl.formatRows,Gl.formatRow,Gl.formatValue
var Ul=Fl(Ol),Bl=Fl(Dl)
function Hl(t,n){return new Promise((function(e,r){var i=new Image
for(var o in n)i[o]=n[o]
i.onerror=r,i.onload=function(){e(i)},i.src=t}))}function Xl(t){if(!t.ok)throw new Error(t.status+" "+t.statusText)
if(204!==t.status&&205!==t.status)return t.json()}function jl(t,n){return fetch(t,n).then(Xl)}function ql(t){return(n,e)=>zl(n,e).then((n=>(new DOMParser).parseFromString(n,t)))}const Wl=ql("application/xml")
var Ql=ql("text/html"),$l=ql("image/svg+xml")
function Zl(t,n){var e,r=1
function i(){var i,o,a=e.length,u=0,s=0
for(i=0;i<a;++i)u+=(o=e[i]).x,s+=o.y
for(u=(u/a-t)*r,s=(s/a-n)*r,i=0;i<a;++i)(o=e[i]).x-=u,o.y-=s}return null==t&&(t=0),null==n&&(n=0),i.initialize=function(t){e=t},i.x=function(n){return arguments.length?(t=+n,i):t},i.y=function(t){return arguments.length?(n=+t,i):n},i.strength=function(t){return arguments.length?(r=+t,i):r},i}function Kl(t,n,e,r){if(isNaN(n)||isNaN(e))return t
var i,o,a,u,s,c,l,f,h,d=t._root,p={data:r},g=t._x0,y=t._y0,_=t._x1,v=t._y1
if(!d)return t._root=p,t
for(;d.length;)if((c=n>=(o=(g+_)/2))?g=o:_=o,(l=e>=(a=(y+v)/2))?y=a:v=a,i=d,!(d=d[f=l<<1|c]))return i[f]=p,t
if(u=+t._x.call(null,d.data),s=+t._y.call(null,d.data),n===u&&e===s)return p.next=d,i?i[f]=p:t._root=p,t
do{i=i?i[f]=new Array(4):t._root=new Array(4),(c=n>=(o=(g+_)/2))?g=o:_=o,(l=e>=(a=(y+v)/2))?y=a:v=a}while((f=l<<1|c)==(h=(s>=a)<<1|u>=o))
return i[h]=d,i[f]=p,t}function Jl(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function tf(t){return t[0]}function nf(t){return t[1]}function ef(t,n,e){var r=new rf(null==n?tf:n,null==e?nf:e,NaN,NaN,NaN,NaN)
return null==t?r:r.addAll(t)}function rf(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function of(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data}
return n}var af=ef.prototype=rf.prototype
function uf(t){return function(){return t}}function sf(t){return 1e-6*(t()-.5)}function cf(t){return t.x+t.vx}function lf(t){return t.y+t.vy}function ff(t){var n,e,r,i=1,o=1
function a(){for(var t,a,s,c,l,f,h,d=n.length,p=0;p<o;++p)for(a=ef(n,cf,lf).visitAfter(u),t=0;t<d;++t)s=n[t],f=e[s.index],h=f*f,c=s.x+s.vx,l=s.y+s.vy,a.visit(g)
function g(t,n,e,o,a){var u=t.data,d=t.r,p=f+d
if(!u)return n>c+p||o<c-p||e>l+p||a<l-p
if(u.index>s.index){var g=c-u.x-u.vx,y=l-u.y-u.vy,_=g*g+y*y
_<p*p&&(0===g&&(_+=(g=sf(r))*g),0===y&&(_+=(y=sf(r))*y),_=(p-(_=Math.sqrt(_)))/_*i,s.vx+=(g*=_)*(p=(d*=d)/(h+d)),s.vy+=(y*=_)*p,u.vx-=g*(p=1-p),u.vy-=y*p)}}}function u(t){if(t.data)return t.r=e[t.data.index]
for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function s(){if(n){var r,i,o=n.length
for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=uf(null==t?1:+t)),a.initialize=function(t,e){n=t,r=e,s()},a.iterations=function(t){return arguments.length?(o=+t,a):o},a.strength=function(t){return arguments.length?(i=+t,a):i},a.radius=function(n){return arguments.length?(t="function"==typeof n?n:uf(+n),s(),a):t},a}function hf(t){return t.index}function df(t,n){var e=t.get(n)
if(!e)throw new Error("node not found: "+n)
return e}function pf(t){var n,e,r,i,o,a,u=hf,s=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},c=uf(30),l=1
function f(r){for(var i=0,u=t.length;i<l;++i)for(var s,c,f,h,d,p,g,y=0;y<u;++y)c=(s=t[y]).source,h=(f=s.target).x+f.vx-c.x-c.vx||sf(a),d=f.y+f.vy-c.y-c.vy||sf(a),h*=p=((p=Math.sqrt(h*h+d*d))-e[y])/p*r*n[y],d*=p,f.vx-=h*(g=o[y]),f.vy-=d*g,c.vx+=h*(g=1-g),c.vy+=d*g}function h(){if(r){var a,s,c=r.length,l=t.length,f=new Map(r.map(((t,n)=>[u(t,n,r),t])))
for(a=0,i=new Array(c);a<l;++a)(s=t[a]).index=a,"object"!=typeof s.source&&(s.source=df(f,s.source)),"object"!=typeof s.target&&(s.target=df(f,s.target)),i[s.source.index]=(i[s.source.index]||0)+1,i[s.target.index]=(i[s.target.index]||0)+1
for(a=0,o=new Array(l);a<l;++a)s=t[a],o[a]=i[s.source.index]/(i[s.source.index]+i[s.target.index])
n=new Array(l),d(),e=new Array(l),p()}}function d(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+s(t[e],e,t)}function p(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+c(t[n],n,t)}return null==t&&(t=[]),f.initialize=function(t,n){r=t,a=n,h()},f.links=function(n){return arguments.length?(t=n,h(),f):t},f.id=function(t){return arguments.length?(u=t,f):u},f.iterations=function(t){return arguments.length?(l=+t,f):l},f.strength=function(t){return arguments.length?(s="function"==typeof t?t:uf(+t),d(),f):s},f.distance=function(t){return arguments.length?(c="function"==typeof t?t:uf(+t),p(),f):c},f}af.copy=function(){var t,n,e=new rf(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root
if(!r)return e
if(!r.length)return e._root=of(r),e
for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=of(n))
return e},af.add=function(t){const n=+this._x.call(null,t),e=+this._y.call(null,t)
return Kl(this.cover(n,e),n,e,t)},af.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),s=1/0,c=1/0,l=-1/0,f=-1/0
for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<s&&(s=r),r>l&&(l=r),i<c&&(c=i),i>f&&(f=i))
if(s>l||c>f)return this
for(this.cover(s,c).cover(l,f),e=0;e<o;++e)Kl(this,a[e],u[e],t[e])
return this},af.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this
var e=this._x0,r=this._y0,i=this._x1,o=this._y1
if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1
else{for(var a,u,s=i-e||1,c=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=c,c=a,s*=2,u){case 0:i=e+s,o=r+s
break
case 1:e=i-s,o=r+s
break
case 2:i=e+s,r=o-s
break
case 3:e=i-s,r=o-s}this._root&&this._root.length&&(this._root=c)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},af.data=function(){var t=[]
return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},af.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},af.find=function(t,n,e){var r,i,o,a,u,s,c,l=this._x0,f=this._y0,h=this._x1,d=this._y1,p=[],g=this._root
for(g&&p.push(new Jl(g,l,f,h,d)),null==e?e=1/0:(l=t-e,f=n-e,h=t+e,d=n+e,e*=e);s=p.pop();)if(!(!(g=s.node)||(i=s.x0)>h||(o=s.y0)>d||(a=s.x1)<l||(u=s.y1)<f))if(g.length){var y=(i+a)/2,_=(o+u)/2
p.push(new Jl(g[3],y,_,a,u),new Jl(g[2],i,_,y,u),new Jl(g[1],y,o,a,_),new Jl(g[0],i,o,y,_)),(c=(n>=_)<<1|t>=y)&&(s=p[p.length-1],p[p.length-1]=p[p.length-1-c],p[p.length-1-c]=s)}else{var v=t-+this._x.call(null,g.data),m=n-+this._y.call(null,g.data),x=v*v+m*m
if(x<e){var b=Math.sqrt(e=x)
l=t-b,f=n-b,h=t+b,d=n+b,r=g.data}}return r},af.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this
var n,e,r,i,o,a,u,s,c,l,f,h,d=this._root,p=this._x0,g=this._y0,y=this._x1,_=this._y1
if(!d)return this
if(d.length)for(;;){if((c=o>=(u=(p+y)/2))?p=u:y=u,(l=a>=(s=(g+_)/2))?g=s:_=s,n=d,!(d=d[f=l<<1|c]))return this
if(!d.length)break;(n[f+1&3]||n[f+2&3]||n[f+3&3])&&(e=n,h=f)}for(;d.data!==t;)if(r=d,!(d=d.next))return this
return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[f]=i:delete n[f],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},af.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n])
return this},af.root=function(){return this._root},af.size=function(){var t=0
return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},af.visit=function(t){var n,e,r,i,o,a,u=[],s=this._root
for(s&&u.push(new Jl(s,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(s=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&s.length){var c=(r+o)/2,l=(i+a)/2;(e=s[3])&&u.push(new Jl(e,c,l,o,a)),(e=s[2])&&u.push(new Jl(e,r,l,c,a)),(e=s[1])&&u.push(new Jl(e,c,i,o,l)),(e=s[0])&&u.push(new Jl(e,r,i,c,l))}return this},af.visitAfter=function(t){var n,e=[],r=[]
for(this._root&&e.push(new Jl(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node
if(i.length){var o,a=n.x0,u=n.y0,s=n.x1,c=n.y1,l=(a+s)/2,f=(u+c)/2;(o=i[0])&&e.push(new Jl(o,a,u,l,f)),(o=i[1])&&e.push(new Jl(o,l,u,s,f)),(o=i[2])&&e.push(new Jl(o,a,f,l,c)),(o=i[3])&&e.push(new Jl(o,l,f,s,c))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1)
return this},af.x=function(t){return arguments.length?(this._x=t,this):this._x},af.y=function(t){return arguments.length?(this._y=t,this):this._y}
var gf={value:()=>{}}
function yf(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t)
r[t]=[]}return new _f(r)}function _f(t){this._=t}function vf(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".")
if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t)
return{type:t,name:e}}))}function mf(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function xf(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=gf,t=t.slice(0,r).concat(t.slice(r+1))
break}return null!=e&&t.push({name:n,value:e}),t}_f.prototype=yf.prototype={constructor:_f,on:function(t,n){var e,r=this._,i=vf(t+"",r),o=-1,a=i.length
if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n)
for(;++o<a;)if(e=(t=i[o]).type)r[e]=xf(r[e],t.name,n)
else if(null==n)for(e in r)r[e]=xf(r[e],t.name,null)
return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=mf(r[e],t.name)))return e},copy:function(){var t={},n=this._
for(var e in n)t[e]=n[e].slice()
return new _f(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2]
if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}}
const bf=yf
var wf,Sf,Af=0,Mf=0,Tf=0,Cf=0,Pf=0,Ef=0,kf="object"==typeof performance&&performance.now?performance:Date,Nf="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)}
function Lf(){return Pf||(Nf(Rf),Pf=kf.now()+Ef)}function Rf(){Pf=0}function Vf(){this._call=this._time=this._next=null}function Of(t,n,e){var r=new Vf
return r.restart(t,n,e),r}function Gf(){Pf=(Cf=kf.now())+Ef,Af=Mf=0
try{!function(){Lf(),++Af
for(var t,n=wf;n;)(t=Pf-n._time)>=0&&n._call.call(null,t),n=n._next;--Af}()}finally{Af=0,function(){for(var t,n,e=wf,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:wf=n)
Sf=t,If(r)}(),Pf=0}}function Df(){var t=kf.now(),n=t-Cf
n>1e3&&(Ef-=n,Cf=t)}function If(t){Af||(Mf&&(Mf=clearTimeout(Mf)),t-Pf>24?(t<1/0&&(Mf=setTimeout(Gf,t-kf.now()-Ef)),Tf&&(Tf=clearInterval(Tf))):(Tf||(Cf=kf.now(),Tf=setInterval(Df,1e3)),Af=1,Nf(Gf)))}Vf.prototype=Of.prototype={constructor:Vf,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function")
e=(null==e?Lf():+e)+(null==n?0:+n),this._next||Sf===this||(Sf?Sf._next=this:wf=this,Sf=this),this._call=t,this._time=e,If()},stop:function(){this._call&&(this._call=null,this._time=1/0,If())}}
const zf=4294967296
function Ff(t){return t.x}function Yf(t){return t.y}var Uf=Math.PI*(3-Math.sqrt(5))
function Bf(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=new Map,s=Of(f),c=bf("tick","end"),l=function(){let t=1
return()=>(t=(1664525*t+1013904223)%zf)/zf}()
function f(){h(),c.call("tick",n),e<r&&(s.stop(),c.call("end",n))}function h(r){var s,c,l=t.length
void 0===r&&(r=1)
for(var f=0;f<r;++f)for(e+=(o-e)*i,u.forEach((function(t){t(e)})),s=0;s<l;++s)null==(c=t[s]).fx?c.x+=c.vx*=a:(c.x=c.fx,c.vx=0),null==c.fy?c.y+=c.vy*=a:(c.y=c.fy,c.vy=0)
return n}function d(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=10*Math.sqrt(.5+e),o=e*Uf
n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function p(n){return n.initialize&&n.initialize(t,l),n}return null==t&&(t=[]),d(),n={tick:h,restart:function(){return s.restart(f),n},stop:function(){return s.stop(),n},nodes:function(e){return arguments.length?(t=e,d(),u.forEach(p),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},randomSource:function(t){return arguments.length?(l=t,u.forEach(p),n):l},force:function(t,e){return arguments.length>1?(null==e?u.delete(t):u.set(t,p(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,s,c=0,l=t.length
for(null==r?r=1/0:r*=r,c=0;c<l;++c)(a=(i=n-(u=t[c]).x)*i+(o=e-u.y)*o)<r&&(s=u,r=a)
return s},on:function(t,e){return arguments.length>1?(c.on(t,e),n):c.on(t)}}}function Hf(){var t,n,e,r,i,o=uf(-30),a=1,u=1/0,s=.81
function c(e){var i,o=t.length,a=ef(t,Ff,Yf).visitAfter(f)
for(r=e,i=0;i<o;++i)n=t[i],a.visit(h)}function l(){if(t){var n,e,r=t.length
for(i=new Array(r),n=0;n<r;++n)e=t[n],i[e.index]=+o(e,n,t)}}function f(t){var n,e,r,o,a,u=0,s=0
if(t.length){for(r=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,s+=e,r+=e*n.x,o+=e*n.y)
t.x=r/s,t.y=o/s}else{(n=t).x=n.data.x,n.y=n.data.y
do{u+=i[n.data.index]}while(n=n.next)}t.value=u}function h(t,o,c,l){if(!t.value)return!0
var f=t.x-n.x,h=t.y-n.y,d=l-o,p=f*f+h*h
if(d*d/s<p)return p<u&&(0===f&&(p+=(f=sf(e))*f),0===h&&(p+=(h=sf(e))*h),p<a&&(p=Math.sqrt(a*p)),n.vx+=f*t.value*r/p,n.vy+=h*t.value*r/p),!0
if(!(t.length||p>=u)){(t.data!==n||t.next)&&(0===f&&(p+=(f=sf(e))*f),0===h&&(p+=(h=sf(e))*h),p<a&&(p=Math.sqrt(a*p)))
do{t.data!==n&&(d=i[t.data.index]*r/p,n.vx+=f*d,n.vy+=h*d)}while(t=t.next)}}return c.initialize=function(n,r){t=n,e=r,l()},c.strength=function(t){return arguments.length?(o="function"==typeof t?t:uf(+t),l(),c):o},c.distanceMin=function(t){return arguments.length?(a=t*t,c):Math.sqrt(a)},c.distanceMax=function(t){return arguments.length?(u=t*t,c):Math.sqrt(u)},c.theta=function(t){return arguments.length?(s=t*t,c):Math.sqrt(s)},c}function Xf(t,n,e){var r,i,o,a=uf(.1)
function u(t){for(var a=0,u=r.length;a<u;++a){var s=r[a],c=s.x-n||1e-6,l=s.y-e||1e-6,f=Math.sqrt(c*c+l*l),h=(o[a]-f)*i[a]*t/f
s.vx+=c*h,s.vy+=l*h}}function s(){if(r){var n,e=r.length
for(i=new Array(e),o=new Array(e),n=0;n<e;++n)o[n]=+t(r[n],n,r),i[n]=isNaN(o[n])?0:+a(r[n],n,r)}}return"function"!=typeof t&&(t=uf(+t)),null==n&&(n=0),null==e&&(e=0),u.initialize=function(t){r=t,s()},u.strength=function(t){return arguments.length?(a="function"==typeof t?t:uf(+t),s(),u):a},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:uf(+n),s(),u):t},u.x=function(t){return arguments.length?(n=+t,u):n},u.y=function(t){return arguments.length?(e=+t,u):e},u}function jf(t){var n,e,r,i=uf(.1)
function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length
for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=uf(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:uf(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:uf(+n),a(),o):t},o}function qf(t){var n,e,r,i=uf(.1)
function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length
for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=uf(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:uf(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:uf(+n),a(),o):t},o}function Wf(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null
var e,r=t.slice(0,e)
return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function Qf(t){return(t=Wf(Math.abs(t)))?t[1]:NaN}var $f,Zf=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function Kf(t){if(!(n=Zf.exec(t)))throw new Error("invalid format: "+t)
var n
return new Jf({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function Jf(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function th(t,n){var e=Wf(t,n)
if(!e)return t+""
var r=e[0],i=e[1]
return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}Kf.prototype=Jf.prototype,Jf.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}
const nh={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>th(100*t,n),r:th,s:function(t,n){var e=Wf(t,n)
if(!e)return t+""
var r=e[0],i=e[1],o=i-($f=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length
return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Wf(t,Math.max(0,n+o-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)}
function eh(t){return t}var rh,ih,oh,ah=Array.prototype.map,uh=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"]
function sh(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?eh:(n=ah.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,u=n[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),o.push(t.substring(i-=u,i+u)),!((s+=u+1)>r));)u=n[a=(a+1)%n.length]
return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?eh:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(ah.call(t.numerals,String)),s=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+""
function f(t){var n=(t=Kf(t)).fill,e=t.align,f=t.sign,h=t.symbol,d=t.zero,p=t.width,g=t.comma,y=t.precision,_=t.trim,v=t.type
"n"===v?(g=!0,v="g"):nh[v]||(void 0===y&&(y=12),_=!0,v="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=")
var m="$"===h?i:"#"===h&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",x="$"===h?o:/[%p]/.test(v)?s:"",b=nh[v],w=/[defgprs%]/.test(v)
function S(t){var i,o,s,h=m,S=x
if("c"===v)S=b(t)+S,t=""
else{var A=(t=+t)<0||1/t<0
if(t=isNaN(t)?l:b(Math.abs(t),y),_&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r
break
case"0":0===i&&(i=r),n=r
break
default:if(!+t[r])break t
i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),A&&0==+t&&"+"!==f&&(A=!1),h=(A?"("===f?f:c:"-"===f||"("===f?"":f)+h,S=("s"===v?uh[8+$f/3]:"")+S+(A&&"("===f?")":""),w)for(i=-1,o=t.length;++i<o;)if(48>(s=t.charCodeAt(i))||s>57){S=(46===s?a+t.slice(i+1):t.slice(i))+S,t=t.slice(0,i)
break}}g&&!d&&(t=r(t,1/0))
var M=h.length+t.length+S.length,T=M<p?new Array(p-M+1).join(n):""
switch(g&&d&&(t=r(T+t,T.length?p-S.length:1/0),T=""),e){case"<":t=h+t+S+T
break
case"=":t=h+T+t+S
break
case"^":t=T.slice(0,M=T.length>>1)+h+t+S+T.slice(M)
break
default:t=T+h+t+S}return u(t)}return y=void 0===y?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y)),S.toString=function(){return t+""},S}return{format:f,formatPrefix:function(t,n){var e=f(((t=Kf(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(Qf(n)/3))),i=Math.pow(10,-r),o=uh[8+r/3]
return function(t){return e(i*t)+o}}}}function ch(t){return rh=sh(t),ih=rh.format,oh=rh.formatPrefix,rh}function lh(t){return Math.max(0,-Qf(Math.abs(t)))}function fh(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Qf(n)/3)))-Qf(Math.abs(t)))}function hh(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Qf(n)-Qf(t))+1}ch({thousands:",",grouping:[3],currency:["$",""]})
class dh{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials
let e=0
for(let r=0;r<this._n&&r<32;r++){const i=n[r],o=t+i,a=Math.abs(t)<Math.abs(i)?t-(o-i):i-(o-t)
a&&(n[e++]=a),t=o}return n[e]=t,this._n=e+1,this}valueOf(){const t=this._partials
let n,e,r,i=this._n,o=0
if(i>0){for(o=t[--i];i>0&&(n=o,e=t[--i],o=n+e,r=e-(o-n),!r););i>0&&(r<0&&t[i-1]<0||r>0&&t[i-1]>0)&&(e=2*r,n=o+e,e==n-o&&(o=n))}return o}}var ph=1e-6,gh=1e-12,yh=Math.PI,_h=yh/2,vh=yh/4,mh=2*yh,xh=180/yh,bh=yh/180,wh=Math.abs,Sh=Math.atan,Ah=Math.atan2,Mh=Math.cos,Th=Math.ceil,Ch=Math.exp,Ph=(Math.floor,Math.hypot),Eh=Math.log,kh=Math.pow,Nh=Math.sin,Lh=Math.sign||function(t){return t>0?1:t<0?-1:0},Rh=Math.sqrt,Vh=Math.tan
function Oh(t){return t>1?0:t<-1?yh:Math.acos(t)}function Gh(t){return t>1?_h:t<-1?-_h:Math.asin(t)}function Dh(t){return(t=Nh(t/2))*t}function Ih(){}function zh(t,n){t&&Yh.hasOwnProperty(t.type)&&Yh[t.type](t,n)}var Fh={Feature:function(t,n){zh(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)zh(e[r].geometry,n)}},Yh={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){Uh(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Uh(e[r],n,0)},Polygon:function(t,n){Bh(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Bh(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)zh(e[r],n)}}
function Uh(t,n,e){var r,i=-1,o=t.length-e
for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2])
n.lineEnd()}function Bh(t,n){var e=-1,r=t.length
for(n.polygonStart();++e<r;)Uh(t[e],n,1)
n.polygonEnd()}function Hh(t,n){t&&Fh.hasOwnProperty(t.type)?Fh[t.type](t,n):zh(t,n)}var Xh,jh,qh,Wh,Qh,$h,Zh,Kh,Jh,td,nd,ed,rd,id,od,ad,ud=new dh,sd=new dh,cd={point:Ih,lineStart:Ih,lineEnd:Ih,polygonStart:function(){ud=new dh,cd.lineStart=ld,cd.lineEnd=fd},polygonEnd:function(){var t=+ud
sd.add(t<0?mh+t:t),this.lineStart=this.lineEnd=this.point=Ih},sphere:function(){sd.add(mh)}}
function ld(){cd.point=hd}function fd(){dd(Xh,jh)}function hd(t,n){cd.point=dd,Xh=t,jh=n,qh=t*=bh,Wh=Mh(n=(n*=bh)/2+vh),Qh=Nh(n)}function dd(t,n){var e=(t*=bh)-qh,r=e>=0?1:-1,i=r*e,o=Mh(n=(n*=bh)/2+vh),a=Nh(n),u=Qh*a,s=Wh*o+u*Mh(i),c=u*r*Nh(i)
ud.add(Ah(c,s)),qh=t,Wh=o,Qh=a}function pd(t){return sd=new dh,Hh(t,cd),2*sd}function gd(t){return[Ah(t[1],t[0]),Gh(t[2])]}function yd(t){var n=t[0],e=t[1],r=Mh(e)
return[r*Mh(n),r*Nh(n),Nh(e)]}function _d(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function vd(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function md(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function xd(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function bd(t){var n=Rh(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])
t[0]/=n,t[1]/=n,t[2]/=n}var wd,Sd,Ad,Md,Td,Cd,Pd,Ed,kd,Nd,Ld,Rd,Vd,Od,Gd,Dd,Id={point:zd,lineStart:Yd,lineEnd:Ud,polygonStart:function(){Id.point=Bd,Id.lineStart=Hd,Id.lineEnd=Xd,id=new dh,cd.polygonStart()},polygonEnd:function(){cd.polygonEnd(),Id.point=zd,Id.lineStart=Yd,Id.lineEnd=Ud,ud<0?($h=-(Kh=180),Zh=-(Jh=90)):id>ph?Jh=90:id<-1e-6&&(Zh=-90),ad[0]=$h,ad[1]=Kh},sphere:function(){$h=-(Kh=180),Zh=-(Jh=90)}}
function zd(t,n){od.push(ad=[$h=t,Kh=t]),n<Zh&&(Zh=n),n>Jh&&(Jh=n)}function Fd(t,n){var e=yd([t*bh,n*bh])
if(rd){var r=vd(rd,e),i=vd([r[1],-r[0],0],r)
bd(i),i=gd(i)
var o,a=t-td,u=a>0?1:-1,s=i[0]*xh*u,c=wh(a)>180
c^(u*td<s&&s<u*t)?(o=i[1]*xh)>Jh&&(Jh=o):c^(u*td<(s=(s+360)%360-180)&&s<u*t)?(o=-i[1]*xh)<Zh&&(Zh=o):(n<Zh&&(Zh=n),n>Jh&&(Jh=n)),c?t<td?jd($h,t)>jd($h,Kh)&&(Kh=t):jd(t,Kh)>jd($h,Kh)&&($h=t):Kh>=$h?(t<$h&&($h=t),t>Kh&&(Kh=t)):t>td?jd($h,t)>jd($h,Kh)&&(Kh=t):jd(t,Kh)>jd($h,Kh)&&($h=t)}else od.push(ad=[$h=t,Kh=t])
n<Zh&&(Zh=n),n>Jh&&(Jh=n),rd=e,td=t}function Yd(){Id.point=Fd}function Ud(){ad[0]=$h,ad[1]=Kh,Id.point=zd,rd=null}function Bd(t,n){if(rd){var e=t-td
id.add(wh(e)>180?e+(e>0?360:-360):e)}else nd=t,ed=n
cd.point(t,n),Fd(t,n)}function Hd(){cd.lineStart()}function Xd(){Bd(nd,ed),cd.lineEnd(),wh(id)>ph&&($h=-(Kh=180)),ad[0]=$h,ad[1]=Kh,rd=null}function jd(t,n){return(n-=t)<0?n+360:n}function qd(t,n){return t[0]-n[0]}function Wd(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function Qd(t){var n,e,r,i,o,a,u
if(Jh=Kh=-($h=Zh=1/0),od=[],Hh(t,Id),e=od.length){for(od.sort(qd),n=1,o=[r=od[0]];n<e;++n)Wd(r,(i=od[n])[0])||Wd(r,i[1])?(jd(r[0],i[1])>jd(r[0],r[1])&&(r[1]=i[1]),jd(i[0],r[1])>jd(r[0],r[1])&&(r[0]=i[0])):o.push(r=i)
for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=jd(r[1],i[0]))>a&&(a=u,$h=i[0],Kh=r[1])}return od=ad=null,$h===1/0||Zh===1/0?[[NaN,NaN],[NaN,NaN]]:[[$h,Zh],[Kh,Jh]]}var $d={sphere:Ih,point:Zd,lineStart:Jd,lineEnd:ep,polygonStart:function(){$d.lineStart=rp,$d.lineEnd=ip},polygonEnd:function(){$d.lineStart=Jd,$d.lineEnd=ep}}
function Zd(t,n){t*=bh
var e=Mh(n*=bh)
Kd(e*Mh(t),e*Nh(t),Nh(n))}function Kd(t,n,e){++wd,Ad+=(t-Ad)/wd,Md+=(n-Md)/wd,Td+=(e-Td)/wd}function Jd(){$d.point=tp}function tp(t,n){t*=bh
var e=Mh(n*=bh)
Od=e*Mh(t),Gd=e*Nh(t),Dd=Nh(n),$d.point=np,Kd(Od,Gd,Dd)}function np(t,n){t*=bh
var e=Mh(n*=bh),r=e*Mh(t),i=e*Nh(t),o=Nh(n),a=Ah(Rh((a=Gd*o-Dd*i)*a+(a=Dd*r-Od*o)*a+(a=Od*i-Gd*r)*a),Od*r+Gd*i+Dd*o)
Sd+=a,Cd+=a*(Od+(Od=r)),Pd+=a*(Gd+(Gd=i)),Ed+=a*(Dd+(Dd=o)),Kd(Od,Gd,Dd)}function ep(){$d.point=Zd}function rp(){$d.point=op}function ip(){ap(Rd,Vd),$d.point=Zd}function op(t,n){Rd=t,Vd=n,t*=bh,n*=bh,$d.point=ap
var e=Mh(n)
Od=e*Mh(t),Gd=e*Nh(t),Dd=Nh(n),Kd(Od,Gd,Dd)}function ap(t,n){t*=bh
var e=Mh(n*=bh),r=e*Mh(t),i=e*Nh(t),o=Nh(n),a=Gd*o-Dd*i,u=Dd*r-Od*o,s=Od*i-Gd*r,c=Ph(a,u,s),l=Gh(c),f=c&&-l/c
kd.add(f*a),Nd.add(f*u),Ld.add(f*s),Sd+=l,Cd+=l*(Od+(Od=r)),Pd+=l*(Gd+(Gd=i)),Ed+=l*(Dd+(Dd=o)),Kd(Od,Gd,Dd)}function up(t){wd=Sd=Ad=Md=Td=Cd=Pd=Ed=0,kd=new dh,Nd=new dh,Ld=new dh,Hh(t,$d)
var n=+kd,e=+Nd,r=+Ld,i=Ph(n,e,r)
return i<gh&&(n=Cd,e=Pd,r=Ed,Sd<ph&&(n=Ad,e=Md,r=Td),(i=Ph(n,e,r))<gh)?[NaN,NaN]:[Ah(e,n)*xh,Gh(r/i)*xh]}function sp(t){return function(){return t}}function cp(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function lp(t,n){return[wh(t)>yh?t+Math.round(-t/mh)*mh:t,n]}function fp(t,n,e){return(t%=mh)?n||e?cp(dp(t),pp(n,e)):dp(t):n||e?pp(n,e):lp}function hp(t){return function(n,e){return[(n+=t)>yh?n-mh:n<-yh?n+mh:n,e]}}function dp(t){var n=hp(t)
return n.invert=hp(-t),n}function pp(t,n){var e=Mh(t),r=Nh(t),i=Mh(n),o=Nh(n)
function a(t,n){var a=Mh(n),u=Mh(t)*a,s=Nh(t)*a,c=Nh(n),l=c*e+u*r
return[Ah(s*i-l*o,u*e-c*r),Gh(l*i+s*o)]}return a.invert=function(t,n){var a=Mh(n),u=Mh(t)*a,s=Nh(t)*a,c=Nh(n),l=c*i-s*o
return[Ah(s*i+c*o,u*e+l*r),Gh(l*e-u*r)]},a}function gp(t){function n(n){return(n=t(n[0]*bh,n[1]*bh))[0]*=xh,n[1]*=xh,n}return t=fp(t[0]*bh,t[1]*bh,t.length>2?t[2]*bh:0),n.invert=function(n){return(n=t.invert(n[0]*bh,n[1]*bh))[0]*=xh,n[1]*=xh,n},n}function yp(t,n,e,r,i,o){if(e){var a=Mh(n),u=Nh(n),s=r*e
null==i?(i=n+r*mh,o=n-s/2):(i=_p(a,i),o=_p(a,o),(r>0?i<o:i>o)&&(i+=r*mh))
for(var c,l=i;r>0?l>o:l<o;l-=s)c=gd([a,-u*Mh(l),-u*Nh(l)]),t.point(c[0],c[1])}}function _p(t,n){(n=yd(n))[0]-=t,bd(n)
var e=Oh(-n[1])
return((-n[2]<0?-e:e)+mh-ph)%mh}function vp(){var t,n,e=sp([0,0]),r=sp(90),i=sp(6),o={point:function(e,r){t.push(e=n(e,r)),e[0]*=xh,e[1]*=xh}}
function a(){var a=e.apply(this,arguments),u=r.apply(this,arguments)*bh,s=i.apply(this,arguments)*bh
return t=[],n=fp(-a[0]*bh,-a[1]*bh,0).invert,yp(o,u,s,1),a={type:"Polygon",coordinates:[t]},t=n=null,a}return a.center=function(t){return arguments.length?(e="function"==typeof t?t:sp([+t[0],+t[1]]),a):e},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:sp(+t),a):r},a.precision=function(t){return arguments.length?(i="function"==typeof t?t:sp(+t),a):i},a}function mp(){var t,n=[]
return{point:function(n,e,r){t.push([n,e,r])},lineStart:function(){n.push(t=[])},lineEnd:Ih,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n
return n=[],t=null,e}}}function xp(t,n){return wh(t[0]-n[0])<ph&&wh(t[1]-n[1])<ph}function bp(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function wp(t,n,e,r,i){var o,a,u=[],s=[]
if(t.forEach((function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n]
if(xp(r,a)){if(!r[2]&&!a[2]){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1])
return void i.lineEnd()}a[0]+=2e-6}u.push(e=new bp(r,t,null,!0)),s.push(e.o=new bp(r,null,e,!1)),u.push(e=new bp(a,t,null,!1)),s.push(e.o=new bp(a,null,e,!0))}})),u.length){for(s.sort(n),Sp(u),Sp(s),o=0,a=s.length;o<a;++o)s[o].e=e=!e
for(var c,l,f=u[0];;){for(var h=f,d=!0;h.v;)if((h=h.n)===f)return
c=h.z,i.lineStart()
do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=c.length;o<a;++o)i.point((l=c[o])[0],l[1])
else r(h.x,h.n.x,1,i)
h=h.n}else{if(d)for(c=h.p.z,o=c.length-1;o>=0;--o)i.point((l=c[o])[0],l[1])
else r(h.x,h.p.x,-1,i)
h=h.p}c=(h=h.o).z,d=!d}while(!h.v)
i.lineEnd()}}}function Sp(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e
i.n=e=t[0],e.p=i}}function Ap(t){return wh(t[0])<=yh?t[0]:Lh(t[0])*((wh(t[0])+yh)%mh-yh)}function Mp(t,n){var e=Ap(n),r=n[1],i=Nh(r),o=[Nh(e),-Mh(e),0],a=0,u=0,s=new dh
1===i?r=_h+ph:-1===i&&(r=-_h-ph)
for(var c=0,l=t.length;c<l;++c)if(h=(f=t[c]).length)for(var f,h,d=f[h-1],p=Ap(d),g=d[1]/2+vh,y=Nh(g),_=Mh(g),v=0;v<h;++v,p=x,y=w,_=S,d=m){var m=f[v],x=Ap(m),b=m[1]/2+vh,w=Nh(b),S=Mh(b),A=x-p,M=A>=0?1:-1,T=M*A,C=T>yh,P=y*w
if(s.add(Ah(P*M*Nh(T),_*S+P*Mh(T))),a+=C?A+M*mh:A,C^p>=e^x>=e){var E=vd(yd(d),yd(m))
bd(E)
var k=vd(o,E)
bd(k)
var N=(C^A>=0?-1:1)*Gh(k[2]);(r>N||r===N&&(E[0]||E[1]))&&(u+=C^A>=0?1:-1)}}return(a<-1e-6||a<ph&&s<-1e-12)^1&u}function Tp(t){return Array.from(function*(t){for(const n of t)yield*n}(t))}function Cp(t,n,e,r){return function(i){var o,a,u,s=n(i),c=mp(),l=n(c),f=!1,h={point:d,lineStart:g,lineEnd:y,polygonStart:function(){h.point=_,h.lineStart=v,h.lineEnd=m,a=[],o=[]},polygonEnd:function(){h.point=d,h.lineStart=g,h.lineEnd=y,a=Tp(a)
var t=Mp(o,r)
a.length?(f||(i.polygonStart(),f=!0),wp(a,Ep,t,e,i)):t&&(f||(i.polygonStart(),f=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),f&&(i.polygonEnd(),f=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}}
function d(n,e){t(n,e)&&i.point(n,e)}function p(t,n){s.point(t,n)}function g(){h.point=p,s.lineStart()}function y(){h.point=d,s.lineEnd()}function _(t,n){u.push([t,n]),l.point(t,n)}function v(){l.lineStart(),u=[]}function m(){_(u[0][0],u[0][1]),l.lineEnd()
var t,n,e,r,s=l.clean(),h=c.result(),d=h.length
if(u.pop(),o.push(u),u=null,d)if(1&s){if((n=(e=h[0]).length-1)>0){for(f||(i.polygonStart(),f=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1])
i.lineEnd()}}else d>1&&2&s&&h.push(h.pop().concat(h.shift())),a.push(h.filter(Pp))}return h}}function Pp(t){return t.length>1}function Ep(t,n){return((t=t.x)[0]<0?t[1]-_h-ph:_h-t[1])-((n=n.x)[0]<0?n[1]-_h-ph:_h-n[1])}lp.invert=lp
const kp=Cp((function(){return!0}),(function(t){var n,e=NaN,r=NaN,i=NaN
return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?yh:-yh,s=wh(o-e)
wh(s-yh)<ph?(t.point(e,r=(r+a)/2>0?_h:-_h),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&s>=yh&&(wh(e-i)<ph&&(e-=i*ph),wh(o-u)<ph&&(o-=u*ph),r=function(t,n,e,r){var i,o,a=Nh(t-e)
return wh(a)>ph?Sh((Nh(n)*(o=Mh(r))*Nh(e)-Nh(r)*(i=Mh(n))*Nh(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}),(function(t,n,e,r){var i
if(null==t)i=e*_h,r.point(-yh,i),r.point(0,i),r.point(yh,i),r.point(yh,0),r.point(yh,-i),r.point(0,-i),r.point(-yh,-i),r.point(-yh,0),r.point(-yh,i)
else if(wh(t[0]-n[0])>ph){var o=t[0]<n[0]?yh:-yh
i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])}),[-yh,-_h])
function Np(t){var n=Mh(t),e=6*bh,r=n>0,i=wh(n)>ph
function o(t,e){return Mh(t)*Mh(e)>n}function a(t,e,r){var i=[1,0,0],o=vd(yd(t),yd(e)),a=_d(o,o),u=o[0],s=a-u*u
if(!s)return!r&&t
var c=n*a/s,l=-n*u/s,f=vd(i,o),h=xd(i,c)
md(h,xd(o,l))
var d=f,p=_d(h,d),g=_d(d,d),y=p*p-g*(_d(h,h)-1)
if(!(y<0)){var _=Rh(y),v=xd(d,(-p-_)/g)
if(md(v,h),v=gd(v),!r)return v
var m,x=t[0],b=e[0],w=t[1],S=e[1]
b<x&&(m=x,x=b,b=m)
var A=b-x,M=wh(A-yh)<ph
if(!M&&S<w&&(m=w,w=S,S=m),M||A<ph?M?w+S>0^v[1]<(wh(v[0]-x)<ph?w:S):w<=v[1]&&v[1]<=S:A>yh^(x<=v[0]&&v[0]<=b)){var T=xd(d,(-p+_)/g)
return md(T,h),[v,gd(T)]}}}function u(n,e){var i=r?t:yh-t,o=0
return n<-i?o|=1:n>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return Cp(o,(function(t){var n,e,s,c,l
return{lineStart:function(){c=s=!1,l=1},point:function(f,h){var d,p=[f,h],g=o(f,h),y=r?g?0:u(f,h):g?u(f+(f<0?yh:-yh),h):0
if(!n&&(c=s=g)&&t.lineStart(),g!==s&&(!(d=a(n,p))||xp(n,d)||xp(p,d))&&(p[2]=1),g!==s)l=0,g?(t.lineStart(),d=a(p,n),t.point(d[0],d[1])):(d=a(n,p),t.point(d[0],d[1],2),t.lineEnd()),n=d
else if(i&&n&&r^g){var _
y&e||!(_=a(p,n,!0))||(l=0,r?(t.lineStart(),t.point(_[0][0],_[0][1]),t.point(_[1][0],_[1][1]),t.lineEnd()):(t.point(_[1][0],_[1][1]),t.lineEnd(),t.lineStart(),t.point(_[0][0],_[0][1],3)))}!g||n&&xp(n,p)||t.point(p[0],p[1]),n=p,s=g,e=y},lineEnd:function(){s&&t.lineEnd(),n=null},clean:function(){return l|(c&&s)<<1}}}),(function(n,r,i,o){yp(o,t,e,i,n,r)}),r?[0,-t]:[-yh,t-yh])}var Lp,Rp,Vp,Op,Gp=1e9,Dp=-Gp
function Ip(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,c){var l=0,f=0
if(null==i||(l=a(i,u))!==(f=a(o,u))||s(i,o)<0^u>0)do{c.point(0===l||3===l?t:e,l>1?r:n)}while((l=(l+u+4)%4)!==f)
else c.point(o[0],o[1])}function a(r,i){return wh(r[0]-t)<ph?i>0?0:3:wh(r[0]-e)<ph?i>0?2:1:wh(r[1]-n)<ph?i>0?1:0:i>0?3:2}function u(t,n){return s(t.x,n.x)}function s(t,n){var e=a(t,1),r=a(n,1)
return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){var s,c,l,f,h,d,p,g,y,_,v,m=a,x=mp(),b={point:w,lineStart:function(){b.point=S,c&&c.push(l=[]),_=!0,y=!1,p=g=NaN},lineEnd:function(){s&&(S(f,h),d&&y&&x.rejoin(),s.push(x.result())),b.point=w,y&&m.lineEnd()},polygonStart:function(){m=x,s=[],c=[],v=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=c.length;e<i;++e)for(var o,a,u=c[e],s=1,l=u.length,f=u[0],h=f[0],d=f[1];s<l;++s)o=h,a=d,h=(f=u[s])[0],d=f[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n
return n}(),e=v&&n,i=(s=Tp(s)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&wp(s,u,n,o,a),a.polygonEnd()),m=a,s=c=l=null}}
function w(t,n){i(t,n)&&m.point(t,n)}function S(o,a){var u=i(o,a)
if(c&&l.push([o,a]),_)f=o,h=a,d=u,_=!1,u&&(m.lineStart(),m.point(o,a))
else if(u&&y)m.point(o,a)
else{var s=[p=Math.max(Dp,Math.min(Gp,p)),g=Math.max(Dp,Math.min(Gp,g))],x=[o=Math.max(Dp,Math.min(Gp,o)),a=Math.max(Dp,Math.min(Gp,a))]
!function(t,n,e,r,i,o){var a,u=t[0],s=t[1],c=0,l=1,f=n[0]-u,h=n[1]-s
if(a=e-u,f||!(a>0)){if(a/=f,f<0){if(a<c)return
a<l&&(l=a)}else if(f>0){if(a>l)return
a>c&&(c=a)}if(a=i-u,f||!(a<0)){if(a/=f,f<0){if(a>l)return
a>c&&(c=a)}else if(f>0){if(a<c)return
a<l&&(l=a)}if(a=r-s,h||!(a>0)){if(a/=h,h<0){if(a<c)return
a<l&&(l=a)}else if(h>0){if(a>l)return
a>c&&(c=a)}if(a=o-s,h||!(a<0)){if(a/=h,h<0){if(a>l)return
a>c&&(c=a)}else if(h>0){if(a<c)return
a<l&&(l=a)}return c>0&&(t[0]=u+c*f,t[1]=s+c*h),l<1&&(n[0]=u+l*f,n[1]=s+l*h),!0}}}}}(s,x,t,n,e,r)?u&&(m.lineStart(),m.point(o,a),v=!1):(y||(m.lineStart(),m.point(s[0],s[1])),m.point(x[0],x[1]),u||m.lineEnd(),v=!1)}p=o,g=a,y=u}return b}}function zp(){var t,n,e,r=0,i=0,o=960,a=500
return e={stream:function(e){return t&&n===e?t:t=Ip(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}}var Fp={sphere:Ih,point:Ih,lineStart:function(){Fp.point=Up,Fp.lineEnd=Yp},lineEnd:Ih,polygonStart:Ih,polygonEnd:Ih}
function Yp(){Fp.point=Fp.lineEnd=Ih}function Up(t,n){Rp=t*=bh,Vp=Nh(n*=bh),Op=Mh(n),Fp.point=Bp}function Bp(t,n){t*=bh
var e=Nh(n*=bh),r=Mh(n),i=wh(t-Rp),o=Mh(i),a=r*Nh(i),u=Op*e-Vp*r*o,s=Vp*e+Op*r*o
Lp.add(Ah(Rh(a*a+u*u),s)),Rp=t,Vp=e,Op=r}function Hp(t){return Lp=new dh,Hh(t,Fp),+Lp}var Xp=[null,null],jp={type:"LineString",coordinates:Xp}
function qp(t,n){return Xp[0]=t,Xp[1]=n,Hp(jp)}var Wp={Feature:function(t,n){return $p(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if($p(e[r].geometry,n))return!0
return!1}},Qp={Sphere:function(){return!0},Point:function(t,n){return Zp(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Zp(e[r],n))return!0
return!1},LineString:function(t,n){return Kp(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Kp(e[r],n))return!0
return!1},Polygon:function(t,n){return Jp(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Jp(e[r],n))return!0
return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if($p(e[r],n))return!0
return!1}}
function $p(t,n){return!(!t||!Qp.hasOwnProperty(t.type))&&Qp[t.type](t,n)}function Zp(t,n){return 0===qp(t,n)}function Kp(t,n){for(var e,r,i,o=0,a=t.length;o<a;o++){if(0===(r=qp(t[o],n)))return!0
if(o>0&&(i=qp(t[o],t[o-1]))>0&&e<=i&&r<=i&&(e+r-i)*(1-Math.pow((e-r)/i,2))<gh*i)return!0
e=r}return!1}function Jp(t,n){return!!Mp(t.map(tg),ng(n))}function tg(t){return(t=t.map(ng)).pop(),t}function ng(t){return[t[0]*bh,t[1]*bh]}function eg(t,n){return(t&&Wp.hasOwnProperty(t.type)?Wp[t.type]:$p)(t,n)}function rg(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e
for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e
return o}function ig(t,n,e){var r=rg(t,n-ph,e).concat(n)
return function(t){return r.map((function(n){return[t,n]}))}}function og(t,n,e){var r=rg(t,n-ph,e).concat(n)
return function(t){return r.map((function(n){return[n,t]}))}}function ag(){var t,n,e,r,i,o,a,u,s,c,l,f,h=10,d=h,p=90,g=360,y=2.5
function _(){return{type:"MultiLineString",coordinates:v()}}function v(){return rg(Th(r/p)*p,e,p).map(l).concat(rg(Th(u/g)*g,a,g).map(f)).concat(rg(Th(n/h)*h,t,h).filter((function(t){return wh(t%p)>ph})).map(s)).concat(rg(Th(o/d)*d,i,d).filter((function(t){return wh(t%g)>ph})).map(c))}return _.lines=function(){return v().map((function(t){return{type:"LineString",coordinates:t}}))},_.outline=function(){return{type:"Polygon",coordinates:[l(r).concat(f(a).slice(1),l(e).reverse().slice(1),f(u).reverse().slice(1))]}},_.extent=function(t){return arguments.length?_.extentMajor(t).extentMinor(t):_.extentMinor()},_.extentMajor=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),u>a&&(t=u,u=a,a=t),_.precision(y)):[[r,u],[e,a]]},_.extentMinor=function(e){return arguments.length?(n=+e[0][0],t=+e[1][0],o=+e[0][1],i=+e[1][1],n>t&&(e=n,n=t,t=e),o>i&&(e=o,o=i,i=e),_.precision(y)):[[n,o],[t,i]]},_.step=function(t){return arguments.length?_.stepMajor(t).stepMinor(t):_.stepMinor()},_.stepMajor=function(t){return arguments.length?(p=+t[0],g=+t[1],_):[p,g]},_.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],_):[h,d]},_.precision=function(h){return arguments.length?(y=+h,s=ig(o,i,90),c=og(n,t,y),l=ig(u,a,90),f=og(r,e,y),_):y},_.extentMajor([[-180,-89.999999],[180,89.999999]]).extentMinor([[-180,-80.000001],[180,80.000001]])}function ug(){return ag()()}function sg(t,n){var e=t[0]*bh,r=t[1]*bh,i=n[0]*bh,o=n[1]*bh,a=Mh(r),u=Nh(r),s=Mh(o),c=Nh(o),l=a*Mh(e),f=a*Nh(e),h=s*Mh(i),d=s*Nh(i),p=2*Gh(Rh(Dh(o-r)+a*s*Dh(i-e))),g=Nh(p),y=p?function(t){var n=Nh(t*=p)/g,e=Nh(p-t)/g,r=e*l+n*h,i=e*f+n*d,o=e*u+n*c
return[Ah(i,r)*xh,Ah(o,Rh(r*r+i*i))*xh]}:function(){return[e*xh,r*xh]}
return y.distance=p,y}const cg=t=>t
var lg,fg,hg,dg,pg=new dh,gg=new dh,yg={point:Ih,lineStart:Ih,lineEnd:Ih,polygonStart:function(){yg.lineStart=_g,yg.lineEnd=xg},polygonEnd:function(){yg.lineStart=yg.lineEnd=yg.point=Ih,pg.add(wh(gg)),gg=new dh},result:function(){var t=pg/2
return pg=new dh,t}}
function _g(){yg.point=vg}function vg(t,n){yg.point=mg,lg=hg=t,fg=dg=n}function mg(t,n){gg.add(dg*t-hg*n),hg=t,dg=n}function xg(){mg(lg,fg)}const bg=yg
var wg=1/0,Sg=wg,Ag=-wg,Mg=Ag,Tg={point:function(t,n){t<wg&&(wg=t),t>Ag&&(Ag=t),n<Sg&&(Sg=n),n>Mg&&(Mg=n)},lineStart:Ih,lineEnd:Ih,polygonStart:Ih,polygonEnd:Ih,result:function(){var t=[[wg,Sg],[Ag,Mg]]
return Ag=Mg=-(Sg=wg=1/0),t}}
const Cg=Tg
var Pg,Eg,kg,Ng,Lg=0,Rg=0,Vg=0,Og=0,Gg=0,Dg=0,Ig=0,zg=0,Fg=0,Yg={point:Ug,lineStart:Bg,lineEnd:jg,polygonStart:function(){Yg.lineStart=qg,Yg.lineEnd=Wg},polygonEnd:function(){Yg.point=Ug,Yg.lineStart=Bg,Yg.lineEnd=jg},result:function(){var t=Fg?[Ig/Fg,zg/Fg]:Dg?[Og/Dg,Gg/Dg]:Vg?[Lg/Vg,Rg/Vg]:[NaN,NaN]
return Lg=Rg=Vg=Og=Gg=Dg=Ig=zg=Fg=0,t}}
function Ug(t,n){Lg+=t,Rg+=n,++Vg}function Bg(){Yg.point=Hg}function Hg(t,n){Yg.point=Xg,Ug(kg=t,Ng=n)}function Xg(t,n){var e=t-kg,r=n-Ng,i=Rh(e*e+r*r)
Og+=i*(kg+t)/2,Gg+=i*(Ng+n)/2,Dg+=i,Ug(kg=t,Ng=n)}function jg(){Yg.point=Ug}function qg(){Yg.point=Qg}function Wg(){$g(Pg,Eg)}function Qg(t,n){Yg.point=$g,Ug(Pg=kg=t,Eg=Ng=n)}function $g(t,n){var e=t-kg,r=n-Ng,i=Rh(e*e+r*r)
Og+=i*(kg+t)/2,Gg+=i*(Ng+n)/2,Dg+=i,Ig+=(i=Ng*t-kg*n)*(kg+t),zg+=i*(Ng+n),Fg+=3*i,Ug(kg=t,Ng=n)}const Zg=Yg
function Kg(t){this._context=t}Kg.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1
break
case 1:this._context.lineTo(t,n)
break
default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,mh)}},result:Ih}
var Jg,ty,ny,ey,ry,iy=new dh,oy={point:Ih,lineStart:function(){oy.point=ay},lineEnd:function(){Jg&&uy(ty,ny),oy.point=Ih},polygonStart:function(){Jg=!0},polygonEnd:function(){Jg=null},result:function(){var t=+iy
return iy=new dh,t}}
function ay(t,n){oy.point=uy,ty=ey=t,ny=ry=n}function uy(t,n){ey-=t,ry-=n,iy.add(Rh(ey*ey+ry*ry)),ey=t,ry=n}const sy=oy
function cy(){this._string=[]}function ly(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function fy(t,n){var e,r,i=4.5
function o(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),Hh(t,e(r))),r.result()}return o.area=function(t){return Hh(t,e(bg)),bg.result()},o.measure=function(t){return Hh(t,e(sy)),sy.result()},o.bounds=function(t){return Hh(t,e(Cg)),Cg.result()},o.centroid=function(t){return Hh(t,e(Zg)),Zg.result()},o.projection=function(n){return arguments.length?(e=null==n?(t=null,cg):(t=n).stream,o):t},o.context=function(t){return arguments.length?(r=null==t?(n=null,new cy):new Kg(n=t),"function"!=typeof i&&r.pointRadius(i),o):n},o.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i},o.projection(t).context(n)}function hy(t){return{stream:dy(t)}}function dy(t){return function(n){var e=new py
for(var r in t)e[r]=t[r]
return e.stream=n,e}}function py(){}function gy(t,n,e){var r=t.clipExtent&&t.clipExtent()
return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Hh(e,t.stream(Cg)),n(Cg.result()),null!=r&&t.clipExtent(r),t}function yy(t,n,e){return gy(t,(function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2
t.scale(150*o).translate([a,u])}),e)}function _y(t,n,e){return yy(t,[[0,0],n],e)}function vy(t,n,e){return gy(t,(function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1]
t.scale(150*i).translate([o,a])}),e)}function my(t,n,e){return gy(t,(function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2
t.scale(150*i).translate([o,a])}),e)}cy.prototype={_radius:4.5,_circle:ly(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1
break
case 1:this._string.push("L",t,",",n)
break
default:null==this._circle&&(this._circle=ly(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("")
return this._string=[],t}return null}},py.prototype={constructor:py,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}}
var xy=Mh(30*bh)
function by(t,n){return+n?function(t,n){function e(r,i,o,a,u,s,c,l,f,h,d,p,g,y){var _=c-r,v=l-i,m=_*_+v*v
if(m>4*n&&g--){var x=a+h,b=u+d,w=s+p,S=Rh(x*x+b*b+w*w),A=Gh(w/=S),M=wh(wh(w)-1)<ph||wh(o-f)<ph?(o+f)/2:Ah(b,x),T=t(M,A),C=T[0],P=T[1],E=C-r,k=P-i,N=v*E-_*k;(N*N/m>n||wh((_*E+v*k)/m-.5)>.3||a*h+u*d+s*p<xy)&&(e(r,i,o,a,u,s,C,P,M,x/=S,b/=S,w,g,y),y.point(C,P),e(C,P,M,x,b,w,c,l,f,h,d,p,g,y))}}return function(n){var r,i,o,a,u,s,c,l,f,h,d,p,g={point:y,lineStart:_,lineEnd:m,polygonStart:function(){n.polygonStart(),g.lineStart=x},polygonEnd:function(){n.polygonEnd(),g.lineStart=_}}
function y(e,r){e=t(e,r),n.point(e[0],e[1])}function _(){l=NaN,g.point=v,n.lineStart()}function v(r,i){var o=yd([r,i]),a=t(r,i)
e(l,f,c,h,d,p,l=a[0],f=a[1],c=r,h=o[0],d=o[1],p=o[2],16,n),n.point(l,f)}function m(){g.point=y,n.lineEnd()}function x(){_(),g.point=b,g.lineEnd=w}function b(t,n){v(r=t,n),i=l,o=f,a=h,u=d,s=p,g.point=v}function w(){e(l,f,c,h,d,p,i,o,r,a,u,s,16,n),g.lineEnd=m,m()}return g}}(t,n):function(t){return dy({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var wy=dy({point:function(t,n){this.stream.point(t*bh,n*bh)}})
function Sy(t,n,e,r,i,o){if(!o)return function(t,n,e,r,i){function o(o,a){return[n+t*(o*=r),e-t*(a*=i)]}return o.invert=function(o,a){return[(o-n)/t*r,(e-a)/t*i]},o}(t,n,e,r,i)
var a=Mh(o),u=Nh(o),s=a*t,c=u*t,l=a/t,f=u/t,h=(u*e-a*n)/t,d=(u*n+a*e)/t
function p(t,o){return[s*(t*=r)-c*(o*=i)+n,e-c*t-s*o]}return p.invert=function(t,n){return[r*(l*t-f*n+h),i*(d-f*t-l*n)]},p}function Ay(t){return My((function(){return t}))()}function My(t){var n,e,r,i,o,a,u,s,c,l,f=150,h=480,d=250,p=0,g=0,y=0,_=0,v=0,m=0,x=1,b=1,w=null,S=kp,A=null,M=cg,T=.5
function C(t){return s(t[0]*bh,t[1]*bh)}function P(t){return(t=s.invert(t[0],t[1]))&&[t[0]*xh,t[1]*xh]}function E(){var t=Sy(f,0,0,x,b,m).apply(null,n(p,g)),r=Sy(f,h-t[0],d-t[1],x,b,m)
return e=fp(y,_,v),u=cp(n,r),s=cp(e,u),a=by(u,T),k()}function k(){return c=l=null,C}return C.stream=function(t){return c&&l===t?c:c=wy(function(t){return dy({point:function(n,e){var r=t(n,e)
return this.stream.point(r[0],r[1])}})}(e)(S(a(M(l=t)))))},C.preclip=function(t){return arguments.length?(S=t,w=void 0,k()):S},C.postclip=function(t){return arguments.length?(M=t,A=r=i=o=null,k()):M},C.clipAngle=function(t){return arguments.length?(S=+t?Np(w=t*bh):(w=null,kp),k()):w*xh},C.clipExtent=function(t){return arguments.length?(M=null==t?(A=r=i=o=null,cg):Ip(A=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),k()):null==A?null:[[A,r],[i,o]]},C.scale=function(t){return arguments.length?(f=+t,E()):f},C.translate=function(t){return arguments.length?(h=+t[0],d=+t[1],E()):[h,d]},C.center=function(t){return arguments.length?(p=t[0]%360*bh,g=t[1]%360*bh,E()):[p*xh,g*xh]},C.rotate=function(t){return arguments.length?(y=t[0]%360*bh,_=t[1]%360*bh,v=t.length>2?t[2]%360*bh:0,E()):[y*xh,_*xh,v*xh]},C.angle=function(t){return arguments.length?(m=t%360*bh,E()):m*xh},C.reflectX=function(t){return arguments.length?(x=t?-1:1,E()):x<0},C.reflectY=function(t){return arguments.length?(b=t?-1:1,E()):b<0},C.precision=function(t){return arguments.length?(a=by(u,T=t*t),k()):Rh(T)},C.fitExtent=function(t,n){return yy(C,t,n)},C.fitSize=function(t,n){return _y(C,t,n)},C.fitWidth=function(t,n){return vy(C,t,n)},C.fitHeight=function(t,n){return my(C,t,n)},function(){return n=t.apply(this,arguments),C.invert=n.invert&&P,E()}}function Ty(t){var n=0,e=yh/3,r=My(t),i=r(n,e)
return i.parallels=function(t){return arguments.length?r(n=t[0]*bh,e=t[1]*bh):[n*xh,e*xh]},i}function Cy(t,n){var e=Nh(t),r=(e+Nh(n))/2
if(wh(r)<ph)return function(t){var n=Mh(t)
function e(t,e){return[t*n,Nh(e)/n]}return e.invert=function(t,e){return[t/n,Gh(e*n)]},e}(t)
var i=1+e*(2*r-e),o=Rh(i)/r
function a(t,n){var e=Rh(i-2*r*Nh(n))/r
return[e*Nh(t*=r),o-e*Mh(t)]}return a.invert=function(t,n){var e=o-n,a=Ah(t,wh(e))*Lh(e)
return e*r<0&&(a-=yh*Lh(t)*Lh(e)),[a/r,Gh((i-(t*t+e*e)*r*r)/(2*r))]},a}function Py(){return Ty(Cy).scale(155.424).center([0,33.6442])}function Ey(){return Py().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function ky(){var t,n,e,r,i,o,a=Ey(),u=Py().rotate([154,0]).center([-2,58.5]).parallels([55,65]),s=Py().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(t,n){o=[t,n]}}
function l(t){var n=t[0],a=t[1]
return o=null,e.point(n,a),o||(r.point(n,a),o)||(i.point(n,a),o)}function f(){return t=n=null,l}return l.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n
return(i>=.12&&i<.234&&r>=-.425&&r<-.214?u:i>=.166&&i<.234&&r>=-.214&&r<-.115?s:a).invert(t)},l.stream=function(e){return t&&n===e?t:(r=[a.stream(n=e),u.stream(e),s.stream(e)],i=r.length,t={point:function(t,n){for(var e=-1;++e<i;)r[e].point(t,n)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}})
var r,i},l.precision=function(t){return arguments.length?(a.precision(t),u.precision(t),s.precision(t),f()):a.precision()},l.scale=function(t){return arguments.length?(a.scale(t),u.scale(.35*t),s.scale(t),l.translate(a.translate())):a.scale()},l.translate=function(t){if(!arguments.length)return a.translate()
var n=a.scale(),o=+t[0],l=+t[1]
return e=a.translate(t).clipExtent([[o-.455*n,l-.238*n],[o+.455*n,l+.238*n]]).stream(c),r=u.translate([o-.307*n,l+.201*n]).clipExtent([[o-.425*n+ph,l+.12*n+ph],[o-.214*n-ph,l+.234*n-ph]]).stream(c),i=s.translate([o-.205*n,l+.212*n]).clipExtent([[o-.214*n+ph,l+.166*n+ph],[o-.115*n-ph,l+.234*n-ph]]).stream(c),f()},l.fitExtent=function(t,n){return yy(l,t,n)},l.fitSize=function(t,n){return _y(l,t,n)},l.fitWidth=function(t,n){return vy(l,t,n)},l.fitHeight=function(t,n){return my(l,t,n)},l.scale(1070)}function Ny(t){return function(n,e){var r=Mh(n),i=Mh(e),o=t(r*i)
return o===1/0?[2,0]:[o*i*Nh(n),o*Nh(e)]}}function Ly(t){return function(n,e){var r=Rh(n*n+e*e),i=t(r),o=Nh(i),a=Mh(i)
return[Ah(n*o,r*a),Gh(r&&e*o/r)]}}var Ry=Ny((function(t){return Rh(2/(1+t))}))
function Vy(){return Ay(Ry).scale(124.75).clipAngle(179.999)}Ry.invert=Ly((function(t){return 2*Gh(t/2)}))
var Oy=Ny((function(t){return(t=Oh(t))&&t/Nh(t)}))
function Gy(){return Ay(Oy).scale(79.4188).clipAngle(179.999)}function Dy(t,n){return[t,Eh(Vh((_h+n)/2))]}function Iy(){return zy(Dy).scale(961/mh)}function zy(t){var n,e,r,i=Ay(t),o=i.center,a=i.scale,u=i.translate,s=i.clipExtent,c=null
function l(){var o=yh*a(),u=i(gp(i.rotate()).invert([0,0]))
return s(null==c?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===Dy?[[Math.max(u[0]-o,c),n],[Math.min(u[0]+o,e),r]]:[[c,Math.max(u[1]-o,n)],[e,Math.min(u[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),l()):a()},i.translate=function(t){return arguments.length?(u(t),l()):u()},i.center=function(t){return arguments.length?(o(t),l()):o()},i.clipExtent=function(t){return arguments.length?(null==t?c=n=e=r=null:(c=+t[0][0],n=+t[0][1],e=+t[1][0],r=+t[1][1]),l()):null==c?null:[[c,n],[e,r]]},l()}function Fy(t){return Vh((_h+t)/2)}function Yy(t,n){var e=Mh(t),r=t===n?Nh(t):Eh(e/Mh(n))/Eh(Fy(n)/Fy(t)),i=e*kh(Fy(t),r)/r
if(!r)return Dy
function o(t,n){i>0?n<-_h+ph&&(n=-_h+ph):n>_h-ph&&(n=_h-ph)
var e=i/kh(Fy(n),r)
return[e*Nh(r*t),i-e*Mh(r*t)]}return o.invert=function(t,n){var e=i-n,o=Lh(r)*Rh(t*t+e*e),a=Ah(t,wh(e))*Lh(e)
return e*r<0&&(a-=yh*Lh(t)*Lh(e)),[a/r,2*Sh(kh(i/o,1/r))-_h]},o}function Uy(){return Ty(Yy).scale(109.5).parallels([30,30])}function By(t,n){return[t,n]}function Hy(){return Ay(By).scale(152.63)}function Xy(t,n){var e=Mh(t),r=t===n?Nh(t):(e-Mh(n))/(n-t),i=e/r+t
if(wh(r)<ph)return By
function o(t,n){var e=i-n,o=r*t
return[e*Nh(o),i-e*Mh(o)]}return o.invert=function(t,n){var e=i-n,o=Ah(t,wh(e))*Lh(e)
return e*r<0&&(o-=yh*Lh(t)*Lh(e)),[o/r,i-Lh(r)*Rh(t*t+e*e)]},o}function jy(){return Ty(Xy).scale(131.154).center([0,13.9389])}Oy.invert=Ly((function(t){return t})),Dy.invert=function(t,n){return[t,2*Sh(Ch(n))-_h]},By.invert=By
var qy=1.340264,Wy=-.081106,Qy=893e-6,$y=.003796,Zy=Rh(3)/2
function Ky(t,n){var e=Gh(Zy*Nh(n)),r=e*e,i=r*r*r
return[t*Mh(e)/(Zy*(qy+3*Wy*r+i*(7*Qy+9*$y*r))),e*(qy+Wy*r+i*(Qy+$y*r))]}function Jy(){return Ay(Ky).scale(177.158)}function t_(t,n){var e=Mh(n),r=Mh(t)*e
return[e*Nh(t)/r,Nh(n)/r]}function n_(){return Ay(t_).scale(144.049).clipAngle(60)}function e_(){var t,n,e,r,i,o,a,u=1,s=0,c=0,l=1,f=1,h=0,d=null,p=1,g=1,y=dy({point:function(t,n){var e=m([t,n])
this.stream.point(e[0],e[1])}}),_=cg
function v(){return p=u*l,g=u*f,o=a=null,m}function m(e){var r=e[0]*p,i=e[1]*g
if(h){var o=i*t-r*n
r=r*t+i*n,i=o}return[r+s,i+c]}return m.invert=function(e){var r=e[0]-s,i=e[1]-c
if(h){var o=i*t+r*n
r=r*t-i*n,i=o}return[r/p,i/g]},m.stream=function(t){return o&&a===t?o:o=y(_(a=t))},m.postclip=function(t){return arguments.length?(_=t,d=e=r=i=null,v()):_},m.clipExtent=function(t){return arguments.length?(_=null==t?(d=e=r=i=null,cg):Ip(d=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),v()):null==d?null:[[d,e],[r,i]]},m.scale=function(t){return arguments.length?(u=+t,v()):u},m.translate=function(t){return arguments.length?(s=+t[0],c=+t[1],v()):[s,c]},m.angle=function(e){return arguments.length?(n=Nh(h=e%360*bh),t=Mh(h),v()):h*xh},m.reflectX=function(t){return arguments.length?(l=t?-1:1,v()):l<0},m.reflectY=function(t){return arguments.length?(f=t?-1:1,v()):f<0},m.fitExtent=function(t,n){return yy(m,t,n)},m.fitSize=function(t,n){return _y(m,t,n)},m.fitWidth=function(t,n){return vy(m,t,n)},m.fitHeight=function(t,n){return my(m,t,n)},m}function r_(t,n){var e=n*n,r=e*e
return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function i_(){return Ay(r_).scale(175.295)}function o_(t,n){return[Mh(n)*Nh(t),Nh(n)]}function a_(){return Ay(o_).scale(249.5).clipAngle(90.000001)}function u_(t,n){var e=Mh(n),r=1+Mh(t)*e
return[e*Nh(t)/r,Nh(n)/r]}function s_(){return Ay(u_).scale(250).clipAngle(142)}function c_(t,n){return[Eh(Vh((_h+n)/2)),-t]}function l_(){var t=zy(c_),n=t.center,e=t.rotate
return t.center=function(t){return arguments.length?n([-t[1],t[0]]):[(t=n())[1],-t[0]]},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):[(t=e())[0],t[1],t[2]-90]},e([0,0,90]).scale(159.155)}function f_(t,n){return t.parent===n.parent?1:2}function h_(t,n){return t+n.x}function d_(t,n){return Math.max(t,n.y)}function p_(){var t=f_,n=1,e=1,r=!1
function i(i){var o,a=0
i.eachAfter((function(n){var e=n.children
e?(n.x=function(t){return t.reduce(h_,0)/t.length}(e),n.y=function(t){return 1+t.reduce(d_,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)}))
var u=function(t){for(var n;n=t.children;)t=n[0]
return t}(i),s=function(t){for(var n;n=t.children;)t=n[n.length-1]
return t}(i),c=u.x-t(u,s)/2,l=s.x+t(s,u)/2
return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-c)/(l-c)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i}function g_(t){var n=0,e=t.children,r=e&&e.length
if(r)for(;--r>=0;)n+=e[r].value
else n=1
t.value=n}function y_(t,n){t instanceof Map?(t=[void 0,t],void 0===n&&(n=v_)):void 0===n&&(n=__)
for(var e,r,i,o,a,u=new b_(t),s=[u];e=s.pop();)if((i=n(e.data))&&(a=(i=Array.from(i)).length))for(e.children=i,o=a-1;o>=0;--o)s.push(r=i[o]=new b_(i[o])),r.parent=e,r.depth=e.depth+1
return u.eachBefore(x_)}function __(t){return t.children}function v_(t){return Array.isArray(t)?t[1]:null}function m_(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function x_(t){var n=0
do{t.height=n}while((t=t.parent)&&t.height<++n)}function b_(t){this.data=t,this.depth=this.height=0,this.parent=null}function w_(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n
return t}(Array.from(t))).length,o=[];r<i;)n=t[r],e&&M_(e,n)?++r:(e=C_(o=S_(o,n)),r=0)
return e}function S_(t,n){var e,r
if(T_(n,t))return[n]
for(e=0;e<t.length;++e)if(A_(n,t[e])&&T_(P_(t[e],n),t))return[t[e],n]
for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(A_(P_(t[e],t[r]),n)&&A_(P_(t[e],n),t[r])&&A_(P_(t[r],n),t[e])&&T_(E_(t[e],t[r],n),t))return[t[e],t[r],n]
throw new Error}function A_(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y
return e<0||e*e<r*r+i*i}function M_(t,n){var e=t.r-n.r+1e-9*Math.max(t.r,n.r,1),r=n.x-t.x,i=n.y-t.y
return e>0&&e*e>r*r+i*i}function T_(t,n){for(var e=0;e<n.length;++e)if(!M_(t,n[e]))return!1
return!0}function C_(t){switch(t.length){case 1:return{x:(n=t[0]).x,y:n.y,r:n.r}
case 2:return P_(t[0],t[1])
case 3:return E_(t[0],t[1],t[2])}var n}function P_(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,s=o-e,c=a-r,l=u-i,f=Math.sqrt(s*s+c*c)
return{x:(e+o+s/f*l)/2,y:(r+a+c/f*l)/2,r:(f+i+u)/2}}function E_(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,s=n.r,c=e.x,l=e.y,f=e.r,h=r-a,d=r-c,p=i-u,g=i-l,y=s-o,_=f-o,v=r*r+i*i-o*o,m=v-a*a-u*u+s*s,x=v-c*c-l*l+f*f,b=d*p-h*g,w=(p*x-g*m)/(2*b)-r,S=(g*y-p*_)/b,A=(d*m-h*x)/(2*b)-i,M=(h*_-d*y)/b,T=S*S+M*M-1,C=2*(o+w*S+A*M),P=w*w+A*A-o*o,E=-(T?(C+Math.sqrt(C*C-4*T*P))/(2*T):P/C)
return{x:r+w+S*E,y:i+A+M*E,r:E}}function k_(t,n,e){var r,i,o,a,u=t.x-n.x,s=t.y-n.y,c=u*u+s*s
c?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(c+a-i)/(2*c),o=Math.sqrt(Math.max(0,a/c-r*r)),e.x=t.x-r*u-o*s,e.y=t.y-r*s+o*u):(r=(c+i-a)/(2*c),o=Math.sqrt(Math.max(0,i/c-r*r)),e.x=n.x+r*u-o*s,e.y=n.y+r*s+o*u)):(e.x=n.x+e.r,e.y=n.y)}function N_(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y
return e>0&&e*e>r*r+i*i}function L_(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r
return i*i+o*o}function R_(t){this._=t,this.next=null,this.previous=null}function V_(t){if(!(o=(n=t,t="object"==typeof n&&"length"in n?n:Array.from(n)).length))return 0
var n,e,r,i,o,a,u,s,c,l,f,h
if((e=t[0]).x=0,e.y=0,!(o>1))return e.r
if(r=t[1],e.x=-r.r,r.x=e.r,r.y=0,!(o>2))return e.r+r.r
k_(r,e,i=t[2]),e=new R_(e),r=new R_(r),i=new R_(i),e.next=i.previous=r,r.next=e.previous=i,i.next=r.previous=e
t:for(s=3;s<o;++s){k_(e._,r._,i=t[s]),i=new R_(i),c=r.next,l=e.previous,f=r._.r,h=e._.r
do{if(f<=h){if(N_(c._,i._)){r=c,e.next=r,r.previous=e,--s
continue t}f+=c._.r,c=c.next}else{if(N_(l._,i._)){(e=l).next=r,r.previous=e,--s
continue t}h+=l._.r,l=l.previous}}while(c!==l.next)
for(i.previous=e,i.next=r,e.next=r.previous=r=i,a=L_(e);(i=i.next)!==r;)(u=L_(i))<a&&(e=i,a=u)
r=e.next}for(e=[r._],i=r;(i=i.next)!==r;)e.push(i._)
for(i=w_(e),s=0;s<o;++s)(e=t[s]).x-=i.x,e.y-=i.y
return i.r}function O_(t){return V_(t),t}function G_(t){return null==t?null:D_(t)}function D_(t){if("function"!=typeof t)throw new Error
return t}function I_(){return 0}function z_(t){return function(){return t}}function F_(t){return Math.sqrt(t.value)}function Y_(){var t=null,n=1,e=1,r=I_
function i(i){return i.x=n/2,i.y=e/2,t?i.eachBefore(U_(t)).eachAfter(B_(r,.5)).eachBefore(H_(1)):i.eachBefore(U_(F_)).eachAfter(B_(I_,1)).eachAfter(B_(r,i.r/Math.min(n,e))).eachBefore(H_(Math.min(n,e)/(2*i.r))),i}return i.radius=function(n){return arguments.length?(t=G_(n),i):t},i.size=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:z_(+t),i):r},i}function U_(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function B_(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0
if(u)for(i=0;i<a;++i)r[i].r+=u
if(o=V_(r),u)for(i=0;i<a;++i)r[i].r-=u
e.r=o+u}}}function H_(t){return function(n){var e=n.parent
n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function X_(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function j_(t,n,e,r,i){for(var o,a=t.children,u=-1,s=a.length,c=t.value&&(r-n)/t.value;++u<s;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*c}function q_(){var t=1,n=1,e=0,r=!1
function i(i){var o=i.height+1
return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&j_(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n)
var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e
a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(X_),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i}Ky.invert=function(t,n){for(var e,r=n,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=e=(r*(qy+Wy*i+o*(Qy+$y*i))-n)/(qy+3*Wy*i+o*(7*Qy+9*$y*i)))*r)*i*i,!(wh(e)<gh));++a);return[Zy*t*(qy+3*Wy*i+o*(7*Qy+9*$y*i))/Mh(r),Gh(Nh(r)/Zy)]},t_.invert=Ly(Sh),r_.invert=function(t,n){var e,r=n,i=25
do{var o=r*r,a=o*o
r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(wh(e)>ph&&--i>0)
return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},o_.invert=Ly(Gh),u_.invert=Ly((function(t){return 2*Sh(t)})),c_.invert=function(t,n){return[-n,2*Sh(Ch(t))-_h]},b_.prototype=y_.prototype={constructor:b_,count:function(){return this.eachAfter(g_)},each:function(t,n){let e=-1
for(const r of this)t.call(n,r,++e,this)
return this},eachAfter:function(t,n){for(var e,r,i,o=this,a=[o],u=[],s=-1;o=a.pop();)if(u.push(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])
for(;o=u.pop();)t.call(n,o,++s,this)
return this},eachBefore:function(t,n){for(var e,r,i=this,o=[i],a=-1;i=o.pop();)if(t.call(n,i,++a,this),e=i.children)for(r=e.length-1;r>=0;--r)o.push(e[r])
return this},find:function(t,n){let e=-1
for(const r of this)if(t.call(n,r,++e,this))return r},sum:function(t){return this.eachAfter((function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value
n.value=e}))},sort:function(t){return this.eachBefore((function(n){n.children&&n.children.sort(t)}))},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t
var e=t.ancestors(),r=n.ancestors(),i=null
for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop()
return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n)
for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent
return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t)
return n},descendants:function(){return Array.from(this)},leaves:function(){var t=[]
return this.eachBefore((function(n){n.children||t.push(n)})),t},links:function(){var t=this,n=[]
return t.each((function(e){e!==t&&n.push({source:e.parent,target:e})})),n},copy:function(){return y_(this).eachBefore(m_)},[Symbol.iterator]:function*(){var t,n,e,r,i=this,o=[i]
do{for(t=o.reverse(),o=[];i=t.pop();)if(yield i,n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e])}while(o.length)}}
var W_={depth:-1},Q_={}
function $_(t){return t.id}function Z_(t){return t.parentId}function K_(){var t=$_,n=Z_
function e(e){var r,i,o,a,u,s,c,l=Array.from(e),f=l.length,h=new Map
for(i=0;i<f;++i)r=l[i],u=l[i]=new b_(r),null!=(s=t(r,i,e))&&(s+="")&&(c=u.id=s,h.set(c,h.has(c)?Q_:u)),null!=(s=n(r,i,e))&&(s+="")&&(u.parent=s)
for(i=0;i<f;++i)if(s=(u=l[i]).parent){if(!(a=h.get(s)))throw new Error("missing: "+s)
if(a===Q_)throw new Error("ambiguous: "+s)
a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots")
o=u}if(!o)throw new Error("no root")
if(o.parent=W_,o.eachBefore((function(t){t.depth=t.parent.depth+1,--f})).eachBefore(x_),o.parent=null,f>0)throw new Error("cycle")
return o}return e.id=function(n){return arguments.length?(t=D_(n),e):t},e.parentId=function(t){return arguments.length?(n=D_(t),e):n},e}function J_(t,n){return t.parent===n.parent?1:2}function tv(t){var n=t.children
return n?n[0]:t.t}function nv(t){var n=t.children
return n?n[n.length-1]:t.t}function ev(t,n,e){var r=e/(n.i-t.i)
n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function rv(t,n,e){return t.a.parent===n.parent?t.a:e}function iv(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function ov(){var t=J_,n=1,e=1,r=null
function i(i){var s=function(t){for(var n,e,r,i,o,a=new iv(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new iv(r[i],i)),e.parent=n
return(a.parent=new iv(null,0)).children=[a],a}(i)
if(s.eachAfter(o),s.parent.m=-s.z,s.eachBefore(a),r)i.eachBefore(u)
else{var c=i,l=i,f=i
i.eachBefore((function(t){t.x<c.x&&(c=t),t.x>l.x&&(l=t),t.depth>f.depth&&(f=t)}))
var h=c===l?1:t(c,l)/2,d=h-c.x,p=n/(l.x+h+d),g=e/(f.depth||1)
i.eachBefore((function(t){t.x=(t.x+d)*p,t.y=t.depth*g}))}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null
if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n)
var o=(e[0].z+e[e.length-1].z)/2
i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._))
n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,s=o.parent.children[0],c=o.m,l=a.m,f=u.m,h=s.m;u=nv(u),o=tv(o),u&&o;)s=tv(s),(a=nv(a)).a=n,(i=u.z+f-o.z-c+t(u._,o._))>0&&(ev(rv(u,n,r),n,i),c+=i,l+=i),f+=u.m,c+=o.m,h+=s.m,l+=a.m
u&&!nv(a)&&(a.t=u,a.m+=f-l),o&&!tv(s)&&(s.t=o,s.m+=c-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i}function av(t,n,e,r,i){for(var o,a=t.children,u=-1,s=a.length,c=t.value&&(i-e)/t.value;++u<s;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*c}iv.prototype=Object.create(b_.prototype)
var uv=(1+Math.sqrt(5))/2
function sv(t,n,e,r,i,o){for(var a,u,s,c,l,f,h,d,p,g,y,_=[],v=n.children,m=0,x=0,b=v.length,w=n.value;m<b;){s=i-e,c=o-r
do{l=v[x++].value}while(!l&&x<b)
for(f=h=l,y=l*l*(g=Math.max(c/s,s/c)/(w*t)),p=Math.max(h/y,y/f);x<b;++x){if(l+=u=v[x].value,u<f&&(f=u),u>h&&(h=u),y=l*l*g,(d=Math.max(h/y,y/f))>p){l-=u
break}p=d}_.push(a={value:l,dice:s<c,children:v.slice(m,x)}),a.dice?j_(a,e,r,i,w?r+=c*l/w:o):av(a,e,r,w?e+=s*l/w:i,o),w-=l,m=x}return _}const cv=function t(n){function e(t,e,r,i,o){sv(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(uv)
function lv(){var t=cv,n=!1,e=1,r=1,i=[0],o=I_,a=I_,u=I_,s=I_,c=I_
function l(t){return t.x0=t.y0=0,t.x1=e,t.y1=r,t.eachBefore(f),i=[0],n&&t.eachBefore(X_),t}function f(n){var e=i[n.depth],r=n.x0+e,l=n.y0+e,f=n.x1-e,h=n.y1-e
f<r&&(r=f=(r+f)/2),h<l&&(l=h=(l+h)/2),n.x0=r,n.y0=l,n.x1=f,n.y1=h,n.children&&(e=i[n.depth+1]=o(n)/2,r+=c(n)-e,l+=a(n)-e,(f-=u(n)-e)<r&&(r=f=(r+f)/2),(h-=s(n)-e)<l&&(l=h=(l+h)/2),t(n,r,l,f,h))}return l.round=function(t){return arguments.length?(n=!!t,l):n},l.size=function(t){return arguments.length?(e=+t[0],r=+t[1],l):[e,r]},l.tile=function(n){return arguments.length?(t=D_(n),l):t},l.padding=function(t){return arguments.length?l.paddingInner(t).paddingOuter(t):l.paddingInner()},l.paddingInner=function(t){return arguments.length?(o="function"==typeof t?t:z_(+t),l):o},l.paddingOuter=function(t){return arguments.length?l.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):l.paddingTop()},l.paddingTop=function(t){return arguments.length?(a="function"==typeof t?t:z_(+t),l):a},l.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:z_(+t),l):u},l.paddingBottom=function(t){return arguments.length?(s="function"==typeof t?t:z_(+t),l):s},l.paddingLeft=function(t){return arguments.length?(c="function"==typeof t?t:z_(+t),l):c},l}function fv(t,n,e,r,i){var o,a,u=t.children,s=u.length,c=new Array(s+1)
for(c[0]=a=o=0;o<s;++o)c[o+1]=a+=u[o].value
!function t(n,e,r,i,o,a,s){if(n>=e-1){var l=u[n]
return l.x0=i,l.y0=o,l.x1=a,void(l.y1=s)}for(var f=c[n],h=r/2+f,d=n+1,p=e-1;d<p;){var g=d+p>>>1
c[g]<h?d=g+1:p=g}h-c[d-1]<c[d]-h&&n+1<d&&--d
var y=c[d]-f,_=r-y
if(a-i>s-o){var v=r?(i*_+a*y)/r:a
t(n,d,y,i,o,v,s),t(d,e,_,v,o,a,s)}else{var m=r?(o*_+s*y)/r:s
t(n,d,y,i,o,a,m),t(d,e,_,i,m,a,s)}}(0,s,t.value,n,e,r,i)}function hv(t,n,e,r,i){(1&t.depth?av:j_)(t,n,e,r,i)}const dv=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,s,c,l,f=-1,h=a.length,d=t.value;++f<h;){for(s=(u=a[f]).children,c=u.value=0,l=s.length;c<l;++c)u.value+=s[c].value
u.dice?j_(u,e,r,i,d?r+=(o-r)*u.value/d:o):av(u,e,r,d?e+=(i-e)*u.value/d:i,o),d-=u.value}else t._squarify=a=sv(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(uv)
function pv(t,n,e,r,i){var o=t*t,a=o*t
return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function gv(t){var n=t.length-1
return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i
return pv((e-r/n)*n,a,i,o,u)}}function yv(t){var n=t.length
return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n]
return pv((e-r/n)*n,i,o,a,u)}}const _v=t=>()=>t
function vv(t,n){return function(e){return t+e*n}}function mv(t,n){var e=n-t
return e?vv(t,e>180||e<-180?e-360*Math.round(e/360):e):_v(isNaN(t)?n:t)}function xv(t,n){var e=n-t
return e?vv(t,e):_v(isNaN(t)?n:t)}const bv=function t(n){var e=function(t){return 1==(t=+t)?xv:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):_v(isNaN(n)?e:n)}}(n)
function r(t,n){var r=e((t=ca(t)).r,(n=ca(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=xv(t.opacity,n.opacity)
return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1)
function wv(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i)
for(e=0;e<i;++e)r=ca(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0
return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}var Sv=wv(gv),Av=wv(yv)
function Mv(t,n){n||(n=[])
var e,r=t?Math.min(n.length,t.length):0,i=n.slice()
return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o
return i}}function Tv(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Cv(t,n){return(Tv(n)?Mv:Pv)(t,n)}function Pv(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r)
for(e=0;e<i;++e)o[e]=Ov(t[e],n[e])
for(;e<r;++e)a[e]=n[e]
return function(t){for(e=0;e<i;++e)a[e]=o[e](t)
return a}}function Ev(t,n){var e=new Date
return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function kv(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function Nv(t,n){var e,r={},i={}
for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=Ov(t[e],n[e]):i[e]=n[e]
return function(t){for(e in r)i[e]=r[e](t)
return i}}var Lv=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Rv=new RegExp(Lv.source,"g")
function Vv(t,n){var e,r,i,o=Lv.lastIndex=Rv.lastIndex=0,a=-1,u=[],s=[]
for(t+="",n+="";(e=Lv.exec(t))&&(r=Rv.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:kv(e,r)})),o=Rv.lastIndex
return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t)
return u.join("")})}function Ov(t,n){var e,r=typeof n
return null==n||"boolean"===r?_v(n):("number"===r?kv:"string"===r?(e=oa(n))?(n=e,bv):Vv:n instanceof oa?bv:n instanceof Date?Ev:Tv(n)?Mv:Array.isArray(n)?Pv:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?Nv:kv)(t,n)}function Gv(t){var n=t.length
return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function Dv(t,n){var e=mv(+t,+n)
return function(t){var n=e(t)
return n-360*Math.floor(n/360)}}function Iv(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var zv,Fv=180/Math.PI,Yv={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1}
function Uv(t,n,e,r,i,o){var a,u,s
return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Fv,skewX:Math.atan(s)*Fv,scaleX:a,scaleY:u}}function Bv(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],s=[]
return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var s=a.push("translate(",null,n,null,e)
u.push({i:s-4,x:kv(t,i)},{i:s-2,x:kv(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,s),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:kv(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,s),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:kv(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,s),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")")
a.push({i:u-4,x:kv(t,e)},{i:u-2,x:kv(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,s),o=a=null,function(t){for(var n,e=-1,r=s.length;++e<r;)u[(n=s[e]).i]=n.x(t)
return u.join("")}}}var Hv=Bv((function(t){const n=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"")
return n.isIdentity?Yv:Uv(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),Xv=Bv((function(t){return null==t?Yv:(zv||(zv=document.createElementNS("http://www.w3.org/2000/svg","g")),zv.setAttribute("transform",t),(t=zv.transform.baseVal.consolidate())?Uv((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Yv)}),", ",")",")")
function jv(t){return((t=Math.exp(t))+1/t)/2}const qv=function t(n,e,r){function i(t,i){var o,a,u=t[0],s=t[1],c=t[2],l=i[0],f=i[1],h=i[2],d=l-u,p=f-s,g=d*d+p*p
if(g<1e-12)a=Math.log(h/c)/n,o=function(t){return[u+t*d,s+t*p,c*Math.exp(n*t*a)]}
else{var y=Math.sqrt(g),_=(h*h-c*c+r*g)/(2*c*e*y),v=(h*h-c*c-r*g)/(2*h*e*y),m=Math.log(Math.sqrt(_*_+1)-_),x=Math.log(Math.sqrt(v*v+1)-v)
a=(x-m)/n,o=function(t){var r,i=t*a,o=jv(m),l=c/(e*y)*(o*(r=n*i+m,((r=Math.exp(2*r))-1)/(r+1))-function(t){return((t=Math.exp(t))-1/t)/2}(m))
return[u+l*d,s+l*p,c*o/jv(n*i+m)]}}return o.duration=1e3*a*n/Math.SQRT2,o}return i.rho=function(n){var e=Math.max(.001,+n),r=e*e
return t(e,r,r*r)},i}(Math.SQRT2,2,4)
function Wv(t){return function(n,e){var r=t((n=ya(n)).h,(e=ya(e)).h),i=xv(n.s,e.s),o=xv(n.l,e.l),a=xv(n.opacity,e.opacity)
return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}const Qv=Wv(mv)
var $v=Wv(xv)
function Zv(t,n){var e=xv((t=Pa(t)).l,(n=Pa(n)).l),r=xv(t.a,n.a),i=xv(t.b,n.b),o=xv(t.opacity,n.opacity)
return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}}function Kv(t){return function(n,e){var r=t((n=Ga(n)).h,(e=Ga(e)).h),i=xv(n.c,e.c),o=xv(n.l,e.l),a=xv(n.opacity,e.opacity)
return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}const Jv=Kv(mv)
var tm=Kv(xv)
function nm(t){return function n(e){function r(n,r){var i=t((n=Wa(n)).h,(r=Wa(r)).h),o=xv(n.s,r.s),a=xv(n.l,r.l),u=xv(n.opacity,r.opacity)
return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}const em=nm(mv)
var rm=nm(xv)
function im(t,n){void 0===n&&(n=t,t=Ov)
for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e])
return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)))
return o[n](t-n)}}function om(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1))
return e}const am=Math.PI,um=2*am,sm=1e-6,cm=um-sm
function lm(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function fm(){return new lm}lm.prototype=fm.prototype={constructor:lm,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i
var o=this._x1,a=this._y1,u=e-t,s=r-n,c=o-t,l=a-n,f=c*c+l*l
if(i<0)throw new Error("negative radius: "+i)
if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n)
else if(f>sm)if(Math.abs(l*u-s*c)>sm&&i){var h=e-o,d=r-a,p=u*u+s*s,g=h*h+d*d,y=Math.sqrt(p),_=Math.sqrt(f),v=i*Math.tan((am-Math.acos((p+f-g)/(2*y*_)))/2),m=v/_,x=v/y
Math.abs(m-1)>sm&&(this._+="L"+(t+m*c)+","+(n+m*l)),this._+="A"+i+","+i+",0,0,"+ +(l*h>c*d)+","+(this._x1=t+x*u)+","+(this._y1=n+x*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,e,r,i,o){t=+t,n=+n,o=!!o
var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),s=t+a,c=n+u,l=1^o,f=o?r-i:i-r
if(e<0)throw new Error("negative radius: "+e)
null===this._x1?this._+="M"+s+","+c:(Math.abs(this._x1-s)>sm||Math.abs(this._y1-c)>sm)&&(this._+="L"+s+","+c),e&&(f<0&&(f=f%um+um),f>cm?this._+="A"+e+","+e+",0,1,"+l+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+l+","+(this._x1=s)+","+(this._y1=c):f>sm&&(this._+="A"+e+","+e+",0,"+ +(f>=am)+","+l+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}}
const hm=fm
function dm(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1]
return o/2}function pm(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],s=0;++r<i;)n=u,u=t[r],s+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e
return[o/(s*=3),a/s]}function gm(t,n){return t[0]-n[0]||t[1]-n[1]}function ym(t){const n=t.length,e=[0,1]
let r,i=2
for(r=2;r<n;++r){for(;i>1&&(o=t[e[i-2]],a=t[e[i-1]],u=t[r],(a[0]-o[0])*(u[1]-o[1])-(a[1]-o[1])*(u[0]-o[0])<=0);)--i
e[i++]=r}var o,a,u
return e.slice(0,i)}function _m(t){if((e=t.length)<3)return null
var n,e,r=new Array(e),i=new Array(e)
for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n]
for(r.sort(gm),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]]
var o=ym(r),a=ym(i),u=a[0]===o[0],s=a[a.length-1]===o[o.length-1],c=[]
for(n=o.length-1;n>=0;--n)c.push(t[r[o[n]][2]])
for(n=+u;n<a.length-s;++n)c.push(t[r[a[n]][2]])
return c}function vm(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],s=o[0],c=o[1],l=!1,f=0;f<i;++f)e=(o=t[f])[0],(r=o[1])>u!=c>u&&a<(s-e)*(u-r)/(c-r)+e&&(l=!l),s=e,c=r
return l}function mm(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],s=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],s+=Math.hypot(n,e)
return s}function xm(t,n,e,r){if(isNaN(n)||isNaN(e))return t
var i,o,a,u,s,c,l,f,h,d=t._root,p={data:r},g=t._x0,y=t._y0,_=t._x1,v=t._y1
if(!d)return t._root=p,t
for(;d.length;)if((c=n>=(o=(g+_)/2))?g=o:_=o,(l=e>=(a=(y+v)/2))?y=a:v=a,i=d,!(d=d[f=l<<1|c]))return i[f]=p,t
if(u=+t._x.call(null,d.data),s=+t._y.call(null,d.data),n===u&&e===s)return p.next=d,i?i[f]=p:t._root=p,t
do{i=i?i[f]=new Array(4):t._root=new Array(4),(c=n>=(o=(g+_)/2))?g=o:_=o,(l=e>=(a=(y+v)/2))?y=a:v=a}while((f=l<<1|c)==(h=(s>=a)<<1|u>=o))
return i[h]=d,i[f]=p,t}function bm(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function wm(t){return t[0]}function Sm(t){return t[1]}function Am(t,n,e){var r=new Mm(null==n?wm:n,null==e?Sm:e,NaN,NaN,NaN,NaN)
return null==t?r:r.addAll(t)}function Mm(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Tm(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data}
return n}var Cm=Am.prototype=Mm.prototype
Cm.copy=function(){var t,n,e=new Mm(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root
if(!r)return e
if(!r.length)return e._root=Tm(r),e
for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Tm(n))
return e},Cm.add=function(t){const n=+this._x.call(null,t),e=+this._y.call(null,t)
return xm(this.cover(n,e),n,e,t)},Cm.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),s=1/0,c=1/0,l=-1/0,f=-1/0
for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<s&&(s=r),r>l&&(l=r),i<c&&(c=i),i>f&&(f=i))
if(s>l||c>f)return this
for(this.cover(s,c).cover(l,f),e=0;e<o;++e)xm(this,a[e],u[e],t[e])
return this},Cm.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this
var e=this._x0,r=this._y0,i=this._x1,o=this._y1
if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1
else{for(var a,u,s=i-e||1,c=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=c,c=a,s*=2,u){case 0:i=e+s,o=r+s
break
case 1:e=i-s,o=r+s
break
case 2:i=e+s,r=o-s
break
case 3:e=i-s,r=o-s}this._root&&this._root.length&&(this._root=c)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},Cm.data=function(){var t=[]
return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},Cm.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},Cm.find=function(t,n,e){var r,i,o,a,u,s,c,l=this._x0,f=this._y0,h=this._x1,d=this._y1,p=[],g=this._root
for(g&&p.push(new bm(g,l,f,h,d)),null==e?e=1/0:(l=t-e,f=n-e,h=t+e,d=n+e,e*=e);s=p.pop();)if(!(!(g=s.node)||(i=s.x0)>h||(o=s.y0)>d||(a=s.x1)<l||(u=s.y1)<f))if(g.length){var y=(i+a)/2,_=(o+u)/2
p.push(new bm(g[3],y,_,a,u),new bm(g[2],i,_,y,u),new bm(g[1],y,o,a,_),new bm(g[0],i,o,y,_)),(c=(n>=_)<<1|t>=y)&&(s=p[p.length-1],p[p.length-1]=p[p.length-1-c],p[p.length-1-c]=s)}else{var v=t-+this._x.call(null,g.data),m=n-+this._y.call(null,g.data),x=v*v+m*m
if(x<e){var b=Math.sqrt(e=x)
l=t-b,f=n-b,h=t+b,d=n+b,r=g.data}}return r},Cm.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this
var n,e,r,i,o,a,u,s,c,l,f,h,d=this._root,p=this._x0,g=this._y0,y=this._x1,_=this._y1
if(!d)return this
if(d.length)for(;;){if((c=o>=(u=(p+y)/2))?p=u:y=u,(l=a>=(s=(g+_)/2))?g=s:_=s,n=d,!(d=d[f=l<<1|c]))return this
if(!d.length)break;(n[f+1&3]||n[f+2&3]||n[f+3&3])&&(e=n,h=f)}for(;d.data!==t;)if(r=d,!(d=d.next))return this
return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[f]=i:delete n[f],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},Cm.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n])
return this},Cm.root=function(){return this._root},Cm.size=function(){var t=0
return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},Cm.visit=function(t){var n,e,r,i,o,a,u=[],s=this._root
for(s&&u.push(new bm(s,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(s=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&s.length){var c=(r+o)/2,l=(i+a)/2;(e=s[3])&&u.push(new bm(e,c,l,o,a)),(e=s[2])&&u.push(new bm(e,r,l,c,a)),(e=s[1])&&u.push(new bm(e,c,i,o,l)),(e=s[0])&&u.push(new bm(e,r,i,c,l))}return this},Cm.visitAfter=function(t){var n,e=[],r=[]
for(this._root&&e.push(new bm(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node
if(i.length){var o,a=n.x0,u=n.y0,s=n.x1,c=n.y1,l=(a+s)/2,f=(u+c)/2;(o=i[0])&&e.push(new bm(o,a,u,l,f)),(o=i[1])&&e.push(new bm(o,l,u,s,f)),(o=i[2])&&e.push(new bm(o,a,f,l,c)),(o=i[3])&&e.push(new bm(o,l,f,s,c))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1)
return this},Cm.x=function(t){return arguments.length?(this._x=t,this):this._x},Cm.y=function(t){return arguments.length?(this._y=t,this):this._y}
const Pm=Math.random,Em=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(Pm),km=function t(n){function e(t,e){return arguments.length<2&&(e=t,t=0),t=Math.floor(t),e=Math.floor(e)-t,function(){return Math.floor(n()*e+t)}}return e.source=t,e}(Pm),Nm=function t(n){function e(t,e){var r,i
return t=null==t?0:+t,e=null==e?1:+e,function(){var o
if(null!=r)o=r,r=null
else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1)
return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(Pm),Lm=function t(n){var e=Nm.source(n)
function r(){var t=e.apply(this,arguments)
return function(){return Math.exp(t())}}return r.source=t,r}(Pm),Rm=function t(n){function e(t){return(t=+t)<=0?()=>0:function(){for(var e=0,r=t;r>1;--r)e+=n()
return e+r*n()}}return e.source=t,e}(Pm),Vm=function t(n){var e=Rm.source(n)
function r(t){if(0==(t=+t))return n
var r=e(t)
return function(){return r()/t}}return r.source=t,r}(Pm),Om=function t(n){function e(t){return function(){return-Math.log1p(-n())/t}}return e.source=t,e}(Pm),Gm=function t(n){function e(t){if((t=+t)<0)throw new RangeError("invalid alpha")
return t=1/-t,function(){return Math.pow(1-n(),t)}}return e.source=t,e}(Pm),Dm=function t(n){function e(t){if((t=+t)<0||t>1)throw new RangeError("invalid p")
return function(){return Math.floor(n()+t)}}return e.source=t,e}(Pm),Im=function t(n){function e(t){if((t=+t)<0||t>1)throw new RangeError("invalid p")
return 0===t?()=>1/0:1===t?()=>1:(t=Math.log1p(-t),function(){return 1+Math.floor(Math.log1p(-n())/t)})}return e.source=t,e}(Pm),zm=function t(n){var e=Nm.source(n)()
function r(t,r){if((t=+t)<0)throw new RangeError("invalid k")
if(0===t)return()=>0
if(r=null==r?1:+r,1===t)return()=>-Math.log1p(-n())*r
var i=(t<1?t+1:t)-1/3,o=1/(3*Math.sqrt(i)),a=t<1?()=>Math.pow(n(),1/t):()=>1
return function(){do{do{var t=e(),u=1+o*t}while(u<=0)
u*=u*u
var s=1-n()}while(s>=1-.0331*t*t*t*t&&Math.log(s)>=.5*t*t+i*(1-u+Math.log(u)))
return i*u*a()*r}}return r.source=t,r}(Pm),Fm=function t(n){var e=zm.source(n)
function r(t,n){var r=e(t),i=e(n)
return function(){var t=r()
return 0===t?0:t/(t+i())}}return r.source=t,r}(Pm),Ym=function t(n){var e=Im.source(n),r=Fm.source(n)
function i(t,n){return t=+t,(n=+n)>=1?()=>t:n<=0?()=>0:function(){for(var i=0,o=t,a=n;o*a>16&&o*(1-a)>16;){var u=Math.floor((o+1)*a),s=r(u,o-u+1)()
s<=a?(i+=u,o-=u,a=(a-s)/(1-s)):(o=u-1,a/=s)}for(var c=a<.5,l=e(c?a:1-a),f=l(),h=0;f<=o;++h)f+=l()
return i+(c?h:o-h)}}return i.source=t,i}(Pm),Um=function t(n){function e(t,e,r){var i
return 0==(t=+t)?i=t=>-Math.log(t):(t=1/t,i=n=>Math.pow(n,t)),e=null==e?0:+e,r=null==r?1:+r,function(){return e+r*i(-Math.log1p(-n()))}}return e.source=t,e}(Pm),Bm=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,function(){return t+e*Math.tan(Math.PI*n())}}return e.source=t,e}(Pm),Hm=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,function(){var r=n()
return t+e*Math.log(r/(1-r))}}return e.source=t,e}(Pm),Xm=function t(n){var e=zm.source(n),r=Ym.source(n)
function i(t){return function(){for(var i=0,o=t;o>16;){var a=Math.floor(.875*o),u=e(a)()
if(u>o)return i+r(a-1,o/u)()
i+=a,o-=u}for(var s=-Math.log1p(-n()),c=0;s<=o;++c)s-=Math.log1p(-n())
return i+c}}return i.source=t,i}(Pm),jm=1664525,qm=1013904223,Wm=1/4294967296
function Qm(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random(),n=0|(0<=t&&t<1?t/Wm:Math.abs(t))
return()=>(n=jm*n+qm|0,Wm*(n>>>0))}function $m(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e
for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e
return o}function Zm(t,n){switch(arguments.length){case 0:break
case 1:this.range(t)
break
default:this.range(n).domain(t)}return this}function Km(t,n){switch(arguments.length){case 0:break
case 1:"function"==typeof t?this.interpolator(t):this.range(t)
break
default:this.domain(t),"function"==typeof n?this.interpolator(n):this.range(n)}return this}const Jm=Symbol("implicit")
function tx(){var t=new Map,n=[],e=[],r=Jm
function i(i){var o=i+"",a=t.get(o)
if(!a){if(r!==Jm)return r
t.set(o,a=n.push(i))}return e[(a-1)%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice()
n=[],t=new Map
for(const r of e){const e=r+""
t.has(e)||t.set(e,n.push(r))}return i},i.range=function(t){return arguments.length?(e=Array.from(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return tx(n,e).unknown(r)},Zm.apply(i,arguments),i}function nx(){var t,n,e=tx().unknown(void 0),r=e.domain,i=e.range,o=0,a=1,u=!1,s=0,c=0,l=.5
function f(){var e=r().length,f=a<o,h=f?a:o,d=f?o:a
t=(d-h)/Math.max(1,e-s+2*c),u&&(t=Math.floor(t)),h+=(d-h-t*(e-s))*l,n=t*(1-s),u&&(h=Math.round(h),n=Math.round(n))
var p=$m(e).map((function(n){return h+t*n}))
return i(f?p.reverse():p)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),f()):r()},e.range=function(t){return arguments.length?([o,a]=t,o=+o,a=+a,f()):[o,a]},e.rangeRound=function(t){return[o,a]=t,o=+o,a=+a,u=!0,f()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(u=!!t,f()):u},e.padding=function(t){return arguments.length?(s=Math.min(1,c=+t),f()):s},e.paddingInner=function(t){return arguments.length?(s=Math.min(1,t),f()):s},e.paddingOuter=function(t){return arguments.length?(c=+t,f()):c},e.align=function(t){return arguments.length?(l=Math.max(0,Math.min(1,t)),f()):l},e.copy=function(){return nx(r(),[o,a]).round(u).paddingInner(s).paddingOuter(c).align(l)},Zm.apply(f(),arguments)}function ex(t){var n=t.copy
return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return ex(n())},t}function rx(){return ex(nx.apply(null,arguments).paddingInner(1))}var ix=Math.sqrt(50),ox=Math.sqrt(10),ax=Math.sqrt(2)
function ux(t,n,e){var r,i,o,a,u=-1
if(e=+e,(t=+t)==(n=+n)&&e>0)return[t]
if((r=n<t)&&(i=t,t=n,n=i),0===(a=sx(t,n,e))||!isFinite(a))return[]
if(a>0){let e=Math.round(t/a),r=Math.round(n/a)
for(e*a<t&&++e,r*a>n&&--r,o=new Array(i=r-e+1);++u<i;)o[u]=(e+u)*a}else{a=-a
let e=Math.round(t*a),r=Math.round(n*a)
for(e/a<t&&++e,r/a>n&&--r,o=new Array(i=r-e+1);++u<i;)o[u]=(e+u)/a}return r&&o.reverse(),o}function sx(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i)
return i>=0?(o>=ix?10:o>=ox?5:o>=ax?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=ix?10:o>=ox?5:o>=ax?2:1)}function cx(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i
return o>=ix?i*=10:o>=ox?i*=5:o>=ax&&(i*=2),n<t?-i:i}function lx(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function fx(t){let n=t,e=t
function r(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){const o=r+i>>>1
e(t[o],n)<0?r=o+1:i=o}return r}return 1===t.length&&(n=(n,e)=>t(n)-e,e=function(t){return(n,e)=>lx(t(n),e)}(t)),{left:r,center:function(t,e,i,o){null==i&&(i=0),null==o&&(o=t.length)
const a=r(t,e,i,o-1)
return a>i&&n(t[a-1],e)>-n(t[a],e)?a-1:a},right:function(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){const o=r+i>>>1
e(t[o],n)>0?i=o:r=o+1}return r}}}function hx(t){return null===t?NaN:+t}const dx=fx(lx),px=dx.right,gx=(dx.left,fx(hx).center,px)
function yx(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function _x(t,n){var e=Object.create(t.prototype)
for(var r in n)e[r]=n[r]
return e}function vx(){}var mx=.7,xx=1.4285714285714286,bx="\\s*([+-]?\\d+)\\s*",wx="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Sx="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ax=/^#([0-9a-f]{3,8})$/,Mx=new RegExp("^rgb\\("+[bx,bx,bx]+"\\)$"),Tx=new RegExp("^rgb\\("+[Sx,Sx,Sx]+"\\)$"),Cx=new RegExp("^rgba\\("+[bx,bx,bx,wx]+"\\)$"),Px=new RegExp("^rgba\\("+[Sx,Sx,Sx,wx]+"\\)$"),Ex=new RegExp("^hsl\\("+[wx,Sx,Sx]+"\\)$"),kx=new RegExp("^hsla\\("+[wx,Sx,Sx,wx]+"\\)$"),Nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function Lx(){return this.rgb().formatHex()}function Rx(){return this.rgb().formatRgb()}function Vx(t){var n,e
return t=(t+"").trim().toLowerCase(),(n=Ax.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?Ox(n):3===e?new zx(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?Gx(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?Gx(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=Mx.exec(t))?new zx(n[1],n[2],n[3],1):(n=Tx.exec(t))?new zx(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Cx.exec(t))?Gx(n[1],n[2],n[3],n[4]):(n=Px.exec(t))?Gx(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Ex.exec(t))?Bx(n[1],n[2]/100,n[3]/100,1):(n=kx.exec(t))?Bx(n[1],n[2]/100,n[3]/100,n[4]):Nx.hasOwnProperty(t)?Ox(Nx[t]):"transparent"===t?new zx(NaN,NaN,NaN,0):null}function Ox(t){return new zx(t>>16&255,t>>8&255,255&t,1)}function Gx(t,n,e,r){return r<=0&&(t=n=e=NaN),new zx(t,n,e,r)}function Dx(t){return t instanceof vx||(t=Vx(t)),t?new zx((t=t.rgb()).r,t.g,t.b,t.opacity):new zx}function Ix(t,n,e,r){return 1===arguments.length?Dx(t):new zx(t,n,e,null==r?1:r)}function zx(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Fx(){return"#"+Ux(this.r)+Ux(this.g)+Ux(this.b)}function Yx(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Ux(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Bx(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Xx(t,n,e,r)}function Hx(t){if(t instanceof Xx)return new Xx(t.h,t.s,t.l,t.opacity)
if(t instanceof vx||(t=Vx(t)),!t)return new Xx
if(t instanceof Xx)return t
var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2
return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new Xx(a,u,s,t.opacity)}function Xx(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function jx(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function qx(t,n,e,r,i){var o=t*t,a=o*t
return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}yx(vx,Vx,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:Lx,formatHex:Lx,formatHsl:function(){return Hx(this).formatHsl()},formatRgb:Rx,toString:Rx}),yx(zx,Ix,_x(vx,{brighter:function(t){return t=null==t?xx:Math.pow(xx,t),new zx(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?mx:Math.pow(mx,t),new zx(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Fx,formatHex:Fx,formatRgb:Yx,toString:Yx})),yx(Xx,(function(t,n,e,r){return 1===arguments.length?Hx(t):new Xx(t,n,e,null==r?1:r)}),_x(vx,{brighter:function(t){return t=null==t?xx:Math.pow(xx,t),new Xx(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?mx:Math.pow(mx,t),new Xx(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r
return new zx(jx(t>=240?t-240:t+120,i,r),jx(t,i,r),jx(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))
const Wx=t=>()=>t
function Qx(t,n){var e=n-t
return e?function(t,n){return function(e){return t+e*n}}(t,e):Wx(isNaN(t)?n:t)}const $x=function t(n){var e=function(t){return 1==(t=+t)?Qx:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):Wx(isNaN(n)?e:n)}}(n)
function r(t,n){var r=e((t=Ix(t)).r,(n=Ix(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=Qx(t.opacity,n.opacity)
return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1)
function Zx(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i)
for(e=0;e<i;++e)r=Ix(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0
return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}function Kx(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r)
for(e=0;e<i;++e)o[e]=ab(t[e],n[e])
for(;e<r;++e)a[e]=n[e]
return function(t){for(e=0;e<i;++e)a[e]=o[e](t)
return a}}function Jx(t,n){var e=new Date
return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function tb(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function nb(t,n){var e,r={},i={}
for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=ab(t[e],n[e]):i[e]=n[e]
return function(t){for(e in r)i[e]=r[e](t)
return i}}Zx((function(t){var n=t.length-1
return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i
return qx((e-r/n)*n,a,i,o,u)}})),Zx((function(t){var n=t.length
return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n]
return qx((e-r/n)*n,i,o,a,u)}}))
var eb=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,rb=new RegExp(eb.source,"g")
function ib(t,n){var e,r,i,o=eb.lastIndex=rb.lastIndex=0,a=-1,u=[],s=[]
for(t+="",n+="";(e=eb.exec(t))&&(r=rb.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:tb(e,r)})),o=rb.lastIndex
return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t)
return u.join("")})}function ob(t,n){n||(n=[])
var e,r=t?Math.min(n.length,t.length):0,i=n.slice()
return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o
return i}}function ab(t,n){var e,r,i=typeof n
return null==n||"boolean"===i?Wx(n):("number"===i?tb:"string"===i?(e=Vx(n))?(n=e,$x):ib:n instanceof Vx?$x:n instanceof Date?Jx:(r=n,!ArrayBuffer.isView(r)||r instanceof DataView?Array.isArray(n)?Kx:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?nb:tb:ob))(t,n)}function ub(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}function sb(t){return+t}var cb=[0,1]
function lb(t){return t}function fb(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:(e=isNaN(n)?NaN:.5,function(){return e})
var e}function hb(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1]
return i<r?(r=fb(i,r),o=e(a,o)):(r=fb(r,i),o=e(o,a)),function(t){return o(r(t))}}function db(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),o=new Array(r),a=-1
for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<r;)i[a]=fb(t[a],t[a+1]),o[a]=e(n[a],n[a+1])
return function(n){var e=gx(t,n,1,r)-1
return o[e](i[e](n))}}function pb(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function gb(){var t,n,e,r,i,o,a=cb,u=cb,s=ab,c=lb
function l(){var t,n,e,s=Math.min(a.length,u.length)
return c!==lb&&(t=a[0],n=a[s-1],t>n&&(e=t,t=n,n=e),c=function(e){return Math.max(t,Math.min(n,e))}),r=s>2?db:hb,i=o=null,f}function f(n){return null==n||isNaN(n=+n)?e:(i||(i=r(a.map(t),u,s)))(t(c(n)))}return f.invert=function(e){return c(n((o||(o=r(u,a.map(t),tb)))(e)))},f.domain=function(t){return arguments.length?(a=Array.from(t,sb),l()):a.slice()},f.range=function(t){return arguments.length?(u=Array.from(t),l()):u.slice()},f.rangeRound=function(t){return u=Array.from(t),s=ub,l()},f.clamp=function(t){return arguments.length?(c=!!t||lb,l()):c!==lb},f.interpolate=function(t){return arguments.length?(s=t,l()):s},f.unknown=function(t){return arguments.length?(e=t,f):e},function(e,r){return t=e,n=r,l()}}function yb(){return gb()(lb,lb)}var _b,vb=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function mb(t){if(!(n=vb.exec(t)))throw new Error("invalid format: "+t)
var n
return new xb({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function xb(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function bb(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null
var e,r=t.slice(0,e)
return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function wb(t){return(t=bb(Math.abs(t)))?t[1]:NaN}function Sb(t,n){var e=bb(t,n)
if(!e)return t+""
var r=e[0],i=e[1]
return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}mb.prototype=xb.prototype,xb.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}
const Ab={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>Sb(100*t,n),r:Sb,s:function(t,n){var e=bb(t,n)
if(!e)return t+""
var r=e[0],i=e[1],o=i-(_b=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length
return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+bb(t,Math.max(0,n+o-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)}
function Mb(t){return t}var Tb,Cb,Pb,Eb=Array.prototype.map,kb=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"]
function Nb(t,n,e,r){var i,o=cx(t,n,e)
switch((r=mb(null==r?",f":r)).type){case"s":var a=Math.max(Math.abs(t),Math.abs(n))
return null!=r.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(wb(n)/3)))-wb(Math.abs(t)))}(o,a))||(r.precision=i),Pb(r,a)
case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,wb(n)-wb(t))+1}(o,Math.max(Math.abs(t),Math.abs(n))))||(r.precision=i-("e"===r.type))
break
case"f":case"%":null!=r.precision||isNaN(i=function(t){return Math.max(0,-wb(Math.abs(t)))}(o))||(r.precision=i-2*("%"===r.type))}return Cb(r)}function Lb(t){var n=t.domain
return t.ticks=function(t){var e=n()
return ux(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n()
return Nb(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10)
var r,i,o=n(),a=0,u=o.length-1,s=o[a],c=o[u],l=10
for(c<s&&(i=s,s=c,c=i,i=a,a=u,u=i);l-- >0;){if((i=sx(s,c,e))===r)return o[a]=s,o[u]=c,n(o)
if(i>0)s=Math.floor(s/i)*i,c=Math.ceil(c/i)*i
else{if(!(i<0))break
s=Math.ceil(s*i)/i,c=Math.floor(c*i)/i}r=i}return t},t}function Rb(){var t=yb()
return t.copy=function(){return pb(t,Rb())},Zm.apply(t,arguments),Lb(t)}function Vb(t){var n
function e(t){return null==t||isNaN(t=+t)?n:t}return e.invert=e,e.domain=e.range=function(n){return arguments.length?(t=Array.from(n,sb),e):t.slice()},e.unknown=function(t){return arguments.length?(n=t,e):n},e.copy=function(){return Vb(t).unknown(n)},t=arguments.length?Array.from(t,sb):[0,1],Lb(e)}function Ob(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i]
return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Gb(t){return Math.log(t)}function Db(t){return Math.exp(t)}function Ib(t){return-Math.log(-t)}function zb(t){return-Math.exp(-t)}function Fb(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Yb(t){return function(n){return-t(-n)}}function Ub(t){var n,e,r=t(Gb,Db),i=r.domain,o=10
function a(){return n=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(o),e=function(t){return 10===t?Fb:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(o),i()[0]<0?(n=Yb(n),e=Yb(e),t(Ib,zb)):t(Gb,Db),r}return r.base=function(t){return arguments.length?(o=+t,a()):o},r.domain=function(t){return arguments.length?(i(t),a()):i()},r.ticks=function(t){var r,a=i(),u=a[0],s=a[a.length-1];(r=s<u)&&(h=u,u=s,s=h)
var c,l,f,h=n(u),d=n(s),p=null==t?10:+t,g=[]
if(!(o%1)&&d-h<p){if(h=Math.floor(h),d=Math.ceil(d),u>0){for(;h<=d;++h)for(l=1,c=e(h);l<o;++l)if(!((f=c*l)<u)){if(f>s)break
g.push(f)}}else for(;h<=d;++h)for(l=o-1,c=e(h);l>=1;--l)if(!((f=c*l)<u)){if(f>s)break
g.push(f)}2*g.length<p&&(g=ux(u,s,p))}else g=ux(h,d,Math.min(d-h,p)).map(e)
return r?g.reverse():g},r.tickFormat=function(t,i){if(null==i&&(i=10===o?".0e":","),"function"!=typeof i&&(i=Cb(i)),t===1/0)return i
null==t&&(t=10)
var a=Math.max(1,o*t/r.ticks().length)
return function(t){var r=t/e(Math.round(n(t)))
return r*o<o-.5&&(r*=o),r<=a?i(t):""}},r.nice=function(){return i(Ob(i(),{floor:function(t){return e(Math.floor(n(t)))},ceil:function(t){return e(Math.ceil(n(t)))}}))},r}function Bb(){var t=Ub(gb()).domain([1,10])
return t.copy=function(){return pb(t,Bb()).base(t.base())},Zm.apply(t,arguments),t}function Hb(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function Xb(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function jb(t){var n=1,e=t(Hb(n),Xb(n))
return e.constant=function(e){return arguments.length?t(Hb(n=+e),Xb(n)):n},Lb(e)}function qb(){var t=jb(gb())
return t.copy=function(){return pb(t,qb()).constant(t.constant())},Zm.apply(t,arguments)}function Wb(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function Qb(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function $b(t){return t<0?-t*t:t*t}function Zb(t){var n=t(lb,lb),e=1
function r(){return 1===e?t(lb,lb):.5===e?t(Qb,$b):t(Wb(e),Wb(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,r()):e},Lb(n)}function Kb(){var t=Zb(gb())
return t.copy=function(){return pb(t,Kb()).exponent(t.exponent())},Zm.apply(t,arguments),t}function Jb(){return Kb.apply(null,arguments).exponent(.5)}function tw(t){return Math.sign(t)*t*t}function nw(t){return Math.sign(t)*Math.sqrt(Math.abs(t))}function ew(){var t,n=yb(),e=[0,1],r=!1
function i(e){var i=nw(n(e))
return isNaN(i)?t:r?Math.round(i):i}return i.invert=function(t){return n.invert(tw(t))},i.domain=function(t){return arguments.length?(n.domain(t),i):n.domain()},i.range=function(t){return arguments.length?(n.range((e=Array.from(t,sb)).map(tw)),i):e.slice()},i.rangeRound=function(t){return i.range(t).round(!0)},i.round=function(t){return arguments.length?(r=!!t,i):r},i.clamp=function(t){return arguments.length?(n.clamp(t),i):n.clamp()},i.unknown=function(n){return arguments.length?(t=n,i):t},i.copy=function(){return ew(n.domain(),e).round(r).clamp(n.clamp()).unknown(t)},Zm.apply(i,arguments),Lb(i)}function rw(t,n){let e
if(void 0===n)for(const r of t)null!=r&&(e<r||void 0===e&&r>=r)&&(e=r)
else{let r=-1
for(let i of t)null!=(i=n(i,++r,t))&&(e<i||void 0===e&&i>=i)&&(e=i)}return e}function iw(t,n){let e
if(void 0===n)for(const r of t)null!=r&&(e>r||void 0===e&&r>=r)&&(e=r)
else{let r=-1
for(let i of t)null!=(i=n(i,++r,t))&&(e>i||void 0===e&&i>=i)&&(e=i)}return e}function ow(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length-1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:lx
for(;r>e;){if(r-e>600){const o=r-e+1,a=n-e+1,u=Math.log(o),s=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*s*(o-s)/o)*(a-o/2<0?-1:1)
ow(t,n,Math.max(e,Math.floor(n-a*s/o+c)),Math.min(r,Math.floor(n+(o-a)*s/o+c)),i)}const o=t[n]
let a=e,u=r
for(aw(t,e,n),i(t[r],o)>0&&aw(t,e,r);a<u;){for(aw(t,a,u),++a,--u;i(t[a],o)<0;)++a
for(;i(t[u],o)>0;)--u}0===i(t[e],o)?aw(t,e,u):(++u,aw(t,u,r)),u<=n&&(e=u+1),n<=u&&(r=u-1)}return t}function aw(t,n,e){const r=t[n]
t[n]=t[e],t[e]=r}function uw(t,n,e){if(t=Float64Array.from(function*(t,n){if(void 0===n)for(let e of t)null!=e&&(e=+e)>=e&&(yield e)
else{let e=-1
for(let r of t)null!=(r=n(r,++e,t))&&(r=+r)>=r&&(yield r)}}(t,e)),r=t.length){if((n=+n)<=0||r<2)return iw(t)
if(n>=1)return rw(t)
var r,i=(r-1)*n,o=Math.floor(i),a=rw(ow(t,o).subarray(0,o+1))
return a+(iw(t.subarray(o+1))-a)*(i-o)}}function sw(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:hx
if(r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t)
if(n>=1)return+e(t[r-1],r-1,t)
var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t),u=+e(t[o+1],o+1,t)
return a+(u-a)*(i-o)}}function cw(){var t,n=[],e=[],r=[]
function i(){var t=0,i=Math.max(1,e.length)
for(r=new Array(i-1);++t<i;)r[t-1]=sw(n,t/i)
return o}function o(n){return null==n||isNaN(n=+n)?t:e[gx(r,n)]}return o.invertExtent=function(t){var i=e.indexOf(t)
return i<0?[NaN,NaN]:[i>0?r[i-1]:n[0],i<r.length?r[i]:n[n.length-1]]},o.domain=function(t){if(!arguments.length)return n.slice()
n=[]
for(let e of t)null==e||isNaN(e=+e)||n.push(e)
return n.sort(lx),i()},o.range=function(t){return arguments.length?(e=Array.from(t),i()):e.slice()},o.unknown=function(n){return arguments.length?(t=n,o):t},o.quantiles=function(){return r.slice()},o.copy=function(){return cw().domain(n).range(e).unknown(t)},Zm.apply(o,arguments)}function lw(){var t,n=0,e=1,r=1,i=[.5],o=[0,1]
function a(n){return null!=n&&n<=n?o[gx(i,n,0,r)]:t}function u(){var t=-1
for(i=new Array(r);++t<r;)i[t]=((t+1)*e-(t-r)*n)/(r+1)
return a}return a.domain=function(t){return arguments.length?([n,e]=t,n=+n,e=+e,u()):[n,e]},a.range=function(t){return arguments.length?(r=(o=Array.from(t)).length-1,u()):o.slice()},a.invertExtent=function(t){var a=o.indexOf(t)
return a<0?[NaN,NaN]:a<1?[n,i[0]]:a>=r?[i[r-1],e]:[i[a-1],i[a]]},a.unknown=function(n){return arguments.length?(t=n,a):a},a.thresholds=function(){return i.slice()},a.copy=function(){return lw().domain([n,e]).range(o).unknown(t)},Zm.apply(Lb(a),arguments)}function fw(){var t,n=[.5],e=[0,1],r=1
function i(i){return null!=i&&i<=i?e[gx(n,i,0,r)]:t}return i.domain=function(t){return arguments.length?(n=Array.from(t),r=Math.min(n.length,e.length-1),i):n.slice()},i.range=function(t){return arguments.length?(e=Array.from(t),r=Math.min(n.length,e.length-1),i):e.slice()},i.invertExtent=function(t){var r=e.indexOf(t)
return[n[r-1],n[r]]},i.unknown=function(n){return arguments.length?(t=n,i):t},i.copy=function(){return fw().domain(n).range(e).unknown(t)},Zm.apply(i,arguments)}Tb=function(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?Mb:(n=Eb.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,u=n[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),o.push(t.substring(i-=u,i+u)),!((s+=u+1)>r));)u=n[a=(a+1)%n.length]
return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?Mb:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(Eb.call(t.numerals,String)),s=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+""
function f(t){var n=(t=mb(t)).fill,e=t.align,f=t.sign,h=t.symbol,d=t.zero,p=t.width,g=t.comma,y=t.precision,_=t.trim,v=t.type
"n"===v?(g=!0,v="g"):Ab[v]||(void 0===y&&(y=12),_=!0,v="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=")
var m="$"===h?i:"#"===h&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",x="$"===h?o:/[%p]/.test(v)?s:"",b=Ab[v],w=/[defgprs%]/.test(v)
function S(t){var i,o,s,h=m,S=x
if("c"===v)S=b(t)+S,t=""
else{var A=(t=+t)<0||1/t<0
if(t=isNaN(t)?l:b(Math.abs(t),y),_&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r
break
case"0":0===i&&(i=r),n=r
break
default:if(!+t[r])break t
i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),A&&0==+t&&"+"!==f&&(A=!1),h=(A?"("===f?f:c:"-"===f||"("===f?"":f)+h,S=("s"===v?kb[8+_b/3]:"")+S+(A&&"("===f?")":""),w)for(i=-1,o=t.length;++i<o;)if(48>(s=t.charCodeAt(i))||s>57){S=(46===s?a+t.slice(i+1):t.slice(i))+S,t=t.slice(0,i)
break}}g&&!d&&(t=r(t,1/0))
var M=h.length+t.length+S.length,T=M<p?new Array(p-M+1).join(n):""
switch(g&&d&&(t=r(T+t,T.length?p-S.length:1/0),T=""),e){case"<":t=h+t+S+T
break
case"=":t=h+T+t+S
break
case"^":t=T.slice(0,M=T.length>>1)+h+t+S+T.slice(M)
break
default:t=T+h+t+S}return u(t)}return y=void 0===y?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y)),S.toString=function(){return t+""},S}return{format:f,formatPrefix:function(t,n){var e=f(((t=mb(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(wb(n)/3))),i=Math.pow(10,-r),o=kb[8+r/3]
return function(t){return e(i*t)+o}}}}({thousands:",",grouping:[3],currency:["$",""]}),Cb=Tb.format,Pb=Tb.formatPrefix
const hw=1e3,dw=6e4,pw=36e5,gw=864e5,yw=6048e5,_w=31536e6
var vw=new Date,mw=new Date
function xw(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t)
return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[]
if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u
do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r)
return u},i.filter=function(e){return xw((function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););}))},e&&(i.count=function(n,r){return vw.setTime(+n),mw.setTime(+r),t(vw),t(mw),Math.floor(e(vw,mw))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var bw=xw((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}))
bw.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?xw((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):bw:null}
const ww=bw
bw.range
var Sw=xw((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*hw)}),(function(t,n){return(n-t)/hw}),(function(t){return t.getUTCSeconds()}))
const Aw=Sw
Sw.range
var Mw=xw((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*hw)}),(function(t,n){t.setTime(+t+n*dw)}),(function(t,n){return(n-t)/dw}),(function(t){return t.getMinutes()}))
const Tw=Mw
Mw.range
var Cw=xw((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*hw-t.getMinutes()*dw)}),(function(t,n){t.setTime(+t+n*pw)}),(function(t,n){return(n-t)/pw}),(function(t){return t.getHours()}))
const Pw=Cw
Cw.range
var Ew=xw((t=>t.setHours(0,0,0,0)),((t,n)=>t.setDate(t.getDate()+n)),((t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*dw)/gw),(t=>t.getDate()-1))
const kw=Ew
function Nw(t){return xw((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*dw)/yw}))}Ew.range
var Lw=Nw(0),Rw=Nw(1),Vw=Nw(2),Ow=Nw(3),Gw=Nw(4),Dw=Nw(5),Iw=Nw(6),zw=(Lw.range,Rw.range,Vw.range,Ow.range,Gw.range,Dw.range,Iw.range,xw((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()})))
const Fw=zw
zw.range
var Yw=xw((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}))
Yw.every=function(t){return isFinite(t=Math.floor(t))&&t>0?xw((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null}
const Uw=Yw
Yw.range
var Bw=xw((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*dw)}),(function(t,n){return(n-t)/dw}),(function(t){return t.getUTCMinutes()}))
const Hw=Bw
Bw.range
var Xw=xw((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*pw)}),(function(t,n){return(n-t)/pw}),(function(t){return t.getUTCHours()}))
const jw=Xw
Xw.range
var qw=xw((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/gw}),(function(t){return t.getUTCDate()-1}))
const Ww=qw
function Qw(t){return xw((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/yw}))}qw.range
var $w=Qw(0),Zw=Qw(1),Kw=Qw(2),Jw=Qw(3),tS=Qw(4),nS=Qw(5),eS=Qw(6),rS=($w.range,Zw.range,Kw.range,Jw.range,tS.range,nS.range,eS.range,xw((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()})))
const iS=rS
rS.range
var oS=xw((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()}))
oS.every=function(t){return isFinite(t=Math.floor(t))&&t>0?xw((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null}
const aS=oS
function uS(t,n,e,r,i,o){const a=[[Aw,1,hw],[Aw,5,5e3],[Aw,15,15e3],[Aw,30,3e4],[o,1,dw],[o,5,3e5],[o,15,9e5],[o,30,18e5],[i,1,pw],[i,3,108e5],[i,6,216e5],[i,12,432e5],[r,1,gw],[r,2,1728e5],[e,1,yw],[n,1,2592e6],[n,3,7776e6],[t,1,_w]]
function u(n,e,r){const i=Math.abs(e-n)/r,o=fx((t=>{let[,,n]=t
return n})).right(a,i)
if(o===a.length)return t.every(cx(n/_w,e/_w,r))
if(0===o)return ww.every(Math.max(cx(n,e,r),1))
const[u,s]=a[i/a[o-1][2]<a[o][2]/i?o-1:o]
return u.every(s)}return[function(t,n,e){const r=n<t
r&&([t,n]=[n,t])
const i=e&&"function"==typeof e.range?e:u(t,n,e),o=i?i.range(t,+n+1):[]
return r?o.reverse():o},u]}oS.range
const[sS,cS]=uS(aS,iS,$w,Ww,jw,Hw),[lS,fS]=uS(Uw,Fw,Lw,kw,Pw,Tw)
function hS(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L)
return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function dS(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L))
return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function pS(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}var gS,yS,_S,vS={"-":"",_:" ",0:"0"},mS=/^\s*\d+/,xS=/^%/,bS=/[\\^$*+?|[\]().{}]/g
function wS(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length
return r+(o<e?new Array(e-o+1).join(n)+i:i)}function SS(t){return t.replace(bS,"\\$&")}function AS(t){return new RegExp("^(?:"+t.map(SS).join("|")+")","i")}function MS(t){return new Map(t.map(((t,n)=>[t.toLowerCase(),n])))}function TS(t,n,e){var r=mS.exec(n.slice(e,e+1))
return r?(t.w=+r[0],e+r[0].length):-1}function CS(t,n,e){var r=mS.exec(n.slice(e,e+1))
return r?(t.u=+r[0],e+r[0].length):-1}function PS(t,n,e){var r=mS.exec(n.slice(e,e+2))
return r?(t.U=+r[0],e+r[0].length):-1}function ES(t,n,e){var r=mS.exec(n.slice(e,e+2))
return r?(t.V=+r[0],e+r[0].length):-1}function kS(t,n,e){var r=mS.exec(n.slice(e,e+2))
return r?(t.W=+r[0],e+r[0].length):-1}function NS(t,n,e){var r=mS.exec(n.slice(e,e+4))
return r?(t.y=+r[0],e+r[0].length):-1}function LS(t,n,e){var r=mS.exec(n.slice(e,e+2))
return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function RS(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6))
return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function VS(t,n,e){var r=mS.exec(n.slice(e,e+1))
return r?(t.q=3*r[0]-3,e+r[0].length):-1}function OS(t,n,e){var r=mS.exec(n.slice(e,e+2))
return r?(t.m=r[0]-1,e+r[0].length):-1}function GS(t,n,e){var r=mS.exec(n.slice(e,e+2))
return r?(t.d=+r[0],e+r[0].length):-1}function DS(t,n,e){var r=mS.exec(n.slice(e,e+3))
return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function IS(t,n,e){var r=mS.exec(n.slice(e,e+2))
return r?(t.H=+r[0],e+r[0].length):-1}function zS(t,n,e){var r=mS.exec(n.slice(e,e+2))
return r?(t.M=+r[0],e+r[0].length):-1}function FS(t,n,e){var r=mS.exec(n.slice(e,e+2))
return r?(t.S=+r[0],e+r[0].length):-1}function YS(t,n,e){var r=mS.exec(n.slice(e,e+3))
return r?(t.L=+r[0],e+r[0].length):-1}function US(t,n,e){var r=mS.exec(n.slice(e,e+6))
return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function BS(t,n,e){var r=xS.exec(n.slice(e,e+1))
return r?e+r[0].length:-1}function HS(t,n,e){var r=mS.exec(n.slice(e))
return r?(t.Q=+r[0],e+r[0].length):-1}function XS(t,n,e){var r=mS.exec(n.slice(e))
return r?(t.s=+r[0],e+r[0].length):-1}function jS(t,n){return wS(t.getDate(),n,2)}function qS(t,n){return wS(t.getHours(),n,2)}function WS(t,n){return wS(t.getHours()%12||12,n,2)}function QS(t,n){return wS(1+kw.count(Uw(t),t),n,3)}function $S(t,n){return wS(t.getMilliseconds(),n,3)}function ZS(t,n){return $S(t,n)+"000"}function KS(t,n){return wS(t.getMonth()+1,n,2)}function JS(t,n){return wS(t.getMinutes(),n,2)}function tA(t,n){return wS(t.getSeconds(),n,2)}function nA(t){var n=t.getDay()
return 0===n?7:n}function eA(t,n){return wS(Lw.count(Uw(t)-1,t),n,2)}function rA(t){var n=t.getDay()
return n>=4||0===n?Gw(t):Gw.ceil(t)}function iA(t,n){return t=rA(t),wS(Gw.count(Uw(t),t)+(4===Uw(t).getDay()),n,2)}function oA(t){return t.getDay()}function aA(t,n){return wS(Rw.count(Uw(t)-1,t),n,2)}function uA(t,n){return wS(t.getFullYear()%100,n,2)}function sA(t,n){return wS((t=rA(t)).getFullYear()%100,n,2)}function cA(t,n){return wS(t.getFullYear()%1e4,n,4)}function lA(t,n){var e=t.getDay()
return wS((t=e>=4||0===e?Gw(t):Gw.ceil(t)).getFullYear()%1e4,n,4)}function fA(t){var n=t.getTimezoneOffset()
return(n>0?"-":(n*=-1,"+"))+wS(n/60|0,"0",2)+wS(n%60,"0",2)}function hA(t,n){return wS(t.getUTCDate(),n,2)}function dA(t,n){return wS(t.getUTCHours(),n,2)}function pA(t,n){return wS(t.getUTCHours()%12||12,n,2)}function gA(t,n){return wS(1+Ww.count(aS(t),t),n,3)}function yA(t,n){return wS(t.getUTCMilliseconds(),n,3)}function _A(t,n){return yA(t,n)+"000"}function vA(t,n){return wS(t.getUTCMonth()+1,n,2)}function mA(t,n){return wS(t.getUTCMinutes(),n,2)}function xA(t,n){return wS(t.getUTCSeconds(),n,2)}function bA(t){var n=t.getUTCDay()
return 0===n?7:n}function wA(t,n){return wS($w.count(aS(t)-1,t),n,2)}function SA(t){var n=t.getUTCDay()
return n>=4||0===n?tS(t):tS.ceil(t)}function AA(t,n){return t=SA(t),wS(tS.count(aS(t),t)+(4===aS(t).getUTCDay()),n,2)}function MA(t){return t.getUTCDay()}function TA(t,n){return wS(Zw.count(aS(t)-1,t),n,2)}function CA(t,n){return wS(t.getUTCFullYear()%100,n,2)}function PA(t,n){return wS((t=SA(t)).getUTCFullYear()%100,n,2)}function EA(t,n){return wS(t.getUTCFullYear()%1e4,n,4)}function kA(t,n){var e=t.getUTCDay()
return wS((t=e>=4||0===e?tS(t):tS.ceil(t)).getUTCFullYear()%1e4,n,4)}function NA(){return"+0000"}function LA(){return"%"}function RA(t){return+t}function VA(t){return Math.floor(+t/1e3)}function OA(t){return new Date(t)}function GA(t){return t instanceof Date?+t:+new Date(+t)}function DA(t,n,e,r,i,o,a,u,s,c){var l=yb(),f=l.invert,h=l.domain,d=c(".%L"),p=c(":%S"),g=c("%I:%M"),y=c("%I %p"),_=c("%a %d"),v=c("%b %d"),m=c("%B"),x=c("%Y")
function b(t){return(s(t)<t?d:u(t)<t?p:a(t)<t?g:o(t)<t?y:r(t)<t?i(t)<t?_:v:e(t)<t?m:x)(t)}return l.invert=function(t){return new Date(f(t))},l.domain=function(t){return arguments.length?h(Array.from(t,GA)):h().map(OA)},l.ticks=function(n){var e=h()
return t(e[0],e[e.length-1],null==n?10:n)},l.tickFormat=function(t,n){return null==n?b:c(n)},l.nice=function(t){var e=h()
return t&&"function"==typeof t.range||(t=n(e[0],e[e.length-1],null==t?10:t)),t?h(Ob(e,t)):l},l.copy=function(){return pb(l,DA(t,n,e,r,i,o,a,u,s,c))},l}function IA(){return Zm.apply(DA(lS,fS,Uw,Fw,Lw,kw,Pw,Tw,Aw,yS).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function zA(){return Zm.apply(DA(sS,cS,aS,iS,$w,Ww,jw,Hw,Aw,_S).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function FA(){var t,n,e,r,i,o=0,a=1,u=lb,s=!1
function c(n){return null==n||isNaN(n=+n)?i:u(0===e?.5:(n=(r(n)-t)*e,s?Math.max(0,Math.min(1,n)):n))}function l(t){return function(n){var e,r
return arguments.length?([e,r]=n,u=t(e,r),c):[u(0),u(1)]}}return c.domain=function(i){return arguments.length?([o,a]=i,t=r(o=+o),n=r(a=+a),e=t===n?0:1/(n-t),c):[o,a]},c.clamp=function(t){return arguments.length?(s=!!t,c):s},c.interpolator=function(t){return arguments.length?(u=t,c):u},c.range=l(ab),c.rangeRound=l(ub),c.unknown=function(t){return arguments.length?(i=t,c):i},function(i){return r=i,t=i(o),n=i(a),e=t===n?0:1/(n-t),c}}function YA(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function UA(){var t=Lb(FA()(lb))
return t.copy=function(){return YA(t,UA())},Km.apply(t,arguments)}function BA(){var t=Ub(FA()).domain([1,10])
return t.copy=function(){return YA(t,BA()).base(t.base())},Km.apply(t,arguments)}function HA(){var t=jb(FA())
return t.copy=function(){return YA(t,HA()).constant(t.constant())},Km.apply(t,arguments)}function XA(){var t=Zb(FA())
return t.copy=function(){return YA(t,XA()).exponent(t.exponent())},Km.apply(t,arguments)}function jA(){return XA.apply(null,arguments).exponent(.5)}function qA(){var t=[],n=lb
function e(e){if(null!=e&&!isNaN(e=+e))return n((gx(t,e,1)-1)/(t.length-1))}return e.domain=function(n){if(!arguments.length)return t.slice()
t=[]
for(let e of n)null==e||isNaN(e=+e)||t.push(e)
return t.sort(lx),e},e.interpolator=function(t){return arguments.length?(n=t,e):n},e.range=function(){return t.map(((e,r)=>n(r/(t.length-1))))},e.quantiles=function(n){return Array.from({length:n+1},((e,r)=>uw(t,r/n)))},e.copy=function(){return qA(n).domain(t)},Km.apply(e,arguments)}function WA(t,n){void 0===n&&(n=t,t=ab)
for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e])
return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)))
return o[n](t-n)}}function QA(){var t,n,e,r,i,o,a,u=0,s=.5,c=1,l=1,f=lb,h=!1
function d(t){return isNaN(t=+t)?a:(t=.5+((t=+o(t))-n)*(l*t<l*n?r:i),f(h?Math.max(0,Math.min(1,t)):t))}function p(t){return function(n){var e,r,i
return arguments.length?([e,r,i]=n,f=WA(t,[e,r,i]),d):[f(0),f(.5),f(1)]}}return d.domain=function(a){return arguments.length?([u,s,c]=a,t=o(u=+u),n=o(s=+s),e=o(c=+c),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),l=n<t?-1:1,d):[u,s,c]},d.clamp=function(t){return arguments.length?(h=!!t,d):h},d.interpolator=function(t){return arguments.length?(f=t,d):f},d.range=p(ab),d.rangeRound=p(ub),d.unknown=function(t){return arguments.length?(a=t,d):a},function(a){return o=a,t=a(u),n=a(s),e=a(c),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),l=n<t?-1:1,d}}function $A(){var t=Lb(QA()(lb))
return t.copy=function(){return YA(t,$A())},Km.apply(t,arguments)}function ZA(){var t=Ub(QA()).domain([.1,1,10])
return t.copy=function(){return YA(t,ZA()).base(t.base())},Km.apply(t,arguments)}function KA(){var t=jb(QA())
return t.copy=function(){return YA(t,KA()).constant(t.constant())},Km.apply(t,arguments)}function JA(){var t=Zb(QA())
return t.copy=function(){return YA(t,JA()).exponent(t.exponent())},Km.apply(t,arguments)}function tM(){return JA.apply(null,arguments).exponent(.5)}function nM(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r)
return e}gS=function(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,s=t.shortMonths,c=AS(i),l=MS(i),f=AS(o),h=MS(o),d=AS(a),p=MS(a),g=AS(u),y=MS(u),_=AS(s),v=MS(s),m={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return s[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:jS,e:jS,f:ZS,g:sA,G:lA,H:qS,I:WS,j:QS,L:$S,m:KS,M:JS,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:RA,s:VA,S:tA,u:nA,U:eA,V:iA,w:oA,W:aA,x:null,X:null,y:uA,Y:cA,Z:fA,"%":LA},x={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return s[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:hA,e:hA,f:_A,g:PA,G:kA,H:dA,I:pA,j:gA,L:yA,m:vA,M:mA,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:RA,s:VA,S:xA,u:bA,U:wA,V:AA,w:MA,W:TA,x:null,X:null,y:CA,Y:EA,Z:NA,"%":LA},b={a:function(t,n,e){var r=d.exec(n.slice(e))
return r?(t.w=p.get(r[0].toLowerCase()),e+r[0].length):-1},A:function(t,n,e){var r=f.exec(n.slice(e))
return r?(t.w=h.get(r[0].toLowerCase()),e+r[0].length):-1},b:function(t,n,e){var r=_.exec(n.slice(e))
return r?(t.m=v.get(r[0].toLowerCase()),e+r[0].length):-1},B:function(t,n,e){var r=g.exec(n.slice(e))
return r?(t.m=y.get(r[0].toLowerCase()),e+r[0].length):-1},c:function(t,e,r){return A(t,n,e,r)},d:GS,e:GS,f:US,g:LS,G:NS,H:IS,I:IS,j:DS,L:YS,m:OS,M:zS,p:function(t,n,e){var r=c.exec(n.slice(e))
return r?(t.p=l.get(r[0].toLowerCase()),e+r[0].length):-1},q:VS,Q:HS,s:XS,S:FS,u:CS,U:PS,V:ES,w:TS,W:kS,x:function(t,n,r){return A(t,e,n,r)},X:function(t,n,e){return A(t,r,n,e)},y:LS,Y:NS,Z:RS,"%":BS}
function w(t,n){return function(e){var r,i,o,a=[],u=-1,s=0,c=t.length
for(e instanceof Date||(e=new Date(+e));++u<c;)37===t.charCodeAt(u)&&(a.push(t.slice(s,u)),null!=(i=vS[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),s=u+1)
return a.push(t.slice(s,u)),a.join("")}}function S(t,n){return function(e){var r,i,o=pS(1900,void 0,1)
if(A(o,t,e+="",0)!=e.length)return null
if("Q"in o)return new Date(o.Q)
if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0))
if(n&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null
"w"in o||(o.w=1),"Z"in o?(i=(r=dS(pS(o.y,0,1))).getUTCDay(),r=i>4||0===i?Zw.ceil(r):Zw(r),r=Ww.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=hS(pS(o.y,0,1))).getDay(),r=i>4||0===i?Rw.ceil(r):Rw(r),r=kw.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?dS(pS(o.y,0,1)).getUTCDay():hS(pS(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7)
return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,dS(o)):hS(o)}}function A(t,n,e,r){for(var i,o,a=0,u=n.length,s=e.length;a<u;){if(r>=s)return-1
if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=b[i in vS?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),x.x=w(e,x),x.X=w(r,x),x.c=w(n,x),{format:function(t){var n=w(t+="",m)
return n.toString=function(){return t},n},parse:function(t){var n=S(t+="",!1)
return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",x)
return n.toString=function(){return t},n},utcParse:function(t){var n=S(t+="",!0)
return n.toString=function(){return t},n}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),yS=gS.format,gS.parse,_S=gS.utcFormat,gS.utcParse
const eM=nM("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),rM=nM("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),iM=nM("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),oM=nM("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),aM=nM("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),uM=nM("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),sM=nM("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),cM=nM("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),lM=nM("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),fM=nM("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab")
function hM(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function dM(t,n){var e=Object.create(t.prototype)
for(var r in n)e[r]=n[r]
return e}function pM(){}var gM=.7,yM=1.4285714285714286,_M="\\s*([+-]?\\d+)\\s*",vM="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",mM="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",xM=/^#([0-9a-f]{3,8})$/,bM=new RegExp("^rgb\\("+[_M,_M,_M]+"\\)$"),wM=new RegExp("^rgb\\("+[mM,mM,mM]+"\\)$"),SM=new RegExp("^rgba\\("+[_M,_M,_M,vM]+"\\)$"),AM=new RegExp("^rgba\\("+[mM,mM,mM,vM]+"\\)$"),MM=new RegExp("^hsl\\("+[vM,mM,mM]+"\\)$"),TM=new RegExp("^hsla\\("+[vM,mM,mM,vM]+"\\)$"),CM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function PM(){return this.rgb().formatHex()}function EM(){return this.rgb().formatRgb()}function kM(t){var n,e
return t=(t+"").trim().toLowerCase(),(n=xM.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?NM(n):3===e?new OM(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?LM(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?LM(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=bM.exec(t))?new OM(n[1],n[2],n[3],1):(n=wM.exec(t))?new OM(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=SM.exec(t))?LM(n[1],n[2],n[3],n[4]):(n=AM.exec(t))?LM(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=MM.exec(t))?zM(n[1],n[2]/100,n[3]/100,1):(n=TM.exec(t))?zM(n[1],n[2]/100,n[3]/100,n[4]):CM.hasOwnProperty(t)?NM(CM[t]):"transparent"===t?new OM(NaN,NaN,NaN,0):null}function NM(t){return new OM(t>>16&255,t>>8&255,255&t,1)}function LM(t,n,e,r){return r<=0&&(t=n=e=NaN),new OM(t,n,e,r)}function RM(t){return t instanceof pM||(t=kM(t)),t?new OM((t=t.rgb()).r,t.g,t.b,t.opacity):new OM}function VM(t,n,e,r){return 1===arguments.length?RM(t):new OM(t,n,e,null==r?1:r)}function OM(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function GM(){return"#"+IM(this.r)+IM(this.g)+IM(this.b)}function DM(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function IM(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function zM(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new YM(t,n,e,r)}function FM(t){if(t instanceof YM)return new YM(t.h,t.s,t.l,t.opacity)
if(t instanceof pM||(t=kM(t)),!t)return new YM
if(t instanceof YM)return t
var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2
return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new YM(a,u,s,t.opacity)}function YM(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function UM(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function BM(t,n,e,r,i){var o=t*t,a=o*t
return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}hM(pM,kM,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:PM,formatHex:PM,formatHsl:function(){return FM(this).formatHsl()},formatRgb:EM,toString:EM}),hM(OM,VM,dM(pM,{brighter:function(t){return t=null==t?yM:Math.pow(yM,t),new OM(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?gM:Math.pow(gM,t),new OM(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:GM,formatHex:GM,formatRgb:DM,toString:DM})),hM(YM,(function(t,n,e,r){return 1===arguments.length?FM(t):new YM(t,n,e,null==r?1:r)}),dM(pM,{brighter:function(t){return t=null==t?yM:Math.pow(yM,t),new YM(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?gM:Math.pow(gM,t),new YM(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r
return new OM(UM(t>=240?t-240:t+120,i,r),UM(t,i,r),UM(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))
const HM=t=>()=>t
function XM(t,n){return function(e){return t+e*n}}function jM(t,n){var e=n-t
return e?XM(t,e):HM(isNaN(t)?n:t)}function qM(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i)
for(e=0;e<i;++e)r=VM(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0
return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}!function t(n){var e=function(t){return 1==(t=+t)?jM:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):HM(isNaN(n)?e:n)}}(n)
function r(t,n){var r=e((t=VM(t)).r,(n=VM(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=jM(t.opacity,n.opacity)
return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1)
var WM=qM((function(t){var n=t.length-1
return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i
return BM((e-r/n)*n,a,i,o,u)}}))
qM((function(t){var n=t.length
return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n]
return BM((e-r/n)*n,i,o,a,u)}}))
const QM=t=>WM(t[t.length-1])
var $M=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(nM)
const ZM=QM($M)
var KM=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(nM)
const JM=QM(KM)
var tT=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(nM)
const nT=QM(tT)
var eT=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(nM)
const rT=QM(eT)
var iT=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(nM)
const oT=QM(iT)
var aT=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(nM)
const uT=QM(aT)
var sT=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(nM)
const cT=QM(sT)
var lT=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(nM)
const fT=QM(lT)
var hT=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(nM)
const dT=QM(hT)
var pT=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(nM)
const gT=QM(pT)
var yT=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(nM)
const _T=QM(yT)
var vT=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(nM)
const mT=QM(vT)
var xT=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(nM)
const bT=QM(xT)
var wT=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(nM)
const ST=QM(wT)
var AT=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(nM)
const MT=QM(AT)
var TT=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(nM)
const CT=QM(TT)
var PT=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(nM)
const ET=QM(PT)
var kT=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(nM)
const NT=QM(kT)
var LT=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(nM)
const RT=QM(LT)
var VT=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(nM)
const OT=QM(VT)
var GT=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(nM)
const DT=QM(GT)
var IT=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(nM)
const zT=QM(IT)
var FT=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(nM)
const YT=QM(FT)
var UT=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(nM)
const BT=QM(UT)
var HT=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(nM)
const XT=QM(HT)
var jT=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(nM)
const qT=QM(jT)
var WT=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(nM)
const QT=QM(WT)
function $T(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-t*(35.34-t*(2381.73-t*(6402.7-t*(7024.72-2710.57*t)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+t*(170.73+t*(52.82-t*(131.46-t*(176.58-67.37*t)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+t*(442.36-t*(2482.43-t*(6167.24-t*(6614.94-2475.67*t)))))))+")"}const ZT=Math.PI/180,KT=180/Math.PI
var JT=-.29227,tC=-.90649,nC=1.97294
function eC(t){if(t instanceof iC)return new iC(t.h,t.s,t.l,t.opacity)
t instanceof OM||(t=RM(t))
var n=t.r/255,e=t.g/255,r=t.b/255,i=(-.6557636667999999*r+-1.7884503806*n-3.5172982438*e)/-5.9615122912,o=r-i,a=(nC*(e-i)-JT*o)/tC,u=Math.sqrt(a*a+o*o)/(nC*i*(1-i)),s=u?Math.atan2(a,o)*KT-120:NaN
return new iC(s<0?s+360:s,u,i,t.opacity)}function rC(t,n,e,r){return 1===arguments.length?eC(t):new iC(t,n,e,null==r?1:r)}function iC(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function oC(t){return function n(e){function r(n,r){var i=t((n=rC(n)).h,(r=rC(r)).h),o=jM(n.s,r.s),a=jM(n.l,r.l),u=jM(n.opacity,r.opacity)
return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}hM(iC,rC,dM(pM,{brighter:function(t){return t=null==t?yM:Math.pow(yM,t),new iC(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?gM:Math.pow(gM,t),new iC(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*ZT,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t)
return new OM(255*(n+e*(-.14861*r+1.78277*i)),255*(n+e*(JT*r+tC*i)),255*(n+e*(nC*r)),this.opacity)}})),oC((function(t,n){var e=n-t
return e?XM(t,e>180||e<-180?e-360*Math.round(e/360):e):HM(isNaN(t)?n:t)}))
var aC=oC(jM)
const uC=aC(rC(300,.5,0),rC(-240,.5,1))
var sC=aC(rC(-100,.75,.35),rC(80,1.5,.8)),cC=aC(rC(260,.75,.35),rC(80,1.5,.8)),lC=rC()
function fC(t){(t<0||t>1)&&(t-=Math.floor(t))
var n=Math.abs(t-.5)
return lC.h=360*t-100,lC.s=1.5-1.5*n,lC.l=.8-.9*n,lC+""}var hC=VM(),dC=Math.PI/3,pC=2*Math.PI/3
function gC(t){var n
return t=(.5-t)*Math.PI,hC.r=255*(n=Math.sin(t))*n,hC.g=255*(n=Math.sin(t+dC))*n,hC.b=255*(n=Math.sin(t+pC))*n,hC+""}function yC(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+t*(1172.33-t*(10793.56-t*(33300.12-t*(38394.49-14825.05*t)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+t*(557.33+t*(1225.33-t*(3574.96-t*(1073.77+707.56*t)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+t*(3211.1-t*(15327.97-t*(27814-t*(22569.18-6838.66*t)))))))+")"}function _C(t){var n=t.length
return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}const vC=_C(nM("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"))
var mC=_C(nM("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),xC=_C(nM("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),bC=_C(nM("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
function wC(t){return ac(Xs(t).call(document.documentElement))}var SC=0
function AC(){return new MC}function MC(){this._="@"+(++SC).toString(36)}function TC(t,n){return t.target&&(t=uc(t),void 0===n&&(n=t.currentTarget),t=t.touches||[t]),Array.from(t,(t=>sc(t,n)))}function CC(t){return"string"==typeof t?new rc([document.querySelectorAll(t)],[document.documentElement]):new rc([null==t?[]:Wu(t)],ec)}MC.prototype=AC.prototype={constructor:MC,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return
return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}}
const PC=Math.PI,EC=2*PC,kC=1e-6,NC=EC-kC
function LC(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function RC(){return new LC}LC.prototype=RC.prototype={constructor:LC,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i
var o=this._x1,a=this._y1,u=e-t,s=r-n,c=o-t,l=a-n,f=c*c+l*l
if(i<0)throw new Error("negative radius: "+i)
if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n)
else if(f>kC)if(Math.abs(l*u-s*c)>kC&&i){var h=e-o,d=r-a,p=u*u+s*s,g=h*h+d*d,y=Math.sqrt(p),_=Math.sqrt(f),v=i*Math.tan((PC-Math.acos((p+f-g)/(2*y*_)))/2),m=v/_,x=v/y
Math.abs(m-1)>kC&&(this._+="L"+(t+m*c)+","+(n+m*l)),this._+="A"+i+","+i+",0,0,"+ +(l*h>c*d)+","+(this._x1=t+x*u)+","+(this._y1=n+x*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,e,r,i,o){t=+t,n=+n,o=!!o
var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),s=t+a,c=n+u,l=1^o,f=o?r-i:i-r
if(e<0)throw new Error("negative radius: "+e)
null===this._x1?this._+="M"+s+","+c:(Math.abs(this._x1-s)>kC||Math.abs(this._y1-c)>kC)&&(this._+="L"+s+","+c),e&&(f<0&&(f=f%EC+EC),f>NC?this._+="A"+e+","+e+",0,1,"+l+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+l+","+(this._x1=s)+","+(this._y1=c):f>kC&&(this._+="A"+e+","+e+",0,"+ +(f>=PC)+","+l+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}}
const VC=RC
function OC(t){return function(){return t}}var GC=Math.abs,DC=Math.atan2,IC=Math.cos,zC=Math.max,FC=Math.min,YC=Math.sin,UC=Math.sqrt,BC=1e-12,HC=Math.PI,XC=HC/2,jC=2*HC
function qC(t){return t>1?0:t<-1?HC:Math.acos(t)}function WC(t){return t>=1?XC:t<=-1?-XC:Math.asin(t)}function QC(t){return t.innerRadius}function $C(t){return t.outerRadius}function ZC(t){return t.startAngle}function KC(t){return t.endAngle}function JC(t){return t&&t.padAngle}function tP(t,n,e,r,i,o,a,u){var s=e-t,c=r-n,l=a-i,f=u-o,h=f*s-l*c
if(!(h*h<BC))return[t+(h=(l*(n-o)-f*(t-i))/h)*s,n+h*c]}function nP(t,n,e,r,i,o,a){var u=t-e,s=n-r,c=(a?o:-o)/UC(u*u+s*s),l=c*s,f=-c*u,h=t+l,d=n+f,p=e+l,g=r+f,y=(h+p)/2,_=(d+g)/2,v=p-h,m=g-d,x=v*v+m*m,b=i-o,w=h*g-p*d,S=(m<0?-1:1)*UC(zC(0,b*b*x-w*w)),A=(w*m-v*S)/x,M=(-w*v-m*S)/x,T=(w*m+v*S)/x,C=(-w*v+m*S)/x,P=A-y,E=M-_,k=T-y,N=C-_
return P*P+E*E>k*k+N*N&&(A=T,M=C),{cx:A,cy:M,x01:-l,y01:-f,x11:A*(i/b-1),y11:M*(i/b-1)}}function eP(){var t=QC,n=$C,e=OC(0),r=null,i=ZC,o=KC,a=JC,u=null
function s(){var s,c,l=+t.apply(this,arguments),f=+n.apply(this,arguments),h=i.apply(this,arguments)-XC,d=o.apply(this,arguments)-XC,p=GC(d-h),g=d>h
if(u||(u=s=VC()),f<l&&(c=f,f=l,l=c),f>BC)if(p>jC-BC)u.moveTo(f*IC(h),f*YC(h)),u.arc(0,0,f,h,d,!g),l>BC&&(u.moveTo(l*IC(d),l*YC(d)),u.arc(0,0,l,d,h,g))
else{var y,_,v=h,m=d,x=h,b=d,w=p,S=p,A=a.apply(this,arguments)/2,M=A>BC&&(r?+r.apply(this,arguments):UC(l*l+f*f)),T=FC(GC(f-l)/2,+e.apply(this,arguments)),C=T,P=T
if(M>BC){var E=WC(M/l*YC(A)),k=WC(M/f*YC(A));(w-=2*E)>BC?(x+=E*=g?1:-1,b-=E):(w=0,x=b=(h+d)/2),(S-=2*k)>BC?(v+=k*=g?1:-1,m-=k):(S=0,v=m=(h+d)/2)}var N=f*IC(v),L=f*YC(v),R=l*IC(b),V=l*YC(b)
if(T>BC){var O,G=f*IC(m),D=f*YC(m),I=l*IC(x),z=l*YC(x)
if(p<HC&&(O=tP(N,L,I,z,G,D,R,V))){var F=N-O[0],Y=L-O[1],U=G-O[0],B=D-O[1],H=1/YC(qC((F*U+Y*B)/(UC(F*F+Y*Y)*UC(U*U+B*B)))/2),X=UC(O[0]*O[0]+O[1]*O[1])
C=FC(T,(l-X)/(H-1)),P=FC(T,(f-X)/(H+1))}}S>BC?P>BC?(y=nP(I,z,N,L,f,P,g),_=nP(G,D,R,V,f,P,g),u.moveTo(y.cx+y.x01,y.cy+y.y01),P<T?u.arc(y.cx,y.cy,P,DC(y.y01,y.x01),DC(_.y01,_.x01),!g):(u.arc(y.cx,y.cy,P,DC(y.y01,y.x01),DC(y.y11,y.x11),!g),u.arc(0,0,f,DC(y.cy+y.y11,y.cx+y.x11),DC(_.cy+_.y11,_.cx+_.x11),!g),u.arc(_.cx,_.cy,P,DC(_.y11,_.x11),DC(_.y01,_.x01),!g))):(u.moveTo(N,L),u.arc(0,0,f,v,m,!g)):u.moveTo(N,L),l>BC&&w>BC?C>BC?(y=nP(R,V,G,D,l,-C,g),_=nP(N,L,I,z,l,-C,g),u.lineTo(y.cx+y.x01,y.cy+y.y01),C<T?u.arc(y.cx,y.cy,C,DC(y.y01,y.x01),DC(_.y01,_.x01),!g):(u.arc(y.cx,y.cy,C,DC(y.y01,y.x01),DC(y.y11,y.x11),!g),u.arc(0,0,l,DC(y.cy+y.y11,y.cx+y.x11),DC(_.cy+_.y11,_.cx+_.x11),g),u.arc(_.cx,_.cy,C,DC(_.y11,_.x11),DC(_.y01,_.x01),!g))):u.arc(0,0,l,b,x,g):u.lineTo(R,V)}else u.moveTo(0,0)
if(u.closePath(),s)return u=null,s+""||null}return s.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-HC/2
return[IC(r)*e,YC(r)*e]},s.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:OC(+n),s):t},s.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:OC(+t),s):n},s.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:OC(+t),s):e},s.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:OC(+t),s):r},s.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:OC(+t),s):i},s.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:OC(+t),s):o},s.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:OC(+t),s):a},s.context=function(t){return arguments.length?(u=null==t?null:t,s):u},s}var rP=Array.prototype.slice
function iP(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function oP(t){this._context=t}function aP(t){return new oP(t)}function uP(t){return t[0]}function sP(t){return t[1]}function cP(t,n){var e=OC(!0),r=null,i=aP,o=null
function a(a){var u,s,c,l=(a=iP(a)).length,f=!1
for(null==r&&(o=i(c=VC())),u=0;u<=l;++u)!(u<l&&e(s=a[u],u,a))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+t(s,u,a),+n(s,u,a))
if(c)return o=null,c+""||null}return t="function"==typeof t?t:void 0===t?uP:OC(t),n="function"==typeof n?n:void 0===n?sP:OC(n),a.x=function(n){return arguments.length?(t="function"==typeof n?n:OC(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:OC(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:OC(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}function lP(t,n,e){var r=null,i=OC(!0),o=null,a=aP,u=null
function s(s){var c,l,f,h,d,p=(s=iP(s)).length,g=!1,y=new Array(p),_=new Array(p)
for(null==o&&(u=a(d=VC())),c=0;c<=p;++c){if(!(c<p&&i(h=s[c],c,s))===g)if(g=!g)l=c,u.areaStart(),u.lineStart()
else{for(u.lineEnd(),u.lineStart(),f=c-1;f>=l;--f)u.point(y[f],_[f])
u.lineEnd(),u.areaEnd()}g&&(y[c]=+t(h,c,s),_[c]=+n(h,c,s),u.point(r?+r(h,c,s):y[c],e?+e(h,c,s):_[c]))}if(d)return u=null,d+""||null}function c(){return cP().defined(i).curve(a).context(o)}return t="function"==typeof t?t:void 0===t?uP:OC(+t),n="function"==typeof n?n:OC(void 0===n?0:+n),e="function"==typeof e?e:void 0===e?sP:OC(+e),s.x=function(n){return arguments.length?(t="function"==typeof n?n:OC(+n),r=null,s):t},s.x0=function(n){return arguments.length?(t="function"==typeof n?n:OC(+n),s):t},s.x1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:OC(+t),s):r},s.y=function(t){return arguments.length?(n="function"==typeof t?t:OC(+t),e=null,s):n},s.y0=function(t){return arguments.length?(n="function"==typeof t?t:OC(+t),s):n},s.y1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:OC(+t),s):e},s.lineX0=s.lineY0=function(){return c().x(t).y(n)},s.lineY1=function(){return c().x(t).y(e)},s.lineX1=function(){return c().x(r).y(n)},s.defined=function(t){return arguments.length?(i="function"==typeof t?t:OC(!!t),s):i},s.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),s):a},s.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),s):o},s}function fP(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function hP(t){return t}function dP(){var t=hP,n=fP,e=null,r=OC(0),i=OC(jC),o=OC(0)
function a(a){var u,s,c,l,f,h=(a=iP(a)).length,d=0,p=new Array(h),g=new Array(h),y=+r.apply(this,arguments),_=Math.min(jC,Math.max(-jC,i.apply(this,arguments)-y)),v=Math.min(Math.abs(_)/h,o.apply(this,arguments)),m=v*(_<0?-1:1)
for(u=0;u<h;++u)(f=g[p[u]=u]=+t(a[u],u,a))>0&&(d+=f)
for(null!=n?p.sort((function(t,e){return n(g[t],g[e])})):null!=e&&p.sort((function(t,n){return e(a[t],a[n])})),u=0,c=d?(_-h*m)/d:0;u<h;++u,y=l)s=p[u],l=y+((f=g[s])>0?f*c:0)+m,g[s]={data:a[s],index:u,value:f,startAngle:y,endAngle:l,padAngle:v}
return g}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:OC(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,e=null,a):n},a.sort=function(t){return arguments.length?(e=t,n=null,a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:OC(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:OC(+t),a):i},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:OC(+t),a):o},a}oP.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:this._context.lineTo(t,n)}}}
var pP=yP(aP)
function gP(t){this._curve=t}function yP(t){function n(n){return new gP(t(n))}return n._curve=t,n}function _P(t){var n=t.curve
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(yP(t)):n()._curve},t}function vP(){return _P(cP().curve(pP))}function mP(){var t=lP().curve(pP),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1
return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return _P(e())},delete t.lineX0,t.lineEndAngle=function(){return _P(r())},delete t.lineX1,t.lineInnerRadius=function(){return _P(i())},delete t.lineY0,t.lineOuterRadius=function(){return _P(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(yP(t)):n()._curve},t}function xP(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}function bP(t){return t.source}function wP(t){return t.target}function SP(t){var n=bP,e=wP,r=uP,i=sP,o=null
function a(){var a,u=rP.call(arguments),s=n.apply(this,u),c=e.apply(this,u)
if(o||(o=a=VC()),t(o,+r.apply(this,(u[0]=s,u)),+i.apply(this,u),+r.apply(this,(u[0]=c,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:OC(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:OC(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function AP(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function MP(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function TP(t,n,e,r,i){var o=xP(n,e),a=xP(n,e=(e+i)/2),u=xP(r,e),s=xP(r,i)
t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],s[0],s[1])}function CP(){return SP(AP)}function PP(){return SP(MP)}function EP(){var t=SP(TP)
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}gP.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}
const kP={draw:function(t,n){var e=Math.sqrt(n/HC)
t.moveTo(e,0),t.arc(0,0,e,0,jC)}},NP={draw:function(t,n){var e=Math.sqrt(n/5)/2
t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}}
var LP=Math.sqrt(1/3),RP=2*LP
const VP={draw:function(t,n){var e=Math.sqrt(n/RP),r=e*LP
t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}}
var OP=Math.sin(HC/10)/Math.sin(7*HC/10),GP=Math.sin(jC/10)*OP,DP=-Math.cos(jC/10)*OP
const IP={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=GP*e,i=DP*e
t.moveTo(0,-e),t.lineTo(r,i)
for(var o=1;o<5;++o){var a=jC*o/5,u=Math.cos(a),s=Math.sin(a)
t.lineTo(s*e,-u*e),t.lineTo(u*r-s*i,s*r+u*i)}t.closePath()}},zP={draw:function(t,n){var e=Math.sqrt(n),r=-e/2
t.rect(r,r,e,e)}}
var FP=Math.sqrt(3)
const YP={draw:function(t,n){var e=-Math.sqrt(n/(3*FP))
t.moveTo(0,2*e),t.lineTo(-FP*e,-e),t.lineTo(FP*e,-e),t.closePath()}}
var UP=-.5,BP=Math.sqrt(3)/2,HP=1/Math.sqrt(12),XP=3*(HP/2+1)
const jP={draw:function(t,n){var e=Math.sqrt(n/XP),r=e/2,i=e*HP,o=r,a=e*HP+e,u=-o,s=a
t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,s),t.lineTo(UP*r-BP*i,BP*r+UP*i),t.lineTo(UP*o-BP*a,BP*o+UP*a),t.lineTo(UP*u-BP*s,BP*u+UP*s),t.lineTo(UP*r+BP*i,UP*i-BP*r),t.lineTo(UP*o+BP*a,UP*a-BP*o),t.lineTo(UP*u+BP*s,UP*s-BP*u),t.closePath()}}
var qP=[kP,NP,VP,zP,IP,YP,jP]
function WP(t,n){var e=null
function r(){var r
if(e||(e=r=VC()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return t="function"==typeof t?t:OC(t||kP),n="function"==typeof n?n:OC(void 0===n?64:+n),r.type=function(n){return arguments.length?(t="function"==typeof n?n:OC(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:OC(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r}function QP(){}function $P(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function ZP(t){this._context=t}function KP(t){return new ZP(t)}function JP(t){this._context=t}function tE(t){return new JP(t)}function nE(t){this._context=t}function eE(t){return new nE(t)}ZP.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:$P(this,this._x1,this._y1)
case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6)
default:$P(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},JP.prototype={areaStart:QP,areaEnd:QP,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath()
break
case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath()
break
case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n
break
case 1:this._point=2,this._x3=t,this._y3=n
break
case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6)
break
default:$P(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},nE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3
var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6
this._line?this._context.lineTo(e,r):this._context.moveTo(e,r)
break
case 3:this._point=4
default:$P(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}
class rE{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n)}this._x0=t,this._y0=n}}function iE(t){return new rE(t,!0)}function oE(t){return new rE(t,!1)}function aE(t,n){this._basis=new ZP(t),this._beta=n}aE.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1
if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,s=-1;++s<=e;)r=s/e,this._basis.point(this._beta*t[s]+(1-this._beta)*(i+r*a),this._beta*n[s]+(1-this._beta)*(o+r*u))
this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}}
const uE=function t(n){function e(t){return 1===n?new ZP(t):new aE(t,n)}return e.beta=function(n){return t(+n)},e}(.85)
function sE(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function cE(t,n){this._context=t,this._k=(1-n)/6}cE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:sE(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2,this._x1=t,this._y1=n
break
case 2:this._point=3
default:sE(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const lE=function t(n){function e(t){return new cE(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function fE(t,n){this._context=t,this._k=(1-n)/6}fE.prototype={areaStart:QP,areaEnd:QP,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:sE(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const hE=function t(n){function e(t){return new fE(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function dE(t,n){this._context=t,this._k=(1-n)/6}dE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:sE(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const pE=function t(n){function e(t){return new dE(t,n)}return e.tension=function(n){return t(+n)},e}(0)
function gE(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2
if(t._l01_a>BC){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,s=3*t._l01_a*(t._l01_a+t._l12_a)
r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/s,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/s}if(t._l23_a>BC){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,l=3*t._l23_a*(t._l23_a+t._l12_a)
o=(o*c+t._x1*t._l23_2a-n*t._l12_2a)/l,a=(a*c+t._y1*t._l23_2a-e*t._l12_2a)/l}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function yE(t,n){this._context=t,this._alpha=n}yE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3
default:gE(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const _E=function t(n){function e(t){return n?new yE(t,n):new cE(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function vE(t,n){this._context=t,this._alpha=n}vE.prototype={areaStart:QP,areaEnd:QP,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:gE(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const mE=function t(n){function e(t){return n?new vE(t,n):new fE(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function xE(t,n){this._context=t,this._alpha=n}xE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:gE(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
const bE=function t(n){function e(t){return n?new xE(t,n):new dE(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)
function wE(t){this._context=t}function SE(t){return new wE(t)}function AE(t){return t<0?-1:1}function ME(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i)
return(AE(o)+AE(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function TE(t,n){var e=t._x1-t._x0
return e?(3*(t._y1-t._y0)/e-n)/2:n}function CE(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3
t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function PE(t){this._context=t}function EE(t){this._context=new kE(t)}function kE(t){this._context=t}function NE(t){return new PE(t)}function LE(t){return new EE(t)}function RE(t){this._context=t}function VE(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r)
for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1]
for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1]
for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n]
for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1]
return[i,o]}function OE(t){return new RE(t)}function GE(t,n){this._context=t,this._t=n}function DE(t){return new GE(t,.5)}function IE(t){return new GE(t,0)}function zE(t){return new GE(t,1)}function FE(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function YE(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n
return e}function UE(t,n){return t[n]}function BE(t){const n=[]
return n.key=t,n}function HE(){var t=OC([]),n=YE,e=FE,r=UE
function i(i){var o,a,u=Array.from(t.apply(this,arguments),BE),s=u.length,c=-1
for(const t of i)for(o=0,++c;o<s;++o)(u[o][c]=[0,+r(t,u[o].key,c,i)]).data=t
for(o=0,a=iP(n(u));o<s;++o)u[a[o]].index=o
return e(u,a),u}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:OC(Array.from(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:OC(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?YE:"function"==typeof t?t:OC(Array.from(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?FE:t,i):e},i}function XE(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0
if(i)for(e=0;e<r;++e)t[e][o][1]/=i}FE(t,n)}}function jE(t,n){if((u=t.length)>0)for(var e,r,i,o,a,u,s=0,c=t[n[0]].length;s<c;++s)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][s])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):(r[0]=0,r[1]=i)}function qE(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0
i[r][1]+=i[r][0]=-u/2}FE(t,n)}}function WE(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,s=0,c=0;u<i;++u){for(var l=t[n[u]],f=l[a][1]||0,h=(f-(l[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]]
h+=(p[a][1]||0)-(p[a-1][1]||0)}s+=f,c+=h*f}e[a-1][1]+=e[a-1][0]=o,s&&(o-=c/s)}e[a-1][1]+=e[a-1][0]=o,FE(t,n)}}function QE(t){var n=t.map($E)
return YE(t).sort((function(t,e){return n[t]-n[e]}))}function $E(t){for(var n,e=-1,r=0,i=t.length,o=-1/0;++e<i;)(n=+t[e][1])>o&&(o=n,r=e)
return r}function ZE(t){var n=t.map(KE)
return YE(t).sort((function(t,e){return n[t]-n[e]}))}function KE(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n)
return e}function JE(t){return ZE(t).reverse()}function tk(t){var n,e,r=t.length,i=t.map(KE),o=QE(t),a=0,u=0,s=[],c=[]
for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],s.push(e)):(u+=i[e],c.push(e))
return c.reverse().concat(s)}function nk(t){return YE(t).reverse()}wE.prototype={areaStart:QP,areaEnd:QP,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},PE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1)
break
case 3:CE(this,this._t0,TE(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN
if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,CE(this,TE(this,e=ME(this,t,n)),e)
break
default:CE(this,this._t0,e=ME(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(EE.prototype=Object.create(PE.prototype)).point=function(t,n){PE.prototype.point.call(this,n,t)},kE.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},RE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length
if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1])
else for(var r=VE(t),i=VE(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},GE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n)
else{var e=this._x*(1-this._t)+t*this._t
this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}}
var ek=new Date,rk=new Date
function ik(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t)
return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[]
if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u
do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r)
return u},i.filter=function(e){return ik((function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););}))},e&&(i.count=function(n,r){return ek.setTime(+n),rk.setTime(+r),t(ek),t(rk),Math.floor(e(ek,rk))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var ok=ik((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}))
ok.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?ik((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):ok:null}
const ak=ok
var uk=ok.range
const sk=1e3,ck=6e4,lk=36e5,fk=864e5,hk=6048e5,dk=31536e6
var pk=ik((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*sk)}),(function(t,n){return(n-t)/sk}),(function(t){return t.getUTCSeconds()}))
const gk=pk
var yk=pk.range,_k=ik((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*sk)}),(function(t,n){t.setTime(+t+n*ck)}),(function(t,n){return(n-t)/ck}),(function(t){return t.getMinutes()}))
const vk=_k
var mk=_k.range,xk=ik((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*sk-t.getMinutes()*ck)}),(function(t,n){t.setTime(+t+n*lk)}),(function(t,n){return(n-t)/lk}),(function(t){return t.getHours()}))
const bk=xk
var wk=xk.range,Sk=ik((t=>t.setHours(0,0,0,0)),((t,n)=>t.setDate(t.getDate()+n)),((t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ck)/fk),(t=>t.getDate()-1))
const Ak=Sk
var Mk=Sk.range
function Tk(t){return ik((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ck)/hk}))}var Ck=Tk(0),Pk=Tk(1),Ek=Tk(2),kk=Tk(3),Nk=Tk(4),Lk=Tk(5),Rk=Tk(6),Vk=Ck.range,Ok=Pk.range,Gk=Ek.range,Dk=kk.range,Ik=Nk.range,zk=Lk.range,Fk=Rk.range,Yk=ik((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()}))
const Uk=Yk
var Bk=Yk.range,Hk=ik((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}))
Hk.every=function(t){return isFinite(t=Math.floor(t))&&t>0?ik((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null}
const Xk=Hk
var jk=Hk.range,qk=ik((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*ck)}),(function(t,n){return(n-t)/ck}),(function(t){return t.getUTCMinutes()}))
const Wk=qk
var Qk=qk.range,$k=ik((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*lk)}),(function(t,n){return(n-t)/lk}),(function(t){return t.getUTCHours()}))
const Zk=$k
var Kk=$k.range,Jk=ik((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/fk}),(function(t){return t.getUTCDate()-1}))
const tN=Jk
var nN=Jk.range
function eN(t){return ik((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/hk}))}var rN=eN(0),iN=eN(1),oN=eN(2),aN=eN(3),uN=eN(4),sN=eN(5),cN=eN(6),lN=rN.range,fN=iN.range,hN=oN.range,dN=aN.range,pN=uN.range,gN=sN.range,yN=cN.range,_N=ik((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()}))
const vN=_N
var mN=_N.range,xN=ik((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()}))
xN.every=function(t){return isFinite(t=Math.floor(t))&&t>0?ik((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null}
const bN=xN
var wN=xN.range
function SN(t,n,e,r,i,a){const u=[[gk,1,sk],[gk,5,5e3],[gk,15,15e3],[gk,30,3e4],[a,1,ck],[a,5,3e5],[a,15,9e5],[a,30,18e5],[i,1,lk],[i,3,108e5],[i,6,216e5],[i,12,432e5],[r,1,fk],[r,2,1728e5],[e,1,hk],[n,1,2592e6],[n,3,7776e6],[t,1,dk]]
function s(n,e,r){const i=Math.abs(e-n)/r,a=o((t=>{let[,,n]=t
return n})).right(u,i)
if(a===u.length)return t.every(K(n/dk,e/dk,r))
if(0===a)return ak.every(Math.max(K(n,e,r),1))
const[s,c]=u[i/u[a-1][2]<u[a][2]/i?a-1:a]
return s.every(c)}return[function(t,n,e){const r=n<t
r&&([t,n]=[n,t])
const i=e&&"function"==typeof e.range?e:s(t,n,e),o=i?i.range(t,+n+1):[]
return r?o.reverse():o},s]}const[AN,MN]=SN(bN,vN,rN,tN,Zk,Wk),[TN,CN]=SN(Xk,Uk,Ck,Ak,bk,vk)
function PN(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L)
return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function EN(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L))
return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function kN(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}function NN(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,s=t.shortMonths,c=BN(i),l=HN(i),f=BN(o),h=HN(o),d=BN(a),p=HN(a),g=BN(u),y=HN(u),_=BN(s),v=HN(s),m={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return s[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:fL,e:fL,f:yL,g:CL,G:EL,H:hL,I:dL,j:pL,L:gL,m:_L,M:vL,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:KL,s:JL,S:mL,u:xL,U:bL,V:SL,w:AL,W:ML,x:null,X:null,y:TL,Y:PL,Z:kL,"%":ZL},x={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return s[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:NL,e:NL,f:GL,g:qL,G:QL,H:LL,I:RL,j:VL,L:OL,m:DL,M:IL,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:KL,s:JL,S:zL,u:FL,U:YL,V:BL,w:HL,W:XL,x:null,X:null,y:jL,Y:WL,Z:$L,"%":ZL},b={a:function(t,n,e){var r=d.exec(n.slice(e))
return r?(t.w=p.get(r[0].toLowerCase()),e+r[0].length):-1},A:function(t,n,e){var r=f.exec(n.slice(e))
return r?(t.w=h.get(r[0].toLowerCase()),e+r[0].length):-1},b:function(t,n,e){var r=_.exec(n.slice(e))
return r?(t.m=v.get(r[0].toLowerCase()),e+r[0].length):-1},B:function(t,n,e){var r=g.exec(n.slice(e))
return r?(t.m=y.get(r[0].toLowerCase()),e+r[0].length):-1},c:function(t,e,r){return A(t,n,e,r)},d:nL,e:nL,f:uL,g:ZN,G:$N,H:rL,I:rL,j:eL,L:aL,m:tL,M:iL,p:function(t,n,e){var r=c.exec(n.slice(e))
return r?(t.p=l.get(r[0].toLowerCase()),e+r[0].length):-1},q:JN,Q:cL,s:lL,S:oL,u:jN,U:qN,V:WN,w:XN,W:QN,x:function(t,n,r){return A(t,e,n,r)},X:function(t,n,e){return A(t,r,n,e)},y:ZN,Y:$N,Z:KN,"%":sL}
function w(t,n){return function(e){var r,i,o,a=[],u=-1,s=0,c=t.length
for(e instanceof Date||(e=new Date(+e));++u<c;)37===t.charCodeAt(u)&&(a.push(t.slice(s,u)),null!=(i=DN[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),s=u+1)
return a.push(t.slice(s,u)),a.join("")}}function S(t,n){return function(e){var r,i,o=kN(1900,void 0,1)
if(A(o,t,e+="",0)!=e.length)return null
if("Q"in o)return new Date(o.Q)
if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0))
if(n&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null
"w"in o||(o.w=1),"Z"in o?(i=(r=EN(kN(o.y,0,1))).getUTCDay(),r=i>4||0===i?iN.ceil(r):iN(r),r=tN.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=PN(kN(o.y,0,1))).getDay(),r=i>4||0===i?Pk.ceil(r):Pk(r),r=Ak.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?EN(kN(o.y,0,1)).getUTCDay():PN(kN(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7)
return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,EN(o)):PN(o)}}function A(t,n,e,r){for(var i,o,a=0,u=n.length,s=e.length;a<u;){if(r>=s)return-1
if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=b[i in DN?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),x.x=w(e,x),x.X=w(r,x),x.c=w(n,x),{format:function(t){var n=w(t+="",m)
return n.toString=function(){return t},n},parse:function(t){var n=S(t+="",!1)
return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",x)
return n.toString=function(){return t},n},utcParse:function(t){var n=S(t+="",!0)
return n.toString=function(){return t},n}}}var LN,RN,VN,ON,GN,DN={"-":"",_:" ",0:"0"},IN=/^\s*\d+/,zN=/^%/,FN=/[\\^$*+?|[\]().{}]/g
function YN(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length
return r+(o<e?new Array(e-o+1).join(n)+i:i)}function UN(t){return t.replace(FN,"\\$&")}function BN(t){return new RegExp("^(?:"+t.map(UN).join("|")+")","i")}function HN(t){return new Map(t.map(((t,n)=>[t.toLowerCase(),n])))}function XN(t,n,e){var r=IN.exec(n.slice(e,e+1))
return r?(t.w=+r[0],e+r[0].length):-1}function jN(t,n,e){var r=IN.exec(n.slice(e,e+1))
return r?(t.u=+r[0],e+r[0].length):-1}function qN(t,n,e){var r=IN.exec(n.slice(e,e+2))
return r?(t.U=+r[0],e+r[0].length):-1}function WN(t,n,e){var r=IN.exec(n.slice(e,e+2))
return r?(t.V=+r[0],e+r[0].length):-1}function QN(t,n,e){var r=IN.exec(n.slice(e,e+2))
return r?(t.W=+r[0],e+r[0].length):-1}function $N(t,n,e){var r=IN.exec(n.slice(e,e+4))
return r?(t.y=+r[0],e+r[0].length):-1}function ZN(t,n,e){var r=IN.exec(n.slice(e,e+2))
return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function KN(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6))
return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function JN(t,n,e){var r=IN.exec(n.slice(e,e+1))
return r?(t.q=3*r[0]-3,e+r[0].length):-1}function tL(t,n,e){var r=IN.exec(n.slice(e,e+2))
return r?(t.m=r[0]-1,e+r[0].length):-1}function nL(t,n,e){var r=IN.exec(n.slice(e,e+2))
return r?(t.d=+r[0],e+r[0].length):-1}function eL(t,n,e){var r=IN.exec(n.slice(e,e+3))
return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function rL(t,n,e){var r=IN.exec(n.slice(e,e+2))
return r?(t.H=+r[0],e+r[0].length):-1}function iL(t,n,e){var r=IN.exec(n.slice(e,e+2))
return r?(t.M=+r[0],e+r[0].length):-1}function oL(t,n,e){var r=IN.exec(n.slice(e,e+2))
return r?(t.S=+r[0],e+r[0].length):-1}function aL(t,n,e){var r=IN.exec(n.slice(e,e+3))
return r?(t.L=+r[0],e+r[0].length):-1}function uL(t,n,e){var r=IN.exec(n.slice(e,e+6))
return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function sL(t,n,e){var r=zN.exec(n.slice(e,e+1))
return r?e+r[0].length:-1}function cL(t,n,e){var r=IN.exec(n.slice(e))
return r?(t.Q=+r[0],e+r[0].length):-1}function lL(t,n,e){var r=IN.exec(n.slice(e))
return r?(t.s=+r[0],e+r[0].length):-1}function fL(t,n){return YN(t.getDate(),n,2)}function hL(t,n){return YN(t.getHours(),n,2)}function dL(t,n){return YN(t.getHours()%12||12,n,2)}function pL(t,n){return YN(1+Ak.count(Xk(t),t),n,3)}function gL(t,n){return YN(t.getMilliseconds(),n,3)}function yL(t,n){return gL(t,n)+"000"}function _L(t,n){return YN(t.getMonth()+1,n,2)}function vL(t,n){return YN(t.getMinutes(),n,2)}function mL(t,n){return YN(t.getSeconds(),n,2)}function xL(t){var n=t.getDay()
return 0===n?7:n}function bL(t,n){return YN(Ck.count(Xk(t)-1,t),n,2)}function wL(t){var n=t.getDay()
return n>=4||0===n?Nk(t):Nk.ceil(t)}function SL(t,n){return t=wL(t),YN(Nk.count(Xk(t),t)+(4===Xk(t).getDay()),n,2)}function AL(t){return t.getDay()}function ML(t,n){return YN(Pk.count(Xk(t)-1,t),n,2)}function TL(t,n){return YN(t.getFullYear()%100,n,2)}function CL(t,n){return YN((t=wL(t)).getFullYear()%100,n,2)}function PL(t,n){return YN(t.getFullYear()%1e4,n,4)}function EL(t,n){var e=t.getDay()
return YN((t=e>=4||0===e?Nk(t):Nk.ceil(t)).getFullYear()%1e4,n,4)}function kL(t){var n=t.getTimezoneOffset()
return(n>0?"-":(n*=-1,"+"))+YN(n/60|0,"0",2)+YN(n%60,"0",2)}function NL(t,n){return YN(t.getUTCDate(),n,2)}function LL(t,n){return YN(t.getUTCHours(),n,2)}function RL(t,n){return YN(t.getUTCHours()%12||12,n,2)}function VL(t,n){return YN(1+tN.count(bN(t),t),n,3)}function OL(t,n){return YN(t.getUTCMilliseconds(),n,3)}function GL(t,n){return OL(t,n)+"000"}function DL(t,n){return YN(t.getUTCMonth()+1,n,2)}function IL(t,n){return YN(t.getUTCMinutes(),n,2)}function zL(t,n){return YN(t.getUTCSeconds(),n,2)}function FL(t){var n=t.getUTCDay()
return 0===n?7:n}function YL(t,n){return YN(rN.count(bN(t)-1,t),n,2)}function UL(t){var n=t.getUTCDay()
return n>=4||0===n?uN(t):uN.ceil(t)}function BL(t,n){return t=UL(t),YN(uN.count(bN(t),t)+(4===bN(t).getUTCDay()),n,2)}function HL(t){return t.getUTCDay()}function XL(t,n){return YN(iN.count(bN(t)-1,t),n,2)}function jL(t,n){return YN(t.getUTCFullYear()%100,n,2)}function qL(t,n){return YN((t=UL(t)).getUTCFullYear()%100,n,2)}function WL(t,n){return YN(t.getUTCFullYear()%1e4,n,4)}function QL(t,n){var e=t.getUTCDay()
return YN((t=e>=4||0===e?uN(t):uN.ceil(t)).getUTCFullYear()%1e4,n,4)}function $L(){return"+0000"}function ZL(){return"%"}function KL(t){return+t}function JL(t){return Math.floor(+t/1e3)}function tR(t){return LN=NN(t),RN=LN.format,VN=LN.parse,ON=LN.utcFormat,GN=LN.utcParse,LN}tR({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})
var nR="%Y-%m-%dT%H:%M:%S.%LZ",eR=Date.prototype.toISOString?function(t){return t.toISOString()}:ON(nR)
const rR=eR
var iR=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t)
return isNaN(n)?null:n}:GN(nR)
const oR=iR
var aR,uR,sR=0,cR=0,lR=0,fR=0,hR=0,dR=0,pR="object"==typeof performance&&performance.now?performance:Date,gR="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)}
function yR(){return hR||(gR(_R),hR=pR.now()+dR)}function _R(){hR=0}function vR(){this._call=this._time=this._next=null}function mR(t,n,e){var r=new vR
return r.restart(t,n,e),r}function xR(){yR(),++sR
for(var t,n=aR;n;)(t=hR-n._time)>=0&&n._call.call(null,t),n=n._next;--sR}function bR(){hR=(fR=pR.now())+dR,sR=cR=0
try{xR()}finally{sR=0,function(){for(var t,n,e=aR,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:aR=n)
uR=t,SR(r)}(),hR=0}}function wR(){var t=pR.now(),n=t-fR
n>1e3&&(dR-=n,fR=t)}function SR(t){sR||(cR&&(cR=clearTimeout(cR)),t-hR>24?(t<1/0&&(cR=setTimeout(bR,t-pR.now()-dR)),lR&&(lR=clearInterval(lR))):(lR||(fR=pR.now(),lR=setInterval(wR,1e3)),sR=1,gR(bR)))}function AR(t,n,e){var r=new vR
return n=null==n?0:+n,r.restart((e=>{r.stop(),t(e+n)}),n,e),r}function MR(t,n,e){var r=new vR,i=n
return null==n?(r.restart(t,n,e),r):(r._restart=r.restart,r.restart=function(t,n,e){n=+n,e=null==e?yR():+e,r._restart((function o(a){a+=i,r._restart(o,i+=n,e),t(a)}),n,e)},r.restart(t,n,e),r)}vR.prototype=mR.prototype={constructor:vR,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function")
e=(null==e?yR():+e)+(null==n?0:+n),this._next||uR===this||(uR?uR._next=this:aR=this,uR=this),this._call=t,this._time=e,SR()},stop:function(){this._call&&(this._call=null,this._time=1/0,SR())}}
var TR=Xu("start","end","cancel","interrupt"),CR=[]
function PR(t,n,e,r,i,o){var a=t.__transition
if(a){if(e in a)return}else t.__transition={}
!function(t,n,e){var r,i=t.__transition
function o(s){var c,l,f,h
if(1!==e.state)return u()
for(c in i)if((h=i[c]).name===e.name){if(3===h.state)return AR(o)
4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<n&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(AR((function(){3===e.state&&(e.state=4,e.timer.restart(a,e.delay,e.time),a(s))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=3,r=new Array(f=e.tween.length),c=0,l=-1;c<f;++c)(h=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(r[++l]=h)
r.length=l+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=5,1),o=-1,a=r.length;++o<a;)r[o].call(t,i)
5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return
delete t.__transition}i[n]=e,e.timer=mR((function(t){e.state=1,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)}),0,e.time)}(t,e,{name:n,index:r,group:i,on:TR,tween:CR,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function ER(t,n){var e=NR(t,n)
if(e.state>0)throw new Error("too late; already scheduled")
return e}function kR(t,n){var e=NR(t,n)
if(e.state>3)throw new Error("too late; already running")
return e}function NR(t,n){var e=t.__transition
if(!e||!(e=e[n]))throw new Error("transition not found")
return e}function LR(t,n){var e,r,i,o=t.__transition,a=!0
if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1
a&&delete t.__transition}}function RR(t,n){var e,r
return function(){var i=kR(this,t),o=i.tween
if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1)
break}i.tween=r}}function VR(t,n,e){var r,i
if("function"!=typeof e)throw new Error
return function(){var o=kR(this,t),a=o.tween
if(a!==r){i=(r=a).slice()
for(var u={name:n,value:e},s=0,c=i.length;s<c;++s)if(i[s].name===n){i[s]=u
break}s===c&&i.push(u)}o.tween=i}}function OR(t,n,e){var r=t._id
return t.each((function(){var t=kR(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return NR(t,r).value[n]}}function GR(t,n){var e
return("number"==typeof n?kv:n instanceof oa?bv:(e=oa(n))?(n=e,bv):Vv)(t,n)}function DR(t){return function(){this.removeAttribute(t)}}function IR(t){return function(){this.removeAttributeNS(t.space,t.local)}}function zR(t,n,e){var r,i,o=e+""
return function(){var a=this.getAttribute(t)
return a===o?null:a===r?i:i=n(r=a,e)}}function FR(t,n,e){var r,i,o=e+""
return function(){var a=this.getAttributeNS(t.space,t.local)
return a===o?null:a===r?i:i=n(r=a,e)}}function YR(t,n,e){var r,i,o
return function(){var a,u,s=e(this)
if(null!=s)return(a=this.getAttribute(t))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))
this.removeAttribute(t)}}function UR(t,n,e){var r,i,o
return function(){var a,u,s=e(this)
if(null!=s)return(a=this.getAttributeNS(t.space,t.local))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))
this.removeAttributeNS(t.space,t.local)}}function BR(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function HR(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function XR(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&HR(t,i)),e}return i._value=n,i}function jR(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&BR(t,i)),e}return i._value=n,i}function qR(t,n){return function(){ER(this,t).delay=+n.apply(this,arguments)}}function WR(t,n){return n=+n,function(){ER(this,t).delay=n}}function QR(t,n){return function(){kR(this,t).duration=+n.apply(this,arguments)}}function $R(t,n){return n=+n,function(){kR(this,t).duration=n}}function ZR(t,n){if("function"!=typeof n)throw new Error
return function(){kR(this,t).ease=n}}function KR(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".")
return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?ER:kR
return function(){var a=o(this,t),u=a.on
u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}var JR=oc.prototype.constructor
function tV(t){return function(){this.style.removeProperty(t)}}function nV(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function eV(t,n,e){var r,i
function o(){var o=n.apply(this,arguments)
return o!==i&&(r=(i=o)&&nV(t,o,e)),r}return o._value=n,o}function rV(t){return function(n){this.textContent=t.call(this,n)}}function iV(t){var n,e
function r(){var r=t.apply(this,arguments)
return r!==e&&(n=(e=r)&&rV(r)),n}return r._value=t,r}var oV=0
function aV(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function uV(t){return oc().transition(t)}function sV(){return++oV}var cV=oc.prototype
aV.prototype=uV.prototype={constructor:aV,select:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=qu(t))
for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,s,c=r[a],l=c.length,f=o[a]=new Array(l),h=0;h<l;++h)(u=c[h])&&(s=t.call(u,u.__data__,h,c))&&("__data__"in u&&(s.__data__=u.__data__),f[h]=s,PR(f[h],n,e,h,f,NR(u,e)))
return new aV(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=$u(t))
for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var s,c=r[u],l=c.length,f=0;f<l;++f)if(s=c[f]){for(var h,d=t.call(s,s.__data__,f,c),p=NR(s,e),g=0,y=d.length;g<y;++g)(h=d[g])&&PR(h,n,e,g,d,p)
o.push(d),a.push(s)}return new aV(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=Zu(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o)
return new aV(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error
for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],l=e[u],f=c.length,h=a[u]=new Array(f),d=0;d<f;++d)(s=c[d]||l[d])&&(h[d]=s)
for(;u<r;++u)a[u]=n[u]
return new aV(a,this._parents,this._name,this._id)},selection:function(){return new JR(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=sV(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)if(a=u[c]){var l=NR(a,n)
PR(a,t,e,c,u,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new aV(r,this._parents,t,e)},call:cV.call,nodes:cV.nodes,node:cV.node,size:cV.size,empty:cV.empty,each:cV.each,on:function(t,n){var e=this._id
return arguments.length<2?NR(this.node(),e).on.on(t):this.each(KR(e,t,n))},attr:function(t,n){var e=hs(t),r="transform"===e?Xv:GR
return this.attrTween(t,"function"==typeof n?(e.local?UR:YR)(e,r,OR(this,"attr."+t,n)):null==n?(e.local?IR:DR)(e):(e.local?FR:zR)(e,r,n))},attrTween:function(t,n){var e="attr."+t
if(arguments.length<2)return(e=this.tween(e))&&e._value
if(null==n)return this.tween(e,null)
if("function"!=typeof n)throw new Error
var r=hs(t)
return this.tween(e,(r.local?XR:jR)(r,n))},style:function(t,n,e){var r="transform"==(t+="")?Hv:GR
return null==n?this.styleTween(t,function(t,n){var e,r,i
return function(){var o=Ss(this,t),a=(this.style.removeProperty(t),Ss(this,t))
return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,tV(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o
return function(){var a=Ss(this,t),u=e(this),s=u+""
return null==u&&(this.style.removeProperty(t),s=u=Ss(this,t)),a===s?null:a===r&&s===i?o:(i=s,o=n(r=a,u))}}(t,r,OR(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a
return function(){var s=kR(this,t),c=s.on,l=null==s.value[a]?o||(o=tV(n)):void 0
c===e&&i===l||(r=(e=c).copy()).on(u,i=l),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+""
return function(){var a=Ss(this,t)
return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="")
if(arguments.length<2)return(r=this.tween(r))&&r._value
if(null==n)return this.tween(r,null)
if("function"!=typeof n)throw new Error
return this.tween(r,eV(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this)
this.textContent=null==n?"":n}}(OR(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text"
if(arguments.length<1)return(n=this.tween(n))&&n._value
if(null==t)return this.tween(n,null)
if("function"!=typeof t)throw new Error
return this.tween(n,iV(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode
for(var e in this.__transition)if(+e!==t)return
n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id
if(t+="",arguments.length<2){for(var r,i=NR(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value
return null}return this.each((null==n?RR:VR)(e,t,n))},delay:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?qR:WR)(n,t)):NR(this.node(),n).delay},duration:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?QR:$R)(n,t)):NR(this.node(),n).duration},ease:function(t){var n=this._id
return arguments.length?this.each(ZR(n,t)):NR(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error
return this.each(function(t,n){return function(){var e=n.apply(this,arguments)
if("function"!=typeof e)throw new Error
kR(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size()
return new Promise((function(o,a){var u={value:a},s={value:function(){0==--i&&o()}}
e.each((function(){var e=kR(this,r),i=e.on
i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(s)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:cV[Symbol.iterator]}
var lV={time:null,delay:0,duration:250,ease:$c}
function fV(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`)
return e}oc.prototype.interrupt=function(t){return this.each((function(){LR(this,t)}))},oc.prototype.transition=function(t){var n,e
t instanceof aV?(n=t._id,t=t._name):(n=sV(),(e=lV).time=yR(),t=null==t?null:t+"")
for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)(a=u[c])&&PR(a,t,n,c,u,e||fV(a,n))
return new aV(r,this._parents,t,n)}
var hV=[null]
function dV(t,n){var e,r,i=t.__transition
if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>1&&e.name===n)return new aV([[t]],hV,n,+r)
return null}var pV={value:()=>{}}
function gV(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t)
r[t]=[]}return new yV(r)}function yV(t){this._=t}function _V(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".")
if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t)
return{type:t,name:e}}))}function vV(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function mV(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=pV,t=t.slice(0,r).concat(t.slice(r+1))
break}return null!=e&&t.push({name:n,value:e}),t}yV.prototype=gV.prototype={constructor:yV,on:function(t,n){var e,r=this._,i=_V(t+"",r),o=-1,a=i.length
if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n)
for(;++o<a;)if(e=(t=i[o]).type)r[e]=mV(r[e],t.name,n)
else if(null==n)for(e in r)r[e]=mV(r[e],t.name,null)
return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=vV(r[e],t.name)))return e},copy:function(){var t={},n=this._
for(var e in n)t[e]=n[e].slice()
return new yV(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2]
if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}}
const xV=gV
function bV(){}function wV(t){return null==t?bV:function(){return this.querySelector(t)}}function SV(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function AV(){return[]}function MV(t){return null==t?AV:function(){return this.querySelectorAll(t)}}function TV(t){return function(){return this.matches(t)}}function CV(t){return function(n){return n.matches(t)}}var PV=Array.prototype.find
function EV(){return this.firstElementChild}var kV=Array.prototype.filter
function NV(){return this.children}function LV(t){return new Array(t.length)}function RV(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function VV(t){return function(){return t}}function OV(t,n,e,r,i,o){for(var a,u=0,s=n.length,c=o.length;u<c;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new RV(t,o[u])
for(;u<s;++u)(a=n[u])&&(i[u]=a)}function GV(t,n,e,r,i,o,a){var u,s,c,l=new Map,f=n.length,h=o.length,d=new Array(f)
for(u=0;u<f;++u)(s=n[u])&&(d[u]=c=a.call(s,s.__data__,u,n)+"",l.has(c)?i[u]=s:l.set(c,s))
for(u=0;u<h;++u)c=a.call(t,o[u],u,o)+"",(s=l.get(c))?(r[u]=s,s.__data__=o[u],l.delete(c)):e[u]=new RV(t,o[u])
for(u=0;u<f;++u)(s=n[u])&&l.get(d[u])===s&&(i[u]=s)}function DV(t){return t.__data__}function IV(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}RV.prototype={constructor:RV,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}
var zV="http://www.w3.org/1999/xhtml"
const FV={svg:"http://www.w3.org/2000/svg",xhtml:zV,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}
function YV(t){var n=t+="",e=n.indexOf(":")
return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),FV.hasOwnProperty(n)?{space:FV[n],local:t}:t}function UV(t){return function(){this.removeAttribute(t)}}function BV(t){return function(){this.removeAttributeNS(t.space,t.local)}}function HV(t,n){return function(){this.setAttribute(t,n)}}function XV(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function jV(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function qV(t,n){return function(){var e=n.apply(this,arguments)
null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function WV(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function QV(t){return function(){this.style.removeProperty(t)}}function $V(t,n,e){return function(){this.style.setProperty(t,n,e)}}function ZV(t,n,e){return function(){var r=n.apply(this,arguments)
null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function KV(t,n){return t.style.getPropertyValue(n)||WV(t).getComputedStyle(t,null).getPropertyValue(n)}function JV(t){return function(){delete this[t]}}function tO(t,n){return function(){this[t]=n}}function nO(t,n){return function(){var e=n.apply(this,arguments)
null==e?delete this[t]:this[t]=e}}function eO(t){return t.trim().split(/^|\s+/)}function rO(t){return t.classList||new iO(t)}function iO(t){this._node=t,this._names=eO(t.getAttribute("class")||"")}function oO(t,n){for(var e=rO(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function aO(t,n){for(var e=rO(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function uO(t){return function(){oO(this,t)}}function sO(t){return function(){aO(this,t)}}function cO(t,n){return function(){(n.apply(this,arguments)?oO:aO)(this,t)}}function lO(){this.textContent=""}function fO(t){return function(){this.textContent=t}}function hO(t){return function(){var n=t.apply(this,arguments)
this.textContent=null==n?"":n}}function dO(){this.innerHTML=""}function pO(t){return function(){this.innerHTML=t}}function gO(t){return function(){var n=t.apply(this,arguments)
this.innerHTML=null==n?"":n}}function yO(){this.nextSibling&&this.parentNode.appendChild(this)}function _O(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function vO(t){return function(){var n=this.ownerDocument,e=this.namespaceURI
return e===zV&&n.documentElement.namespaceURI===zV?n.createElement(t):n.createElementNS(e,t)}}function mO(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function xO(t){var n=YV(t)
return(n.local?mO:vO)(n)}function bO(){return null}function wO(){var t=this.parentNode
t&&t.removeChild(this)}function SO(){var t=this.cloneNode(!1),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function AO(){var t=this.cloneNode(!0),n=this.parentNode
return n?n.insertBefore(t,this.nextSibling):t}function MO(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".")
return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function TO(t){return function(){var n=this.__on
if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function CO(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n)
if(i)for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n)
this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function PO(t,n,e){var r=WV(t),i=r.CustomEvent
"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function EO(t,n){return function(){return PO(this,t,n)}}function kO(t,n){return function(){return PO(this,t,n.apply(this,arguments))}}iO.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t)
n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}}
var NO=[null]
function LO(t,n){this._groups=t,this._parents=n}function RO(){return new LO([[document.documentElement]],NO)}LO.prototype=RO.prototype={constructor:LO,select:function(t){"function"!=typeof t&&(t=wV(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],s=u.length,c=r[i]=new Array(s),l=0;l<s;++l)(o=u[l])&&(a=t.call(o,o.__data__,l,u))&&("__data__"in o&&(a.__data__=o.__data__),c[l]=a)
return new LO(r,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){var n=t.apply(this,arguments)
return null==n?[]:SV(n)}}(t):MV(t)
for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],s=u.length,c=0;c<s;++c)(a=u[c])&&(r.push(t.call(a,a.__data__,c,u)),i.push(a))
return new LO(r,i)},selectChild:function(t){return this.select(null==t?EV:function(t){return function(){return PV.call(this.children,t)}}("function"==typeof t?t:CV(t)))},selectChildren:function(t){return this.selectAll(null==t?NV:function(t){return function(){return kV.call(this.children,t)}}("function"==typeof t?t:CV(t)))},filter:function(t){"function"!=typeof t&&(t=TV(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o)
return new LO(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,DV)
var e=n?GV:OV,r=this._parents,i=this._groups
"function"!=typeof t&&(t=VV(t))
for(var o=i.length,a=new Array(o),u=new Array(o),s=new Array(o),c=0;c<o;++c){var l=r[c],f=i[c],h=f.length,d=SV(t.call(l,l&&l.__data__,c,r)),p=d.length,g=u[c]=new Array(p),y=a[c]=new Array(p),_=s[c]=new Array(h)
e(l,f,g,y,_,d,n)
for(var v,m,x=0,b=0;x<p;++x)if(v=g[x]){for(x>=b&&(b=x+1);!(m=y[b])&&++b<p;);v._next=m||null}}return(a=new LO(a,r))._enter=u,a._exit=s,a},enter:function(){return new LO(this._enter||this._groups.map(LV),this._parents)},exit:function(){return new LO(this._exit||this._groups.map(LV),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit()
return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){if(!(t instanceof LO))throw new Error("invalid merge")
for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],l=e[u],f=c.length,h=a[u]=new Array(f),d=0;d<f;++d)(s=c[d]||l[d])&&(h[d]=s)
for(;u<r;++u)a[u]=n[u]
return new LO(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r)
return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=IV)
for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],s=u.length,c=i[o]=new Array(s),l=0;l<s;++l)(a=u[l])&&(c[l]=a)
c.sort(n)}return new LO(i,this._parents).order()},call:function(){var t=arguments[0]
return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i]
if(a)return a}return null},size:function(){let t=0
for(const n of this)++t
return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o)
return this},attr:function(t,n){var e=YV(t)
if(arguments.length<2){var r=this.node()
return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?BV:UV:"function"==typeof n?e.local?qV:jV:e.local?XV:HV)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?QV:"function"==typeof n?ZV:$V)(t,n,null==e?"":e)):KV(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?JV:"function"==typeof n?nO:tO)(t,n)):this.node()[t]},classed:function(t,n){var e=eO(t+"")
if(arguments.length<2){for(var r=rO(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1
return!0}return this.each(("function"==typeof n?cO:n?uO:sO)(e,n))},text:function(t){return arguments.length?this.each(null==t?lO:("function"==typeof t?hO:fO)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?dO:("function"==typeof t?gO:pO)(t)):this.node().innerHTML},raise:function(){return this.each(yO)},lower:function(){return this.each(_O)},append:function(t){var n="function"==typeof t?t:xO(t)
return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:xO(t),r=null==n?bO:"function"==typeof n?n:wV(n)
return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(wO)},clone:function(t){return this.select(t?AO:SO)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=MO(t+""),a=o.length
if(!(arguments.length<2)){for(u=n?CO:TO,r=0;r<a;++r)this.each(u(o[r],n,e))
return this}var u=this.node().__on
if(u)for(var s,c=0,l=u.length;c<l;++c)for(r=0,s=u[c];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?kO:EO)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}}
const VO=RO
function OO(t){return"string"==typeof t?new LO([[document.querySelector(t)]],[document.documentElement]):new LO([[t]],NO)}function GO(t){t.preventDefault(),t.stopImmediatePropagation()}function DO(t){var n=t.document.documentElement,e=OO(t).on("dragstart.drag",GO,!0)
"onselectstart"in n?e.on("selectstart.drag",GO,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function IO(t,n){var e=t.document.documentElement,r=OO(t).on("dragstart.drag",null)
n&&(r.on("click.drag",GO,!0),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function zO(t){return((t=Math.exp(t))+1/t)/2}const FO=function t(n,e,r){function i(t,i){var o,a,u=t[0],s=t[1],c=t[2],l=i[0],f=i[1],h=i[2],d=l-u,p=f-s,g=d*d+p*p
if(g<1e-12)a=Math.log(h/c)/n,o=function(t){return[u+t*d,s+t*p,c*Math.exp(n*t*a)]}
else{var y=Math.sqrt(g),_=(h*h-c*c+r*g)/(2*c*e*y),v=(h*h-c*c-r*g)/(2*h*e*y),m=Math.log(Math.sqrt(_*_+1)-_),x=Math.log(Math.sqrt(v*v+1)-v)
a=(x-m)/n,o=function(t){var r,i=t*a,o=zO(m),l=c/(e*y)*(o*(r=n*i+m,((r=Math.exp(2*r))-1)/(r+1))-function(t){return((t=Math.exp(t))-1/t)/2}(m))
return[u+l*d,s+l*p,c*o/zO(n*i+m)]}}return o.duration=1e3*a*n/Math.SQRT2,o}return i.rho=function(n){var e=Math.max(.001,+n),r=e*e
return t(e,r,r*r)},i}(Math.SQRT2,2,4)
function YO(t,n){if(t=function(t){let n
for(;n=t.sourceEvent;)t=n
return t}(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n
if(e.createSVGPoint){var r=e.createSVGPoint()
return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(n.getScreenCTM().inverse())).x,r.y]}if(n.getBoundingClientRect){var i=n.getBoundingClientRect()
return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}}return[t.pageX,t.pageY]}var UO,BO,HO=0,XO=0,jO=0,qO=0,WO=0,QO=0,$O="object"==typeof performance&&performance.now?performance:Date,ZO="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)}
function KO(){return WO||(ZO(JO),WO=$O.now()+QO)}function JO(){WO=0}function tG(){this._call=this._time=this._next=null}function nG(t,n,e){var r=new tG
return r.restart(t,n,e),r}function eG(){WO=(qO=$O.now())+QO,HO=XO=0
try{!function(){KO(),++HO
for(var t,n=UO;n;)(t=WO-n._time)>=0&&n._call.call(null,t),n=n._next;--HO}()}finally{HO=0,function(){for(var t,n,e=UO,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:UO=n)
BO=t,iG(r)}(),WO=0}}function rG(){var t=$O.now(),n=t-qO
n>1e3&&(QO-=n,qO=t)}function iG(t){HO||(XO&&(XO=clearTimeout(XO)),t-WO>24?(t<1/0&&(XO=setTimeout(eG,t-$O.now()-QO)),jO&&(jO=clearInterval(jO))):(jO||(qO=$O.now(),jO=setInterval(rG,1e3)),HO=1,ZO(eG)))}function oG(t,n,e){var r=new tG
return n=null==n?0:+n,r.restart((e=>{r.stop(),t(e+n)}),n,e),r}tG.prototype=nG.prototype={constructor:tG,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function")
e=(null==e?KO():+e)+(null==n?0:+n),this._next||BO===this||(BO?BO._next=this:UO=this,BO=this),this._call=t,this._time=e,iG()},stop:function(){this._call&&(this._call=null,this._time=1/0,iG())}}
var aG=xV("start","end","cancel","interrupt"),uG=[]
function sG(t,n,e,r,i,o){var a=t.__transition
if(a){if(e in a)return}else t.__transition={}
!function(t,n,e){var r,i=t.__transition
function o(s){var c,l,f,h
if(1!==e.state)return u()
for(c in i)if((h=i[c]).name===e.name){if(3===h.state)return oG(o)
4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<n&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(oG((function(){3===e.state&&(e.state=4,e.timer.restart(a,e.delay,e.time),a(s))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=3,r=new Array(f=e.tween.length),c=0,l=-1;c<f;++c)(h=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(r[++l]=h)
r.length=l+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=5,1),o=-1,a=r.length;++o<a;)r[o].call(t,i)
5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return
delete t.__transition}i[n]=e,e.timer=nG((function(t){e.state=1,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)}),0,e.time)}(t,e,{name:n,index:r,group:i,on:aG,tween:uG,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function cG(t,n){var e=fG(t,n)
if(e.state>0)throw new Error("too late; already scheduled")
return e}function lG(t,n){var e=fG(t,n)
if(e.state>3)throw new Error("too late; already running")
return e}function fG(t,n){var e=t.__transition
if(!e||!(e=e[n]))throw new Error("transition not found")
return e}function hG(t,n){var e,r,i,o=t.__transition,a=!0
if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1
a&&delete t.__transition}}function dG(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var pG,gG=180/Math.PI,yG={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1}
function _G(t,n,e,r,i,o){var a,u,s
return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*gG,skewX:Math.atan(s)*gG,scaleX:a,scaleY:u}}function vG(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],s=[]
return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var s=a.push("translate(",null,n,null,e)
u.push({i:s-4,x:dG(t,i)},{i:s-2,x:dG(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,s),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:dG(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,s),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:dG(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,s),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")")
a.push({i:u-4,x:dG(t,e)},{i:u-2,x:dG(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,s),o=a=null,function(t){for(var n,e=-1,r=s.length;++e<r;)u[(n=s[e]).i]=n.x(t)
return u.join("")}}}var mG=vG((function(t){const n=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"")
return n.isIdentity?yG:_G(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),xG=vG((function(t){return null==t?yG:(pG||(pG=document.createElementNS("http://www.w3.org/2000/svg","g")),pG.setAttribute("transform",t),(t=pG.transform.baseVal.consolidate())?_G((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):yG)}),", ",")",")")
function bG(t,n){var e,r
return function(){var i=lG(this,t),o=i.tween
if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1)
break}i.tween=r}}function wG(t,n,e){var r,i
if("function"!=typeof e)throw new Error
return function(){var o=lG(this,t),a=o.tween
if(a!==r){i=(r=a).slice()
for(var u={name:n,value:e},s=0,c=i.length;s<c;++s)if(i[s].name===n){i[s]=u
break}s===c&&i.push(u)}o.tween=i}}function SG(t,n,e){var r=t._id
return t.each((function(){var t=lG(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return fG(t,r).value[n]}}function AG(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function MG(t,n){var e=Object.create(t.prototype)
for(var r in n)e[r]=n[r]
return e}function TG(){}var CG=.7,PG=1.4285714285714286,EG="\\s*([+-]?\\d+)\\s*",kG="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",NG="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",LG=/^#([0-9a-f]{3,8})$/,RG=new RegExp("^rgb\\("+[EG,EG,EG]+"\\)$"),VG=new RegExp("^rgb\\("+[NG,NG,NG]+"\\)$"),OG=new RegExp("^rgba\\("+[EG,EG,EG,kG]+"\\)$"),GG=new RegExp("^rgba\\("+[NG,NG,NG,kG]+"\\)$"),DG=new RegExp("^hsl\\("+[kG,NG,NG]+"\\)$"),IG=new RegExp("^hsla\\("+[kG,NG,NG,kG]+"\\)$"),zG={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function FG(){return this.rgb().formatHex()}function YG(){return this.rgb().formatRgb()}function UG(t){var n,e
return t=(t+"").trim().toLowerCase(),(n=LG.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?BG(n):3===e?new qG(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?HG(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?HG(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=RG.exec(t))?new qG(n[1],n[2],n[3],1):(n=VG.exec(t))?new qG(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=OG.exec(t))?HG(n[1],n[2],n[3],n[4]):(n=GG.exec(t))?HG(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=DG.exec(t))?ZG(n[1],n[2]/100,n[3]/100,1):(n=IG.exec(t))?ZG(n[1],n[2]/100,n[3]/100,n[4]):zG.hasOwnProperty(t)?BG(zG[t]):"transparent"===t?new qG(NaN,NaN,NaN,0):null}function BG(t){return new qG(t>>16&255,t>>8&255,255&t,1)}function HG(t,n,e,r){return r<=0&&(t=n=e=NaN),new qG(t,n,e,r)}function XG(t){return t instanceof TG||(t=UG(t)),t?new qG((t=t.rgb()).r,t.g,t.b,t.opacity):new qG}function jG(t,n,e,r){return 1===arguments.length?XG(t):new qG(t,n,e,null==r?1:r)}function qG(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function WG(){return"#"+$G(this.r)+$G(this.g)+$G(this.b)}function QG(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function $G(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function ZG(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new JG(t,n,e,r)}function KG(t){if(t instanceof JG)return new JG(t.h,t.s,t.l,t.opacity)
if(t instanceof TG||(t=UG(t)),!t)return new JG
if(t instanceof JG)return t
var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2
return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new JG(a,u,s,t.opacity)}function JG(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function tD(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function nD(t,n,e,r,i){var o=t*t,a=o*t
return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}AG(TG,UG,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:FG,formatHex:FG,formatHsl:function(){return KG(this).formatHsl()},formatRgb:YG,toString:YG}),AG(qG,jG,MG(TG,{brighter:function(t){return t=null==t?PG:Math.pow(PG,t),new qG(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?CG:Math.pow(CG,t),new qG(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:WG,formatHex:WG,formatRgb:QG,toString:QG})),AG(JG,(function(t,n,e,r){return 1===arguments.length?KG(t):new JG(t,n,e,null==r?1:r)}),MG(TG,{brighter:function(t){return t=null==t?PG:Math.pow(PG,t),new JG(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?CG:Math.pow(CG,t),new JG(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r
return new qG(tD(t>=240?t-240:t+120,i,r),tD(t,i,r),tD(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))
const eD=t=>()=>t
function rD(t,n){var e=n-t
return e?function(t,n){return function(e){return t+e*n}}(t,e):eD(isNaN(t)?n:t)}const iD=function t(n){var e=function(t){return 1==(t=+t)?rD:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):eD(isNaN(n)?e:n)}}(n)
function r(t,n){var r=e((t=jG(t)).r,(n=jG(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=rD(t.opacity,n.opacity)
return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1)
function oD(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i)
for(e=0;e<i;++e)r=jG(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0
return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}oD((function(t){var n=t.length-1
return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i
return nD((e-r/n)*n,a,i,o,u)}})),oD((function(t){var n=t.length
return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n]
return nD((e-r/n)*n,i,o,a,u)}}))
var aD=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,uD=new RegExp(aD.source,"g")
function sD(t,n){var e,r,i,o=aD.lastIndex=uD.lastIndex=0,a=-1,u=[],s=[]
for(t+="",n+="";(e=aD.exec(t))&&(r=uD.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:dG(e,r)})),o=uD.lastIndex
return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t)
return u.join("")})}function cD(t,n){var e
return("number"==typeof n?dG:n instanceof UG?iD:(e=UG(n))?(n=e,iD):sD)(t,n)}function lD(t){return function(){this.removeAttribute(t)}}function fD(t){return function(){this.removeAttributeNS(t.space,t.local)}}function hD(t,n,e){var r,i,o=e+""
return function(){var a=this.getAttribute(t)
return a===o?null:a===r?i:i=n(r=a,e)}}function dD(t,n,e){var r,i,o=e+""
return function(){var a=this.getAttributeNS(t.space,t.local)
return a===o?null:a===r?i:i=n(r=a,e)}}function pD(t,n,e){var r,i,o
return function(){var a,u,s=e(this)
if(null!=s)return(a=this.getAttribute(t))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))
this.removeAttribute(t)}}function gD(t,n,e){var r,i,o
return function(){var a,u,s=e(this)
if(null!=s)return(a=this.getAttributeNS(t.space,t.local))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))
this.removeAttributeNS(t.space,t.local)}}function yD(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function _D(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function vD(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&_D(t,i)),e}return i._value=n,i}function mD(t,n){var e,r
function i(){var i=n.apply(this,arguments)
return i!==r&&(e=(r=i)&&yD(t,i)),e}return i._value=n,i}function xD(t,n){return function(){cG(this,t).delay=+n.apply(this,arguments)}}function bD(t,n){return n=+n,function(){cG(this,t).delay=n}}function wD(t,n){return function(){lG(this,t).duration=+n.apply(this,arguments)}}function SD(t,n){return n=+n,function(){lG(this,t).duration=n}}function AD(t,n){if("function"!=typeof n)throw new Error
return function(){lG(this,t).ease=n}}function MD(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".")
return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?cG:lG
return function(){var a=o(this,t),u=a.on
u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}var TD=VO.prototype.constructor
function CD(t){return function(){this.style.removeProperty(t)}}function PD(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function ED(t,n,e){var r,i
function o(){var o=n.apply(this,arguments)
return o!==i&&(r=(i=o)&&PD(t,o,e)),r}return o._value=n,o}function kD(t){return function(n){this.textContent=t.call(this,n)}}function ND(t){var n,e
function r(){var r=t.apply(this,arguments)
return r!==e&&(n=(e=r)&&kD(r)),n}return r._value=t,r}var LD=0
function RD(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function VD(){return++LD}var OD=VO.prototype
RD.prototype=function(t){return VO().transition(t)}.prototype={constructor:RD,select:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=wV(t))
for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,s,c=r[a],l=c.length,f=o[a]=new Array(l),h=0;h<l;++h)(u=c[h])&&(s=t.call(u,u.__data__,h,c))&&("__data__"in u&&(s.__data__=u.__data__),f[h]=s,sG(f[h],n,e,h,f,fG(u,e)))
return new RD(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id
"function"!=typeof t&&(t=MV(t))
for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var s,c=r[u],l=c.length,f=0;f<l;++f)if(s=c[f]){for(var h,d=t.call(s,s.__data__,f,c),p=fG(s,e),g=0,y=d.length;g<y;++g)(h=d[g])&&sG(h,n,e,g,d,p)
o.push(d),a.push(s)}return new RD(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=TV(t))
for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o)
return new RD(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error
for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],l=e[u],f=c.length,h=a[u]=new Array(f),d=0;d<f;++d)(s=c[d]||l[d])&&(h[d]=s)
for(;u<r;++u)a[u]=n[u]
return new RD(a,this._parents,this._name,this._id)},selection:function(){return new TD(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=VD(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)if(a=u[c]){var l=fG(a,n)
sG(a,t,e,c,u,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new RD(r,this._parents,t,e)},call:OD.call,nodes:OD.nodes,node:OD.node,size:OD.size,empty:OD.empty,each:OD.each,on:function(t,n){var e=this._id
return arguments.length<2?fG(this.node(),e).on.on(t):this.each(MD(e,t,n))},attr:function(t,n){var e=YV(t),r="transform"===e?xG:cD
return this.attrTween(t,"function"==typeof n?(e.local?gD:pD)(e,r,SG(this,"attr."+t,n)):null==n?(e.local?fD:lD)(e):(e.local?dD:hD)(e,r,n))},attrTween:function(t,n){var e="attr."+t
if(arguments.length<2)return(e=this.tween(e))&&e._value
if(null==n)return this.tween(e,null)
if("function"!=typeof n)throw new Error
var r=YV(t)
return this.tween(e,(r.local?vD:mD)(r,n))},style:function(t,n,e){var r="transform"==(t+="")?mG:cD
return null==n?this.styleTween(t,function(t,n){var e,r,i
return function(){var o=KV(this,t),a=(this.style.removeProperty(t),KV(this,t))
return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,CD(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o
return function(){var a=KV(this,t),u=e(this),s=u+""
return null==u&&(this.style.removeProperty(t),s=u=KV(this,t)),a===s?null:a===r&&s===i?o:(i=s,o=n(r=a,u))}}(t,r,SG(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a
return function(){var s=lG(this,t),c=s.on,l=null==s.value[a]?o||(o=CD(n)):void 0
c===e&&i===l||(r=(e=c).copy()).on(u,i=l),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+""
return function(){var a=KV(this,t)
return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="")
if(arguments.length<2)return(r=this.tween(r))&&r._value
if(null==n)return this.tween(r,null)
if("function"!=typeof n)throw new Error
return this.tween(r,ED(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this)
this.textContent=null==n?"":n}}(SG(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text"
if(arguments.length<1)return(n=this.tween(n))&&n._value
if(null==t)return this.tween(n,null)
if("function"!=typeof t)throw new Error
return this.tween(n,ND(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode
for(var e in this.__transition)if(+e!==t)return
n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id
if(t+="",arguments.length<2){for(var r,i=fG(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value
return null}return this.each((null==n?bG:wG)(e,t,n))},delay:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?xD:bD)(n,t)):fG(this.node(),n).delay},duration:function(t){var n=this._id
return arguments.length?this.each(("function"==typeof t?wD:SD)(n,t)):fG(this.node(),n).duration},ease:function(t){var n=this._id
return arguments.length?this.each(AD(n,t)):fG(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error
return this.each(function(t,n){return function(){var e=n.apply(this,arguments)
if("function"!=typeof e)throw new Error
lG(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size()
return new Promise((function(o,a){var u={value:a},s={value:function(){0==--i&&o()}}
e.each((function(){var e=lG(this,r),i=e.on
i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(s)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:OD[Symbol.iterator]}
var GD={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}}
function DD(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`)
return e}VO.prototype.interrupt=function(t){return this.each((function(){hG(this,t)}))},VO.prototype.transition=function(t){var n,e
t instanceof RD?(n=t._id,t=t._name):(n=VD(),(e=GD).time=KO(),t=null==t?null:t+"")
for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)(a=u[c])&&sG(a,t,n,c,u,e||DD(a,n))
return new RD(r,this._parents,t,n)}
const ID=t=>()=>t
function zD(t,n){let{sourceEvent:e,target:r,transform:i,dispatch:o}=n
Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:o}})}function FD(t,n,e){this.k=t,this.x=n,this.y=e}FD.prototype={constructor:FD,scale:function(t){return 1===t?this:new FD(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new FD(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}}
var YD=new FD(1,0,0)
function UD(t){for(;!t.__zoom;)if(!(t=t.parentNode))return YD
return t.__zoom}function BD(t){t.stopImmediatePropagation()}function HD(t){t.preventDefault(),t.stopImmediatePropagation()}function XD(t){return!(t.ctrlKey&&"wheel"!==t.type||t.button)}function jD(){var t=this
return t instanceof SVGElement?(t=t.ownerSVGElement||t).hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]:[[0,0],[t.clientWidth,t.clientHeight]]}function qD(){return this.__zoom||YD}function WD(t){return-t.deltaY*(1===t.deltaMode?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function QD(){return navigator.maxTouchPoints||"ontouchstart"in this}function $D(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1]
return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}function ZD(){var t,n,e,r=XD,i=jD,o=$D,a=WD,u=QD,s=[0,1/0],c=[[-1/0,-1/0],[1/0,1/0]],l=250,f=FO,h=xV("start","zoom","end"),d=500,p=0,g=10
function y(t){t.property("__zoom",qD).on("wheel.zoom",S).on("mousedown.zoom",A).on("dblclick.zoom",M).filter(u).on("touchstart.zoom",T).on("touchmove.zoom",C).on("touchend.zoom touchcancel.zoom",P).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function _(t,n){return(n=Math.max(s[0],Math.min(s[1],n)))===t.k?t:new FD(n,t.x,t.y)}function v(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k
return r===t.x&&i===t.y?t:new FD(t.k,r,i)}function m(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function x(t,n,e,r){t.on("start.zoom",(function(){b(this,arguments).event(r).start()})).on("interrupt.zoom end.zoom",(function(){b(this,arguments).event(r).end()})).tween("zoom",(function(){var t=this,o=arguments,a=b(t,o).event(r),u=i.apply(t,o),s=null==e?m(u):"function"==typeof e?e.apply(t,o):e,c=Math.max(u[1][0]-u[0][0],u[1][1]-u[0][1]),l=t.__zoom,h="function"==typeof n?n.apply(t,o):n,d=f(l.invert(s).concat(c/l.k),h.invert(s).concat(c/h.k))
return function(t){if(1===t)t=h
else{var n=d(t),e=c/n[2]
t=new FD(e,s[0]-n[0]*e,s[1]-n[1]*e)}a.zoom(null,t)}}))}function b(t,n,e){return!e&&t.__zooming||new w(t,n)}function w(t,n){this.that=t,this.args=n,this.active=0,this.sourceEvent=null,this.extent=i.apply(t,n),this.taps=0}function S(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i]
if(r.apply(this,arguments)){var u=b(this,e).event(t),l=this.__zoom,f=Math.max(s[0],Math.min(s[1],l.k*Math.pow(2,a.apply(this,arguments)))),h=YO(t)
if(u.wheel)u.mouse[0][0]===h[0]&&u.mouse[0][1]===h[1]||(u.mouse[1]=l.invert(u.mouse[0]=h)),clearTimeout(u.wheel)
else{if(l.k===f)return
u.mouse=[h,l.invert(h)],hG(this),u.start()}HD(t),u.wheel=setTimeout(d,150),u.zoom("mouse",o(v(_(l,f),u.mouse[0],u.mouse[1]),u.extent,c))}function d(){u.wheel=null,u.end()}}function A(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a]
if(!e&&r.apply(this,arguments)){var u=b(this,i,!0).event(t),s=OO(t.view).on("mousemove.zoom",g,!0).on("mouseup.zoom",y,!0),l=YO(t,f),f=t.currentTarget,h=t.clientX,d=t.clientY
DO(t.view),BD(t),u.mouse=[l,this.__zoom.invert(l)],hG(this),u.start()}function g(t){if(HD(t),!u.moved){var n=t.clientX-h,e=t.clientY-d
u.moved=n*n+e*e>p}u.event(t).zoom("mouse",o(v(u.that.__zoom,u.mouse[0]=YO(t,f),u.mouse[1]),u.extent,c))}function y(t){s.on("mousemove.zoom mouseup.zoom",null),IO(t.view,u.moved),HD(t),u.event(t).end()}}function M(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a]
if(r.apply(this,arguments)){var u=this.__zoom,s=YO(t.changedTouches?t.changedTouches[0]:t,this),f=u.invert(s),h=u.k*(t.shiftKey?.5:2),d=o(v(_(u,h),s,f),i.apply(this,e),c)
HD(t),l>0?OO(this).transition().duration(l).call(x,d,s,t):OO(this).call(y.transform,d,s,t)}}function T(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a]
if(r.apply(this,arguments)){var u,s,c,l,f=e.touches,h=f.length,p=b(this,o,e.changedTouches.length===h).event(e)
for(BD(e),s=0;s<h;++s)l=[l=YO(c=f[s],this),this.__zoom.invert(l),c.identifier],p.touch0?p.touch1||p.touch0[2]===l[2]||(p.touch1=l,p.taps=0):(p.touch0=l,u=!0,p.taps=1+!!t)
t&&(t=clearTimeout(t)),u&&(p.taps<2&&(n=l[0],t=setTimeout((function(){t=null}),d)),hG(this),p.start())}}function C(t){if(this.__zooming){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r]
var i,a,u,s,l=b(this,e).event(t),f=t.changedTouches,h=f.length
for(HD(t),i=0;i<h;++i)u=YO(a=f[i],this),l.touch0&&l.touch0[2]===a.identifier?l.touch0[0]=u:l.touch1&&l.touch1[2]===a.identifier&&(l.touch1[0]=u)
if(a=l.that.__zoom,l.touch1){var d=l.touch0[0],p=l.touch0[1],g=l.touch1[0],y=l.touch1[1],m=(m=g[0]-d[0])*m+(m=g[1]-d[1])*m,x=(x=y[0]-p[0])*x+(x=y[1]-p[1])*x
a=_(a,Math.sqrt(m/x)),u=[(d[0]+g[0])/2,(d[1]+g[1])/2],s=[(p[0]+y[0])/2,(p[1]+y[1])/2]}else{if(!l.touch0)return
u=l.touch0[0],s=l.touch0[1]}l.zoom("touch",o(v(a,u,s),l.extent,c))}}function P(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o]
if(this.__zooming){var a,u,s=b(this,i).event(t),c=t.changedTouches,l=c.length
for(BD(t),e&&clearTimeout(e),e=setTimeout((function(){e=null}),d),a=0;a<l;++a)u=c[a],s.touch0&&s.touch0[2]===u.identifier?delete s.touch0:s.touch1&&s.touch1[2]===u.identifier&&delete s.touch1
if(s.touch1&&!s.touch0&&(s.touch0=s.touch1,delete s.touch1),s.touch0)s.touch0[1]=this.__zoom.invert(s.touch0[0])
else if(s.end(),2===s.taps&&(u=YO(u,this),Math.hypot(n[0]-u[0],n[1]-u[1])<g)){var f=OO(this).on("dblclick.zoom")
f&&f.apply(this,arguments)}}}return y.transform=function(t,n,e,r){var i=t.selection?t.selection():t
i.property("__zoom",qD),t!==i?x(t,n,e,r):i.interrupt().each((function(){b(this,arguments).event(r).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()}))},y.scaleBy=function(t,n,e,r){y.scaleTo(t,(function(){var t=this.__zoom.k,e="function"==typeof n?n.apply(this,arguments):n
return t*e}),e,r)},y.scaleTo=function(t,n,e,r){y.transform(t,(function(){var t=i.apply(this,arguments),r=this.__zoom,a=null==e?m(t):"function"==typeof e?e.apply(this,arguments):e,u=r.invert(a),s="function"==typeof n?n.apply(this,arguments):n
return o(v(_(r,s),a,u),t,c)}),e,r)},y.translateBy=function(t,n,e,r){y.transform(t,(function(){return o(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),i.apply(this,arguments),c)}),null,r)},y.translateTo=function(t,n,e,r,a){y.transform(t,(function(){var t=i.apply(this,arguments),a=this.__zoom,u=null==r?m(t):"function"==typeof r?r.apply(this,arguments):r
return o(YD.translate(u[0],u[1]).scale(a.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,c)}),r,a)},w.prototype={event:function(t){return t&&(this.sourceEvent=t),this},start:function(){return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){var n=OO(this.that).datum()
h.call(t,this.that,new zD(t,{sourceEvent:this.sourceEvent,target:y,type:t,transform:this.that.__zoom,dispatch:h}),n)}},y.wheelDelta=function(t){return arguments.length?(a="function"==typeof t?t:ID(+t),y):a},y.filter=function(t){return arguments.length?(r="function"==typeof t?t:ID(!!t),y):r},y.touchable=function(t){return arguments.length?(u="function"==typeof t?t:ID(!!t),y):u},y.extent=function(t){return arguments.length?(i="function"==typeof t?t:ID([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),y):i},y.scaleExtent=function(t){return arguments.length?(s[0]=+t[0],s[1]=+t[1],y):[s[0],s[1]]},y.translateExtent=function(t){return arguments.length?(c[0][0]=+t[0][0],c[1][0]=+t[1][0],c[0][1]=+t[0][1],c[1][1]=+t[1][1],y):[[c[0][0],c[0][1]],[c[1][0],c[1][1]]]},y.constrain=function(t){return arguments.length?(o=t,y):o},y.duration=function(t){return arguments.length?(l=+t,y):l},y.interpolate=function(t){return arguments.length?(f=t,y):f},y.on=function(){var t=h.on.apply(h,arguments)
return t===h?y:t},y.clickDistance=function(t){return arguments.length?(p=(t=+t)*t,y):Math.sqrt(p)},y.tapDistance=function(t){return arguments.length?(g=+t,y):g},y}UD.prototype=FD.prototype}}])
