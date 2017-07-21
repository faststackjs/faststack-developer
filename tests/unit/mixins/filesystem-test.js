import Ember from 'ember';
import FilesystemMixin from 'faststack-developer/mixins/filesystem';
import { module, test } from 'qunit';

module('Unit | Mixin | filesystem');

// Replace this with your real tests.
test('it works', function(assert) {
  let FilesystemObject = Ember.Object.extend(FilesystemMixin);
  let subject = FilesystemObject.create();
  assert.ok(subject);
});
