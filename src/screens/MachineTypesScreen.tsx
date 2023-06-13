import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchMachineTypes } from '../redux/machineTypesSlice';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

type AppThunk<ReturnType = void> = ThunkDispatch<
  RootState,
  unknown,
  Action<string>
>;

const MachineTypesScreen = () => {
  const dispatch: AppThunk = useDispatch();
  const machineTypes = useSelector((state: RootState) => state.machineTypes.data);
  const loading = useSelector((state: RootState) => state.machineTypes.loading);

  useEffect(() => {
    dispatch(fetchMachineTypes());
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      {machineTypes.map((type) => (
        <Text key={type.id}>{type.name}</Text>
      ))}
    </View>
  );
};

export default MachineTypesScreen;
