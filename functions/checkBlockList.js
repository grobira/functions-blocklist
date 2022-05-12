const Twilio = require('twilio');

exports.handler = function (context, event, callback) {

  const blockedList = Runtime.getAssets()['/blockedNumbers.json'].open();

  const response = new Twilio.Response();


  console.log(!blockedList.includes(event.phoneNumber), event.phoneNumber, blockedList)
  if (!blockedList.includes(event.phoneNumber)) {
    response.appendHeader('Content-Type', 'application/json');
    response.setBody({ blocked: false })
    response.setStatusCode(200);
  } else {
    response.appendHeader('Content-Type', 'plain/text');
    response.setBody(`${event.phoneNumber} is a blocked number.`);
    response.setStatusCode(500);
  }

  callback(null, response);

};