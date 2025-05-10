import { ICategory } from "@interfaces/icategory";
import { useQuery } from "@tanstack/react-query";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  data: ICategory[];
};

async function getCategories() {
  try {
    const res = await axios.get<TResponse>(`/api/v1/categories`);
    return res.data;
  } catch (error) {
    throw(axiosErrorHandler(error))
  }
}

function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime:  5 * 60 * 1000,
    select: (data) => data.data
  })
}

export default useCategories;
