// 寄生组合式继承
function extend(subClass, superClass) {

    // 先把父类的原型拿到
    var prototype = Object.create(superClass.prototype);
    // 把构造器调用子类的构造器
    prototype.constructor = subClass;

    subClass.prototype = prototype;
}

function Father() {

}

function Son() {
    Father.call(this);
}

extend(Son, Father);

