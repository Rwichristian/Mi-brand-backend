const jsonwebtoken = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')
const  userModel = require ('../models/usermodel');

//user sign up
const signup = asyncHandler(async(req, res) => 
{
    const { name, email, password} = req.body

    if( !name || !email || !password) 
    {
        res.status(400)
        throw new Error('please add all fields')
    }
//check if user exist
const realUser = await userModel.findOne({email})
if (realUser)
{
    res.status(400)
    throw new Error('you are already signed up')
}

//hash password

const salt = await bycrypt.genSalt(10)
const hashedPassword = await bycrypt.hash(password, salt)

//create the user
const user = await userModel.create({

    name,
    email,
    password: hashedPassword
})


if (user)
{
    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
    })
} else{
    res.status(400)
    throw new Error('invalid user data')
}    

})




//user login
const login = asyncHandler(async(req, res) => 
{
    const {email, password} = req.body


//check for user email
    const user = await userModel.findOne({email})
    if (user && (await bycrypt.compare(password, user.password))){
    res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
    })
} else
{
    console.log(user)
    res.status(400)
    throw new Error('invalid user credentials')
}
})


//get loggged in user
const getme = asyncHandler(async(req, res) => 
{
    const { _id, name, email} = await userModel.findById(req.user.id)

    res.status(200).json ({
        id : _id,
        name,
        email,
     })

    console.log(req.user.id);
})

//get token jwt
const generateToken = (id) => {
    return jsonwebtoken.sign({ id } ,process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
    
}

module.exports = {
    signup,
    login,
    getme,
}