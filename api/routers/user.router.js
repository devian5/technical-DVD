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


router.post('/', createHandler);
router.post('/login', loginHandler);


module.exports = router;
