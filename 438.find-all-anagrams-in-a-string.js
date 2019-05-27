/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let result = [];
  if(s.length < p.length){
    return result;
  }
  
  let map2 = toMap(p),
      map1 = {},
      start = 0,
      end = 0
      len = p.length;

  while(end < s.length){
    let charEnd = s.charAt(end);
    let charStart = s.charAt(start);
    if(!map2[charEnd]){
      end++;
      start =  end;
      map1 = {};
      continue;
    }

    if(map1[charEnd] === undefined){
      map1[charEnd] = 1;
    }else{
      map1[charEnd]++
    }

    if(end-start+1 === len){
      if(isAnagram(map1, map2)){
        result.push(start);
      }
      map1[charStart]--
      end++;
      start++;
      continue;
    }
    end++;
  }
  return result;
};

function toMap(str){
  let map = {};
  for(let i = 0; i < str.length; i++){
    let c = str.charAt(i);
    if(map[c]){
      map[c]++;
    }else{
      map[c] = 1;
    }
  }
  return map;
}

function isAnagram(str1Info, str2Info){
  let str1Key = Object.keys(str1Info);

  if(str1Key.length !==  Object.keys(str2Info).length){
    return false;
  }

  return str1Key.every(key => str1Info[key] === str2Info[key])
}


