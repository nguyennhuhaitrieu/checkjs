$( document ).ready(function() {
    $('.js-button-success').click(function() {
    	var self = $(this);
    	//var buttonActive = 'button-red';
    	if(self.hasClass('button-red')){
    		self.removeClass('button-red');
    	} else {
    		self.addClass('button-red');
    	}
    	
    });
});