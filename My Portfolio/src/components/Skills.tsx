import { Database, Layout, Server, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="w-8 h-8 text-indigo-500 mb-4" />,
    skills: ['HTML5', 'CSS3/SASS', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Redux/Context API'],
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-8 h-8 text-indigo-500 mb-4" />,
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'Authentication (JWT/OAuth)'],
  },
  {
    title: 'Database & Cloud',
    icon: <Database className="w-8 h-8 text-indigo-500 mb-4" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'AWS (S3, EC2)', 'Firebase', 'Supabase'],
  },
  {
    title: 'Tools & Version Control',
    icon: <Settings className="w-8 h-8 text-indigo-500 mb-4" />,
    skills: ['Git', 'GitHub/GitLab', 'Docker', 'Webpack', 'Vite', 'Postman', 'Figma', 'Jest/React Testing Library'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            My Skills
            <div className="absolute w-20 h-1 bg-indigo-600 left-1/2 transform -translate-x-1/2 mt-2 rounded"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            I've worked with a variety of technologies in the web development world. From Front-end to Back-end, I have experience building full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-4 py-2 bg-gray-50 text-gray-700 font-medium rounded-lg text-sm border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;