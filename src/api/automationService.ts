import axios from 'axios';
import { Automation, ComponentTemplates } from '../types';

const API_URL = 'https://mok-automate.rnd.flowai.ru/api';

export const automationService = {
  async getAutomations(): Promise<Automation[]> {
    const response = await axios.get(`${API_URL}/automations`);
    return response.data.data;
  },

  async getAutomation(id: string): Promise<Automation> {
    const response = await axios.get(`${API_URL}/automations/${id}`);
    return response.data;
  },

  async createAutomation(automation: Omit<Automation, 'id'>): Promise<Automation> {
    const response = await axios.post(`${API_URL}/automations`, automation);
    return response.data;
  },

  async updateAutomation(id: string, automation: Partial<Automation>): Promise<Automation> {
    const response = await axios.put(`${API_URL}/automations/${id}`, automation);
    return response.data;
  },

  async deleteAutomation(id: string): Promise<void> {
    await axios.delete(`${API_URL}/automations/${id}`);
  },

  async getComponentTemplates(): Promise<ComponentTemplates> {
    const response = await axios.get(`${API_URL}/component-templates/`);
    return response.data;
  },
}; 