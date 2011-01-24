(function( $ ) {
	
  $.fn.labelless = function( options ) {
	
		var settings = {
			'labelColor': '#444',
			'fadeOnFocus': true,
			'fadeOpacity': .5,
			'fadeDuration': 200
		},
		showing = true;
		
		/*
		 * Functions to handle different responsibilities
		*/
		
		function positionLabel ( label, field ) {
			label.parent().css("position", "relative");
			label.css({
				"position": "absolute",
				"top": "2",
				"left": "5",
				'color': settings.labelColor
			});
			
			label.css('padding-top', field.css('padding-top'));
			label.css('padding-left', field.css('padding-left'));
		}
		
		function showLabel ( label, field ) {
			if ( field.val() != '' ) {
				label.stop().hide();
				showing = false;
			}
			else if ( !showing ) {
				label.show();
				showing = true;
			}
		}
		
		function bindEvents ( label, field ) {
			field.bind('keyup.labelless', function (e) {
				showLabel( label, field );
			})
			.bind('focus.labelless', function (e) {
				if ( showing && settings.fadeOnFocus ) {
					label.stop().animate( { opacity: settings.fadeOpacity }, settings.fadeDuration );
				}
			})
			.bind( 'blur.labelless', function (e) {
				if (showing) {
					label.stop().css( 'opacity', 1.0 );
				}
			});
		}
  
		/*
		 * Main jQuery plugin loop
		*/
    return this.each( function() {
			var $this = $(this);
			
			// if options exist, merge with default settings
			if ( options ) {
				$.extend( settings, options );
			}
		
			// loop through all labels in the given form tag
			$this.find('label').each( function() {
				var $label = $(this),
						label_for = $label.attr('for'),
						$field;
						
				if ( !label_for ) {
					return;	// for attribute wasn't used; cannot attach to field
				}
				
				// get the field label is attached to
				// only accept given fields
				$field = $(
					'input#' + label_for + "[type='email']," +
					"input#" + label_for + "[type='password']," +
					"input#" + label_for + "[type='search']," +
					"input#" + label_for + "[type='tel']," +
					"input#" + label_for + "[type='text']," +
					"input#" + label_for + "[type='url']," +
					"textarea#" + label_for
				);
				
				if ( $field.length === 0 ) {
					return;	// no field to attach the label to
				}
				
				// position the label
				positionLabel( $label, $field );
				
				// determine whether to show label
				showLabel( $label, $field );
				
				// bind events
				bindEvents( $label, $field );
				
			});
		});

  };
})( jQuery );