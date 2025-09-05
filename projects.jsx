import React, { useState } from 'react';

// --- Icon Components ---
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

// --- Project Data ---
const projects = [
    {
        id: 1,
        name: "DevTalks",
        subtitle: "Interactive MERN Stack Forum Platform",
        image: "https://i.ibb.co.com/jvXM05St/Dev-Talks-yousuf.jpg",
        stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase", "Stripe"],
        description: "A full-featured MERN stack forum platform with role-based access for users and admins. Includes secure authentication using Firebase and JWT, a forum system with posts, comments, tags, and voting. Features membership limitations and payment integration with Stripe. The admin dashboard provides comprehensive tools for managing users and content.",
        challenges: "The main challenge was implementing a secure and scalable role-based access control system. Integrating Stripe for membership payments while ensuring webhook reliability was another complex task. Optimizing MongoDB queries for fetching posts with populated user data and vote counts was crucial for performance.",
        improvements: "Future plans include adding real-time chat functionality using Socket.IO, implementing a notification system for user interactions, and creating a more detailed analytics dashboard for admins.",
        liveLink: "https://devtalks.vercel.app/",
        repoLinks: {
            frontend: "https://github.com/yousufali156/devtalks-client",
            backend: "https://github.com/yousufali156/devtalks-server",
        },
    },
    {
        id: 2,
        name: "Earthen Canvas",
        subtitle: "Product Management App",
        image: "https://i.ibb.co.com/V5QcMD3/Earthen-Canvas.jpg",
        stack: ["Next.js 15", "NextAuth.js", "MongoDB", "TailwindCSS", "Serverless API"],
        description: "A minimal and modern product showcase and management application. It features a public-facing product list and a protected dashboard for administrators to add, edit, and delete products. Authentication is handled seamlessly with NextAuth.js, supporting Google OAuth. The backend logic is powered by Next.js serverless API routes.",
        challenges: "Implementing protected routes and API endpoints using NextAuth.js middleware was a key challenge. Ensuring a fast and responsive user experience with server-side rendering for the public pages and client-side rendering for the interactive dashboard required careful architectural planning.",
        improvements: "I plan to add user accounts for customers to save their favorite products, implement a search and filtering system, and integrate a headless CMS for easier content management.",
        liveLink: "https://earthen-canvas-ec.vercel.app/",
        repoLink: "https://github.com/yousufali156/earthen-canvas",
    },
    {
        id: 3,
        name: "CourseHub",
        subtitle: "Featured Course Management",
        image: "https://i.ibb.co/wZsyBGyz/Course-Hub.jpg",
        stack: ["React.js", "Firebase", "MongoDB", "Express.js", "Node.js", "JWT"],
        description: "A comprehensive platform where users can browse, enroll in, and manage their courses. It includes secure Firebase Authentication, JWT-protected API routes, and role-based access control for different user types. MongoDB aggregation pipelines are used to handle complex queries like limited course enrollments.",
        challenges: "The most significant challenge was designing and implementing the role-based access control system to protect routes on both the client and server. Writing efficient MongoDB aggregation queries to calculate available slots and prevent over-enrollment was also a complex task.",
        improvements: "I am planning to add a real-time chat feature for students and instructors, a course rating and review system, and the ability to download course completion certificates.",
        liveLink: "https://coursehub-7fd47.web.app/",
        repoLinks: {
            frontend: "https://github.com/yousufali156/CourseHub-Client",
            backend: "https://github.com/yousufali156/CourseHub-Server",
        },
    },
    {
        id: 4,
        name: "Task Match",
        subtitle: "Freelance Marketplace",
        image: "https://i.ibb.co/LzX2741k/grapes-market-web-app.jpg",
        stack: ["React", "MongoDB", "Firebase", "TailwindCSS", "Express.js"],
        description: "A freelance task marketplace where users can post, manage, and complete tasks. The platform features secure authentication with Firebase, real-time updates for task statuses, and a modern, intuitive user interface built with TailwindCSS.",
        challenges: "Keeping the UI in sync with real-time database changes was a challenge, addressed by strategically refetching data after mutations. Ensuring that only authorized users could modify their own tasks required careful middleware implementation on the backend.",
        improvements: "Future enhancements include a bidding system for tasks, a user reputation and review system, and email notifications for important events like new bids or task completion.",
        liveLink: "https://grapes-market.web.app/",
        repoLinks: {
            frontend: "https://github.com/yousufali156/Task-Match",
            backend: "https://github.com/yousufali156/Task-Match-Server",
        },
    },
    {
        id: 5,
        name: "PortfoGen",
        subtitle: "Portfolio Generator",
        image: "https://i.ibb.co/V0r9DPV9/image.png",
        stack: ["React.js", "GraphQL", "TailwindCSS", "DaisyUI", "Netlify", "Vercel"],
        description: "A dynamic portfolio generator that enables users to create and customize their personal portfolio websites instantly. It features a modular template system, real-time updates, and a simple, user-friendly interface for inputting project and personal data.",
        challenges: "The core challenge was designing a flexible and extensible template system using a component-based architecture that could render different layouts based on user-selected templates. Managing state for the real-time preview was also complex.",
        improvements: "I plan to add a wider variety of templates, allow users to connect their GitHub and LinkedIn profiles for automatic data population, and introduce a feature for custom domain mapping.",
        liveLink: "https://yousuf-portfolio-generator.netlify.app/",
        repoLink: "https://github.com/yousufali156/portfolio-generator",
    },
    {
        id: 6,
        name: "Dragon News",
        subtitle: "Modern News Portal",
        image: "https://i.ibb.co/JFsPHD0L/dragon-news.jpg",
        stack: ["React.js", "Firebase", "React Router", "TailwindCSS", "DaisyUI"],
        description: "A modern and fully responsive news portal with dynamic category-based navigation. It features Firebase authentication supporting multiple providers (Google, GitHub, Facebook), a live time display, and a breaking news marquee. The user interface is built with TailwindCSS and DaisyUI for a clean and smooth experience.",
        challenges: "The primary challenge was managing application state, especially user authentication status, across different routes using React Context. Implementing multiple Firebase authentication providers and handling their different data structures required careful error handling and data normalization.",
        improvements: "Future improvements include adding a comments section for articles, implementing a 'save for later' feature for users, and potentially adding a dark mode toggle.",
        liveLink: "https://dragon-news-y.netlify.app/",
        repoLink: "https://github.com/yousufali156/dragon-news",
    },
];


