blogAppModule.factory('commonFactory' , function($http ,$rootScope){
return{
	findById : function(o, id) {
        if( o.comment_id === id ){
                  return o;
        }
        var result, p; 
        for (p in o) {
              if( o.hasOwnProperty(p) && typeof o[p] === 'object' ) {
                 result = this.findById(o[p], id);
                  if(result){
                      return result;
                   }
                }
         }
        return result;
    }
}
});