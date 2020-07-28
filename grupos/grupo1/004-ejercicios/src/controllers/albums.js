import express from 'express';
import fetch from 'node-fetch';

var albumsApi = express.Router();

albumsApi.get('/', async function (req, res) {
  try {
    const albums = await fetch(
      'https://jsonplaceholder.typicode.com/albums/'
    ).then((response) => response.json());

    const users = await fetch(
      'https://jsonplaceholder.typicode.com/users/'
    ).then((response) => response.json());

    const respuesta = await albums.map((album) => {
      return {
        id: album.id,
        title: album.title,
        body: album.body,
        user: users.find((user) => user.id === album.userId),
      };
    });

    res.send(respuesta);
  } catch (error) {
    console.log(error);
  }
});

albumsApi.get('/:id', async function (req, res) {
  try {
    const id = req.params.id;
    const photos = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    ).then((response) => response.json());

    const albums = await fetch(
      'https://jsonplaceholder.typicode.com/albums/'
    ).then((response) => response.json());
    const respuesta = await albums.map((album) => {
      return {
        userId: album.userId,
        id: album.id,
        title: album.title,
        photos: photos.filter((photo) => photo.albumId === album.id),
      };
    });

    res.send(respuesta);
  } catch (error) {
    console.log(error);
  }
});

export default albumsApi;
