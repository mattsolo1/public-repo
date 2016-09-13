import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { geoPath, geoAlbersUsa } from 'd3-geo'
import { select } from 'd3-selection'
import { json } from 'd3-request'
import { feature } from 'topojson'
import topo from '../build/topo-counties.json'

const projection = geoAlbersUsa()

// convert topojson back to geojson
const counties = feature(topo, topo.objects.counties)

const path = geoPath().projection(projection)
const App = () => {
  const data = path({
    type: "OKAY",
    features: counties.features,
    something: 'cool prop in private file',
  })
   return (
    <svg width={1000} height={500}>
      <path d={data} fill={'orange'} stroke={'black'} />
    </svg>
   )
}

ReactDOM.render(
  <App />,
  document.getElementById('target'),
)