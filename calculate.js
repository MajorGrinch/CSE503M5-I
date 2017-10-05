document.getElementById("cal_btn").addEventListener("click",calculate,false);
var op = document.getElementsByName("op");
console.log(op);
var curr_op = "";
for (var i = 0; i < op.length; i++) {
	op[i].addEventListener("click", function(event){
		curr_op = this.value;
		console.log(curr_op);
	}, false);
}
function calculate(){
	var para1 = document.getElementById("para1").value;
	var para2 = document.getElementById("para2").value;
	result = 0;
	var iscal = false;
	switch (curr_op){
		case '+':
			result = para1 + para2;
			iscal = true;
			break;
		case '-':
			result = para1 + para2;
			iscal = true;
			break;
		case '*':
			result = para1 * para2;
			iscal = true;
			break;
		case '/':
			if(para2==0){
				alert("Division can't be 0");
				break;
			}else{
				result = para1 / para2;
				iscal = true;
				break;
			}
		default:
			alert("Please select a operator");
	}
	if(iscal){
		alert("result is " + result);
	}
}

