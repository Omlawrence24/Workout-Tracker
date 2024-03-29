
const router = require('express').Router();
const Workouts  = require("../../models/workouts.js");

router.get("/", (req, res) => {
  
    Workouts.find({})
        .then(dbsess => {
            res.json(dbsess); 
            
        })
        .catch(err => {
            res.json(err);
        });
});

// creating a new exercise
router.post("/", (req, res) => {
    Workouts.create({})
        .then(dbExcercise => {
            console.log(dbExcercise);
            res.json(dbExcercise)
        })
        .catch((err) => {
            console.log(err);
            res.json(err)
        });
});


// delet work out if needed
router.delete("/", (req, res) =>{
Workouts.findByIdAndDelete(req.body.id)
.then(() => res.json(true) )
.catch((err) => res.json(err))

})

//  updating an exercise 
router.put("/:id", (req, res) => {
    console.log("hello")
  
    Workouts.findByIdAndUpdate(
    req.params.id, 
    
        {$push:{
            exercises: req.body
        }},
        {
        new: true, runValidators : true    
        }
    
    )
        .then(dbsess => {
            res.json(dbsess); 
            
        })
        .catch(err => {
            res.json(err);
        });
});

// the aggregated intity returns range 
router.get("/range", (req, res) => {
    
    Workouts.aggregate([{
       
       $addFields: {
        totalDuration: {$sum: "$exercises.duration"},
       },
    },
    {
        $addFields: {
            totalWorkout: { $add: "$totalDuration" },
        },
    },


    ])
        .limit(5)
        .sort({_id: 1})
        .then(dbsess => {
            res.json(dbsess); 
            
        })
        .catch(err => {
            res.json(err);
        });
});
module.exports = router;