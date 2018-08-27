// JavaScript Document
var fc_fw="100%";  //广告宽度,单位px,如自适应宽度就改为100%;
var fc_fh="80px";    //广告高度,单位px
var fc_fsrc=['//img.sogoucdn.com/app/a/100520146/84A1F62971C244F00F194925A6F5F4AC'];//图片地址[个数要和链接个数对应]
var fc_fl=['https://user.qzone.qq.com/2493005079/blog/1531720120'];//图片链接地址[个数要和图片地址个数对应]


//样式
document.writeln("<style type=\"text/css\">");
document.writeln("*{margin:0;padding:0; list-style:none;}");
document.writeln(".fc_foot{width:100%; position:fixed; bottom:0px; z-index_f:9999;}");
document.writeln(".f_skyf{ width:"+fc_fw+"; height:"+fc_fh+"; margin:0px auto; position:relative; z-index_f:9000; overflow:hidden;}");
document.writeln(".f_skyf ul{position:absolute; left:0; top:0; width:"+fc_fw+"; height:"+fc_fh+";}");
document.writeln(".f_skyf ul li{ width:"+fc_fw+"; height:"+fc_fh+";}");
document.writeln(".f_skyf ol{ position:absolute; right:5px; bottom:10px;}");
document.writeln(".f_skyf ol li{width:15px; height:15px; line-height:15px; dispaly:inline-block;  background:#ddd;border:1px solid #969591;border-radius:50%; color:#959490;float:left; margin-left:5px; font-size:10px; text-align:center;cursor:pointer;}");
document.writeln(".f_skyf ul li img{width:"+fc_fw+"; height:"+fc_fh+";}");
document.writeln(".f_skyf ol .on{background:#8F9E9E;color:#fff;}");
document.writeln(".f_skyf .btn_closef{ position:absolute; width:38px; text-align:center; height:16px; line-height:16px; border:1px #bcbcbc solid; background-color:#d3d3d3; color:#666666; top:0; right:0; border-bottom-left-radius:6px; font-size:12px;filter:alpha(Opacity=50);-moz-opacity:0.7;opacity: 0.7;}");
document.writeln("</style>");

document.writeln("<div class=\"fc_foot\" id=\"fc_foot\">");
document.writeln("<div class=\"f_skyf\" id=\"f_skyf\">");
document.writeln("<ul id=\"f_str_f\">");
for(var k = 0; k < fc_fsrc.length; k++){
document.writeln("<li><a href=\""+fc_fl[k]+"\" target=\"_blank\"><img src=\""+fc_fsrc[k]+"\" /></a></li>");
}
document.writeln("</ul>");
document.writeln("<ol id=\"flist_f\">");
for(var h = 0; h < fc_fsrc.length; h++){
	if(h==0){
		document.writeln("<li class=\"on\">1</li>");
	}else{
		document.writeln("<li>"+(h+1)+"</li>");
	}
}
document.writeln("</ol>");
document.writeln("<span class=\"btn_closef\" id=\"btn_closef\">关闭X</span>");
document.writeln("</div>");
document.writeln("</div>");


	var f_skyf = document.getElementById('f_skyf'),f_str_f = document.getElementById('f_str_f'),flist_f = document.getElementById('flist_f').getElementsByTagName('li'),index_f = 0,time_f = null;
	// 若果有在等待的定时器，则清掉
	if(time_f){
		clearInterval(time_f);
		time_f = null;
	}
	// 自动切换
	time_f = setInterval(autoPlayfoot, 2000);
	// 定义并调用自动播放函数
	function autoPlayfoot(){
		index_f++;
		if(index_f >= flist_f.length){
			index_f = 0;
		}
		changeImg(index_f);
	}
	
	// 定义图片切换函数
	function changeImg(curindex_f){
		for(var j = 0; j < flist_f.length; j++){
			flist_f[j].className = "";
			//f_skyf.style.top=0;
		}
		// 改变当前显示索引
		flist_f[curindex_f].className = "on";
		f_str_f.style.marginTop = -fc_fh.substring(0,fc_fh.length-2)*curindex_f + "px"; //高度
		index_f = curindex_f;
	}
	
	// 鼠标划过整个容器时停止自动播放
	f_skyf.onmouseover = function(){
		clearInterval(time_f);
	}
	
	// 鼠标离开整个容器时继续播放至下一张
	f_skyf.onmouseout = function(){
		time_f = setInterval(autoPlayfoot, 2000);
	}
	
	// 遍历所有数字导航实现划过切换至对应的图片
     for (var i = 0; i < flist_f.length; i++){
		 flist_f[i].id = i;
         flist_f[i].onmouseover = function() {
             clearInterval(time_f);
             changeImg(this.id);
         }
     }


var btn_closef = document.getElementById("btn_closef");
var f_div_f = document.getElementById("fc_foot");
btn_closef.onclick = function(){
	if(f_div_f){
		f_div_f.style.display = "none";
	}
}