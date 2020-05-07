$(document).ready(function(){

	console.log('script loaded!');

	//If clicked true,change compress the 'type your name' text.
   //  $('.True').click(function(){
   //     $('').show();
   // });
   let count = 500;
   $('input[type=radio]').on('change', function() {
   		console.log('input changed!');
   		let value = $(this).val();

   		if (value == "True"){
   			console.log("True is selected");
   			count+=100;
   			
   			weightValue = count;

   			console.log(count);

   			let setting = "'wght'" + weightValue;

   			$('.typehere').css('font-variation-settings', setting);
   		}
   	
      // alert($('input[name=radioName]:checked', '#myForm').val()); 
   });

});