// --- Main Components ---

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-modal-show" onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-gray-800 dark:text-gray-200" onClick={e => e.stopPropagation()}>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                                {project.name}
                            </h2>
                            <p className="text-md font-medium text-gray-500 dark:text-gray-400">{project.subtitle}</p>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-800 dark:hover:text-white text-3xl">&times;</button>
                    </div>
                    <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg mb-6" />

                    <p className="dark:text-gray-300 mb-6">{project.description}</p>

                    <div className="mb-4">
                        <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Technology Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (<span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full">{tech}</span>))}
                        </div>
                    </div>

                    <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-900/50 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Challenges Faced:</h4>
                        <p className="dark:text-gray-300">{project.challenges}</p>
                    </div>

                    <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-900/50 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Future Improvements:</h4>
                        <p className="dark:text-gray-300">{project.improvements}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105">Live <ExternalLinkIcon /></a>
                        {project.repoLinks ? (
                            <>
                                <a href={project.repoLinks.frontend} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105">Frontend Repo</a>
                                <a href={project.repoLinks.backend} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105">Backend Repo</a>
                            </>
                        ) : (
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105">GitHub Repo</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project, onSelect }) => (

    <div className="relative group w-full h-[520px]">
        {/* Outer animated border */}
        <div className="moving-border rounded-2xl">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl w-full h-full flex flex-col border border-purple-500/20">

                {/* Project Image */}
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-52 object-cover flex-shrink-0 rounded-t-2xl"
                />

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                        {/* Title */}
                        <h3 className="text-xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 h-10 flex items-center justify-center line-clamp-2">
                            {project.name}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-sm text-center font-medium text-blue-300 mb-2 line-clamp-2">
                            {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-center mb-4 text-gray-300 h-[60px] line-clamp-3">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 justify-center h-[52px] overflow-hidden">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 text-xs font-semibold px-2 py-0.5 rounded-full border border-purple-500/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-auto pt-4">
                        <button
                            onClick={() => onSelect(project)}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all shadow-lg hover:scale-105 hover:shadow-2xl hover:from-pink-600 hover:via-purple-700 hover:to-blue-700"
                        >
                            See Details <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [selectedProject, setSelectedProject] = useState(null);

    const visibleProjects = projects.slice(0, visibleCount);

    return (
        <>
            <style>{`
                @keyframes modal-show { 0% { opacity: 0; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1); } }
                .animate-modal-show { animation: modal-show 0.3s ease-out; }
                .line-clamp-1 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; }
                .line-clamp-2 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
                .line-clamp-3 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }

                .moving-border {
                    position: relative;
                    padding: 2px; /* border thickness */
                    background: linear-gradient(270deg, #7f00ff, #e100ff, #00c6ff, #0072ff);
                    background-size: 400% 400%;
                    animation: borderMove 6s linear infinite;
                    border-radius: 1rem; /* rounded-2xl */
                    height: 100%;
                }

                @keyframes borderMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
            <section id="projects" className="py-20 transition-colors duration-300">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-16">

                        <div className="flex justify-center mb-12 font-bold text-xl items-center gap-4">
                            <div className="w-24 h-px bg-base-content"></div>
                            <div className="py-2 px-5 rounded-lg bg-base-200 font-medium">
                                Projects
                            </div>
                            <div className="w-24 h-px bg-base-content"></div>
                        </div>
                        <p className="mt-4 text-lg max-w-3xl mx-auto">Discover my expertly crafted projects that blend creativity, innovation, and user-centered design to elevate brands and digital experiences.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
                        ))}
                    </div>

                    {visibleCount < projects.length && (
                        <div className="text-center mt-12">
                            <button onClick={() => setVisibleCount(projects.length)} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
                                Load More Projects
                            </button>
                        </div>
                    )}

                    {visibleCount === projects.length && projects.length > 3 && (
                        <div className="text-center mt-12">
                            <button onClick={() => setVisibleCount(3)} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
                                Show Less
                            </button>
                        </div>
                    )}
                </div>
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            </section>
        </>
    );
};

export default Projects;

