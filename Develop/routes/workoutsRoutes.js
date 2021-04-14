

//   these are the routes that navigate the pages
app.get("/",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/workout",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/workout.js"))
})

app.get("/stats",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/stats.html"))
})
app.get("/exercise",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
})



// these routes naviagtes the data and how it is recieved or posted 

// displays the work out dashboard 
app.get("/api/stats", (req, res) => {
  Workouts.find({})
    .then(dbExcercise => {
      res.json(dbExcercise);
    })
    .catch(err => {
      res.json(err);
    });
});

// displays all previous workouts 
app.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.json(err);
    });
});

// creates all added workouts 
app.get("/api/exercise", ({ body }, res) => {
  Workouts.create(body)
   
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

// updates one?
app.put("/api/exercise", ({ body }, res) => {
    Workouts.create(body)
      .then(({ _id }) => Workouts.Update({}, { $set: { Workouts: _id } }, { new: true }))
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });
  