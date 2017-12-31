
function sym(args) {
    // slices all arguments into a single array
    var argsArray = [].slice.call(arguments);
    console.log(argsArray);
    // call back array func
    function symDiff(arr1, arr2){
        var unigVals=[]
        for(var i = 0; i < arr1.length; i++){
            if(arr2.index(arr1[i])<0 && unigVals.indexOf(arr1[i])<0){
                unigVals.push(arr1[i]);
            }
        }

    }
    return args;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);
  