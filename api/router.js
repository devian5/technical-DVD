const router = require('express').Router();

const userRouter = require('./routers/user.router');
const movieRouter = require('./routers/movie.router');
const orderRouter = require('./routers/order.router');
const adminRouter = require('./routers/admin.router');

router.use('/user', userRouter);
router.use('/movie', movieRouter);
router.use('/order', orderRouter);
router.use('/admin-club', adminRouter);

module.exports = router;
