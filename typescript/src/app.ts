// let message = "Hello, world!";
// message = "1";
// let n = 10;
// n = 100;
// let isActive: boolean = true;
// isActive = false;

// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(1, 2));

// interface Person {
//     name?: string;
//     age?: number;
// }

// let person: Person = {};

// console.log(person);

// interface CarModel {
//     brand: string;
//     model: string;
//     year: number;
// }

// class Car {
//     brand: string;
//     model: string;
//     year: number;
//     constructor(brand: string, model: string, year: number) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     displayInfo(): CarModel {
//         return {
//             brand: this.brand,
//             model: this.model,
//             year: this.year,
//         };
//     }
// }

// let car = new Car("Toyota", "Camry", 2022);
// car.displayInfo();

// type Status = "active" | "inactive" | "deleted";

// const getData = (status: Status) => {
//     return status;
// };

// console.log(getData("active"));

// type SystemMessage = { kind: "ABORT" } | { kind: "DELETE" };

// interface Identity {
//     id: string;
//     name: string;
// }

// interface Contact {
//     email: string;
//     phone: string;
// }

// interface Address {
//     city: string;
//     street: string;
//     number: number;
// }

// type Employee = Identity & Contact;

// let employee: Employee & Address = {
//     name: "John Doe",
//     id: "123",
//     email: "kD5oT@example.com",
//     phone: "123-456-7890",
//     city: "New York",
//     street: "Main Street",
//     number: 123,
// };

interface MetaData {
    sex: string;
    height: "tall" | "short";
    favouriteNumber: number;
}

interface Person<T, A> {
    id: string;
    name: string;
    age: A;
    metadata: T;
}

const firstPerson: Person<MetaData, number> = {
    id: "1",
    name: "John Doe",
    age: 30,
    metadata: {
        sex: "male",
        height: "tall",
        favouriteNumber: 7,
    },
};

console.log(firstPerson);