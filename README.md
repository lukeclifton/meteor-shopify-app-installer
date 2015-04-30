### Meteor JS Package
# Shopify App Installer

A simple package to manually install a Shopify app from outside Shopify app store.

If using standalone, as a minimum, you will need to define the following options:

```
ShopifyApi.options = {
    appUrl: 	'Your app URL',
    apiKey: 	'Your API key',
    scopes: 	'Your app scopes',
}
```

The redirect url is set to redirect to the following route in your app: '/shopify/authenticate'.