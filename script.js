if(navigator.appVersion.charAt(0) >= "3") {
var img = new Array();
img[0] = new Image();  img[0].src = "../cmn/ovrvw.gif";
img[1] = new Image();  img[1].src = "../cmn/ovrvw_l.gif";
img[2] = new Image();  img[2].src = "../cmn/ovrvw_w.gif";
img[3] = new Image();  img[3].src = "../cmn/cnsltng.gif";
img[4] = new Image();  img[4].src = "../cmn/cnsltng_l.gif";
img[5] = new Image();  img[5].src = "../cmn/cnsltng_w.gif";
img[6] = new Image();  img[6].src = "../cmn/dsgnng.gif";
img[7] = new Image();  img[7].src = "../cmn/dsgnng_l.gif";
img[8] = new Image();  img[8].src = "../cmn/dsgnng_w.gif";
img[9] = new Image();  img[9].src = "../cmn/wbusnss.gif";
img[10] = new Image();  img[10].src = "../cmn/wbusnss_l.gif";
img[11] = new Image();  img[11].src = "../cmn/wbusnss_w.gif";
img[12] = new Image();  img[12].src = "../cmn/otln.gif";
img[13] = new Image();  img[13].src = "../cmn/otln_l.gif";

img[15] = new Image();  img[15].src = "../cmn/mssg.gif";
img[16] = new Image();  img[16].src = "../cmn/mssg_l.gif";
img[17] = new Image();  img[17].src = "../cmn/mssg_w.gif";
img[18] = new Image();  img[18].src = "../cmn/prfl.gif";
img[19] = new Image();  img[19].src = "../cmn/prfl_l.gif";
img[20] = new Image();  img[20].src = "../cmn/prfl_w.gif";
img[21] = new Image();  img[21].src = "../cmn/flw.gif";
img[22] = new Image();  img[22].src = "../cmn/flw_l.gif";
img[23] = new Image();  img[23].src = "../cmn/flw_w.gif";
img[24] = new Image();  img[24].src = "../cmn/achvmnts.gif";
img[25] = new Image();  img[25].src = "../cmn/achvmnts_l.gif";
img[26] = new Image();  img[26].src = "../cmn/achvmnts_w.gif";
img[27] = new Image();  img[27].src = "../cmn/ntwrk.gif";
img[28] = new Image();  img[28].src = "../cmn/ntwrk_l.gif";
img[29] = new Image();  img[29].src = "../cmn/ntwrk_w.gif";
img[30] = new Image();  img[30].src = "../cmn/trnrnd.gif";
img[31] = new Image();  img[31].src = "../cmn/trnrnd_l.gif";
img[32] = new Image();  img[32].src = "../cmn/trnrnd_w.gif";
img[33] = new Image();  img[33].src = "../cmn/mbi.gif";
img[34] = new Image();  img[34].src = "../cmn/mbi_l.gif";
img[35] = new Image();  img[35].src = "../cmn/mbi_w.gif";
img[36] = new Image();  img[36].src = "../cmn/mda.gif";
img[37] = new Image();  img[37].src = "../cmn/mda_l.gif";
img[38] = new Image();  img[38].src = "../cmn/mda_w.gif";
img[39] = new Image();  img[39].src = "../cmn/rsrch.gif";
img[40] = new Image();  img[40].src = "../cmn/rsrch_l.gif";
img[41] = new Image();  img[41].src = "../cmn/rsrch_w.gif";
img[42] = new Image();  img[42].src = "../cmn/otlnc_w.gif";
img[43] = new Image();  img[43].src = "../cmn/otlnd_w.gif";
img[44] = new Image();  img[44].src = "../cmn/otlnw_w.gif";

img[45] = new Image();  img[45].src = "../cmn/ovrvw_l2.gif";
img[46] = new Image();  img[46].src = "../cmn/cnsltng_l2.gif";
img[47] = new Image();  img[47].src = "../cmn/dsgnng_l2.gif";
img[48] = new Image();  img[48].src = "../cmn/wbusnss_l2.gif";
img[49] = new Image();  img[49].src = "../cmn/hdr_06.gif";

}
function _in(nam,num) {
if(navigator.appVersion.charAt(0) >= "3") {
document.images[nam].src = img[num].src;
} else { }
}
function _out(nam,num) {
document.images[nam].src = img[num].src;
}
