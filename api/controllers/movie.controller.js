const { Movie } = require('../models');

class MovieController {

    async create(film){

        const titleMovie = film.title;
        const found = await Movie.findOne({ where: { title: titleMovie } });
        
        if(found){
            throw new Error('The movie already exists')
        };

        return Movie.create(film);
    };

    async indexAll() {
        return Movie.findAll();
    };

    async findById(id) {
        return Movie.findOne({ where: { id } });
    };

    async deleteById(id) {
        return Movie.destroy({where: { id }} )
    };

    
};

const movieController = new MovieController();

module.exports = movieController;