import React from 'react';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewPages/NewRoom';

import { BrowserRouter, Route } from 'react-router-dom'


export function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>

  );
}


