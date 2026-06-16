import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { CATEGORIES } from '../utils';
const TransactionForm = ({ onSubmit, initialValues, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState(initialValues
        ? {
            type: initialValues.type,
            title: initialValues.title,
            amount: initialValues.amount.toString(),
            category: initialValues.category,
            date: initialValues.date,
            note: initialValues.note,
        }
        : {
            type: 'expense',
            title: '',
            amount: '',
            category: 'Food',
            date: new Date().toISOString().split('T')[0],
            note: '',
        });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.title || !values.amount) {
            alert('Please fill in all required fields');
            return;
        }
        onSubmit({
            type: values.type,
            title: values.title,
            amount: parseFloat(values.amount),
            category: values.category,
            date: values.date,
            note: values.note,
        });
        setValues({
            type: 'expense',
            title: '',
            amount: '',
            category: 'Food',
            date: new Date().toISOString().split('T')[0],
            note: '',
        });
        setIsOpen(false);
    };
    return (_jsx("div", { children: !isOpen ? (_jsxs("button", { onClick: () => setIsOpen(true), className: "bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition", children: [_jsx(Plus, { size: 20 }), "Add Transaction"] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "bg-white rounded-lg shadow-md p-6 mb-6", children: [_jsx("h2", { className: "text-xl font-bold mb-6 text-gray-900", children: initialValues ? 'Edit Transaction' : 'Add New Transaction' }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Type *" }), _jsxs("select", { name: "type", value: values.type, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary", children: [_jsx("option", { value: "expense", children: "Expense" }), _jsx("option", { value: "income", children: "Income" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Title *" }), _jsx("input", { type: "text", name: "title", value: values.title, onChange: handleChange, placeholder: "Enter transaction title", className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Amount *" }), _jsx("input", { type: "number", name: "amount", value: values.amount, onChange: handleChange, placeholder: "0.00", step: "0.01", min: "0", className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Category" }), _jsx("select", { name: "category", value: values.category, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary", children: CATEGORIES.map((cat) => (_jsx("option", { value: cat, children: cat }, cat))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Date" }), _jsx("input", { type: "date", name: "date", value: values.date, onChange: handleChange, className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Note" }), _jsx("textarea", { name: "note", value: values.note, onChange: handleChange, placeholder: "Add a note (optional)", rows: 3, className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" })] }), _jsxs("div", { className: "flex gap-3", children: [_jsxs("button", { type: "submit", className: "bg-primary hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition", children: [initialValues ? 'Update' : 'Add', " Transaction"] }), _jsx("button", { type: "button", onClick: () => setIsOpen(false), className: "bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-2 px-6 rounded-lg transition", children: "Cancel" })] })] })) }));
};
export default TransactionForm;
