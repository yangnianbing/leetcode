
function postorderIterative(root){
    let result =[];
    let stack = [root];
    let cur = root;

    while(stack.length != 0){
        cur = stack.pop();
        result.unshift(cur.val);
        if(!cur.left){
            stack.push(cur.left);
        }
        if(!cur.right){
            stack.push(cur.right);
        }
    }


}

function postorderRecursive(root){
    let result = [];
    function helper(node, result){
        if(!node){
            return;
        }
        helper(node.left, result);
        helper(node.right, result);
        result.push(node.val);
    }
    helper(root, result);
    return result;
}

function inorderIterative(root){
    let result = [];
    let stack = [];
    let cur = root;

    while(cur !== null || stack.length !== 0){
        while(cur !== null){
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;
    }

    return result;
}

function inorderRecursive(root){
    function helper(node, result){
        if(!node){
            return;
        }
        helper(node.left, result);
        result.push(node.val);
        helper(node.right, result);
    }
    let result = [];
    helper(root, result);

    return result;
}

function preorderIterative(root){
    let result = [];
    let stack = [root];

    while(stack.length !== 0){
        let top = stack.pop();
        result.push(top.val);
        top.right && (stack.push(top.right));
        top.left && (stack.push(top.left));
    }

    return result;

}

function preorderRecursive(root){
    function helper(node, result){
        if(!node){return;}
        result.push(node.val);
        helper(node.left, result);
        helper(node.right, result);
    }
    let result = [];
    helper(root, result);

    return result;
}