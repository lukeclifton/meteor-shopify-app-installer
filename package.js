Package.describe({
  name: 'cliffers:shopify-app-installer',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple package to manually install a shopify app from outside shopify app store.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lukeclifton/meteor-shopify-app-installer.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('templating');
  api.use('iron:router@1.0.5');
  api.addFiles('shopify-app-installer.html', 'client');
  api.addFiles('shopify-app-installer.js', 'client');
});
