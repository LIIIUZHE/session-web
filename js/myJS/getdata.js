jQuery(document).ready(function(){
	$.ajax({
		data:"",
		type:"GET",
		dataType:"json",
		url:"data1.json",
		success:function (result){
			var str="";
			for(i=0;i<result.length;i++){
				//alert(result[i].name);
				str+="<li>"+result[i].name+"</li>";
				//alert(str);
			}
			
			$("#all").html(str);
		}
			
		});
	
});