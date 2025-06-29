
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, icon: Code },
    { name: 'React', level: 85, icon: Code },
    { name: 'Node.js', level: 80, icon: Server },
    { name: 'Python', level: 75, icon: Code },
    { name: 'SQL', level: 85, icon: Database },
    { name: 'MongoDB', level: 70, icon: Database },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, charts, and customizable widgets for weather tracking.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Praneeth
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">SP</span>
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Sai Praneeth
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Full Stack Developer & Software Engineer
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-20 text-center">
            <ChevronDown 
              className="w-8 h-8 mx-auto text-gray-400 animate-bounce cursor-pointer" 
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hello! I'm Sai Praneeth</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With experience in both frontend and backend development, I enjoy working with 
                technologies like React, Node.js, Python, and various databases to create 
                comprehensive web solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Problem Solver</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Team Player</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Continuous Learner</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Code className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Frontend</h4>
                <p className="text-sm text-gray-600 mt-2">React, Vue, JavaScript</p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Server className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Backend</h4>
                <p className="text-sm text-gray-600 mt-2">Node.js, Python, APIs</p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Database className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h4 className="font-semibold text-gray-900">Database</h4>
                <p className="text-sm text-gray-600 mt-2">MongoDB, PostgreSQL</p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h4 className="font-semibold text-gray-900">Deployment</h4>
                <p className="text-sm text-gray-600 mt-2">AWS, Docker, CI/CD</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="ml-auto text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <Button size="sm" variant="secondary" className="opacity-90">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="opacity-90">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">saipraneeth@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-gray-300">linkedin.com/in/saipraneeth</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-gray-300">github.com/sattusaipraneeth</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Sai Praneeth. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
