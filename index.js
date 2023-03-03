import { expandMainPost } from "./scripts/expandMainPost.js"; 
import { renderBlogPosts } from "./scripts/renderBlogPost.js"; 
import { renderFooter } from "./scripts/renderFooter.js"; 
import { posts, mainPost } from "./scripts/posts.js";
import { body, featuredPost, blogPosts, footer } from "./scripts/queries.js";
import { expandBlogPost } from "./scripts/expandBlogPost.js"
import { renderPage } from "./scripts/renderPage.js"

renderPage(featuredPost, mainPost, blogPosts, posts, footer)

body.addEventListener('click', (event) => {
    // console.log(event);

    if ((event.target.parentElement.id == 'main-post') && (event.target.className.includes('post-title'))) {
        expandMainPost(featuredPost, mainPost);
        renderBlogPosts(blogPosts, posts);
        blogPosts.style.display = 'none';
        renderFooter(footer);
    }
    if ((event.target.className.includes('recent-posts'))) {
        if (blogPosts.style.display == 'none') {
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
        renderPage(featuredPost, mainPost, blogPosts, posts, footer);
    }
    
    if((event.target.className.includes('post-title')) && (event.target.parentElement.className == 'post')) {
        expandBlogPost(featuredPost, posts, event, mainPost)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
})