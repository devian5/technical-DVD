const router = require('express').Router();

const userRouter = require('./routers/user.router');
const movieRouter = require('./routers/movie.router');
const orderRouter = require('./routers/order.router');

router.use('/user', userRouter);
router.use('/movie', movieRouter);
router.use('/order', orderRouter);

module.exports = router;
