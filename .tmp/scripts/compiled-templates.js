Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>\n    <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Ember C3</a>\n        </div>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"https://github.com/Glavin001/ember-c3\" target=\"_blank\">Source</a></li>\n            <li><a href=\"https://github.com/Glavin001/ember-c3/issues\" target=\"_blank\">Issues/Suggestions</a></li>\n        </ul>\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n        </div>\n    </nav>\n\n    <div class=\"container\" id=\"main\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"\">\n    <h1 class=\"\">Welcome to Ember C3</h1>\n\n    <br/>\n\n    <h2>Generated Chart</h2>\n    <p>See the <strong>data</strong> in the JSON editor below.</p>\n\n    ");
  hashContexts = {'data': depth0};
  hashTypes = {'data': "ID"};
  options = {hash:{
    'data': ("model")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['c3-chart'] || depth0['c3-chart']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "c3-chart", options))));
  data.buffer.push("\n\n    <h3>Usage In Ember</h3>\n    <p>See <a href=\"https://github.com/Glavin001/ember-c3/tree/master/app\" target=\"_blank\">example app source code on GitHub</a>.</p>\n    <div class=\"well\">\n          ");
  data.buffer.push("{{c3-chart data=model}}\n    </div>\n\n    <hr/>\n\n    <h2>Chart Editor</h2>\n    <p>\n      Edit the <strong>data</strong> below, powered by\n      <a href=\"https://github.com/Glavin001/ember-jsoneditor\" target=\"_blank\">Ember JSONEditor</a>,\n      to see the changes thanks to two-way data binding support.\n      The <strong>data</strong> below is from the\n      <a href=\"http://c3js.org/samples/chart_combination.html\" target=\"_blank\">Combination Chart</a>\n      in the <a href=\"http://c3js.org/examples.html\" target=\"_blank\">C3 examples</a>.\n     </p>\n    ");
  hashContexts = {'json': depth0};
  hashTypes = {'json': "ID"};
  options = {hash:{
    'json': ("model")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['json-editor'] || depth0['json-editor']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "json-editor", options))));
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});