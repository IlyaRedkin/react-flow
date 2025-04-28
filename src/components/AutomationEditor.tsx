import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { NodeComponent } from './NodeComponent';
import { useAutomationStore, get } from '../store/useAutomationStore';
import { Box, Button, Stack } from '@mui/material';
import { AutomationComponent, AutomationConnection, FlowNode, FlowEdge } from '../types';

const nodeTypes = {
  custom: NodeComponent,
};

function toFlowNodes(nodes: AutomationComponent[]): FlowNode[] {
  const NODE_WIDTH = 0;
  const NODE_HEIGHT = 200;
  const PADDING = 0;

  return nodes.map((n, index) => {
    const row = index;
    const col = index;

    const position = n.position || {
      x: col * (NODE_WIDTH + PADDING),
      y: row * (NODE_HEIGHT + PADDING),
    };

    return {
      id: n.id,
      type: 'custom',
      position,
      data: {
        ...n,
        position,
      },
    };
  });
}

function toFlowEdges(connections: AutomationConnection[]): FlowEdge[] {
  return connections.map((c) => ({
    id: c.id,
    source: c.source,
    target: c.target,
    type: 'smoothstep',
    animated: false,
  }));
}

export const AutomationEditor: React.FC = () => {
  const {
    nodes,
    connections,
    addNode,
    addConnection,
    loadAutomations,
    loadComponentTemplates,
    saveAutomation,
    undo,
    redo,
    selectedAutomation,
    setSelectedAutomation,
    automations,
  } = useAutomationStore();
  console.log('nodes', nodes)

  useEffect(() => {
    loadAutomations();
    loadComponentTemplates();
  }, []);

  useEffect(() => {
    if (automations.length && !selectedAutomation) {
      setSelectedAutomation(automations[0]);
    }
  }, [automations, selectedAutomation, setSelectedAutomation]);

  const [flowNodes, setFlowNodes, onNodesChange] = useNodesState(toFlowNodes(nodes));
  const [flowEdges, setFlowEdges, onEdgesChange] = useEdgesState(toFlowEdges(connections));

  // Обновляем flowNodes и flowEdges при изменении nodes и connections
  useEffect(() => {
    setFlowNodes(toFlowNodes(nodes));
  }, [nodes, setFlowNodes]);

  useEffect(() => {
    setFlowEdges(toFlowEdges(connections));
  }, [connections, setFlowEdges]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = event.currentTarget.getBoundingClientRect();
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      try {
        const data = JSON.parse(event.dataTransfer.getData('application/reactflow'));
        const { type } = data;
        const componentTemplates = get().componentTemplates;
        const template = componentTemplates[type];

        if (template) {
          const newNode: AutomationComponent & { position: { x: number; y: number } } = {
            id: `node-${Date.now()}`,
            id_uuid: `node-${Date.now()}`,
            type_object: type,
            handler_type: false,
            folded: false,
            hidden: false,
            content: template.fields.map((field) => ({
              id: field.id,
              label: field.label,
              type: field.type,
              value: '',
              read_only: field.read_only,
              options: field.options,
            })),
            target: '',
            description: template.description,
            position,
          };

          console.log('newNode', newNode)
          addNode(newNode);
        }
      } catch (error) {
        console.error('Error creating node:', error);
      }
    },
    [addNode]
  );

  const isValidConnection = (connection: Connection | Edge) => {
    const sourceNode = nodes.find((n) => n.id === connection.source);
    const targetNode = nodes.find((n) => n.id === connection.target);
    if (!sourceNode || !targetNode) return false;
    if (connection.source === connection.target) return false;
    if (connections.some((c) => c.source === connection.source && c.target === connection.target)) return false;
    return true;
  };

  const onConnect = useCallback(
    (params: Connection | Edge) => {
      if (!isValidConnection(params)) return;
      const id = `conn-${params.source}-${params.target}`;
      addConnection({ id, source: params.source!, target: params.target! });
      setFlowEdges((eds) => addEdge({ ...params, id }, eds));
    },
    [addConnection, setFlowEdges, nodes, connections]
  );

  return (
    <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Stack direction="row" spacing={2} sx={{ position: 'absolute', top: 10, right: 10, zIndex: 1001 }}>
        <Button variant="contained" onClick={saveAutomation} disabled={!selectedAutomation}>
          Сохранить
        </Button>
        <Button onClick={undo}>Undo</Button>
        <Button onClick={redo}>Redo</Button>
      </Stack>
      <Box sx={{ position: 'absolute', top: 60, right: 20, zIndex: 1001, width: '60%' }}>
        {automations.map((a) => (
          <Button
            key={a.id}
            variant={selectedAutomation?.id === a.id ? 'contained' : 'outlined'}
            size="small"
            sx={{ mr: 1, mb: 1 }}
            onClick={() => setSelectedAutomation(a)}
          >
            {a.content.map((contentItem) => contentItem.value).join(' ')}
          </Button>
        ))}
      </Box>
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDragOver={onDragOver}
        onDrop={onDrop}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Box>
  );
}; 