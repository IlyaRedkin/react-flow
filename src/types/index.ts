export interface Automation {
  id: string;
  name: string;
  callCount: number;
  components: Component[];
}

export interface Component {
  id: string;
  type: ComponentType;
  position: { x: number; y: number };
  data: ComponentData;
}

export type ComponentType = 'condition' | 'action';

export interface ComponentData {
  condition?: {
    type: 'duration' | 'date' | 'marker';
    operator: 'less' | 'greater';
    value: number | string;
  };
  action?: {
    type: 'agent';
    agentId: string;
  };
}

export interface Connection {
  id: string;
  source: string;
  target: string;
} 