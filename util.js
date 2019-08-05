module.exports =  {
    arrayToList(arr){
        let dummy = {val:null};

        arr.reduce((a, b) => {
            return a.next = {val: b};
        }, dummy)

        return dummy.next;
    }
}