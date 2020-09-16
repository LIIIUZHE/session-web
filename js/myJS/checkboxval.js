function current() {
	var obj = document.getElementsByName("check");
	alert(obj);
	var check_val =new Array();
	for(var i=0;i<obj.length; i++) {
		if(obj[i].checked)
			check_val.push(obj[k].value());
	}
	

}