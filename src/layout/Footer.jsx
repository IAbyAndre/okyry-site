import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                O
                            </div>
                            <span className="text-2xl font-bold tracking-tight">Okyry Cars</span>
                        </Link>
                        <p className="text-neutral-400 leading-relaxed mb-6">
                            Liderando la movilidad inteligente en Malabo, Guinea Ecuatorial. Calidad, seguridad y confort en cada trayecto.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-4 text-neutral-400">
                            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link to="/inscripcion" className="hover:text-white transition-colors">Unirse al equipo</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Seguridad</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-neutral-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
                                <span>Malabo, Guinea Ecuatorial</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-500 shrink-0" />
                                <span>+240 000 000 000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500 shrink-0" />
                                <span>info@okyrycars.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500 text-center">
                    <p>© 2024 Okyry Cars. Todos los derechos reservados.</p>
                    <p>Potenciado por Okyry Technologies</p>
                </div>
            </div>
        </footer>
    );
}
