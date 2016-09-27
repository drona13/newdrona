
angular.module("personApp").service("RecordServices", ["$http",  function($http){
    
    
    
    $http.get("/service/persontbl").then(function(response){
        console.log("loggin person from persontbl");
        console.log("End of response");
        

        object.Personnames= response.data;
        console.log(object.Personnames);
    });
    
    
    
    var object=this;
    this.id=null;
    
  
    
    $http.get("/service/persontbl/:id").then(function(response){
        
        
        console.log("logging to person response for Ids");
        console.log("End of response");
       
        
        object.PersonnamesIds= response.data;
        
        
        console.log(object.PersonnamesIds);
    });
    
    
    
    
    
    
    
}]);
