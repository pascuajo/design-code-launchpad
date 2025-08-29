import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!loading && !user) {
            navigate('/auth');
        }
    }, [user, loading, navigate]);
    if (loading) {
        return (_jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: _jsx("div", { className: "text-foreground", children: "Loading..." }) }));
    }
    if (!user) {
        return null;
    }
    return _jsx(_Fragment, { children: children });
}
