import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, User, Code, Briefcase, BookOpen } from 'lucide-react';
import ProfileCard from './components/ProfileCard';
import CertificationCard from './components/CertificationCard';
import ProjectCard from './components/ProjectCard';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const certifications = [
    {
      title: "iNeuron Internship",
      issuer: "iNeuron Intelligence Pvt Ltd",
      date: "2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      link: "https://www.linkedin.com/posts/lekkala-bhaskar_ineuron-intelligence-pvt-ltd-internship-activity-7258459600721440769-ck3j"
    },
    {
      title: "Android App Development",
      issuer: "Android Studio",
      date: "2023",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
      link: "https://drive.google.com/file/d/1bXtkUI6ZwK7911EoWUd0xtx69x_SLoot/view"
    },
    {
      title: "Java Programming",
      issuer: "HackerRank",
      date: "2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "https://www.hackerrank.com/certificates/iframe/d8f03edc02ae"
    },
    {
      title: "Python Problem Solving",
      issuer: "HackerRank",
      date: "2023",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      link: "https://www.hackerrank.com/certificates/iframe/67f76da0c4f6"
    },
    {
      title: "Analyzing Data with Python",
      issuer: "edX",
      date: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "https://courses.edx.org/certificates/d6dc43c7eda0481696788f0ef711e5f3"
    },
    {
      title: "C++ Programming",
      issuer: "edX",
      date: "2023",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "https://courses.edx.org/certificates/e56cf3a1b85c46e085c1a73de1b1a0b5"
    },
    {
      title: "SOFTWARE ENGINEER",
      issuer: "HACKER RANK",
      date: "2024",
      image: "https://images.unsplash.com/photo-1555066991-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "https://www.hackerrank.com/certificates/e976910fa4cf"
    }
  ];

  const skills = [
    'Java', 'Python', 'C++', 
    'Android Development', 'Data Analysis',
    'Problem Solving', 'HTML/CSS',
    'JavaScript', 'React'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">Portfolio</span>
            <div className="flex space-x-4">
              {['about', 'certifications', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors
                    ${activeSection === section 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700'}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            LEKKALA BHASKAR
          </h1>
          <p className="text-xl text-gray-300 mb-6">B.Tech Student & Software Developer</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/LEKKALA-BHASKAR" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/LEKKALA-BHASKAR" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:bassnaidu1242@gmail.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="grid gap-8">
          {activeSection === 'about' && (
            <div className="space-y-8 animate-fadeIn">
              <ProfileCard
                title="About Me"
                icon={<User className="w-6 h-6" />}
                content="I'm a passionate B.Tech student specializing in Computer Science & Engineering. With a strong foundation in multiple programming languages and a keen interest in software development, I'm constantly working on projects that challenge and enhance my skills. My experience ranges from Android development to data analysis, showcasing my versatility as a developer."
              />
              <ProfileCard
                title="Technical Skills"
                icon={<Code className="w-6 h-6" />}
                content={
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {skills.map((skill) => (
                      <span key={skill} className="bg-gray-700 rounded-full px-4 py-1 text-sm text-center">
                        {skill}
                      </span>
                    ))}
                  </div>
                }
              />
              <ProfileCard
                title="Education"
                icon={<BookOpen className="w-6 h-6" />}
                content={
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Bachelor of Technology</h3>
                      <p className="text-gray-400">Computer Science & Engineering</p>
                      <p className="text-gray-500">Currently Pursuing</p>
                    </div>
                  </div>
                }
              />
            </div>
          )}

          {activeSection === 'certifications' && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={index}
                  {...cert}
                />
              ))}
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
              <ProjectCard
                title="Android Development"
                description="Mobile application development using Android Studio"
                image="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80"
                githubUrl="https://github.com/LEKKALA-BHASKAR"
              />
              <ProjectCard
                title="Data Analysis Projects"
                description="Python-based data analysis and visualization projects"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                githubUrl="https://github.com/LEKKALA-BHASKAR"
              />
              <ProjectCard
                title="Portfolio Website"
                description="Personal portfolio built with React and Tailwind CSS"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                githubUrl="https://github.com/LEKKALA-BHASKAR"
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
