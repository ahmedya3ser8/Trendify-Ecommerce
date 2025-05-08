import { IProduct } from "@interfaces/iproduct";
import { useQuery } from "@tanstack/react-query";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  data: IProduct[],
  results: number
}

const getAllProducts = async () => {
  try {
    const res = await axios.get<TResponse>(`/api/v1/products`);
    return res.data;
  } catch (error) {
    throw(axiosErrorHandler(error))
  }
}

function useProductsQuery() {
  return useQuery<TResponse>({
    queryKey: ['products'],
    queryFn: getAllProducts,
    staleTime:  5 * 60 * 1000,
    select: (data) => data
  })
}

export default useProductsQuery;
