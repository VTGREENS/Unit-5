const router = require("express").Router()

// TODO: user registration
router.post("/register", (req, res) => {
    console.log(req.body)
    try {
        const { firstName, lastName, email, password } = req.body
        console.log(firstName, lastName, email, password)
    
        res.status(201).json({
            status: "User created",
            user: { email, password }
        })
    } catch (err) {
        console.log(`[server error] ${err}`)
        res.status(500).json({
            status: `Error: ${err}`
        })
    }
})

router.get("/registerquery/", (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.query
        // console.log(firstName, lastName, email, password)
        res.status(201).json({
            status: "User created",
            user: { email, password }
        })
    } catch(err) {
        res.status(500).json({
            status: `Error: ${err}`
        })
    }
})
// TODO: user login

module.exports = router