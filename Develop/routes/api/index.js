const router = require('express').Router();
const workoutsRoutes = require('./workoutsRoutes');
// const exerciseRoutes = require('./excerciseRoutes');
// const statsRoutes = require('./statsRoutes');

router.use('/workouts', workoutsRoutes);
// router.use('/exercise', exerciseRoutes);
// router.use('/stats', statsRoutes);

module.exports = router;
