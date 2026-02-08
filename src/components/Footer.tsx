import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400">
                <p>&copy; {new Date().getFullYear()} Lee Hogi. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="https://github.com/Mylo-Lee" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">GitHub</a>
                    <a href="https://www.instagram.com/2_ho_gi/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
