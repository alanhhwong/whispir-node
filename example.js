var whispir = require('./whispir');

whispir.setup("<API KEY>", "<AUTHORIZATION>");

var actions = whispir.createMessageAction();
actions.addSMS("test");
//actions.addEmail("<div>hi</div>", "From Alan", "text/plain");

/*
Promises
*/

whispir.sendMessage('<Tel#>', '<Subject>', actions).then(function (result) {
	console.log(result);
}).fail (function (error) {
	console.log(error);
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