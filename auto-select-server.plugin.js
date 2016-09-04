//META{"name":"autoSelectServer"}*//
function autoSelectServer(){}

// https://github.com/tony311/betterdiscord-plugins

autoSelectServer.prototype.getName          = function() { return "Auto-Select Server"; }
autoSelectServer.prototype.getDescription   = function() { return "Selects the server you're speaking in on startup.";  }
autoSelectServer.prototype.getVersion       = function() { return "1.0.0"; }
autoSelectServer.prototype.getAuthor        = function() { return "TonyLemur"; }

autoSelectServer.prototype.load             = function() {}
autoSelectServer.prototype.unload           = function() {}
autoSelectServer.prototype.stop             = function() {}
autoSelectServer.prototype.onMessage        = function() {}
autoSelectServer.prototype.onSwitch         = function() {}
autoSelectServer.prototype.getSettingsPanel = function() {}

autoSelectServer.prototype.start = function() {
	var srv = $(".audio").find("a")[0];
	if (srv) srv.click();
}
