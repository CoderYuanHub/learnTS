class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run () {
        return `${this.name} is running`;
    }
}

const snake = new Animal('snake');

// 继承
class Dog extends Animal {
    bark () {
        return `${this.name} is barking`;
    }
}

const dog = new Dog('dog');

console.log(snake.run())
console.log(dog.bark())


// 方法重写

class Cat extends Animal {
    constructor(name :string) {
        super(name)
    }

    run () {
        return 'meow,' +  super.run();
    }
}


const cat = new Cat('mao')

console.log(cat.run());


// 测试 声明区别
// 1.封装
class Person {
    public name: string;
    private age: number;
    protected height: number;
    readonly weight: number;
    static like: string[] = ['游泳', '打球']
    static isPerson (person) {
        return person instanceof Person; 
    }
    constructor(name: string, age: number, height: number, weight: number) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    base() {
        return `${this.name}${this.age}岁，身高${this.height},体重${this.weight}`
    }
}

const xiaoMing = new Person('小明', 18, 170, 70);
console.log(xiaoMing.base())
// 公共属性可以在任何条件下进行修改和访问
console.log(xiaoMing.name)
// 私有属性只能在父类中访问
// console.log(xiaoMing.age)
// 保护属性只能在父类及其子类中访问
// console.log(xiaoMing.height)
// 只读属性，可以在任何条件下读取、访问，但无法进行修改
console.log(xiaoMing.weight)
// static 静态属性，可以直接通过类进行访问,无法通过实例化访问
console.log(Person.like);
console.log(Person.isPerson(xiaoMing));

// 2.继承
class OtherPerson extends Person{
    running() {
        return `${this.name}跑步很酷啊`
    }
}

const xiaoLong = new OtherPerson('小龙', 18, 170, 70)
console.log(xiaoLong.running());

// 多态

class oldPerson extends Person {
    constructor(name:string, age: number, height: number, weight: number) {
        super(name,age,height,weight)
    }

    base(){
        // age 为 private 私有属性，只能在Person类中访问，所以下面会报错，height为protected 属性，只能在父类Person以及子类中访问，weight为readonly属性，只能读取，不能修改
        // return `${this.name}今年${this.age},身高只有${this.height},体重${this.weight}`
        return `${this.name},身高只有${this.height},体重${this.weight}`;
    }
}


const naiNai = new oldPerson('奶奶', 18, 170, 70)
console.log(naiNai.base())



