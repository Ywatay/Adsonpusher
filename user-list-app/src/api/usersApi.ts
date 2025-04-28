import axios from "axios";
import { IUser } from "../store/userStore";

export const fetchUsers = async (): Promise<IUser[]> => {
  const { data } = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
  return data;
};
