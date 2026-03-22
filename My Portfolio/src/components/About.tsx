import { BookOpen, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            About Me
            <div className="absolute w-20 h-1 bg-indigo-600 left-1/2 transform -translate-x-1/2 mt-2 rounded"></div>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl group">
            <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-all z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
              alt="Coding on a laptop" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              A curious B.Tech student passionate about <span className="text-indigo-600">building and learning every day.</span>
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              I'm Eshaan Gupta, a B.Tech 2nd year student from Maharashtra, India. I'm currently diving deep into web development and software engineering, eager to build real-world projects and grow my skills with modern technologies.
            </p>
            
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              When I'm not coding, you'll find me cooking up new recipes, shooting hoops on the basketball court, gaming with friends, or cruising on my bike. I believe in a well-rounded life where creativity and curiosity fuel everything I do.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 text-gray-800">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                   <span className="block font-semibold">Location</span>
                  <span className="text-gray-600 text-sm">Maharashtra, India</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-800">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                   <span className="block font-semibold">Status</span>
                  <span className="text-gray-600 text-sm">B.Tech Student</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-800">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                   <span className="block font-semibold">Education</span>
                  <span className="text-gray-600 text-sm">B.Tech — 2nd Year</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-800">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                   <span className="block font-semibold">Hobbies</span>
                  <span className="text-gray-600 text-sm">Cooking, Basketball, Gaming, Bike Rides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;