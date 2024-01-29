// services/sessionStorageService.tsx

const SessionStorageService = {
    setMenuTitle: (menuTitle: string) => {
      try {
        sessionStorage.setItem('selectedMenuTitle', menuTitle);
      } catch (error) {
        console.error('Error setting session storage:', error);
      }
    },
    getMenuTitle: () => {
      try {
        return sessionStorage.getItem('selectedMenuTitle');
      } catch (error) {
        console.error('Error getting session storage item:', error);
        return null;
      }
    },
    clearMenuTitle: () => {
      try {
        sessionStorage.removeItem('selectedMenuTitle');
      } catch (error) {
        console.error('Error removing session storage item:', error);
      }
    },
  };
  
  export default SessionStorageService;