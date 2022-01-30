const {Schema, model} = require('mongoose')

const PostSchema = new Schema({
    name: String,
    date: String,
    text: String,
    image: String,
    avatar: String,
    verified: Boolean,
    tagName: String,
    likeNumber: String,
    commentNumber: String,
    shareNumber: String,
    retweetNumber: String,
    liked: Boolean,
})

module.exports = model('Posts', PostSchema);