import axios from '../axiosConfig';

const toDoService = {
  getTasks: async () => {
    const response = await axios.get('/items');
    return response.data;
  },

  addTask: async (name) => {
    try {
      const response = await axios.post('/items', { Name: name, IsComplete: false });
      return response.data;
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  },

  setCompleted: async (id, isComplete) => {
    try {
      const task = await axios.get(`/items/${id}`);
      const response = await axios.put(`/items/${id}`, { ...task.data, IsComplete: isComplete });
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  updateTask: async (id, name) => {
    try {
      const task = await axios.get(`/items/${id}`);
      const response = await axios.put(`/items/${id}`, { ...task.data, Name: name });
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  deleteTask: async (id) => {
    try {
      const result = await axios.delete(`/items/${id}`);
      return result.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  }
};

export default toDoService;