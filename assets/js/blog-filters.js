document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.widget_categories a');
    const tagLinks = document.querySelectorAll('.tagcloud a');
    const blogPosts = document.querySelectorAll('.blog-card');
    const blogContainer = document.querySelector('#blogPostsContainer');
    
    // If we're on a single blog post page, add the sidebar filtering
    if (!blogContainer) {
        categoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = '../blog/all-posts.html';
            });
        });
        
        tagLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = '../blog/all-posts.html';
            });
        });
        return;
    }
    
    function filterPosts(filterText, filterType) {
        let hasVisiblePosts = false;
        
        blogPosts.forEach(post => {
            const category = post.querySelector('.blog-category').textContent.toLowerCase();
            const title = post.querySelector('.blog-title').textContent.toLowerCase();
            const excerpt = post.querySelector('.blog-excerpt').textContent.toLowerCase();
            
            let matches = false;
            
            if (filterType === 'category') {
                matches = category.toLowerCase() === filterText.toLowerCase();
            } else if (filterType === 'tag') {
                matches = title.includes(filterText.toLowerCase()) ||
                         category.includes(filterText.toLowerCase()) ||
                         excerpt.includes(filterText.toLowerCase());
            }
            
            const parentCol = post.closest('.col-lg-4');
            if (parentCol) {
                parentCol.style.display = matches ? 'block' : 'none';
                if (matches) hasVisiblePosts = true;
            }
        });
        
        // Handle no results message
        const noResultsMsg = document.getElementById('noResultsMessage');
        if (!hasVisiblePosts) {
            if (!noResultsMsg) {
                const message = document.createElement('div');
                message.id = 'noResultsMessage';
                message.className = 'col-12 text-center mt-4';
                message.innerHTML = '<p>No blog posts found matching your selection.</p>';
                blogContainer.appendChild(message);
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryText = this.textContent.split('(')[0].trim();
            
            // Update active states
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            tagLinks.forEach(l => l.classList.remove('active'));
            
            filterPosts(categoryText, 'category');
        });
    });
    
    tagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tagText = this.textContent.trim();
            
            // Update active states
            tagLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            categoryLinks.forEach(l => l.classList.remove('active'));
            
            filterPosts(tagText, 'tag');
        });
    });
}); 