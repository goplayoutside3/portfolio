import React, { useState, useRef, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

const BusTracker = () => {
  const [allRoutes, loadAllRoutes] = useState(null)
  const [route, setRoute] = useState('')
  const [allDirections, loadAllDirections] = useState(null)
  const [direction, setDirection] = useState('')
  const [allStops, loadAllStops] = useState(null)
  const [stopId, setStop] = useState('')
  const [stopName, setStopName] = useState('')
  const [allArrivals, loadArrivals] = useState(null)

  const routeSelect = useRef(null)
  const dirSelect = useRef(null)
  const stopSelect = useRef(null)

  const getAllRoutes = async () => {
    try {
      const response = await fetch('api/cta')
      const routes = await response.json()
      loadAllRoutes(routes)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  useEffect(() => {
    getAllRoutes()
  }, [])

  const updateRoute = () => {
    setRoute(routeSelect.current.value)
    setDirection('')
    setStop('')
    setStopName('')
    if (allArrivals) loadArrivals(null)
    getDirections(routeSelect.current.value)
  }

  const updateDirection = () => {
    setDirection(dirSelect.current.value)
    setStop('')
    setStopName('')
    if (allArrivals) loadArrivals(null)
    getAllStops(dirSelect.current.value)
  }

  const updateStop = () => {
    console.log(stopSelect.current)
    setStop(stopSelect.current.value)
    setStopName(stopSelect.current.name)
    getArrivals(stopSelect.current.value)
  }

  const getDirections = async newRoute => {
    try {
      const response = await fetch('api/directions', {
        method: 'POST',
        body: JSON.stringify({ newRoute }),
      })
      const directions = await response.json()
      loadAllDirections(directions)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  const getAllStops = async newDir => {
    try {
      const response = await fetch('api/stops', {
        method: 'POST',
        body: JSON.stringify({ route, newDir }),
      })
      const stops = await response.json()
      loadAllStops(stops)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  const getArrivals = async selectedStop => {
    try {
      const response = await fetch('api/arrivals', {
        method: 'POST',
        body: JSON.stringify({ selectedStop }),
      })
      const arrivals = await response.json()
      loadArrivals(arrivals)
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  return (
    <div className="tracker-wrapper">
      <h3>Chicago Transit Bus Tracker</h3>
      <div className="row m-0">
        <div className="col">
          <div className="selects-cont">
            <select
              value={route}
              onChange={updateRoute}
              ref={routeSelect}
              className="dropdown"
              tabIndex="0"
            >
              <option>Select Route</option>
              {allRoutes &&
                allRoutes.map(rt => (
                  <option value={rt.rt} key={rt.rt}>
                    {rt.rt}
                  </option>
                ))}
            </select>

            <select
              value={direction}
              onChange={updateDirection}
              ref={dirSelect}
              className="dropdown"
              tabIndex="0"
            >
              <option>Select Direction</option>
              {allDirections &&
                allDirections.map(dir => (
                  <option value={dir.dir} key={dir.dir}>
                    {dir.dir}
                  </option>
                ))}
            </select>

            <select
              value={stopId}
              onChange={updateStop}
              ref={stopSelect}
              className="dropdown"
              tabIndex="0"
            >
              <option>Select Stop</option>
              {allStops &&
                allStops.map(stop => (
                  <option value={stop.stpid} name={stop.stpnm} key={stop.stpid}>
                    {stop.stpnm}
                  </option>
                ))}
            </select>
          </div>

          <ul className="arrivals">
            <h5>{stopName ? stopName : ''}</h5>
            {allArrivals &&
              allArrivals.slice(0, 5).map(arr => (
                <li key={arr.vid}>
                  <span>#{arr.rtdd} </span>
                  <span>{arr.des}</span>
                  <span className="eta">
                    {arr.prdctdn === 'DUE' ? 'DUE' : `${arr.prdctdn}min`}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BusTracker
