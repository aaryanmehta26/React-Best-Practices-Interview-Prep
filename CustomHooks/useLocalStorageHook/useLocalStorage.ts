export const useLocalStorage = (key: string) => {

    // wrapping in try catch, bacause some browser versions may not have localstorage support
    // so try catch to avoid application to break

    const setItem = (value: unknown) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    };
  
    const getItem = () => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
      } catch (error) {
        console.log(error);
      }
    };
  
    const removeItem = () => {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.log(error);
      }
    };
  
    return { setItem, getItem, removeItem };
  };