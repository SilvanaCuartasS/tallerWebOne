
// Reto sumar propiedades
const people = [
    { name: "Alice", age: 10 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 28 },
]

const sumaPeople = (array) => {
    const totalAge = array[0].age + array[1].age + array[2].age + array[3].age;
    return totalAge;
};

console.log(sumaPeople(people));

//Reto filtrar objetos
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Shirt", price: 50},
    { name: "Phone", price: 500 }
];

let newArray = [];

const filterProducts = (array) => {
    products.forEach(element => {
    if (element.price > 50) {
    newArray.push(element);
    }   
    });
   return newArray;
}

console.log(filterProducts(newArray));

//Reto de encontrar un objeto por propiedad

const students = [
    { name: "Alice", grade: 5 }, 
    { name: "Bob", grade: 1 },
    { name: "Charlie", grade: 3 },
    { name: "David", grade: 4 }
];


const findStudent = (array, name) => {
    let studentFound = null;
   array.forEach(element => {
       if (element.name === name) {
           studentFound = element;
       }
   });
   return studentFound; 
}

console.log(findStudent(students, "Charlie"));

//Reto de ordenar objetos

const books = [
    { name: "Book A", price: 20 },
    { name: "Book B", price: 12 },
    { name: "Book C", price: 90 }
];

let sortedBooks = [];

const priceLowerAndHigher = (array) => {
   for (let i = 0; i < array.length; i++) {
        for (let l = i + 1; l < array.length; l++) {
              if (array[i].price > array[l].price) {
                let temp = array[i];
                array[i] = array[l];
                array[l] = temp;
            }
        }
    
   }
    sortedBooks = array;
    return sortedBooks;
}

console.log(priceLowerAndHigher(books));

//Reto de combinar propiedades de objetos
const user1 = [
    { name: "Alice", age: 25 },
];

const user2 = [
    { name: "Bob", age: 15 },
];

const combineUsers = (array1, array2) => {
    const combined = [];
    array1.forEach(user => {
        combined.push(user);
    });
    array2.forEach(user => {
        combined.push(user);
    });
    return combined;
}

console.log(combineUsers(user1, user2));

