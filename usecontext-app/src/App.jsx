import React, { createContext, useContext } from 'react';

const AppContext = createContext();

const sharedData = {
  theme: 'light',
  username: 'Juan'
};

const App = () => {
  return (
    <AppContext.Provider value={sharedData}>
      <ChildComponent />
    </AppContext.Provider>
  );
};

const ChildComponent = () => {
  const { theme, username } = useContext(AppContext);
  
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default App;