require('dotenv').config()
const express = require('express')
const app = express()
// TODO: import the getCityInfo and getJobs functions from util.js
const getInfoRoute = require('./util.js')
const { getCityInfo, getJobs } = require('./util')
//getCityInfo(location) && getJobs(location)
app.use(getInfoRoute)
// TODO: Statically serve the public folder
app.use(express.static('public'))
app.use(express.json())
  

app
// TODO: declare the GET route /api/city/:city
    .route('/api/city/:city')
    .get((req, res) => {
        // This endpoint should call getCityInfo and getJobs and return
        // the result as JSON.
        const cityInfo = getCityInfo()
        const jobInfo = getJobs()
        // The returned JSON object should have two keys:
        // cityInfo (with value of the getCityInfo function)
        // jobs (with value of the getJobs function)
        res.json(cityInfo, jobInfo) 
        // If no city info or jobs are found,
        // the endpoint should return a 404 status
        if (!cityInfo || !jobInfo) 
        return res.status(404).end()
    })

module.exports = app
