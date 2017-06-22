blogAppModule.factory('blogFactory' , function($http ,$rootScope){
    return{
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
        }
    }
})