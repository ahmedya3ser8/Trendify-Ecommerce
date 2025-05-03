import actGetCategories from '@store/categories/act/actGetCategories';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import actGetProducts from '@store/products/act/actGetProducts';
import actGetProductsByCategoryId from '@store/products/act/actGetProductsByCategoryId';
import { useEffect, useState } from 'react';

export default function useProducts() {
  const dispatch = useAppDispatch();
  const {categories} = useAppSelector(state => state.categories);
  const [selectedCatId, setSelectedCatId] = useState('0');
  const [categoryName, setCategoryName] = useState('All Products');
  const [productItems, setProductItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const {data, loading} = useAppSelector(state => state.products);
  useEffect(() => {
    dispatch(actGetCategories()).unwrap();
    dispatch(actGetProducts()).unwrap().then((res) => setProductItems(res.results));
  }, [dispatch])
  function selectedCategoryId(id: string, catName: string) {
    setSelectedCatId(id);
    setCategoryName(catName);
    if (id === '0') {
      dispatch(actGetProducts()).unwrap().then((res) => setProductItems(res.results));
    } else {
      dispatch(actGetProductsByCategoryId(id)).unwrap().then((res) => setProductItems(res.results));
    }
  }
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return {categories, selectedCatId, categoryName, productItems, isOpen, data, loading, selectedCategoryId, toggleMenu}
}
