/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.values = {};
    this.count = 0;
    this.capacity = capacity;
    this.head = new Node();
    this.tail = new Node();

    this.head.post = this.tail;
    this.tail.pre = this.head;
    
};

function Node(key, value, pre, post){
    this.key = key;
    this.value = value;
    this.pre = pre;
    this.post = post;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.values[key];

    if(!node){
        return -1;
    }

    this.moveToHead(node);
    return node.value;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.values[key];

    if(!node){
        node = new Node(key, value);
        this.values[key] = node;
        this.addNode(node);
        this.count++;

        if(this.count > this.capacity){
            let tail = this.deleteTail();
            delete this.values[tail.key];
        }
    }else{
        node.value = value;
        this.moveToHead(node);
    }
};

LRUCache.prototype.addNode = function(node){
    node.post = this.head.post;
    node.pre = this.head;
    this.head.post = node;
    node.post.pre = node;
}

LRUCache.prototype.moveToHead = function(node){
    this.deleteNode(node);
    node.post = this.head.post;
    node.pre = this.head;
    node.post.pre = node;
    this.head.post = node;
}

LRUCache.prototype.deleteTail = function(){
    let tail = this.tail.pre;
    this.deleteNode(tail);
    return tail;
}

LRUCache.prototype.deleteNode = function(node){
    node.pre.post = node.post;
    node.post.pre = node.pre;
    return node;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */




