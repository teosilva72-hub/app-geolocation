import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import '../../assets/css/map.css';
import 'leaflet/dist/leaflet.css';
import myLocation from '../../assets/img/location-icon.webp';
import iconBus from '../../assets/img/bus-icon.png';
export default function Map(props: any) {

  const myIcon = new L.Icon({
    iconUrl: myLocation,
    iconRetinaUrl: myLocation,
    popupAnchor: [-0, -0],
    iconSize: [25, 25],
  });

  const busIcon = new L.Icon({
    iconUrl: iconBus,
    iconRetinaUrl: iconBus,
    popupAnchor: [-0, -0],
    iconSize: [25, 25],
  });


  return (
    <MapContainer center={{ lat: props.lat, lng: props.log }}
      zoom={50}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={props.marker} icon={myIcon}>
        <Popup>
          {localStorage.getItem('userName')}, você está aqui!
        </Popup>
      </Marker>
      <Marker position={props.marker} icon={myIcon}>
        <Popup>
          {localStorage.getItem('userName')}, você está aqui!
        </Popup>
      </Marker>

    </MapContainer>
  );
}