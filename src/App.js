import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './NoPage';
import Layout from './Components/Layout';
import Dashboard from './Components/Dashboard';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Myprofile from './pages/Myprofile';
import Availability from './MenuDetials/Availability';
import MenuEditor from './MenuDetials/MenuEditor';
import MenuHistory from './MenuDetials/MenuHistory';
import Restaurant_owner from './Profile/Restaurant_owner';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/Menuhistory" element={<MenuHistory/>} />
          <Route path="/Menueditor" element={<MenuEditor/>} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ownerprofile" element={<Restaurant_owner />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}
export default App;
