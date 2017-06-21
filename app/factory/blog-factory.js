blogAppModule.factory('blogService' , function($http ,$rootScope){
    return{
        getBlogList : function(){
            return $http.get('/assets/data/event/blogs.json');
        },
        saveBlog : function(object){
        	var index = $rootScope.arrIndex[object.id];
		    if(index === undefined) {
		        index = $rootScope.allBlogsList.length;
		        $rootScope.arrIndex[object.id] = index;
		    }
		    $rootScope.allBlogsList[index] = object;
        },
        removeBlog : function(object_id){
        	for (var i = 0; i < $rootScope.allBlogsList.length; i++)
			    if ($rootScope.allBlogsList[i].id && $rootScope.allBlogsList[i].id === object_id) { 
			        $rootScope.allBlogsList.splice(i, 1);
			        break;
			    }
        },
        findById : function(o, id) {
             if( o.comment_id === id ){
                      return o;
             }
             var result, p; 
                for (p in o) {
                  if( o.hasOwnProperty(p) && typeof o[p] === 'object' ) {
                     result = this.findById(o[p], id);
                      if(result){
                          return result;
                       }
                    }
                }
             return result;
        }
    }
})