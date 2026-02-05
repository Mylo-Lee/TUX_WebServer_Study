import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Reneevontable Website Development",
            description: "A comprehensive dashboard for managing products, orders, and analytics. Built with React and Recharts.",
            tags: ["React", "Tailwind", "Recharts"],
            image: "../src/images/Reneevontable.png",
            link: "#",
            github: "https://github.com/Mylo-Lee/Reneevon_Web"
        },
        {
            title: "National Assembly in our hand",
            description: "A real-time social platform with chat, posts, and notifications. Features optimistic UI updates.",
            tags: ["Next.js", "Prisma", "Socket.io"],
            image: "../src/images/Operis.png",
            link: "#",
            github: "https://github.com/Mylo-Lee/Operis-project"
        },
        /*{
            title: "Task Management Tool",
            description: "Collaborative task manager with drag-and-drop kanban boards and team workspaces.",
            tags: ["TypeScript", "Redux", "DND"],
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "#",
            github: "#"
        }*/
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/50">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-800 flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors">
                                        Live Demo
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        GitHub
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
