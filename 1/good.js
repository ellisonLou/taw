var transform = function(str) {
    return str.replace(/=g([^=]+)=/g, `<g>$1</g>`);
}

//===== 测试 =====

const str1 = '=g1.18 进入开发=';  // 预期值： <g>1.18 进入开发</g>
const str2 = '=g1.23 联调(-1)=，=g1.25 发布(+1)=';  // 预期值： <g>1.23 联调(-1)</g>，<g>1.25 发布(+1)</g>
const str3 = '1.25 发布';  // 预期值： 1.25 发布
const str4 = 'int n = 10'  // 预期值： int n = 10

console.log(transform(str1));
console.log(transform(str2));
console.log(transform(str3));
console.log(transform(str4));
