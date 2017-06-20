blogAppModule.controller('blogController' ,['$scope','$rootScope', '$state', 'blogService',
     function blogController($scope, $rootScope, $state, blogService){
     	 $scope.addeditTitle = "Add";
     	 CKEDITOR.replace('editortext');
     	 $scope.blogtoEdit = $state.params.blogtoedit;
     	 //save blog function
     	 $scope.blogTitle = '';
     	 $scope.blogData = {};
     	 $scope.saveBlog = function(){
     	  	var data = CKEDITOR.instances.editortext.getData();
     	  	$scope.blogData = {
     	 	 	"id": $rootScope.allBlogsList.length + 1,
	     	 	"blogTitle" : $scope.blogTitle,
	     	 	"blogContent" : data
	     	 }
	     	//save blog data
     	  	blogService.saveBlog($scope.blogData);
	        $state.go('blogs');
     	 }
     	
}])
.controller('showBlogController' ,['$scope','$rootScope', '$state','blogService',
     function showBlogController($scope, $rootScope, $state, blogService){
     	$scope.blogData = $state.params.blogDataObj;
        $scope.remove = function(object_id){
        	if(confirm("Do you  want to delete?")){
        		blogService.removeBlog(object_id);
        		$state.go('blogs');	
        	}	
        }
}])
.controller('editBlogController' ,['$scope','$rootScope', '$state','blogService',
     function editBlogController($scope, $rootScope, $state , blogService){
     	$scope.addeditTitle = "Edit";
     	//set blog data in the form
     	var blogtoEdit = $state.params.blogtoedit;
     	CKEDITOR.replace('editortext');
     	$scope.blogTitle = blogtoEdit.blogTitle;
     	CKEDITOR.instances.editortext.setData(blogtoEdit.blogContent);

     	//save edited blog data
     	$scope.saveBlog = function(){
     	    var data = CKEDITOR.instances.editortext.getData();
     	  	$scope.blogData = {
     	 	 	"id": blogtoEdit.id,
	     	 	"blogTitle" : $scope.blogTitle,
	     	 	"blogContent" : data
	     	 }
     	 blogService.saveBlog($scope.blogData);
     	 $state.go('blogs');
     	}

}]);
 
