const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Post = require("../models/communityModel");
const Comment = require("../models/commentModel");

//* create new post
exports.newPost = catchAsyncError(
    async (req, res, next) => {
        const { title, content } = req.body;
        const post = await Post.create({ user, title, content });
            
        res.status(201).json({
            success: true,
            post,
        });
            
    }
            
);

//*! Get all posts  
exports.getAllPost = catchAsyncError(async (req, res, next) => {
  const posts = await Post.find()
    .populate("user", "username")
    .populate({
      path: "comments",
      populate: {
        path: "user",
        select: "username",
      },
    });

    if (!posts) {
        return next(new ErrorHandler("No posts found", 404));
    }

    res.status(201).json({
      success: true,
      posts,
    });
});

//* like a post
exports.likePost = catchAsyncError(
    async (req, res, next) => {
        let post = await Post.findById(req.params.postId);
        req.body.user = req.user.id;
        if (!post) {
            return next(
                new ErrorHandler(`Post does not exist with Id: ${req.params.id}`, 404)
            );
        }
         if (!post.likes.includes(req.body.user)) {
           post.likes.push(req.body.user);
           await post.save();
         }
        res.status(200).json({
            success: true,
            post,
        });
    }
);

//* Add a comment to a post
exports.addComment = catchAsyncError(
    async (req, res, next) => {
        const { content } = req.body;

        let comment = new Comment({  post: req.params.postId, content });
        await comment.save();

        let post = await Post.findById(req.params.postId);
        if (!post) {
            return next(
              new ErrorHandler(
                `Post does not exist with Id: ${req.params.postId}`,
                404
              )
            );
        }
        post.comments.push(comment._id);
        await post.save();

        res.status(200).json({
            success: true,
            post,
        });
    }
);




//!
exports.getPost = catchAsyncError(
    async (req, res, next) => {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return next(
                new ErrorHandler(`Post does not exist with Id: ${req.params.id}`, 404)
            );
        }
        res.status(200).json({
            success: true,
            post,
        });
    }
);
//!
exports.updatePost = catchAsyncError(
    async (req, res, next) => {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!post) {
            return next(
                new ErrorHandler(`Post does not exist with Id: ${req.params.id}`, 404)
            );
        }
        res.status(200).json({
            success: true,
            post,
        });
    }
)
//!
exports.deletePost = catchAsyncError(
    async (req, res, next) => {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return next(
                new ErrorHandler(`Post does not exist with Id: ${req.params.id}`, 404)
            );
        }
        res.status(200).json({
            success: true,
            post,
        });
    }
)


//* Get comments for a post
exports.getComments = catchAsyncError(
    async (req, res, next) => {
        const comments = await Comment.find({
          post: req.params.postId,
        }).populate("user", "username");

        if (!comments) {
          return next(
            new ErrorHandler(
              `comments does not exist for post with Id: ${req.params.postId}`,
              404
            )
          );
        }
        res.status(200).json({
          success: true,
          comments,
        });
    }
);

//* Like a comment
exports.likeComment = catchAsyncError(
    async (req, res, next) => {
        let comment = await Comment.findById(req.params.commentId);
        if (!comment) {
            return next(
                new ErrorHandler(`Comment does not exist with Id: ${req.params.id}`, 404)
            );
        }
         if (!comment.likes.includes(req.body.user)) {
           comment.likes.push(req.body.user);
           await comment.save();
         }
        res.status(200).json({
            success: true,
            comment,
        });
    }
);

