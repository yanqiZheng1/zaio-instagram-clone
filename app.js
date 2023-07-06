const outputPostStatus = (post) => {
    const output = `This post is ${
      post.isPublic ? "public" : "private"
    }, posted by ${post.username}, and currently has ${post.likes} likes and ${
      post.comments.length
    } comments.`;
    return output;
  };

const post = {
    username: "akhilboddu",
    imageLink:
      "https://images.unsplash.com/photo-1581093458791-3b1c7e0c9d7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    caption: "This is a post",
    likes: 0,
    comments: [],
    shares: 0,
    isPublic: true,
    createdAt: "2020-02-07T17:00:00.000Z",
  };

if (post.isPublic) {
    console.log("Post can be shared");
} else {
    console.log("Post cannot be shared");
}

const createPost = (imageLink, caption, username) => {
  const newPost = {
    id: feed, length,
    username: username,
    imageLink: imageLink,
    caption: caption,
    likes: 0,
    comments: [],
    shares: 0,
    isPublic: true,
    createdAt: new Date,
  }
  
}

//update values in object
post.likes = 10;

//access values in object
console.log(
    ' ${post.username}, posted "${post.caption}" and got ${post.likes} likes.'
);
console.log("Posts", post)




//LOOPS

// for(let i = 1; 1 <= 20; i = i + 1) {
//     console.log(i);
// }

let i = 1;
while (i <= 5) {
    console.log("sheep number" + i);
    i = i + 1;
}