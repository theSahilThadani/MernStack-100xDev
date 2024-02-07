const db = require('mongoose')
const { string } = require('zod')

db.connect("mongodb+srv://SahilThadani:Sahil2336@cluster0.wqrxhks.mongodb.net/TodoCollection")

const TodoSchema = db.Schema({
    title:String,
    description : String,
    completed:Boolean,

})
const todo = db.model('todo',TodoSchema);

module.exports = ({
    todo
})