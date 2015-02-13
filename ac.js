(function () {
	if (!document.domain) {
		alert("你拖到书签栏使用了么？书签栏应该是在浏览器地址栏下方的位置。如果你确定你是在书签栏使用的，那么可能你的浏览器太辣鸡（比如360），换个现代的浏览器吧（火狐、谷歌、IE11都行的）");
		return
	}
	if (document.domain.toLowerCase().indexOf("talkshowcn.com") > 0) {
		alert("你应该是加到收藏夹或者拖到书签栏，而不是点我");
		return
	}
	if (document.domain.toLowerCase().indexOf("acfun.tv") < 0) {
		alert("进AcFun再说...");
		return
	}
	$.info("AcFun Fix: 欢迎使用 AcFun Fix 2013.10.14 E-mail:cctvyay@163.com");
	v = $("a.active").attr("data-vid");
	$.info("success::AcFun Fix: 修正播放器");
	player = document.getElementById("ACFlashPlayer-re");
	player.outerHTML = '<object style="visibility:visible;width:100%;height:100%" id="not-ACFlashPlayer-re" data="https://ssl.acfun.tv/flash/player-view-homura.swf" src="https://ssl.acfun.tv/flash/player-view-homura.swf" allowscriptaccess="always" allowfullscreen="true" allowfullscreeninteractive="true" wmode="direct" type="application/x-shockwave-flash"><param value="direct" name="wmode"><param value="true" name="allowFullscreenInteractive"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="oldcs=1&host=http://www.acfun.tv&hint=提示: 将代码保存为书签访问更方便~&vid=' + v + '" name="flashvars"><param name=movie value="https://ssl.acfun.tv/flash/player-view-homura.swf"></object>';
	sourceList = {
		"sina" : "新浪视频",
		"youku" : "优酷网",
		"tudou" : "土豆网",
		"qq" : "腾讯视频",
		"pps" : "PPS.tv",
		"ku6" : "酷六网",
		"letv" : "乐视云",
		"sohu" : "搜狐视频",
		"iqiyi" : "爱奇艺",
		"56" : "56网",
		"PPTV" : "PPTV"
	};
	$.get("/video/getVideo.aspx?id=" + v, function (e) {
		var data = eval(e);
		$.info("AcFun Fix: 视频videoId: " + v + ", 视频来源: " + sourceList[data.sourceType] + ", 视频sourceId: " + data.sourceId);
		if (!document.getElementById("video-download")) {
			$("#txt-info-title").parent().append('<a id="video-download" href="http://www.flv.cn/?url=' + location.href + '" style="color:red;" target="_blank">下载视频</a>')
		}
		if (data.sourceType == "sina") {
			$.info("error::AcFun Fix: 视频是新浪源视频，可能无法播放，希望你能帮忙补档，视频下载链接已放置到“举报视频”右侧。")
		}
	})
})();
