import { create } from 'zustand';
import { Automation, AutomationComponent, AutomationConnection, ComponentTemplates } from '../types';
import { automationService } from '../api/automationService';

interface AutomationState {
  automations: Automation[];
  componentTemplates: ComponentTemplates;
  selectedAutomation: Automation | null;
  nodes: AutomationComponent[];
  connections: AutomationConnection[];
  history: { nodes: AutomationComponent[]; connections: AutomationConnection[] }[];
  historyIndex: number;
  addNode: (node: AutomationComponent & { position: { x: number; y: number } }) => void;
  addConnection: (conn: AutomationConnection) => void;
  updateNode: (nodeId: string, updater: (node: AutomationComponent) => AutomationComponent) => void;
  deleteNode: (nodeId: string) => void;
  deleteConnection: (connId: string) => void;
  setSelectedAutomation: (automation: Automation) => void;
  loadAutomations: () => Promise<void>;
  loadComponentTemplates: () => Promise<void>;
  saveAutomation: () => Promise<void>;
  undo: () => void;
  redo: () => void;
}

function componentsToConnections(components: AutomationComponent[]): AutomationConnection[] {
  return components
    .filter((c) => c.target)
    .map((c) => ({
      id: `conn-${c.target}-${c.id}`,
      source: c.target,
      target: c.id,
    }));
}

export const useAutomationStore = create<AutomationState>((set, get) => ({
  automations: [],
  componentTemplates: {},
  selectedAutomation: null,
  nodes: [],
  connections: [],
  history: [],
  historyIndex: -1,
  addNode: (node) => {
    set((state) => {
      const nodes = [...state.nodes, node];
      return { nodes, history: [...state.history.slice(0, state.historyIndex + 1), { nodes, connections: state.connections }], historyIndex: state.historyIndex + 1 };
    });
  },
  addConnection: (conn) => {
    set((state) => {
      const connections = [...state.connections, conn];
      return { connections, history: [...state.history.slice(0, state.historyIndex + 1), { nodes: state.nodes, connections }], historyIndex: state.historyIndex + 1 };
    });
  },
  updateNode: (nodeId, updater) => {
    set((state) => {
      const nodes = state.nodes.map((node) => node.id === nodeId ? updater(node) : node);
      return { nodes, history: [...state.history.slice(0, state.historyIndex + 1), { nodes, connections: state.connections }], historyIndex: state.historyIndex + 1 };
    });
  },
  deleteNode: (nodeId) => {
    set((state) => {
      const nodes = state.nodes.filter((node) => node.id !== nodeId);
      const connections = state.connections.filter((conn) => conn.source !== nodeId && conn.target !== nodeId);
      return { nodes, connections, history: [...state.history.slice(0, state.historyIndex + 1), { nodes, connections }], historyIndex: state.historyIndex + 1 };
    });
  },
  deleteConnection: (connId) => {
    set((state) => {
      const connections = state.connections.filter((conn) => conn.id !== connId);
      return { connections, history: [...state.history.slice(0, state.historyIndex + 1), { nodes: state.nodes, connections }], historyIndex: state.historyIndex + 1 };
    });
  },
  setSelectedAutomation: (automation) => {
    set({
      selectedAutomation: automation,
      nodes: automation.components,
      connections: componentsToConnections(automation.components),
      history: [{ nodes: automation.components, connections: componentsToConnections(automation.components) }],
      historyIndex: 0,
    });
  },
  loadAutomations: async () => {
    const response = await automationService.getAutomations();
    set({ automations: response });
  },
  loadComponentTemplates: async () => {
    const response = await automationService.getComponentTemplates();
    set({ componentTemplates: response });
  },
  saveAutomation: async () => {
    const { selectedAutomation, nodes } = get();
    if (!selectedAutomation) return;

    const updatedAutomation: Automation = {
      ...selectedAutomation,
      components: nodes.map(node => ({
        ...node,
        position: node.position || { x: 0, y: 0 }
      }))
    };

    try {
      await automationService.updateAutomation(selectedAutomation.id, updatedAutomation);
      // Обновляем состояние после успешного сохранения
      set({ selectedAutomation: updatedAutomation });
    } catch (error) {
      console.error('Error saving automation:', error);
    }
  },
  undo: () => {
    set((state) => {
      if (state.historyIndex > 0) {
        const prev = state.history[state.historyIndex - 1];
        return { nodes: prev.nodes, connections: prev.connections, historyIndex: state.historyIndex - 1 };
      }
      return {};
    });
  },
  redo: () => {
    set((state) => {
      if (state.historyIndex < state.history.length - 1) {
        const next = state.history[state.historyIndex + 1];
        return { nodes: next.nodes, connections: next.connections, historyIndex: state.historyIndex + 1 };
      }
      return {};
    });
  },
}));

export const get = () => useAutomationStore.getState(); 