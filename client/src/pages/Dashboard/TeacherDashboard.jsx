import { Users, BookOpen, TrendingUp, DollarSign, Plus, Eye, Edit, BarChart3 } from 'lucide-react';

const TeacherDashboard = () => {
  const myCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      students: 1243,
      rating: 4.9,
      revenue: 5420.50,
      image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'published'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      students: 876,
      rating: 4.8,
      revenue: 3240.00,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'published'
    },
    {
      id: 3,
      title: 'React Performance Optimization',
      students: 0,
      rating: 0,
      revenue: 0,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'draft'
    }
  ];

  const recentStudents = [
    { name: 'John Smith', course: 'Web Development', enrolled: '2024-01-10', progress: 45 },
    { name: 'Sarah Wilson', course: 'JavaScript Concepts', enrolled: '2024-01-09', progress: 78 },
    { name: 'Mike Johnson', course: 'Web Development', enrolled: '2024-01-08', progress: 23 },
    { name: 'Emily Davis', course: 'JavaScript Concepts', enrolled: '2024-01-07', progress: 92 }
  ];

  const monthlyStats = [
    { month: 'Jan', revenue: 4200, students: 145 },
    { month: 'Feb', revenue: 5100, students: 167 },
    { month: 'Mar', revenue: 4800, students: 198 },
    { month: 'Apr', revenue: 6200, students: 221 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your courses and track student progress</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Create New Course
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">2,119</p>
              <p className="text-green-600 text-sm">+12% this month</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Courses</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-gray-500 text-sm">1 draft</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$6,200</p>
              <p className="text-green-600 text-sm">+18% from last month</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg. Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.85</p>
              <p className="text-green-600 text-sm">Excellent</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {myCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span>{course.students} students</span>
                            {course.rating > 0 && <span>★ {course.rating}</span>}
                            <span>${course.revenue.toFixed(2)} revenue</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            course.status === 'published' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {course.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-4">
                        <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium">
                          <BarChart3 className="h-4 w-4 mr-1" />
                          Analytics
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Students */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Enrollments</h2>
            <div className="space-y-4">
              {recentStudents.map((student, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{student.name}</h3>
                    <p className="text-gray-600 text-xs">{student.course}</p>
                    <p className="text-gray-500 text-xs">{student.enrolled}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{student.progress}%</div>
                    <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                      <div 
                        className="bg-blue-600 h-1 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Performance Overview</h2>
            <div className="space-y-4">
              {monthlyStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="font-medium text-gray-900">{stat.month}</div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-600">${stat.revenue}</div>
                    <div className="text-xs text-gray-500">{stat.students} students</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;