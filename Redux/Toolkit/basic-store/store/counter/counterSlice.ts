import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Type-only imports (import type) are erased at runtime, so they don’t cause circular dependency issues because they don’t load or execute the module they reference.
// So we can import RootState type from store without causing circular dependency issues.
import type { RootState } from "../store";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It uses the Immer library to convert this into safe, immutable updates.
      // Immer allows us to write code that "mutates" the state, but it actually produces a new state object.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// selector function which will give us the value count without writing state.counter.value everywhere in the application, where we need the counter value
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
