import React from 'react';
import { Handle, Position } from 'reactflow';
import { Component } from '../types';

interface NodeComponentProps {
  data: Component;
}

export const NodeComponent: React.FC<NodeComponentProps> = ({ data }) => {
  const renderContent = () => {
    if (data.type === 'condition') {
      const condition = data.data.condition;
      if (!condition) return null;

      switch (condition.type) {
        case 'duration':
          return (
            <div>
              Длительность звонка {condition.operator === 'less' ? '≤' : '≥'}{' '}
              {condition.value} мин
            </div>
          );
        case 'date':
          return <div>Дата диалога: {condition.value}</div>;
        case 'marker':
          return <div>Маркер: {condition.value}</div>;
        default:
          return null;
      }
    } else if (data.type === 'action') {
      const action = data.data.action;
      if (!action) return null;

      return <div>Выбор агента: {action.agentId}</div>;
    }
  };

  return (
    <div
      style={{
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: data.type === 'condition' ? '#fff' : '#e6f7ff',
        border: '1px solid #ddd',
      }}
    >
      <Handle type="target" position={Position.Top} />
      {renderContent()}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}; 