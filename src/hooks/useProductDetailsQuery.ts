import { IProduct } from "@interfaces/iproduct";
import { useQuery } from "@tanstack/react-query"
import axiosErrorHandler from "@utils/axiosErrorHandler"
import axios from "axios";

type TResponse = {
  data: IProduct
}

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

export default useProductDetailsQuery;
