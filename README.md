### Meteor JS Package
# shopify-app-installer

A simple package to manually install a Shopify app from outside Shopify app store.

[View package on Atmosphere](https://atmospherejs.com/cliffers/shopify-app-installer)

#### Install package

```
meteor add cliffers:shopify-app-installer
```

#### Use package

If using standalone, as a minimum, you will need to define the following options in your Meteor app:

```
ShopifyApi.options = {
    appUrl: 	'Your app URL',
    apiKey: 	'Your API key',
    scopes: 	'Your app scopes',
}
```
One the package is installed, navigate to **'/shopify/app-installer'**.

Add in your shop name (without the '.myshopify.com' part) and hit 'Install App' button.

You will then be redirected to Shopify to install the app in the given shop.

The redirect url is set to redirect to the following route in your app: **'/shopify/authenticate'**.