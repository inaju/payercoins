import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './slice.js'


export const store = configureStore({
  reducer: {
      counter:counterReducer ,
  },
})