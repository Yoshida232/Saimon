"use strict";

var utils = require("../utils");
var log = require("npmlog");

module.exports = function (defaultFuncs, api, ctx) {
  return function unsendMessage(messageID, callback) {
    // Initialize promise resolve and reject functions
    var resolveFunc, rejectFunc;
    var returnPromise = new Promise(function (resolve, reject) {
      resolveFunc = resolve;
      rejectFunc = reject;
    });

    // Define a function to handle success or failure
    var handleResponse = function (err, result) {
      if (err) {
        if (callback) callback(err); // Callback with error if provided
        rejectFunc(err); // Reject the promise
      } else {
        if (callback) callback(null, result); // Callback with result if provided
        resolveFunc(result); // Resolve the promise
      }
    };

    var form = {
      message_id: messageID
    };

    // Perform the POST request and handle the response
    defaultFuncs
      .post("https://www.facebook.com/messaging/unsend_message/", ctx.jar, form)
      .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
      .then(function (resData) {
        if (resData.error) throw resData.error; // Throw if there is an error in the response
        handleResponse(null, resData); // No error, handle success
      })
      .catch(function (err) {
        log.error("unsendMessage", err);
        handleResponse(err); // Handle error
      });

    // Return the promise if no callback is provided
    return callback ? undefined : returnPromise;
  };
};
