// any和unknown的区别

// any
let a: any = 1;
a = '1';
a = true;

// unknown
let b: unknown = 1;
b = '1';
b = true;

// any可以赋值给任何类型
let c: string = a;
let d: number = a;
let e: boolean = a;

// unknown只能赋值给any和unknown
let f: string = b; // error
let g: number = b; // error
let h: boolean = b; // error

let i: any = b;
let j: unknown = b;

// any可以调用任何方法
a.toFixed(2);
a.trim();
a.split('');

// unknown只能调用any和unknown的方法
b.toFixed(2); // error
b.trim(); // error
b.split(''); // error

b.toString();
b.valueOf();

// any可以访问任何属性
a.length;
a.name;
a.age;

// unknown只能访问any和unknown的属性
b.length; // error
b.name; // error
b.age; // error

b.toString();
b.valueOf();
