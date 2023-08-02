const express = require("express");
const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();
const controlers = require("../../controlers/contacts");

router.get("/", authenticate, controlers.getAll);

router.get("/:id", authenticate, isValidId, controlers.getContact);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controlers.addNewContact
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  controlers.changeContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controlers.updateStatusContact
);
router.delete("/:id", authenticate, controlers.deleteContact);
module.exports = router;
