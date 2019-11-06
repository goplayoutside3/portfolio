const fetch = require('isomorphic-unfetch')

const busBaseURL = 'http://www.ctabustracker.com/bustime/api/v2/get'
const BUS_API_KEY = '98mAGfBFieuxt8Hsj7an9c52u'

module.exports = async (req, res) => {
    const route = '8'
    const direction = 'Southbound'
  try {
    const response = await fetch(
        `${busBaseURL}stops?key=${BUS_API_KEY}&rt=${route}&dir=${direction}&format=json`)
    const data = await response.json()
    res.status(200)
    res.send(data['bustime-response']['stops'])
  } 
  catch (error) {
    res.status(500)
    // console.log(error.message)
  }
}
