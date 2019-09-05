// 广度优先遍历（非递归实现）

const nestObject = {
    children: [
        {
            children: [{
                attr3: {
                    name: 'xxx',
                    children: [{
                        sex: 'male'
                    }]
                },
            }],
            attr4: '4'
        },
        {
            children: []
        }
    ],
    attr0: 'hello',
}

function bfs(obj) {
    const nodes = [];
    const queue = [];
    queue.unshift(obj);
    while(queue.length) {
        const value = queue.pop();
        nodes.push(value);
        if (value.children) {
            for (let i=0; i<value.children.length; i++) {
                queue.push(value.children[i]);
            }
        }
    }
    return nodes;
}

const nodes = bfs(nestObject);
console.log('nodes --> ', nodes);