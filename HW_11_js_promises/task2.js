//Function to fetch todo by ID and user by ID
function fetchTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .catch(error => console.log("Error fetching todo:", error));
}

function fetchUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .catch(error => console.log("Error fetching user:", error));
}

// Using Promise.all
const responses = await Promise.all([
    fetchTodoById(1),
    fetchUserById(1)
]);

console.log("Promise.all result: ", responses);

// Using Promise.race
const firstResponse = await Promise.race([
    fetchTodoById(1),
    fetchUserById(1)
]);

console.log("Promise.race result: ", firstResponse);