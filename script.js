// document.addEventListener('DOMContentLoaded', function () {
//     // Check if 'visitCount' is already in localStorage
//     if (!localStorage.getItem('visitCount')) {
//         // If not, set it to 0
//         localStorage.setItem('visitCount', 0);
//     }

//     // Increment and display visit count
//     let visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
//     localStorage.setItem('visitCount', visitCount);
//     document.getElementById('visitCount').textContent = 'Visits: ' + visitCount;
// });

// document.addEventListener('DOMContentLoaded', function() {
//     // Make a request to the API Gateway on page load
//     fetch('https://0rkxh8bfx8.execute-api.us-east-1.amazonaws.com/visitor', { method: 'GET', headers: { 'Content-Type': 'application/json'}})
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
// })

// document.addEventListener('DOMContentLoaded', function() {
//     fetch('https://4ysrblpup7.execute-api.us-east-1.amazonaws.com')
//         .then(response => response.json())
//         .then(data => {
//             console.log('Response:', data);
//         })
//         .catch(error => console.error(error));
// });

// document.addEventListener('DOMContentLoaded', function() {
//     // Request body
//     const requestBody = {
//         "operation": "create",
//         "payload": {
//             "Item": {
//                 "id": "1234ABCD",
//                 "number": 5
//             }
//         }
//     };

//     // Make a request to the API Gateway on page load
//     fetch('https://dy979ttkpg.execute-api.us-east-1.amazonaws.com/DynamoDBManager', {
//         method: 'POST',  // Change method to POST
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestBody)  // Convert the request body to JSON string
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
// });

document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector(".counter-number");

    async function updateCounter() {
        try {
            let response = await fetch("https://pgiucj7weekcprdapccldzkl3e0dwdee.lambda-url.us-east-1.on.aws/");
            let data = await response.json();
            console.log(data);
            counter.innerHTML = `Views: ${data}`;
        } catch (error) {
            console.error("Error updating counter:", error);
        }
    }

    // Call the function to update the counter after the DOM has loaded
    updateCounter();
});