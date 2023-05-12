import { createSlice } from '@reduxjs/toolkit'

const getLocal = () => {
  let cart = localStorage.getItem('carts')
  return cart ? JSON.parse(cart) : []
}

const setLocal = (data) => {
  localStorage.setItem('carts', JSON.stringify(data))
}

const initialState = {
  carts: getLocal(),
  itemCount: 0,
  totalAmount: 0,
}

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload)
      const isItemCart = state.carts.find(
        (cart) => cart.id === action.payload.id
      )
      const tempCart = isItemCart
        ? state.carts.map((cart) => {
            let tempQty = cart.quantity + action.payload.quantity
            let tempTotalPrice = tempQty + cart.price
            cart.id === action.payload.id
              ? {
                  ...cart,
                  quantity: tempQty,
                  totalPrice: tempTotalPrice,
                }
              : cart
            state.carts = tempCart
            setLocal(state.carts)
          })
        : state.carts.push(action.payload)
      setLocal(state.carts)
      // const tempCart = isItemCart
      //   ? state.carts.map((cart) =>
      //       cart.id === action.payload.id
      //         ? {
      //             ...cart,
      //             quantity: cart.quantity + action.payload.quantity,
      //             totalPrice:
      //               cart.price * cart.quantity +
      //               action.payload.price * action.payload.quantity,
      //           }
      //         : cart
      //     )
      //   : [...state.carts, action.payload]

      // state.carts = tempCart
      // setLocal(state.carts)
    },
    removeCart: (state, action) => {
      const tempCart = state.carts.filter(
        (cart) => cart.id !== action.payload.id
      )
      state.carts = tempCart
      setLocal(state.carts)
    },
    clearCart: (state) => {
      state.carts = []
      setLocal(state.carts)
    },
    getCartTotal: (state) => {
      const fixedTotalAmount = state.carts.reduce((cartTotal, cart) => {
        return (cartTotal += cart.price * cart.quantity)
      }, 0)
      state.totalAmount = fixedTotalAmount.toFixed(2)
      state.itemCount = state.carts.length
    },
  },
})

export const { addToCart, removeCart, clearCart, getCartTotal } =
  cartsSlice.actions
export default cartsSlice.reducer
