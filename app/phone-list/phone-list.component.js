
//Define component 

angular.module('phoneList').
	component('phoneList', {
		
		templateUrl: 'phone-list/phone-list.template.html',
		controller: function phoneListController($http){
			var c = this;
			$http.get('phones/phones.json').then(function(respone){
				c.phones = respone.data;
				c.order = 'age';
			});
		}
	});