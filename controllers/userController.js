const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = {
    signup: async (req, res) => {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, password: hashedPassword });
        res.redirect('/login');
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.userId = user.id;
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    },

    logout: (req, res) => {
        req.session.destroy(() => {
            res.redirect('/');
        });
    }
};
