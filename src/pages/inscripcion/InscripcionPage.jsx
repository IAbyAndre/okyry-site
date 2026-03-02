import { useState } from 'react'
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { CheckCircle2, ChevronRight, Car, ShieldCheck, Clock, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InscripcionPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const submitForm = useMutation(api.submissions.submitForm);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const data = {
            nombre_apellidos: formData.get('nombre_apellidos'),
            telefono: formData.get('telefono'),
            email: formData.get('email'),
            fecha_nacimiento: formData.get('fecha_nacimiento'),
            direccion_actual: formData.get('direccion_actual'),
            anos_experiencia: formData.get('anos_experiencia'),
            detalle_plataforma: formData.get('detalle_plataforma') || "",
            inicio: formData.get('inicio'),
            horarios: formData.getAll('horarios'),
            turnos_prolongados: formData.get('turnos_prolongados'),
            vehiculo_empresa: formData.get('vehiculo_empresa'),
            accidente_previo: formData.get('accidente_previo'),
            detalle_accidente: formData.get('detalle_accidente') || "",
            contrato_responsabilidad: formData.get('contrato_responsabilidad'),
            normas_mantenimiento: formData.get('normas_mantenimiento'),
            acepta_gps: formData.get('acepta_gps'),
            control_combustible: formData.get('control_combustible'),
        };

        try {
            await submitForm(data);
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white rounded-3xl p-12 shadow-xl border border-neutral-100 text-center"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <CheckCircle2 size={40} />
                    </div>
                    <h1 className="text-3xl font-bold text-neutral-900 mb-4">¡Solicitud Enviada!</h1>
                    <p className="text-neutral-500 text-lg mb-8">
                        Gracias por postularte a Okyry. Nuestro equipo revisará tu documentación y te contactará en breve por teléfono o email.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="btn btn-ghost w-full justify-center"
                    >
                        Volver al formulario
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="py-3">
            <div className="mb-20">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[20vw] md:text-[8rem] font-black text-neutral-900 mb-8 leading-[0.9] tracking-tighter"
                >
                    Únete al <br />
                    <span className="text-blue-600">equipo</span> de <br />
                    Okyry.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-4xl text-neutral-400 max-w-4xl leading-tight font-medium"
                >
                    Buscamos conductores profesionales en Malabo. Convierte tu experiencia en ingresos reales. Asegura tu preselección hoy. Plazas limitadas.
                </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Datos Personales */}
                <section className="form-block">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <FileText size={18} />
                        </div>
                        <h2 className="text-xl font-bold">1. Datos personales</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="field">
                            <label htmlFor="nombre_apellidos" className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Nombre y apellidos</label>
                            <input id="nombre_apellidos" name="nombre_apellidos" type="text" required placeholder="Ej: Juan Nguema" className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="telefono" className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Móvil de contacto</label>
                            <input id="telefono" name="telefono" type="tel" required placeholder="222 123 456" className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="email" className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Correo electrónico</label>
                            <input id="email" name="email" type="email" required placeholder="juan@ejemplo.com" className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="fecha_nacimiento" className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Fecha de nacimiento</label>
                            <input
                                id="fecha_nacimiento"
                                name="fecha_nacimiento"
                                type="date"
                                required
                                className="w-full"
                                onClick={(e) => e.target.showPicker?.()}
                            />
                        </div>
                    </div>
                    <div className="field mt-6">
                        <label htmlFor="direccion_actual" className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Dirección en Malabo</label>
                        <input id="direccion_actual" name="direccion_actual" type="text" required placeholder="Barrio, Calle, Nro" className="w-full" />
                    </div>
                </section>

                {/* Section 2: Experiencia */}
                <section className="form-block">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <Car size={18} />
                        </div>
                        <h2 className="text-xl font-bold">2. Experiencia</h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-semibold text-neutral-600 mb-4 font-bold uppercase tracking-widest">Años de experiencia como conductor profesional</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['0-1', '2-3', '4-5', '5+'].map((val) => (
                                    <label key={val} className="flex items-center gap-3 p-4 bg-white rounded-2xl cursor-pointer hover:bg-neutral-50 transition-all border border-neutral-100 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50">
                                        <input type="radio" name="anos_experiencia" value={val} required className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-medium">{val === '5+' ? 'Más de 5 años' : `${val} años`}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="detalle_plataforma" className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Experiencia previa (Taxi, Uber, Empresa, etc.)</label>
                            <input id="detalle_plataforma" name="detalle_plataforma" type="text" placeholder="Describa su experiencia anterior" className="w-full" />
                        </div>
                    </div>
                </section>

                {/* Section 3: Disponibilidad */}
                <section className="form-block">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <Clock size={18} />
                        </div>
                        <h2 className="text-xl font-bold">3. Disponibilidad</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <p className="text-sm font-semibold text-neutral-600 mb-4 font-bold uppercase tracking-widest">¿Cuándo puedes empezar?</p>
                            <div className="space-y-3">
                                {[
                                    { id: 'inmediato', label: 'Inmediato' },
                                    { id: '1_semana', label: 'En 1 semana' },
                                    { id: 'otra_fecha', label: 'Otra fecha' }
                                ].map((opt) => (
                                    <label key={opt.id} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                        <input type="radio" name="inicio" value={opt.id} required className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-medium text-neutral-700">{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-neutral-600 mb-4 font-bold uppercase tracking-widest">Horarios disponibles:</p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { id: 'mananas', label: 'Mañanas' },
                                    { id: 'tardes', label: 'Tardes' },
                                    { id: 'noches', label: 'Noches' },
                                    { id: 'fines_semana', label: 'Fines de semana' }
                                ].map((opt) => (
                                    <label key={opt.id} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                        <input type="checkbox" name="horarios" value={opt.id} className="w-4 h-4 rounded text-blue-600" />
                                        <span className="text-sm font-medium text-neutral-700">{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100">
                        <p className="text-sm font-bold text-neutral-600 mb-6 uppercase tracking-widest">¿Puedes trabajar turnos prolongados si es necesario?</p>
                        <div className="grid grid-cols-2 gap-4">
                            {['si', 'no'].map((opt) => (
                                <label key={opt} className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                    <input type="radio" name="turnos_prolongados" value={opt} required className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm font-bold capitalize">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: Responsabilidad */}
                <section className="form-block">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <ShieldCheck size={18} />
                        </div>
                        <h2 className="text-xl font-bold">4. Responsabilidad con el vehículo</h2>
                    </div>
                    <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                        La seguridad y el cuidado de nuestra flota es nuestra máxima prioridad. Por favor, responde con honestidad.
                    </p>

                    <div className="space-y-8">
                        <div className="question-item">
                            <p className="text-sm font-bold text-neutral-600 mb-4 uppercase tracking-widest">¿Has manejado vehículos de empresa antes?</p>
                            <div className="grid grid-cols-2 gap-4">
                                {['si', 'no'].map((opt) => (
                                    <label key={opt} className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                        <input type="radio" name="vehiculo_empresa" value={opt} required className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-bold capitalize">{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="question-item">
                            <p className="text-sm font-bold text-neutral-600 mb-4 uppercase tracking-widest">¿Alguna vez has tenido un accidente de circulación?</p>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <label className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                        <input type="radio" name="accidente_previo" value="si" required className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-bold">Sí</span>
                                    </label>
                                    <label className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                        <input type="radio" name="accidente_previo" value="no" className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-bold">No</span>
                                    </label>
                                </div>
                                <textarea name="detalle_accidente" rows="2" placeholder="Si respondió Sí, explique brevemente..." className="w-full rounded-2xl border-none bg-white p-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base font-medium placeholder:text-neutral-400"></textarea>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm font-bold text-neutral-600 mb-4 uppercase tracking-widest leading-snug">¿Firma contrato de responsabilidad?</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {['si', 'no'].map((opt) => (
                                        <label key={opt} className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                            <input type="radio" name="contrato_responsabilidad" value={opt} required className="w-4 h-4 text-blue-600" />
                                            <span className="text-sm font-bold capitalize">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-neutral-600 mb-4 uppercase tracking-widest leading-snug">¿Seguir normas de mantenimiento?</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {['si', 'no'].map((opt) => (
                                        <label key={opt} className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                            <input type="radio" name="normas_mantenimiento" value={opt} required className="w-4 h-4 text-blue-600" />
                                            <span className="text-sm font-bold capitalize">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Seguridad y Control */}
                <section className="form-block">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <ShieldCheck size={18} />
                        </div>
                        <h2 className="text-xl font-bold">5. Seguridad y control</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="question-item">
                            <p className="text-sm font-bold text-neutral-600 mb-4 uppercase tracking-widest">¿Aceptas instalación de GPS?</p>
                            <div className="grid grid-cols-2 gap-4">
                                {['si', 'no'].map((opt) => (
                                    <label key={opt} className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                        <input type="radio" name="acepta_gps" value={opt} required className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-bold capitalize">{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="question-item">
                            <p className="text-sm font-bold text-neutral-600 mb-4 uppercase tracking-widest">¿Aceptas controles de combustible?</p>
                            <div className="grid grid-cols-2 gap-4">
                                {['si', 'no'].map((opt) => (
                                    <label key={opt} className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-all has-[:checked]:bg-blue-50 has-[:checked]:border-blue-600">
                                        <input type="radio" name="control_combustible" value={opt} required className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-bold capitalize">{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Documentación */}
                <section className="form-block">
                    <h2 className="text-xl font-bold mb-6">6. Documentación</h2>
                    <div className="bg-white rounded-2xl p-6 mb-8 border border-neutral-200/50">
                        <p className="font-bold mb-4 text-blue-600 flex items-center gap-2 uppercase tracking-widest text-xs">
                            <FileText size={16} /> Documentos requeridos (si eres seleccionado)
                        </p>
                        <ul className="space-y-3 text-sm text-neutral-600 font-medium">
                            <li className="flex items-center gap-3">
                                <ChevronRight size={14} className="text-blue-500" /> DNI o Pasaporte vigente
                            </li>
                            <li className="flex items-center gap-3">
                                <ChevronRight size={14} className="text-blue-500" /> Licencia de Conducir profesional
                            </li>
                            <li className="flex items-center gap-3">
                                <ChevronRight size={14} className="text-blue-500" /> Certificado de Antecedentes penales
                            </li>
                            <li className="flex items-center gap-3">
                                <ChevronRight size={14} className="text-blue-500" /> Foto reciente tipo carnet
                            </li>
                        </ul>
                    </div>

                    <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="pt-1">
                            <input type="checkbox" name="acepta_documentación_posterior" required className="w-5 h-5 rounded border-neutral-300 bg-white text-blue-600 focus:ring-blue-600" />
                        </div>
                        <span className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-900 transition-colors font-medium">
                            Estoy de acuerdo y confirmo que toda la información proporcionada es verídica. Entiendo que la falsificación de datos conlleva la descalificación inmediata.
                        </span>
                    </label>
                </section>

                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full justify-center !py-5 !text-xl shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    {loading ? (
                        <span className="flex items-center gap-3">
                            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando Solicitud...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            Enviar Solicitud Profesional <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    )}
                </button>
            </form>
        </div>
    )
}
