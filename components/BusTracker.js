import React, { useState, useRef } from 'react'
import fetch from 'isomorphic-unfetch'

const BusTracker = () => {
  const [allRoutes, loadAllRoutes] = useState(null)
  const [route, setRoute] = useState('')
  const [allDirections, loadAllDirections] = useState(null)
  const [direction, setDirection] = useState('')
  const [allStops, loadAllStops] = useState(null)
  const [stopId, setStop] = useState('')
  const [allArrivals, loadArrivals] = useState(null)

  const routeSelect = useRef(null)
  const dirSelect = useRef(null)
  const stopSelect = useRef(null)

  const updateRoute = () => setRoute(routeSelect.current.value)
  const updateDirection = () => setDirection(dirSelect.current.value)
  const updateStop = () => setStop(stopSelect.current.value)

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
      const response = await fetch('api/directions', { direction })
      const directions = await response.json()
      loadAllDirections(directions)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  const getAllStops = async () => {
    try {
      const response = await fetch('api/stops', { route, direction })
      const stops = await response.json()
      loadAllStops(stops)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  const getArrivals = async () => {
    try {
      const response = await fetch('api/arrivals', { stopId })
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

      <select value={route} onChange={updateRoute} ref={routeSelect}>
        <option>Select Route</option>
        {allRoutes &&
          allRoutes.map(rt => (
            <option value={rt.rt} key={rt.rt}>
              {rt.rt}
            </option>
          ))}
      </select>

      <select value={direction} onChange={updateDirection} ref={dirSelect}>
        <option>Select Direction</option>
        {allDirections &&
          allDirections.map(dir => (
            <option value={dir.dir} key={dir.dir}>
              {dir.dir}
            </option>
          ))}
      </select>

      <select value={stopId} onChange={updateStop} ref={stopSelect}>
        <option>Select Stop</option>
        {allStops &&
          allStops.map(stop => (
            <option value={stop.stpid} key={stop.stpid}>
              {stop.stpnm}
            </option>
          ))}
      </select>
    </div>
  )
}

export default BusTracker
