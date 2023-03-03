const image = './images/avatar.jpeg'

export function renderAboutMe(featuredPost, blogPosts, mainPost) {
    featuredPost.classList.add('featured-post-clicked');
    featuredPost.innerHTML = `
    <div class="about-me">
        <img class="about-me-img" src=${image} alt="An image of Victoria Jaja" />
        <div class="about-me-details">
            <h2>Hi there! My name is Victoria Jaja Sunday, and welcome to my learning journal.</h2>
            <p>${mainPost.post}</p>
        </div>
    </div>
    
    <div>
        <h3 class="sub-topic small-width">How I stay committed to learning</h3>
        <p class="learning-started small-width">${mainPost.postLearning}</p>
        <h3 class="sub-topic small-width">How I got started</h3>
        <p class="learning-started last small-width">${mainPost.postStarted}</p>
        <h3 class="sub-topic centered small-width recent-posts">Hide Recent posts</h3>
    </div>
    `;
    blogPosts.style.display = 'grid';
}