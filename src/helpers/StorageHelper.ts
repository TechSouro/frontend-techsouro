const AppConfig = {
  STORAGE_BASE_KEY: "@techsouro_",
};

function getKey(key: string) {
  return AppConfig.STORAGE_BASE_KEY + key;
}

function getItem(key: string) {
  if (typeof window !== "undefined") {
    key = getKey(key);
    const item = localStorage.getItem(key);
    if (!item) return;
    return JSON.parse(item);
  }
}

function setItem(key: string, data: any) {
  if (typeof window !== "undefined") {
    key = getKey(key);
    localStorage.setItem(key, JSON.stringify(data));
  }
}

function removeItem(key: string) {
  if (typeof window !== "undefined") {
    key = getKey(key);
    localStorage.removeItem(key);
  }
}

export const StorageHelper = {
  getItem,
  setItem,
  removeItem,
};
