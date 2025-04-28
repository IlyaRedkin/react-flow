import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useAutomationStore } from '../store/useAutomationStore';
import { ComponentTemplates } from '../types';

export const NodePalette: React.FC = () => {
  const componentTemplates = useAutomationStore((state) => state.componentTemplates);

  const onDragStart = (event: React.DragEvent, type: string) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ type }));
    event.dataTransfer.effectAllowed = 'move';
  };

  const renderTemplateItems = (templates: ComponentTemplates) => {
    return Object.entries(templates).map(([type, template]) => (
      <Box
        key={type}
        draggable
        onDragStart={(e) => onDragStart(e, type)}
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
        <Typography variant="body2">{template.description}</Typography>
      </Box>
    ));
  };

  return (
    <Paper
      sx={{
        width: 240,
        padding: 2,
        position: 'absolute',
        left: 10,
        top: 10,
        zIndex: 1000,
      }}
    >
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Компоненты
      </Typography>
      {renderTemplateItems(componentTemplates)}
    </Paper>
  );
}; 