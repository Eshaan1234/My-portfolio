import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard. Built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop kanban boards, and team workspaces.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'AI Image Generator',
    description: 'A web application that generates images from text descriptions using OpenAI API and saves them to user galleries.',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
    tags: ['React', 'OpenAI API', 'Express', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Featured Projects
            <div className="absolute w-20 h-1 bg-indigo-600 left-1/2 transform -translate-x-1/2 mt-2 rounded"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Here are some of my recent projects. Each project showcases my ability to solve complex problems and build scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <div className="relative overflow-hidden h-60">
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                    <Github size={20} />
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium ml-auto">
                    Live Demo
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;