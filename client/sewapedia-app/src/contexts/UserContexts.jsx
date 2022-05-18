import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({children}) {
  const payload = localStorage.getItem('user') || '{}';
  const [user, setUser] = useState(JSON.parse(payload));

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext);

export { UserContext, UserProvider, useUser }