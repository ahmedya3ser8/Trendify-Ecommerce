import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useCallback, useEffect } from 'react';
import actGetLoggedUserCart from '@store/cart/act/actGetLoggedUserCart';
import actRemoveCartItem from '@store/cart/act/actRemoveCartItem';
import toast from 'react-hot-toast';
import actUpdateCartProductQuantity from '@store/cart/act/actUpdateCartProductQuantity';
import actClearUserCart from '@store/cart/act/actClearUserCart';

export default function useCart() {
  const dispatch = useAppDispatch();
  const {loading, data, cartId, numOfCartItems} = useAppSelector(state => state.cart);
  useEffect(() => {
    dispatch(actGetLoggedUserCart()).unwrap();
  }, [dispatch]);
  const removeCartItem = useCallback((productId: string) => {
    dispatch(actRemoveCartItem(productId)).unwrap().then(() => {
      toast.success('The product has been removed from your cart.', {
        position: 'top-right'
      })
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }, [dispatch])
  const updateQuantity = useCallback((productId: string, count: number) => {
    dispatch(actUpdateCartProductQuantity({productId, count})).unwrap().then(() => {
      toast.success('Product quantity updated', {
        position: 'top-right'
      })
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }, [dispatch])
  const clearCart = useCallback(() => {
    dispatch(actClearUserCart()).unwrap().then(() => {
      toast.success('Cart has been cleared', {
        position: 'top-right'
      })
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }, [dispatch])
  return {loading, data, cartId, numOfCartItems, removeCartItem, updateQuantity, clearCart}
}
