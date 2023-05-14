import { useLocation } from "react-router-dom";

export const useQuery = (name: string): string | null => {
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);

  return searchParams.get(name);
};