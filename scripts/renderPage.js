import { renderFeaturedPost } from "./renderFeaturedPost.js";
import { renderBlogPosts } from "./renderBlogPost.js"; 
import { renderFooter } from "./renderFooter.js"; 

export function renderPage(featuredPost, mainPost, blogPosts, posts, footer) {
    renderFeaturedPost(featuredPost, mainPost);
    renderBlogPosts(blogPosts, posts);
    renderFooter(footer);
}