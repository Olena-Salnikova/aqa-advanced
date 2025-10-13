class Task{
    constructor(id) {
        this.id = id;
        this.fetchTodoById(id);
    }

// Method to fetch todo by ID
    async fetchTodoById(id) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(data => {
                this.userId = data.userId;
                this.title = data.title;
                this.completed = data.completed;
            })
            .catch(error => console.log("Error fetching todo:", error));
    }
}

class User{
    constructor(id) {
        this.id = id;
        this.fetchUserById(id);
    }

// Method to fetch user by ID
    async fetchUserById(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                this.name = data.name;
                this.username = data.username;
                this.email = data.email;
                this.address = data.address.street + ", " + data.address.suite + ", " + data.address.city + ", " + data.address.zipcode;
            })
            .catch(error => console.log("Error fetching user:", error));
    }
}

// Example usage :
const task = new Task(Math.floor(Math.random() * 10) + 1);
setTimeout(() => console.log("Result Task:", task), 1000); // Delay to allow fetch to complete
const user = new User(Math.floor(Math.random() * 10) + 1);
setTimeout(() => console.log("Result User:", user), 1000); // Delay to allow fetch to complete