const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');

router.post('/signup', (req, res)=> {
    const signedUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    signedUpUser.save()
    .then(data => res.json(data))
    .catch(error => console.log(error))
})

module.exports = router