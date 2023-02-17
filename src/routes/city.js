'use strict';

const express = require('express');
// equivalent statements with the import
const { cityCollection } = require('../models');

const router = express.Router();

router.get('/city', async (req, res, next) => {
  const cities = await cityCollection.read();
  res.status(200).send(cities);
});

router.get('/city/:id', async (req, res, next) => {
  const singlecity = await cityCollection.read(req.params.id);
  res.status(200).send(singlecity);
});

router.post('/city', async (req, res, next) => {
  try {
    console.log('this is the body', req.body);
    const newCity = await cityCollection.create(req.body);
    res.status(200).send(newCity);
  } catch(e){
    next(e);
  }
});

router.delete('/city/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log('this is the id', id);
    const deletedCity = await cityCollection.delete({where:{id}});
    res.status(200).json(deletedCity);
  } catch(e){
    next(e);
  }
});

router.put('/city/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    console.log('this is the id', id);
    console.log('this is the obj', obj);
    const updatedCity = await cityCollection.update(id, obj);
    res.status(200).send(updatedCity);
  } catch(e){
    next(e);
  }
});



module.exports = router;