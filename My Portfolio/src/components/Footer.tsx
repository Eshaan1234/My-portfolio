import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-indigo-400">
            <Code2 size={32} />
            <span className="text-2xl font-bold text-white">Eshaan.dev</span>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <p className="text-gray-400 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Eshaan Gupta. All rights reserved. <br/>
            Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;