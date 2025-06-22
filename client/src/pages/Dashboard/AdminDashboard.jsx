import { Users, BookOpen, TrendingUp, DollarSign, UserCheck, AlertCircle, Activity, Award } from 'lucide-react';

const AdminDashboard = () => {
  const systemStats = [
    { label: 'Total Users', value: '15,248', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Active Courses', value: '1,247', change: '+8%', icon: BookOpen, color: 'green' },
    { label: 'Monthly Revenue', value: '$124,580', change: '+23%', icon: DollarSign, color: 'yellow' },
    { label: 'Completion Rate', value: '87%', change: '+5%', icon: TrendingUp, color: 'purple' }
  ];

  const recentUsers = [
    { name: 'John Smith', email: 'john@example.com', role: 'Student', joined: '2024-01-10', status: 'active' },
    { name: 'Sarah Teacher', email: 'sarah@example.com', role: 'Teacher', joined: '2024-01-09', status: 'active' },
    { name: 'Mike Wilson', email: 'mike@example.com', role: 'Student', joined: '2024-01-08', status: 'pending' },
    { name: 'Emily Davis', email: 'emily@example.com', role: 'Teacher', joined: '2024-01-07', status: 'active' }
  ];

  const courseStats = [
    { category: 'Web Development', courses: 145, students: 3420, revenue: 45200 },
    { category: 'Data Science', courses: 87, students: 2103, revenue: 31500 },
    { category: 'Design', courses: 112, students: 1876, revenue: 28400 },
    { category: 'Business', courses: 76, students: 1654, revenue: 24800 },
    { category: 'Marketing', courses: 94, students: 2234, revenue: 33600 }
  ];

  const systemAlerts = [
    { type: 'warning', message: 'Server load is above 80%', time: '5 mins ago' },
    { type: 'info', message: 'New course approval pending', time: '15 mins ago' },
    { type: 'success', message: 'Backup completed successfully', time: '1 hour ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">System overview and management</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Export Data
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            System Settings
          </button>
        </div>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            yellow: 'bg-yellow-100 text-yellow-600',
            purple: 'bg-purple-100 text-purple-600'
          };
          
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-green-600 text-sm">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full ${colorClasses[stat.color]}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Users</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All Users
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Role</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Joined</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-600">{user.email}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === 'Teacher' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{user.joined}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* System Alerts */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">System Alerts</h2>
            <div className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`p-1 rounded-full flex-shrink-0 ${
                    alert.type === 'warning' ? 'bg-red-100' :
                    alert.type === 'info' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <AlertCircle className={`h-4 w-4 ${
                      alert.type === 'warning' ? 'text-red-600' :
                      alert.type === 'info' ? 'text-blue-600' : 'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <UserCheck className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Approve Pending Users</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Review New Courses</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <Activity className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">System Health Check</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Categories Stats */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Course Categories Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Courses</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Students</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Performance</th>
              </tr>
            </thead>
            <tbody>
              {courseStats.map((category, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{category.category}</td>
                  <td className="py-3 px-4 text-gray-600">{category.courses}</td>
                  <td className="py-3 px-4 text-gray-600">{category.students.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">${category.revenue.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(category.revenue / 45200) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {Math.round((category.revenue / 45200) * 100)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;