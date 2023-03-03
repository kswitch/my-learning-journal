export function renderFeaturedPost(featuredPost, mainPost) {
    featuredPost.style.backgroundImage = "url('./images/hero-image.jpg')";
    featuredPost.innerHTML = `
    <div class="main-post" id="${mainPost.postID}">
        <p class="post-date">${mainPost.date}</p>
        <h2 class="post-title post-link">${mainPost.title}</h2>
        <p class="post-content">${mainPost.post}</p>
    </div>
    `
}