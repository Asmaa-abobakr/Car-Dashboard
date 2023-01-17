import {Route, Routes, BrowserRouter  } from 'react-router-dom';

import { Main } from './pages/mainPreview/Main';
import { Booking } from './pages/bookingPage/Booking';
import { SellCars } from './pages/sellCars/SellCars';
import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/booking" element={<Booking />}/>
          <Route path="/sell" element={<SellCars />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
