const router = require('express').Router();

const adminController = require('../controllers/admin.controller');

const createHandler = async (req,res) => {
    try {

        const result = await adminController.create(req.body);

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
        const jwt = await adminController.login(email,password);
        
        const token = jwt.token;
        const admin = jwt.admin
        
        res.json({token,admin, date: new Date})

    } catch (error) {
        
        return res.status(401).json({
            message: error.message
        });
    };    
};


router.post('/', createHandler);
router.post('/login', loginHandler);

module.exports = router;

