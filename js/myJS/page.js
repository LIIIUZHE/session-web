var zz=getzz()
var pageno=1;
var pagesize=6;
if(zz.length%pagesize==0){
	var pageall =zz.length/pagesize;
}else{
	var pageall =parseInt(zz.length/pagesize)+1;
}
change(1);

function getzz(){
	var a =$("ul#all li");
	var zz=new Array(a.length);
	for (var i=0;i<a.length;i++) {
		zz[i]=a[i].innerHTML;
	}
	return zz;
}
function change(e){
	pageno=e;
	if(e<1){
		e=1;pageno=1;
	}
	if(e>pageall){
		e=pageall;pageno=pageall;
	}
	$("#all").html("");
	var html="";
	for(var i=0;i<pagesize;i++){
		html +="<li>" + zz[(e-1)*pagesize+i] + '</li>';
		if(zz[(e-1)*pagesize+i+1]==null) break;
	}
	$("ul#all").html(html);
	var ye="";
	for (var j=1;j<=pageall;j++) {
		if(e==j){
			ye=ye+"<span><a href='#' onclick='change("+j+")'>"+j+"</a></span>"
		}else{
			ye=ye+"<a href='#' onclick='change("+j+")'>"+j+"</a>"
		}
	}
	var pageContent="";
	pageContent +='<a href="#" onclick="change(--pageno)">上一页</a>';
	pageContent +='第<span id=\"a2\">'+pageno+'</sapn>页';
	pageContent +='<a href="#" onclick="change(++pageno)">下一页</a>';
	$("#page").html(pageContent);
}	
	
