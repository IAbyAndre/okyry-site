import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Inscripción', path: '/inscripcion' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            scrolled ? "bg-white/80 backdrop-blur-xl border-b border-neutral-100 py-4 shadow-sm" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110">
                        O
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">Okyry Cars</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-blue-600 relative py-1",
                                location.pathname === link.path ? "text-blue-600" : "text-neutral-500"
                            )}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                            )}
                        </Link>
                    ))}
                    <Link to="/inscripcion" className="btn btn-primary !py-2 !text-sm !rounded-full">
                        Unirse al equipo
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-neutral-900 p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-white border-b border-neutral-100 shadow-xl"
                    >
                        <div className="p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block text-lg font-medium transition-colors",
                                        location.pathname === link.path ? "text-blue-600" : "text-neutral-900"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/inscripcion"
                                onClick={() => setIsOpen(false)}
                                className="btn btn-primary w-full justify-center !rounded-xl"
                            >
                                Unirse al equipo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
