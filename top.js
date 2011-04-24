function FlashPlayerVer(){
var flashplayer_ver = 0;
if(navigator.plugins && navigator.mimeTypes['application/x-shockwave-flash']){
var plugin = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
if(plugin){flashplayer_ver = parseInt(plugin.description.match(/\d+\.\d+/));}
}
else{
try{
var flashOCX = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);
if(flashOCX){flashplayer_ver = parseInt(flashOCX[0]);}
}catch(e){}
}
if(flashplayer_ver <= 6){flashplayer_ver = 0;}
return flashplayer_ver;
}

var MM_contentVersion = 6;
var MM_PluginVersion = FlashPlayerVer();
var MM_FlashCanPlay = MM_PluginVersion >= MM_contentVersion;
if ( MM_FlashCanPlay ) {
	document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
	document.write('  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ');
	document.write(' ID="top" WIDTH="550" HEIGHT="330" ALIGN="">');
	document.write(' <PARAM NAME=movie VALUE="top.swf"> <PARAM NAME=quality VALUE=high> <PARAM NAME=bgcolor VALUE=#FFFFFF>  '); 
	document.write(' <EMBED src="top.swf" quality=high bgcolor=#FFFFFF  ');
	document.write(' swLiveConnect=FALSE WIDTH="550" HEIGHT="330" NAME="top" ALIGN=""');
	document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">');
	document.write(' </EMBED>');
	document.write(' </OBJECT>');
} else{
	document.write('<IMG SRC="img/acd_img.jpg" WIDTH="550" HEIGHT="330" usemap="#top" BORDER=0>');
}

