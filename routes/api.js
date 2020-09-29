const router = require("express").Router();
const db = require("../models");

router.get('/api/workouts', (req, res) => {
    db.find({})
      .then(db => {
        res.json(db);
      })
      .catch(err => {
        res.status(400).json(err);
      });
      console.log("sent to res from get!")
});

router.post('/api/workouts', (req, res) => {
    db.find({})
      .then(db => {
        res.json(db);
      })
      .catch(err => {
        res.status(400).json(err);
      });
      console.log("sent to res from post!")
 });
  
router.get('/stats', (req, res) => {
    res.render('./stats');
});

router.put('/api/workouts/undefined', ({ body },res) => {
    db.insertMany({ exercises: [ body ] })
      .then(db => {
        res.json(db)
      })
      .catch(err => {
        res.status(400).json(err);
      });
      console.log("inserted many!");
  });
  
router.put("/api/workouts/:id", (req, res) => {
    db.update({_id: req.params.id},{ $push: {exercises: req.body }})
      .then(db => {
        res.send(db)
      })
      .catch(err => {
        res.status(400).json(err)
      });
      console.log("updated!");
});
  
router.get('/api/workouts/range', (req, res) => {
    db.find({})
      .sort({day: -1})
      .then(dbworkout => {
        res.json(dbworkout)
      })
      .catch(err => {
        res.status(400).json(err)
      });
})
  
module.exports = router;
  