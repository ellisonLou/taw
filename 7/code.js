const _  = require('lodash');

function isEmptyValue(value) {
    if (value === null || value === undefined) return true;
    if (Array.isArray(value) || typeof(value) === 'string') {
        return value.length === 0;
    }
    for (let i in value) {
        if (value.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

//test
console.log(isEmptyValue([]));
console.log(isEmptyValue({}));
console.log(isEmptyValue(''));
console.log(isEmptyValue(undefined));
console.log(isEmptyValue(null));

console.log(isEmptyValue('1'));


const validateFieldsItem = {
    资料1填写不完整: ['A1', 'A2', 'A3'],
    资料2填写不完整: ['B1', 'B2', 'B3'],
    资料3填写不完整: ['C1', 'C2', 'C3'],
}

const toValidateObj = {
    A1: [1,2,3],
    A2: '111',
    A3: '222',

    B1: [4,5,6],
    B2: '333',
    B3: '444',

    C1: [7,8,9],
    C3: {
        name: 'xx',
    }
}

// 校验一个对象里面某些字段的完整性
function validateWholeness(toValidateObj, validateFieldsInfo) {
    const fieldList = Object.values(validateFieldsInfo);
    let result = null;
    _.forEach(fieldList, (item, index) => {
        let count = 0;
        _.forEach(item, (field) => {
            if (isEmptyValue(toValidateObj[field])) {
                count += 1;
            }
        });
        if (count !== 0 && count !== 3) {
            result = Object.keys(validateFieldsInfo)[index];
            return false;
        }
        return true;
    });
    return result;
}

validateWholeness(toValidateObj, validateFieldsItem);