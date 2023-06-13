import { ThunkAction } from 'redux-thunk';
import { RootState, AppDispatch } from './store';
import { Action } from '@reduxjs/toolkit';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
