import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/categoryServices";

export default function useCategories() {
  const { data: categories, isPending: isLoadingCategory } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    retry: false,
  });
  return { categories, isLoadingCategory };
}
