import React from 'react';

const SettingsPanel = ({ nodes, selectedNodeId, updateNodeText }) => {
  const handleTextChange = (event) => {
    updateNodeText(selectedNodeId, event.target.value);
  };

  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  return (
    <div className="settings-panel">
      <h3>Nodes List</h3>
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>
            {node.data.text} (ID: {node.id})
          </li>
        ))}
      </ul>
      {selectedNode ? (
        <>
          <h3>Edit Node</h3>
          <label>Node Name:</label>
          <input
            type="text"
            value={selectedNode.data.text}
            onChange={handleTextChange}
          />
        </>
      ) : (
        <div>Select a node to edit</div>
      )}
    </div>
  );
};

export default SettingsPanel;
