(function() {
	var app = angular.module('events', ['ngSanitize']);

	app.controller('EventController', ['$http', '$scope',
	function($http, $scope) {
		$scope.events = [];
		$scope.events_filtered = [];
		$scope.show_news = false;
		$scope.show_program = false;

		$http.get('events.json').success(function(data) {
			$scope.events = data.events;
			var yesterday = new Date();
			yesterday.setDate(yesterday.getDate() - 1);
			
			var j = 0;

			for ( i = 0; i < data.events.length; i++) {
				var event = data.events[i];
				var event_end_date = getEventEndDate(event);
				var event_date = new Date(event_end_date);
				if (yesterday <= event_date) {
					$scope.events_filtered[j++] = event;
				}

			}
			
			$scope.show_program = false;

		});
		
		$http.get('news.json').success(function(data) {
			$scope.news_title = data['title'];
			$scope.news_description = data['description'];				
			$scope.show_news = data['show'];
		});
	}]);

})();

function getEventEndDate(event) {
	var eventEndDate = null;
	
	if (event.date_to == null) {
		eventEndDate = event.date_from;
	} else {
		eventEndDate = event.date_to;
	}
	
	return eventEndDate;
}

