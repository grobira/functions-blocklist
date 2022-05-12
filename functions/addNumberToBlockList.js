const Twilio = require('twilio');

exports.handler = function (context, event, callback) {

    const blockedList = Runtime.getAssets()['/blockedNumbers.json'].open();

    const response = new Twilio.Response();

    console.log("Firts Message ", event.firstMessage)
    console.log("Last Message ", event.lastMessage)


    if (event.firstMessage == event.lastMessage) {
        console.log(`Phone Number ${event.phoneNumber} is a potencial bot. Please add this to the block list.`)

        response.appendHeader('Content-Type', 'application/json');
        response.setBody({ status: `Phone Number ${event.phoneNumber} is a potencial bot. Please add this to the block list.`, phoneNumber: event.phoneNumber })
    } else {
        console.log(`Phone Number ${event.phoneNumber} is not a potencial bot.`)

        response.appendHeader('Content-Type', 'application/json');
        response.setBody({ status: `Phone Number ${event.phoneNumber} is not a potencial bot.`, phoneNumber: event.phoneNumber })
    }

    response.setStatusCode(200);


    callback(null, response);

};