const router = require('express').Router();
const auth = require('../middleware/auth');

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

const updateAdminHandler =  async (req,res) => {
    try {

        const body = req.body;

        const result = await adminController.updateAdmin(body,req.params.id);

        res.json({result,date: new Date});

    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });

    };  
};

const logOutHandler = async (req, res) =>{
    try {

        const id = req.params.id;
        const user =  await adminController.logOut(id);
        
        const status = `I'll be back, ${user.email}`;
        
        res.json({ status, id, date: new Date }); 
        
    }catch (error) {
        console.log('LOGOUT===============>',error)
        
        return res.status(401).json({
            message: error.message
        });
    };
};


const deleteAdminHandler = async (req,res) => {
    try {

        const result = await adminController.deleteAdminById(req.params.id);

        res.json({result,date: new Date});

    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });

    };
};

router.post('/', createHandler);
router.post('/login', loginHandler);
router.post('/logout/:id', auth, logOutHandler);
router.put('/:id', updateAdminHandler);
router.delete('/:id', deleteAdminHandler);

module.exports = router;

