const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'assets')));

// Define a route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// http://localhost:3000/auth
app.post('/auth', function (request, response) {
    // Capture the input fields
    // let username = request.body.username;
    // let password = request.body.password;
    // Ensure the input fields exists and are not empty

    response.redirect('/home');

});

// http://localhost:3000/home
app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname + '/home.html'));
});


// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
