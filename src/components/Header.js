import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Wallet } from 'lucide-react';
const Header = ({ title = 'Smart Expense Tracker' }) => {
    return (_jsx("header", { className: "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Wallet, { size: 32 }), _jsx("h1", { className: "text-3xl font-bold", children: title })] }), _jsx("p", { className: "text-blue-100 mt-2", children: "Track your income and expenses with ease" })] }) }));
};
export default Header;
