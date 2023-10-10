import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import productSlice from './features/products/productSlice';
import { productsApi } from './api/apiSlice';
import userSlice from './features/user/userSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    user: userSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
