import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './stor/auth-context';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[done, setDone] = useState(false)
  
  const toggleDone = () => {
    setDone(!done)
  }

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={{done: done, setDone: toggleDone}}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main style={{backgroundColor: !done ? '' : 'black', height: "1000px"}}>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        
        
      </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
