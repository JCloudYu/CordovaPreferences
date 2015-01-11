var exec = require("cordova/exec"),
	cordova = {preferences:{
		get: function(prefName, callback) {
			callback = callback || doNothing;
			prefName = prefName || "";
			exec(callback, doNothing, "CordovaPreferences", "get", [ prefName ]);
		},
		all: function(callback) {
			callback = callback || doNothing;
			exec(callback, doNothing, "CordovaPreferences", "all", []);
		}
	}};

function doNothing(){}
module.exports = cordova.preferences;