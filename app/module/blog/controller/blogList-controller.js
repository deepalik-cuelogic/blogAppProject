blogAppModule.controller('blogListController' ,['$scope','$rootScope', '$state','blogService',
     function blogListController($scope, $rootScope, $state ,blogService){
     	//load blogs
     	$scope.loadBlogs = function(){
	     	blogService.getBlogList().then(function(response) {
	     		$rootScope.allBlogsList = response.data;
	     		$rootScope.arrIndex = {1:0 ,2:1};
	     	 }, function(response) {
	     	 });
	     }
	     if(!$rootScope.allBlogsList){
	     	$scope.loadBlogs();
	     }
	    $scope.viewBlogs = function(currentBlog){
	    	 $state.go('viewblog', {blogDataObj: currentBlog});
	    }
}]);