// 首先只考虑对象，数组的情况，像function，symbol之类的先不考虑，Map Set之类的也不考虑
function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

function isPlainObject(obj) {
    const keys = Object.keys(obj);
    for(let i=0; i<keys.length; ++i) {
        const key = keys[i]
        const value = obj[key];
        if (isArray(value) || isObject(value)) {
            return false;
        }
    }
    return true;
}

function isPlainArray(arr) {
    for(let i=0; i<arr.length; ++i) {
        const value = arr[i]
        if (isArray(value) || isObject(value)) {
            return false;
        }
    }
    return true;
}

function dfs(object) {
    if (isArray(object)) {
        if (isPlainArray(object)) {
            console.log(JSON.stringify(object));
        } else {
            object.forEach((item) => {
                dfs(item);
            })
        }
    }
    else if (isObject(object)) {
        if (isPlainObject(object)) {
            console.log(JSON.stringify(object));
        } else {
            Object.keys(object).forEach((key) => {
                const value = object[key];
                dfs(value);
            })
        }
    }
    else {
        console.log(JSON.stringify(object));
    }
}

let nestObj = {
    attrA: {
        arrrB: [1, 2, 3, {
            fuck: 'you',
        }],
        name: 'name',
        attrC: {
            attrD: {
                list: [
                    {
                        name: '1'
                    },
                    {
                        name: '2'
                    }
                ]
            }
        }
    },
    attrE: 'hello world',
    attrF: ['f']
}

dfs(nestObj)

// 这个不行
