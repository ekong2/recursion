// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var result = [];
  var theDom = [document.body];

  var traverse = function(element){
  	_.each(element, function(e){
  		if (_.contains(e.classList, className))
  		{
  			result.push(e);
  		}
  		traverse(e.childNodes);
  	});
  };

  traverse(theDom);
  return result;
};
