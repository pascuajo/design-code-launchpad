import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from './Header';
import { Footer } from './Footer';
export function Layout({ children }) {
    return (_jsxs("div", { className: "w-full min-h-screen", children: [_jsx(Header, {}), _jsx("div", { className: "pt-20", children: children }), _jsx(Footer, {})] }));
}
