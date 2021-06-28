import { createContext } from 'react';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewPages/NewRoom';
import { BrowserRouter, Route } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContex'




export function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>

  );
}


