// 简单的自己实现new操作
function newObj(F, ...args) {
    // 首先在自己内部创建一个空的对象obj
    var obj = {};
    // 将对象的__proto__指向将要new的Function的prototype，这样就实现了属性的继承
    obj.__proto__ = F.prototype;
    // 调用F，将F内部的this指向obj，这样可以直接使用this通过__proto__访问Function的prototype
    F.call(obj, ...args);
    return obj;
}

// 测试
function Test(name) {
    this.name = name;
}
const instance = newObj(Test, 'ellison');
console.log('instance name --> ', instance.name);