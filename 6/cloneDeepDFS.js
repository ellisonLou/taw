function isObject(obj) {
    return typeof(obj) === 'object' && obj !== null;
}

function cloneDeepDFS(value, wm = new WeakMap()) {
    const Constructor = value.constructor;
    let ret;
    switch (Constructor) {
        case Date:
            ret = new Constructor(value.getTime());
            break;
        case RegExp:
            ret = new Constructor(value);
            break;
        default:
            if (wm.has(value)) {
                return wm.get(value);
            }
            ret = new Constructor();
            wm.set(value, ret);
            break;
    }
    for (let i in value) {
        const val = value[i];
        ret[i] = isObject(val) ? cloneDeepDFS(val, wm) : val;
    }
    return ret;
}

const demo = {
    name: 'xxx',
    list: [
        {
            name: '111'
        },
        {
            key: 'value'
        }
    ],
    isNull: null,
    isDate: new Date(),
    func: function(a) {console.log(a)}
}
demo.loop = demo;

const a = cloneDeepDFS(demo);
demo.list[1].key = 'value2';
console.log('a ---> ', a)
console.log('demo ---> ', demo);
a.func('sdcc')