import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppThunk } from './types';

interface MachineType {
  id: string;
  name: string;
  attributes: Attribute[];
}

interface Attribute {
  id: string;
  name: string;
  type: 'text' | 'date' | 'checkbox' | 'number';
}

interface MachineTypesState {
  data: MachineType[];
  loading: boolean;
}

const initialState: MachineTypesState = {
  data: [],
  loading: false,
};

const machineTypesSlice = createSlice({
  name: 'machineTypes',
  initialState,
  reducers: {
    setMachineTypes: (state, action: PayloadAction<MachineType[]>) => {
      state.data = action.payload;
    },
    addMachineType: (state, action: PayloadAction<MachineType>) => {
      state.data.push(action.payload);
    },
    deleteMachineType: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((type) => type.id !== action.payload);
    },
    updateMachineType: (state, action: PayloadAction<MachineType>) => {
      const { id, name, attributes } = action.payload;
      const index = state.data.findIndex((type) => type.id === id);
      if (index !== -1) {
        state.data[index].name = name;
        state.data[index].attributes = attributes;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setMachineTypes,
  addMachineType,
  deleteMachineType,
  updateMachineType,
  setLoading,
} = machineTypesSlice.actions;

export const fetchMachineTypes = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const typesString = await AsyncStorage.getItem('machineTypes');
    const types: MachineType[] = typesString ? JSON.parse(typesString) : [];
    dispatch(setMachineTypes(types));
  } catch (error) {
    console.log('Error fetching machine types:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default machineTypesSlice.reducer;
