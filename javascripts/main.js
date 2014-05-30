$(function () {
	if(!"placeholder" in document.createElement("input")){
	    $.getScript("javascripts/jquery.placeholder.js",function(){
	       $('input[type=text]').placeholder();
	    })
	}
    $("input").bind("keydown", keySearch)
        .attr("autocomplete", "off").css({ "position": "absolute", "left": " 90px" })
        .each(function (i) {
            this.style.top = 150 + (i * 40) + "px";
            this.setAttribute("tabindex", i + 1);
        });

    function keySearch(event) {
        if (event.keyCode == 13) {
            if (this.value.length < 1) return false;
            var loc;
            switch (this.id) {
                case "kwBD":
                    loc = 'http://www.baidu.com/s?wd=' + (this.value);
                    break;
                case "kwGoogle":
                    loc = 'https://www.google.com.hk/#newwindow=1&safe=strict&q=' + (this.value);
                    break;
                case "kwBing":
                    loc = 'http://cn.bing.com/search?&qs=ED&form=QBLH&pq=a&sc=8-1&sp=1&q=' + (this.value);
                    break;
                case "kwYinYueTai":
                    loc = 'http://so.yinyuetai.com/mv?keyword=' + (this.value);
                    break;
                case "kwBDPan":
                    loc = 'http://www.baidu.com/s?wd=' + (this.value) + '%20site:pan.baidu.com';
                    break;
                case "kwAcf":
                    loc = 'http://www.baidu.com/s?wd=' + (this.value) + '%20site:acfun.com';
                    break;
                case "kwblog":
                    loc = 'http://www.baidu.com/s?wd=' + (this.value) + '%20site:cnblogs.com';
                    break;
                default:
                    return false;
            }
            window.open(loc,"","newtab");

        } else {
            var id = this.id;
            $('input').each(function () {
                if (id != this.id) $(this).val("");
            });
        }
    }
});