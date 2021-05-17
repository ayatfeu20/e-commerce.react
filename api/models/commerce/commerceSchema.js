const mongodb = require('mongoose')

const schema = mongodb.schema({

    _id: mongodb.schema.Types.ObjectId,
    title: { type: String, required: true },
    completed: { type: Boolean, defualt: false},
    created: { type: Date, defualt: Date.now()}

})

module.exports = mongodb.model('commerce',schema);


