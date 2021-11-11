import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CoinState {
  amount: any;
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
      // console.log(state.amount);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveCoinData } = CoinInputData.actions;

export default CoinInputData.reducer;
