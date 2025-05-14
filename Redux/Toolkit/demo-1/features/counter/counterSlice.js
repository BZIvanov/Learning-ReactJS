import { createSlice } from '@reduxjs/toolkit'; // 2.0.1

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

// selector function which will give us the value count without writing state.counter.value everywhere in the application, where we need the counter value
export const selectCounterValue = (state) => state.counter.value;
