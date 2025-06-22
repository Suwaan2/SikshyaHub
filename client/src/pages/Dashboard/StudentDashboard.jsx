import { BookOpen, Clock, Award, TrendingUp, PlayCircle, Calendar } from 'lucide-react';

const StudentDashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      progress: 65,
      image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      nextLesson: 'React Components'
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery',
      instructor: 'Emma Rodriguez',
      progress: 30,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      nextLesson: 'Social Media Strategy'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Alex Thompson',
      progress: 90,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      nextLesson: 'Final Project Review'
    }
  ];

  const upcomingAssignments = [
    { title: 'React Project Submission', course: 'Web Development', dueDate: '2024-01-15', priority: 'high' },
    { title: 'Marketing Campaign Analysis', course: 'Digital Marketing', dueDate: '2024-01-18', priority: 'medium' },
    { title: 'Design Portfolio Update', course: 'UI/UX Design', dueDate: '2024-01-22', priority: 'low' }
  ];

  const recentAchievements = [
    { title: 'JavaScript Master', description: 'Completed all JavaScript modules', date: '2024-01-10' },
    { title: 'Design Thinking Certificate', description: 'Earned design thinking certification', date: '2024-01-08' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Learning Dashboard</h1>
          <p className="text-gray-600 mt-2">Track your progress and continue learning</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Browse Courses
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Enrolled Courses</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Hours Learned</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Certificates</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Award className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg. Progress</p>
              <p className="text-2xl font-bold text-gray-900">62%</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrolled Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">My Courses</h2>
            <div className="space-y-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">by {course.instructor}</p>
                      
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
                        <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                          <PlayCircle className="h-4 w-4 mr-1" />
                          Continue
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
          {/* Upcoming Assignments */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Assignments</h2>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm">{assignment.title}</h3>
                  <p className="text-gray-600 text-xs">{assignment.course}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500">Due: {assignment.dueDate}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      assignment.priority === 'high' ? 'bg-red-100 text-red-600' :
                      assignment.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {assignment.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-full flex-shrink-0">
                    <Award className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{achievement.title}</h3>
                    <p className="text-gray-600 text-xs">{achievement.description}</p>
                    <p className="text-gray-500 text-xs mt-1">{achievement.date}</p>
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

export default StudentDashboard;