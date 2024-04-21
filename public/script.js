document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('command-form');

    // Add submit event listener to form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form submission from reloading the page
        const inputElement = document.getElementById('command-input');
        const input = inputElement.value.trim();
        if (!input) return; // Do nothing if the input is empty

        // Send a POST request to the server
        fetch('/command', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ command: input })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Assuming 'data' contains a response from the server
            addResponseLine(data.response); // Assuming the server sends back a 'response' key with the output
            inputElement.value = ''; // Clear the input after sending command
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    // Refocus on the input when the form is clicked, which might occur when the input is recreated
    form.addEventListener('click', function() {
        document.getElementById('command-input').focus();
    });
});

// Function to add the server's response to the shell
function addResponseLine(response) {
    const shell = document.getElementById('bash-shell');
    const responseDiv = document.createElement('div');
    responseDiv.className = 'response-line';
    responseDiv.textContent = response;
    shell.appendChild(responseDiv);
    createInputLine();
}

// Function to recreate the input line in the shell
function createInputLine() {
    const shell = document.getElementById('bash-shell');
    const existingCommandLine = shell.querySelector('.command-line');
    if (existingCommandLine) {
        shell.removeChild(existingCommandLine); // Remove the old command line first if it exists
    }
    const commandLine = document.createElement('div');
    commandLine.className = 'command-line';
    commandLine.innerHTML = `<span class="user">user@host:</span><span class="directory">~/</span>$ <input type="text" id="command-input" autofocus>`;
    shell.appendChild(commandLine);
    document.getElementById('command-input').focus(); // Focus on the newly created input
}



