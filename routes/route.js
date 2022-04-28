const express = require('express');
const router = express.Router();

//make a reference to your service
const myService = require('../services/service');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    //we use the service to fetch our data and return to our route
    res.json(await myService.getAllStudents(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/*
POST programming language 
router.post('/', async function(req, res, next) {
  try {
    res.json(await svcProgLangService.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

PUT programming language 
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await svcProgLangService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});


DELETE programming language 
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await svcProgLangService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
});
*/

module.exports = router;