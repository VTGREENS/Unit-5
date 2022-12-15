// TODO: Ability to CRUD todo's and save them somewhere
const router = require("express").Router()
const db = require("../assets/db.json")
const fs = require("fs")
const dbPath = "./assets/db.json"

router.get("/", (req, res) => {
    try {
        res.status(200).json({
            db
        })
    } catch (err) {
        res.status(500).json({
            status: `Error: ${err}`
        })
    }
})

router.get("/:id", (req, res) => {
    try {
        let { id } = req.params
        let result = db.filter(i => i.todo_id == id)

        res.status(200).json({
            status: `Found item at id: ${id}`,
            result
        })
    } catch (err) {
        res.status(500).json({
            error: `${err}`
        })
    }
})
// TODO: POST a todo

router.post("/", (req, res) => {
    try {
        const todoItem = req.body
        console.log(todoItem)
        fs.readFile(dbPath, (err, data) => {
            if (err) throw err
            const db = JSON.parse(data)
            db.push(todoItem)
            fs.writeFile(dbPath, JSON.stringify(db), () => null)
        })
    } catch (err) {
        console.log(err)
    }
})
// TODO: Update a todo - pass ID value as a param; pass updated todo through the body; run through each iterable; check if post_id matches param_id; reassign the db at the index to what comes from the body; save the file.

router.put("/:id", (req, res) => {
    try {
        const id = Number(req.params.id)
    
        const todo = req.body
        console.log(todo)
    
        let result
        fs.readFile(dbPath, (err, data) => {
            if (err) throw err
            const db = JSON.parse(data)
            
            db.forEach((e, i) => {
                if (e.todo_id === id) {
                    db[i] = todo
                    result = todo
                    fs.writeFile(dbPath, JSON.stringify(db), err => console.log(err))
                    }
                })
    
            result ? res.status(200).json({
                status: `ID: ${id} succesfully modified`,
                object: result
                })
                : res.status(404).json({
                    status: `ID: ${id} not found`
                })
            })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: `Error: ${err}`
        })
    }
})



    // console.log(req.params)
    // same as
    // const { id } = req.params
    // console.log(typeof db[0].todo_id)
    // console.log(typeof id)


   
    



// TODO: Delete a todo: pass the id as a param; read the file; filter to match the post_id to the id from the param but dont return what matches; return what doesn't match; write to file.

router.delete("/:id", (req, res) => {
    
    try {
        const id = Number(req.params.id)
        fs.readFile(dbPath, (err, data) => {
            if (err) throw err
            const db = JSON.parse(data)
            const filteredDb = db.filter(element => {
                if (element.todo_id !== id) {
                    return element
                }
            })
            
            fs.writeFile(dbPath, JSON.stringify(filteredDb), (err) => console.log(err))
            
            res.status(200).json({
                status: `ID: ${id} successfully deleted`,
                filteredDb
            })
        })
        
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: `Error: ${err}`
        })
    }
})




// ? HINT! You may get stuck with your params not matching what's inside your todo id, check your data type.

module.exports = router