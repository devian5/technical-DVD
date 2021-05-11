const router = require('express').Router();

const orderController = require('../controllers/order.controller');

const createHandler = async (req,res) => {
    try {
        
        const result = await orderController.create(req.body);

        res.json({result,date: new Date});

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    };  
};

const orderAllHandler = async (req,res) => {
    try {
        
        const result = await orderController.indexAll();

        res.json({result, date: new Date});

    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    }
};

const findByIdHandler = async (req,res) => {
    try {
        
        const result = await orderController.findById(req.params.id);

        res.json({result,date: new Date})

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    };
};



router.post('/', createHandler);
router.get('/', orderAllHandler);
router.get('/:id', findByIdHandler);



module.exports = router;