
//  参数后面添加文号？表示该参数可选
// 函数生命
function add(x : number, y : number, z? : number) {
    if (typeof z === 'number') {
        return x + y + z;
    }
    return x + y;
}

let result = add(3, 5);