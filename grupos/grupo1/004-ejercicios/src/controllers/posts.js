import express from 'express';
import fetch from 'node-fetch';

const SOURCE_URL='https://jsonplaceholder.typicode.com/';
const POSTS_URL = 'posts/'
const USERS_URL = 'users/';

var postApi = express.Router();

postApi.get('/', async function (req, res) {
  const posts = await fetch(SOURCE_URL+POSTS_URL);
  const jsonPosts = await posts.json();

  const users     = await fetch(SOURCE_URL+USERS_URL);
  const jsonUsers = await users.json();
  jsonPosts.forEach(post=>{
      post.user=jsonUsers.find(({id})=>id===post.userId);
      delete post.userId;
  })

  res.send(jsonPosts);
});

postApi.get('/:id', async function (req, res) {
  const { id }       = req.params;
  const post         = await fetch(SOURCE_URL+POSTS_URL+id)
  .then(postJSON=>postJSON.json())
  .catch(err=>{
    console.log(err);
    res.json(err);
  });

  await fetch(SOURCE_URL+USERS_URL+post.userId)
  .then(jsonUser=>jsonUser.json())
  .then(user=>post.user=user)
  .catch(err=>{
    console.log(err);
    res.json(err);
  });
  
  await fetch(SOURCE_URL+POSTS_URL+id+'/comments')
  .then(comments=>comments.json())
  .then(arrayOfComments=>{
    arrayOfComments.forEach(comment=>delete comment.postId);
    post.comments = arrayOfComments;
  }).catch(err=>{
    console.log(err);
    res.json(err);
  });
  
  res.send(post);
});

export default postApi;
