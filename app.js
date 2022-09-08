require('dotenv').config()
const express = require('express')
const app = express()
// TODO: import the getCityInfo and getJobs functions from util.js
const getInfoRoute = require('./util.js')
const { getCityInfo, getJobs } = require('./util')
const { json } = require('express')
//getCityInfo(location) && getJobs(location)
// TODO: Statically serve the public folder
app.use((req, res, next) => {
    getInfoRoute,
    next()
})
app.use(express.json())
app.use(express.static('public'))
  

app
// TODO: declare the GET route /api/city/:city
    .route('/api/city/:city')
    .get((req, res) => {
        // This endpoint should call getCityInfo and getJobs and return
        // the result as JSON.
        // The returned JSON object should have two keys:
        const info = res.json({
            cityInfo : getCityInfo(req), 
            jobs : getJobs(req)
        })
        // If no city info or jobs are found,
        // the endpoint should return a 404 status
        if (info === null)
        return info && res.status(404).end()
        else return info
    })

module.exports = app
