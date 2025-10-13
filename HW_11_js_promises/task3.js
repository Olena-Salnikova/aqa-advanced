//Function to fetch todo by ID and user by ID using async/await
async function fetchTodoById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return data;
    } catch (error) {
        console.log("Error fetching todo:", error);
    }
}

async function fetchUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return data;
    } catch (error) {
        console.log("Error fetching user:", error);
    }

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