import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import PublicLayout from './layouts/PublicLayout';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import TeacherDashboard from './pages/Dashboard/TeacherDashboard';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetail from './pages/CourseDetail';
import ProtectedRoute from './routes/ProtectedRoute';
import CourseEnrolled from './pages/Dashboard/student/CourseEnrolled';
import Assignment from './pages/Dashboard/student/Assignment';

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="courses" element={<CourseCatalog />} />
        <Route path="courses/:id" element={<CourseDetail />} />
      </Route>

      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <AuthenticatedLayout />
          </ProtectedRoute>
        }
      >
        <Route 
          index 
          element={
            user?.role === 'student' ? <StudentDashboard /> :
            user?.role === 'teacher' ? <TeacherDashboard /> :
            user?.role === 'admin' ? <AdminDashboard /> :
            <StudentDashboard />
          } 
        />
        {/* <Route path="dashboard/course-enrolled" element={<CourseEnrolled />} />
        <Route path="dashboard/assignment" element={<Assignment />} /> */}
        {/* Add more student routes here */}
        {/* <Route path="teacher" element={<TeacherDashboard />} />
        <Route path="admin" element={<AdminDashboard />} />  */}
        
      </Route>

    
    </Routes>
  );
}
export default App;