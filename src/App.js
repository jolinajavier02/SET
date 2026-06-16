import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import './App.css';
const App = () => {
    return (_jsxs(BrowserRouter, { children: [_jsx("nav", { className: "sticky top-0 z-50 bg-white shadow-md", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-2 text-primary font-bold text-xl hover:text-blue-600", children: [_jsx(BarChart3, { size: 24 }), "SET"] }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Link, { to: "/", className: "text-gray-700 hover:text-primary font-medium transition", children: "Dashboard" }), _jsx(Link, { to: "/analytics", className: "text-gray-700 hover:text-primary font-medium transition", children: "Analytics" })] })] }) }) }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/analytics", element: _jsx(Analytics, {}) })] })] }));
};
export default App;
