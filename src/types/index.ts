// Типы условий
export type ConditionType = 'duration_greater' | 'duration_less' | 'date_from' | 'date_to' | 'marker';

export interface ConditionData {
  type: ConditionType;
  value: string | number;
}

// Типы действий
export type ActionType = 'agent';

export interface ActionData {
  type: ActionType;
  agentId: string;
  agentName?: string;
}

// Поле внутри content
export interface ContentField {
  id: string;
  label: string;
  type: string;
  value: string;
  read_only: boolean;
  options?: Array<string> | null;
}

// Компонент (нода)
export interface AutomationComponent {
  id: string;
  id_uuid: string;
  type_object: string;
  handler_type: boolean;
  folded: boolean;
  hidden: boolean;
  content: ContentField[];
  target: string;
  description?: string | null;
  position?: { x: number; y: number };
}

// Автоматизация (группа нод)
export interface Automation {
  id: string;
  id_uuid: string;
  type_object: string;
  handler_type: boolean;
  folded: boolean;
  hidden: boolean;
  content: ContentField[];
  components: AutomationComponent[];
  target: string;
}

// Связь между нодами (генерируется из target)
export interface AutomationConnection {
  id: string;
  source: string;
  target: string;
}

export interface ComponentTemplate {
  description: string;
  fields: {
    id: string;
    label: string;
    type: string;
    read_only: boolean;
    options?: Array<string> | null;
  }[];
}

export interface ComponentTemplates {
  [key: string]: ComponentTemplate;
}

export interface FlowNodeData extends AutomationComponent {
  position: { x: number; y: number };
}

export interface FlowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: FlowNodeData;
}

export interface FlowEdge {
  id: string;
  source: string;
  target: string;
  type?: string;
  animated?: boolean;
  style?: React.CSSProperties;
} 