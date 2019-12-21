// immediately invoked function expression
// used to protect data from outside scope
// runs only once

//wo parm
(function(){
console.log("print using IIFE");
})();

// w param
(function(st){
console.log("print using " + st);
})("IIFE");
