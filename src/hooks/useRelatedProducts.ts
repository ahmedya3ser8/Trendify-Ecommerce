import { IProduct } from "@interfaces/iproduct";
import { useQuery } from "@tanstack/react-query";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  data: IProduct[]
}

const fetchRelatedProducts = async (categoryId: string) => {
  try {
    const res = await axios.get(`/api/v1/products`, {
      params: { 'category[in]': categoryId },
    });
    return res.data;
  } catch (error) {
    throw axiosErrorHandler(error);
  }
};

export default function useRelatedProducts(categoryId?: string) {
  return useQuery<TResponse>({
    queryKey: ['relatedProducts', categoryId],
    queryFn: () => fetchRelatedProducts(categoryId!),
    enabled: !!categoryId,
  });
}
