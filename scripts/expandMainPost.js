export function expandMainPost(featuredPost, mainPost) {
    featuredPost.style.backgroundImage = 'none';
    featuredPost.classList.add('featured-post-clicked');
    featuredPost.innerHTML = `
        <div class="" id="${mainPost.postID}">
            <p class="go-back"> < </p> <p class="go-back text">Back</p>
            <p class="post-date small-width">${mainPost.date}</p>
            <h2 class="post-title small-width">${mainPost.title}</h2>
            <p class="post-content learning-started small-width">${mainPost.post}</p>
            <img class="featured-post-clicked-image " src="${mainPost.image}" alt="" />
            <h3 class="sub-topic small-width">How I stay committed to learning</h3>
            <p class="learning-started small-width">${mainPost.postLearning}</p>
            <h3 class="sub-topic small-width">How I got started</h3>
            <p class="learning-started last small-width">${mainPost.postStarted}</p>
            <h3 class="sub-topic centered small-width recent-posts">Show Recent posts</h3>
        </div>
    `;
}