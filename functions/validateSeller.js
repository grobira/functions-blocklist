exports.handler = function (context, event, callback) {

    const response = new Twilio.Response();

    const { sellers_data, customer_choice } = event;

    const { seller_data } = JSON.parse(sellers_data)


    response.appendHeader('Content-Type', 'application/json');
    response.setBody({ name: seller_data[customer_choice - 1].name, ident: seller_data[customer_choice - 1].ident })


    callback(null, response);

};