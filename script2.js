// Movie Form & List Elements
const movieForm = document.getElementById('movieForm');
const movieTitle = document.getElementById('movieTitle');
const movieGenre = document.getElementById('movieGenre');
const movieList = document.getElementById('movieList');

// Event Listener for Form Submit
movieForm.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting normally

    // Get values from input fields
    const title = movieTitle.value;
    const genre = movieGenre.value;

    // Create new list item for movie
    const movieItem = document.createElement('li');
    movieItem.innerHTML = `
        <span>${title} - ${genre}</span>
        <button onclick="removeMovie(this)">Remove</button>
    `;

    // Append new movie to the list
    movieList.appendChild(movieItem);

    // Clear input fields after adding movie
    movieTitle.value = '';
    movieGenre.value = '';
});

// Function to remove movie from list
function removeMovie(button) {
    button.parentElement.remove();  // Removes the entire <li> element
}
