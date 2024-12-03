document.addEventListener('DOMContentLoaded', function () {
    const movieData = {
        regions: {
            labels: ['North America', 'Europe', 'Asia', 'Rest of World'],
            values: [450, 350, 500, 200]
        },
        genres: {
            labels: ['Action', 'Drama', 'Comedy', 'Horror'],
            values: [30, 25, 20, 15]
        },
        trends: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            values: [450, 500, 350, 400, 550, 600]
        },
        awards: {
            labels: ['Action', 'Drama', 'Comedy', 'Horror'],
            values: [10, 20, 15, 5]
        }
    };

    // Update movie stats data
    const statsData = {
        totalMovies: movieData.trends.values.reduce((sum, value) => sum + value, 0), // Sum of all production years
        highestGrossingMovie: "Avengers: Endgame ($2.798B)" // Example highest-grossing movie
    };

    // Update the stats in the DOM
    document.getElementById('total-movies').textContent = statsData.totalMovies;
    document.getElementById('highest-grossing').textContent = statsData.highestGrossingMovie;

    // Regional Grossing Data (Bar Chart)
    new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: movieData.regions.labels,
            datasets: [{
                label: 'Box Office (Millions $)',
                data: movieData.regions.values,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ]
            }]
        },
        options: { responsive: true }
    });

    // Genre-wise Distribution Data (Pie Chart)
    new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: {
            labels: movieData.genres.labels,
            datasets: [{
                data: movieData.genres.values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ]
            }]
        },
        options: { responsive: true }
    });

    // Yearly Production Trends (Line Chart)
    new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
            labels: movieData.trends.labels,
            datasets: [{
                label: 'Movies Produced',
                data: movieData.trends.values,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1
            }]
        },
        options: { responsive: true }
    });

    // Awards by Genre (Pie Chart)
    new Chart(document.getElementById('awardsChart'), {
        type: 'pie',
        data: {
            labels: movieData.awards.labels,
            datasets: [{
                data: movieData.awards.values,
                backgroundColor: [
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ]
            }]
        },
        options: { responsive: true }
    });
});


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
