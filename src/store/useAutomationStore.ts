import { create } from 'zustand';
import { Automation, Component, Connection } from '../types';

interface AutomationState {
  automations: Automation[];
  selectedAutomation: Automation | null;
  nodes: Component[];
  edges: Connection[];
  addNode: (node: Component) => void;
  addEdge: (edge: Connection) => void;
  updateNode: (nodeId: string, data: Partial<Component>) => void;
  deleteNode: (nodeId: string) => void;
  deleteEdge: (edgeId: string) => void;
  setSelectedAutomation: (automation: Automation) => void;
}

export const useAutomationStore = create<AutomationState>((set) => ({
  automations: [],
  selectedAutomation: null,
  nodes: [],
  edges: [],
  addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),
  addEdge: (edge) => set((state) => ({ edges: [...state.edges, edge] })),
  updateNode: (nodeId, data) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId ? { ...node, ...data } : node
      ),
    })),
  deleteNode: (nodeId) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== nodeId),
      edges: state.edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ),
    })),
  deleteEdge: (edgeId) =>
    set((state) => ({
      edges: state.edges.filter((edge) => edge.id !== edgeId),
    })),
  setSelectedAutomation: (automation) =>
    set({ selectedAutomation: automation }),
})); 