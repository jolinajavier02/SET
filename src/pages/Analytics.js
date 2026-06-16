import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
import { ArrowLeft } from 'lucide-react';
import { Header } from '../components';
import { getMonthlySummary, getCategoryBreakdown, calculateTotalIncome, calculateTotalExpense, } from '../utils';
const COLORS = [
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#ef4444',
    '#8b5cf6',
    '#ec4899',
    '#06b6d4',
    '#f97316',
];
const Analytics = () => {
    // Sample transactions
    const [transactions] = useState([
        {
            id: '1',
            type: 'income',
            title: 'Monthly Salary',
            amount: 3000,
            category: 'Salary',
            date: '2024-01-01',
            note: 'January salary',
        },
        {
            id: '2',
            type: 'expense',
            title: 'Groceries',
            amount: 150,
            category: 'Food',
            date: '2024-01-02',
            note: 'Weekly groceries',
        },
        {
            id: '3',
            type: 'expense',
            title: 'Gas',
            amount: 50,
            category: 'Transport',
            date: '2024-01-03',
            note: 'Weekly fuel',
        },
        {
            id: '4',
            type: 'expense',
            title: 'Restaurant',
            amount: 75,
            category: 'Food',
            date: '2024-01-04',
            note: 'Dinner with friends',
        },
        {
            id: '5',
            type: 'income',
            title: 'Freelance Project',
            amount: 500,
            category: 'Freelance',
            date: '2024-01-05',
            note: 'Web design project',
        },
        {
            id: '6',
            type: 'expense',
            title: 'Electricity Bill',
            amount: 120,
            category: 'Bills',
            date: '2024-01-06',
            note: 'Monthly electricity',
        },
        {
            id: '7',
            type: 'expense',
            title: 'Medical Checkup',
            amount: 200,
            category: 'Health',
            date: '2024-01-07',
            note: 'Annual checkup',
        },
        {
            id: '8',
            type: 'expense',
            title: 'Movie Tickets',
            amount: 30,
            category: 'Entertainment',
            date: '2024-01-08',
            note: 'Cinema with family',
        },
        {
            id: '9',
            type: 'expense',
            title: 'New Shoes',
            amount: 120,
            category: 'Shopping',
            date: '2024-01-09',
            note: 'Athletic shoes',
        },
        {
            id: '10',
            type: 'expense',
            title: 'Internet Bill',
            amount: 60,
            category: 'Bills',
            date: '2024-01-10',
            note: 'Monthly internet',
        },
    ]);
    const monthlySummary = getMonthlySummary(transactions);
    const categoryBreakdown = getCategoryBreakdown(transactions);
    // Format data for monthly chart
    const monthlyData = Object.entries(monthlySummary).map(([month, data]) => ({
        month,
        income: data.income,
        expense: data.expense,
    }));
    // Format data for category pie chart
    const categoryData = Object.entries(categoryBreakdown).map(([category, amount]) => ({
        name: category,
        value: amount,
    }));
    const totalIncome = calculateTotalIncome(transactions);
    const totalExpense = calculateTotalExpense(transactions);
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(Header, { title: "Smart Expense Tracker" }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [_jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-primary hover:text-blue-600 mb-6", children: [_jsx(ArrowLeft, { size: 20 }), "Back to Dashboard"] }), _jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Analytics & Reports" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [_jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [_jsx("p", { className: "text-gray-600 text-sm font-medium", children: "Total Income" }), _jsxs("p", { className: "text-3xl font-bold text-income mt-2", children: ["$", totalIncome.toFixed(2)] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [_jsx("p", { className: "text-gray-600 text-sm font-medium", children: "Total Expenses" }), _jsxs("p", { className: "text-3xl font-bold text-expense mt-2", children: ["$", totalExpense.toFixed(2)] })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 mb-8", children: [_jsx("h2", { className: "text-xl font-bold text-gray-900 mb-6", children: "Monthly Trend" }), monthlyData.length > 0 ? (_jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: monthlyData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "month" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Bar, { dataKey: "income", fill: "#10b981" }), _jsx(Bar, { dataKey: "expense", fill: "#ef4444" })] }) })) : (_jsx("p", { className: "text-gray-600", children: "No data available" }))] }), _jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [_jsx("h2", { className: "text-xl font-bold text-gray-900 mb-6", children: "Category Breakdown" }), categoryData.length > 0 ? (_jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: categoryData, cx: "50%", cy: "50%", labelLine: false, label: ({ name, value }) => `${name}: $${value.toFixed(2)}`, outerRadius: 100, fill: "#8884d8", dataKey: "value", children: categoryData.map((entry, index) => (_jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`))) }), _jsx(Tooltip, {})] }) })) : (_jsx("p", { className: "text-gray-600", children: "No data available" }))] })] })] }));
};
export default Analytics;
