export function expandBlogPost(featuredPost, posts, event) {
    const result = posts.filter( (post) => {
        return ((post.postID) == (event.target.parentElement.id));
    })

    featuredPost.style.backgroundImage = 'none';
    featuredPost.classList.add('featured-post-clicked');

    featuredPost.innerHTML = `
        <div class="" id="${result[0].postID}">
            <p class="go-back"> < </p> <p class="go-back text">Back</p>
            <p class="post-date small-width">${result[0].date}</p>
            <h2 class="post-title small-width">${result[0].title}</h2>
            <p class="post-content learning-started small-width">${result[0].post}</p>
            <img class="featured-post-clicked-image " src="${result[0].image}" alt="" />
            <h3 class="sub-topic small-width">How I stay committed to learning</h3>
            <p class="learning-started small-width">${result[0].postLearning}</p>
            <h3 class="sub-topic small-width">How I got started</h3>
            <p class="learning-started last small-width">${result[0].postStarted}</p>
            <h3 class="sub-topic centered small-width recent-posts">Show Recent posts</h3>
        </div>
    `;
    
}