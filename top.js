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
