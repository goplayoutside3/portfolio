const fetch = require('isomorphic-unfetch')

const busBaseURL = 'http://www.ctabustracker.com/bustime/api/v2/get'
const BUS_API_KEY = '98mAGfBFieuxt8Hsj7an9c52u'

module.exports = async (req, res) => {
    const stopId = '1128'
  try {
    const response = await fetch(
        `${busBaseURL}predictions?key=${BUS_API_KEY}&stpid=${stopId}&format=json`)
    const data = await response.json()
    res.status(200)
    res.send(data['bustime-response']['prd'])
  } 
  catch (error) {
    res.status(500)
    // console.log(error.message)
  }
}
