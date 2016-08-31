var app= angular.module('user',[]);
app.controller('userctrl',['$scope','$http',function($scope,$http){

console.log("I WORKED");




	


$scope.login=function(){

$http.post('/userlist',$scope.user).success(function(res){
// on succes
	console.log(res);
 if(res.length!=1)
 	 window.location="/admin.html";

});

};


}]);