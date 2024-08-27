// hooks/useAuth.js
export const useAuth = () => {
    // Hardcoded user for testing navigation without backend
    const user = {
      name: 'John Doe',
      role: 'ADMIN', // Change this value to 'CUSTOMER', 'GUIDE', 'HOTEL', etc. for testing different roles
    };
  
    return { user };
  };