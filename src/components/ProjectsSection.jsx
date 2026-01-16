image: "images/project5.jpg",  image: "images/project1.jpg", image: "images/project2.jpg",  image: `${import.meta.env.BASE_URL}images/project2.jpg`, image: `${import.meta.env.BASE_URL}images/project1.jpg`,
image: `${import.meta.env.BASE_URL}images/project3.jpg`,import { gsap } from 'gsap';
image: `${import.meta.env.BASE_URL}images/project5.jpg`,import { FiExternalLink } from 'react-icons/fi';


const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);


  // Project data - replace with your actual projects
  const "images/" = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "images/project1.jpg",
      description: "Full-stack MERN application with payment integration"
    },
    {
      id: 2,
      title: "Task Management App",
      image: "images/project2.jpg",
      description: "React-based productivity app with real-time updates"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: "images/project3.jpg",
      description: "Interactive weather app with data visualization"
    },
    {
      id: 4,
      title: "Portfolio Website",
      image: "images/project1.jpg",
      description: "Modern portfolio with 3D animations and GSAP"
    },
    {
      id: 5,
      title: "Chat Application",
      image: "images/project5.jpg",
      description: "Real-time chat app built with Socket.io"
    }
  ];


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );


    // Title line animation
    gsap.fromTo(
      titleLineRef.current,
      { width: 0, opacity: 0 },
      {
        width: '100%',
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );


    // Horizontal scroll animation
    const horizontalScrollTween = gsap.to(horizontalRef.current, {
      x: () => -(horizontalRef.current.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: () => `+=${horizontalRef.current.scrollWidth}`,
        pin: true,
        scrub: 1,
        snap: 1 / ("images/".length - 1),
        invalidateOnRefresh: true
      }
    });


    // Individual project animations
    gsap.utils.toArray('.project-panel').forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          containerAnimation: horizontalScrollTween,
          trigger: panel,
          start: 'left right',
          end: 'right left',
          scrub: true
        }
      });


      // Image animation
      tl.fromTo(
        panel.querySelector('.project-image'),
        { scale: 0, rotation: -20 },
        { scale: 1, rotation: 0, duration: 0.5 }
      );


      // Title animation
      tl.fromTo(
        panel.querySelector('.project-title'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.2
      );
    });


    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);


  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
      id="projects"
    >
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array(15)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-30 animate-pulse"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
      </div>


      {/* Section title */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent opacity-0"
        >
          Featured Projects
        </h2>
        <div
          ref={titleLineRef}
          className="h-1 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"
          style={{ width: 0 }}
        />
      </div>


      {/* Horizontal scroll container */}
      <div ref={triggerRef} className="overflow-hidden">
        <div
          ref={horizontalRef}
          className="flex w-max"
          style={{ width: `${"images/".length * 100}vw` }}
        >
          {"images/".map((project, index) => (
            <div
              key={project.id}
              className="project-panel w-screen h-screen flex items-center justify-center relative"
            >
              <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                
                {/* Project Image */}
                <div className="lg:w-1/2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                  <div className="relative bg-gradient-to-br from-gray-500 to-gray-100 rounded-2xl p-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-violet-600 rounded-full opacity-80 animate-pulse" />
                  <div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                </div>


                {/* Project Details */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="project-title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-4 flex items-center justify-center lg:justify-start gap-3">
                    {project.title}
                    <FiExternalLink className="w-6 h-6 text-violet-600 hover:text-purple-700 transition-colors duration-300" />
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                    {['React', 'Node.js', 'MongoDB'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-medium rounded-lg hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>


                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold rounded-xl hover:from-violet-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-violet-600/25">
                      View Project
                    </button>
                    <button className="px-6 py-3 border-2 border-violet-600 text-violet-600 font-bold rounded-xl hover:bg-violet-600 hover:text-white transition-all duration-300">
                      View Code
                    </button>
                  </div>


                  {/* Decorative line */}
                  <div className="mt-6 flex justify-center lg:justify-start">
                    <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-700 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-600 to-transparent opacity-50" />
    </section>
  );
};


export default ProjectsSection
