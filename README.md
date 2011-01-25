# Label-less Fields jQuery Plugin

__Version:__ 0.1

__License:__ "Same as jQuery (Dual GPL + MIT)":http://docs.jquery.com/License

__Author:__ "Zachary Porter":http://zporter.tumblr.com

__Size:__ Under 1KB Minified and gzipped

## Overview

This is a simple plugin that turns properly formatted HTML forms into forms with fields that have labels in them. Labels fade when the field is focussed ( optional ) and disappear when text entry begins. Clearing a field brings back the label.

## Browser Support

IE6+, WebKit Browsers (Safari, Chrome), Firefox 3+

* IE6 requires a background-color be set on the label to match the background of the field.

## Use

### HTML

<pre>
<form id="form_id">
	<div class="field">
	  <label for="field_id">Label Text</label><br />
	  <input type="text" name="field_id" value="" id="field_id">
	</div>
</form>
</pre>

### Javascript

<pre>
$(function() {
  $("#form_id").labelless();
});
</pre>

## Options

Five options can be passed along with the method.

To set the options at call time, use the following syntax:

<pre>$("form").labelless({ optionName:value });</pre>

*<code>labelColor:</code> Color value*
Color used for the label placed inside the field

*<code>fadeOnFocus</code> Boolean value*
Set to true if you would like the labels to fade and false if you don't want them to

*<code>fadeOpacity</code> Value between 0.1 and 1.0*
Sets the opacity of the field when focused

*<code>fadeDuration</code> Number in milliseconds*
The amount of time the fade animation lasts

*<code>picky</code> Boolean value*
When set to true, the plugin will only look for labels with class of "labelless". Example:

<pre><label for="field_id" class="labelless">Label</label></pre>

## Acknowledgements

dcneiner:https://github.com/dcneiner and his jQuery plugin In-Fields-Labels:https://github.com/dcneiner/In-Field-Labels-jQuery-Plugin was a great inspiration to publish this one. I wanted a solution where I didn't have to rely on CSS rules.

## Changelog

*Version 0.1*

* Initial Release