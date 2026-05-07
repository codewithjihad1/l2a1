// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
    const results: number[] = numbers.filter((num) => num % 2 === 0);
    return results;
}

// Problem 2
function reverseString(str: string): string {
    const reversed: string = str.split("").reverse().join("");
    return reversed;
}

// Problem 3
function checkType(str: string | number): string {
    let result: string;

    if (typeof str === "string") {
        result = "String";
    } else {
        result = "Number";
    }
    return result;
}

// Problem 4
function getProperty<ObjectType, KeyType extends keyof ObjectType>(
    obj: ObjectType,
    key: KeyType,
): ObjectType[KeyType] {
    return obj[key];
}

// Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true
    };
}


// Problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Problem 7
function getIntersection(array1: number[], array2: number[]): number[] {
    return array1.filter((number) => array2.includes(number));
}
