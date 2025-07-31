import React, { useState } from 'react';

const DataMinerDashboard = () => {
  const [files, setFiles] = useState([]);
  const [stats, setStats] = useState(null);

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!Array.isArray(data)) throw new Error("JSON should be an array");
        setFiles(data);
        mineData(data);
      } catch (err) {
        alert('Invalid JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  const mineData = (data) => {
    const totalFiles = data.length;
    const totalSize = data.reduce((sum, item) => sum + (item.size || 0), 0);
    const fileTypes = {};

    data.forEach(item => {
      const type = item.type || 'unknown';
      fileTypes[type] = (fileTypes[type] || 0) + 1;
    });

    const mostCommonType = Object.entries(fileTypes).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
    const averageSize = totalFiles ? (totalSize / totalFiles).toFixed(2) : 0;

    setStats({
      totalFiles,
      totalSize,
      averageSize,
      mostCommonType,
    });
  };

  return (
    <div>
      <label className="upload-box">
        📁 Click to upload JSON file
        <input
          type="file"
          accept=".json"
          onChange={handleFileInput}
          style={{ display: 'none' }}
        />
      </label>

      {stats && (
        <div className="stats">
          <div className="stat-card">
            <strong>Total Files:</strong> {stats.totalFiles}
          </div>
          <div className="stat-card">
            <strong>Total Size:</strong> {stats.totalSize} bytes
          </div>
          <div className="stat-card">
            <strong>Average Size:</strong> {stats.averageSize} bytes
          </div>
          <div className="stat-card">
            <strong>Most Common Type:</strong> {stats.mostCommonType}
          </div>
        </div>
      )}
    </div>
  );
};

export default DataMinerDashboard;
