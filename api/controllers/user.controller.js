const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.JWT_SECRET || 'dvdsecret';


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

    async login(email,password){

        const user = await User.findOne({where:{email}});

        if(!user || !await bcrypt.compare(password,user.password)){
            throw new Error('You shall not pass!!')
        };

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
            name: user.name,
            phone: user.phone,
        };

        const token = jwt.sign(payload, secret);

        return {token,user}
    };

    async indexAll() {
        return User.findAll();
    };

    async findById(id) {
        return User.findOne({ where: { id } });
    };

    async updateUser(user, id) {
        return User.update(user,{where:{id}})
    };

    async deleteClientById(id) {
        return User.destroy({where: { id }} )
    };

    async logOut(id) {
        return User.findByPk(id);
    };

};

const userController = new UserController();

module.exports = userController;