import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/techbor-logo.svg" 
                alt="Techbor" 
                className="h-8 w-auto"
              />
            </a>
            <p className="text-sm text-gray-400">
              Empowering businesses, transforming the future
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/careers" className="text-sm text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@techbor.co.uk" className="text-sm text-gray-400 hover:text-white">info@techbor.co.uk</a></li>
              <li><a href="tel:+447723674001" className="text-sm text-gray-400 hover:text-white">+44 7723 674001</a></li>
              <li><p className="text-sm text-gray-400">49 Jamaica Street, Liverpool</p></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Techbor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

