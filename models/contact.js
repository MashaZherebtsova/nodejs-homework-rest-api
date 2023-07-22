const { Schema, model } = require("mongoose");
const { handleMongoosError } = require("../helpers");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongoosError);

const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
  phone: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  favorite: Joi.boolean(),
});
const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  updateFavoriteSchema,
  addSchema,
};

module.exports = {
  schemas,
  Contact,
};
