//add new blog controller
blogAppModule.controller('blogController' ,['$scope','$rootScope', '$state', 'blogFactory',
     function blogController($scope, $rootScope, $state, blogFactory){
     	 $scope.addeditTitle = "Add";
     	 CKEDITOR.replace('editortext');
     	 $scope.blogtoEdit = $state.params.blogtoedit;
     	 //save blog function
     	 $scope.blogTitle = '';
     	 $scope.blogData = {};
         //get blog list
         $scope.allBlogsList =blogFactory.getBlogData();
     	 $scope.saveBlog = function(){
     	  	var data = CKEDITOR.instances.editortext.getData();
     	  	$scope.blogData = {
     	 	 	//"id": $rootScope.allBlogsList.length + 1,
                "id": $scope.allBlogsList.length+1,
	     	 	"blogTitle" : $scope.blogTitle,
	     	 	"blogContent" : data,
                "comments": []
	     	 }
	     	//save blog data
     	  	blogFactory.saveBlog($scope.blogData);
	        $state.go('blogs');
     	 }
     	
}])
.controller('showBlogController' ,['$scope','$rootScope', '$state','blogFactory','commonFactory',
     function showBlogController($scope, $rootScope, $state, blogFactory, commonFactory){
     	$scope.blogData = $state.params.blogDataObj;
        $scope.blogComments = $scope.blogData.comments;
        $scope.remove = function(object_id){
        	if(confirm("Do you  want to delete?")){
        		blogFactory.removeBlog(object_id);
        		$state.go('blogs');	
        	}	
        };
        //new comment function
        $scope.addNewComment = function(newComment ,blog_id){
            if(newComment){
             var newCommentObj = {
                "comment_id": $scope.blogData.comments.length +1,
                "author" :$rootScope.user.username,
                "date" : "21-07-17",
                "text" : newComment,
                "comments":[]
             }
             $scope.blogData.comments.push(newCommentObj);
             var allBlogsList =blogFactory.getBlogData();
             //update global object
             for (var i = 0; i < allBlogsList.length; i++)
                if (allBlogsList[i].id && allBlogsList[i].id === blog_id) { 
                    allBlogsList[i].comments.push(newCommentObj);
                    blogFactory.setBlogData(allBlogsList);
                    break;
                }
             $scope.newComment ='';
            }
        }
        //comment reply function
        $scope.replyToComment =function(commentReply , comment_id){
            var currentComment = commonFactory.findById($scope.blogData.comments, comment_id);
            var generatedId = currentComment.comments ? parseInt(currentComment.comment_id + String(currentComment.comments.length +1)) : 1;
            var newCommentObj = {
                "comment_id": generatedId,
                "author" :$rootScope.user.username,
                "date" : "21-07-17",
                "text" : commentReply,
                "comments":[]
             }
            currentComment.comments.unshift(newCommentObj);
            $scope.blogComments = $scope.blogData.comments;
            angular.element(document.getElementsByClassName('reply-box')).html('');
        }
}])
.controller('editBlogController' ,['$scope', '$state','blogFactory',
     function editBlogController($scope, $state , blogFactory){
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
	     	 	"blogContent" : data,
                "comments":blogtoEdit.comments
	     	 }
     	 blogFactory.saveBlog($scope.blogData);
     	 $state.go('blogs');
     	}

}]);
 
