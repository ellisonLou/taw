var merge = function(arr) {
    return Array.from(new Set(arr))
}


//===== 测试 =====

const arr = [1,2,3,4,5,5,5,9,9,1];
console.log(merge(arr));