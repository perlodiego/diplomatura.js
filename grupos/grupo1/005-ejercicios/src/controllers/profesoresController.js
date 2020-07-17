import { db } from '../models/db';
import { Helpers } from '../models/helpers';
import { ObjectId } from 'mongodb';

const collectionName = 'profesores';
const validParams = ['id','nombre'];

function create(req,res){
  try {
    const params     = Helpers.paramsBuilder(validParams,req.body);
    Helpers.insertToDb(collectionName,params).then(doc=>res.send(doc));
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

function index(req,res){
  try {
    const query= req.query.nombre ?
                  { nombre: req.query.nombre }
                 :
                  '';
    Helpers.find(collectionName,query).then(docs=>{
        res.send(docs)
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

function display(req,res){
  try {
    const query={ _id: new ObjectId(req.params.id) };
    Helpers.findOne(collectionName,query).then(doc=>{
      if (doc) {
        console.log(doc);
      } else {
        console.log('Not founded');
      }
      res.send(doc);
      });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
}

function update(req,res){
    const updateData=Helpers.paramsBuilder(validParams,req.body);
    const query={'_id' : new ObjectId(req.params.id)};
    const opts={ new :true };

    Helpers.update(collectionName,query,updateData,opts).then(doc=>{
      console.log(doc)
      res.json(doc);
    }).catch(err=>{
      console.log(err);
      res.json(err);
    });
}

function destroy(req,res){
  const query={'_id' : new ObjectId(req.params.id)};
  Helpers.destroy(collectionName,query).then(doc=>{
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