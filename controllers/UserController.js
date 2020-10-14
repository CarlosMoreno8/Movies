const {
    User
} = require('../models');
const UserController = {

    async signup(req, res) {

        try {

            const user = await User.create(req.body);
            res.send(user);
            
        } catch (error) {
            console.log(error);
            res.status(500).send('el usuario no es correcto');
        }
 
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })

            
            if (!user) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                })
            }

            if (password !== user.password) {
                return res.status(401).send({
                    message: 'wrong credentials'
                })
            }

            res.send(user)
            
            
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to login' })
        }

    },

    async delete(req,res) {
        try {
            let deleteUser = await User.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })

            await deleteUser.destroy();
            res.send('the account was destroyed');
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to destroying the account' })
            
        }
    }
}

module.exports = UserController;