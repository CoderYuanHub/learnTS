// 类型别名和类型断言
// type aliases
type PulsType = (x: number, y: number) => number
function sum(x: number, y: number): number {
    return x + y;
}
const sum2: PulsType = sum;
console.log(sum2(1,2));

type NameResolver = () => string
type NameOrResolver = string | NameResolver

function getName(n: NameOrResolver): string {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

// type assertion
function getLength(input: number | string): number {
    // const str = input as string;
    // if (str.length) {
    //     return str.length
    // }else {
    //     const num = input as number;
    //     return num.toString().length;
    // }

    if ((<string>input).length) {
        return (<string>input).length
    }else {
        return (<string>input).toString().length
    }
}