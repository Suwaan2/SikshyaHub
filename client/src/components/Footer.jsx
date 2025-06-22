import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Sikshya Hub</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering learners worldwide with quality education and innovative learning experiences. 
              Join thousands of students and educators in our growing community.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@sikshyahub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Browse Courses</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-white transition-colors">Student Login</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-white transition-colors">Join as Teacher</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Community</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Sikshya Hub. All rights reserved. Empowering education for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;