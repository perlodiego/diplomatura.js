import express from 'express';
import { Helpers } from './helpers';

const POSTS_URL    = 'posts';
const USERS_URL    = 'users';
const COMMENTS_URL = 'comments';

const postApi = express.Router();

postApi.get('/', async function (req, res) {
  try {
    const posts     = await Helpers.fetch(POSTS_URL);
    const users     = await Helpers.fetch(USERS_URL);
    posts.forEach(post=>{
        post.user=users.find(({id})=>id===post.userId);
        delete post.userId;
    });
    res.send(posts);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

postApi.get('/:id', async function (req, res) {
  try {
    const { id }       = req.params;
    const post         = await Helpers.fetch(POSTS_URL,id);
   
    await Helpers.fetch(POSTS_URL,id,COMMENTS_URL)
    .then(arrayOfComments=>{
      arrayOfComments.forEach(comment=>delete comment.postId);
      post.posts = arrayOfComments;
    }).catch(err=>{
      console.log(err);
      res.json(err);
    });
    
    res.send(post);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

export default postApi;
