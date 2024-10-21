import React, { useState } from 'react'; 
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
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
  const [hoveredLocation, setHoveredLocation] = useState(null); // Track hovered marker
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const puneBounds = [
    [18.4134, 73.7072],  // SW corner of Pune region
    [18.6516, 73.9755]   // NE corner of Pune region
  ];

  const locations = [
    { lat: 18.5204, lng: 73.8567, name: "Pune City", aqi: 88 },
    { lat: 18.6298, lng: 73.7997, name: "Pimpri-Chinchwad", aqi: 72 },
    { lat: 18.5867, lng: 73.8065, name: "Kasarwadi", aqi: 68 },
    { lat: 18.5635, lng: 73.8407, name: "Khadki", aqi: 76 },
    { lat: 18.4967, lng: 73.8419, name: "Shivajinagar", aqi: 60 },
    { lat: 18.4635, lng: 73.8656, name: "Katraj", aqi: 75 },
    { lat: 18.5203, lng: 73.8792, name: "Viman Nagar", aqi: 74 },
    { lat: 18.5284, lng: 73.8742, name: "Yerwada", aqi: 80 },
    { lat: 18.5303, lng: 73.8399, name: "Koregaon Park", aqi: 58 },
    { lat: 18.5215, lng: 73.8422, name: "Mahatma Gandhi Road", aqi: 65 },
    { lat: 18.5148, lng: 73.8530, name: "Swargate", aqi: 73 },
    { lat: 18.5152, lng: 73.8320, name: "Deccan Gymkhana", aqi: 54 },
    { lat: 18.5312, lng: 73.8447, name: "Bund Garden", aqi: 69 },
    { lat: 18.5485, lng: 73.9029, name: "Wagholi", aqi: 80 },
    { lat: 18.5687, lng: 73.7725, name: "Hinjawadi", aqi: 77 },
    { lat: 18.5824, lng: 73.7374, name: "Chinchwad", aqi: 63 },
    { lat: 18.6090, lng: 73.8039, name: "Bhosari", aqi: 62 },
    { lat: 18.5738, lng: 73.8779, name: "Kharadi", aqi: 67 },
    { lat: 18.5316, lng: 73.9101, name: "Mundhwa", aqi: 74 }
  ];

  // Function to handle mouse enter event
  const handleMouseEnter = (location, event, map) => {
    setHoveredLocation(location);

    // Get the position of the marker in pixel coordinates
    const markerPos = event.target.getLatLng();
    const point = map.latLngToContainerPoint(markerPos);

    // Update the tooltip position based on marker position
    setTooltipPosition({
      top: point.y + 20, // Offset slightly for better visibility
      left: point.x + 20,
    });
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredLocation(null);
  };

  // Helper component to handle marker hover events
  const MarkerWithTooltip = ({ location }) => {
    const map = useMap(); // Access map instance with useMap hook

    return (
      <Marker
        position={[location.lat, location.lng]}
        eventHandlers={{
          mouseover: (event) => handleMouseEnter(location, event, map),
          mouseout: handleMouseLeave
        }}
      />
    );
  };

  // Scroll to content section function
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="map" style={{ height: "100vh", width: "100vw", margin: 0, paddingTop: 70, position: 'relative' }}>
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

        {/* Render markers */}
        {locations.map((location, idx) => (
          <MarkerWithTooltip key={idx} location={location} />
        ))}
      </MapContainer>

      {/* Information box that appears on hover */}
      {hoveredLocation && (
        <div
          style={{
            position: 'absolute',
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            padding: '30px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            pointerEvents: 'none', // Makes sure it doesn't interfere with mouse events
          }}
        >
          <h4>{hoveredLocation.name}</h4>
          <p><strong>AQI:</strong> {hoveredLocation.aqi}</p>
          <p>{hoveredLocation.aqi <= 50 ? 'Good' : hoveredLocation.aqi <= 100 ? 'Moderate' : 'Unhealthy'}</p>
        </div>
      )}

      {/* Down Arrow to scroll to content */}
      <div 
  style={{
    position: 'absolute',
    bottom: '40px', // Adjusted for better visibility on smaller screens
    left: '90%',
    transform: 'translateX(-50%)',
    fontSize: '3rem', // Larger for better clarity
    cursor: 'pointer',
    zIndex: 1000, // Darker background for contrast
    color: 'white', // White arrow for visibility
    borderRadius: '50%',
    padding: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease', // Add animation effect
  }}
  onClick={scrollToContent}
  onMouseOver={(e) => e.target.style.transform = 'translateX(-50%) scale(1.1)'}
  onMouseOut={(e) => e.target.style.transform = 'translateX(-50%) scale(1)'}
>
  ⬇️
</div>
    </div>
  );
};

export default Map;
