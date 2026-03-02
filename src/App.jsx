import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import InscripcionPage from './pages/inscripcion/InscripcionPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Redirect home to inscription */}
                <Route index element={<Navigate to="/inscripcion" replace />} />
                <Route path="inicio" element={<HomePage />} />
                <Route path="inscripcion" element={<InscripcionPage />} />
                {/* Fallback for any other route */}
                <Route path="*" element={<Navigate to="/inscripcion" replace />} />
            </Route>
        </Routes>
    );
}

export default App;
