// Define route
Router.route('shopifyAppInstaller', {
  path: '/shopify/app-installer',
});

Template.shopifyAppInstaller.events({
    'click #install': function() {

        var $shopName = $('#shopName').val();

        // Build the shopify oauth redirect url
        var url = 'https://' + $shopName + '.myshopify.com/admin/oauth/authorize?' +
            'client_id=' + ShopifyApi.options.apiKey +
            '&scope=' + ShopifyApi.options.scopes +
            '&redirect_uri=' + ShopifyApi.options.appUrl + '/shopify/authenticate';

        // Do the redirect to shopify
        window.location.replace(url);
    }
});