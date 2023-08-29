import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import productSlice from './features/products/productSlice';
import { productsApi } from './api/apiSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
