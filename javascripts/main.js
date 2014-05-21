$(function () {
	$('input[placeholder][type=text]').placeholder();
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
                default:
                    return false;
            }
            window.open(loc, "newwindow");

        } else {
            var id = this.id;
            $('input').each(function () {
                if (id != this.id) $(this).val("");
            });
        }
    }
});
$.fn.placeholder = function(){
	return this.each(function () {
		if(Modernizr.input["placeholder"] == false){
			var _self = $(this);
			var phv = _self.attr('placeholder');
			var color = '#777777';
			//div setup
			var placeholder = $('<div>'+phv+'</div>');
			$('body').append(placeholder);
			var top = _self.offset().top + ((_self.outerHeight() - _self.height()) / 2);
			var left = _self.offset().left + ((_self.outerWidth() - _self.width()) / 2);
			var width = _self.outerWidth();
			var height =  _self.outerHeight();
			var zIndex = _self.css('zIndex');
			if(zIndex != 'auto'){
				zIndex = parseInt(zIndex) + 1;
			}
			placeholder.css({pointerEvents: 'none',cursor: 'text',display: 'none',zIndex: zIndex, color: color, position: 'absolute', left: left, top: top ,width: width ,height: height });
			
			var value = function(){
				var val = _self.val();
				if(val == typeof(undefined) || val == null || val == '')
				return '';
				else
				return val;
			};
			var addPlaceholder = function(){
				placeholder.css('display','');
			};
			var remPlaceholder = function(){
				placeholder.css('display','none');
			};
			var hasPlaceholder = function(){
				return placeholder.css('display') != 'none';
			};
		
			if(value() == ''){
				addPlaceholder();
			}
			//needs to be keydown to get the value before changed
			_self.focusin(function(e){
				if(hasPlaceholder() == true){
					remPlaceholder();
				}
			});
			_self.focusout(function(e){
				if(value() == ''){
					addPlaceholder();
				}
			});
		}
	});
};
