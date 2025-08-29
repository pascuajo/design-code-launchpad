import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { BlogPage } from './components/blog/BlogPage';
import { BlogPostDetail } from './components/blog/BlogPostDetail';
import { BookClubPage } from './components/book-club/BookClubPage';
import { Layout } from './components/Layout';
import { AuthPage } from './components/auth/AuthPage';
import { BlogAdmin } from './components/admin/BlogAdmin';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';
export function AppRouter() {
    return (_jsx(AuthProvider, { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(App, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Layout, { children: _jsx(BlogPage, {}) }) }), _jsx(Route, { path: "/blog/:slug", element: _jsx(Layout, { children: _jsx(BlogPostDetail, {}) }) }), _jsx(Route, { path: "/book-club", element: _jsx(Layout, { children: _jsx(BookClubPage, {}) }) }), _jsx(Route, { path: "/auth", element: _jsx(AuthPage, {}) }), _jsx(Route, { path: "/admin", element: _jsx(ProtectedRoute, { children: _jsx(BlogAdmin, {}) }) })] }) }) }));
}
