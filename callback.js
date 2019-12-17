/* understanding how callbacks works*/
function cbFunc(msg,callback){
        console.log("Without callback " + msg);
        
        if(typeof callback == "function"){
          callback();
        }
        
      }
      cbFunc("hello", function callbackFunction(){
          console.log("This is callback func ");
        });
