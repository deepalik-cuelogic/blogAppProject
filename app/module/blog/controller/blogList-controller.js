blogAppModule.controller('blogListController' ,['$scope','$rootScope', '$state','blogFactoryData',
     function blogListController($scope, $rootScope, $state ,blogFactoryData){
     	//load blogs
     	$scope.loadBlogs = function(){
	     	blogFactoryData.getBlogList().then(function(response) {
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