import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Mock authentication - replace with real API call
      const mockUser = {
        id: 1,
        name: email === 'admin@sikshya.com' ? 'Admin User' : 
              email === 'teacher@sikshya.com' ? 'John Teacher' : 'Jane Student',
        email,
        role: email === 'admin@sikshya.com' ? 'admin' : 
              email === 'teacher@sikshya.com' ? 'teacher' : 'student',
        avatar: `https://images.pexels.com/photos/${Math.floor(Math.random() * 1000) + 1000}/pexels-photo-${Math.floor(Math.random() * 1000) + 1000}.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (name, email, password, role = 'student') => {
    try {
      // Mock registration - replace with real API call
      const mockUser = {
        id: Math.floor(Math.random() * 1000),
        name,
        email,
        role,
        avatar: `https://images.pexels.com/photos/${Math.floor(Math.random() * 1000) + 1000}/pexels-photo-${Math.floor(Math.random() * 1000) + 1000}.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};