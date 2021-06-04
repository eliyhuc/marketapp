const express = require('express');
const router = express.Router();
const isUserAuth = require('../middleware/isUserAuth');


router.get('/', isUserAuth, async(request, response) => {

    const account = request.session.user;

    response.render('dashboard', {
        account: account
    });
})

module.exports = router;