module.exports =  {
    arrayToList(arr){
        let dummy = {val:null};

        arr.reduce((a, b) => {
            return a.next = {val: b};
        }, dummy)

        return dummy.next;
    },

    arrayToTree(arr){
        return buildNode(arr, 0)
        function buildNode(arr, index){
            if(index >= arr.length){
                return null;
            }

            let node = {val: arr[index]};
            node.left = buildNode(arr, 2*index + 1);
            node.right = buildNode(arr, 2*(index+1));
            return node;
        }
    }
}