blogAppModule.directive("replyLink", function() {
  return {
    restrict: "E",
    replace: true,
    template: "<a class='reply' add-reply-box>Reply</a>"
  }
});

blogAppModule.directive("addReplyBox", function($compile) {
  return function(scope, element, attrs) {
  	scope.replytocomment = '';
    element.bind("click", function() {
      angular.element(document.getElementsByClassName('reply-box')).html('');
      element.next('.reply-box')
      .append($compile("<input type='text' class='form-control' name='replybox' placeholder='reply to comment' ng-model='replytocomment'/><button class='btn btn-success' ng-click='replyToComment(replytocomment,comment.comment_id)'>Reply</button></div>")(scope));
    });
  };
});