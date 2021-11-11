import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CoinState {
  amount: {}[];
}

const initialState: CoinState = {
  amount: [],
};

export const CoinInputData = createSlice({
  name: 'coin-amount',
  initialState,
  reducers: {
    saveCoinData: (state, action: PayloadAction<any>) => {
      state.amount.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveCoinData } = CoinInputData.actions;

export default CoinInputData.reducer;
