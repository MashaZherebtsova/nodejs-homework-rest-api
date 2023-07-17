const { Contact } = require("../models/contact");

const { HttpError } = require("../helpers");
// const { addSchema } = require("../schemas/schemas");

const getAll = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt ");
  res.json(result);
};
const getContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findById(id);

    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const addNewContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const changeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json({
      message: "Delete success",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAll,
  getContact,
  addNewContact,
  changeContact,
  deleteContact,
  updateStatusContact,
};
