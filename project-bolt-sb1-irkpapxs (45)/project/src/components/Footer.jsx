import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const navigation = {
    about: [
      { name: 'Company', href: '/about/company' },
      { name: 'Legal Documents', href: '/about/legal-documents' },
      { name: 'Contact Us', href: '/about/contact' },
    ],
    trading: [
      { name: 'Trading Accounts', href: '/trading/accounts' },
      { name: 'Trading Platforms', href: '/trading/platforms' },
    ],
    tools: [
      { name: 'Economic Calendar', href: '/tools/calendar' },
    ],
    education: [
      { name: 'Trading Guides', href: '/education/guides' },
      { name: 'Webinars', href: '/education/webinars' },
    ],
    support: [
      { name: 'FAQ', href: '/support/faq' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-xl font-bold">
                <span className="text-white">The</span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Gen</span>
                <span className="text-white">FX</span>
              </span>
            </Link>
            <p className="text-gray-400">Experience the next generation of trading with cutting-edge technology and exceptional conditions.</p>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Trading</h3>
            <ul className="space-y-2">
              {navigation.trading.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              {navigation.tools.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Education</h3>
            <ul className="space-y-2">
              {navigation.education.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 TheGenFX. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;