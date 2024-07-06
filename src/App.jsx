import React, { useState } from 'react';
import NodesPanel from './Components/NodesPanel';
import FlowBuilder from './Components/FlowBuilder';
import SettingsPanel from './Components/SettingPanel';
import SaveButton from './Components/SaveButton';
import './App.css';

const App = () => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [nodes, setNodes] = useState([]);

  const updateNodeText = (nodeId, text) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, text } } : node
      )
    );
  };

  const handleSave = () => {
    const hasEmptyTargetHandles = nodes.some((node) => {
      const edges = node.data.edges || [];
      return edges.length === 0;
    });

    if (hasEmptyTargetHandles) {
      alert('All nodes must be connected with at least one edge.');
    } else {
      console.log('Flow saved:', nodes);
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <NodesPanel />
        <SettingsPanel
          nodes={nodes}
          selectedNodeId={selectedNodeId}
          updateNodeText={updateNodeText}
        />
      </div>
      <div className="main">
        <FlowBuilder
          setSelectedNode={setSelectedNodeId}
          nodes={nodes}
          setNodes={setNodes}
        />
        <SaveButton onSave={handleSave} />
      </div>
    </div>
  );
};

export default App;





