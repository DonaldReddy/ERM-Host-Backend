import express from 'express'
import { signup } from './UserOperations.js'

const router = express.Router()

router.post('/login', (req, res) => {
    const { email, password } = req.params
    res.status(200);
})

router.post('/signup', async (req, res) => {
    const { email, password } = req.body
    console.log(req.body);
    const response = await signup(email, password);
    console.log(response);
    res.send(JSON.stringify(response));
})

export default router