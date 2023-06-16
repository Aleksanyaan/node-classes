let text: string = 'some text';

let num: number = 65;

console.log(text);
console.log(num);

const numbers: number[] = [1, 2, 5, 7, 9];
const strings: string[] = ['1', '2', '5', '7', '9'];
const random: [number, string, boolean] = [1, 'str', true];

const user: {
    name: string,
    isAdmin: boolean,
    age: number | string,
    gender?: string
} = {
    name: 'Jhon',
    isAdmin: false,
    age: 33
}

function greetUser(userName: string): string {
    return `hello ${userName}`;
}
console.log(greetUser('Zhen'));


