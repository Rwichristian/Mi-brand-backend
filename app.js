const express = require('express');
const app = express();
const mongoose = require('mongoose');
const joi = require('@hapi/joi');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const messageRoute = require('./routes/messages');
const commentRoute = require('./routes/comments');
const swaggerUI = require('swagger-ui-express');
const swagger = require('./swagger.json');

//const swaggerJsDoc = require('swagger-jsdoc');

const cors = require("cors");
const morgan = require('morgan');

const dotenv = require('dotenv');



app.use(cors())
app.use(express.json())
app.use(morgan("dev"))



dotenv.config({ path: '.env'});
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json());
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swagger))

app.use('/posts', postsRoute);
app.use('/user', userRoute);
app.use('/messages', messageRoute);
app.use('/comments', commentRoute);
app.get('/', (req,res) => 
{
    res.send('we are on home');
});



mongoose.connect(
    process.env.NODE_ENV === 'production'
    ? process.env.MONGO_PROD_URL
    : process.env.NODE_ENV === 'test'
    ? process.env.MONGO_TEST_URL
    : process.env.MONGO_DEV_URL,

    () => console.log('connected to DB')
);

app.listen(process.env.PORT || 3000,()=> console.log('running on port 3000'));

module.exports = app;