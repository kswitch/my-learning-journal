export function renderBlogPosts(blogPosts, posts) {
    let blogPost = '';

    posts.forEach(({ image, date, title, post, postID, altText } = post) => {
        blogPost += `
        <div class="post" id="${postID}">
            <img class="post-image" src="${image}" alt="${altText}"/>
            <p class="post-date">${date}</p>
            <h2 class="post-title post-link">${title}</h2>
            <p class="post-content">${post}</p>
        </div>
        `
    })
    blogPosts.innerHTML = blogPost;
}