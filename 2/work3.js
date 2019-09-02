var merge = function(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return [];
    const ret = [];
    for (let i=0; i<arr.length; i++) {
        if (ret.indexOf(arr[i]) === -1) {
            ret.push(arr[i]);
        }
    }
    return ret;
}


//===== 测试 =====

const arr = [1,2,3,4,5,5,5,9,9,1];
console.log(merge(arr));