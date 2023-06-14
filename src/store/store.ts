import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    auth:authSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* @ts-ignore */   /* store.getState()  */
window.store = store