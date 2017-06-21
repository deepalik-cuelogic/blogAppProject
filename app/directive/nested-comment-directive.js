blogAppModule.directive('templateCode', function(){
    return {
        restrict: 'A',
        controller: function(){},
        compile: function(element){
            element.removeAttr('template-code');
            var templateCode = element.parent().html().trim();
            return function(scope, iElement, iAttrs, controller){
                controller.templateCode = templateCode;
            }
        }
    }
})
.directive('nestedItem', ['$compile', function($compile){
    return {
        restrict: 'A',
        require: '^templateCode',
        link: function(scope, element, iAttr, controller){ 
            if (scope.comment.comments){
                scope.blogComments = scope.comment.comments;         
                var html = $compile(controller.templateCode)(scope);
                element.append(html);
            }
        }
    };
}])