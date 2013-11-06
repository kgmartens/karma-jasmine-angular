'use strict';

angular.module('app').factory('echoService', function(){
	return {
			echo: function(txt){
					return txt;
			}
	};
});