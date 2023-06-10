var form=document.getElementById('form');
	form.addEventListener('submit',function(even){
		even.preventDefault();
		
		var sname=even.target.sname;
		var fname=even.target.fname;
		var mname=even.target.mname;
		var dob=even.target.dob;
	if(sname.value==""){
		sname.style.border="1px solid red";
	}else{
		sname.style.border="";
	}
	})