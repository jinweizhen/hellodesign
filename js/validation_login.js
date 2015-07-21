/*
Created 09/27/09										
Questions/Comments: jorenrapini@gmail.com						
COPYRIGHT NOTICE		
Copyright 2009 Joren Rapini
*/

	function getParameter(paramName) {
	  var searchString = window.location.search.substring(1),
		  i, val, params = searchString.split("&");

	  for (i=0;i<params.length;i++) {
		val = params[i].split("=");
		if (val[0] == paramName) {
		  return unescape(val[1]);
		}
	  }
	  return null;
	}

       $(function() {
		var	errorindex = getParameter("error");
		var error = "";
           	if(errorindex == 1) { error = "Incorrect Password."; }
			else if(errorindex == 2) { error = "No project is assigned to this user."; }
			else if(errorindex == 3) { error = "User does not exist."; }
			else if(errorindex == 4) { error = "Please fill in the Username field."; }
			else if(errorindex == 5) { error = "Please fill in the Password field."; }
			if(error != "") { $("div#panel").slideDown("slow");$("#toggle a").toggle(); }
			$("#panelerror").text(error);
			$("#panelerror").fadeIn(750);
			error = "";

        });


$(document).ready(function(){
	// Place ID's of all required fields here.
	required = ["log", "pwd"];
	// Place title's of all required fields here.
	titles = ["Username", "Password"];
	// If using an ID other than #error then replace it here
	errornotice = $("#panelerror");
	// error message 
	error = "";

	$("#loginform").submit(function(){	
		//Validate required fields
		for (i=0;i<required.length;i++) {
			var input = $('#'+required[i]);
			if ((input.val() == "")) {
				input.addClass("needsfilled");
				error = error + "Please fill in the " + titles[i] + " field. ";
			} else {
				input.removeClass("needsfilled");
			}
		}

		//Compose and display error message
		errornotice.text(error);
		errornotice.fadeIn(750);
		error = "";
		
		//if any inputs on the page have the class 'needsfilled' the form will not submit
		if ($(":input").hasClass("needsfilled")) {
			return false;
		} else {
			errornotice.hide();
			return true;
		}
	});
	
	// Clears any fields in the form when the user clicks on them
	$(":input").focus(function(){		
	   if ($(this).hasClass("needsfilled") ) {
			$(this).val("");
			$(this).removeClass("needsfilled");
	   }
	});

});	