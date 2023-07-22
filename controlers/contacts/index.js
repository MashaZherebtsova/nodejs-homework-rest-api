const { ctrlWrapper } = require("../../helpers");

const addNewContact = require("../contacts/addNewContact");
const changeContact = require("../contacts/changeContact");
const getAll = require("../contacts/getAll");
const deleteContact = require("../contacts/delete");
const getContact = require("../contacts/getContact");
const updateStatusContact = require("../contacts/update");

module.exports = {
  addNewContact: ctrlWrapper(addNewContact),
  changeContact: ctrlWrapper(changeContact),
  getAll: ctrlWrapper(getAll),
  deleteContact: ctrlWrapper(deleteContact),
  getContact: ctrlWrapper(getContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
