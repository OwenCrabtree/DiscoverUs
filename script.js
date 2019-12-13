var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Change Image
function changeImg(){
// Image List
images[0] = "B.jpg";
images[1] = "K.jpg";
images[2] = "M.jpg";
images[3] = "Tjpg.jpg";

	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;



            function write_email(){
              var email_parra=document.getElementsById("Email");
              var name=document.getElementsById("email");

              email_parra.innerHTML="Thank you"+name.value;
            }
       

