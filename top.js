function FlashPlayerVer(){
//初期設定
var flashplayer_ver = 0;
//IE以外の場合
if(navigator.plugins && navigator.mimeTypes['application/x-shockwave-flash']){
var plugin = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
//Flash Playerがインストールされている場合
if(plugin){flashplayer_ver = parseInt(plugin.description.match(/\d+\.\d+/));}
}
//IEの場合、もしくはFlash Playerがインストールされていない場合
else{
//IEでFlash Playerがインストールされている場合
try{
var flashOCX = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);
if(flashOCX){flashplayer_ver = parseInt(flashOCX[0]);}
}catch(e){}
}
//Flash Playerがインストールされていない、もしくはバージョンが6以下の場合
if(flashplayer_ver <= 6){flashplayer_ver = 0;}
return flashplayer_ver;
} 

//alert (FlashPlayerVer());

if (FlashPlayerVer()>=6) {
	document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
	document.write('  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ');
	document.write(' ID="top" WIDTH="550" HEIGHT="330" ALIGN="">');
	document.write(' <PARAM NAME=movie VALUE="top.swf"> <PARAM NAME=quality VALUE=high> <PARAM NAME=bgcolor VALUE=#FFFFFF>  '); 
	document.write(' <EMBED src="top.swf" quality=high bgcolor=#FFFFFF  ');
	document.write(' swLiveConnect=FALSE WIDTH="550" HEIGHT="330" NAME="top" ALIGN=""');
	document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">');
	document.write(' </EMBED>');
	document.write(' </OBJECT>');
} else {
        document.write('<IMG SRC="img/acd_img.jpg" WIDTH="550" HEIGHT="330" usemap="#top" BORDER=0>');
}
