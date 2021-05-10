const router = require('express').Router();

const movieController = require('../controllers/movie.controller');

const createHandler = async (req,res) => {
    try {

        const result = await movieController.create(req.body);

        res.json({result,date: new Date});

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    };  
};

const movieAllHandler = async (req,res) => {
    try {
        
        const result = await movieController.indexAll();

        res.json({result, date: new Date});

    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    }
};

const findByIdHandler = async (req,res) => {
    try {
        
        const result = await movieController.findById(req.params.id);

        res.json({result,date: new Date})

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    };
};

router.post('/', createHandler);
router.get('/', movieAllHandler);
router.get('/:id', findByIdHandler);

module.exports = router;
