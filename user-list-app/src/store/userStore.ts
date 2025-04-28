import { makeAutoObservable } from "mobx";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

function safeParse<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    return defaultValue;
  }
}

class UserStore {
  addedUsers: IUser[] = safeParse<IUser[]>("addedUsers", []);
  favorites: Set<number> = new Set(safeParse<number[]>("favorites", []));
  showFavoritesOnly = false;
  sortAsc = true;

  constructor() {
    makeAutoObservable(this);
  }

  addUser(user: IUser) {
    this.addedUsers.push(user);
    this.saveAddedUsers();
  }

  toggleFavorite(userId: number) {
    if (this.favorites.has(userId)) {
      this.favorites.delete(userId);
    } else {
      this.favorites.add(userId);
    }
    this.saveFavorites();
  }

  toggleShowFavorites() {
    this.showFavoritesOnly = !this.showFavoritesOnly;
  }

  toggleSortOrder() {
    this.sortAsc = !this.sortAsc;
  }

  private saveAddedUsers() {
    localStorage.setItem('addedUsers', JSON.stringify(this.addedUsers));
  }

  private saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(Array.from(this.favorites)));
  }
}

export const userStore = new UserStore();
