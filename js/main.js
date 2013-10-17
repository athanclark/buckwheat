Modernizr.load({
	test: Modernizr.svg,
	yep: ['js/raphael-min.js', 'js/svg-insert.js']
	nope: 'js/img-insert.js'
});
