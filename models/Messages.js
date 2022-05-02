const mongoose = require('mongoose');
//const joi = require('@hapi/joi');
//const { isEmail } = validator;


const messageSchema = mongoose.Schema({
  name:  {
    type: String,
    required: true
},
  email:  {
    type: String,
    required: true
},
  subject: {
    type: String,
    required: true
},
  message:  {
    type: String,
    required: true
}
});

module.exports = mongoose.model('Messages', messageSchema);

