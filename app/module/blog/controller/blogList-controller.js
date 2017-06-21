blogAppModule.controller('blogListController' ,['$scope','$rootScope', '$state','blogFactory',
     function blogListController($scope, $rootScope, $state ,blogFactory){
     	//load blogs
     	$scope.loadBlogs = function(){
	     	blogFactory.getBlogList().then(function(response) {
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