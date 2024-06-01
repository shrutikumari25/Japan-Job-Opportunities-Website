// Function to perform search
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    const searchResults = document.getElementById('searchResults');

    // You can perform search operations here, for example, fetch data from a server and display the results
    // For demonstration purposes, let's just display the search term
    searchResults.textContent = `Search results for: ${searchTerm}`;
}

// Event listener for search button click
document.getElementById('searchButton').addEventListener('click', performSearch);

// Event listener for pressing Enter key in the search input
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});
