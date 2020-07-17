import { db } from '../models/db';
import { Helpers } from '../models/helpers';
import { ObjectId } from 'mongodb';

const collectionName = 'alumnos';
const validParams = ['id','nombre','edad','provincia'];

function create(req,res){
  try {
    const params     = Helpers.paramsBuilder(validParams,req.body);
    const database   = db.getDb();
    const collection = db.getCollection(collectionName)(database);
    collection.insertOne(params).then(doc=>{
        //db.closeDb();
        res.send(doc);
    }).catch(error=>{
        //db.closeDb();
        console.log(error);
        res.status(422).json({
            error
        })
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

function index(req,res){
  try {
    const query=req.query.nombre?{nombre: req.query.nombre}:'';
    const database   = db.getDb();
    const collection = db.getCollection(collectionName)(database);
    collection.find(query).toArray().then(docs=>{
        res.send(docs)
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

function display(req,res){
  console.log(req)
  try {
    const database   = db.getDb();
    const collection = db.getCollection(collectionName)(database);
    collection.findOne({_id:new ObjectId(req.params.id)}).then(doc=>{
        if (doc) {
          console.log(doc);
        } else {
          console.log('Not founded');
        }
        res.send(doc)
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

function update(req,res){
    const database   = db.getDb();
    const collection = db.getCollection(collectionName)(database);

    const updateData=Helpers.paramsBuilder(validParams,req.body);
    collection.findOneAndUpdate(
      {'_id' : new ObjectId(req.params.id)},
      { $set: updateData },
      { new :true }
    ).then(doc=>{
      console.log(doc)
      res.json(doc);
    }).catch(err=>{
      console.log(err);
      res.json(err);
    });
}

function destroy(req,res){
  const database   = db.getDb();
  const collection = db.getCollection(collectionName)(database);

  collection.deleteOne(
    {'_id' : new ObjectId(req.params.id)},
  ).then(doc=>{
    console.log(doc)
    res.json(doc);
  }).catch(err=>{
    console.log(err);
    res.json(err);
  });
}

module.exports = { 
  create,
  index,
  display,
  update,
  destroy
}