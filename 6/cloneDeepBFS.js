function isObject(obj) {
    return typeof(obj) === 'object' && obj !== null;
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

const a = cloneDeepBFS(demo);
demo.list[1].key = 'value2';
console.log('a ---> ', a)
console.log('demo ---> ', demo);
a.func('sdcc')

// 在对象是object或者array的时候，返回一个空的对象
function getEmpty(o){
	if(Object.prototype.toString.call(o) === '[object Object]'){
		return {};
	}
	if(Object.prototype.toString.call(o) === '[object Array]'){
		return [];
	}
	return o;
}
function deepCopyBFS(origin){
    // 广度优先遍历使用queue作为while循环的条件，一旦queue里面没有元素了，那么整个树就遍历完成了。
    let queue = [];
    // 记录出现过的对象，用于处理环
	let map = new Map();

    // 生成一个全新的对象
    let target = getEmpty(origin);
    // 不是引用值，就直接返回target
	if(target !== origin){
        // 如果是引用值，直接把原始对象和 target(即将复制origin的对象)推到queue中。
		queue.push([origin, target]);
		map.set(origin, target);
	}

	while(queue.length){
        // 这里把tar 从queue中获取到，保证tar是到目前为止最新的树
        let [ori, tar] = queue.shift();
        // 遍历原来的树
		for(let key in ori){
			// 处理环状
			if(map.get(ori[key])){
				tar[key] = map.get(ori[key]);
				continue;
			}
            // 如果不是应用类型，直接把ori的值赋给tar
            tar[key] = getEmpty(ori[key]);
            // 是引用类型，需要对引用类型进一步复制，不能直接赋值了
			if(tar[key] !== ori[key]){
                // 将这个引用类型的原对象和将要赋值的对象推进队列，下个循环中处理值类型的赋值，对象类型和数组类型都可以被for in 遍历
				queue.push([ori[key], tar[key]]);
				map.set(ori[key], tar[key]);
			}
		}
	}

	return target;
}