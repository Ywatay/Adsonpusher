import axios from "axios";
import { IUser } from "../store/userStore";

export const fetchUsers = async (): Promise<IUser[]> => {
  try {
    const { data } = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.status, error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return [];
  }
};
