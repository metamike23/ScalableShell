// Toggle Shell Visibility
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-shell-btn');
    const shellContainer = document.getElementById('shell-container');

    toggleButton.addEventListener('click', function() {
        shellContainer.style.display = shellContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Make the shell container draggable
    makeDraggable(shellContainer);
});



document.getElementById('bash-shell').addEventListener('click', function() {
    this.focus(); // Focuses the shell, useful if you have interactive elements inside
    // Ensures the shell can scroll if the user clicks into it
});


function insertImage(event) {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/svg+xml")) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%'; // Set the width of the image to 100% of the editor width
            img.style.height = 'auto'; // Height will be auto to maintain aspect ratio
            img.alt = 'Uploaded Image';

            const editor = document.getElementById('document-editor');
            editor.appendChild(img); // Append image to the editor
            editor.appendChild(document.createElement('br')); // Add a new line after the image
        };
        reader.readAsDataURL(file);
    } else {
        alert("File type not supported.");
    }
}

