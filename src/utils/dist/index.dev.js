"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = getToken;

var _constants = require("../constants");

function getToken() {
  var body, response, json;
  return regeneratorRuntime.async(function getToken$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          body = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              sessionId: "test6we9999j9e8",
              // enter your sessionId
              apiKey: "27936faa8ad60e4a3d3ac2b422eca58f6cc855a99fb42aca3ed4" // enter your app secret
              // user: {  Optionally, you can provide user display information for better tracking and user experience
              //     id: <user_id>
              //     name: <user_name>,
              //     avatar: <user_avatar>,
              //     email: <user_email>
              // }

            })
          };
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(_constants.GENERATE_TOKEN_URL, body));

        case 4:
          response = _context.sent;

          if (!response.ok) {
            _context.next = 12;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          json = _context.sent;
          return _context.abrupt("return", json.token);

        case 12:
          console.log(response.status);

        case 13:
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          console.log('error', _context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 15]]);
}