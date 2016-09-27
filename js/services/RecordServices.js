
angular.module("personApp").service("RecordServices", ["$http",  function($http){
    
    
    
    $http.get("/service/persontbl").then(function(response){
        console.log("loggin person from persontbl");
        console.log("End of response");
        

        object.person= response.data;
        console.log(object.person);
    });
    
    
    
    var object=this;
    this.id=null;
    
  
    
    $http.get("/service/persontbl/:id").then(function(response){
        
        
        console.log("logging to person response for Ids");
        console.log("End of response");
       
        
        object.Ids= response.data;
        
        
        console.log(object.personIds);
    });
    
    
    
    
    
    
    
}]);
