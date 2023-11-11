let object = {};

const arr = ["fizz = 3", "buzz.one.0 = item1", "buzz.one.1 = item2", "buzz.one.two = 123", "fizzbuzz.root.a.b.c = 13"];

function set(path, value) {
    let schema = object;
    let pList = path.split('.');
    let len = pList.length;
    for (let i = 0; i < len - 1; i++) {
        let elem = pList[i];
        if (!schema[elem]) schema[elem] = {}
        schema = schema[elem];
    }

    schema[pList[len - 1]] = value;
    return schema
}

for (const val of arr) {
    const keys = val.split(' = ');
    set(keys[0], keys[1]);
}

console.log(object) 

// {
//     fizz: '3',
//     buzz: { one: { '0': 'item1', '1': 'item2', two: '123' } },
//     fizzbuzz: { root: { a: { b: { c: '13' } } } }
// }