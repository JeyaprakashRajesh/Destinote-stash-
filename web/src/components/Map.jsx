import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const CenterMap = ({ currentLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (currentLocation) {
      map.setView(currentLocation, map.getZoom());
    }
  }, [currentLocation, map]);

  return null;
};

export default function Map() {
  const [isSatellite, setSatellite] = useState(false);
  const [pinLocation, setPinLocation] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);

  const [mapStyle, setMapStyle] = useState(
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"
  );
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      },
      (error) => {
        console.error("Error fetching location", error);
      },
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (isSatellite) {
      setMapStyle(
        "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png"
      );
    } else {
      setMapStyle(
        "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"
      );
    }
  }, [isSatellite]);

  return (
    <div className="map">
      <MapContainer center={[11.0160, 76.9558]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={mapStyle}
        />
        <CenterMap currentLocation={currentLocation} />
        {pinLocation && currentLocation && (
          <Marker position={currentLocation}>
            <Popup>You are here</Popup>
          </Marker>
        )}
      </MapContainer>

      <div className="map-controls">
        <div className="map-controls-type"onClick={() => setSatellite(!isSatellite)}></div>
        <div className="map-controls-pinLocation"onClick={() => setPinLocation(!pinLocation)}></div>
      </div>
    </div>
  );
}
