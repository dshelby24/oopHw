// Only change code below this line
var myArray = [["arr1", 10], ["arr2", 20]];


function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }

  multiplyAll([[1,2],[3,4],[5,6,7]]);


  var dimThree = [[['hello' , 4 ] , ['morning' , 7 ] , [['cofee' , 8 ] , [ 'bagels' , 11 ]] , [ 13 ,'donuts']]]

  function largeNum(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
    
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test

  console.log(largeNum(10));


  function funcDiff(x,y){
        if (a == b){
            return "True";
        }
        return "False";
  }

  console.log(funcDiff(4,8));
  console.log(funcDiff(3,6));