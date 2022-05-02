const Comments = require ('../models/Comments');
//const { validateAsync } = require('@hapi/joi/lib/base');

exports.getAllComments = async (req,res) => 
{
    try{
        const comments = await Comments.find();
        res.json(comments);
    }catch(err){
        res.json({message:err});
    }
};

exports.createComment = async (req, res) => {
    const comments = new Comments({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    });
    try{
        const savedComments = await comments.save(); 
            res.json(savedComments);
    }
    catch(err) {
        res.json({ message: err });
    }
}


exports.getComment = async (req,res) =>
{
    try{
const comments = await Comments.findById(req.params.commentId);
res.json(comments);
}catch(err) {
    res.json({ message: err });
}
}

exports.deleteComment = async (req,res) =>
{
    try{
const removeComment = await Comments.remove({_id:req.params.commentId});
res.json(removecomment);
    }catch(err) {
        res.json({ message: err });
    }
}