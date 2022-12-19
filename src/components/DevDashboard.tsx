import { useState } from "react";
import apiCount from "../api/apiCount";
import isDev from "../utils/isDev";

const DevDashboard = () => {
  const [closed, setClosed] = useState(false);
  if (closed || !isDev()) return null;
  return (
    <div className="dev-dashboard">
      <div className="dashboard-header">
        <div>API call counter</div>
        <button onClick={() => setClosed(true)}>close</button>
      </div>
      <div>/latest: {apiCount.latest}</div>
      <div>/timeseries: {apiCount.timeseries}</div>
    </div>
  );
};

export default DevDashboard;
