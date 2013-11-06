module.exports = function(config) {
	config.set({
		basePath : '../../',

		files : [ 
		        'app/angular-1.2.0-rc.3.js',
				
				'app/js/*.js', 
				'app/js/services.js', 
				'test/app/angular-mocks.js',
				'test/app/unit/*-spec.js' 
				],

		autoWatch : true,

		frameworks : [ 'jasmine' ],

		browsers : [ 'Chrome' ],

		plugins : [ 'karma-junit-reporter', 
		            'karma-chrome-launcher',
		            'karma-firefox-launcher', 
		            'karma-phantomjs-launcher',
		            'karma-jasmine', 
		            'karma-ng-html2js-preprocessor' 
		           ],

		junitReporter : {
			outputFile : 'test_out/unit.xml',
			suite : 'unit'
		}

	});
};