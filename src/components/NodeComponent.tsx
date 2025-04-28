import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { AutomationComponent, ContentField } from '../types';
import { useAutomationStore } from '../store/useAutomationStore';
import { Box, TextField, MenuItem, IconButton, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface NodeComponentProps {
  data: AutomationComponent;
}

export const NodeComponent: React.FC<NodeComponentProps> = ({ data }) => {
  const updateNode = useAutomationStore((s) => s.updateNode);
  const deleteNode = useAutomationStore((s) => s.deleteNode);
  const [edit, setEdit] = useState(false);
    console.log('data node', data)

  const handleFieldChange = (fieldId: string, value: string) => {
    updateNode(data.id, (node) => ({
      ...node,
      content: node.content.map((f) => (f.id === fieldId ? { ...f, value } : f)),
    }));
  };

  const renderField = (field: ContentField) => {
      console.log('renderField field', field)
    if (field.read_only) {
      return (
        <Typography key={field.id} variant="body2" color="text.secondary">
          {field.label}: {field.value}
        </Typography>
      );
    }

    switch (field.type) {
      case 'select':
        return (
          <TextField
            key={field.id}
            label={field.label}
            select
            size="small"
            value={field.value}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            sx={{ width: 180, mb: 1 }}
          >
            {field.options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        );
      case 'date':
        return (
          <TextField
            key={field.id}
            label={field.label}
            type="datetime-local"
            size="small"
            value={field.value}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            sx={{ width: 180, mb: 1 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        );
      case 'text':
      case 'textarea':
        return (
          <TextField
            key={field.id}
            label={field.label}
            multiline={field.type === 'textarea'}
            rows={field.type === 'textarea' ? 3 : 1}
            size="small"
            value={field.value}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            sx={{ width: 180, mb: 1 }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        minWidth: 200,
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="subtitle2">{data.description}</Typography>
        <Box>
          <Tooltip title={edit ? "Закрыть редактирование" : "Редактировать"}>
            <IconButton size="small" onClick={() => setEdit(!edit)}>
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить">
            <IconButton size="small" onClick={() => deleteNode(data.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {data.content.map((field) => (
        <Box key={field.id} sx={{ mb: 1 }}>
          {edit ? (
            renderField(field)
          ) : (
            <Typography variant="body2" color="text.secondary">
              {field.label}: {field.value}
            </Typography>
          )}
        </Box>
      ))}
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
}; 