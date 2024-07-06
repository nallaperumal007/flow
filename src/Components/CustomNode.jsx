import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { Handle } from 'reactflow';

const CustomNode = ({ data, id, isConnectable, setSelectedNode }) => {
  return (
    <div className="custom-node">
      <Handle type="target" position="top" isConnectable={isConnectable} />
      <div className='nodeModual'>
        <div className='nodeText'>{data.text}</div>
        <button className='btnEdit' onClick={() => setSelectedNode(id)}><FaRegEdit /></button>
      </div>
      <Handle type="source" position="bottom" isConnectable={isConnectable} />
    </div>
  );
};

export default CustomNode;
