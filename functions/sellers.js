exports.handler = function (context, event, callback) {

    const response = new Twilio.Response();

    const sellers = [
        {
            name: "Seller A",
            ident: "123.123.000"
        },
        {
            name: "Seller b",
            ident: "678.687.000"
        }
    ]

    let text = "";

    sellers.forEach((el, index) => {
        text = text + "\n" + `${index + 1}- ${el.name} | ${el.ident}`
    })


    response.appendHeader('Content-Type', 'application/json');
    response.setBody({ status: 2, seller_data: sellers, seller_text: text })


    callback(null, response);

};