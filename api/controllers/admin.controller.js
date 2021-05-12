const { Admin } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.JWT_SECRET || 'adminsecret';

class AdminController {
    async create(admin){
        
        const adminEmail = admin.email;
        const found = await Admin.findOne({ where: { email: adminEmail } });
        
        if(found){
            throw new Error('Email already in use')
        }

        admin.password = await bcrypt.hash(admin.password,5);

        return Admin.create(admin);
    };

    async login(email,password){

        const admin = await Admin.findOne({where:{email}});

        if(!admin || !await bcrypt.compare(password,admin.password)){
            throw new Error('You shall not pass!!')
        };

        const payload = {
            userId: admin.id,
            tokenCreationDate: new Date,
            name: admin.name,
            phone: admin.phone,
        };

        const token = jwt.sign(payload, secret);

        return {token,admin}
    };

};

const adminController = new AdminController();

module.exports = adminController;