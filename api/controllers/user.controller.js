const { User } = require('../models');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class UserController {

    async create(user){
        
        const userEmail = user.email;
        const found = await User.findOne({ where: { email: userEmail } });
        
        if(found){
            throw new Error('Email already in use')
        }

        user.password = await bcrypt.hash(user.password,5);

        return User.create(user);
    };
}

const userController = new UserController();

module.exports = userController;