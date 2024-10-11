import React from 'react';

const Footer = () => {
  return (
    <footer id='contact' className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About ShareBite</h2>
            <p className="text-sm">
              ShareBite is committed to reducing food wastage and fighting hunger in Mumbai by connecting donors with local communities in need. Our platform facilitates a seamless donation process, making it easy to make a difference.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/login" className="hover:text-green-400 transition duration-300">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-green-400 transition duration-300">
                  Register
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-400 transition duration-300">
                  What is ShareBite?
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-green-400 transition duration-300">
                  How It Helps
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/VishwakarmaVaibhav/ShareBite/tree/main" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                GitHub
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                Twitter
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                Instagram
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                LinkedIn
              </a>
            </div>
            <div>
                <p className="text-sm text-gray-500 font-bold mb-4">ShareBite is a non-profit organization.</p>
               
            </div>
            <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            </div>

            
                <div>
                <a href="vaibhav.p.vishwakarma@slrtce.in" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                vaibhav.p.vishwakarma@slrtce.in
              </a>
                </div>
                <div>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                sourav.b.sarkar@slrtce.in
              </a>
                </div>
                <div>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                bhaskar.j.tripathi@slrtce.in
              </a>
                </div>
                <div>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                abdulmohseen.m.khan@slrtce.in
              </a>
                </div>
                <div>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                priya.g.gupta@slrtce.in
              </a>
                </div>
            
              

            
            
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center border-t border-gray-700 pt-4">
          {/* Copyright */}
          <p className="text-sm">&copy; 2024 ShareBite. All Rights Reserved.</p>

          {/* Policies */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400 transition duration-300">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
