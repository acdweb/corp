if(navigator.appVersion.charAt(0) >= "3") {
var img = new Array();
img[0] = new Image();  img[0].src = "cmn/ovrvw.gif";
img[1] = new Image();  img[1].src = "cmn/ovrvw_l.gif";
img[2] = new Image();  img[2].src = "cmn/ovrvw_w.gif";
img[3] = new Image();  img[3].src = "cmn/cnsltng.gif";
img[4] = new Image();  img[4].src = "cmn/cnsltng_l.gif";
img[5] = new Image();  img[5].src = "cmn/cnsltng_w.gif";
img[6] = new Image();  img[6].src = "cmn/dsgnng.gif";
img[7] = new Image();  img[7].src = "cmn/dsgnng_l.gif";
img[8] = new Image();  img[8].src = "cmn/dsgnng_w.gif";
img[9] = new Image();  img[9].src = "cmn/wbusnss.gif";
img[10] = new Image();  img[10].src = "cmn/wbusnss_l.gif";
img[11] = new Image();  img[11].src = "cmn/wbusnss_w.gif";
img[12] = new Image();  img[12].src = "img/indx_btn1.gif";
img[13] = new Image();  img[13].src = "img/indx_btn1_l.gif";
img[14] = new Image();  img[14].src = "img/indx_btn2.gif";
img[15] = new Image();  img[15].src = "img/indx_btn2_l.gif";
img[16] = new Image();  img[16].src = "img/indx_btn3.gif";
img[17] = new Image();  img[17].src = "img/indx_btn3_l.gif";
img[18] = new Image();  img[18].src = "img/indx_btn4.gif";
img[19] = new Image();  img[19].src = "img/indx_btn4_l.gif";
}
function _in(nam,num) {
if(navigator.appVersion.charAt(0) >= "3") {
document.images[nam].src = img[num].src;
} else { }
}
function _out(nam,num) {
document.images[nam].src = img[num].src;
}

