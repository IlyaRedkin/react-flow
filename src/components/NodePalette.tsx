import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const nodeTypes = [
  {
    type: 'condition',
    label: 'Условия',
    items: [
      { type: 'duration', label: 'Длительность звонка' },
      { type: 'date', label: 'Дата диалога' },
      { type: 'marker', label: 'Маркер' },
    ],
  },
  {
    type: 'action',
    label: 'Действия',
    items: [{ type: 'agent', label: 'Выбор агента' }],
  },
];

export const NodePalette: React.FC = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Paper
      sx={{
        width: 200,
        padding: 2,
        position: 'absolute',
        left: 10,
        top: 10,
        zIndex: 1000,
      }}
    >
      {nodeTypes.map((category) => (
        <Box key={category.type} sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {category.label}
          </Typography>
          {category.items.map((item) => (
            <Box
              key={item.type}
              draggable
              onDragStart={(e) => onDragStart(e, item.type)}
              sx={{
                padding: 1,
                marginBottom: 1,
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                cursor: 'grab',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      ))}
    </Paper>
  );
}; 