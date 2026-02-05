import { useState, useEffect } from "react";
import { fetchProjects } from "./components/services/api";
import DataTable from "./components/DataTabel";
import MapView from "./components/MapView";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetchProjects();
      setProjects(response.projects);
    }

    loadData();
  }, []);

  return (
    <div className="container">
      <div className="table">
        <DataTable
          data={projects}
          selectedId={selectedId}
          onRowClick={setSelectedId}
        />
      </div>
      <div className="map">
        <MapView
          data={projects}
          selectedId={selectedId}
          onMarkerClick={setSelectedId}
        />
      </div>
    </div>
  );
}

export default App;
