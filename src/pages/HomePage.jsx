import { motion } from 'framer-motion';

export default function HomePage() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-6xl font-black text-neutral-900 mb-4 tracking-tighter">
                    Okyry <span className="text-blue-600">Cars</span>
                </h1>
                <p className="text-xl text-neutral-400 font-medium uppercase tracking-[0.2em]">
                    Próximamente disponible
                </p>
            </motion.div>
        </div>
    );
}
