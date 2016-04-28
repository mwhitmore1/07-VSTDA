var todoApp = angular.module('todoApp', ['as.sortable']);

todoApp.controller('todoCtrl', function($scope, $filter){

	var orderBy = $filter('orderBy');
	
	$scope.customOrder = function(a){
		a = a.priority;
		if (a == 'high-priority')
			return 1;
		if (a == 'medium-priority')
			return 2;
		if (a == 'low-priority')
			return 3;
	};

	$scope.tasks = [
		{name: "high-priority", priority: "high-priority"},
		{name: "low-priority", priority: "low-priority"},
		{name: "medium-priority", priority: "medium-priority"}
	]

	$scope.order = function(predicate, reverse){
		$scope.predicate = predicate;
		$scope.reverse = reverse;
		if (predicate == 'priority')
			predicate = $scope.customOrder;
		$scope.tasks = orderBy($scope.tasks, predicate, $scope.reverse)
	}
	$scope.order('priority', true);

	$scope.addTask = function(){
		if ($scope.name == undefined || $scope.name == ""){
			alert("Add a task name.");
			return;
		}
		$scope.tasks.push({name: $scope.name, priority: $scope.priority});
	}

	$scope.priorityLeast = function(){};

});

