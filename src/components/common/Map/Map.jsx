import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Componente para redefinir o centro do mapa
const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
}

export default function Map({ coordinates }) {
  const mapStyle = {
    width: "100%",
    height: "100%",
  };
  

  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      scrollWheelZoom={false}
      style={mapStyle}
    >
      <ChangeView center={coordinates} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coordinates}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
}
