import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { ProductView } from './Pages/productView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productView" element={<ProductView />} />
      </Routes>
    </Router>
  );
}

export default App;