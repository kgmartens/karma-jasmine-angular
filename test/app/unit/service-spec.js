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
	it('is defined', inject(function(echoService){
		expect(echoService).toBeDefined();
	}));

	it('echoes as expected', inject(function(echoService){
		expect(echoService.echo('blah')).toEqual('blah');
	}));

	xit('echoes', function() {
		expect(thelocalservice.echo('some text')).toBe('some text');
	});
});