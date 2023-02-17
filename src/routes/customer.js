'use strict';

const express = require('express');
// equivalent statements with the import
// const customerModel = require('../models/index');
const { customerCollection } = require('../models');

const router = express.Router();

router.get('/customer', async (req, res, next) => {
  const customers = await customerCollection.read();
  res.status(200).send(customers);
});

router.get('/customer/:id', async (req, res, next) => {
  const singlecustomer = await customerCollection.read(req.params.id);
  res.status(200).send(singlecustomer);
});

router.post('/customer', async (req, res, next) => {
  try {
    console.log('this is the body', req.body);
    const newCustomer = await customerCollection.create(req.body);
    res.status(200).send(newCustomer);
  } catch(e){
    next(e);
  }
});

router.delete('/customer/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log('this is the id', id);
    const deletedCustomer = await customerCollection.delete({where:{id}});
    res.status(200).json(deletedCustomer);
  } catch(e){
    next(e);
  }
});

router.put('/customer/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    console.log('this is the id', id);
    console.log('this is the obj', obj);
    const updatedCustomer = await customerCollection.update(id, obj);
    res.status(200).send(updatedCustomer);
  } catch(e){
    next(e);
  }
});



module.exports = router;

