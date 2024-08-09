const { Post } = require('../models');

module.exports = {
    getHomePage: async (req, res) => {
        const posts = await Post.findAll();
        res.render('home', { posts });
    }
};
