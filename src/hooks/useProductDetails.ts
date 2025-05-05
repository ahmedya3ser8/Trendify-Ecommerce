import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetSpecificProduct from "@store/products/act/actGetSpecificProduct";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useProductDetails() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {product, loading} = useAppSelector(state => state.products);
  const [colorName, setColorName] = useState('Blue');
  const [sizeName, setSizeName] = useState('Medium');
  const [imgPath, setImgPath] = useState('');
  useEffect(() => {
    dispatch(actGetSpecificProduct(params.id as string)).unwrap();
  }, [dispatch, params.id])
  const colors = [
    {name: 'Blue', color: '#507ccd'},
    {name: 'White', color: '#fff'},
    {name: 'Brown', color: '#c88242'},
    {name: 'Black', color: '#000'},
    {name: 'Soft Clay', color: '#dcb9a8'},
    {name: 'Misty Olive', color: '#a7b2a3'}
  ]
  const sizes = [
    {name: 'Extra Small', size: 'XS'},
    {name: 'Small', size: 'S'},
    {name: 'Medium', size: 'M'},
    {name: 'Large', size: 'L'},
    {name: 'Extra Large', size: 'XL'},
    {name: 'Double Extra Large', size: 'XXL'},
    {name: 'Triple Extra Large', size: 'XXXL'}
  ]
  function selectedColor(name: string) {
    setColorName(name);
  }
  function selectedSize(name: string) {
    setSizeName(name);
  }
  function selectedImg(img: string) {
    setImgPath(img);
  }
  return {product, loading, colorName, sizeName, imgPath, colors, sizes, selectedColor, selectedSize, selectedImg}
}
