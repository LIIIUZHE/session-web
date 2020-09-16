function openbtn() {
	$("#manage-session-open-mid input[type='text']").each(function(){
		alert($(this).val());
	});
}

function closebtn() {
	$("#manage-session-close-mid input[type='text']").each(function(){
		alert($(this).val());
	});
}

function createbtn() {
	var text = $("#manage-session-create-textbox").val();
	var text2 = $("#manage-session-create-textbox2").val();
	alert(text + text2);
}

function setpasswordbtn() {
	var text = $("#manage-session-setpassword-textbox").val();
	var text2 = $("#manage-session-setpassword-textbox2").val();
	var text3 =$("input[type='radio']:checked").val();
	alert(text + text2+text3);
}

function connectbtn() {
	var text = $("#manage-session-connect-textbox").val();
	var text2 = $("#manage-session-connect-textbox2").val();
	alert(text + text2);
}

function deletebtn() {
	var text = $("#manage-session-delete-textbox").val();
	alert(text);
}

function catpasswordbtn() {
	var text = $("#manage-session-catpassword-textbox").val();
	alert(text);
}

function listbtn() {
	var text = $("#manage-session-list-textbox").val();
	alert(text);
}

function messagebtn() {
	$("#manage-session-message-mid input[type='text']").each(function(){
		alert($(this).val());
	});
}