const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    donationType: {type: String, required: true},
    donationDate: {type: Date, default: Date.now},
    donor: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('PersonalData', schema)