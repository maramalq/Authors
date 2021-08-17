const AuthorController = require("../controllers/author.controller");

const Author = require("../models/author.model");

// routes is similar to urls.py
module.exports = (app) => {
  // different routes for the endpoints to match Controller
  // Create
    app.post("/api/author", AuthorController.createAuthor );
    // Read
    // Get All
    app.get("/api/author", AuthorController.getAll );
    // Get One
    app.get("/api/author/:id", AuthorController.getOne );
    // Update
    app.put("/api/author/:id", AuthorController.updateAuthor );
    // Delete
    app.delete("/api/author/:id", AuthorController.deleteAuthor);
};