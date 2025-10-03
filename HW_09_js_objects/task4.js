const person = {
    firstName: "Alex",
    lastName: "Smith",
    age: 25,
};
person.email = "alex.sm@gmail.com";
delete person.age;

console.log(person);