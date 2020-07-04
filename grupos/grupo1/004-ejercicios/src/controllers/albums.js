import express from 'express';
import { Helpers } from './helpers';

const ALBUMS_URL = 'albums';
const USERS_URL  = 'users';
const PHOTOS_URL = 'photos';

const albumsApi = express.Router();

albumsApi.get('/', async function (req, res) {
  try {
    const albums = await Helpers.fetch(ALBUMS_URL);
    const users  = await Helpers.fetch(USERS_URL);
    albums.forEach(album=>{
        album.user=users.find(({id})=>id===album.userId);
        delete album.userId;
    });
    res.send(albums);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

albumsApi.get('/:id',  async function (req, res) {
  try {
    const { id } = req.params;
    const album  = await Helpers.fetch(ALBUMS_URL,id);
   
    await Helpers.fetch(ALBUMS_URL,id,PHOTOS_URL)
    .then(arrayOfPhotos=>{
      arrayOfPhotos.forEach(photo=>delete photo.albumId);
      album.photos = arrayOfPhotos;
    }).catch(err=>{
      console.log(err);
      res.json(err);
    });
    
    res.send(album);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

export default albumsApi;
