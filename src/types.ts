export interface Root {
    data: Daum[]
}

type TRootTypeObject = 'group';
export interface Daum {
    id: string
    target: string
    id_uuid: string
    type_object: TRootTypeObject
    handler_type: boolean
    folded: boolean
    hidden: boolean
    content: Content[]
    components: Component[]
}

export interface Content {
    id: string
    label: string
    type: 'textarea' | 'text'
    value: string | number
    read_only: boolean
    options: any
}

export interface Content2 {
    id: string
    label: string
    type: string
    value: string
    read_only: boolean
    options?: Option[] | null
}

type ComponentObjectType = 'call_duration_lte' | 'call_duration_gte' | 'automation_agent' | 'dialogue_date' | 'dialogue_date_gte' | 'dialogue_date_lte' | 'selected_marker'
export interface Component {
    id: string
    id_uuid: string
    type_object: ComponentObjectType
    handler_type: boolean
    folded: boolean
    hidden: boolean
    content: Content2[]
    target: string
    description?: string | null
}

export interface Option {
    id: string
    label: string
}
