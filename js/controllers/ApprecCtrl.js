
angular.module('personApp').controller("ApprecCtrl",["$scope", "RecordServices",function($scope, RecordServices) {
    
    
    $scope.form = function (){
        
    };
    scope.record= function (){
        
    };
    {
    $scope.Personnames="";
    
 $scope.$watch(function(){
        return RecordService.Personnames;
    },function(newVal, oldVal){
          if (oldVal != newVal){
                console.log("FROM WATCH LIST, persontbl");
              
                console.log(newVal);
              
                console.log("OLD VAL, persontbl");
              
                console.log(oldVal);
              
               $scope.Personnames=newVal;
            }
        
        
    });
    
    
    
    
      $scope.$watch(function(){
        return RecordService.PersonnamesIds;
    },function(newVal, oldVal){
          if (oldVal != newVal){
                console.log("FROM WATCH LIST, Persontbl");
              
                console.log(newVal);
                console.log("OLD VAL, Persontbl");
                console.log(oldVal);
              
               $scope.PersonnamesIds=newVal;
            }
        
        
    });
                 
                 
    
}]);
