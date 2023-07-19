import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Marks from './pages/Marks';
import Registration from './pages/Registration';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/marks" element={<Marks />} />
      <Route path="/profile/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
