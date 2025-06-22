import { Outlet } from 'react-router-dom';
import AuthenticatedNavbar from '../components/AuthenticatedNavbar';
import Sidebar from '../components/Sidebar';

const AuthenticatedLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthenticatedNavbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;