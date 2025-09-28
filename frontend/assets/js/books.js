// Books functionality
document.addEventListener('DOMContentLoaded', function() {
    loadBooks();
});

let currentBooks = [];
let currentFilter = 'all';

async function loadBooks() {
    const loadingElement = document.getElementById('books-loading');
    const gridElement = document.getElementById('books-grid');
    const emptyElement = document.getElementById('books-empty');

    try {
        // Mostrar loading
        loadingElement.style.display = 'block';
        gridElement.style.display = 'none';
        emptyElement.style.display = 'none';

        // Hacer petición al backend
        const response = await fetch('/books/api/books/');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Ocultar loading
        loadingElement.style.display = 'none';

        if (data.books && data.books.length > 0) {
            currentBooks = data.books;
            renderBooks(currentBooks);
            gridElement.style.display = 'grid';
        } else {
            // Mostrar estado vacío o libros de fallback
            showFallbackBooks();
            gridElement.style.display = 'grid';
        }

    } catch (error) {
        console.error('Error loading books:', error);
        loadingElement.style.display = 'none';
        
        // Mostrar libros de fallback en caso de error
        showFallbackBooks();
        gridElement.style.display = 'grid';
    }
}

function renderBooks(books) {
    const gridElement = document.getElementById('books-grid');
    
    gridElement.innerHTML = books.map((book, index) => `
        <div class="book-card" data-keywords="${book.keywords.join(',').toLowerCase()}" style="animation-delay: ${(index + 1) * 0.1}s">
            <div class="book-image-container">
                <img src="${book.image_url}" alt="${escapeHtml(book.title)}" class="book-image" 
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22300%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23a78bfa%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22 font-family=%22Arial%22 font-size=%2224%22>Book</text></svg>'">
                ${book.featured ? '<div class="featured-badge">Featured</div>' : ''}
            </div>
            <div class="book-content">
                <div class="book-main-info">
                    <h3 class="book-title">${escapeHtml(book.title)}</h3>
                    <div class="book-author">${escapeHtml(book.author)}</div>
                    <p class="book-summary">${escapeHtml(book.summary)}</p>
                </div>
                <div class="book-footer">
                    <div class="book-meta">
                        <div class="book-rating">${book.rating_stars || 'No rating'}</div>
                        <div class="book-year">${book.publication_year || 'Unknown'}</div>
                    </div>
                    <div class="book-keywords">
                        ${book.keywords.map(keyword => 
                            `<span class="keyword-tag">${escapeHtml(keyword)}</span>`
                        ).join('')}
                    </div>
                    <div class="book-actions">
                        <a href="${book.detail_url}" class="book-detail-btn">
                            📖 View Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}



function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Search functionality (opcional)
function searchBooks(query) {
    if (!query.trim()) {
        renderBooks(currentBooks);
        return;
    }
    
    const searchResults = currentBooks.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.keywords.some(keyword => 
            keyword.toLowerCase().includes(query.toLowerCase())
        )
    );
    
    renderBooks(searchResults);
}

// Export functions for global use
window.searchBooks = searchBooks;