import React from 'react';

const About: React.FC = () => {
    const skills = [
        'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
        'Express', 'MongoDB', 'Docker'
    ];

    return (
        <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img
                            src="../src/images/leehogi.jpg"
                            alt="Developer Profile"
                            className="rounded-lg shadow-xl shadow-indigo-500/20 w-full object-cover aspect-video md:aspect-square"
                        />
                    </div>

                    <div className="md:w-1/2 space-y-6">
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            "I am a junior majoring in Software at Chungbuk National University. I have no hesitation in learning new fields and always strive to explore topics in depth."
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
