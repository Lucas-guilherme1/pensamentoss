const express = require('express');
const ThoughtsController = require('../controllers/ThoughtsController');

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);
router.get('/thought-create', ThoughtsController.registerThought)
// router.get('/thoughts/:id', ThoughtsController.findOneThought);
router.get('/thoughts/edit', ThoughtsController.showPageEditThought)

router.post('/thoughts/create', ThoughtsController.createThoughts);
router.post('/thoughts/update/:id', ThoughtsController.updateThought);

router.delete('/thoughts/deleteThought/:id', ThoughtsController.deleteThoughts);

module.exports = router;