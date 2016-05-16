var todoApp = angular.module('todoApp', ['as.sortable']);

todoApp.controller('todoCtrl', function($scope, $filter){

	$scope.tasks = [
		{name: "high-priority", priority: 3},
		{name: "medium-priority", priority: 2},
		{name: "low-priority", priority: 1}
	]

	$scope.order = 'priority'

	$scope.addTask = function(){
		if ($scope.name == undefined || $scope.name == ""){
			alert("Add a task name.");
			return;
		}
		$scope.tasks.push({name: $scope.name, priority: $scope.priority});
		// clear text box
		$scope.name = "";
	}
});

