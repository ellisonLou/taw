var transform = function(str) {
    const prefix = '<g>', suffix = '</g>';
    return str.replace(/=g/g, prefix).replace(/=/g, suffix);
}

//===== 测试 =====

const str1 = '=g1.18 进入开发=';
const str2 = '=g1.23 联调(-1)=，=g1.25 发布(+1)=';
const str3 = '1.25 发布';
const str4 = '1.35='

console.log(transform(str1));
console.log(transform(str2));
console.log(transform(str3));
console.log(transform(str4));
