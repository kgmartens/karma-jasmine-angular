'use strict';

describe('app service', function() {
	var thelocalservice;
	beforeEach(function(){
		module('app');

		inject(function(echoService){
			thelocalservice = echoService;
		});
	}
);
	
	it('echoes', function() {
		expect(thelocalservice.echo('some text')).toBe('some text');
	});
});