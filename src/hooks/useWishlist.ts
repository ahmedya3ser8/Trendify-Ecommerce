import actAddProductToCart from "@store/cart/act/actAddProductToCart";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetLoggedUserWishlist from "@store/wishlist/act/actGetLoggedUserWishlist";
import actRemoveProductFromWishlist from "@store/wishlist/act/actRemoveProductFromWishlist";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useWishlist() {
  const dispatch = useAppDispatch();
  const {count, data, loading: wishlistLoading} = useAppSelector(state => state.wishlist);
  const { loading } = useAppSelector(state => state.cart);
  const [currentId, setCurrentId] = useState('');
  useEffect(() => {
    dispatch(actGetLoggedUserWishlist()).unwrap();
  }, [dispatch])
  const addToCart = useCallback((productId: string) => {
    setCurrentId(productId);
    dispatch(actAddProductToCart(productId)).unwrap().then((res) => {
      setCurrentId('');
      dispatch(actRemoveProductFromWishlist(productId)).unwrap().then(() => dispatch(actGetLoggedUserWishlist()).unwrap());
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
  return {removeFromWishlist, addToCart, currentId, loading, wishlistLoading, data, count}
}
