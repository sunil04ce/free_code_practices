import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <nav>Our navbar</nav>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
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
