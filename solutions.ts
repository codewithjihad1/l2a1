function filterEvenNumbers(numbers: number[]): number[] {
    const results: number[] = numbers.filter((num) => num % 2 === 0);
    return results;
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

function reverseString(str: string): string {
    const reversed: string = str.split("").reverse().join("");
    return reversed;
}

// console.log(reverseString("typescript"));

function checkType(str: string | number): string {
    let result: string;

    if (typeof str === "string") {
        result = "String";
    } else {
        result = "Number";
    }
    return result;
}

// console.log(checkType("Hello"));
// console.log(checkType(42));
