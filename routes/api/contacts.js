const express = require("express");
const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();
const controlers = require("../../controlers/contacts");

router.get("/", controlers.getAll);

router.get("/:id", isValidId, controlers.getContact);

router.post("/", validateBody(schemas.addSchema), controlers.addNewContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  controlers.changeContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controlers.updateStatusContact
);
router.delete("/:id", controlers.deleteContact);
module.exports = router;
