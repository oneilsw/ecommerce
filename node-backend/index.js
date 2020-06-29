// import { categories } from './category.js'
import Express from 'express'
// const express = require('express')
const app = Express.express()
app.use(express.json())

app.get('/',(req,res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 6000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})