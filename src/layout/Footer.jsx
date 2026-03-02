import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            O
                        </div>
                        <span className="text-xl font-bold tracking-tight">Okyry Cars</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-neutral-400 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-blue-500" />
                            <span>+240 000 000 000</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-blue-500" />
                            <span>info@okyrycars.com</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center">
                    <p>© 2024 Okyry Cars. Malabo, Guinea Ecuatorial.</p>
                    <p>Términos y condiciones de conductor</p>
                </div>
            </div>
        </footer>
    );
}
