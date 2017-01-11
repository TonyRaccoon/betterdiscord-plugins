//META{"name":"autoSelectServer"}*//

/*@cc_on
@if (@_jscript)
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    shell.Popup("It looks like you mistakenly tried to run me directly. (don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) shell.Popup("I'm in the correct folder already.\nJust reload Discord with Ctrl+R.", 0, "I'm already installed", 0x40);
    else if (!fs.FolderExists(pathPlugins)) shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!\nJust reload Discord with Ctrl+R.", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else @*/

function autoSelectServer(){}

// https://github.com/tony311/betterdiscord-plugins

autoSelectServer.prototype.getName          = function() { return "Auto-Select Server"; }
autoSelectServer.prototype.getDescription   = function() { return "Selects the server you're speaking in on startup.";  }
autoSelectServer.prototype.getVersion       = function() { return "1.0.1"; }
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

/*@end @*/