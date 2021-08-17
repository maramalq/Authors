const Author = require("../models/author.model");

module.exports = {

    // 1. create new author function
    createAuthor: (req, res) => {
        const { name } = req.body
        Author.create({name})
            .then((author) => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    // 2. get all authors function
    getAll: (req, res) => {
        Author.find()
            .then((authors) => res.json(authors))
            .catch((err) => res.status(400).json(err));
    },

    // 3. get one author function
    getOne: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then((author) => res.json(author))
            .catch((err) => res.status(400).json(err));
    },

    // 4. upadate one author information function
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate( { _id: req.params.id } , req.body , { new: true , runValidators: true,})
            .then((authorUpdated) => res.json(authorUpdated))
            .catch((err) => res.status(400).json(err));
    },

    // 5. delete on author function
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((authorDeleted) => res.json(authorDeleted))
            .catch((err) => res.status(400).json(err));
    }

}