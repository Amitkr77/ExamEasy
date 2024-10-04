import express from 'express'
import { register, login } from '../controllers/authcontroller.js'

const authRoute = express.Router()

authRoute.post("/register", register)
authRoute.post("/login", login)

export default authRoute;