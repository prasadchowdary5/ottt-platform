document.addEventListener('DOMContentLoaded', () => {
    const movieId = new URLSearchParams(window.location.search).get('id');
    const movies = [
        { id: 1, title: 'Movie 1', description: 'Description of Movie 1' },
        { id: 2, title: 'Movie 2', description: 'Description of Movie 2' },
        { id: 3, title: 'Movie 3', description: 'Description of Movie 3' },
        { id: 4, title: 'Movie 4', description: 'Description of Movie 4' },
        { id: 5, title: 'Movie 5', description: 'Description of Movie 5' },
        { id: 6, title: 'Movie 6', description: 'Description of Movie 6' }
    ];

    const movie = movies.find(m => m.id == movieId);

    if (movie) {
        document.querySelector('#movieDetails h2').innerText = movie.title;
        document.getElementById('movieDescription').innerText = movie.description;
    }
});
