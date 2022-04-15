import './App.css';
import { useState } from 'react'
import L from 'leaflet'
import borderData from './data/border';
import leafletPip from 'leaflet-pip'

import Map from './components/Map'

//Takes two arguments (latitude, and longitude)
//returns true if those coordinates are inside VT and false if they are outside
function inVermont(lat, long) {
  let vtLayer = L.geoJSON(borderData)

  let layerArray = leafletPip.pointInLayer([long, lat], vtLayer)

  if(layerArray.length) {
    return true
  } else {
    return false
  }
}

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])

  return (
    <div>
      <Map center={center} />
    </div>
  );
}

export default App;
