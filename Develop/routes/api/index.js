const router = require('express').Router();
const workoutsRoutes = require('./workoutsRoutes');
const exerciseRoutes = require('./exerciseRoutes');


router.use('/workouts', workoutsRoutes);
router.use('/exercise', exerciseRoutes);


module.exports = router;
