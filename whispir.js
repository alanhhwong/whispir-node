var request = require('request');
var Q = require('q');
var MessageAction = require('./MessageAction');

var options = {
	method: 'POST',
	url: 'https://api.whispir.com/messages',
	qs: { apikey: '' },
	headers: {
		'content-type': 'application/vnd.whispir.message-v1+json',
		accept: 'application/vnd.whispir.message-v1+json',
    	authorization: ''	
	},
	body: ''
};

exports.setup = function(apikey, authorization) {
	options.qs.apikey = apikey;
	options.headers.authorization = authorization;
}

exports.createMessageAction = function() {
	return new MessageAction();
}

exports.sendMessage = function(recipient, subject, action, callback) {
	var deferred = Q.defer();

	//TODO: add appropriate checks
	if (recipient && subject) {
		action.to = recipient;
		action.subject = subject;

		options.body = JSON.stringify(action);
		
		request(options, function (error, response, body) {
			if (error) throw new Error(error);
			deferred.resolve(body);
		});
	}
	else {
		//TODO: add appropriate error message
		deferred.reject("Invalid recipient/subject");
	}

	deferred.promise.nodeify(callback);
	return deferred.promise;
}