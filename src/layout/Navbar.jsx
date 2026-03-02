import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100 py-4 shadow-sm">
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110">
                        O
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">Okyry Cars</span>
                </Link>

                <div className="hidden md:block">
                    <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                        Solicitud de Conductor
                    </span>
                </div>

                <Link to="/inscripcion" className="btn btn-primary !py-2 !px-6 !text-sm !rounded-full">
                    Postularse
                </Link>
            </div>
        </nav>
    );
}
