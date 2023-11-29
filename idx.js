function createPost(post) {
    return new Promise((resolve) => {
        // Simulating asynchronous post creation
        setTimeout(() => {
            const newPost = { id: Date.now(), content: post };
            resolve(newPost);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        // Simulating asynchronous update of user activity time
        setTimeout(() => {
            const lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost(post) {
    return new Promise((resolve) => {
        // Simulating asynchronous post deletion
        setTimeout(() => {
            // Assume deletion is successful
            resolve();
        }, 1000);
    });
}

// Example usage
const user = { id: 1, name: "John Doe" };

// Create a post and update user's last activity time
createPost("Hello, world!")
    .then((post) => {
        console.log("Post created:", post);

        // Update last user activity time
        return updateLastUserActivityTime();
    })
    .then((lastActivityTime) => {
        console.log("Last activity time updated:", lastActivityTime);

        // Delete the last post
        return deletePost();
    })
    .then(() => {
        console.log("Post deleted.");

        // Log remaining posts (in a real application, you would fetch the posts from the server)
        const remainingPosts = []; // Assume this is an array of remaining posts
        console.log("Remaining Posts:", remainingPosts);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
