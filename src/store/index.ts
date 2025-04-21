import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
