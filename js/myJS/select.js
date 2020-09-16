jQuery(document).ready(function(){
	$.ajax({
		data:"",
		type:"GET",
		dataType:"json",
		url:"clidata.json",
		success:function (result){
			var str="";
			for(i=0;i<result.length;i++){
				//alert(result[i].name);
				str+="<option value=\"+i+\">"+result[i].name+"</option>";
				//alert(str);
			}
			
			$("#select-box").html(str);
		}
			
		});
	
});