const router = require('express').Router();

const userController = require('../controllers/user.controller');


const createHandler = async (req,res) => {
    try {

        const result = await userController.create(req.body);

        res.json({result,date: new Date});

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    };  
};

const loginHandler = async (req,res) => {
    try {

        const {email,password} = req.body;
        const jwt = await userController.login(email,password);
        
        const token = jwt.token;
        const user = jwt.user
        
        res.json({token,user, date: new Date})

    } catch (error) {
        
        return res.status(401).json({
            message: error.message
        });
    };    
};

const userAllHandler = async (req,res) => {
    try {
        
        const result = await userController.indexAll();

        res.json({result, date: new Date});

    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    }
};

const findByIdHandler = async (req,res) => {
    try {
        
        const result = await userController.findById(req.params.id);

        res.json({result,date: new Date})

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    };
};

const deleteUserHandler = async (req,res) => {
    try {

        const result = await userController.deleteClientById(req.params.id);

        res.json({result,date: new Date});

    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message: error.message
        });

    };
};


router.post('/', createHandler);
router.post('/login', loginHandler);
router.get('/', userAllHandler);
router.get('/:id', findByIdHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
