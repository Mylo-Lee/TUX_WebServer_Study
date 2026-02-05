import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">LeeHoGi</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                    A passionate Infrastructure Engineer building beautiful and functional web experiences.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#projects" className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-transform hover:scale-105 shadow-lg shadow-indigo-500/30">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-transform hover:scale-105 shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
