import { renderAboutMe } from "./scripts/renderAboutMe.js";
import { renderBlogPosts } from "./scripts/renderBlogPost.js"; 
import { posts, mainPost } from "./scripts/posts.js";
import { body, featuredPost, blogPosts, footer } from "./scripts/queries.js";
import { renderFooter } from "./scripts/renderFooter.js";
import { expandBlogPost } from "./scripts/expandBlogPost.js"


renderAboutMe(featuredPost, blogPosts, mainPost)
renderBlogPosts(blogPosts, posts);
renderFooter(footer);

body.addEventListener('click', (event) => {
    if ((event.target.className.includes('recent-posts'))) {
        if ((blogPosts.style.display == 'none') || (blogPosts.style.display == '')) {
            blogPosts.style.display = 'grid'
            document.querySelector('.recent-posts').textContent = `Hide Recent posts`
        }
        else if (blogPosts.style.display == 'grid') {
            blogPosts.style.display = 'none'
            document.querySelector('.recent-posts').textContent = `Show Recent posts`
        }
    }
    if ((event.target.className.includes('go-back'))) {
        featuredPost.classList.remove('featured-post-clicked');
        blogPosts.style.display = 'grid';
        renderAboutMe(featuredPost, blogPosts, mainPost)
    }
    if((event.target.className.includes('post-title')) && (event.target.parentElement.className == 'post')) {
        expandBlogPost(featuredPost, posts, event, mainPost)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
})
