const { Post } = require('../models');

module.exports = {
    createPost: async (req, res) => {
        const { title, content } = req.body;
        await Post.create({ title, content, user_id: req.session.userId });
        res.redirect('/dashboard');
    },

    updatePost: async (req, res) => {
        const { title, content } = req.body;
        await Post.update({ title, content }, { where: { id: req.params.id } });
        res.redirect('/dashboard');
    },

    deletePost: async (req, res) => {
        await Post.destroy({ where: { id: req.params.id } });
        res.redirect('/dashboard');
    }
};
