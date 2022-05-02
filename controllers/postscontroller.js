
const Post = require ('../models/Post');

exports.getAllPosts = async (req,res) => 
{
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(err){
        res.status(400).json({message:err});
    }
}
exports.createPost =async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    try{
        const savedPost = await post.save();
            res.json(savedPost);
    }
    catch(err) {
        res.json({ message: err });
    }
}


exports.getPost =async (req,res) =>
{
    try{
const post = await Post.findById(req.params.postId);
res.json(post);
}catch(err) {
    res.json({ message: err });
}
}
exports.handlelike =async (req,res) =>
{
    try{
    const post = await Post.findById(req.params.postId);
    if (!post){
        return res.status(404).json({
            status:'fail',
            message: "no id found"
        })
    }

    if (!blog.like.includes(req.user.id))
    {
        blog.like.push(req.user.id);
        blog.save();
    }else 
    {
        const likes = blog.toJSON();
        const newlikes = likes.like .filter(id => id === req.user.id);
        blog.like = newlikes;
        blog.save();
    }

    res.status (200).json({
        status: 'success',
        data : {
            blog
        }
    });
res.json(post);
    }catch(err) {
        res.json({ message: err });
    }
};


exports.deletePost = async (req,res) =>
{
    try{

const removepost = await Post.remove({_id:req.params.postId});
res.json(removepost);
    }catch(err) {
        res.json({ message: err });
    }
}


exports.updatePost = async (req,res) =>
{
    try{

const updatedpost = await Post.updateMany(
    {_id:req.params.postId},
    {$set:{title: req.body.title}},
    {$set:{description: req.body.description}}
    );
res.json(updatedpost);
console.log("update was succeful");
    }catch(err) {
        res.json({ message: err });
    }
    console.log("update was succeful");
}


