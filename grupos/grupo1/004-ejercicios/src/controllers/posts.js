import express, { response } from 'express';
import fetch from 'node-fetch';

var postApi = express.Router();

postApi.get('/', async function (req, res) {
  try {
    const posts = await fetch(
      'https://jsonplaceholder.typicode.com/posts/'
    ).then((response) => response.json());

    const users = await fetch(
      'https://jsonplaceholder.typicode.com/users/'
    ).then((response) => response.json());

    const respuesta = await posts.map((post) => {
      return {
        id: post.id,
        title: post.title,
        body: post.body,
        user: users.find((user) => user.id === post.userId),
      };
    });

    res.send(respuesta);
  } catch (error) {
    console.log(error);
  }
});

postApi.get('/:id', async function (req, res) {
  try {
    const posts = await fetch(
      'https://jsonplaceholder.typicode.com/posts/'
    ).then((response) => response.json());

    const comments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`
    ).then((response) => response.json());

    const respuesta = await posts.map((post) => {
      return {
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body,
        posts: comments
          .filter((comment) => comment.postId === post.id)
          .map((filtrado) => {
            delete filtrado.postId;
            return filtrado;
          }),
      };
    });

    /*
    const respuesta = await posts.map((post) => {
      delete post.postId;
      return post;*/
    res.send(respuesta);
  } catch (error) {
    console.log(error);
  }
});

export default postApi;
