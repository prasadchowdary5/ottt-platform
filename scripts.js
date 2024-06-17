document.addEventListener('DOMContentLoaded', () => {
    const trendingMovies = [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        { id: 3, title: 'Movie 3' }
    ];

    const recommendedMovies = [
        { id: 4, title: 'Movie 4' },
        { id: 5, title: 'Movie 5' },
        { id: 6, title: 'Movie 6' }
    ];

    const trendingMoviesContainer = document.getElementById('trendingMovies');
    const recommendedMoviesContainer = document.getElementById('recommendedMovies');

    function renderMovies(container, movies) {
        container.innerHTML = movies.map(movie => `
            <div data-id="${movie.id}" class="movie-item">${movie.title}</div>
        `).join('');
    }

    renderMovies(trendingMoviesContainer, trendingMovies);
    renderMovies(recommendedMoviesContainer, recommendedMovies);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const allMovies = [...trendingMovies, ...recommendedMovies];
        const filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(query));
        renderMovies(trendingMoviesContainer, filteredMovies);
        renderMovies(recommendedMoviesContainer, []);
    });

    trendingMoviesContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('movie-item')) {
            const movieId = e.target.getAttribute('data-id');
            window.location.href = `details.html?id=${movieId}`;
        }
    });

    recommendedMoviesContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('movie-item')) {
            const movieId = e.target.getAttribute('data-id');
            window.location.href = `details.html?id=${movieId}`;
        }
    });
});
