const express = require("express")
const dataControllers = require("../controllers/index")

//creating a router
const router = express.Router();
//api to create data
router.post('/create',dataControllers.createData)

//api to get all the data
router.get('/all', dataControllers.getAllData);

// api to get data filtered by year
router.get("/year/:year", dataControllers.filteredByYear)

// api to get data filtered by topic
router.get("/topic/:topic", dataControllers.filteredByTopic)

// api to get data filtered by title
router.get("/title/:title", dataControllers.filteredByTitle)

// api to get data filtered by sector
router.get("/sector/:sector", dataControllers.filteredBySector)

// api to get data filtered by region
router.get("/region/:region", dataControllers.filteredByRegion)

// api to get data filtered by country
router.get("/country/:country", dataControllers.filteredByCountry)

// api to get data filtered by pestle
router.get("/pestle/:pestle", dataControllers.filteredByPestle)

// api to get data filtered by source
router.get("/source/:source", dataControllers.filteredBySource)

// api to get data filtered by intensity
router.get("/intensity/:intensity", dataControllers.filteredByIntensity)

// api to get data filtered by likelihood
router.get("/likelihood/:likelihood", dataControllers.filteredByLikelihood)

// api to get data filtered by any
router.get("/any/:search", dataControllers.filteredByAny)


module.exports = router