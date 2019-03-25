// 输入：一个接收多个参数的函数
// 输出: 一个接收一个参数并且返回可以接收剩余参数的函数
var currying = function(func) {

    // 用来保存参数列表的数组，利用闭包的原理把list保存在内存中。
    var list = [], funcArgsLength = func.length;

    var judge = function() {
        const argList = Array.prototype.slice.call(arguments);
        list = list.concat(argList);
        // 参数满了就执行func
        if (list.length === funcArgsLength) {
            return func(...list)
        } else { // 没有满就继续接收参数的方法
            return judge;
        }
    };

    return judge;
}

function add(x, y) {
    return x + y;
}

var addCurrying = currying(add);

// console.log(add(1, 2));

var curryPart1 = addCurrying(1);
console.log(curryPart1(10));