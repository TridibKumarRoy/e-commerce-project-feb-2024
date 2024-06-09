const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const router = express.Router();

const {
  newPost,
  getAllPost,
  likePost,
  addComment,
  getPost,
  updatePost,
  deletePost,
  getComments,
  likeComment,
} = require("../controller/communityController");


// Get all posts
router
  .route("/posts")
  .get(getAllPost);

// Create a new post
router
  .route("/newpost")
  .post(isAuthenticated,  newPost);

// Like a post
router
  .route("/:postId/like")
  .post(isAuthenticated,  likePost);

// Add a comment to a post
router
  .route("/:postId/comment")
  .post(isAuthenticated,  addComment);

// Get comments for a post
router
  .route("/post/comment/:postId")
  .get( getComments);

// Like a comment
router
  .route("/:commentId/like")
  .get(isAuthenticated,  likeComment);

//! get a post
router
 .route("/post/:id")
 .get(getPost)
 .put(isAuthenticated, authorizedRole("admin"), updatePost)
 .delete(isAuthenticated, authorizedRole("admin"), deletePost);


module.exports = router;
