var assert = require('assert');
var whispir = require('../whispir');

whispir.setup("<API KEY>", "<AUTHORIZATION>");

var actions = whispir.createMessageAction();
actions.addSMS("test");
//actions.addEmail("<div>hi</div>", "From Alan", "text/plain");

/*
Promises
*/
describe('Sending SMS', function() {
	it('Whispir accepts request', function (done) {
		whispir.sendMessage('<Tel#>', '<Subject>', actions).then(function (result) {
			assert.equal("Your request has been accepted for processing", result);
			done();
		}).fail (function (error) {
			console.log(error);
		});
	});
});

/*
Callback
*/

/*
whispir.sendMessage('+6586992090', 'Test from Whispir', actions, function(error, result) {
	if (error) {
		console.log(error);
	}
	else {
		console.log(result);
	}
});
*/