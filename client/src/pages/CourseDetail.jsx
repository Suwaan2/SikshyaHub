import { Link, useParams } from 'react-router-dom';
import { Star, Clock, Users, PlayCircle, CheckCircle, Award, Download } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();

  // Mock course data - in real app, fetch based on ID
  const course = {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    students: 12543,
    duration: '40 hours',
    price: 89.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    description: 'Master web development with this comprehensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and launch your career as a web developer.',
    whatYouWillLearn: [
      'HTML5 and CSS3 fundamentals',
      'JavaScript ES6+ features',
      'React.js and modern frameworks',
      'Node.js and Express.js',
      'Database design with MongoDB',
      'RESTful API development',
      'Version control with Git',
      'Deployment and hosting'
    ],
    curriculum: [
      {
        title: 'HTML & CSS Fundamentals',
        lessons: 8,
        duration: '4 hours'
      },
      {
        title: 'JavaScript Essentials',
        lessons: 12,
        duration: '8 hours'
      },
      {
        title: 'React.js Mastery',
        lessons: 15,
        duration: '12 hours'
      },
      {
        title: 'Backend with Node.js',
        lessons: 10,
        duration: '8 hours'
      },
      {
        title: 'Database & APIs',
        lessons: 8,
        duration: '6 hours'
      },
      {
        title: 'Deployment & Production',
        lessons: 4,
        duration: '2 hours'
      }
    ],
    requirements: [
      'Basic computer skills',
      'No programming experience required',
      'A computer with internet connection',
      'Motivation to learn and practice'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-300">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              <p className="text-gray-300">Created by <span className="text-white font-medium">{course.instructor}</span></p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-gray-900">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">${course.price}</div>
                  <div className="text-gray-500 line-through">${course.originalPrice}</div>
                </div>
                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  40% OFF
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                Enroll Now
              </button>
              
              <div className="text-center text-sm text-gray-500 mb-4">
                30-day money-back guarantee
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <PlayCircle className="h-4 w-4 text-gray-400" />
                  <span>40 hours on-demand video</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="h-4 w-4 text-gray-400" />
                  <span>Downloadable resources</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-gray-400" />
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Content */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course content</h2>
              <div className="bg-white rounded-lg border">
                {course.curriculum.map((section, index) => (
                  <div key={index} className="border-b last:border-b-0 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <div className="text-sm text-gray-500">
                        {section.lessons} lessons • {section.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-3">
                {course.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About the instructor</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt={course.instructor}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{course.instructor}</div>
                  <div className="text-gray-600">Senior Web Developer</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Sarah is a seasoned web developer with over 8 years of experience building 
                scalable web applications. She has worked with companies like Google and Microsoft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;