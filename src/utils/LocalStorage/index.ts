export class LocalStorage {
  private itemKey: string;

  constructor(itemKey: string) {
    this.itemKey = itemKey;
  }

  getItem = () => {
    const item = localStorage.getItem(this.itemKey);

    if (!item) return null;

    return JSON.parse(item);
  };

  setItem = (values: string[]) => {
    const stringifiedValue = JSON.stringify(values);
    localStorage.setItem(this.itemKey, stringifiedValue);
  };
}

export const favouritesLocalStorage = new LocalStorage("favouriteLaunchIds");
