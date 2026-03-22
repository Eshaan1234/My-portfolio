import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-indigo-600 font-semibold text-lg md:text-xl tracking-wide uppercase mb-4">Hello World! I'm</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Eshaan Gupta <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Aspiring Developer</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            B.Tech 2nd year student passionate about building modern web applications. 
            I love turning ideas into reality through clean code and creative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
            <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full shadow-lg shadow-indigo-200 transition-all flex items-center gap-2">
              View My Work
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-medium rounded-full shadow-sm transition-all">
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <a href="https://github.com/Eshaan1234" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Github size={28} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in//eshaan-gupta-17142a332" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Linkedin size={28} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:eshaangupta53@gmail.com" className="text-gray-500 hover:text-red-500 transition-colors">
              <Mail size={28} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative max-w-md mx-auto md:max-w-none w-full">
          <div className="aspect-square rounded-full bg-gradient-to-tr from-indigo-200 to-purple-200 absolute inset-0 blur-3xl opacity-50 animate-pulse"></div>
            <img 
              src="/images/profile.jpeg" 
              alt="Eshaan Gupta" 
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-8 border-white shadow-2xl relative z-10 mx-auto"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
