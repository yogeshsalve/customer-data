var customerAppModule = angular.module("customerApp", []);    


 customerAppModule.controller("customerCtrl", function ($scope,$http) {    
   $http.get('customer.json')    
   .success(function(data){    
     $scope.customers = data.attributes;
     
        
   })    
   .error(function(data,status){    
     console.error('Fail to load data', status, data);    
     $scope.customers = { };     
   });  

	$scope.id = '5e8ec9f474ad692c536a89c6';
	$scope.uuid = '5e8ec9f474ad692c536a89c6';
 }); 

customerAppModule.controller("customerCtrl1", function ($scope,$http) { 
 $http.get('customer.json').success(function(data){
    $scope.myData = data;
});
});