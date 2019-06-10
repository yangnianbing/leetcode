/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones = stones.sort((a, b) => a > b ? 1 : -1);

  while(stones.length > 1){
    let len = stones.length;

    if(stones[len - 1] === stones[len - 2]){
      stones.length = len - 2;
    }else{
      let newValue = stones[len - 1] - stones[len - 2];
      stones.length = len - 2;
      insertTo(stones, newValue);
    }
  }

  return stones.length === 1 ? stones[0] : 0;
};

function insertTo(array, target){
  let index = array.length;
  for(let i = 0; i < array.length; i++){
    if(array[i] >= target){
      index = i;
      break;
    }
  }

  for(let j = array.length; j > index; j--){
    array[j] = array[j - 1];
  }

  array[index] = target;
  return array;
}


