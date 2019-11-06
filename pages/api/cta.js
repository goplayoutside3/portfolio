const fetch = require('isomorphic-unfetch')

const busBaseURL = 'http://www.ctabustracker.com/bustime/api/v2/get'
const BUS_API_KEY = '98mAGfBFieuxt8Hsj7an9c52u'

module.exports = async (req, res) => {
  try {
    const response = await fetch(
      `${busBaseURL}routes?key=${BUS_API_KEY}&format=json`)
    const data = await response.json()
    res.status(200)
    res.send(data['bustime-response']['routes'])
  } 
  catch (error) {
    res.status(500)
    // console.log(error.message)
  }
}
