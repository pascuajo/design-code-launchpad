import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRouter } from './AppRouter';
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(_jsx(AppRouter, {}));
}
