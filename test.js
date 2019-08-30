/**
 * 给定一个数组序列, 需要求选出一个区间, 使得该区间是所有区间中经过如下计算的值最大的一个：

区间中的最小数 * 区间所有数的和最后程序输出经过计算后的最大值即可，不需要输出具体的区间。如给定序列 [6 2 1]则根据上述公式, 可得到所有可以选定各个区间的计算值:

[6] = 6 * 6 = 36;

[2] = 2 * 2 = 4;

[1] = 1 * 1 = 1;

[6,2] = 2 * 8 = 16;

[2,1] = 1 * 3 = 3;

[6, 2, 1] = 1 * 9 = 9;

从上述计算可见选定区间 [6] ，计算值为 36， 则程序输出为 36。

区间内的所有数字都在[0, 100]的范围内;

输入描述:
第一行输入数组序列长度n，第二行输入数组序列。
对于 50%的数据, 1 <= n <= 10000;
对于 100%的数据, 1 <= n <= 500000;

输出描述:
输出数组经过计算后的最大值。

输入例子1:
3
6 2 1

输出例子1:
36
*/


var m = function(input){
    let minIndex = 0;
    let maxTargetValue = Number.MIN_SAFE_INTEGER;

    let leftIndex, rightIndex;
    let len = input.length;

    while(minIndex <= len - 1){
        let sum = minValue = input[minIndex];
        leftIndex = rightIndex = minIndex;
        while(--leftIndex >= 0 && input[leftIndex] >= minValue){
            sum += input[leftIndex];
        }

        while(++rightIndex <= len && input[rightIndex] >= minValue){
            sum += input[rightIndex];
        }
        
        maxTargetValue = Math.max(sum * minValue, maxTargetValue);
        minIndex++
    }

    return maxTargetValue;

}


/**
 * 奶牛在3岁到7岁期间每年产一个牛仔，大于10岁死亡。一开始只有一头1岁奶牛。

问：n年后一共多少头？
 */

var n = function(num){
    let cows = new Array(10).fill(0);

    cows[0] = 1;
    let newBorn;
    while(num > 0){
        newBorn = subSum(2, 6, cows);
        cows.unshift(newBorn);
        cows.length = 10;
        num--;
    }

    function subSum(start, end, array){
        return array.slice(start, end + 1).reduce((a, b) => a + b)
    }

    return cows.reduce((a,b) => a + b);
}


console.log(n(5))
