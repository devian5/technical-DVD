const { Order, User, Movie, RentalTransition } = require('../models');

class OrderController {

    async create({userId,movieId,dateInit,dateEnd}){

        const order = await Order.create({
            userId: userId,
            dateInit: dateInit,
            dateEnd: dateEnd
        });

        const rental = await RentalTransition.create({orderId: order.id,movieId: movieId});
        return RentalTransition.findOne({where: {id: rental.id},
            include:[
                Order,
                Movie,{
                    model: Order,
                    include:[User]
                }
            ]
        })
    };

    async indexAll() {
        return Order.findAll();
    };

    async findById(id) {
        return Order.findOne({ where: { id } });
    };

    async updateOrder(rental, id) {
        return Order.update(rental,{where:{ id }});
    };

    async deleteById(id) {
        return Order.destroy({where: { id }});
    };

    async movieReturn(id) {

        return await RentalTransition.update({orderState: false},{ where: {orderId: id}});
         
    }

}

const orderController = new OrderController();
module.exports = orderController;