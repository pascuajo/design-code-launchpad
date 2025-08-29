import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useFonts } from '../../hooks/useFonts';
export function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signIn, signUp } = useAuth();
    const navigate = useNavigate();
    const h1Font = useFonts('auth', 'h1');
    const buttonFont = useFonts('auth', 'button');
    const labelFont = useFonts('auth', 'label');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const { error } = isLogin
                ? await signIn(email, password)
                : await signUp(email, password);
            if (error) {
                setError(error.message);
            }
            else {
                navigate('/admin');
            }
        }
        catch (err) {
            setError('An unexpected error occurred');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-4 auth-page", "data-component": "auth", children: _jsx("div", { className: "w-full max-w-md", children: _jsxs("div", { className: "bg-card rounded-lg shadow-lg p-8", children: [_jsx("h1", { className: "text-2xl font-bold text-center mb-8 text-foreground auth", style: h1Font.getFontStyle(), children: isLogin ? 'Sign In' : 'Sign Up' }), error && (_jsx("div", { className: "bg-destructive/10 text-destructive p-3 rounded-md mb-4 text-sm", children: error })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-foreground mb-1 auth", style: labelFont.getFontStyle(), children: "Email" }), _jsx("input", { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "Enter your email" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-foreground mb-1 auth", style: labelFont.getFontStyle(), children: "Password" }), _jsx("input", { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "Enter your password" })] }), _jsx("button", { type: "submit", disabled: loading, className: "w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50", style: buttonFont.getFontStyle(), children: loading ? 'Loading...' : (isLogin ? 'Sign In' : 'Sign Up') })] }), _jsx("div", { className: "mt-6 text-center", children: _jsx("button", { onClick: () => setIsLogin(!isLogin), className: "text-primary hover:underline text-sm", style: buttonFont.getFontStyle(), children: isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in' }) })] }) }) }));
}
