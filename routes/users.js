const express = require("express")
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstname })
        res.redirect(`/users/${users.length -1}`)
    } else {
        console.log("Error")
        res.render("users/new", { firstName: req.body.firstName })
    }
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User With ID ${req.params.id}`)//params.뒤에는 위의 파라미터명과 같아야함
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`)
    })

const users = [{ name: "Kyle"}, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}


module.exports = router