require('dotenv').config()
const express = require('express')
const app = express()
// TODO: import the getCityInfo and getJobs functions from util.js
const getInfoRoute = require('./util.js')
const { getCityInfo, getJobs } = require('./util')
const { json } = require('express')
const { default: axios } = require('axios')
//getCityInfo(location) && getJobs(location)
// TODO: Statically serve the public folder
app.use(express.json())
app.use(express.static('./public'))
  
app
// TODO: declare the GET route /api/city/:city
    .route('/api/city/:city')
    .get(async (req, res) => {
        try {
            // The returned JSON object should have two keys:
            const cityInfo = await getCityInfo(req)
            const jobs = await getJobs(req)
            // This endpoint should call getCityInfo and getJobs and return
            // the result as JSON.
            res.json({cityInfo, jobs})
            // If no city info or jobs are found,
            if ({cityInfo}.isEmpty()) {
                res.status(404)
            } else if ({jobs}.isEmpty()) {
                res.status(404)
            }
        } catch(err) {
            console.log(err)
            // the endpoint should return a 404 status
            res.status(404).end()
        }
    })
        // 

module.exports = app
