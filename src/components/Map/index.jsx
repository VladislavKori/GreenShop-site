import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './style.css'

import {shops} from '../../configuration/shops.config.js';

function Map({propStyle}) {
  return(
    <div className="map" style={propStyle}>
      <MapContainer center={[60, 57]} zoom={4} scrollWheelZoom={true} style={{width: '100%', height: '100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map(item => (
          <Marker position={item.position}>
            <Popup>
              {item.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map;
