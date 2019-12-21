//function returning function...
function base(a){
if(a=="something")
return function(b){
 "Hello, my name is " + b;
 }
}

var baseCall = base(a)(b);
