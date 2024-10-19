import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = () => {
  const puneBounds = [
    [18.4134, 73.7072],  // SW corner of Pune region
    [18.6516, 73.9755]   // NE corner of Pune region
  ];

  const locations = [
    { lat: 18.5204, lng: 73.8567, name: "Pune City" },
    { lat: 18.6298, lng: 73.7997, name: "Pimpri-Chinchwad" },
    { lat: 18.5867, lng: 73.8065, name: "Kasarwadi" },
    { lat: 18.5635, lng: 73.8407, name: "Khadki" },
    { lat: 18.4967, lng: 73.8419, name: "Shivajinagar" },
    { lat: 18.4635, lng: 73.8656, name: "Katraj" },
    { lat: 18.5203, lng: 73.8792, name: "Viman Nagar" }
  ];

  return (
    <div id="map" style={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
      <MapContainer
        center={[18.5204, 73.8567]}
        zoom={13}
        style={{ height: "100%", width: "100%" }} // Fullscreen map
        maxBounds={puneBounds}
        maxBoundsViscosity={1.0} // Restricts panning beyond Pune city
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, idx) => (
          <Marker key={idx} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
