import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userSchool, setUserSchool] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName, userSchool, setUserSchool }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
