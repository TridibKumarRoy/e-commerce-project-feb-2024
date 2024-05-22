const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Contact = require("../models/contactModel");

exports.newContact = catchAsyncError(async (req, res, next) => {
  const { name,category, email, message } = req.body;

  const contact = await Contact.create({
    name,
    category,
    email,
    message,
  });

  res.status(201).json({
    success: true,
    contact,
  });
});

exports.getContacts = catchAsyncError(async (req, res, next) => {
  const contacts = await Contact.find();

  if (!contacts) {
    return next(new ErrorHandler("No contacts found", 404));
  }
  res.status(200).json({
    success: true,
    contacts,
  });
});

exports.getContact = catchAsyncError(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return next(
      new ErrorHandler(`Contact does not exist with Id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    contact,
  });
});

exports.updateContact = catchAsyncError(async (req, res, next) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!contact) {
    return next(
      new ErrorHandler(`Contact does not exist with Id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    contact,
  });
});

exports.deleteContact = catchAsyncError(async (req, res, next) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    return next(
      new ErrorHandler(`Contact does not exist with Id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    contact,
  });
});
