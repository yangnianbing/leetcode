function quickSort(array){
    

    partition(array, 0, array.length - 1);
    return array;
    function partition(array, begin, end){
        let i = begin, j = end, key;

        if(i >= j){
            return array;
        }

        for(key = array[i]; i < j;){
            for(;i < j && array[j] > key; j--);
            array[i] = array[j];
            for(;i < j && array[i] <= key; i++);
            array[j] = array[i]
        }
        array[i] = key;
        partition(array, begin, i);
        partition(array, i + 1, end);
    }
}


