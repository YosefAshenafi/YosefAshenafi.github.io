document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.tj-widget__search input');
    const blogPosts = document.querySelectorAll('.blog-card');
    
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        blogPosts.forEach(post => {
            const title = post.querySelector('.blog-title').textContent.toLowerCase();
            const category = post.querySelector('.blog-category').textContent.toLowerCase();
            const excerpt = post.querySelector('.blog-excerpt').textContent.toLowerCase();
            
            const matches = 
                title.includes(searchTerm) || 
                category.includes(searchTerm) || 
                excerpt.includes(searchTerm);
            
            post.style.display = matches ? 'block' : 'none';
            
            // Find the parent column and handle its visibility
            const parentCol = post.closest('.col-lg-4');
            if (parentCol) {
                parentCol.style.display = matches ? 'block' : 'none';
            }
        });
        
        // Check if no results found
        const visiblePosts = document.querySelectorAll('.blog-card[style="display: block"]');
        const noResultsMsg = document.getElementById('noResultsMessage');
        
        if (visiblePosts.length === 0 && searchTerm !== '') {
            if (!noResultsMsg) {
                const message = document.createElement('div');
                message.id = 'noResultsMessage';
                message.className = 'col-12 text-center mt-4';
                message.innerHTML = '<p>No blog posts found matching your search.</p>';
                document.getElementById('blogPostsContainer').appendChild(message);
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    });
});
