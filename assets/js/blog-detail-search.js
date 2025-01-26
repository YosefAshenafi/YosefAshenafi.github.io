document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('#blogSearch');
    const categoryLinks = document.querySelectorAll('.widget_categories ul li a');
    const recentPosts = document.querySelectorAll('.tj_recent_posts ul li');
    const tagLinks = document.querySelectorAll('.tagcloud a');
    
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        // Search in categories
        categoryLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            const listItem = link.parentElement;
            listItem.style.display = text.includes(searchTerm) ? 'flex' : 'none';
        });

        // Search in recent posts
        recentPosts.forEach(post => {
            const title = post.querySelector('.recent-post_title a').textContent.toLowerCase();
            const date = post.querySelector('.tj-post__meta span').textContent.toLowerCase();
            
            const matches = title.includes(searchTerm) || date.includes(searchTerm);
            post.style.display = matches ? 'flex' : 'none';
        });

        // Search in tags
        tagLinks.forEach(tag => {
            const text = tag.textContent.toLowerCase();
            tag.style.display = text.includes(searchTerm) ? 'inline-flex' : 'none';
        });

        // Show "no results" message if needed
        const sections = [
            { 
                container: '.widget_categories ul',
                items: 'li[style="display: flex"]',
                messageId: 'noCategoriesMessage'
            },
            {
                container: '.tj_recent_posts ul',
                items: 'li[style="display: flex"]',
                messageId: 'noPostsMessage'
            },
            {
                container: '.tagcloud',
                items: 'a[style="display: inline-flex"]',
                messageId: 'noTagsMessage'
            }
        ];

        sections.forEach(section => {
            const container = document.querySelector(section.container);
            const visibleItems = container.querySelectorAll(section.items);
            const existingMessage = document.getElementById(section.messageId);

            if (visibleItems.length === 0 && searchTerm !== '') {
                if (!existingMessage) {
                    const message = document.createElement('div');
                    message.id = section.messageId;
                    message.className = 'text-center mt-3';
                    message.innerHTML = '<p class="text-muted">No results found</p>';
                    container.appendChild(message);
                }
            } else if (existingMessage) {
                existingMessage.remove();
            }
        });
    });
}); 