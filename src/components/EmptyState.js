import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Inbox } from 'lucide-react';
const EmptyState = ({ title = 'No transactions found', message = 'Start by adding your first transaction to get started!', }) => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-md", children: [_jsx(Inbox, { className: "text-gray-400 mb-4", size: 48 }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: title }), _jsx("p", { className: "text-gray-600 text-center max-w-md", children: message })] }));
};
export default EmptyState;
