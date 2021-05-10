const router = require('express').Router();

const userRouter = require('./routers/user.router');
const movieRouter = require('./routers/movie.router');


router.use('/user', userRouter);
router.use('/movie', movieRouter)

module.exports = router;
