﻿'use strict';

function collectSameElements(collectionA, collectionB) {
  var ans = new Array();
  var c = collectionB.toString();
  for(var i = 0; i < collectionA.length; i++){
    if(c.indexOf(collectionA[i].toString())>-1){
      ans.push(collecionA[i]);
    }
  }

  return ans;
}
