const users = [
    { name: "Alice", age: 28, email:"alice123@gmail.com" },
    { name: "Bob", age: 34, email:"bob.1st@gmail.com" },
    { name: "Charlie", age: 22, email:"charlie.qwer@gmail.com" },
];

for (const { name, email, age } of users) {
    console.log(`User: ${name} is ${age} years old. Contact: ${email}`);
}
