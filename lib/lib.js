require('build/temp/template');

Ember.C3 = Ember.Namespace.create();
Ember.C3.VERSION = '0.0.0';

Ember.libraries.register('ember-c3', Ember.C3.VERSION);

require('lib/components/*');
