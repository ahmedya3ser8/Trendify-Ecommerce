import { IProduct } from '@interfaces/iproduct';
import { useQuery } from '@tanstack/react-query';
import axiosErrorHandler from '@utils/axiosErrorHandler';
import axios from 'axios';

type TResponse = {
  data: IProduct[];
  results: number;
    metadata: {
    currentPage: number,
    limit: number,
    nextPage: number,
    numberOfPages: number
  }
};

const fetchProductsByCategoryId = async (page: number, categoryId: string) => {
  try {
    const res = await axios.get<TResponse>('/api/v1/products', {
      params: {
        page,
        limit: 12,
        "category[in]": categoryId !== '0' ? categoryId : undefined
      },
    });
    return res.data;
  } catch (error) {
    throw axiosErrorHandler(error);
  }
};

const useProductsByCategoryQuery = (currentPage: number, categoryId: string) => {
  return useQuery<TResponse>({
    queryKey: ['products', 'category', currentPage, categoryId],
    queryFn: () => fetchProductsByCategoryId(currentPage, categoryId),
    staleTime: 5 * 60 * 1000
  });
};

export default useProductsByCategoryQuery;
