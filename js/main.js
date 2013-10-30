Modernizr.load({
	test: Modernizr.svg,
	yep: ['js/svg-insert.js'],
	nope: 'js/img-insert.js'
});
