
const Messages = require ('../models/Messages');
//const { validateAsync } = require('@hapi/joi/lib/base');


exports.getAllMessages = async (req,res) => 
{
    try{
        const messages = await Messages.find();
        res.json(messages);
    }catch(err){
        res.json({message:err});
    }
};

exports.createMessage = async (req, res) => {
    const messages = new Messages({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });
    try{
        const savedMessages = await messages.save(); 
            res.json(savedMessages);
    }
    catch(err) {
        res.json({ message: err });
    }
}


exports.getMessages = async (req,res) =>
{
    try{
const messages = await Messages.findById(req.params.messageId);
res.json(messages);
}catch(err) {
    res.json({ message: err });
}
}

exports.deleteMessage = async (req,res) =>
{
    try{
const removeMessage = await Messages.remove({_id:req.params.messageId});
res.json(removeMessage);
    }catch(err) {
        res.json({ message: err });
    }
}