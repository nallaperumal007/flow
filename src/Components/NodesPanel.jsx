import React from 'react';

const NodesPanel = () => {
  const handleDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="nodes-panel">
      <div
        className="node"
        onDragStart={(event) => handleDragStart(event, 'textNode')}
        draggable
      >
        Add Your Text Node 🙋‍♂️
      </div>
    </div>
  );
};

export default NodesPanel;
