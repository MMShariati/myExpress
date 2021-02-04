const express = require('express');
const router = express.Router();

let ages = [20, 25, 30, 35, 36, 37];

// router.use('/test')
router.post('/checkAge', (req, res) => {
    console.log(req.url);
    console.log(req.body);

    if (ages.includes(Number(req.body.age))) {
        res.status(200).send('ok')
    } else {
        res.status(406).send('nok')
    }
    
});





module.exports = router;