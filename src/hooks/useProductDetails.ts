import { IProduct } from "@interfaces/iproduct";
import { useQuery } from "@tanstack/react-query"
import axiosErrorHandler from "@utils/axiosErrorHandler"
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

type TResponse = {
  data: IProduct
}

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

const getSpecificProduct = async (productId: string) => {
  try {
    const res = await axios.get<TResponse>(`/api/v1/products/${productId}`);
    return res.data;
  } catch (error) {
    throw(axiosErrorHandler(error));
  }
}

const useProductDetailsQuery = (productId: string) => {
  return useQuery<TResponse>({
    queryKey: ['product', productId],
    queryFn: () => getSpecificProduct(productId),
    enabled: !!productId,
    staleTime:  5 * 60 * 1000,
    select: (data) => data
  })
}

export default function useProductDetails() {
  const params = useParams();
  const {isLoading, data: product} = useProductDetailsQuery(params.id as string);
  const [colorName, setColorName] = useState('Blue');
  const [sizeName, setSizeName] = useState('Medium');
  const [imgPath, setImgPath] = useState('');
  function selectedColor(name: string) {
    setColorName(name);
  }
  function selectedSize(name: string) {
    setSizeName(name);
  }
  function selectedImg(img: string) {
    setImgPath(img);
  }
  return {isLoading, product, colorName, sizeName, imgPath, selectedColor, selectedImg, selectedSize, colors, sizes}
}
