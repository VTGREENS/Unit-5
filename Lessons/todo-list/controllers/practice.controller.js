// TODO: create a router variable import the Router Engine from Express
const router = require('express').Router();
//  create an api endpoint that will work for localhost:4000/practice/cliche

router.get("/pass", (req, res)=> {
    // req = request & res = response

    res.send("we'll head them off at the pass!");
});

//  ? Create the endpoint of localhost:4000/practice/greeting/
// ? Request type: post request
// ? send back a "Good Afternoon"

router.post("/cliche", (req, res)=> { 
    console.log(req.body.firstName);
    const {firstName} = req.body
    res.send(`${firstName},  I hate that cliche!`);
});

// ? if route doesn't exist
router.get("*", (req,res) => {
    res.status(404).send ("I couldn't find what you were looking for")
});

module.exports = router