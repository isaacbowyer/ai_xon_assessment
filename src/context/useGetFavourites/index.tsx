import { createContext, useContext, useEffect, useState } from "react";
import { favouritesLocalStorage } from "../../utils/LocalStorage";
import type { ReactNode } from "react";

interface IFavouriteContext {
  favourites: string[];
  handleToggleFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
}

const FavouritesContext = createContext({} as IFavouriteContext);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  useEffect(() => {
    const stored = favouritesLocalStorage.getItem();
    if (stored) {
      setFavourites(stored);
      return;
    }

    setFavourites([]);
  }, []);

  const isFavourite = (id: string) => favourites.includes(id);

  const handleToggleFavourite = (id: string) => {
    const isFavourited = isFavourite(id);
    const newFavourites = isFavourited
      ? favourites.filter((favs) => favs !== id)
      : [...favourites, id];

    favouritesLocalStorage.setItem(newFavourites);
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, handleToggleFavourite, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavouritesContext = () => {
  return useContext(FavouritesContext);
};
