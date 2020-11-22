// 原本基础类型
const a : number = 1;
const b : boolean = true;
const c : string = '1';
const d : null = null;
const e : undefined = undefined;

// 新增 any 可以是任何类型
const f : any = '222';

// 联合类型 |,相当于或的意思 
let g : number | string = '2';
g = 2;

// 数组写法 基本类型[]
const h : number[] = [2,4,5]
const i : string[] = ['2', '3', '5']

// 元组写法 [基本类型，基本类型....]
const j : [number, string, boolean] = [1, '1', true]