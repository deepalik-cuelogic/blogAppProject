blogAppModule.factory('userData' , function($http){
    return{
        getUserData : function(){
            return $http.get('/assets/data/event/userData.json');
        }
    }
})