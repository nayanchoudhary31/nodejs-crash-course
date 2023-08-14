const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
//@desc Get all the contacts
//@route /api/contacts
//@access private
const getContact = asyncHandler(async (req, resp) => {
    const contact = await Contact.find({ userId: req.user.id });
    resp.status(200).json(contact)
})

//@desc Get contact by Id
//@route /api/contacts/:id
//@access private
const getContactById = asyncHandler(async (req, resp) => {
    const contact = await Contact.findById();
    if (!contact) {
        resp.status(404);
        throw new Error("Contact Not Found");
    }
    resp.status(200).json(contact)
})

//@desc Create new contact
//@route /api/contacts
//@access private
const createContact = asyncHandler(async (req, resp) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        resp.status(400)
        throw new Error("All fields are mandatory")
    }


    const contact = await Contact.create({
        name,
        email,
        phone
    })

    resp.status(200).json(contact)
})


//@desc Update contact by Id
//@route/api/contacts/:id
//@access private
const updateContactById = asyncHandler(async (req, resp) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        resp.status(404);
        throw new Error("Contact Not Found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    resp.status(200).json(updatedContact)
})

//@desc Delete contact by Id
//@route/api/contacts/:id
//@access private
const deleteContactById = asyncHandler(async (req, resp) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        resp.status(404);
        throw new Error("Contact Not Found");
    }
    await Contact.findByIdAndRemove(req.params.id);
    resp.status(200).json(contact);
})



module.exports = {
    getContact,
    getContactById,
    createContact,
    updateContactById,
    deleteContactById
}