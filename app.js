//Examples of using the library for different requests.

const http = new EasyHTTP;


data = {
    name: 'Jane',
    familyName: 'Doe'
}

// Get Users

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Create User

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Update User

// http.put('https://jsonplaceholder.typicode.com/users/1', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Delete User

// http.delete('https://jsonplaceholder.typicode.com/users/1')
// .then(data => console.log(data))
// .catch(err => console.log(err));