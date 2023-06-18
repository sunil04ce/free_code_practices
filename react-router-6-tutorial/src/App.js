import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />

        {/* <Route path='/' element={<div>Home page</div>} />
        <Route path='test'
          element={<div>
            <h2>Testing page</h2>
          </div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
