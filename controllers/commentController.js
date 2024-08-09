const { Comment } = require('../models');

module.exports = {
    createComment: async (req, res) => {
        const { content } = req.body;
        await Comment.create({ content, post_id: req.params.postId, user_id: req.session.userId });
        res.redirect(`/post/${req.params.postId}`);
    }
};
