const express = require('express');
const router = express.Router();
const { query } = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('game', { title: 'Game with Phaser' });
});

/* Route for fetch hiscores */
router.get('/score', async function(req, res, next) {
  const sql = "SELECT * FROM hiscore ORDER BY score DESC";

  try {
    const result = await query(sql);
    
    res.json({
      status: 200,
      result
    });
  }
  catch(e) {
    next(e);
    console.error(e);
  }
});

/* Route for posting hiscore */
router.post('/score', async function(req, res, next) {
  const sql = "INSERT INTO hiscore (score) VALUES (?)";

  try {
    const result = await query(sql, req.body.score);
    
    res.json({
      status: 200
    });
  }
  catch(e) {
    next(e);
    console.error(e);
  }
});

module.exports = router;
