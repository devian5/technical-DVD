const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'dvdsecret';

const auth =  async (req, res, next) => {
    try{
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1]
        const payload = jwt.verify(token,secret)
        if(!payload){
            throw new Error('Cannot be verified')
        }
        const ownerId = req.params.id
        if (ownerId != payload.userId){
            throw new Error(`The id ${ownerId} doesn't exist`)
        }
        next()
    }catch(error){
        res.status(500)
        .json({
            message: error.message
        })
    }
}

module.exports = auth;