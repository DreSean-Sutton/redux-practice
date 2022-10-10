import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
// import { fetchCount } from './counterAPI';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementOnClick: state => {
      state.value += 1;
    }
  }
})

export const { incrementOnClick } = counterSlice.actions;

export const currentCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
