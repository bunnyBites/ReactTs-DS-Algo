import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BigO } from '../../public/course/BigO.component';

export const RoutesProvider: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/bigo" element={<BigO />} />
    </Routes>
  </Suspense>
)