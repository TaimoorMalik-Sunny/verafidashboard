import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import walletReducer from './features/wallet.slice'

export const parentReducer = combineReducers({
   
    wallet: walletReducer

})

const store = configureStore({
    reducer: parentReducer,
   
})

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof parentReducer>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

