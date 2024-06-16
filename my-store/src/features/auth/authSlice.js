import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    cart: {
      items: [],
      totalPrice: 0,
    },
  },
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.cart = action.payload.user.cart;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.cart = {
        items: [],
        totalPrice: 0,
      };
    },
    GoogleLoginSuccess(state) {
      state.isAuthenticated = true;
    },
    AddToCart(state, action) {
      const productsToAdd = action.payload;
      productsToAdd.forEach(({ product, quantity }) => {
        const existingItemIndex = state.cart.items.findIndex(
          (item) => item.product._id === product._id,
        );

        if (existingItemIndex !== -1) {
          state.cart.items[existingItemIndex].quantity += 1;
        } else {
          state.cart.items.push({ product, quantity });
        }

        state.cart.totalPrice = state.cart.items.reduce((total, item) => {
          return total + item.product.discountPrice * item.quantity;
        }, 0);
      });
    },

    RemoveFromCart(state, action) {
      const productToRemoveId = action.payload;
      const productIndex = state.cart.items.findIndex(
        (item) => item.product == productToRemoveId,
      );

      state.cart.items = state.cart.items.filter(
        (item) => item.product !== productToRemoveId,
      );
    },

    increaseQuantity(state, action) {
      const itemId = action.payload;
      const itemIndex = state.cart.items.findIndex(
        (item) => item._id == itemId,
      );

      state.cart.items[itemIndex].quantity += 1;

      state.cart.totalPrice = state.cart.items.reduce((total, item) => {
        return total + item.product.discountPrice * item.quantity;
      }, 0);
    },

    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const itemIndex = state.cart.items.findIndex(
        (item) => item._id == itemId,
      );

      state.cart.items[itemIndex].quantity -= 1;

      state.cart.totalPrice = state.cart.items.reduce((total, item) => {
        return total + item.product.discountPrice * item.quantity;
      }, 0);
    },
  },
});

export const {
  loginSuccess,
  logoutSuccess,
  GoogleLoginSuccess,
  AddToCart,
  RemoveFromCart,
  increaseQuantity,
  decreaseQuantity,
} = authSlice.actions;
export default authSlice.reducer;
