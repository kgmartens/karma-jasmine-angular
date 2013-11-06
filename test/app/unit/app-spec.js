'use strict'

describe('App app', function(){
	var module = undefined;
	beforeEach(function(){
		module = angular.module('app');
	});
	
	it('should be defined', function(){
		expect(module).toBeDefined();
	});
	
	it('has a $echoService dependency', function() {
		expect(module.requires).toContain('$echoService');
	});
	
	
});