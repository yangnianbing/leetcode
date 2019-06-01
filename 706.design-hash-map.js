/*
 * @lc app=leetcode id=706 lang=javascript
 *
 * [706] Design HashMap
 */
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.keys = Array.from({length: 1000}, x => []);
    this.values = Array.from({length:1000}, x => [])
    this.map = function(num){
      return num % 1000;
    }
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let mapValue = this.map(key);
    let index = this.keys[mapValue].indexOf(key);
    if(index === -1){
      this.keys[mapValue].push(key);
      this.values[mapValue].push(value)
    }else{
      this.values[mapValue][index] = value;
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let mapValue = this.map(key);
    let index = this.keys[mapValue].indexOf(key);
    if(index === -1){
      return -1;
    }else{
      return this.values[mapValue][index];
    }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  let mapValue = this.map(key);
  let index = this.keys[mapValue].indexOf(key);

  if(index !== -1){
    this.keys[mapValue].splice(index, 1)
    this.values[mapValue].splice(index, 1)
  }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */


