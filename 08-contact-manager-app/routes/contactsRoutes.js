const express = require('express');
const router = express.Router();
const { getContact, getContactById, updateContactById, deleteContactById, createContact } = require("../controller/contactController")




router.route("/").get(getContact).post(createContact)

router.route("/:id").get(getContactById).put(updateContactById).delete(deleteContactById)


module.exports = router;