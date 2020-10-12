const {
    Movie
} = require('../models');

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
    }

}



module.exports = MovieController;