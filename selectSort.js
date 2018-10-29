function selectSort(arr){
    if(arr === null || arr.length < 2){
        return arr;
    }
    for(var i = 0; i < arr.length; i++){
        var minIndex = i;
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}


/***1、数组为空或者只有一个元素，直接返回
    2、循环整个数组，把每次循环的第一个元素下标设为minIndex
    3、以minIndex位置的元素依次与其后的元素比较，如果arr[j]<arr[minIndex]，就把minIndex设为j，直到遍历完数组；
       此时minIndex位置的元素就是每次循环的最小值，然后将此元素与初始minIndex位置的元素交换
       */

