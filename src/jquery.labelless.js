(function( $ ) {
	
  $.fn.labelless = function( options ) {
	
		var settings = {
			'fadeOnFocus': true,
			'fadeOpacity': .7,
			'fadeDuration': 500
		};
  
    return this.each( function() {
			var $this = $(this);
			
			// if options exist, merge with default settings
			if ( options ) {
				$.extend( settings, options );
			};
		
			// loop through all labels in the given form tag
			$this.find('label').each( function() {
				console.dir($(this));
			});
		});

  };
})( jQuery );