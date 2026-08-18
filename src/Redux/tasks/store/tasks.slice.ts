import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: []
};

export const tasksSlice = createSlice({
  name: 'tasksFeature',
  initialState,
  reducers: {
    // Acción para agregar: muta el arreglo de forma segura por detrás
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id: Date.now().toString(),
        title: action.payload,
        completed: false
      });
    },
    // Acción para alternar completado: busca la tarea y cambia su booleano
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    // Acción para eliminar: reemplaza el arreglo filtrando el ID
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    }
  }
});

// Exportamos las acciones generadas automáticamente
export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

// Exportamos el reducer para configurar el Store global
export const tasksReducer = tasksSlice.reducer;

// Selectores base para consumir en el componente
export const selectAllTasks = (state: { tasksFeature: TaskState }) => state.tasksFeature.tasks;