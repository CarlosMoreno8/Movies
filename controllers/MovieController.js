const {
    Movie,
    Sequelize
} = require('../models');

const Op = Sequelize.Op;
const MovieController = {
    getAll(req, res) {

        Movie.findAll()
            .then(movies => res.send(movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get movies'
                })
            })
    },
    
    create(req, res) {
        Movie.create(req.body)
        .then(bailarin => res.send(bailarin))
        .catch(error => {
            console.log(error);
            res.status(500).send({
                message: 'there was a problem'
            })
        })
    },

    getById(req, res) {
        Movie.findByPk(req.params.id)
            .then(movies => res.send(movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the movies'
                })
            })
    },

    getByTitle(req, res) {
        Movie.findAll({ 
                where: {
                    title: {
                        [Op.like]: `%${req.params.title}%`
                    }
                }
            })
            .then(movies => res.send(movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the movies'
                })
            })
    }

}



module.exports = MovieController;