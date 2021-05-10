const router = require('express').Router();

const userController = require('../controllers/user.controller');



const createHandler = async (req,res) => {
    try {
        console.log(req.body,'<==========================================')

        const result = await userController.create(req.body);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };  
};

router.post('/', createHandler);

module.exports = router;
