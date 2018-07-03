'use strict';

function collectSameElements(collectionA, collectionB) {
  var ans = new Array();
  var index = 0;
  for(var i = 0; i < collectionA.length; i++){
    for(var j = 0; j < collectionB.length; j++){
      if(collectionA[i] == collectionB[j]){
        ans[index] = collectionA[i];
        index += 1;
        break;
      }
    }
  }
  return ans;
}
