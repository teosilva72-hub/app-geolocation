import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMapEvents } from 'react-leaflet';
import '../../assets/css/map.css';
import 'leaflet/dist/leaflet.css';
export default function Map(props: any) {
  return (
    <MapContainer center={{ lat: props.lat, lng: props.log }}
      zoom={30}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={props.marker}>
        <Popup>
          {localStorage.getItem('userName')}, você está aqui!
        </Popup>
      </Marker>

    </MapContainer>
  );
}