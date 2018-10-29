function bubbleSort(arr){
    if(arr === null || arr.length < 2){
        return arr;
    }
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}



/*
1、数组为空或者只有一个元素，直接返回
2、在一趟排序中，从0下标位置开始，比较相邻两元素的大小，如果arr[j]>arr[j+1]，那么将两个元素交换位置，
   这样最终结果会是最大数排在数组的末尾，那下一趟排序的时候就不用再比较这个最大数了
3、所以，下一趟排序时，元素个数应该-1
4、i 记录的就是排序的趟数
时间复杂度：n^2
 */