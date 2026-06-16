import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Trash2, Edit2 } from 'lucide-react';
import { formatCurrency, formatDate } from '../utils';
const TransactionItem = ({ transaction, onDelete, onEdit, }) => {
    return (_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-lg shadow-sm border-l-4 hover:shadow-md transition", style: {
            borderColor: transaction.type === 'income' ? '#10b981' : '#ef4444',
        }, children: [_jsx("div", { className: "flex-1 mb-3 sm:mb-0", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-3 h-3 rounded-full", style: {
                                backgroundColor: transaction.type === 'income' ? '#10b981' : '#ef4444',
                            } }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-gray-900", children: transaction.title }), _jsxs("p", { className: "text-sm text-gray-500", children: [transaction.category, " \u2022 ", formatDate(transaction.date)] }), transaction.note && (_jsx("p", { className: "text-xs text-gray-600 mt-1", children: transaction.note }))] })] }) }), _jsxs("div", { className: "flex items-center justify-between sm:justify-end gap-4", children: [_jsx("div", { className: "text-right", children: _jsxs("p", { className: "text-lg font-bold", style: {
                                color: transaction.type === 'income' ? '#10b981' : '#ef4444',
                            }, children: [transaction.type === 'income' ? '+' : '-', formatCurrency(transaction.amount)] }) }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { onClick: () => onEdit(transaction), className: "text-primary hover:bg-blue-100 p-2 rounded-lg transition", "aria-label": "Edit", children: _jsx(Edit2, { size: 18 }) }), _jsx("button", { onClick: () => onDelete(transaction.id), className: "text-expense hover:bg-red-100 p-2 rounded-lg transition", "aria-label": "Delete", children: _jsx(Trash2, { size: 18 }) })] })] })] }));
};
export default TransactionItem;
