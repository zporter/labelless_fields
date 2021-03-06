/*
 * Label-less jQuery plugin ( version 0.5 )
 * Licensed same as jQuery ( http://jquery.org/license )
 * Contribute by sending a pull request to ( https://github.com/zporter/labelless_fields )
*/

(function( $ ) {
	
  $.fn.labelless = function( options ) {
	
		var settings = {
			'labelColor': '#444',
			'fadeOnFocus': true,
			'fadeOpacity': .5,
			'fadeDuration': 200,
			'picky': false,
			'labelTop': 3,
			'labelLeft': 5
		};
		
		/*
		 * Functions to handle different responsibilities
		*/
		
		function positionLabel ( label, field ) {
		  label.parent().css("position", "relative");
		  
		  var fieldMarginTop = parseFloat(field.css("margin-top")),
		      fieldBorderTop = parseFloat(field.css("border-top-width")),
		      fieldPaddingTop = parseFloat(field.css('padding-top')),
		      labelTop = parseFloat(settings.labelTop),
		      fieldMarginLeft = parseFloat(field.css('margin-left')),
		      fieldBorderLeft = parseFloat(field.css('border-left-width')),
		      fieldPaddingLeft = parseFloat(field.css('padding-left')),
		      labelLeft = parseFloat(settings.labelLeft);
		  
		  if ( field.css('font-size') != '' )
		  {
		    label.css('font-size', field.css('font-size'));
		  }
		  
			label.css({
				'display': 'block',
				"position": "absolute",
				"top": labelTop + 'px',
				"left": labelLeft + "px",
				'color': settings.labelColor,
				'font-weight': field.css('font-weight'),
				'border-top-width': fieldBorderTop + 'px',
				'border-left-width': fieldBorderLeft + 'px',
				'padding-left': fieldPaddingLeft + 'px',
				'padding-top': fieldPaddingTop + 'px',
				'margin-left': fieldMarginLeft + 'px',
				'margin-top': fieldMarginTop + 'px'
			});
		}
		
		function showLabel ( label, field ) {
			if ( field.val() != '' ) {
				label.stop().hide();
			}
			else if ( label.is(':hidden') ) {
				label.show();
			}
		}
		
		function bindEvents ( label, field ) {
			field.bind('keyup.labelless', function (e) {
				showLabel( label, field );
			})
			.bind('keydown.labelless', function (e) {
			  pattern = /\w/g;
			  if ( label.is(':visible') && pattern.test(String.fromCharCode(e.which)) ) {
			    label.stop().hide();
			  }
			})
			.bind('focus.labelless', function (e) {
				if ( label.is( ':visible' ) && settings.fadeOnFocus ) {
					label.stop().animate( { opacity: settings.fadeOpacity }, settings.fadeDuration );
				}
			})
			.bind( 'blur.labelless', function (e) {
				if ( field.val() != '' ) {
					label.stop().hide();
				}
				else if ( label.is( ':visible' ) ) {
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
				
				if ( $field.length === 0 || ( settings.picky && !$field.hasClass('labelless') ) ) {
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