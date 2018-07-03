'use strict';

function collectSameElements(collectionA, collectionB) {
  var ans = new Array();
  var c = collectionA.toString();
  for(var i = 0; i < collectionB[0].length; i++){
    if(c.indexOf(collectionB[0][i].toString())>-1){
      ans.push(collectionB[0][i]);
    }
  }
  return ans;
}
