const express = require('express');
const router = express.Router();
const { query } = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('game', { title: 'Game with Phaser' });
});

/* Route for fetch hiscores */
router.get('/score', async function(req, res, next) {
  const sql = "SELECT * FROM hiscore ORDER BY score DESC LIMIT 10";

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

  const score = parseInt(req.body.score);

  try {
    await query(sql, score);
    
    res.json({
      status: 200,
      msg: 'Score of ' + score + ' posted.'
    });
  }
  catch(e) {
    next(e);
    console.error(e);
  }
});

module.exports = router;
