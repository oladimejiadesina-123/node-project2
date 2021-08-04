const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.getAllUsers =  (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This route does not exist for now'
    })
}

   exports.getUser =  (req, res) => {
        res.status(500).json({
            status: 'err',
            message: 'This route does not exist for now'
        })
   }

   exports.createUser =  (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This route does not exist for now'
    })
}

exports.updateUser =  (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This route does not exist for now'
    })
}

exports.deleteUser =  (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This route does not exist for now'
    })
};