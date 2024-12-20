import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Stories } from './pages/Stories';
import { Videos } from './pages/Videos';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;