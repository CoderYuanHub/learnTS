interface Swim {
    Swimming(): void
}

interface Run {
    running();
}


class Playground implements Run {
    running() {
        return '操场可以跑步'
    }
}


// 继承接口两种写法
// 方法一
class Gymnasium implements Run, Swim {
    running() {
        return '体育馆可以跑步';
    };
    Swimming() {
        return '体育馆可以游泳';
    }
}
// 方法二
// 接口也可以继承
interface RunWithSwim extends Swim {
    running(): string;
}
class Gymnasiums implements RunWithSwim {
    running() {
        return '体育馆可以跑步';
    };
    Swimming() {
        return '体育馆可以游泳';
    }
}

