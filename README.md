# Label-less Fields jQuery Plugin

__Version:__ 0.2

__License:__ [Same as jQuery (Dual GPL + MIT)](http://jquery.org/license)

__Author:__ [Zachary Porter](http://zporter.tumblr.com)

## Overview

This is a simple plugin that turns properly formatted HTML forms into forms with fields that have labels in them. Labels fade when the field is focused ( optional ) and disappear when text entry begins. Clearing a field brings back the label.

## Browser Support

IE6+, WebKit Browsers (Safari, Chrome), Firefox 3+

## Use

### HTML

	<form id="form_id">
		<div class="field">
		  <label for="field_id">Label Text</label><br />
		  <input type="text" name="field_id" value="" id="field_id">
		</div>
	</form>

### Javascript

	$(function() {
	  $("#form_id").labelless();
	});

## Options

Five options can be passed along with the method. Feel free to play with the given example html page by passing in the different options. The example page can be found under example/index.html

To set the options, use the following syntax:

	$("form").labelless({ optionName:value });

*<code>labelColor:</code> Color value*

Color used for the label placed inside the field

*<code>fadeOnFocus:</code> Boolean value*

Set to true if you would like the labels to fade and false if you don't want them to

*<code>fadeOpacity:</code> Value between 0.1 and 1.0*

Sets the opacity of the field when focused

*<code>fadeDuration:</code> Number in milliseconds*

The amount of time the fade animation lasts

*<code>picky:</code> Boolean value*

When set to true, the plugin will only look for inputs with class of "labelless". Example:

	<input type="text" class="labelless" />
	
## Contribute

Like most other github projects, fork, modify and send a pull request at https://github.com/zporter/labelless_fields

## Acknowledgements

[dcneiner](https://github.com/dcneiner) and his jQuery plugin [In-Fields-Labels](https://github.com/dcneiner/In-Field-Labels-jQuery-Plugin) was a great inspiration to publish this one. I wanted a solution where I didn't have to rely on CSS rules.

## Changelog

*Version 0.2*

* picky option now targets input tags instead of label tags

*Version 0.1*

* Initial Release