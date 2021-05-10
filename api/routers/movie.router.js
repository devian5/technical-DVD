const router = require('express').Router();

const movieController = require('../controllers/movie.controller');

const createHandler = async (req,res) => {
    try {

        const result = await movieController.create(req.body);

        res.json({result,date: new Date});

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error.message
        });
    };  
};

router.post('/', createHandler);

module.exports = router;
