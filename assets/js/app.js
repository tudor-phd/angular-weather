'use strict';
var myApp = angular.module('myApp',[]);

      myApp.controller('weatherController', function($http, $scope)
	{ 

        $scope.items=[];
		$scope.onKeydown = function(){
			
			var city = $scope.city;
    	$http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=b1b15e88fa797225412429c1c50c122a')
	      .success(function(result) { 
	      $scope.details   = 'Humidity: ' + result['main']['humidity'];
	      $scope.details1  = 'Weather: ' + result['weather']['0']['main'];
	      $scope.details2  = 'Description: ' + result['weather']['0']['description'];
	      $scope.details3  = 'Lon: ' +result['coord']['lon'];
	      $scope.details4  = 'Lat: ' +result['coord']['lat'];
	      $scope.details5  = 'Clouds: ' +result['clouds']['all'];
	      $scope.details6  = 'Wind speed: ' +result['wind']['speed'];
	      $scope.details7  = 'Temperature: ' +result['main']['temp'];

	      $scope.items.push(city);
	     })

       };

        var move = function (origin, destination) {
        var temp = $scope.items[destination];
        $scope.items[destination] = $scope.items[origin];
        $scope.items[origin] = temp;
    };
       $scope.getWeather = function(item, index){

			$http.get('http://api.openweathermap.org/data/2.5/weather?q='+item+'&appid=b1b15e88fa797225412429c1c50c122a')
	      .success(function(result) { 
	      $scope.details   = 'Humidity: ' + result['main']['humidity'];
	      $scope.details1  = 'Weather: ' + result['weather']['0']['main'];
	      $scope.details2  = 'Description: ' + result['weather']['0']['description'];
	      $scope.details3  = 'Lon: ' +result['coord']['lon'];
	      $scope.details4  = 'Lat: ' +result['coord']['lat'];
	      $scope.details5  = 'Clouds: ' +result['clouds']['all'];
	      $scope.details6  = 'Wind speed: ' +result['wind']['speed'];
	      $scope.details7  = 'Temperature: ' +result['main']['temp'];
	      move(index, 0);
	      $scope.city = item;

	     })

       };

	})
