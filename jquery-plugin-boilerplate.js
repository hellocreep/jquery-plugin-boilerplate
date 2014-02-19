;(function(factory) {
	// AMD support
	if(typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
})(function($) {
	// Constructor
	var Plugin = function(el, conf) {

	}

	// Prototype
	Plugin.prototype.method = function() {

	}

	// Static property
	Plugin.DEFAULTS = {

	}

	var old = $.fn.plugin;

	// Plugin definition
	$.fn.plugin = function(opts) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data('plugin'),
				conf = $.extend({}, Plugin.DEFAULTS, typeof opts === 'object' && opts);
			
			if (!data) $this.data('plugin', (data = new Plugin(this, conf)));
			if (typeof option == 'string') data[option]();
		});
	}

	// No conflict
	$.fn.plugin.noConflict = function() {
		$.fn.plugin = old;
		return this;
	}
});