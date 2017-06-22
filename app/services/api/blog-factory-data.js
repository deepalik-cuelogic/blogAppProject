blogAppModule.factory('blogFactoryData' , function($http ,$rootScope){
    return{
        getBlogList : function(){
            return $http.get('/assets/data/event/blogs.json');
        }
    }
});