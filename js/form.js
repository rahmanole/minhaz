
function formValidation(){
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
		
	if(pass1==="" && pass2===""){
		document.getElementById('pass').innerHTML ="<h3>Enetr password!</h3>";
	}else{
		if(pass1==pass2){
		document.getElementById('pass').innerHTML ="<h3>Password matched!</h3>";
		}else{
			document.getElementById('pass').innerHTML="<h3>Password does not matched!</h3>";
		}
	}

}
