import React from 'react';
import { BigO } from './course/BigO.component';
import { Appbar } from './public/appbar/Appbar.component';

export const App: React.FC = () => (
  <div className="App">
    <Appbar />
    <BigO />
  </div>
);
