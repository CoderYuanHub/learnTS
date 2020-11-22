// 泛型的使用是使得获取的类型，由传入的值决定
// 泛型的基本使用
function each<T>(arg: T): T{
    return arg;
}
const result = each('123');


function swap<T ,U> (arg: [T, U]):[T, U] {
    // return arg
    return ([arg[0], arg[1]])
}

const result2 = swap([2,3])

console.log(result2[0])

// 约束泛型

function echo<T> (arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const result3 = echo([1, 2, '4'])


interface echoWithArray {
    length: number
}

function echoWithLength<T extends echoWithArray> (arg: T): T {
    console.log(arg.length)
    return arg;
}

const result4 = echoWithLength('123');
const result5 = echoWithLength({length: 123, height: '12'});
const result6 = echoWithLength([1, 2,3])


class Queue<T> {
    private data = []
    push(item: T) {
        return this.data.push(item)
    }

    pop(): T {
        return this.data.shift()
    }
}
const queue = new Queue<number>();
queue.push(1);
console.log(queue.push(1))

const queue2 = new Queue<string>();
queue2.push("333")
console.log(queue2.pop());