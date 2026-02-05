import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ data, selectedId, onMarkerClick }) {
  return (
    <MapContainer
      center={[19.9975, 73.7898]}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((project) => (
        <Marker
          key={project.id}
          position={[project.latitude, project.longitude]}
          eventHandlers={{ click: () => onMarkerClick(project.id) }}
        >
          <Popup>{project.projectName}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
