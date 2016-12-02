'use strict';

var cool_token = process.env['COOL_SECRET'];
var cool_key = process.env['COOL_KEY'];
var server_message = process.env['SERVER_MESSAGE'];
var send_from = process.env['SEND_FROM'];
var send_to = process.env['SEND_TO'].replace(/\|/g, ',');

console.log("cool_token : %s",  cool_token);
console.log("cool_key : %s",  cool_key);
console.log("server_message : %s",  server_message);
console.log("send_from : %s",  send_from);
console.log("send_to : %s",  send_to);

var coolsms = require('node-coolsms')
coolsms.init({
  secret: cool_token,
  key: cool_key,
});

exports.handler = (event, context, callback) => {
  coolsms.balance(function (err, result) {
    console.log('result err=%s, result', err, result);
  });

  coolsms.send({
    to: send_to,
    from: send_from,
    type: 'SMS',
    text: server_message,
  }, function (err, result) {
    console.log('result err=%s, result', err, result);
  });
};
