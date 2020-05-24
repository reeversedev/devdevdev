export const openCart = () => ({
  type: 'OPEN_CART',
  payload: true,
})

export const closeCart = () => ({
  type: 'CLOSE_CART',
  payload: false,
})

export const fullviewCart = () => ({
  type: 'FULL_VIEW',
  payload: true,
})
