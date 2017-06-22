blogAppModule.controller('blogListController' ,['$scope','$rootScope', '$state','blogFactoryData','blogFactory',
     function blogListController($scope, $rootScope, $state ,blogFactoryData,blogFactory){
     	//load blogs
     	$scope.allBlogsList =blogFactory.getBlogData();
     	$scope.loadBlogs = function(){
	     	blogFactoryData.getBlogList().then(function(response) {
	     		blogFactory.setBlogData(response.data);
	     		$scope.allBlogsList = response.data;
	     		//$rootScope.allBlogsList = response.data;
	     		$rootScope.arrIndex = {1:0 ,2:1};
	     	 }, function(response) {
	     	 });
	     }
	     if(!$scope.allBlogsList){
	     	$scope.loadBlogs();
	     }
	    $scope.viewBlogs = function(currentBlog){
	    	 $state.go('viewblog', {blogDataObj: currentBlog});
	    }
}]);