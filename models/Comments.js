const mongoose = require('mongoose');
//const joi = require('@hapi/joi');
//const { isEmail } = validator;


const commentSchema = mongoose.Schema({
  name:  {
    type: String,
    required: true
},
  email:  {
    type: String,
    required: true
},

  comment:  {
    type: String,
    required: true
}
});

module.exports = mongoose.model('Comments', commentSchema);