const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route to handle incoming commands
app.post('/command', (req, res) => {
    const command = req.body.command;
    console.log('Received command:', command);

    // Here you can process the command as needed
    // For demonstration, let's simply send back a response
    res.json({ response: `Server Response: ${command}` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





