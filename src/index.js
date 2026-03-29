import express from 'express'
import dotenv from 'dotenv'

import { databaseConnection } from './database/connection.js'

dotenv.config()

const StartServer = async()=>{

    const app = express()

    await databaseConnection()
    
    app.listen(process.env.PORT,()=>console.log('server is running on http://localhost:3000'))
}

StartServer()


