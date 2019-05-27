/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let readIndex = 0,
      writeIndex = 0,
      len = chars.length;

      while(readIndex < len){
        thisChar = chars[readIndex];
        let count = 0;

        while(readIndex < len && chars[readIndex] == thisChar){
          readIndex++;
          count++;
        }
        chars[writeIndex] = thisChar
        writeIndex += 1;
        if(count > 1){
          for(let i of count + ''){
            chars[writeIndex] = i;
            writeIndex++;
          }
        }

      }
  return writeIndex;
};

