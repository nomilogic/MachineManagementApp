import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import machineTypesReducer from './machineTypesSlice';
import machinesReducer from './machinesSlice';

const store = configureStore({
  reducer: {
    machineTypes: machineTypesReducer,
    machines: machinesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
