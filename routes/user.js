import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    var user1 = {firstName: "Ha", lastName:"Nguyen", age: 22}
    const user2 = {firstName: "Uyen", lastName:"Pham", age: 22}
    res.json([user1, user2])

    console.log('[USER Route]')
})

export default router