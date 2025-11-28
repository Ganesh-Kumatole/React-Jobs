import { Outlet } from 'react-router';
import Navbar from './components/layouts/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
