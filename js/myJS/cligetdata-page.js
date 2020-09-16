var changeall;
jQuery(document).ready(function() {
	$.ajax({
		data: "",
		type: "GET",
		dataType: "json",
		url: "clidata.json",
		success: function data(result) {
			var str = "";
			//zz =result.length;
			
			var zz = new Array(result.length);
			var aa = new Array(result.length);
			var cc = new Array(result.length);
			var dd = new Array(result.length);
			for(var i = 0; i < result.length; i++) {
				zz[i] = result[i].name;
				aa[i] = result[i].sharestatus;
				cc[i] = result[i].runstatus;
				dd[i] = result[i].runtime;
			}
			//alert(zz);
			
			var pageno = 1;
			var pagesize = 4;
			changeall = parseInt(zz.length / pagesize) + 1;
			if(zz.length % pagesize == 0) {
				var pageall = zz.length / pagesize;
			} else {
				var pageall = parseInt(zz.length / pagesize) + 1;
			}
			
			page(1);
			function page(e){
				
				var html = "";
				for(var i = 0; i < pagesize; i++) {
					html += "<li><input type=\"checkbox\" name=\"check\"  value=\""+i+"\" />" + zz[(e - 1) * pagesize + i] +aa[(e - 1) * pagesize + i] + cc[(e - 1) * pagesize + i]+ dd[(e - 1) * pagesize + i]+'</li>';
					if(zz[(e - 1) * pagesize + i + 1] == null) break;
				}
				$("ul#all").html(html);
			}
			
			
		}

	});

});
change(1);
function change(e) {
				pageno = e;
				if(e < 1) {
					e = 1;
					pageno = 1;
				}
				if(e > changeall) {
					e = changeall;
					pageno = changeall;
				}
				var pageContent = "";
				pageContent += '<a href="#" onclick="change(--pageno)">上一页</a>';
				pageContent += '第<span id=\"a2\">' + pageno + '</sapn>页';
				pageContent += '<a href="#" onclick="change(++pageno)">下一页</a>';
				$("#changepage").html(pageContent);
			}