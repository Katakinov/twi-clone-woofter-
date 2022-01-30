const {Schema, model} = require('mongoose')

const ActualsSchema = new Schema ({
    theme: String,
    title: String,
    tweets: Number,
    comments: Number,
})

module.exports = model('Actuals', ActualsSchema);