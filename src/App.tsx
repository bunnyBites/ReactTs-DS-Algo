import React from 'react';
import { Appbar } from './public/appbar/Appbar.component';
import { BrowserRouter } from 'react-router-dom';
import { RoutesProvider } from './core/provider/Routes.provider';

export const App: React.FC = () => (
  <BrowserRouter>
    <Appbar />
    <RoutesProvider />
  </BrowserRouter>
);
