import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'feature/auth/authSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appSlice} from "feature/app/appSlice";


export const store = configureStore({
  reducer: {
    auth:authSlice,
    app:appSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* @ts-ignore */   /* store.getState()  */
window.store = store