// BOOLEAN
let isSweet: boolean = true;

// NUMBER
let age: number = 18;

// ARRAY
// below 2 are the same just different syntax
let kittens: string[] = ['Mac', 'Pis', 'Pisi'];
let doggies: Array<string> = ['Sharo', 'Rex'];

// TUPLE
let basket: [string, number];
basket = ['chocolate', 3];

// ENUM
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let carSize: number = Size.Small; // 1
