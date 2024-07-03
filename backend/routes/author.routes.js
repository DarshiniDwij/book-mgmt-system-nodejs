module.exports = app => {

    const authorController = require("../controllers/author.controller.js")


    // app.get("/", (req, res) => {
    //   res.json({ message: "Hi there, welcome to book management system" });
    // });

    const router = require("express").Router();

    router.get("/getme", (req, res) => {
      res.json({ message: "Hi there, welcome to book management system1" });
    });

     // Create a new Author
     router.post("/createAuthor", authorController.create);
  
     // Retrieve all Author
     router.get("/", authorController.findAll);


      // Retrieve a single Author with id
    router.get("/:author_id", authorController.findOne);
  
    // Update a author with id
    router.put("/:author_id", authorController.update);
   
     // Delete a author with id
     router.delete("/:author_id", authorController.delete);

};