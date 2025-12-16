import { Mail, MapPin, Phone, Instagram, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:text-pink-400' },
  { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:text-blue-400' },
  { icon: Youtube, label: 'YouTube', url: '#', color: 'hover:text-red-400' }
];

const footerLinks = {
  Product: ['Features', 'Technology', 'Pricing', '3D Model'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Blog'],
  Support: ['FAQ', 'Shipping', 'Returns', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
              SpineTech
            </h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing posture correction for the modern generation with smart technology and innovative design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="text-white">hello@spinetech.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="text-white">+977 123-456-7890</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="text-white">Kathmandu, Nepal</div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} SpineTech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
