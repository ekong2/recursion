// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'boolean' || typeof obj == 'number'){
    return String(obj);
  } else if (typeof obj === 'string'){
    return "\"" + obj + "\"";
  }else if (obj === null){
    return 'null';
	} else if (typeof obj === 'object' && !Array.isArray(obj)){
    var dstring = '';
    _.each(obj, function(val, key){
      if(stringifyJSON(val) !== undefined) {
        dstring += stringifyJSON(key) + ":" + stringifyJSON(val) + ",";
      }
    });
    return '{' + dstring.slice(0, dstring.length -1) + '}';
	} else if (typeof obj === 'object' && Array.isArray(obj)) {
    var sstring = '';
		_.each(obj, function(item){
      sstring += (stringifyJSON(item) + ",");
    });
    return '[' + sstring.slice(0, sstring.length -1) + ']';
	}
};