const asyncHandler = require('express-async-handler');
//@desc Get all the contacts
//@route /api/contacts
//@access public
const getContact = asyncHandler(async (req, resp) => {
    resp.status(200).json({ message: `Get all contacts` })
})

//@desc Get contact by Id
//@route /api/contacts/:id
//@access public
const getContactById = asyncHandler(async (req, resp) => {
    resp.status(200).json({ message: `Get contact by Id ${req.params.id}` })
})

//@desc Create new contact
//@route /api/contacts
//@access public
const createContact = asyncHandler(async (req, resp) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        resp.status(400)
        throw new Error("All fields are mandatory")
    }

    resp.status(200).json({ message: `New contract created` })
})


//@desc Update contact by Id
//@route/api/contacts/:id
//@access public
const updateContactById = asyncHandler(async (req, resp) => {
    resp.status(200).json({ message: `Update contact by Id ${req.params.id}` })
})

//@desc Delete contact by Id
//@route/api/contacts/:id
//@access public
const deleteContactById = asyncHandler(async (req, resp) => {
    resp.status(200).json({ message: `Delete contact by Id ${req.params.id}` })
})



module.exports = {
    getContact,
    getContactById,
    createContact,
    updateContactById,
    deleteContactById
}