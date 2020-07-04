import express from 'express';
import { Helpers } from './helpers';

const ALBUMS_URL = 'albums';
const USERS_URL  = 'users';
const POSTS_URL = 'posts';

const usersApi = express.Router();

usersApi.get('/', async function (req, res) {
  try {
    const users  = await Helpers.fetch(USERS_URL);
    const albums = await Helpers.fetch(ALBUMS_URL);
    const posts  = await Helpers.fetch(POSTS_URL);
    users.forEach(user=>{
        user.album= albums.find(({id})=>id===user.id);
        delete user.album.userId;
        user.post = posts .find(({id})=>id===user.id);
        delete user.post.userId;
    });
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

export default usersApi;
