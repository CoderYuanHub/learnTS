//  枚举
const enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
// 枚举没赋值自动从0开始
console.log(Direction.UP) //0

const enum Directions {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}

// 枚举为数字类型会自动累加
console.log(Directions.UP) //1
console.log(Directions.DOWN) //2

const enum DirectionSring {
    UP = '上',
    DOWN = '下',
    LEFT =  '左',
    RIGHT = '右'
}
// 第一个有赋值之后，后面的值必须赋值，类型可以不一样
console.log(DirectionSring.UP) //上