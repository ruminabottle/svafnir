import { Routes, Route, useLocation } from 'react-router-dom';
import EmberCanvas from './components/EmberCanvas';
import Layout from './components/Layout';
import Home from './pages/Home';
import Information from './pages/Information';
import Hooks from './pages/Hooks';
import Art from './pages/Art';
import User from './pages/User';
import Backstory from './pages/Backstory';

export default function App() {
  const location = useLocation();

  return (
    <>
      <EmberCanvas />
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="information" element={<Information />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="art" element={<Art />} />
          <Route path="backstory" element={<Backstory />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}
