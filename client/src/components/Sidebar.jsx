import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Settings, 
  FileText,
  BarChart3,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const getMenuItems = () => {
    const commonItems = [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    ];

    switch (user?.role) {
      case 'admin':
        return [
          ...commonItems,
          { icon: Users, label: 'Users', path: '/dashboard/users' },
          { icon: BookOpen, label: 'Courses', path: '/dashboard/courses' },
          { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
          { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
        ];
      
      case 'teacher':
        return [
          ...commonItems,
          { icon: BookOpen, label: 'My Courses', path: '/dashboard/courses' },
          { icon: Users, label: 'Students', path: '/dashboard/students' },
          { icon: FileText, label: 'Assignments', path: '/dashboard/assignments' },
          { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
        ];
      
      case 'student':
      default:
        return [
          ...commonItems,
          { icon: BookOpen, label: 'My Courses', path: '/dashboard/courses' },
          { icon: FileText, label: 'Assignments', path: '/dashboard/assignments' },
          { icon: Calendar, label: 'Schedule', path: '/dashboard/schedule' },
          { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' },
        ];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="bg-white w-64 min-h-screen shadow-lg">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;