import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { request } from 'http'

const BusTracker = () => {
  const [route, updateRoute] = useState(null)
  const [allRoutes, loadAllRoutes] = useState(null)
  const [direction, updateDirection] = useState(null)
  const [stopId, updateStopId] = useState(null)
  const [stopName, updateStopName] = useState(null)

  const busBaseURL = 'http://www.ctabustracker.com/bustime/api/v2/get'
  const BUS_API_KEY = '98mAGfBFieuxt8Hsj7an9c52u'

  const getAllRoutes = async () => {
      try {
          const response = await fetch(`${busBaseURL}routes?key=${BUS_API_KEY}&format=json`, {
            mode: 'no-cors',
          })
          console.log(response)
      } catch (error) {
          console.log(error)
      }
  }

  const getDirections = () => {
    const response = ''`${busBaseURL}directions?key=${BUS_API_KEY}&rt=${route}&format=json`
  }

  const getAllStops = () => {
    const response = ''`${busBaseURL}stops?key=${BUS_API_KEY}&rt=${route}&dir=${direction}&format=json`
  }

  const getArrivals = () => {
    const response = ''`${busBaseURL}predictions?key=${BUS_API_KEY}&stpid=${stopId}&format=json`
  }

  return (
    <div>
      <button onClick={getAllRoutes}>Load</button>
      {route && <p>{`Route: #${route}`}</p>}
      <select>Routes</select>
      {direction && <p>{`Direction: ${direction}`}</p>}
      {stopId && <p>{`StopId: #${stopId}`}</p>}
      {stopName && <p>{`Stop Name: ${stopName}`}</p>}
    </div>
  )
}

export default BusTracker
