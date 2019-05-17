/*$(document).ready(function(){
 
   $(document).keydown(function(key){
	   switch(parseInt(key.wich,10)){
		//seta para cima
			case 38:
			    $('img').animate({top: "-=10px"}, 'fast');
				break;
	   }
   });


});*/



   $(document).ready(function() {
	  var p=500;
	  console.log(p);
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				console.log("left arrow");
				$('img').animate({left: "-=20px"}, 'fast');
				 p-=20
				$('img').css({
					 transform: 'scaleX(-1)',
					 MozTransform: 'scaleX(-1)',
					 WebkitTransform: 'scaleX(-1)',
					 msTransform: 'scaleX(-1)'
				});   
			break;
			// Up Arrow Pressed
			
			// Right Arrow Pressed
			case 39:
				console.log("right arrow");
				$('img').animate({left: "+=20px"}, 'fast');
			     p+=20;
				$('img').css({
					 transform: 'scaleX(+1)',
					 MozTransform: 'scaleX(+1)',
					 WebkitTransform: 'scaleX(+1)',
					 msTransform: 'scaleX(+1)'
				});   
				break;
			// Down Arrow Pressed
			
			
      // Jump With Spacebar Key      
           case 32:
			 disparo=$('<div class=projetil></div>')
			 disparo.css({left:p})
			 $('body').append(disparo);
			 $('.projetil').animate({top:"-=100%"},500);
			 //$('.projetil').hide();
			  
		}
	});
});
