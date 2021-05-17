const mongodb = require('mongoose');
const Commerce require('./commerceSchema');


exports.getCommerce = (req, res) =>{
    Commerce.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))

}

exports.saveCommerce = (req, res) => {
    const commerce = new Commerce({
        _id: new mongodb.Types.ObjectId,
        title: req.body.title
    })
}