import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  toggle: false,
  qrpay: false,
  selectPayement: false,
  paymentSuccessToggle:false,
  sidebarPaymentToggle:false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleStateTrue: (state) => {
      state.toggle = true;
    },
    toggleStateFalse: (state) => {
      state.toggle = false;
    },
    toggleState: (state) => {
      state.toggle = !state.toggle;
    },
    qrpayState: (state) => {
      state.qrpay = !state.qrpay;
    },
    selectPayementState: (state) => {
      state.selectPayement = !state.selectPayement;
    },
    paymentSuccessState: (state) => {
      state.paymentSuccessToggle = !state.paymentSuccessToggle;

    },

    sidebarPaymentToggleState: (state) => {
      state.sidebarPaymentToggle = !state.sidebarPaymentToggle;

    },

    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
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

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  toggleStateFalse,
  toggleStateTrue,
  toggleState,
  qrpayState,
  selectPayementState,
  paymentSuccessState,
  sidebarPaymentToggleState,
  
} = counterSlice.actions;

export default counterSlice.reducer;
