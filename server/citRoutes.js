
const router = require('express').Router();

const citizen = require("./citizen");

// router.get("/")

router.get("/surname/:surname", (req, res) => {
    const surname = req.params.surname;
    console.log(surname);
    res.status(202).send(`Hi ${surname}, how are you?`)
});

module.exports = router;