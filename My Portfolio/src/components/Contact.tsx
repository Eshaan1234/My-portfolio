import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only: just show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Get In Touch
            <div className="absolute w-20 h-1 bg-indigo-600 left-1/2 transform -translate-x-1/2 mt-2 rounded"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Feel free to reach out to me for any questions, collaboration opportunities, or just to say hi!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>
            <p className="text-gray-600 mb-10 leading-relaxed">
              I'm open to internships, collaborations, and exciting project opportunities. Feel free to reach out!
            </p>
            
            <div className="flex flex-col space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-indigo-600 hover:underline text-base">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-indigo-600 hover:underline text-base">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Location</h4>
                  <span className="text-gray-600 text-base">Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Frontend Only */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send me a message</h3>

              {/* Success notification */}
              {submitted && (
                <div className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 animate-fade-in">
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Message received!</p>
                    <p className="text-sm text-green-600">Thanks for reaching out. I'll get back to you soon. (Frontend-only demo — backend coming soon!)</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder-gray-400"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
