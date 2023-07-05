import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SharedProductLayout from './pages/SharedProductLayout';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <nav>Our navbar</nav>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>

        {/* <Route path='/' element={<div>Home page</div>} />
        <Route path='test'
          element={<div>
            <h2>Testing page</h2>
          </div>} /> */}
      </Routes>
      <footer>Our footer</footer>
    </BrowserRouter>
  );
}

export default App;
