import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'

const BusTracker = () => {
  const [allRoutes, loadAllRoutes] = useState(null)
  const [route, updateRoute] = useState(null)
  const [allDirections, loadAllDirections] = useState(null)
  const [direction, updateDirection] = useState(null)
  const [allStops, loadAllStops] = useState(null)
  const [stopId, updateStopId] = useState(null)
  const [allArrivals, loadArrivals] = useState(null)
  const [stopName, updateStopName] = useState(null)

  const getAllRoutes = async () => {
    try {
      const response = await fetch('api/cta')
      const routes = await response.json()
      loadAllRoutes(routes)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  const getDirections = async () => {
    try {
      const response = await fetch('api/directions', route)
      const directions = await response.json()
      loadAllDirections(directions)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  const getAllStops = async () => {
    try {
      const response = await fetch('api/stops', {route, direction})
      const stops = await response.json()
      loadAllStops(stops)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  const getArrivals = async () => {
    try {
      const response = await fetch('api/arrivals', stopId)
      const arrivals = await response.json()
      loadArrivals(arrivals)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  return (
    <div>
      <button onClick={getAllRoutes}>Load</button>
      <button onClick={getDirections}>Load</button>
      <button onClick={getAllStops}>Load</button>
      <button onClick={getArrivals}>Load</button>
      {route && <p>{`Route: #${route}`}</p>}
      <select>Routes</select>
      {direction && <p>{`Direction: ${direction}`}</p>}
      {stopId && <p>{`StopId: #${stopId}`}</p>}
      {stopName && <p>{`Stop Name: ${stopName}`}</p>}
    </div>
  )
}

export default BusTracker
