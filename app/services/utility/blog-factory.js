blogAppModule.factory('blogFactory' , function($http ,$rootScope){
    var setBlogDataObj;
    return{
        //setter 
        setBlogData : function(data){
             setBlogDataObj = data;
        },
        //getter
        getBlogData : function(){
            return setBlogDataObj ;
        },
        saveBlog : function(object){
            var allBlogsList = this.getBlogData();
        	var index = $rootScope.arrIndex[object.id];
		    if(index === undefined) {
		        //index = $rootScope.allBlogsList.length;
                index = allBlogsList.length;
		        $rootScope.arrIndex[object.id] = index;
		    }
		   //$rootScope.allBlogsList[index] = object;
            allBlogsList[index] = object;
            this.setBlogData(allBlogsList);
        },
        removeBlog : function(object_id){
            var allBlogsList = this.getBlogData();
        	for (var i = 0; i < allBlogsList.length; i++)
			    if (allBlogsList[i].id && allBlogsList[i].id === object_id) { 
			        allBlogsList.splice(i, 1);
                    this.setBlogData(allBlogsList);
			        break;
			    }
        }
    }
})