import { MapContainer, TileLayer , Marker , Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css";
export default function Map() {
    return (
        <div className="map">
            <MapContainer center={[11.0168 , 76.9558]} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}