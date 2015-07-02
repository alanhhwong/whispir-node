function MessageAction() {
}

MessageAction.prototype.addSMS = function (body) {
	this.body = body;
}

MessageAction.prototype.addEmail = function (body, footer, type) {
	var email = {"body": body, "footer": footer, "type": type};
	this.email = email;
}

module.exports = MessageAction;