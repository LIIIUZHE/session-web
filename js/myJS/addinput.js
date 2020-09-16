var detail_open_div=1;
var detail_close_div=1;
var detail_message_div=1;
function openadd(){
	var e = document.getElementById("manage-session-open-input");
	var div = document.createElement("div");
	div.id = "manage-session-open-input" +detail_open_div;
	hh="<div style= 'height: 10px; width: 100px;'></div>";
	div.innerHTML = hh+e.innerHTML;
	document.getElementById("manage-session-open-mid").appendChild(div);
	detail_open_div++;
	//move();
}

function closeadd(){
	var e = document.getElementById("manage-session-close-input");
	var div = document.createElement("div");
	div.id = "manage-session-close-input" +detail_close_div;
	hh="<div style= 'height: 10px; width: 100px;'></div>";
	div.innerHTML = hh+e.innerHTML;
	document.getElementById("manage-session-close-mid").appendChild(div);
	detail_close_div++;
	
}

function messageadd(){
	var e = document.getElementById("manage-session-message-input");
	var div = document.createElement("div");
	div.id = "manage-session-message-input" +detail_message_div;
	hh="<div style= 'height: 10px; width: 100px;'></div>";
	div.innerHTML = hh+e.innerHTML;
	document.getElementById("manage-session-message-mid").appendChild(div);
	detail_message_div++;
	
}


