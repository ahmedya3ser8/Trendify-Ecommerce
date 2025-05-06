import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import actAddProductToCart from '@store/cart/act/actAddProductToCart';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import actAddProductToWishlist from '@store/wishlist/act/actAddProductToWishlist';
import actRemoveProductFromWishlist from '@store/wishlist/act/actRemoveProductFromWishlist';
import { useCallback, useState } from 'react';
import actGetLoggedUserWishlist from "@store/wishlist/act/actGetLoggedUserWishlist";

export default function useProductItem() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(state => state.cart);
  const { productIds, loading: wishlistLoading } = useAppSelector(state => state.wishlist);
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState('');
  const addToCart = useCallback((productId: string) => {
    setCurrentId(productId);
    dispatch(actAddProductToCart(productId)).unwrap().then((res) => {
      setCurrentId('');
      toast.success(res.message, {
        position: 'top-right'
      })
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }, [dispatch]);
  const addToWishlist = useCallback((productId: string) => {
    setCurrentId(productId);
    dispatch(actAddProductToWishlist(productId)).unwrap().then((res) => {
      setCurrentId('');
      dispatch(actGetLoggedUserWishlist()).unwrap();
      toast.success(res.message, {
        position: 'top-right'
      })
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }, [dispatch]);
  const removeFromWishlist = useCallback((productId: string) => {
    setCurrentId(productId);
    dispatch(actRemoveProductFromWishlist(productId)).unwrap().then((res) => {
      setCurrentId('');
      dispatch(actGetLoggedUserWishlist()).unwrap();
      toast.success(res.message, {
        position: 'top-right'
      })
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }, [dispatch]);
  return {loading, productIds, wishlistLoading, navigate, currentId, addToCart, addToWishlist, removeFromWishlist}
}
