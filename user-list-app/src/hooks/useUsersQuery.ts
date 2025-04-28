import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/usersApi";
import { IUser } from "../store/userStore";

export const useUsersQuery = () => {
    return useQuery<IUser[]>({
      queryKey: ["users"],
      queryFn: fetchUsers,
      staleTime: 5 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    });
  };
