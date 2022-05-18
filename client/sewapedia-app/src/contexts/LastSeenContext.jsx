import { createContext, useContext, useState } from 'react';

const LastSeenContext = createContext();

function LastSeenProvider({children}) {
  let payload = JSON.parse(localStorage.getItem('lastSeen'));
  const [lastSeen, setLastSeen] = useState(payload);

  return (
    <LastSeenContext.Provider value={{lastSeen, setLastSeen}}>
      {children}
    </LastSeenContext.Provider>
  )
}

const useLastSeen = () => useContext(LastSeenContext);

export { LastSeenContext, LastSeenProvider, useLastSeen }