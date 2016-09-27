
angular.module('personApp').controller("ApprecCtrl",["$scope", "RecordServices",function($scope, RecordServices) {
    
    
    $scope.form = function (){
        
    };
    scope.record= function (){
        
    };
    {
    $scope.persontbl="";
    
 $scope.$watch(function(){
        return RecordService.persontbl;
    },function(newVal, oldVal){
          if (oldVal != newVal){
                console.log("FROM WATCH LIST, persontbl");
              
                console.log(newVal);
              
                console.log("OLD VAL, persontbl");
              
                console.log(oldVal);
              
               $scope.person=newVal;
            }
        
        
    });
    
    
    
    
      $scope.$watch(function(){
        return RecordService.PersonIds;
    },function(newVal, oldVal){
          if (oldVal != newVal){
                console.log("FROM WATCH LIST, Persontbl");
              
                console.log(newVal);
                console.log("OLD VAL, Persontbl");
                console.log(oldVal);
              
               $scope.PersonIds=newVal;
            }
        
        
    });
                 
                 
    
}]);
