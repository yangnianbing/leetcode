/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let toMap = list => {
      let map = {};

      for(let index in list){
        map[list[index]] = Number(index);
      }
      return map;
    }

    let map1 = toMap(list1)
    let map2 = toMap(list2)

    let result = [];
    let min = Number.MAX_VALUE;
    for(let key in map1){
      if(map2[key] !== undefined){
        if(map2[key] + map1[key] === min){
          result.push(key);
        }else if(map2[key] + map1[key] <= min){
          min = map2[key] + map1[key];
          result = [key];
        }
      }
    }
    return result;
};

