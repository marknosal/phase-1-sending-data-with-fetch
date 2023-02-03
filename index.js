// Add your code here
// const formData = {
//     dogName: 'Byron',
//     dogBreed: 'Poodle', 
// }

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify(formData),
// };

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });

// const postBody = {
//     name: 'Chuy',
//     email: 'tripod3leg@yahoo.com',
// };

// const postObject = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify(postBody),
// };

function submitData(name, email) {
    const postBody = {
        name: 'Steve',
        email: 'steve@steve.com',
    };

    const postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(postBody),
    };
    
    return fetch('http://localhost:3000/users', postObject)
        .then(response => response.json())
        .then((data) => {
            console.log(data.id);
            const postResponse = document.querySelector('body').append(data.id)
        })
        .catch(function (error) {
            const errorMessage = document.querySelector('body').append(error)
        });
    
}