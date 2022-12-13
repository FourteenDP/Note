type Person = {
  name: string;
  age: number;
}


interface Student extends Person {
  school: string;
}

class Student implements Person {
  name: string;
  age: number;
  school: string;
}
