import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
import { IProduct } from '@interfaces/iproduct';
import axiosErrorHandler from '@utils/axiosErrorHandler';

type TResponse = {
  data: IProduct[];
  results: number;
};

const fetchProductsByCategoryId = async (categoryId: string) => {
  try {
    const res = await axios.get<TResponse>('/api/v1/products', {
      params: {
        'category[in]': categoryId,
      },
    });
    return res.data;
  } catch (error) {
    throw axiosErrorHandler(error);
  }
};

const useProductsByCategoryQuery = (categoryId: string, options?: Partial<UseQueryOptions<TResponse>>) => {
  return useQuery<TResponse>({
    queryKey: ['products', 'category', categoryId],
    queryFn: () => fetchProductsByCategoryId(categoryId),
    enabled: !!categoryId && categoryId !== '0',
    staleTime: 5 * 60 * 1000, // 5 minutes
    select: (data) => data,
    ...options,
  });
};

export default useProductsByCategoryQuery;
