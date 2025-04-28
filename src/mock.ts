import {Root} from "./types.ts";

const mockData: Root = {
    "data": [
        {
            "id": "df23d92f-2ee0-43a7-aaac-23dd8f27b610",
            "target": "",
            "id_uuid": "0fa0158a-4264-4071-a64f-9f0e70b9dedd",
            "type_object": "group",
            "handler_type": false,
            "folded": false,
            "hidden": false,
            "content": [
                {
                    "id": "name",
                    "label": "Automation Name",
                    "type": "text",
                    "value": "Автоматизация для входящих",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "description",
                    "label": "Automation Description",
                    "type": "textarea",
                    "value": "Тестовая автоматизация звонков",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "count_files",
                    "label": "Count Files",
                    "type": "text",
                    "value": 7,
                    "read_only": true,
                    "options": null
                }
            ],
            "components": [
                {
                    "id": "fb895d4a-aa57-4150-8087-1c0350e94d02",
                    "id_uuid": "2b04897f-a244-4492-8734-02b0653a0dc2",
                    "type_object": "call_duration_lte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка до",
                            "type": "text",
                            "value": "Длина звонка меньше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "002:09",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "",
                    "description": null
                },
                {
                    "id": "e9d6c1ca-b0a4-4cf3-918b-12dfa02b95fe",
                    "id_uuid": "80ab773e-1291-4f14-95cf-8da320acc248",
                    "type_object": "call_duration_gte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка",
                            "type": "text",
                            "value": "Длина звонка больше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "001:07",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "fb895d4a-aa57-4150-8087-1c0350e94d02",
                    "description": null
                },
                {
                    "id": "574fbd8b-c26d-4ebe-8661-836a5bd4f102",
                    "id_uuid": "97513278-f299-46e5-8a56-91613ef802d6",
                    "type_object": "dialogue_date_gte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Дата диалогов от",
                            "type": "text",
                            "value": "Дата диалогов от",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Dialogue Date",
                            "type": "date",
                            "value": "11.05.2024",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "e9d6c1ca-b0a4-4cf3-918b-12dfa02b95fe",
                    "description": null
                },
                {
                    "id": "66a4a8b0-c091-4c7c-aa59-7a520e8063a0",
                    "id_uuid": "97e765a3-5f90-4721-8f32-bb4e93d1fc07",
                    "type_object": "automation_agent",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Agent Name",
                            "type": "text",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "description",
                            "label": "Agent Description",
                            "type": "textarea",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        }
                    ],
                    "target": "574fbd8b-c26d-4ebe-8661-836a5bd4f102",
                    "description": null
                }
            ]
        },
        {
            "id": "ca9e0fc6-3adb-4ba0-8db3-48ecca48030c",
            "target": "",
            "id_uuid": "446415b9-0503-4016-abcc-b2b538895b59",
            "type_object": "group",
            "handler_type": false,
            "folded": false,
            "hidden": false,
            "content": [
                {
                    "id": "name",
                    "label": "Automation Name",
                    "type": "text",
                    "value": "Автоматизация для входящих",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "description",
                    "label": "Automation Description",
                    "type": "textarea",
                    "value": "Тестовая автоматизация звонков",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "count_files",
                    "label": "Count Files",
                    "type": "text",
                    "value": 20,
                    "read_only": true,
                    "options": null
                }
            ],
            "components": [
                {
                    "id": "959fa9f0-60dc-410a-be81-5a249e0235f9",
                    "id_uuid": "3e3bb159-4db5-436f-9aa4-02bd7b768dd0",
                    "type_object": "call_duration_lte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка до",
                            "type": "text",
                            "value": "Длина звонка меньше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "001:35",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "",
                    "description": null
                },
                {
                    "id": "ed064af1-05fe-4130-8ef1-4a233741ddca",
                    "id_uuid": "0022598f-a596-4779-b54e-69082dc647c7",
                    "type_object": "call_duration_gte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка",
                            "type": "text",
                            "value": "Длина звонка больше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "000:08",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "959fa9f0-60dc-410a-be81-5a249e0235f9",
                    "description": null
                },
                {
                    "id": "aed22973-eb5f-4c2a-b717-8187edd242dc",
                    "id_uuid": "e2ca6178-6f16-4dcc-879a-bae918c9b6c2",
                    "type_object": "automation_agent",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Agent Name",
                            "type": "text",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "description",
                            "label": "Agent Description",
                            "type": "textarea",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        }
                    ],
                    "target": "ed064af1-05fe-4130-8ef1-4a233741ddca",
                    "description": null
                }
            ]
        },
        {
            "id": "9c88368d-543b-4417-a990-9a6019ae48dc",
            "target": "",
            "id_uuid": "530ec691-0799-49b9-a731-d019897c32f0",
            "type_object": "group",
            "handler_type": false,
            "folded": false,
            "hidden": false,
            "content": [
                {
                    "id": "name",
                    "label": "Automation Name",
                    "type": "text",
                    "value": "Автоматизация для входящих",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "description",
                    "label": "Automation Description",
                    "type": "textarea",
                    "value": "Тестовая автоматизация звонков",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "count_files",
                    "label": "Count Files",
                    "type": "text",
                    "value": 4,
                    "read_only": true,
                    "options": null
                }
            ],
            "components": [
                {
                    "id": "1e084d49-031e-4c3e-b55d-876668a0d7d5",
                    "id_uuid": "df7d3ea1-eb69-499f-867a-b2a472bc0310",
                    "type_object": "call_duration_lte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка до",
                            "type": "text",
                            "value": "Длина звонка меньше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "000:53",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "",
                    "description": null
                },
                {
                    "id": "61e01771-cb40-444c-b113-6b8f77ad1925",
                    "id_uuid": "1423ea47-435e-4527-982d-05245c396e60",
                    "type_object": "call_duration_gte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка",
                            "type": "text",
                            "value": "Длина звонка больше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "000:07",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "1e084d49-031e-4c3e-b55d-876668a0d7d5",
                    "description": null
                },
                {
                    "id": "ce728bdb-4cd8-4b15-ab82-8d3f486b038d",
                    "id_uuid": "458d5d95-17da-462f-85b1-cc5f8a8f3a1d",
                    "type_object": "dialogue_date_gte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Дата диалогов от",
                            "type": "text",
                            "value": "Дата диалогов от",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Dialogue Date",
                            "type": "date",
                            "value": "28.01.2024",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "61e01771-cb40-444c-b113-6b8f77ad1925",
                    "description": null
                },
                {
                    "id": "5396f7c6-443c-4dd0-90fd-1043767edb18",
                    "id_uuid": "dbf844ea-fdc4-4acb-9d25-f0ddfb46b93c",
                    "type_object": "dialogue_date_lte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Дата диалогов до",
                            "type": "text",
                            "value": "Дата диалогов до",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Dialogue Date",
                            "type": "date",
                            "value": "13.03.2025",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "ce728bdb-4cd8-4b15-ab82-8d3f486b038d",
                    "description": null
                },
                {
                    "id": "0fc2db78-2d60-4ea1-9e20-c503a4a993d0",
                    "id_uuid": "3861fcfa-8a89-4c42-b898-ef22e624c85f",
                    "type_object": "selected_marker",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "Маркер",
                            "label": "Маркер",
                            "type": "select",
                            "value": "1/3",
                            "read_only": false,
                            "options": [
                                {
                                    "id": "1/3",
                                    "label": "1/3"
                                },
                                {
                                    "id": "2/4",
                                    "label": "2/4"
                                }
                            ]
                        }
                    ],
                    "target": "5396f7c6-443c-4dd0-90fd-1043767edb18",
                    "description": "Маркер"
                },
                {
                    "id": "a8029fe8-e233-4cbf-9f20-e4aa2e3e28bd",
                    "id_uuid": "1ab789fa-a181-4b55-95be-bc14bfb5d702",
                    "type_object": "automation_agent",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Agent Name",
                            "type": "text",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "description",
                            "label": "Agent Description",
                            "type": "textarea",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        }
                    ],
                    "target": "0fc2db78-2d60-4ea1-9e20-c503a4a993d0",
                    "description": null
                }
            ]
        },
        {
            "id": "17d0c63d-a2be-451c-af8e-f4b9319ba960",
            "target": "",
            "id_uuid": "680327d7-9966-4546-8f2f-c00237f06e2f",
            "type_object": "group",
            "handler_type": false,
            "folded": false,
            "hidden": false,
            "content": [
                {
                    "id": "name",
                    "label": "Automation Name",
                    "type": "text",
                    "value": "Автоматизация для входящих",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "description",
                    "label": "Automation Description",
                    "type": "textarea",
                    "value": "Тестовая автоматизация звонков",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "count_files",
                    "label": "Count Files",
                    "type": "text",
                    "value": 20,
                    "read_only": true,
                    "options": null
                }
            ],
            "components": [
                {
                    "id": "608964d6-386a-4d8f-a312-fbbb3add8f9a",
                    "id_uuid": "1ee30677-f763-4fe1-a7ee-0de141c0a997",
                    "type_object": "call_duration_lte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка до",
                            "type": "text",
                            "value": "Длина звонка меньше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "000:26",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "",
                    "description": null
                },
                {
                    "id": "94274a97-c632-4402-8388-af16e2922069",
                    "id_uuid": "4b220979-93cd-40a5-b28d-a9ae98fe9db5",
                    "type_object": "call_duration_gte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка",
                            "type": "text",
                            "value": "Длина звонка больше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "002:35",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "608964d6-386a-4d8f-a312-fbbb3add8f9a",
                    "description": null
                },
                {
                    "id": "09db9a2e-1f97-479b-bdf3-6082c85aad3f",
                    "id_uuid": "430ff935-1104-4f91-b55b-abb0e77de895",
                    "type_object": "dialogue_date_gte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Дата диалогов от",
                            "type": "text",
                            "value": "Дата диалогов от",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Dialogue Date",
                            "type": "date",
                            "value": "11.12.2025",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "94274a97-c632-4402-8388-af16e2922069",
                    "description": null
                },
                {
                    "id": "fef2c30c-5eec-4c37-a3af-c4d396f28bfa",
                    "id_uuid": "5bdc59f7-9098-41cf-a891-df09b168684c",
                    "type_object": "dialogue_date_lte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Дата диалогов до",
                            "type": "text",
                            "value": "Дата диалогов до",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Dialogue Date",
                            "type": "date",
                            "value": "10.08.2023",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "09db9a2e-1f97-479b-bdf3-6082c85aad3f",
                    "description": null
                },
                {
                    "id": "a384aa85-ba32-4da9-aeb7-bf44ee012906",
                    "id_uuid": "62cafd7d-f57c-4b27-915a-13d42244f6c2",
                    "type_object": "selected_marker",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "Маркер",
                            "label": "Маркер",
                            "type": "select",
                            "value": "2/4",
                            "read_only": false,
                            "options": [
                                {
                                    "id": "1/3",
                                    "label": "1/3"
                                },
                                {
                                    "id": "2/4",
                                    "label": "2/4"
                                }
                            ]
                        }
                    ],
                    "target": "fef2c30c-5eec-4c37-a3af-c4d396f28bfa",
                    "description": "Маркер"
                },
                {
                    "id": "28861d80-bc8e-4d1d-84f0-8ff8fb582ac7",
                    "id_uuid": "989a38c8-471f-4c78-b48a-162d6ebbd6e1",
                    "type_object": "automation_agent",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Agent Name",
                            "type": "text",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "description",
                            "label": "Agent Description",
                            "type": "textarea",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        }
                    ],
                    "target": "a384aa85-ba32-4da9-aeb7-bf44ee012906",
                    "description": null
                }
            ]
        },
        {
            "id": "75a61f14-0ba9-40fb-b0e6-c3e5f4239235",
            "target": "",
            "id_uuid": "6a892161-887b-4212-878e-2e773ba03d8a",
            "type_object": "group",
            "handler_type": false,
            "folded": false,
            "hidden": false,
            "content": [
                {
                    "id": "name",
                    "label": "Automation Name",
                    "type": "text",
                    "value": "Автоматизация для входящих",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "description",
                    "label": "Automation Description",
                    "type": "textarea",
                    "value": "Тестовая автоматизация звонков",
                    "read_only": true,
                    "options": null
                },
                {
                    "id": "count_files",
                    "label": "Count Files",
                    "type": "text",
                    "value": 11,
                    "read_only": true,
                    "options": null
                }
            ],
            "components": [
                {
                    "id": "224360a4-bcf5-4bab-99ad-665fd5a854a4",
                    "id_uuid": "c0077d4b-0c0b-409d-9862-08c3b42979ce",
                    "type_object": "call_duration_lte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка до",
                            "type": "text",
                            "value": "Длина звонка меньше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "002:56",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "",
                    "description": null
                },
                {
                    "id": "16b0d76d-1a88-43ef-a4d4-88673a208268",
                    "id_uuid": "922e46a8-3d10-4689-9c55-141a8b94e885",
                    "type_object": "call_duration_gte",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Длина звонка",
                            "type": "text",
                            "value": "Длина звонка больше, мин",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "duration_minutes",
                            "label": "Duration minutes",
                            "type": "date",
                            "value": "001:51",
                            "read_only": false,
                            "options": null
                        }
                    ],
                    "target": "224360a4-bcf5-4bab-99ad-665fd5a854a4",
                    "description": null
                },
                {
                    "id": "76ae608e-a712-4dde-926c-261291db6d36",
                    "id_uuid": "0bc2280c-c9b9-4355-9331-d056acb1de78",
                    "type_object": "automation_agent",
                    "handler_type": false,
                    "folded": true,
                    "hidden": false,
                    "content": [
                        {
                            "id": "name",
                            "label": "Agent Name",
                            "type": "text",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        },
                        {
                            "id": "description",
                            "label": "Agent Description",
                            "type": "textarea",
                            "value": "12",
                            "read_only": true,
                            "options": null
                        }
                    ],
                    "target": "16b0d76d-1a88-43ef-a4d4-88673a208268",
                    "description": null
                }
            ]
        }
    ]
}
