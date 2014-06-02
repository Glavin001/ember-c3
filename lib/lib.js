require('build/temp/template');

Ember.C3 = Ember.Namespace.create();
Ember.C3.VERSION = '0.1.2';

Ember.libraries.register('Ember C3', Ember.C3.VERSION);

require('lib/components/*');
